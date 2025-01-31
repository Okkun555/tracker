import {useAccountCreateForm} from "@/features/auth/hooks/useAccountCreateForm";
import {useCallback} from "react";
import {AccountCreateForm} from "@/features/auth/schemas/auth/account-create-schema";
import AccountCreate from "@/features/auth/presentational/AccountCreate";
import {useCreateAccount} from "@/hooks/api/useAuth";
import {useRouter} from "next/router";


export default function AccountCreateContainer() {
    const { control, handleSubmit } = useAccountCreateForm()
    const router = useRouter()

    const { trigger: postCreateAccount } = useCreateAccount();

    const onSubmit = useCallback(async (params: AccountCreateForm) => {
        await postCreateAccount(params)
        await router.push("/profiles/new")
    }, [postCreateAccount, router])

    return <AccountCreate control={control} handleSubmit={handleSubmit} onSubmit={onSubmit} />
}