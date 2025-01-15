import { AnnouncementSection } from "@/components/sections/AnnouncementSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { VideoSection } from "@/components/sections/VideoSection";
import ProductsSection from "@/components/sections/ProductsSection";
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: {
    default: 'Cerámica Virgen de las Nieves - Fabricante y Proveedor de Ladrillos en Alicante',
    template: '%s | Cerámica Virgen de las Nieves',
  },
  description: 'Somos un fabricante y proveedor líder de cerámica de ladrillos en Alicante. Ofrecemos una amplia gama de ladrillos cerámicos de alta calidad para proyectos de construcción residencial y comercial.',
  keywords: ['cerámica de ladrillos', 'fabricante de ladrillos', 'proveedor de ladrillos cerámicos', 'ladrillos para construcción', 'bardos', 'atobas', 'cuadrados', 'bloques', 'Alicante', 'Comunidad Valenciana', 'Agost'],
};

export default function Home() {
  return (
    <div className="flex flex-col">      
      <section className="h-screen">
        <VideoSection />
      </section>
      <section className="relative z-10 bg-white">
        <ProductsSection />
        <FeaturesSection />
        <ContactSection />
        <AnnouncementSection />
      </section>
    </div>
  );
}