import { motion } from "framer-motion";
import { Zap, Wifi, Video, Film, MonitorPlay, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Protección SAI",
    description: "Protección ante cortes de luz mediante sistemas de alimentación ininterrumpida",
  },
  {
    icon: Wifi,
    title: "Conexión 5G de respaldo",
    description: "Conexión móvil 5G como backup para garantizar la emisión sin interrupciones",
  },
  {
    icon: Video,
    title: "Multicámara",
    description: "Producción multicámara profesional para capturar cada momento desde múltiples ángulos",
  },
  {
    icon: Film,
    title: "Entrega de vídeo grabado",
    description: "Recibe el vídeo editado y listo para compartir o archivar",
  },
  {
    icon: MonitorPlay,
    title: "Emisión en directo",
    description: "Streaming en las plataformas más utilizadas: YouTube, Twitch y más",
  },
  {
    icon: Zap,
    title: "Soporte completo",
    description: "Equipo técnico profesional presente durante todo tu evento",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas para tu evento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Equipamiento profesional y equipo técnico especializado para congresos, charlas, podcasts y lanzamientos en vivo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
