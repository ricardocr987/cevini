'use client';
import React, { useState } from 'react';
import { Categories, categories, ProductInfo } from '@/data/FilteredProducts';
import Image from 'next/image';
import { ArrowLeftIcon, UploadIcon } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory('');
  };

  const handleDownloadClick = (product: ProductInfo) => {
    console.log(`Downloading CE certificate for ${product.modelo}`);
  };

  return (
    <section className="bg-gray-200 pt-3 px-3">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white">
        {selectedCategory !== '' ? (
          <div className="w-full max-w-7xl h-[600px]">
            <div className="flex justify-between items-center mb-6">
              <button 
                className="bg-neutral-900 p-2 rounded-full hover:bg-neutral-800 transition-colors" 
                onClick={handleBackClick}
              >
                <ArrowLeftIcon className="h-5 w-5 text-white" />
              </button>
              <h2 className="text-3xl font-bold text-center flex-grow">{selectedCategory}</h2>
              <div className="w-10"></div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories[selectedCategory as keyof Categories].map((product: ProductInfo, index: number) => (
                  <div key={index} className="bg-neutral-900 rounded-lg shadow-md hover:bg-neutral-800 transition-colors h-[160px] flex">
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-white mb-2">{product.modelo}</h3>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-300">Peso: {product.peso}kg</p>
                          <p className="text-sm text-gray-300">Unidades por m2: {product.unidadM2}</p>
                          <p className="text-sm text-gray-300">Unidades por pallet: {product.unidadPalet}</p>
                        </div>
                      </div>
                      <button 
                        className="bg-green-600 hover:bg-green-700 p-2 rounded-md transition-colors w-fit"
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
        ) : (
          <div className="w-full max-w-7xl mb-10">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Nuestros Productos</h2>
            <p className="text-center mb-8 text-lg">
              Selecciona una categoría de los productos que ofrecemos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(categories).map((category, index) => (
                <button
                  key={index}
                  className="bg-neutral-900 rounded-lg shadow-md cursor-pointer hover:bg-neutral-800 transition-colors text-white h-[140px] flex items-center justify-center"
                  onClick={() => handleCategoryClick(category)}
                >
                  <h3 className="text-2xl font-bold text-center">{category}</h3>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;