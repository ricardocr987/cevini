'use client';
import React, { useState } from 'react';
import { Categories, categories, ProductInfo } from '@/data/Products';
import Image from 'next/image';
import { UploadIcon } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Bloques');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleDownloadClick = (product: ProductInfo) => {
    console.log(`Downloading CE certificate for ${product.modelo}`);
  };

  return (
    <section className="bg-gray-200 pt-3 px-3">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white h-[600px]">
        <div className="w-full max-w-7xl h-full flex flex-col">
          <div className="flex-none">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Nuestros Productos</h2>
            
            {/* Categories Navigation */}
            <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-4 mb-6">
              {Object.keys(categories).map((category, index) => (
                <button
                  key={index}
                  className={`px-3 md:px-6 py-1.5 md:py-2 rounded-lg shadow-md transition-colors text-center
                    ${selectedCategory === category 
                      ? 'bg-neutral-900 text-white' 
                      : 'bg-neutral-800/50 hover:bg-neutral-800 text-white/90'
                    }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span className="text-sm md:text-lg font-semibold whitespace-nowrap">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid - will take remaining height */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2">
              {categories[selectedCategory as keyof Categories].map((product: ProductInfo, index: number) => (
                <div key={index} className="bg-neutral-900 rounded-lg shadow-md hover:bg-neutral-800 transition-colors h-[160px] flex">
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-xs lg:text-lg text-white lg:mb-1">{product.modelo}</h3>
                      <div className="mt-0.5 lg:mt-0 space-y-[2px] lg:space-y-0.5 lg:mb-2">
                        <p className="text-[9px] lg:text-xs text-gray-300">Peso: {product.peso}kg</p>
                        <p className="text-[9px] lg:text-xs text-gray-300">Unidades por m2: {product.unidadM2}</p>
                        <p className="text-[9px] lg:text-xs text-gray-300">Unidades por pallet: {product.unidadPalet}</p>
                      </div>
                    </div>
                    <button 
                      className="bg-green-600 hover:bg-green-700 p-2 rounded-md transition-colors w-fit mt-1 lg:mt-0"
                      onClick={() => handleDownloadClick(product)}
                      title="Descargar certificado CE"
                    >
                      <UploadIcon className="h-5 w-5 text-white" />
                    </button>
                  </div>
                  <div className="w-[160px] relative">
                    <Image 
                      src={product.clasificacion === "Bardos"
                        ? `/media/products/Bardos.jpg`
                        : `/media/products/${product.modelo}.jpg`}
                      alt={product.modelo}
                      fill
                      className="rounded-r-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;