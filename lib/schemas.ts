import { z } from "zod";

export const signupSchema = z.object({
    email: z.email({ message: "Email invalide" }),
    password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
})

export const forgotPasswordSchema = z.object({
    email: z.email({ message: "Email invalide" }),
})


export type SignUpInputs = z.infer<typeof signupSchema>;
export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;