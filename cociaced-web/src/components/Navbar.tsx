import React, { useState } from 'react';

// Lista de elementos de navegación con sus respectivos enlaces a las secciones (IDs del DOM)
const navLinks = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Evaluación", href: "#evaluacion" },
  { name: "Integridad científica", href: "#integridad" },
  { name: "Preguntas frecuentes", href: "#faq" }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para cerrar el menú móvil al hacer clic en un enlace de navegación
  const handleScrollToSection = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-[#a9b9c0]/40 transition-all duration-300">
      <nav className=" mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        
        {/* Logotipo adaptado para dispositivos móviles y escritorio */}
        <div className="w-32 sm:w-56 cursor-pointer hover:opacity-80 transition-opacity flex items-center">
          <img src="./conedit.jpg" alt="Logo Consultoría Editorial" className="w-full h-auto object-contain" />
        </div>

        {/* Menú de Escritorio (Oculto en móviles y tablets pequeñas) */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="group relative text-xs uppercase tracking-wider font-medium text-[#606e7c] transition-all duration-300 hover:text-[#1d334b]"
            >
              {item.name}
              {/* Línea de acento inferior en verde científico (#4f8878) */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4f8878] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          
          {/* Botón CTA de Escritorio con azul profundo (#1d334b) y hover en verde científico (#4f8878) */}
          <a 
            href="#evaluacion" 
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm ml-2"
          >
            Contacto
          </a>
        </div>

        {/* Botón de Hamburguesa para Móviles y pantallas medianas */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 text-[#606e7c] hover:text-[#1d334b] focus:outline-none transition-colors"
          aria-label="Abrir menú de navegación"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </nav>

      {/* Menú Desplegable Móvil */}
      <div className={`xl:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-[#a9b9c0]/40 shadow-lg transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[500px] py-8 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-5 px-6">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={handleScrollToSection}
              className="text-sm font-medium text-[#606e7c] hover:text-[#1d334b] uppercase tracking-wider transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Botón CTA para Móviles */}
          <a 
            href="#evaluacion" 
            onClick={handleScrollToSection}
            className="w-full text-center px-6 py-3 text-xs uppercase tracking-wider font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] shadow-sm transition-all duration-300 mt-2"
          >
            Solicitar evaluación
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;