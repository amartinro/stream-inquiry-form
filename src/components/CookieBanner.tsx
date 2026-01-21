import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies propias y técnicas para mejorar tu experiencia de
            navegación. Puedes obtener más información en nuestra{" "}
            <Link
              to="/politica-cookies"
              className="text-primary hover:underline"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={rejectCookies}
            className="text-xs"
          >
            Rechazar
          </Button>
          <Button size="sm" onClick={acceptCookies} className="text-xs">
            Aceptar
          </Button>
        </div>
        <button
          onClick={rejectCookies}
          className="absolute top-2 right-2 sm:hidden text-muted-foreground hover:text-foreground"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
