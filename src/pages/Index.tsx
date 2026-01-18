import { motion } from "framer-motion";
import { Video } from "lucide-react";
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
                Grabación y streaming profesional para conferencias, conciertos,
                bodas y todo tipo de eventos. Lleva tu evento más allá de las
                cuatro paredes.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Streaming en vivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Grabación 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Multi-cámara</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Form */}
            <div className="lg:pl-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 EventStream Pro. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
