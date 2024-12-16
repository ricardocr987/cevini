import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
    return (
        <header 
            className="px-4 md:px-6 grid grid-cols-3 items-center text-white"
            style={{ height: "60px" }}
        >
            <Link href="/" passHref className="cursor-pointer">
                <Image
                    src="/media/cevini.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="rounded-md"
                />
            </Link>
            <div className="col-start-2 col-end-3 text-center text-sm font-medium">+34 965691477</div>
        </header>
    );
};
