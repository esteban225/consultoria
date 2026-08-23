import React from 'react';

const inputsList = [
  "Datos", "Resultados", "Metodología", "Información experimental", 
  "Figuras", "Tablas", "Bibliografía", "Información institucional", 
  "Información sobre los autores", "Documentación relacionada con el proyecto"
];

const ResearcherInputSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-[#a9b9c0]/10 border-b border-[#a9b9c0]/30">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Columna Izquierda: Información de contexto */}
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-3 block">
            Insumos del proyecto
          </span>
          <h2 className="text-3xl font-serif text-[#1d334b] mb-6">
            Trabajamos a partir de su investigación
          </h2>
          <p className="text-[#606e7c] font-light leading-relaxed">
            El servicio parte estrictamente de la investigación y de la información proporcionada por los propios autores.
          </p>
        </div>

        {/* Columna Derecha: Tarjeta con la lista de requerimientos */}
        <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-3xl border border-[#a9b9c0]/30 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#606e7c] mb-6">
            El investigador debe proporcionar, según corresponda:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inputsList.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 rounded-xl bg-[#a9b9c0]/10 border border-[#a9b9c0]/20 text-sm font-medium text-[#1d334b]"
              >
                {/* Viñeta con el color verde científico (#4f8878) */}
                <span className="w-2 h-2 rounded-full bg-[#4f8878]"></span>
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearcherInputSection;