import {useForm} from "react-hook-form";
import {type AccountCreateForm, accountCreateSchema} from "@/features/auth/schemas/auth/account-create-schema";
import {zodResolver} from "@hookform/resolvers/zod";

export const useAccountCreateForm = () => {
    const { control, handleSubmit, formState } = useForm<AccountCreateForm>({
        mode: "onSubmit",
        reValidateMode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
        },
        resolver: zodResolver(accountCreateSchema),
    })

    return {
        control,
        handleSubmit,
        errors: formState.errors
    }
}

