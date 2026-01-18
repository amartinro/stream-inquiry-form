import { motion } from "framer-motion";
import { Video, Radio, Clapperboard, Users } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Grabación profesional",
    description: "Equipos de última generación y operadores expertos",
  },
  {
    icon: Radio,
    title: "Streaming en vivo",
    description: "Emisión en tiempo real a cualquier plataforma",
  },
  {
    icon: Clapperboard,
    title: "Postproducción",
    description: "Edición y entrega en formatos profesionales",
  },
  {
    icon: Users,
    title: "Soporte completo",
    description: "Equipo técnico presente durante todo el evento",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Servicios completos de producción audiovisual para que tu evento sea
            inolvidable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
