import { motion } from "framer-motion";
import { Video, MessageCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Features from "@/components/Features";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Producción de eventos en vivo"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow opacity-50 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Producción audiovisual profesional
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Tu evento,{" "}
                <span className="text-gradient">emitido al mundo</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Grabación y streaming profesional para congresos, charlas,
                podcasts y lanzamientos en vivo. Lleva tu evento más allá de las
                cuatro paredes.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Streaming en vivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Multicámara</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Entrega de vídeo</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form + WhatsApp */}
            <div className="lg:pl-8 space-y-4">
              <LeadForm />
              
              {/* Mini WhatsApp CTA */}
              <motion.a
                href="https://wa.me/34665651344?text=Hola%2C%20quiero%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 group-hover:animate-pulse" />
                <span className="whitespace-nowrap text-sm md:text-base">Escríbeme por WhatsApp</span>
                <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Social Content Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contenido editado para redes sociales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Además de la grabación completa de tu evento, ofrecemos la posibilidad de elaborar 
              contenido editado y optimizado para su publicación en redes sociales. Clips destacados, 
              resúmenes, momentos clave... todo listo para maximizar el alcance de tu evento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.a
            href="https://wa.me/34665651344?text=Hola%2C%20quiero%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-1 shadow-2xl shadow-[#25D366]/20"
          >
            <div className="relative bg-background/95 backdrop-blur-sm rounded-[22px] p-8 md:p-12">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-pulse">
                    <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    ¿Prefieres hablar directamente?
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    Escríbeme por WhatsApp y resolvemos tus dudas al momento. Sin compromisos.
                  </p>
                  <div className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-lg">
                    <span>Iniciar conversación</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026. Alberto Martín. Todos los derechos reservados.
            </p>
            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/aviso-legal"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Aviso Legal
              </a>
              <a
                href="/politica-privacidad"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="/politica-cookies"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Cookies
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
