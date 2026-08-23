import React, { type ReactNode } from 'react';

// Definimos la interfaz para recibir la URL de la imagen y contenido opcional (children)
interface ParallaxSectionProps {
  bgImage: string;
  children?: ReactNode;
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  bgImage, 
  children,
  className = "" 
}) => {
  return (
    <section className={`relative w-full py-32 lg:py-48 px-6 lg:px-20 overflow-hidden ${className}`}>
      
      {/* Capa de fondo con efecto Parallax y la imagen recibida por parámetro */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${bgImage}')` 
        }}
      >
        {/* Capa oscura superpuesta con un sutil tinte azul científico para garantizar la legibilidad */}
        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px]" />
      </div>

      {/* Contenedor para inyectar contenido dinámico por encima de la imagen fija */}
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        {children}
      </div>

    </section>
  );
};

export default ParallaxSection;