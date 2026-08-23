import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* HERO PRINCIPAL: DOS COLUMNAS CON ESPACIO PARA LOGO A LA DERECHA */}
      <section className="relative w-full bg-white py-24 lg:py-36 px-6 lg:px-20 overflow-hidden border-b border-[#a9b9c0]/30">
        
        {/* Patrón tecnológico y de precisión discreto de fondo utilizando el tono secundario */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#1d334b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        {/* Contenedor principal en Grid (Dos Columnas) */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Contenido principal (Ocupa 7 columnas) */}
          <div className="lg:col-span-7 text-left">

            {/* Título principal con tipografía Serif y color azul profundo (#1d334b) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1d334b] leading-[1.15] tracking-tight">
              Acompañamiento especializado para la publicación de artículos científicos
            </h1>
            
            {/* Subtítulo limpio y espaciado con color pizarra (#606e7c) */}
            <p className="mt-8 text-lg lg:text-xl text-[#606e7c] leading-relaxed max-w-2xl font-light">
              Evaluamos su investigación y desarrollamos una estrategia científica y editorial 
              orientada a maximizar las posibilidades de publicación en una revista adecuada.
            </p>

            {/* Botones de acción sobrios y elegantes */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              {/* Botón principal en Azul Profundo (#1d334b) con hover en Verde Científico (#4f8878) */}
              <a 
                href="#evaluacion"
                className="px-8 py-4 bg-[#1d334b] text-white text-center font-medium rounded-xl shadow-sm hover:bg-[#4f8878] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm"
              >
                Solicitar evaluación
              </a>
              
              {/* Botón secundario con borde en tono neutro (#a9b9c0) */}
              <a 
                href="#proceso"
                className="px-8 py-4 bg-transparent text-center border border-[#a9b9c0] text-[#1d334b] font-medium rounded-xl hover:bg-[#a9b9c0]/10 hover:border-[#1d334b] transition-all duration-300 text-sm"
              >
                Conocer nuestro proceso
              </a>
            </div>

          </div>

          {/* Columna Derecha: Insignia Institucional / Logo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm flex items-center justify-center p-6 bg-white rounded-3xl border border-[#a9b9c0]/30 shadow-sm">
              <img src="./logo.jpg" alt="Logo" className="w-full h-auto object-contain max-h-72" />
            </div>
          </div>

        </div>
      </section>

      {/* MENSAJE DE CONFIANZA */}
      <section className="py-24 px-6 lg:px-20 bg-[#a9b9c0]/10 relative border-b border-[#a9b9c0]/30">
        <div className="max-w-3xl mx-auto text-center">
          
          <h2 className="text-2xl lg:text-3xl font-serif text-[#1d334b] mb-6 tracking-tight">
            Cada investigación requiere una estrategia editorial diferente
          </h2>
          
          <p className="text-[#606e7c] leading-relaxed mb-10 font-light text-base lg:text-lg">
            La selección de una revista adecuada, la preparación del manuscrito y la gestión de las 
            observaciones de los evaluadores pueden ser determinantes dentro del proceso de publicación. 
            Por ello, cada proyecto es evaluado individualmente antes de definir el alcance del acompañamiento.
          </p>
          
          <a 
            href="#evaluacion" 
            className="inline-flex items-center gap-2 text-[#1d334b] font-medium pb-1 border-b-2 border-[#4f8878] hover:opacity-75 transition-opacity group text-sm"
          >
            <span>Solicitar evaluación inicial</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-[#4f8878]">→</span>
          </a>
          
        </div>
      </section>
    </>
  );
};

export default HeroSection;