import { z } from "zod";
import {label, minLengthError, requiredError, typeError} from "@/libs/zod/messages";


export const loginSchema = z.object({
    email: z.string({ required_error: requiredError(label.email) }).email({ message: typeError(label.email) }),
    password: z.string().min(8, { message: minLengthError(label.password, 8) }),
})

export type LoginForm = z.infer<typeof loginSchema>