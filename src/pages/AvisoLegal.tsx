import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AvisoLegal = () => {
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

        <h1 className="text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Datos identificativos del titular
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
              de Servicios de la Sociedad de la Información y de Comercio
              Electrónico (LSSI-CE), se informa que el titular de este sitio web
              es:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Titular:</strong> Alberto Martín
              </li>
              <li>
                <strong>Email de contacto:</strong> a.martinro@gmail.com
              </li>
              <li>
                <strong>Actividad:</strong> Servicios de producción audiovisual
                y streaming de eventos
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Objeto y ámbito de aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del
              sitio web, así como las responsabilidades derivadas de la
              utilización de sus contenidos (textos, gráficos, imágenes,
              dibujos, diseños, códigos, software, fotografías, música, vídeos,
              sonidos, bases de datos, aplicaciones, etc.).
            </p>
            <p className="mt-4">
              La persona que acceda a este sitio web asume el papel de usuario,
              comprometiéndose a la observancia y cumplimiento riguroso de las
              disposiciones aquí establecidas, así como a cualquier otra
              disposición legal que fuera de aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, fotografías,
              gráficos, imágenes, iconos, tecnología, software, enlaces y demás
              contenidos audiovisuales o sonoros, así como su diseño gráfico y
              códigos fuente, son propiedad intelectual del titular o de terceros,
              sin que puedan entenderse cedidos al usuario ninguno de los derechos
              de explotación reconocidos por la normativa vigente en materia de
              propiedad intelectual.
            </p>
            <p className="mt-4">
              Las marcas, nombres comerciales o signos distintivos son titularidad
              del titular o terceros, sin que pueda entenderse que el acceso al
              sitio web atribuya ningún derecho sobre las citadas marcas, nombres
              comerciales y/o signos distintivos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Condiciones de uso
            </h2>
            <p>El usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Hacer un uso adecuado y lícito del sitio web, de conformidad con
                la legislación aplicable, el presente Aviso Legal, la moral y
                buenas costumbres generalmente aceptadas y el orden público.
              </li>
              <li>
                No realizar actividades ilícitas, ilegales o contrarias a la
                buena fe y al orden público.
              </li>
              <li>
                No provocar daños en los sistemas físicos y lógicos del sitio
                web, de sus proveedores o de terceras personas.
              </li>
              <li>
                No introducir ni difundir virus informáticos o cualesquiera
                otros sistemas físicos o lógicos que sean susceptibles de
                provocar daños.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Exclusión de garantías y responsabilidad
            </h2>
            <p>
              El titular no se hace responsable, en ningún caso, de los daños y
              perjuicios de cualquier naturaleza que pudieran ocasionar, a título
              enunciativo: errores u omisiones en los contenidos, falta de
              disponibilidad del portal o la transmisión de virus o programas
              maliciosos o lesivos en los contenidos, a pesar de haber adoptado
              todas las medidas tecnológicas necesarias para evitarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Enlaces externos
            </h2>
            <p>
              En el caso de que en el sitio web se dispusiesen enlaces o
              hipervínculos hacia otros sitios de Internet, el titular no
              ejercerá ningún tipo de control sobre dichos sitios y contenidos.
              En ningún caso asumirá responsabilidad alguna por los contenidos de
              algún enlace perteneciente a un sitio web ajeno.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Para la resolución de todas las controversias o cuestiones
              relacionadas con el presente sitio web o de las actividades en él
              desarrolladas, será de aplicación la legislación española, a la que
              se someten expresamente las partes, siendo competentes para la
              resolución de todos los conflictos derivados o relacionados con su
              uso los Juzgados y Tribunales del domicilio del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Modificaciones
            </h2>
            <p>
              El titular se reserva el derecho de efectuar sin previo aviso las
              modificaciones que considere oportunas en su sitio web, pudiendo
              cambiar, suprimir o añadir tanto los contenidos y servicios que se
              presten a través de la misma como la forma en la que éstos
              aparezcan presentados o localizados.
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

export default AvisoLegal;
