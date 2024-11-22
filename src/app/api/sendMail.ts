import { EmailTemplate } from "@/components/MailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { email, name, text, approvedNewsletter } = await req.json();

        const emailData = await resend.emails.send({
            from: "ContactoWeb <web@cevini.es>",
            to: [process.env.COMPANY_MAIL!],
            subject: `Nuevo mensaje de ${email}`,
            react: EmailTemplate({ firstName: name }),
            text: text,
        });

        if (emailData.error) {
            return NextResponse.json({ status: 'Error', message: emailData.error });
        }

        if (approvedNewsletter) {
            const contactResponse = await resend.contacts.create({
                email: email,
                firstName: name.split(' ')[0],
                lastName: name.split(' ').slice(1).join(' ') || '',
                unsubscribed: false,
                audienceId: process.env.AUDIENCE_ID!,
            });

            if (contactResponse.error) {
                return NextResponse.json({ status: 'Error', message: contactResponse.error });
            }
        }

        return NextResponse.json({ status: 'Success', data: emailData });
    } catch (error: any) {
        return NextResponse.json({ status: 'Error', message: error.message });
    }
}
