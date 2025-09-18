export type ProductInfo = {
    modelo: string;
    clasificacion: string;
    peso: number;
    unidadM2: number;
    unidadPalet: number;
    precioOrigen: number;  
    pdf?: string;
};
const Bloques: ProductInfo[] = [
    {
        modelo: "4x16x33",
        clasificacion: "Bloques",
        peso: 1.9,
        unidadM2: 18,
        unidadPalet: 450,
        precioOrigen: 0.2,
        pdf: "4x16x33.pdf"
    },
    {
        modelo: "5x16x33",
        clasificacion: "Bloques",
        peso: 2,
        unidadM2: 18,
        unidadPalet: 360,
        precioOrigen: 0.24,
        pdf: "5x16x33.pdf"
    },
    {
        modelo: "7x16x33",
        clasificacion: "Bloques",
        peso: 2.9,
        unidadM2: 18,
        unidadPalet: 270,
        precioOrigen: 0.27,
        pdf: "7x16x33.pdf"
    },
    {
        modelo: "9x16x33",
        clasificacion: "Bloques",
        peso: 3.4,
        unidadM2: 18,
        unidadPalet: 216,
        precioOrigen: 0.31,
        pdf: "9x16x33.pdf"
    },
    {
        modelo: "11x16x33",
        clasificacion: "Bloques",
        peso: 3.9,
        unidadM2: 18,
        unidadPalet: 180,
        precioOrigen: 0.37,
        pdf: "11x16x33.pdf"
    },
    {
        modelo: "4x20x33",
        clasificacion: "Bloques",
        peso: 2,
        unidadM2: 15,
        unidadPalet: 375,
        precioOrigen: 0.22,
        pdf: "BLOQUE_4X20X33.pdf"
    },
    {
        modelo: "7x20x33",
        clasificacion: "Bloques",
        peso: 3.4,
        unidadM2: 15,
        unidadPalet: 225,
        precioOrigen: 0.3,
        pdf: "7x20x33.pdf"
    },
    {
        modelo: "9x20x33",
        clasificacion: "Bloques",
        peso: 3.8,
        unidadM2: 15,
        unidadPalet: 180,
        precioOrigen: 0.34,
        pdf: "9x20x33.pdf"
    },
    {
        modelo: "11x20x33",
        clasificacion: "Bloques",
        peso: 4.6,
        unidadM2: 15,
        unidadPalet: 150,
        precioOrigen: 0.43,
        pdf: "11x20x33.pdf"
    },
    {
        modelo: "4x20x40",
        clasificacion: "Bloques",
        peso: 2.5,
        unidadM2: 12,
        unidadPalet: 280,
        precioOrigen: 0.38,
        pdf: "BLOQUE_4X20X40.pdf"
    },
    {
        modelo: "7x20x40",
        clasificacion: "Bloques",
        peso: 4,
        unidadM2: 12,
        unidadPalet: 150,
        precioOrigen: 0.47,
        pdf: "7x20x40.pdf"
    },
    {
        modelo: "9x20x40",
        clasificacion: "Bloques",
        peso: 5.5,
        unidadM2: 12,
        unidadPalet: 130,
        precioOrigen: 0.54,
        pdf: "9x20x40.pdf"
    },
    {
        modelo: "11x20x40",
        clasificacion: "Bloques",
        peso: 6.3,
        unidadM2: 12,
        unidadPalet: 100,
        precioOrigen: 0.62,
        pdf: "11x20x40.pdf"
    },
    {
        modelo: "14x20x24_H16",
        clasificacion: "Bloques",
        peso: 4.7,
        unidadM2: 15,
        unidadPalet: 375,
        precioOrigen: 0.56,
        pdf: "H16.pdf"
    },
    {
        modelo: "14x20x24_H20",
        clasificacion: "Bloques",
        peso: 5.2,
        unidadM2: 15,
        unidadPalet: 225,
        precioOrigen: 0.61,
        pdf: "H20.pdf"
    },
];

