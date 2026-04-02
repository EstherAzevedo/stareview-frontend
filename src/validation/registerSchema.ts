import { z } from 'zod'

export const registerSchema = z.object({
    name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .min(3, 'Mínimo 3 caracteres'),

  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email inválido'),

    password: z
        .string()
        .min(1, 'Senha é obrigatória')
        .min(6, 'Mínimo 6 caracteres'),

    confirmPassword: z
        .string()
        .min(1, 'Confirmação de senha é obrigatória')
        .min(6, 'Mínimo 6 caracteres')
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"], 
    });