import React, { useState } from 'react';

const EvaluationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="evaluacion" className="py-28 px-6 bg-[#a9b9c0]/10 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl w-full bg-white p-10 lg:p-14 rounded-3xl border border-[#a9b9c0]/40 shadow-xl text-center">
          <div className="w-16 h-16 bg-[#4f8878]/15 text-[#4f8878] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif">
            ✓
          </div>
          <h2 className="text-3xl font-serif text-[#1d334b] mb-4 tracking-tight">Hemos recibido su solicitud</h2>
          <p className="text-[#606e7c] leading-relaxed mb-6 font-light text-base">
            Gracias por compartir la información de su proyecto. La información será revisada para determinar 
            si el trabajo se encuentra dentro de nuestro ámbito de acompañamiento y cuáles podrían ser las siguientes etapas.
          </p>
          <div className="p-4 bg-[#a9b9c0]/10 rounded-2xl border border-[#a9b9c0]/30">
            <p className="text-[#1d334b] font-medium text-sm">
              En caso de que el proyecto sea viable para nuestros servicios, nos pondremos en contacto 
              para realizar una evaluación más detallada.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="evaluacion" className="py-28 px-6 lg:px-20 bg-[#a9b9c0]/10">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-[#a9b9c0]/40 shadow-xl">
        
        {/* Cabecera del formulario */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-[#4f8878] uppercase mb-3 block">
            Proceso de admisión inicial
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif text-[#1d334b] mb-4 tracking-tight">
            Solicitar evaluación inicial
          </h2>
          <p className="text-[#606e7c] font-light text-sm">
            Complete el siguiente formulario estructurado para conocer las características particulares de su investigación.
          </p>
          <div className="h-1 w-16 bg-[#4f8878] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECCIÓN 1: Información de contacto */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">1. Información de contacto</h3>
              <p className="text-xs text-[#606e7c] font-light">Datos para establecer la comunicación profesional.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Nombre completo *</label>
                <input required placeholder="Ej. Dr. Andrés Pérez" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Correo electrónico *</label>
                <input required type="email" placeholder="correo@institucion.edu" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Institución *</label>
                <input required placeholder="Universidad o centro de investigación" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">País *</label>
                <input required placeholder="Ej. Colombia" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Teléfono (opcional)</label>
                <input placeholder="+57 ..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
            </div>
          </div>

          {/* SECCIÓN 2: Información científica */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">2. Información científica</h3>
              <p className="text-xs text-[#606e7c] font-light">Detalles técnicos y temáticos del trabajo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Área de investigación *</label>
                <input required placeholder="Ej. Ingeniería de materiales" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Subárea *</label>
                <input required placeholder="Ej. Corrosión / Nanomateriales" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Título provisional del trabajo *</label>
                <input required placeholder="Título tentativo de su artículo" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Tipo de artículo *</label>
                <input required placeholder="Ej. Artículo de investigación, revisión..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Estado del proyecto *</label>
                <select required className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm">
                  <option value="">Seleccione el estado actual</option>
                  <option>Investigación en desarrollo</option>
                  <option>Resultados completos</option>
                  <option>Manuscrito en preparación</option>
                  <option>Manuscrito terminado</option>
                  <option>Manuscrito previamente sometido</option>
                  <option>Manuscrito rechazado</option>
                  <option>Manuscrito en proceso de revisión</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Descripción breve de la investigación *</label>
                <textarea required placeholder="Resumen del alcance, metodología y resultados principales..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm h-32 resize-none" />
              </div>
            </div>
          </div>

          {/* SECCIÓN 3: Información editorial */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">3. Información editorial</h3>
              <p className="text-xs text-[#606e7c] font-light">Estatus del proceso de publicación.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#a9b9c0]/10 p-6 rounded-2xl border border-[#a9b9c0]/30">
              {[
                '¿Tiene una revista objetivo?', 
                '¿Ha sido sometido anteriormente?', 
                '¿Ha recibido comentarios de revisores?', 
                '¿Tiene una fecha límite?', 
                '¿Requiere traducción?', 
                '¿Cuenta con figuras y tablas definitivas?'
              ].map((q) => (
                <label key={q} className="flex items-center gap-3 p-2 bg-white rounded-xl border border-[#a9b9c0]/30 cursor-pointer hover:border-[#4f8878] transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#a9b9c0] text-[#1d334b] focus:ring-[#1d334b]" />
                  <span className="text-xs font-medium text-[#1d334b]">{q}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SECCIÓN 4: Requerimiento y Archivos */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">4. Requerimientos y Documentación</h3>
              <p className="text-xs text-[#606e7c] font-light">Adjunte los documentos preliminares bajo estricta confidencialidad.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">¿Qué tipo de acompañamiento necesita? *</label>
              <textarea required placeholder="Explique brevemente las necesidades editoriales específicas del proyecto..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm h-32 resize-none" />
            </div>

            <div className="p-6 bg-[#a9b9c0]/10 border-2 border-dashed border-[#a9b9c0]/50 rounded-2xl text-center">
              <label className="block cursor-pointer">
                <span className="text-sm font-medium text-[#1d334b] block mb-1">Adjuntar manuscrito, resumen o cartas de rechazo</span>
                <span className="text-xs text-[#606e7c] block mb-4">Formatos admitidos: PDF, DOCX (Máx. 25MB)</span>
                <input type="file" multiple className="block w-full text-xs text-[#606e7c] file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-[#1d334b] file:text-white hover:file:bg-[#4f8878] file:cursor-pointer transition-all mx-auto" />
              </label>
            </div>
          </div>

          {/* Botón de envío final */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-[#1d334b] text-white py-4 px-8 font-medium rounded-xl shadow-lg hover:bg-[#4f8878] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-base"
            >
              Enviar solicitud de evaluación
            </button>
            <p className="text-center text-xs text-[#606e7c] mt-4 font-light">
              Su información será tratada bajo rigurosas políticas de confidencialidad.
            </p>
          </div>

        </form>
      </div>
    </section>
  );
};

export default EvaluationForm;