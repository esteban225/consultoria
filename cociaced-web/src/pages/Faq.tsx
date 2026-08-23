import React, { useState } from 'react';

const faqData = [
  {
    question: "¿Garantizan la publicación?",
    answer: "No. La decisión final corresponde a la revista y depende de su evaluación editorial y científica."
  },
  {
    question: "¿Qué debo tener para solicitar una evaluación?",
    answer: "Idealmente debe contar con una investigación, resultados o un manuscrito sobre el cual podamos trabajar."
  },
  {
    question: "¿Pueden ayudarme a seleccionar la revista?",
    answer: "Sí. La selección estratégica de una revista puede formar parte de la evaluación y del acompañamiento."
  },
  {
    question: "¿Pueden trabajar sobre un manuscrito que ya fue rechazado?",
    answer: "Sí. Se puede evaluar el manuscrito, las razones del rechazo y las posibles alternativas."
  },
  {
    question: "¿Pueden acompañar las respuestas a los revisores?",
    answer: "Sí, cuando el servicio contratado contemple el acompañamiento durante el proceso de revisión."
  },
  {
    question: "¿La traducción está incluida?",
    answer: "La traducción debe evaluarse de acuerdo con las necesidades particulares del proyecto y puede constituir un servicio independiente."
  },
  {
    question: "¿Puedo solicitar ayuda si todavía no tengo el artículo completamente terminado?",
    answer: "Sí. La evaluación inicial permitirá determinar en qué estado se encuentra el proyecto y qué tipo de acompañamiento puede ser necesario."
  },
  {
    question: "¿Pueden participar como coautores?",
    answer: "Cuando exista una contribución científica e intelectual que justifique la autoría y de acuerdo con las políticas de la revista correspondiente, puede contemplarse la participación como coautor."
  },
  {
    question: "¿Quién será el autor de correspondencia?",
    answer: "Esto se determinará de acuerdo con las responsabilidades asumidas, las contribuciones realizadas y las políticas de la revista."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 px-6 lg:px-20 bg-[#a9b9c0]/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabecera de la sección */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-3 block">
            Resolución de dudas
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] mb-4">
            Preguntas frecuentes
          </h2>
          <div className="h-1 w-20 bg-[#4f8878] rounded-full"></div>
        </div>

        {/* Lista de acordeón FAQ */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#a9b9c0]/40 rounded-xl transition-all overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-medium text-[#1d334b] focus:outline-none hover:bg-[#a9b9c0]/5 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-[#4f8878] text-xl font-light ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-[#606e7c] text-sm font-light leading-relaxed border-t border-[#a9b9c0]/20 pt-4 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;