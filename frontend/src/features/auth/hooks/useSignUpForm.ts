import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateUser } from "@/hooks/api/useAuth";
import { useCallback } from "react";

export const useSignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const { trigger } = useCreateUser();
  const postSignUp = useCallback(async (args: SignUpFormSchema) => {
    await trigger(args)
  }, [trigger]);

  return { control, handleSubmit, errors, postSignUp };
};

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
});

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
