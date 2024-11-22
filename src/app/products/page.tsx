import { Header } from "@/components/Header";
import ProductsSection from "@/components/sections/ProductsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: {
    default: 'Cerámica Virgen de las Nieves - Fabricante y Proveedor de Ladrillos en Alicante',
    template: 'Ofertas Cerámica Virgen de las Nieves',
  },
  description: 'Somos un fabricante y proveedor líder de cerámica de ladrillos en Alicante. Ofrecemos una amplia gama de ladrillos cerámicos de alta calidad para proyectos de construcción residencial y comercial.',
  keywords: ['cerámica de ladrillos', 'fabricante de ladrillos', 'proveedor de ladrillos cerámicos', 'ladrillos para construcción', 'bardos', 'atobas', 'cuadrados', 'bloques', 'Alicante', 'Comunidad Valenciana', 'Agost'],
};

export default function Products() {
  return (
    <div id="app-root" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-200">
        <ProductsSection />
      </main>
    </div>
  );
}