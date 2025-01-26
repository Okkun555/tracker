import SignUp from "@/features/auth/presentational/SignUp";
import {SignUpFormSchema, useSignUpForm} from "@/features/auth/hooks/useSignUpForm";
import {useCallback} from "react";

export default function SignUpContainer() {
  const { control, handleSubmit, postSignUp } = useSignUpForm();

  const onSubmit = useCallback(async (params: SignUpFormSchema) => {
    await postSignUp(params)
    console.log("onSubmit")
  }, [postSignUp])

  return <SignUp control={control} handleSubmit={handleSubmit} onSubmit={onSubmit} />;
}
