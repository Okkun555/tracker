import {Control, UseFormHandleSubmit} from "react-hook-form";
import {AccountCreateForm} from "@/features/auth/schemas/auth/account-create-schema";
import AuthCard from "@/features/auth/presentational/AuthCard";
import {Avatar, Box, Button, styled, Typography} from "@mui/material";
import InputField from "@/components/forms/InputField";
import Link from "next/link";

type AccountCreateProps = {
    control: Control<AccountCreateForm>
    handleSubmit: UseFormHandleSubmit<AccountCreateForm>
    onSubmit: (params: AccountCreateForm) => Promise<void>
}

export default function AccountCreate({
    control,
    handleSubmit,
    onSubmit
}: AccountCreateProps) {
    return (
        <AuthCard>
            <Avatar sx={{ mb: 1, bgcolor: "primary.main" }} />
            <Typography component="h1" variant="h5">アカウント作成</Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
            >
                <InputField<AccountCreateForm>
                    fieldWrapperProps={{ label: "メールアドレス", required: true }}
                    name="email"
                    control={control}
                    type="email"
                    placeholder="sample@example.com"
                    sx={{ mb: 2 }}
                />

                <InputField<AccountCreateForm>
                    fieldWrapperProps={{ label: "パスワード", required: true }}
                    name="password"
                    control={control}
                    type="password"
                    sx={{ mb: 2 }}
                />

                <InputField<AccountCreateForm>
                    fieldWrapperProps={{ label: "パスワード確認", required: true }}
                    name="passwordConfirmation"
                    control={control}
                    type="password"
                    sx={{ mb: 2 }}
                />

                <Box sx={{ textAlign: "center" }}>
                    <Button type="submit" variant="contained" fullWidth>新規登録</Button>
                </Box>
            </Box>

            <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                sx={{ mt: 2 }}
            >
                アカウントをお持ちの方は
                <SignInLink href="/account/login">こちら</SignInLink>
            </Typography>
        </AuthCard>
    )
}

const SignInLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
}));