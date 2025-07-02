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
    width={150}
    height={150}
    priority
  />
);

interface HeroTextProps {
  className?: string;
}

const HeroText = ({ className }: HeroTextProps) => (
  <div className={`space-y-4 ${className} font-sans`}>
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
      <div className="relative h-full container mx-auto px-4">
        <div className="h-full flex flex-col justify-center md:justify-end items-center">
          <HeroText className="mt-32 md:mt-0 md:mb-32" />
        </div>
      </div>
    </section>
  );
};