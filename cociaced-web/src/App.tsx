import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParalaxSection";
import FaqSection from "./pages/Faq";
import EvaluationForm from "./pages/Form";
import HeroSection from "./pages/Hero";
import InitialEvaluationSection from "./components/InitialAssessment";
import IntegritySection from "./components/Integrity";
import ProcessSection from "./components/OurProcess";
import PublishingExpectationsSection from "./components/PublishingExpectationsSection";
import ResearcherInputSection from "./components/ResearcherInputSection";
import ScientificParticipationSection from "./components/ScientificParticipationSection";
import ServicesSection from "./pages/Services";
import WhatWeDoSection from "./components/WhatWeDoSection";

import ScrollReveal from "./components/ScrollReveal";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TrustMessageSection from "./components/TrustMessageSection";
import FinalClosingSection from "./components/FinalClosingSection";

function HomePage() {
  return (
    <>
      {/* 1. El investigador llega a la página */}
      <HeroSection />

      {/* Mensaje de confianza / Estrategia individual */}
      <ScrollReveal>
        <TrustMessageSection />
      </ScrollReveal>

      {/* Separador visual: Enfoque analítico y de datos */}
      <ScrollReveal>
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=2000">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-2 block">Rigor Metodológico</span>
            <h3 className="text-2xl lg:text-3xl font-serif text-white">Transformamos resultados de investigación en publicaciones de alto impacto</h3>
          </div>
        </ParallaxSection>
      </ScrollReveal>

      {/* 2. Conoce el servicio */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>

      {/* Separador visual: Entorno de redacción científica */}
      <ScrollReveal>
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-2 block">Estrategia Editorial</span>
            <h3 className="text-2xl lg:text-3xl font-serif text-white">Acompañamiento especializado en cada etapa del proceso de revisión</h3>
          </div>
        </ParallaxSection>
      </ScrollReveal>

      {/* 3. Entiende el proceso y lo que debe aportar */}
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      <ScrollReveal>
        <ResearcherInputSection />
      </ScrollReveal>

      {/* Separador visual: Perspectiva y expectativas */}
      <ScrollReveal>
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-2 block">Perspectiva Realista</span>
            <h3 className="text-2xl lg:text-3xl font-serif text-white">Maximización estratégica de las posibilidades de publicación</h3>
          </div>
        </ParallaxSection>
      </ScrollReveal>

      {/* 4. Comprende que no existe una garantía artificial de publicación */}
      <ScrollReveal>
        <PublishingExpectationsSection />
      </ScrollReveal>

      {/* Separador visual: Ética y precisión */}
      <ScrollReveal>
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-2 block">Ética y Transparencia</span>
            <h3 className="text-2xl lg:text-3xl font-serif text-white">Compromiso estricto con la integridad científica</h3>
          </div>
        </ParallaxSection>
      </ScrollReveal>

      {/* 5. Conoce el enfoque de integridad científica y coautoría */}
      <ScrollReveal>
        <IntegritySection />
      </ScrollReveal>

      <ScrollReveal>
        <ScientificParticipationSection />
      </ScrollReveal>

      {/* Preguntas frecuentes para resolver dudas previas */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* Separador visual: Admisión y evaluación */}
      <ScrollReveal>
        <ParallaxSection bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2000">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4f8878] mb-2 block">Evaluación Inicial</span>
            <h3 className="text-2xl lg:text-3xl font-serif text-white">Comencemos a analizar el perfil y los objetivos de su investigación</h3>
          </div>
        </ParallaxSection>
      </ScrollReveal>

      {/* 6, 7 y 8. Solicita evaluación, completa el formulario y adjunta información */}
      <ScrollReveal>
        <InitialEvaluationSection />
      </ScrollReveal>

      <ScrollReveal>
        <EvaluationForm />
      </ScrollReveal>

      {/* Frase final de cierre institucional */}
      <ScrollReveal>
        <FinalClosingSection />
      </ScrollReveal>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politica-confidencialidad" element={<PrivacyPolicyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;