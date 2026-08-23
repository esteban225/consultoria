import React from 'react';

const TrustMessageSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-white border-b border-[#a9b9c0]/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] block">
          Evaluación individualizada
        </span>
        <h2 className="text-2xl lg:text-3xl font-serif text-[#1d334b] tracking-tight">
          Cada investigación requiere una estrategia editorial diferente
        </h2>
        <p className="text-[#606e7c] text-base font-light leading-relaxed max-w-2xl mx-auto">
          La selección de una revista adecuada, la preparación del manuscrito y la gestión de las observaciones de los evaluadores pueden ser determinantes dentro del proceso de publicación. Por ello, cada proyecto es evaluado individualmente antes de definir el alcance del acompañamiento.
        </p>
        <div className="pt-4">
          <a
            href="#evaluacion"
            className="inline-block px-8 py-4 text-sm font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] shadow-sm transition-all duration-300"
          >
            Solicitar evaluación inicial
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustMessageSection;