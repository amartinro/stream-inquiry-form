import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Building2, Mail, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const eventTypes = [
  "Conferencia",
  "Concierto",
  "Evento corporativo",
  "Boda",
  "Streaming en vivo",
  "Evento deportivo",
  "Otro",
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    eventType: "",
    eventDate: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("¡Solicitud enviada correctamente!");
    console.log("Form submitted:", formData);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">¡Gracias!</h3>
        <p className="text-muted-foreground">
          Nos pondremos en contacto contigo pronto para hablar sobre tu evento.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6"
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Solicita información
        </h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessName" className="text-foreground/80">
            Nombre del negocio
          </Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="businessName"
              placeholder="Tu empresa o evento"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              required
              className="pl-10 bg-muted border-border focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventType" className="text-foreground/80">
            Tipo de evento
          </Label>
          <Select
            value={formData.eventType}
            onValueChange={(value) =>
              setFormData({ ...formData, eventType: value })
            }
            required
          >
            <SelectTrigger className="bg-muted border-border">
              <SelectValue placeholder="Selecciona el tipo de evento" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate" className="text-foreground/80">
            Fecha del evento
          </Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={(e) =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
              required
              className="pl-10 bg-muted border-border focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground/80">
            Email de contacto
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="pl-10 bg-muted border-border focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-primary text-primary-foreground font-semibold py-6 rounded-xl hover:opacity-90 transition-opacity glow-effect"
      >
        {isLoading ? "Enviando..." : "Solicitar información"}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Te contactaremos en menos de 24 horas
      </p>
    </motion.form>
  );
};

export default LeadForm;
