'use client';
import React, { useState } from 'react';
import { Categories, categories, ProductInfo } from '@/data/Products';
import Image from 'next/image';
import { FileText } from 'lucide-react';

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
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white h-[600px] md:h-[520px]">
        <div className="w-full max-w-7xl h-full flex flex-col">
          <div className="flex-none">            
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

          {/* Products Grid - with custom scrollbar */}
          <div className="flex-1 overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-orange-500 hover:[&::-webkit-scrollbar-thumb]:bg-orange-600 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-2">
              {categories[selectedCategory as keyof Categories].map((product: ProductInfo, index: number) => (
                <div key={index} className="bg-neutral-900 rounded-lg shadow-md hover:bg-neutral-800 transition-colors h-[150px] flex">
                  <div className="flex-1 min-w-0 p-3 md:p-4 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-1">
                        <h3 className="font-semibold text-sm md:text-base text-white truncate">{product.modelo}</h3>
                        <button 
                          className="bg-red-600 hover:bg-red-700 p-1.5 md:p-2 rounded-md transition-colors flex-shrink-0"
                          onClick={() => handleDownloadClick(product)}
                          title="Descargar certificado CE"
                        >
                          <FileText className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </button>
                      </div>
                      <div className="mt-1.5 md:mt-2 space-y-1">
                        <p className="text-xs md:text-sm text-gray-300">Peso: {product.peso}kg</p>
                        <p className="text-xs md:text-sm text-gray-300">Uds/m²: {product.unidadM2}</p>
                        <p className="text-xs md:text-sm text-gray-300">Uds/palet: {product.unidadPalet}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[120px] md:w-[160px] relative flex-shrink-0">
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