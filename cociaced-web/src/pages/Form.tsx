import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EvaluationForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Reemplaza con tus credenciales de EmailJS
  const SERVICE_ID = 'service_v5bvedi';
  const TEMPLATE_ID = 'template_yfj81mf';
  const PUBLIC_KEY = '2bKpwLP7O-Aja8Oms';

  // Función para convertir un archivo local a una cadena Base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const formData = new FormData(formRef.current);

      // Procesar archivo adjunto
      let fileBase64 = '';
      const fileInput = fileInputRef.current;

      if (fileInput && fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];

        // EmailJS soporta adjuntos hasta 5MB según el plan
        const MAX_SIZE_MB = 5;
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
          setErrorMessage(`El archivo supera el límite permitido de ${MAX_SIZE_MB}MB.`);
          setLoading(false);
          return;
        }

        fileBase64 = await convertFileToBase64(file);
      }

      // Preparar el objeto de parámetros exactos para EmailJS
      const templateParams = {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        user_institution: formData.get('user_institution') as string,
        user_country: formData.get('user_country') as string,
        user_phone: (formData.get('user_phone') as string) || 'No proporcionado',
        research_area: formData.get('research_area') as string,
        research_subarea: formData.get('research_subarea') as string,
        project_title: formData.get('project_title') as string,
        article_type: formData.get('article_type') as string,
        project_status: formData.get('project_status') as string,
        project_description: formData.get('project_description') as string,
        
        // Mapeo de respuestas de los Checkboxes
        editorial_question_1: formData.get('editorial_question_1') ? 'Sí' : 'No',
        editorial_question_2: formData.get('editorial_question_2') ? 'Sí' : 'No',
        editorial_question_3: formData.get('editorial_question_3') ? 'Sí' : 'No',
        editorial_question_4: formData.get('editorial_question_4') ? 'Sí' : 'No',
        editorial_question_5: formData.get('editorial_question_5') ? 'Sí' : 'No',
        editorial_question_6: formData.get('editorial_question_6') ? 'Sí' : 'No',
        
        support_needed: formData.get('support_needed') as string,
        
        // Archivo en Base64 para adjuntar
        content_file: fileBase64,
      };

      // Envío del correo vía EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Ocurrió un error al enviar el formulario. Por favor, inténtelo de nuevo.');
    } finally {
      setLoading(false);
    }
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
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
          
          {/* SECCIÓN 1: Información de contacto */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">1. Información de contacto</h3>
              <p className="text-xs text-[#606e7c] font-light">Datos para establecer la comunicación profesional.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Nombre completo *</label>
                <input name="user_name" required placeholder="Ej. Dr. Andrés Pérez" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Correo electrónico *</label>
                <input name="user_email" required type="email" placeholder="correo@institucion.edu" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Institución *</label>
                <input name="user_institution" required placeholder="Universidad o centro de investigación" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">País *</label>
                <input name="user_country" required placeholder="Ej. Colombia" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Teléfono (opcional)</label>
                <input name="user_phone" placeholder="+57 ..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
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
                <input name="research_area" required placeholder="Ej. Ingeniería de materiales" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Subárea *</label>
                <input name="research_subarea" required placeholder="Ej. Corrosión / Nanomateriales" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Título provisional del trabajo *</label>
                <input name="project_title" required placeholder="Título tentativo de su artículo" className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Tipo de artículo *</label>
                <input name="article_type" required placeholder="Ej. Artículo de investigación, revisión..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Estado del proyecto *</label>
                <select name="project_status" required className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm">
                  <option value="">Seleccione el estado actual</option>
                  <option value="Investigación en desarrollo">Investigación en desarrollo</option>
                  <option value="Resultados completos">Resultados completos</option>
                  <option value="Manuscrito en preparación">Manuscrito en preparación</option>
                  <option value="Manuscrito terminado">Manuscrito terminado</option>
                  <option value="Manuscrito previamente sometido">Manuscrito previamente sometido</option>
                  <option value="Manuscrito rechazado">Manuscrito rechazado</option>
                  <option value="Manuscrito en proceso de revisión">Manuscrito en proceso de revisión</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">Descripción breve de la investigación *</label>
                <textarea name="project_description" required placeholder="Resumen del alcance, metodología y resultados principales..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm h-32 resize-none" />
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
              ].map((q, index) => (
                <label key={q} className="flex items-center gap-3 p-2 bg-white rounded-xl border border-[#a9b9c0]/30 cursor-pointer hover:border-[#4f8878] transition-colors">
                  <input name={`editorial_question_${index + 1}`} type="checkbox" className="w-4 h-4 rounded border-[#a9b9c0] text-[#1d334b] focus:ring-[#1d334b]" />
                  <span className="text-xs font-medium text-[#1d334b]">{q}</span>
                </label>
              ))}
            </div>
          </div>

          {/* SECCIÓN 4: Requerimientos y Documentación */}
          <div className="space-y-6">
            <div className="border-b border-[#a9b9c0]/30 pb-3">
              <h3 className="text-lg font-serif font-medium text-[#1d334b]">4. Requerimientos y Documentación</h3>
              <p className="text-xs text-[#606e7c] font-light">Adjunte los documentos preliminares bajo estricta confidencialidad.</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#606e7c] uppercase tracking-wider mb-2">¿Qué tipo de acompañamiento necesita? *</label>
              <textarea name="support_needed" required placeholder="Explique brevemente las necesidades editoriales específicas del proyecto..." className="w-full px-4 py-3.5 bg-[#a9b9c0]/10 border border-[#a9b9c0]/40 rounded-xl text-[#1d334b] placeholder:text-[#606e7c]/60 focus:outline-none focus:border-[#1d334b] focus:bg-white transition-all duration-300 text-sm h-32 resize-none" />
            </div>

         {/*   <div className="p-6 bg-[#a9b9c0]/10 border-2 border-dashed border-[#a9b9c0]/50 rounded-2xl text-center">
              <label className="block cursor-pointer">
                <span className="text-sm font-medium text-[#1d334b] block mb-1">Adjuntar manuscrito, resumen o cartas de rechazo</span>
                <span className="text-xs text-[#606e7c] block mb-4">Formatos admitidos: PDF, DOCX (Máx. 5MB)</span>
                <input 
                  ref={fileInputRef} 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  className="block w-full text-xs text-[#606e7c] file:mr-4 file:py-2.5 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-medium file:bg-[#1d334b] file:text-white hover:file:bg-[#4f8878] file:cursor-pointer transition-all mx-auto" 
                />
              </label>
            </div>*/}
          </div>

          {/* Alerta de Error en pantalla */}
          {errorMessage && (
            <div className="p-4 bg-red-50 text-red-600 border border-red-200 rounded-xl text-center text-sm font-medium">
              {errorMessage}
            </div>
          )}

          {/* Botón de envío final */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#1d334b] text-white py-4 px-8 font-medium rounded-xl shadow-lg hover:bg-[#4f8878] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Enviando solicitud...
                </>
              ) : (
                'Enviar solicitud de evaluación'
              )}
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