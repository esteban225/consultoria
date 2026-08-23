import React from 'react';

const ScientificParticipationSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-white border-b border-[#a9b9c0]/30">
      <div className="max-w-4xl mx-auto bg-[#1d334b] text-white p-8 lg:p-14 rounded-3xl shadow-xl relative overflow-hidden">
        {/* Destello decorativo de fondo con el verde científico */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4f8878]/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-3 block">
          Transparencia y Ética
        </span>
        <h2 className="text-3xl lg:text-4xl font-serif mb-8 text-white">
          Participación científica
        </h2>
        
        <div className="space-y-6 text-[#a9b9c0] font-light leading-relaxed text-base">
          <p>
            Dependiendo de la naturaleza del proyecto y de las contribuciones realizadas, el acompañamiento puede incluir una participación científica e intelectual en el desarrollo y preparación del trabajo.
          </p>
          <p className="p-4 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-sm">
            Cuando las contribuciones realizadas cumplan con los criterios de autoría establecidos por la revista y las buenas prácticas de publicación científica, podrá contemplarse la participación como coautor.
          </p>
          <p>
            Cuando corresponda, también podrá asumirse la coordinación de la correspondencia editorial con la revista. La autoría debe estar estrictamente vinculada a contribuciones reales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificParticipationSection;