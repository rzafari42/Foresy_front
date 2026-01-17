import { z } from "zod";

export const signInSchema = z.object({
    email: z.email({ message: "Email invalide" }),
    password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
});

export const signUpSchema = z.object({
        firstName: z.string().min(1, { message: "Le prénom est requis" }),
        lastName: z.string().min(1, { message: "Le nom est requis" }),
        email: z.email({ message: "Email invalide" }),
        password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
        confirmPassword: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    })

export const forgotPasswordSchema = z.object({
    email: z.email({ message: "Email invalide" }),
})

export type SignInInputs = z.infer<typeof signInSchema>;
export type SignUpInputs = z.infer<typeof signUpSchema>;
export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>;