import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '¿Cómo recibo el acceso al curso y a la plantilla?',
      a: 'Inmediatamente después de completar tu pago, recibirás un correo electrónico con los accesos directos a la plataforma de clases y las instrucciones para descargar la plantilla.'
    },
    {
      q: '¿Necesito experiencia previa en programación para usar la plantilla?',
      a: 'No es indispensable. La plantilla viene estructurada para que solo tengas que cambiar los textos e imágenes. Además, en el Módulo 3 explicamos paso a paso cómo personalizarla fácilmente.'
    },
    {
      q: '¿Es un pago único o hay cobros mensuales?',
      a: 'Es un pago único. No hay mensualidades ni cargos ocultos. Tienes acceso ilimitado de por vida al contenido y a las futuras actualizaciones.'
    },
    {
      q: '¿Qué pasa si el programa no cumple mis expectativas?',
      a: 'Cuentas con 7 días de garantía incondicional. Si ves el contenido y sientes que no es para ti, nos escribes y te devolvemos el 100% de tu dinero sin preguntas.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold hover:border-emerald-500/40 active:border-emerald-500/40 transition-colors">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolvamos tus dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 active:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-emerald-400 active:text-emerald-400 transition-colors duration-200 select-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 pt-4 transition-all duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}