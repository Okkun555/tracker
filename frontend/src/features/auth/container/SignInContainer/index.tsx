import { useSignInForm } from "../../hooks/useSignInForm";
import SignIn from "@/features/auth/presentational/SignIn";

export default function SignInContainer() {
  const { control, handleSubmit } = useSignInForm();

  return <SignIn control={control} handleSubmit={handleSubmit} />;
}
