import {useLoginForm} from "@/features/auth/hooks/useLoginForm";
import {useRouter} from "next/router";
import {useLogin} from "@/hooks/api/useAuth";
import {useCallback} from "react";
import {LoginForm} from "@/features/auth/schemas/auth/login-schema";
import Login from "@/features/auth/presentational/Login";

export default function LoginContainer() {
    const { control, handleSubmit } = useLoginForm()
    const router = useRouter()

    const { trigger: postLogin } = useLogin()

    const onSubmit = useCallback(async (params: LoginForm) => {
        await postLogin(params)
        console.log('個人ページへ遷移')
        // TODO: 遷移時にIDを渡せるようにする
        await router.push('/')
    }, [postLogin, router])

    return <Login control={control} handleSubmit={handleSubmit} onSubmit={onSubmit} />
}