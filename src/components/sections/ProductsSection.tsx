'use client';
import React, { useState } from 'react';
import { Categories, categories, ProductInfo } from '@/data/Products';
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
    // Logic to download the CE certificate for the product
    console.log(`Downloading CE certificate for ${product.modelo}`);
  };

  return (
    <section className="p-6">
      {selectedCategory !== '' ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="bg-black p-2 rounded-full cursor-pointer" onClick={handleBackClick}>
              <ArrowLeftIcon className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-center flex-grow">{selectedCategory}</h2>
            <div className="w-10"></div> {/* Placeholder to balance the layout */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories[selectedCategory as keyof Categories].map((product: ProductInfo, index: number) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{product.modelo}</h3>
                <p className="text-sm text-gray-500">Peso: {product.peso}kg</p>
                <p className="text-sm text-gray-500">Unidades por m2: {product.unidadM2}</p>
                <p className="text-sm text-gray-500">Unidades por pallet: {product.unidadPalet}</p>
                <p className="text-lg font-bold mt-2">En origen: {product.precioOrigen} €</p>
                <div 
                  className="bg-green-500 p-2 cursor-pointer mt-2 rounded-md max-w-fit"
                  onClick={() => handleDownloadClick(product)}
                  title="Download CE Certificate"
                >
                  <UploadIcon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col items-center ml-4 relative">
                <Image 
                  src={product.clasificacion === "Bardos"
                    ? `/media/products/Bardos.jpg`
                    : `/media/products/${product.modelo}.jpg`}
                  alt={product.modelo}
                  width={80}
                  height={80}
                  className="rounded-lg mb-2"
                />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(categories).map((category, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition"
              onClick={() => handleCategoryClick(category)}
            >
              <h3 className="text-xl font-bold text-center">{category}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsSection;