import React, { useEffect, useRef, useState } from 'react';

// Etapas del proceso enriquecidas con descripciones más detalladas basadas en el documento
const processSteps = [
  { 
    id: "01", 
    title: "Evaluación", 
    desc: "Analizamos la información disponible sobre la investigación, el manuscrito y los objetivos del autor. Examinamos el estado actual del proyecto para determinar su viabilidad dentro de nuestro ámbito de acompañamiento." 
  },
  { 
    id: "02", 
    title: "Diagnóstico", 
    desc: "Identificamos fortalezas clave, aspectos específicos que requieren atención y trazamos posibles estrategias de publicación adaptadas al rigor de su trabajo." 
  },
  { 
    id: "03", 
    title: "Estrategia editorial", 
    desc: "Evaluamos y seleccionamos revistas científicas potencialmente compatibles con el enfoque, el alcance y las características particulares de su investigación." 
  },
  { 
    id: "04", 
    title: "Preparación", 
    desc: "Organizamos, estructuramos y adaptamos minuciosamente el manuscrito junto con la documentación requerida, cumpliendo con los estándares y normativas de la revista seleccionada." 
  },
  { 
    id: "05", 
    title: "Evaluación por pares", 
    desc: "Brindamos acompañamiento estratégico durante el proceso de revisión, gestionando de forma adecuada las diferentes rondas de observaciones y comentarios de los evaluadores." 
  },
  { 
    id: "06", 
    title: "Decisión editorial", 
    desc: "Continuamos el acompañamiento y la coordinación necesaria a lo largo de las etapas finales hasta obtener la decisión de la revista, dentro del alcance acordado para cada proyecto." 
  }
];

const ProcessSection: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<{ [key: string]: boolean }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step-id');
            if (stepId) {
              setVisibleSteps((prev) => ({ ...prev, [stepId]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const currentCards = cardRefs.current;
    Object.values(currentCards).forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      Object.values(currentCards).forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section id="proceso" className="py-24 lg:py-36 px-6 lg:px-20 bg-[#a9b9c0]/10 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Contenedor principal en Grid de dos columnas con alineación superior obligatoria */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: Texto institucional fijo / Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6 pt-4 self-start">
            <span className="text-xs font-semibold tracking-widest text-[#4f8878] uppercase block">
              Metodología de trabajo
            </span>
            
            <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] tracking-tight leading-snug">
              Nuestro proceso
            </h2>
            
            <div className="h-1 w-20 bg-[#4f8878] rounded-full"></div>
            
            <p className="text-[#606e7c] text-base font-light leading-relaxed pt-2">
              Un flujo de trabajo estructurado en seis etapas diseñado para maximizar la coherencia, el rigor científico y la calidad editorial de su investigación. Deslice para conocer cada fase.
            </p>
          </div>

          {/* Columna Derecha: Tarjetas que se desplazan y animan con el scroll */}
          <div className="lg:col-span-7 space-y-6">
            {processSteps.map((step) => {
              const isVisible = visibleSteps[step.id];
              return (
                <div 
                  key={step.id}
                  data-step-id={step.id}
                  ref={(el) => {
                    cardRefs.current[step.id] = el;
                  }}
                  className={`group relative bg-white p-8 lg:p-10 rounded-2xl border border-[#a9b9c0]/30 shadow-sm hover:shadow-xl transition-all duration-700 ease-out flex flex-col justify-between transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                >
                  {/* Barra superior de acento dinámico al hacer hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4f8878] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>

                  <div>
                    {/* Número del paso con estilo editorial grande */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-4xl font-serif font-light text-[#a9b9c0]/60 group-hover:text-[#1d334b] transition-colors duration-500">
                        {step.id}
                      </span>
                    </div>

                    {/* Título de la etapa */}
                    <h3 className="text-xl font-medium text-[#1d334b] mb-4 tracking-tight">
                      {step.title}
                    </h3>

                    {/* Descripción ampliada y descriptiva */}
                    <p className="text-[#606e7c] text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  {/* Detalle inferior decorativo */}
                  <div className="mt-8 pt-4 border-t border-[#a9b9c0]/20 flex items-center justify-between text-xs text-[#606e7c]">
                    <span>Acompañamiento experto</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;