import Image from 'next/image'
import { Video } from "../ui/video"

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => (
  <Image
    alt="Cerámica Virgen de las Nieves Logo"
    className={`rounded-lg ${className}`}
    src="/media/cevini.svg"
    width={200}
    height={200}
    priority
  />
);


const HeroText = () => (
  <div className={`space-y-1 font-sans`}>
    <p className="text-white text-lg md:text-2xl font-bold text-center max-w-[280px] sm:max-w-[400px] md:max-w-[750px]">
      Desde 1970, fabricamos ladrillos que construyen hogares con
    </p>
    <p className="font-extrabold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent text-xl md:text-3xl text-center">
      paredes de verdad
    </p>
  </div>
);

export const VideoSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <Video />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Logo */}
      <div className="absolute md:right-8 md:top-8 w-full md:w-auto top-24 z-50 flex justify-center">
        <Logo />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto">
        <div className="h-full flex flex-col justify-end items-center">
          <div className="backdrop-blur-md bg-black/40 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-8 md:mb-16 max-w-[80vw] sm:max-w-[400px] md:max-w-[800px] w-full flex flex-col items-center">
            <HeroText  />
          </div>
        </div>
      </div>
    </section>
  );
};