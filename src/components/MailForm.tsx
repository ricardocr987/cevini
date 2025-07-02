'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TextArea } from './ui/textArea';
import { Checkbox } from './ui/checkbox';
import { FormField, FormControl, Form, FormItem, FormLabel, FormMessage } from './ui/form';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { TermsAndConditionsModal } from './TermsAndConditionsModal';

const formSchema = z.object({
    email: z.string()
             .email({ message: "Correo electrónico inválido" })
             .min(1, { message: "El correo es obligatorio" }),
    name: z.string()
            .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
            .max(50, { message: "El nombre no puede exceder 50 caracteres" }),
    text: z.string()
           .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
           .max(1000, { message: "El mensaje no puede exceder 1000 caracteres" }),
    approvedNewsletter: z.boolean().default(false),
    approvedTerms: z.boolean()
                    .refine((val) => val, { 
                        message: "Debes aceptar los términos y condiciones" 
                    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function MailForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [termsOpen, setTermsOpen] = useState(false);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            name: '',
            text: '',
            approvedNewsletter: false,
            approvedTerms: false
        },
    });

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.status === 'Success') {
                toast({
                    title: "Mensaje enviado",
                    description: "Nos pondremos en contacto contigo lo antes posible",
                });
                form.reset();
            } else {
                throw new Error(result.message || "Error al enviar el mensaje");
            }
        } catch (error) {
            console.error('Error in form submission:', error);
            toast({
                title: "Error al enviar mensaje",
                description: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Nombre"
                                    disabled={isSubmitting}
                                    className="bg-neutral-900/50 border-0 text-white placeholder:text-white/70 focus-visible:ring-white/20"
                                />
                            </FormControl>
                            <FormMessage className="text-red-200" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="Correo electrónico"
                                    disabled={isSubmitting}
                                    className="bg-neutral-900/50 border-0 text-white placeholder:text-white/70 focus-visible:ring-white/20"
                                />
                            </FormControl>
                            <FormMessage className="text-red-200" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <TextArea
                                    {...field}
                                    placeholder="Mensaje"
                                    disabled={isSubmitting}
                                    className="bg-neutral-900/50 border-0 text-white placeholder:text-white/70 focus-visible:ring-white/20 min-h-[120px]"
                                />
                            </FormControl>
                            <FormMessage className="text-red-200" />
                        </FormItem>
                    )}
                />

                {/*<FormField
                    control={form.control}
                    name="approvedNewsletter"
                    render={({ field }) => (
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    disabled={isSubmitting}
                                    className="bg-neutral-900/50 border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-orange-600"
                                />
                            </FormControl>
                            <FormLabel className="text-sm text-white font-normal leading-none cursor-pointer">
                                Deseo recibir noticias y ofertas
                            </FormLabel>
                        </FormItem>
                    )}
                />*/}

                <FormField
                    control={form.control}
                    name="approvedTerms"
                    render={({ field }) => (
                        <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    disabled={isSubmitting}
                                    className="bg-neutral-900/50 border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-orange-600"
                                />
                            </FormControl>
                            <div className="space-y-1">
                                <FormLabel className="text-sm text-white font-normal leading-none">
                                    Acepto los{" "}
                                    <button
                                        type="button"
                                        onClick={() => setTermsOpen(true)}
                                        className="underline hover:text-neutral-300 transition-colors"
                                    >
                                        términos y condiciones
                                    </button>
                                </FormLabel>
                                <FormMessage className="text-red-200" />
                            </div>
                        </FormItem>
                    )}
                />

                <TermsAndConditionsModal 
                    open={termsOpen} 
                    onOpenChange={setTermsOpen} 
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 text-white transition-colors mt-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar mensaje'
                    )}
                </Button>
            </form>
        </Form>
    );
}