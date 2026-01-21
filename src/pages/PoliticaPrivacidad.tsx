import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaPrivacidad = () => {
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
          Política de Privacidad
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Responsable del tratamiento
            </h2>
            <p>
              De conformidad con lo dispuesto en el Reglamento (UE) 2016/679 del
              Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD) y
              la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales (LOPD-GDD), le
              informamos que los datos personales que nos facilite serán
              tratados por:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Responsable:</strong> Alberto Martín
              </li>
              <li>
                <strong>Email de contacto:</strong> a.martinro@gmail.com
              </li>
              <li>
                <strong>Finalidad:</strong> Gestión de solicitudes de información
                y presupuestos para servicios de producción audiovisual
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Datos que recopilamos
            </h2>
            <p>A través del formulario de contacto, recopilamos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Tipo de evento</li>
              <li>Mensaje o descripción del proyecto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p>Sus datos personales serán tratados para las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Atender y gestionar las solicitudes de información y
                presupuestos realizadas a través del formulario de contacto.
              </li>
              <li>
                Mantener comunicación relacionada con los servicios solicitados.
              </li>
              <li>
                Enviar información comercial sobre nuestros servicios, solo si
                ha dado su consentimiento expreso.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Legitimación del tratamiento
            </h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Consentimiento del interesado:</strong> Al enviar el
                formulario de contacto, usted consiente expresamente el
                tratamiento de sus datos para las finalidades indicadas.
              </li>
              <li>
                <strong>Ejecución de un contrato:</strong> Cuando el tratamiento
                sea necesario para la ejecución de un contrato de servicios.
              </li>
              <li>
                <strong>Interés legítimo:</strong> Para el mantenimiento de la
                relación comercial y la mejora de nuestros servicios.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos personales se conservarán mientras se mantenga la
              relación comercial o durante el tiempo necesario para cumplir con
              las obligaciones legales. Una vez finalizada la relación, los
              datos se conservarán bloqueados durante los plazos de prescripción
              legalmente establecidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Destinatarios de los datos
            </h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal.
              Podemos utilizar proveedores de servicios (como servicios de
              correo electrónico) que actúan como encargados del tratamiento y
              que únicamente tratan los datos conforme a nuestras instrucciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Derechos del interesado
            </h2>
            <p>
              Puede ejercer los siguientes derechos en relación con sus datos
              personales:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Derecho de acceso:</strong> Conocer qué datos personales
                estamos tratando.
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Solicitar la
                modificación de datos inexactos o incompletos.
              </li>
              <li>
                <strong>Derecho de supresión:</strong> Solicitar la eliminación
                de sus datos cuando ya no sean necesarios.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse al tratamiento
                de sus datos en determinadas circunstancias.
              </li>
              <li>
                <strong>Derecho de limitación:</strong> Solicitar la limitación
                del tratamiento en determinados supuestos.
              </li>
              <li>
                <strong>Derecho de portabilidad:</strong> Recibir sus datos en
                un formato estructurado y de uso común.
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> Puede
                retirar su consentimiento en cualquier momento.
              </li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede contactar con nosotros a través
              del correo electrónico: <strong>a.martinro@gmail.com</strong>
            </p>
            <p className="mt-4">
              Asimismo, tiene derecho a presentar una reclamación ante la
              Agencia Española de Protección de Datos (AEPD) si considera que
              sus derechos no han sido atendidos correctamente:{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.aepd.es
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Medidas de seguridad
            </h2>
            <p>
              Hemos implementado las medidas técnicas y organizativas adecuadas
              para garantizar un nivel de seguridad apropiado al riesgo,
              incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Cifrado de las comunicaciones (HTTPS/SSL).</li>
              <li>Acceso restringido a los datos personales.</li>
              <li>Copias de seguridad periódicas.</li>
              <li>
                Revisión y actualización continua de las medidas de seguridad.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Modificaciones de la política de privacidad
            </h2>
            <p>
              Nos reservamos el derecho a modificar la presente política de
              privacidad para adaptarla a novedades legislativas o
              jurisprudenciales. En caso de cambios significativos, se lo
              notificaremos a través de este sitio web.
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

export default PoliticaPrivacidad;
