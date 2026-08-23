import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar el scroll a secciones internas si se encuentra en otra ruta
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-[#1d334b] text-[#a9b9c0] border-t border-[#a9b9c0]/20 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Columna 1: Marca y Propósito */}
        <div className="md:col-span-7 space-y-4">
          <h4 className="font-serif text-xl text-white tracking-tight">Consultoría Científica y Editorial</h4>
          <p className="text-sm text-[#a9b9c0]/80 leading-relaxed max-w-lg font-light">
            Cada investigación merece una estrategia de publicación acorde con su contenido, 
            sus resultados y sus objetivos.
          </p>
        </div>

        {/* Columna 2: Enlaces legales, navegación y Copyright */}
        <div className="md:col-span-5 flex flex-col md:items-end space-y-6">
          <div className="flex flex-wrap gap-6 text-sm text-[#a9b9c0]">
            {/* Enlace interno de React Router para la página de confidencialidad */}
            <Link to="/politica-confidencialidad" className="hover:text-white transition-colors duration-300">
              Confidencialidad
            </Link>
            
            {/* Enlace con manejo inteligente de ruta para ir a la sección #integridad */}
            <a 
              href="#integridad" 
              onClick={(e) => handleSectionClick(e, '#integridad')} 
              className="hover:text-white transition-colors duration-300"
            >
              Integridad Científica
            </a>

            <a href="mailto:contacto@ejemplo.com" className="hover:text-white transition-colors duration-300">
              Solicitar evaluación
            </a>
          </div>
          
          <div className="w-full md:w-auto text-left md:text-right pt-6 border-t border-[#a9b9c0]/20">
            <p className="text-xs text-[#a9b9c0]/60 font-light tracking-wide">
              © {new Date().getFullYear()} Consultoría Científica. Todos los derechos reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;