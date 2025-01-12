import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useSignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  return { control, handleSubmit, errors };
};

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
