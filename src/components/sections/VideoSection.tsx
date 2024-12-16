import Link from "next/link"
import { Video } from "../ui/video"
import Image from 'next/image'
import { Button } from "../ui/button"

export const VideoSection = () => {
    return (
        <section className="relative w-full h-full">
            <div className="absolute inset-0">
                <Video />
            </div>
            <HeroContent />
        </section>
    )
}

const HeroContent = () => {
    return (
        <div className="relative h-full container mx-auto px-4 text-center">
            <div className="h-full flex flex-col space-y-12 justify-center items-center mx-28">
                <p className="text-white text-lg md:text-xl font-bold text-center max-w-[700px] leading-relaxed">
                    Desde 1970, fabricamos ladrillos que construyen hogares con
                    <span className="ml-2 text-xl md:text-2xl font-extrabold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                        paredes de verdad
                    </span>
                </p>

                <Image
                    alt="Cerámica Virgen de las Nieves Logo"
                    className="rounded-lg"
                    src="/media/cevini.svg"
                    width={200}
                    height={200}
                    priority
                />

                <div>
                    <Link href='/products' className="px-4 py-2 hover:bg-black-100 text-white font-medium rounded-md">
                        <Button className="text-lg font-semibold"> 
                            Descubre nuestros productos 
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}