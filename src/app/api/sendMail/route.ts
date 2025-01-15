import { EmailTemplate } from "@/components/MailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    if (!process.env.RESEND_API_KEY || !process.env.COMPANY_MAIL) {
        console.error('Missing environment variables');
        return NextResponse.json(
            { status: 'Error', message: 'Configuration error' },
            { status: 500 }
        );
    }

    try {
        const body = await req.json();
        const { email, name, text, approvedNewsletter } = body;

        // Validate required fields
        if (!email || !name || !text) {
            return NextResponse.json(
                { status: 'Error', message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailData = await resend.emails.send({
            from: "Contacto Web <contacto@cevini.es>",
            to: [process.env.COMPANY_MAIL],
            subject: `Nuevo mensaje de ${name} - Formulario Web`,
            react: EmailTemplate({ 
                firstName: name,
                email: email,
                message: text,
                approvedNewsletter
            }),
        });

        if (emailData.error) {
            console.error('Error sending email:', emailData.error);
            return NextResponse.json(
                { status: 'Error', message: 'Error al enviar el mensaje' },
                { status: 500 }
            );
        }

        // Optional: Add to newsletter if approved
        if (approvedNewsletter && process.env.AUDIENCE_ID) {
            try {
                await resend.contacts.create({
                    email: email,
                    firstName: name.split(' ')[0],
                    lastName: name.split(' ').slice(1).join(' ') || '',
                    unsubscribed: false,
                    audienceId: process.env.AUDIENCE_ID,
                });
            } catch (error) {
                console.error('Error adding to newsletter:', error);
                // Continue execution as this is not critical
            }
        }

        return NextResponse.json({ status: 'Success', data: emailData });
    } catch (error: any) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            { 
                status: 'Error', 
                message: 'Error inesperado al procesar la solicitud' 
            },
            { status: 500 }
        );
    }
} 