import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaCookies = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su
              dispositivo (ordenador, tablet, smartphone) cuando visita un sitio
              web. Estas cookies permiten que el sitio web recuerde sus acciones
              y preferencias durante un período de tiempo, para que no tenga que
              volver a introducirlos cada vez que visite el sitio o navegue de
              una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. ¿Qué tipos de cookies utilizamos?
            </h2>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.1. Cookies técnicas o necesarias
            </h3>
            <p>
              Son aquellas que permiten la navegación a través del sitio web y
              la utilización de las diferentes opciones o servicios que en ella
              existan. Por ejemplo, controlar el tráfico y la comunicación de
              datos, identificar la sesión, recordar los elementos que integran
              un pedido, etc.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.2. Cookies de preferencias o personalización
            </h3>
            <p>
              Son aquellas que permiten recordar información para que el usuario
              acceda al servicio con determinadas características que pueden
              diferenciar su experiencia de la de otros usuarios, como el
              idioma, el número de resultados a mostrar, etc.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
              2.3. Cookies de análisis o medición
            </h3>
            <p>
              Son aquellas que permiten el seguimiento y análisis del
              comportamiento de los usuarios en el sitio web. La información
              recogida mediante este tipo de cookies se utiliza en la medición
              de la actividad del sitio web y para la elaboración de perfiles de
              navegación con el fin de introducir mejoras en función del
              análisis de los datos de uso que hacen los usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Cookies utilizadas en este sitio web
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-border mt-4">
                <thead>
                  <tr className="bg-muted/30">
                    <th className="border border-border px-4 py-2 text-left text-foreground">
                      Nombre
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">
                      Tipo
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">
                      Finalidad
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-foreground">
                      Duración
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      cookie_consent
                    </td>
                    <td className="border border-border px-4 py-2">Técnica</td>
                    <td className="border border-border px-4 py-2">
                      Almacena el consentimiento del usuario sobre el uso de
                      cookies
                    </td>
                    <td className="border border-border px-4 py-2">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. ¿Cómo gestionar las cookies?
            </h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su
              equipo mediante la configuración de las opciones del navegador
              instalado en su ordenador. A continuación, le proporcionamos
              enlaces con instrucciones para los navegadores más comunes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p className="mt-4">
              Si desactiva las cookies, es posible que algunas funcionalidades
              del sitio web no estén disponibles o no funcionen correctamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Consentimiento
            </h2>
            <p>
              Al acceder a este sitio web por primera vez, verá un aviso
              informándole sobre el uso de cookies. Si continúa navegando,
              entenderemos que acepta el uso de las cookies necesarias. Para las
              cookies no esenciales, le solicitaremos su consentimiento expreso
              antes de su instalación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Actualización de la política de cookies
            </h2>
            <p>
              Esta política de cookies puede ser actualizada en función de
              exigencias legales, normativas o técnicas. Le recomendamos revisar
              esta política periódicamente para estar informado de cómo y para
              qué usamos las cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Contacto
            </h2>
            <p>
              Si tiene cualquier duda sobre esta política de cookies, puede
              contactar con nosotros a través del correo electrónico:{" "}
              <strong>a.martinro@gmail.com</strong>
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-12">
            Última actualización: Enero 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
