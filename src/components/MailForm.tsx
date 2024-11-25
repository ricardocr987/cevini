'use client'
// https://github.com/cosdensolutions/code/tree/master/videos/long/reusable-create-edit-form
// https://ui.shadcn.com/docs/components/checkbox#form

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { TextArea } from './ui/textArea';
import { Checkbox } from './ui/checkbox';
import { FormField, FormControl, Form, FormItem, FormLabel } from './ui/form';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

const formSchema = z.object({
    email: z.string()
             .email({ message: "Correo inválido" }),
    name: z.string()
            .min(2, { message: "Introduce tu nombre" }),
    text: z.string(),
    approvedNewsletter: z.boolean(),
    approvedTerms: z.boolean()
                    .refine((val: boolean) => val, { message: "Debes aceptar los términos y condiciones." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function MailForm() {
    const [modalOpen, setModalOpen] = useState(false);
    const handleTermsClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        setModalOpen(true);
    };

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

    async function onSubmit(data: FormValues): Promise<void> {
        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (result.status === 'Success') {
                toast({
                    title: "Mensaje enviado",
                    description: "Contestaremos lo antes posible",
                });
            } else {
                toast({
                    title: "Error al enviar mensaje",
                    description: result.message || "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
                });
            }
        } catch (error) {
            toast({
                title: "Error al enviar mensaje",
                description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
            });
        }
    }

    const showErrorMessages = () => {
        return Object.values(form.formState.errors)
            .map(error => error?.message)
            .filter(Boolean)
            //.filter(message => message !== "Expected boolean, received string") // checkbox default value can be this string
            .join(' | ');
    };

    return (
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white">
            <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-72 md:w-96">
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} id="name" placeholder="Nombre" />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input {...field} id="email" type="email" placeholder="Correo" />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="text" render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <TextArea {...field} id="text" placeholder="Mensaje" />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="approvedNewsletter" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-y-0">
                            <FormControl>
                                <Checkbox 
                                    checked={field.value as boolean}
                                    onCheckedChange={field.onChange}
                                    className='mr-2'
                                />
                            </FormControl>
                            <FormLabel>Acepto recibir ofertas y noticias</FormLabel>
                        </FormItem>
                    )}/>
                    <FormField control={form.control} name="approvedTerms" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-y-0">
                            <FormControl>
                                <Checkbox 
                                    checked={field.value  as boolean}
                                    onCheckedChange={field.onChange}
                                    className='mr-2'
                                />
                            </FormControl>
                            <FormLabel>
                                Acepto los
                                <span
                                    onClick={handleTermsClick}
                                    className="ml-1 underline underline-offset-2 cursor-pointer"
                                >
                                    términos y condiciones
                                </span>
                            </FormLabel>
                        </FormItem>
                    )}/>
                    <Button type="submit" className="w-full">Enviar</Button>
                    <p className="text-red-800 text-xs text-center">{showErrorMessages()}</p>
                </form>
            </Form>
            {/*<Modal
                modalStatus={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <p>Contenido de los términos y condiciones...</p>
            </Modal>*/}
        </div>
    );
}