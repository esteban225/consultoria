import React from "react";

const FinalClosingSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-white border-t border-[#a9b9c0]/30 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] leading-snug">
          “Cada investigación merece una estrategia de publicación acorde con su
          contenido, sus resultados y sus objetivos.”
        </h2>
        {/* Botón de llamada a la acción en Azul Profundo (#1d334b) con hover en Verde Científico (#4f8878) */}
        <div className="inline-block">
          <a
            href="#evaluacion"
            className="inline-block px-8 py-4 text-sm font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] shadow-sm hover:shadow-md transition-all duration-300"
          >
            Solicitar evaluación
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalClosingSection;
