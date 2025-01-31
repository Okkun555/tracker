import { z } from "zod";

export const accountCreateSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirmation: z.string().min(8),
})

export type AccountCreateForm = z.infer<typeof accountCreateSchema>