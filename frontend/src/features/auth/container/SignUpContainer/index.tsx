import SignUp from "@/features/auth/presentational/SignUp";
import { useSignUpForm } from "@/features/auth/hooks/useSignUpForm";

export default function SignUpContainer() {
  const { control, handleSubmit } = useSignUpForm();

  return <SignUp control={control} handleSubmit={handleSubmit} />;
}
