import React from 'react';

const InitialEvaluationSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 px-6 lg:px-20 bg-white border-b border-[#a9b9c0]/30 overflow-hidden">
      
      {/* Patrón de puntos radiales muy sutil de fondo usando el azul profundo (#1d334b) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1d334b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Título de la sección en azul profundo (#1d334b) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1d334b] mb-8 tracking-tight">
          Comencemos con una evaluación
        </h2>

        {/* Texto institucional estructurado en gris pizarra (#606e7c) */}
        <div className="space-y-6 text-[#606e7c] text-base lg:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-12">
          <p>
            Antes de definir cualquier servicio, necesitamos conocer las características de su investigación.
          </p>
          <p>
            Cada manuscrito se encuentra en una situación diferente: algunos cuentan con resultados completos, 
            otros necesitan reorganización, algunos ya tienen una revista objetivo y otros requieren 
            desarrollar una estrategia editorial desde cero.
          </p>
          <p className="font-medium text-[#1d334b]">
            Por esta razón, el primer paso es realizar una evaluación de la información proporcionada.
          </p>
        </div>

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

export default InitialEvaluationSection;