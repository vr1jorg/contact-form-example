import { z } from 'zod';

export const contactFormSchema = z.object({
    fullName: z.string().min(3, 'Ingresa un nombre válido'),
    phone: z.string().min(9, 'Ingresa un número válido'),
    email: z.email({ message: "Ingresa un correo válido" }).or(z.literal("")),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>;

