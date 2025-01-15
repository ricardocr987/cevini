import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function TermsAndConditionsModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Términos y Condiciones</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-semibold mb-2">1. Información General</h3>
            <p>
              Al utilizar nuestro formulario de contacto, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos y condiciones o cualquier parte de estos términos y condiciones, no debe utilizar este formulario.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">2. Tratamiento de Datos Personales</h3>
            <p>
              De conformidad con lo establecido en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que los datos personales proporcionados serán tratados por Cerámica Virgen de las con la finalidad de:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Gestionar su solicitud de contacto</li>
              <li>Responder a sus consultas</li>
              <li>Enviar información comercial (solo si ha aceptado la casilla correspondiente)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">3. Base Legal</h3>
            <p>
              El tratamiento de sus datos está basado en su consentimiento expreso, el cual puede retirar en cualquier momento.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">4. Conservación de Datos</h3>
            <p>
              Sus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">5. Derechos del Usuario</h3>
            <p>
              Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición enviando un email a info@cevini.es.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">6. Medidas de Seguridad</h3>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo del tratamiento.
            </p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">7. Modificaciones</h3>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
} 