import React from 'react';

const actions = [
  { title: "Análisis científico", desc: "Evaluación del contenido disponible y de las características del trabajo." },
  { title: "Organización", desc: "Estructuración de la información para construir un manuscrito coherente." },
  { title: "Estrategia editorial", desc: "Identificación de revistas potencialmente adecuadas." },
  { title: "Preparación", desc: "Adaptación del manuscrito a los requisitos de la revista." },
  { title: "Sometimiento", desc: "Acompañamiento en la presentación del manuscrito." },
  { title: "Revisión", desc: "Acompañamiento durante las rondas de evaluación." },
  { title: "Comunicación editorial", desc: "Coordinación de las comunicaciones necesarias durante el proceso." }
];

const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-white border-b border-[#a9b9c0]/30">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-3 block">
            Alcance operativo
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] mb-4">
            ¿Qué hacemos nosotros?
          </h2>
          <p className="text-[#606e7c] font-light">
            Nuestro rol técnico y estratégico en el desarrollo del proyecto editorial.
          </p>
        </div>

        {/* Cuadrícula de tarjetas operativas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-[#a9b9c0]/10 border border-[#a9b9c0]/30 hover:border-[#4f8878] hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-[#1d334b] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#606e7c] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeDoSection;