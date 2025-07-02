import MailForm from "../MailForm";

export const ContactSection: React.FC = () => {
    return (
        <section className="bg-gray-200 pt-3 pb-3 px-3">
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white">
                <h2 className="text-3xl font-bold text-center text-white mb-3">Contáctanos</h2>
                <p className="mb-6 text-center max-w-96 sm:max-w-full text-white">
                    Estamos a tu disposición para cualquier consulta
                </p>
                <div className="w-full max-w-md">
                    <MailForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
