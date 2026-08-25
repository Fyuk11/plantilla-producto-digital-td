import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sofía Martínez',
      role: 'Creadora de Contenido & Coach',
      avatar: 'SM',
      text: 'Llevaba 3 meses postergando el lanzamiento de mi curso por no saber cómo armar la web. Con esta plantilla lo resolví en una sola tarde. ¡Mis alumnos quedaron impresionados!',
      tag: 'Curso de Branding'
    },
    {
      name: 'Lucas Benítez',
      role: 'Emprendedor Digital',
      avatar: 'LB',
      text: 'La experiencia de usuario es increíble. El video de fondo carga rapidísimo y el diseño en modo oscuro con verde esmeralda luce súper profesional. Vale cada centavo.',
      tag: 'Ebook & Taller'
    },
    {
      name: 'Camila Rossi',
      role: 'Diseñadora & Consultora',
      avatar: 'CR',
      text: 'Ofrecer este modelo a mis clientes como una opción más accesible me permitió cerrar 4 ventas nuevas este mes. La estructura es impecable y facilísima de editar.',
      tag: 'Servicio de Plantilla'
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Prueba Social & Resultados</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Lo que dicen quienes ya lanzaron
          </h2>
          <p className="text-zinc-400 text-base">
            Creadores y emprendedores que transformaron la manera de presentar sus productos digitales.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 backdrop-blur-sm hover:border-zinc-700 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center text-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      <span>{item.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 shrink-0" />
                    </h4>
                    <p className="text-xs text-zinc-500">{item.role}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}