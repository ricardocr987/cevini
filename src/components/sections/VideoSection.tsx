import Link from "next/link"
import { Video } from "../ui/video"
import Image from 'next/image'
import { Button } from "../ui/button"

export const VideoSection = () => {
    const sectionStyle = {
        height: `calc(100vh - 60px)`,
    };

    return (
        <section className="w-full" style={sectionStyle}>
            <Video />
            <HeroContent/>
        </section>
    )
}

const HeroContent = () => {
    return (
        <div className="container mx-auto px-4 text-center text-white" style={{ zIndex: 1 }}>
            <div className="h-screen flex flex-col space-y-10 justify-center items-center">
                <Image
                    alt="Hero"
                    className="rounded-lg"
                    src="/media/cevini.svg"
                    width={400}
                    height={400}
                />
                <p className="text-white mt-4 text-lg text-center max-w-[700px]">
                    Desde 1970, en Cerámica Virgen de las Nieves hemos estado a la vanguardia de la fabricación de ladrillos. Proporcionamos ladrillos que construyen hogares con 
                    <span className="ml-1 text-xl text-bold text-black">paredes de verdad</span>
                </p>
                <div className="mt-6">
                    <Link href='/products' className="px-4 py-2 hover:bg-black-100 text-white font-medium rounded-md">
                        <Button> Descubre nuestros productos </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}