import React, {createContext, ReactNode, useState} from "react";

type User = {
    isLoggedIn: boolean;
    name: string | null;
    email: string | null;
    avatar: string | null;
}

type UserContextType = {
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: { children: ReactNode}) => {
    const [user, setUser] = useState<User>({
        isLoggedIn: false,
        name: null,
        email: null,
        avatar: null,
    })

    return <UserContext value={{ user, setUser }}>{children}</UserContext>
}