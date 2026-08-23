import React from 'react';

const IntegritySection: React.FC = () => {
  return (
    <section id="integridad" className="py-20 lg:py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto border-l-4 border-slate-900 pl-8 lg:pl-12">
        {/* Título de la sección */}
        <h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-10">
          Compromiso con la integridad científica
        </h2>

        {/* Contenido principal */}
        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Trabajamos exclusivamente con investigaciones y resultados proporcionados por los autores. 
            No fabricamos resultados, no alteramos datos, no manipulamos evidencias experimentales y 
            no intervenimos indebidamente en los procesos de revisión por pares.
          </p>
          <p>
            La autoría debe corresponder a las contribuciones realizadas al trabajo. Los autores 
            mantienen la responsabilidad sobre la originalidad, veracidad e integridad de la investigación.
          </p>
          <p className="pt-4 font-medium text-slate-900 italic">
            La decisión final de publicación corresponde exclusivamente a la revista y a sus 
            procesos editoriales y de evaluación científica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegritySection;