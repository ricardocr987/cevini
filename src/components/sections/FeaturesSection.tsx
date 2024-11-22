const features = [
  {
    title: "Calidad",
    description: "Proporcionamos productos de alta calidad"
  },
  {
    title: "Entrega",
    description: "Ofrecemos soluciones de transporte eficientes"
  },
  {
    title: "Soporte",
    description: "Estamos a su disposición para cualquier consulta"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="bg-gray-200 p-3">
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 shadow-md rounded-lg p-6 w-full flex flex-col items-center text-white">
        <h2 className="text-3xl font-bold text-center text-white mb-3">Nuestros servicios</h2>
        <p className="mb-6 text-center max-w-96 sm:max-w-full text-white">
          Estamos especializados en la fabricación de atobas, bardos, cuadrados y bloques
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-900 text-white rounded-lg p-2 flex flex-col space-y-2 h-full justify-between text-center md:max-w-56">
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="text-sm text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};