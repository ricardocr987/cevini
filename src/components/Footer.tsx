import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-center">
                <div className="flex flex-col text-center">
                    <h3 className="font-bold mb-2">Te Puede Interesar</h3>
                    <Link href="/" className="hover:underline">Inicio</Link>
                    <Link href="/products" className="hover:underline">Productos</Link>
                    <Link href="/articles" className="hover:underline">Blog</Link>
                </div>

                <div className="flex flex-col order-last md:order-none">
                    <h3 className="font-bold mb-2">Contacto</h3>
                    <a href="tel:+34965691477" className="hover:underline">+34 965691477</a>
                    <a href="mailto:info@ceramicavirgendelasnieves.com" className="hover:underline">info@cevini.es</a>
                    <Image
                        src="/media/cevini.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="mt-4 md:mt-5 rounded-md"
                    />
                </div>

                <div className="flex flex-col text-center items-center">
                    <h3 className="font-bold mb-2">Dirección</h3>
                    <p className='text-sm'>Carretera Agost-Alicante, KM 9,5</p>
                    <p className='text-sm'>03698 AGOST Alicante SPAIN</p>
                    <a href="https://www.google.com/maps/place/Cer%C3%A1mica+Virgen+de+las+Nieves/@38.4253052,-0.6235624,20.03z" target="_blank" rel="noopener noreferrer">
                        <iframe
                            className='rounded-md mt-2'
                            width="200"
                            height="120"
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZDDWpLyqoSElj6Om7vy_tVL_vjzO4hmY&q=Cer%C3%A1mica+Virgen+de+las+Nieves&center=38.4253052,-0.6235624&zoom=15">
                        </iframe>
                    </a>
                </div>
            </div>
            <div className="text-center mt-6">
                <p>Cerámica Virgen de las Nieves © 2024</p>
            </div>
        </footer>
    );
};