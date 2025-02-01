import { z } from "zod";
import {failedConfirmError, label, minLengthError, requiredError, typeError} from "@/libs/zod/messages";

export const accountCreateSchema = z.object({
    email: z.string({ required_error: requiredError(label.email) }).email({ message: typeError(label.email)}),
    password: z.string().min(8, { message: minLengthError(label.password, 8) }),
    passwordConfirmation: z.string()
}).refine(data => data.password === data.passwordConfirmation, {
    message: failedConfirmError(label.password),
    path: ["passwordConfirmation"]
})

export type AccountCreateForm = z.infer<typeof accountCreateSchema>