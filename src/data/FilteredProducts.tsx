export type ProductInfo = {
    modelo: string;
    clasificacion: string;
    peso: number;
    unidadM2: number;
    unidadPalet: number;
    precioOrigen: number;  
};

// Only keeping products that have images in the media folder
const Bloques: ProductInfo[] = [
    {
        modelo: "14x20x24 H16",
        clasificacion: "Bloques",
        peso: 4.7,
        unidadM2: 15,
        unidadPalet: 375,
        precioOrigen: 0.56,
    },
    {
        modelo: "14x20x24 H20",
        clasificacion: "Bloques",
        peso: 5.2,
        unidadM2: 15,
        unidadPalet: 225,
        precioOrigen: 0.61,
    }
];

const Bardos: ProductInfo[] = [
    {
        modelo: "50x25x3,5",
        clasificacion: "Bardos",
        peso: 3.50,
        unidadM2: 8.01,
        unidadPalet: 264,
        precioOrigen: 0.63,
    }
];

const Huecos: ProductInfo[] = [
    {
        modelo: "PANCHITO LIGERO",
        clasificacion: "Huecos",
        peso: 2.20,
        unidadM2: 32,
        unidadPalet: 384,
        precioOrigen: 0.26,
    }
];

const Panal: ProductInfo[] = [
    {
        modelo: "PANAL 9",
        clasificacion: "Panal",
        peso: 2.00,
        unidadM2: 40,
        unidadPalet: 320,
        precioOrigen: 0.19,
    }
];

const Termonieves: ProductInfo[] = [
    {
        modelo: "14x20x30",
        clasificacion: "Termonieves",
        peso: 6.70,
        unidadM2: 15,
        unidadPalet: 105,
        precioOrigen: 0.59,
    }
];

const Zunchos: ProductInfo[] = [
    {
        modelo: "ZUNCHO 14",
        clasificacion: "Zunchos",
        peso: 7.50,
        unidadM2: 3,
        unidadPalet: 96,
        precioOrigen: 1.20,
    }
];

export const categories: Categories = {
    Bloques,
    Bardos,
    Huecos,
    Panal,
    Termonieves,
    Zunchos,
};

export type Categories = {
    Bloques: ProductInfo[];
    Bardos: ProductInfo[];
    Huecos: ProductInfo[];
    Panal: ProductInfo[];
    Termonieves: ProductInfo[];
    Zunchos: ProductInfo[];
} 