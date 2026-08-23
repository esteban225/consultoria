import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Lista de elementos de navegación con sus respectivos enlaces o IDs del DOM
const navLinks = [
  { name: "Inicio", href: "/", isRoute: true },
  { name: "Servicios", href: "#servicios", isRoute: false },
  { name: "Proceso", href: "#proceso", isRoute: false },
  { name: "Evaluación", href: "#evaluacion", isRoute: false },
  { name: "Integridad científica", href: "#integridad", isRoute: false },
  { name: "Preguntas frecuentes", href: "#faq", isRoute: false }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar la navegación interna o redirección si estamos en otra página
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string; isRoute: boolean }) => {
    setIsOpen(false);

    if (item.isRoute) {
      e.preventDefault();
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // Si estamos en otra página (ej. /politica-confidencialidad) y hacemos clic en una sección de la home
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md border-b border-[#a9b9c0]/40 transition-all duration-300">
      <nav className=" mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">
        
        {/* Logotipo con redirección al inicio */}
        <Link to="/" className="w-32 sm:w-56 cursor-pointer hover:opacity-80 transition-opacity flex items-center">
          <img src="./conedit.jpg" alt="Logo Consultoría Editorial" className="w-full h-auto object-contain" />
        </Link>

        {/* Menú de Escritorio */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item)}
              className="group relative text-xs uppercase tracking-wider font-medium text-[#606e7c] transition-all duration-300 hover:text-[#1d334b] cursor-pointer"
            >
              {item.name}
              {/* Línea de acento inferior en verde científico (#4f8878) */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4f8878] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          
          {/* Botón CTA de Escritorio */}
          <a 
            href="#evaluacion" 
            onClick={(e) => handleNavClick(e, { name: "Evaluación", href: "#evaluacion", isRoute: false })}
            className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium bg-[#1d334b] text-white rounded-xl hover:bg-[#4f8878] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm ml-2"
          >
            Solicitar evaluación
          </a>
        </div>

        {/* Botón de Hamburguesa para Móviles */}
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
              onClick={(e) => handleNavClick(e, item)}
              className="text-sm font-medium text-[#606e7c] hover:text-[#1d334b] uppercase tracking-wider transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          
          {/* Botón CTA para Móviles */}
          <a 
            href="#evaluacion" 
            onClick={(e) => handleNavClick(e, { name: "Evaluación", href: "#evaluacion", isRoute: false })}
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