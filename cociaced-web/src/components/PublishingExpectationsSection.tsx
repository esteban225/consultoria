import React from 'react';

const PublishingExpectationsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-[#a9b9c0]/15 border-b border-[#a9b9c0]/30">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Etiqueta superior en verde científico (#4f8878) */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-3 block">
          Realismo y Rigor Editorial
        </span>
        
        {/* Título principal en azul profundo (#1d334b) */}
        <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] mb-8">
          Una estrategia orientada a maximizar las posibilidades de publicación
        </h2>
        
        {/* Contenedor central con los textos descriptivos */}
        <div className="space-y-6 text-[#606e7c] font-light text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-left sm:text-center bg-white p-8 lg:p-12 rounded-3xl border border-[#a9b9c0]/30 shadow-sm">
          <p>
            Una publicación científica depende de múltiples factores: la calidad y originalidad de la investigación, la contribución científica, la adecuación a la revista, las políticas editoriales y la evaluación de los revisores.
          </p>
          <p className="font-medium text-[#1d334b]">
            Nuestro objetivo es desarrollar una estrategia adecuada para cada investigación y fortalecer su presentación científica y editorial. Ningún proceso editorial puede garantizar de antemano una decisión de aceptación.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PublishingExpectationsSection;