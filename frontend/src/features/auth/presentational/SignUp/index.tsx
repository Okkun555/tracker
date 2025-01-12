import InputField from "@/components/Form/InputField";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Control, UseFormHandleSubmit } from "react-hook-form";
import { SignUpFormSchema } from "@/features/auth/hooks/useSignUpForm";

type SignUpProps = {
  control: Control<SignUpFormSchema>;
  handleSubmit: UseFormHandleSubmit<SignUpFormSchema>;
};

export default function SignUp({ control, handleSubmit }: SignUpProps) {
  const onSubmit = (data: SignUpFormSchema) => console.log(data);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Avatar sx={{ mb: 1, bgcolor: "primary.main" }} />
        <Typography component="h1" variant="h5">
          アカウント作成
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField<SignUpFormSchema>
            fieldWrapperProps={{ label: "メールアドレス", required: true }}
            name="email"
            control={control}
            type="email"
            placeholder="sample@example.com"
            sx={{ mb: 2 }}
          />

          <InputField<SignUpFormSchema>
            fieldWrapperProps={{ label: "パスワード", required: true }}
            name="password"
            control={control}
            type="password"
            sx={{ mb: 2 }}
          />

          <InputField<SignUpFormSchema>
            fieldWrapperProps={{
              label: "パスワード（確認）",
              required: true,
            }}
            name="passwordConfirmation"
            control={control}
            type="password"
            sx={{ mb: 2 }}
          />

          <Box sx={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" fullWidth>
              アカウント作成
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
