import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#a9b9c0]/10 py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 lg:p-16 rounded-3xl border border-[#a9b9c0]/40 shadow-xl space-y-10">
        
        {/* Cabecera de la página */}
        <div className="border-b border-[#a9b9c0]/30 pb-8">
          <span className="text-xs font-semibold tracking-widest text-[#4f8878] uppercase mb-3 block">
            Marco Legal y Normativo
          </span>
          <h1 className="text-3xl lg:text-4xl font-serif text-[#1d334b] mb-4 tracking-tight">
            Política de Confidencialidad y Privacidad
          </h1>
          <p className="text-[#606e7c] text-sm font-light">
            Última actualización: Agosto de 2026
          </p>
        </div>

        {/* Contenido formal y estructurado */}
        <div className="space-y-8 text-[#606e7c] text-sm lg:text-base font-light leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1d334b]">
              1. Compromiso con la confidencialidad
            </h2>
            <p>
              En la consultoría científica y editorial reconocemos la absoluta sensibilidad de la propiedad intelectual, los datos experimentales y los manuscritos en desarrollo. Por este motivo, garantizamos un estricto secreto profesional sobre toda la información compartida durante las evaluaciones y procesos de acompañamiento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1d334b]">
              2. Tratamiento de la documentación e investigación
            </h2>
            <p>
              Los documentos, resúmenes, borradores o archivos adjuntos enviados a través de nuestros formularios de admisión son tratados bajo los más altos estándares de seguridad y privacidad:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#606e7c]">
              <li>La información no será divulgada, comercializada ni compartida con terceros ajenos al equipo de consultoría.</li>
              <li>El contenido se utiliza exclusivamente con fines de evaluación académica, diagnóstica y diseño estratégico de publicación.</li>
              <li>Bajo solicitud expresa del investigador, se pueden suscribir acuerdos de confidencialidad (NDA) específicos antes de la recepción de material inédito.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1d334b]">
              3. Datos de contacto y recopilación
            </h2>
            <p>
              Los datos personales solicitados (nombre, correo institucional, afiliación académica) se emplean exclusivamente para establecer comunicación profesional, coordinar las etapas del servicio y emitir propuestas personalizadas según las características de cada proyecto científico.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1d334b]">
              4. Propiedad intelectual
            </h2>
            <p>
              Todo investigador o autor conserva de manera íntegra y exclusiva los derechos de propiedad intelectual sobre sus manuscritos, datos y resultados científicos antes, durante y después del proceso de asesoría. Nuestra labor se limita al acompañamiento técnico, metodológico y editorial acordado contractualmente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-medium text-[#1d334b]">
              5. Contacto institucional
            </h2>
            <p>
              Si tiene dudas adicionales respecto al tratamiento de sus datos o sobre nuestras políticas de seguridad de la información, puede escribirnos directamente a través de los canales oficiales de contacto o al correo electrónico asignado.
            </p>
          </section>

        </div>

        {/* Botón de retorno al inicio */}
        <div className="pt-8 border-t border-[#a9b9c0]/30 flex justify-start">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] shadow-sm transition-all duration-300"
          >
            ← Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;