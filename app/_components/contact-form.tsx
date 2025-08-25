"use client"

import { useForm, UseFormRegister } from "react-hook-form";
import { contactFormSchema, ContactFormValues } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitForm } from "../actions";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        mode: "onChange"
    });

    async function onSubmit(data: ContactFormValues) {
        submitForm(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-md mx-auto pt-[60px]">
            <Field name="fullName" label="Nombre completo" placeholder="Ingresa tu nombre completo" register={register} error={errors["fullName"]?.message} />

            <Field name="phone" label="Teléfono" placeholder="Ingresa tu teléfono" register={register} error={errors["phone"]?.message} />

            <Field name="email" label="Correo electrónico" placeholder="Ingresa tu correo electrónico" register={register} error={errors["email"]?.message} />

            <button disabled={!isValid} className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-stone-300 disabled:cursor-not-allowed">Enviar</button>
        </form>
    )
}

interface FieldProps {
    label: string;
    placeholder: string,
    type?: string;
    name: string;
    register: UseFormRegister<ContactFormValues>;
    error?: string;
}

function Field({ label, type = "text", name, register, error, placeholder }: FieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input placeholder={placeholder} type={type} className="p-2 border-2 border-gray-300 rounded-md" {...register(name as keyof ContactFormValues)} />
            {error ? <span className="text-red-500">{error}</span> : null}
        </div>
    )
}
