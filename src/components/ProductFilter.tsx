import { Categories } from "@/data/Products";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

interface SearchIconProps {
    className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = (props) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

interface ProductFilterProps {
    currentCategories: Categories
    searchTerm: string
    selectedCategories: string[]
    setCategories: React.Dispatch<React.SetStateAction<Categories>>
    setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

export const ProductFilter = ({currentCategories, searchTerm, setCategories, selectedCategories, setSelectedCategories, setSearchTerm}: ProductFilterProps) => {
    const [sortedByPrice, setSortedByPrice] = useState<boolean>(false);
    const [sortedByDimension, setSortedByDimension] = useState<boolean>(false);
    const [priceSortDirection, setPriceSortDirection] = useState<'asc' | 'desc' | ''>('');
    const [dimensionSortDirection, setDimensionSortDirection] = useState<'asc' | 'desc' | ''>('');

    useEffect(() => {
        if (sortedByPrice || sortedByDimension) {
            const updatedCategories: Categories = { ...currentCategories };

            for (const categoryName in updatedCategories) {
                if (updatedCategories.hasOwnProperty(categoryName)) {
                    //@ts-ignore
                    const categoryProducts = [...updatedCategories[categoryName]];

                    if (sortedByPrice) {
                        if (priceSortDirection === 'asc') {
                            categoryProducts.sort((a, b) => a.precioOrigen - b.precioOrigen);
                        } else {
                            categoryProducts.sort((a, b) => b.precioOrigen - a.precioOrigen);
                        }
                    } else if (sortedByDimension) {
                        if (dimensionSortDirection === 'asc') {
                            categoryProducts.sort((a, b) => a.peso - b.peso);
                        } else {
                            categoryProducts.sort((a, b) => b.peso - a.peso);
                        }
                    }
                    //@ts-ignore
                    updatedCategories[categoryName] = categoryProducts;
                }
            }

            setCategories(updatedCategories);
        }
    }, [priceSortDirection, dimensionSortDirection]);
    
    const handleSortByPrice = (direction: 'asc' | 'desc') => {
        setSortedByDimension(false);
        setDimensionSortDirection('');
        setSortedByPrice(true);
        setPriceSortDirection(direction);
    };

    const handleSortByDimension = (direction: 'asc' | 'desc') => {
        setSortedByPrice(false);
        setPriceSortDirection('');
        setSortedByDimension(true);
        setDimensionSortDirection(direction);
    };

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
        setSearchTerm('');
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4 mt-2">
                    {Object.keys(currentCategories).map((categoryName) => (
                        <button
                            key={categoryName}
                            className={`text-sm px-4 py-2 rounded-md focus:outline-none ${
                                selectedCategories.includes(categoryName)
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-300 text-gray-700'
                            }`}
                            onClick={() => handleCategoryChange(categoryName)}
                        >
                            {categoryName}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center mb-2">
                    <div className="relative w-full max-w-md space-y-2">
                        <SearchIcon className="absolute left-4 top-4 h-5 w-5 text-gray-500" />
                        <Input
                            className="pl-10 pr-4 py-2 m-2 rounded-md w-full text-sm bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Busca por dimensiones..."
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <span className="text-sm font-bold text-black mr-2">Ordenar por:</span>

                    <div className="flex flex-col items-center">
                        <span className="text-sm text-black mb-1">Precio</span>
                        <select
                            className="text-sm px-4 py-2 rounded-md focus:outline-none bg-gray-300 text-gray-700"
                            value={priceSortDirection}
                            onChange={(e) => handleSortByPrice(e.target.value as 'asc' | 'desc')}
                        >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-sm text-black mb-1">Dimensiones</span>
                        <select
                            className="text-sm px-4 py-2 rounded-md focus:outline-none bg-gray-300 text-gray-700"
                            value={dimensionSortDirection}
                            onChange={(e) => handleSortByDimension(e.target.value as 'asc' | 'desc')}
                        >
                            <option value="" disabled selected>Seleccionar</option>
                            <option value="asc">Ascendente</option>
                            <option value="desc">Descendente</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}