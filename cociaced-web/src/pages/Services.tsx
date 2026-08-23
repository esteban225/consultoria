import React from 'react';

// Datos extraídos del documento para mantener el código limpio
const servicesData = [
  {
    title: "Evaluación científica",
    description: "Análisis inicial del trabajo, resultados disponibles, estructura del manuscrito y objetivos de publicación."
  },
  {
    title: "Estrategia de revista",
    description: "Identificación y evaluación de revistas potencialmente compatibles con la investigación."
  },
  {
    title: "Preparación del manuscrito",
    description: "Organización y adaptación del manuscrito de acuerdo con las características y requisitos de la revista seleccionada."
  },
  {
    title: "Sometimiento editorial",
    description: "Preparación de la documentación y acompañamiento durante el proceso de envío."
  },
  {
    title: "Revisión por pares",
    description: "Acompañamiento durante las observaciones, comentarios y solicitudes de modificación realizadas por los evaluadores."
  },
  {
    title: "Respuesta a revisores",
    description: "Apoyo en la organización y preparación de las respuestas a las observaciones recibidas."
  },
  {
    title: "Seguimiento editorial",
    description: "Acompañamiento durante las diferentes etapas del proceso editorial hasta la decisión de la revista, de acuerdo con el alcance definido para cada proyecto."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-24 lg:py-36 px-6 lg:px-20 bg-[#a9b9c0]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenedor principal en Grid de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna de Texto institucional (Aparece PRIMERO en mobile con order-1, y a la derecha en escritorio con lg:order-2) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pt-4 order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-widest text-[#4f8878] uppercase block">
              Alcance del acompañamiento
            </span>
            
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] tracking-tight leading-snug">
              ¿En qué podemos acompañarte?
            </h2>
            
            <div className="h-1 w-20 bg-[#4f8878] rounded-full"></div>
            
            <p className="text-[#606e7c] text-base font-light leading-relaxed pt-2">
              Cada etapa del proceso editorial requiere un enfoque metódico y riguroso. Nuestro acompañamiento está diseñado para estructurar, fortalecer y posicionar su investigación de manera óptima ante las exigencias de las revistas científicas.
            </p>
          </div>

          {/* Columna de Tarjetas (Aparece SEGUNDO en mobile con order-2, y a la izquierda en escritorio con lg:order-1) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl border border-[#a9b9c0]/30 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Línea superior de acento en Verde Científico (#4f8878) al hacer hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#4f8878] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Número indicador sutil */}
                <div className="text-4xl font-serif text-[#a9b9c0]/40 mb-4 group-hover:text-[#1d334b] transition-colors duration-500 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-[#1d334b] mb-3 group-hover:text-[#4f8878] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#606e7c] leading-relaxed text-sm font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;