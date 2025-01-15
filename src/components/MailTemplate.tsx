interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
    approvedNewsletter: boolean;
}
  
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    message,
    approvedNewsletter,
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
        <h1 style={{ color: '#333', borderBottom: '2px solid #f97316', paddingBottom: '10px' }}>
            Nuevo Mensaje de Contacto
        </h1>
        
        <div style={{ marginTop: '20px' }}>
            <p style={{ margin: '10px 0' }}><strong>Nombre:</strong> {firstName}</p>
            <p style={{ margin: '10px 0' }}><strong>Email:</strong> {email}</p>
            <p style={{ margin: '10px 0' }}><strong>Newsletter:</strong> {approvedNewsletter ? 'Sí' : 'No'}</p>
        </div>

        <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
            <strong>Mensaje:</strong>
            <p style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>{message}</p>
        </div>
    </div>
);