const Bardos: ProductInfo[] = [
    {
        modelo: "50x25x3,5",
        clasificacion: "Bardos",
        peso: 3.50,
        unidadM2: 8.01,
        unidadPalet: 264,
        precioOrigen: 0.63,
    },
    {
        modelo: "60x25x3,5",
        clasificacion: "Bardos",
        peso: 4.20,
        unidadM2: 6.66,
        unidadPalet: 128,
        precioOrigen: 0.68,
    },
    {
        modelo: "70x25x3,5",
        clasificacion: "Bardos",
        peso: 4.90,
        unidadM2: 5.71,
        unidadPalet: 128,
        precioOrigen: 0.77,
        pdf: "70x25x3,5.pdf"
    },
    {
        modelo: "80x25x3,5",
        clasificacion: "Bardos",
        peso: 5.60,
        unidadM2: 5.01,
        unidadPalet: 128,
        precioOrigen: 0.90,
        pdf: "80x25x3,5.pdf"
    },
    {
        modelo: "90x25x3,5",
        clasificacion: "Bardos",
        peso: 6.30,
        unidadM2: 4.44,
        unidadPalet: 128,
        precioOrigen: 1.00,
        pdf: "90x25x3,5.pdf"
    },
    {
        modelo: "100x25x3,5",
        clasificacion: "Bardos",
        peso: 7.00,
        unidadM2: 4.01,
        unidadPalet: 128,
        precioOrigen: 1.10,
        pdf: "100x25x3,5.pdf"
    },
    {
        modelo: "110x25x3,5",
        clasificacion: "Bardos",
        peso: 7.32,
        unidadM2: 3.60,
        unidadPalet: 104,
        precioOrigen: 2.57,
    },
    {
        modelo: "120x25x4",
        clasificacion: "Bardos",
        peso: 8.00,
        unidadM2: 3.30,
        unidadPalet: 104,
        precioOrigen: 2.85,
        pdf: "120x25x4.pdf"
    },
    {
        modelo: "130x25x4",
        clasificacion: "Bardos",
        peso: 8.00,
        unidadM2: 3.00,
        unidadPalet: 104,
        precioOrigen: 3.41,
        pdf: "130x25x4.pdf"
    },
    {
        modelo: "140x25x5",
        clasificacion: "Bardos",
        peso: 10.90,
        unidadM2: 2.80,
        unidadPalet: 84,
        precioOrigen: 3.56,
    },
    {
        modelo: "150x25x5",
        clasificacion: "Bardos",
        peso: 11.20,
        unidadM2: 2.70,
        unidadPalet: 63,
        precioOrigen: 3.86,
    },
    {
        modelo: "160x25x5",
        clasificacion: "Bardos",
        peso: 11.80,
        unidadM2: 2.50,
        unidadPalet: 63,
        precioOrigen: 4.15,
    },
    {
        modelo: "180x25x6",
        clasificacion: "Bardos",
        peso: 14.60,
        unidadM2: 2.20,
        unidadPalet: 36,
        precioOrigen: 4.62,
        pdf: "180x25x6.pdf"
    },
    {
        modelo: "200x25x6",
        clasificacion: "Bardos",
        peso: 16.20,
        unidadM2: 2.00,
        unidadPalet: 36,
        precioOrigen: 5.08,
    },
];

const Huecos: ProductInfo[] = [
    {
        modelo: "2x12x24",
        clasificacion: "Huecos",
        peso: 0.70,
        unidadM2: 32,
        unidadPalet: 1248,
        precioOrigen: 0.17,
        pdf: "2x12x24.pdf"
    },
    {
        modelo: "3x12x24",
        clasificacion: "Huecos",
        peso: 0.90,
        unidadM2: 32,
        unidadPalet: 1088,
        precioOrigen: 0.17,
        pdf: "3x12x24.pdf"
    },
    {
        modelo: "4x12x24",
        clasificacion: "Huecos",
        peso: 1.00,
        unidadM2: 32,
        unidadPalet: 800,
        precioOrigen: 0.15,
        pdf: "4x12x24.pdf"
    },
    {
        modelo: "7x12x24",
        clasificacion: "Huecos",
        peso: 1.70,
        unidadM2: 32,
        unidadPalet: 480,
        precioOrigen: 0.20,
        pdf: "7x12x24.pdf"
    },
    {
        modelo: "9x12x24",
        clasificacion: "Huecos",
        peso: 2.00,
        unidadM2: 32,
        unidadPalet: 384,
        precioOrigen: 0.21,
        pdf: "9x12x24.pdf"
    },
    {
        modelo: "PANCHITO_LIGERO",
        clasificacion: "Huecos",
        peso: 2.20,
        unidadM2: 32,
        unidadPalet: 384,
        precioOrigen: 0.26,
        pdf: "PANCHITO_LIGERO.pdf"
    },
    {
        modelo: "PANCHITO_MACIZO",
        clasificacion: "Huecos",
        peso: 2.70,
        unidadM2: 32,
        unidadPalet: 320,
        precioOrigen: 0.29,
        pdf: "PANCHITO_MACIZO.pdf"
    },
];

