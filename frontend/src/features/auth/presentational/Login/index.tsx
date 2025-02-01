import {Control, UseFormHandleSubmit} from "react-hook-form";
import {type LoginForm} from "@/features/auth/schemas/auth/login-schema";
import AuthCard from "@/features/auth/presentational/AuthCard";
import {Avatar, Box, Button, styled, Typography} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InputField from "@/components/forms/InputField";
import Link from "next/link";

type LoginProps = {
    control: Control<LoginForm>
    handleSubmit: UseFormHandleSubmit<LoginForm>
    onSubmit: (params: LoginForm) => Promise<void>
}

export default function Login({
    control,
    handleSubmit,
    onSubmit,
}: LoginProps) {
    return (
        <AuthCard>
            <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>
                <LockOpenIcon />
            </Avatar>
            <Typography component="h1" variant="h5">ログイン</Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
            >
                <InputField<LoginForm>
                    fieldWrapperProps={{ label: "メールアドレス", required: true }}
                    name="email"
                    control={control}
                    type="email"
                    placeholder="sample@example.com"
                    sx={{ mb: 2 }}
                />

                <InputField<LoginForm>
                    fieldWrapperProps={{ label: "パスワード", required: true }}
                    name="password"
                    control={control}
                    type="password"
                    sx={{ mb: 2 }}
                />

                <Box sx={{ textAlign: "center" }}>
                    <Button type="submit" variant="contained" fullWidth>ログイン</Button>
                </Box>

                <Typography
                    variant="body2"
                    color="textSecondary"
                    align="center"
                    sx={{ mt: 2 }}
                >
                    アカウントをお持ちでない方は
                    <SignUpLink href="/account/new">こちら</SignUpLink>
                </Typography>
            </Box>
        </AuthCard>
    )
}

const SignUpLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
}));