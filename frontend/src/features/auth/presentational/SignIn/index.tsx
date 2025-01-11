import { Control, UseFormHandleSubmit } from "react-hook-form";
import { SignInFormSchema } from "@/features/auth/hooks/useSignInForm";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import InputField from "@/components/Form/InputField";
import LockOpenIcon from "@mui/icons-material/LockOpen";

type SignInProps = {
  control: Control<SignInFormSchema>;
  handleSubmit: UseFormHandleSubmit<SignInFormSchema>;
};

export default function SignIn({ control, handleSubmit }: SignInProps) {
  const onSubmit = (data: SignInFormSchema) => console.log(data);

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
        <Avatar sx={{ mb: 1, bgcolor: "primary.main" }}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField<SignInFormSchema>
            fieldWrapperProps={{ label: "メールアドレス", required: true }}
            name="email"
            control={control}
            type="email"
            placeholder="sample@example.com"
            sx={{ mb: 2 }}
          />

          <InputField<SignInFormSchema>
            fieldWrapperProps={{ label: "パスワード", required: true }}
            name="password"
            control={control}
            type="password"
            sx={{ mb: 2 }}
          />

          <Box sx={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" fullWidth>
              ログイン
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
