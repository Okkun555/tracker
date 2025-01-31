import {useForm} from "react-hook-form";
import {LoginForm, loginSchema} from "@/features/auth/schemas/auth/login-schema";
import {zodResolver} from "@hookform/resolvers/zod";

export const useLoginForm = () => {
    const { control, handleSubmit } = useForm<LoginForm>({
        mode: "onSubmit",
        reValidateMode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(loginSchema)
    })

    return { control, handleSubmit }
}