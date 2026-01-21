import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Building2, Mail, Sparkles, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const eventTypes = [
  "Congreso",
  "Charla / Ponencia",
  "Podcast",
  "Lanzamiento en vivo",
  "Evento corporativo",
  "Otro",
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    eventType: "",
    eventDate: "",
    phone: "",
    email: "",
  });
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-lead-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("¡Solicitud enviada correctamente!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error al enviar la solicitud. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
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
          <Label htmlFor="phone" className="text-foreground/80">
            Teléfono de contacto
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="+34 600 000 000"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
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

      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacy"
          checked={acceptedPrivacy}
          onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
          required
        />
        <Label
          htmlFor="privacy"
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          He leído y acepto la{" "}
          <Link
            to="/politica-privacidad"
            className="text-primary hover:underline"
            target="_blank"
          >
            Política de Privacidad
          </Link>{" "}
          y consiento el tratamiento de mis datos para recibir información sobre
          los servicios solicitados.
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isLoading || !acceptedPrivacy}
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