const Panal: ProductInfo[] = [
    {
        modelo: "PANAL_9",
        clasificacion: "Panal",
        peso: 2.00,
        unidadM2: 40,
        unidadPalet: 320,
        precioOrigen: 0.19,
        pdf: "PANAL_9.pdf"
    },
    {
        modelo: "PANAL_9_4H",
        clasificacion: "Panal",
        peso: 2.20,
        unidadM2: 40,
        unidadPalet: 320,
        precioOrigen: 0.22,
        pdf: "PANAL_9_4H.pdf"
    },
    {
        modelo: "TERMOPANAL",
        clasificacion: "Panal",
        peso: 5.40,
        unidadM2: 17,
        unidadPalet: 150,
        precioOrigen: 0.48,
        pdf: "TERMOPANAL.pdf"
    },
    {
        modelo: "PANAL_DOBLE",
        clasificacion: "Panal",
        peso: 4.00,
        unidadM2: 20,
        unidadPalet: 200,
        precioOrigen: 0.40,
        pdf: "PANAL_DOBLE.pdf"
    },
    {
        modelo: "ACUSTICO_11",
        clasificacion: "Panal",
        peso: 2.90,
        unidadM2: 40,
        unidadPalet: 296,
        precioOrigen: 0.45,
        pdf: "ACUSTICO_11.pdf"
    },
    {
        modelo: "ACUSTICO_14",
        clasificacion: "Panal",
        peso: 3.70,
        unidadM2: 40,
        unidadPalet: 224,
        precioOrigen: 0.60,
        pdf: "ACUSTICO_14.pdf"
    },
    {
        modelo: "PANAL_190",
        clasificacion: "Panal",
        peso: 9.00,
        unidadM2: 17,
        unidadPalet: 90,
        precioOrigen: 0.75,
        pdf: "PANAL_190.pdf"
    },
];

const Termonieves: ProductInfo[] = [
    {
        modelo: "14x20x30",
        clasificacion: "Termonieves",
        peso: 6.70,
        unidadM2: 15,
        unidadPalet: 105,
        precioOrigen: 0.59,
        pdf: "14x20x30.pdf"
    },
    {
        modelo: "19x20x30",
        clasificacion: "Termonieves",
        peso: 9.00,
        unidadM2: 15,
        unidadPalet: 75,
        precioOrigen: 0.72,
        pdf: "19x20x30.pdf"
    },
    {
        modelo: "24x20x30",
        clasificacion: "Termonieves",
        peso: 12.00,
        unidadM2: 15,
        unidadPalet: 60,
        precioOrigen: 1.02,
        pdf: "24x20x30.pdf"
    },
    {
        modelo: "29x20x30",
        clasificacion: "Termonieves",
        peso: 16.00,
        unidadM2: 15,
        unidadPalet: 45,
        precioOrigen: 1.25,
        pdf: "29x20x30.pdf"
    },
];

const Zunchos: ProductInfo[] = [
    {
        modelo: "ZUNCHO_14",
        clasificacion: "Zunchos",
        peso: 7.50,
        unidadM2: 3,
        unidadPalet: 96,
        precioOrigen: 1.20,
    },
    {
        modelo: "ZUNCHO_19",
        clasificacion: "Zunchos",
        peso: 8.60,
        unidadM2: 3,
        unidadPalet: 75,
        precioOrigen: 1.40,
    },
    {
        modelo: "ZUNCHO_24",
        clasificacion: "Zunchos",
        peso: 10.60,
        unidadM2: 3,
        unidadPalet: 60,
        precioOrigen: 1.70,
    },
    {
        modelo: "ZUNCHO_29",
        clasificacion: "Zunchos",
        peso: 11.40,
        unidadM2: 3,
        unidadPalet: 45,
        precioOrigen: 1.80,
    },
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