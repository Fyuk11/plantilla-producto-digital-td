import { BookOpen, Video, FileText, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Modules() {
  const modules = [
    {
      number: '01',
      title: 'Fundamentos & Posicionamiento',
      description: 'Define tu propuesta de valor, tu cliente ideal y cómo estructurar tu conocimiento en una oferta irresistible.',
      lessons: ['Definición de Avatar & Dolor', 'Estructura del Infoproducto', 'Fijación de Precios Strategica'],
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Creación del Contenido & Guiones',
      description: 'Aprende el método paso a paso para grabar, editar y organizar tus lecciones de forma ágil y profesional.',
      lessons: ['Guionizado de Lecciones HD', 'Herramientas de Grabación', 'Recursos Descargables & Workbooks'],
      icon: Video,
    },
    {
      number: '03',
      title: 'Diseño de la Landing Page',
      description: 'Uso de esta plantilla, personalización de colores, fuentes y copywriting directo para convertir visitas.',
      lessons: ['Adaptación de Branding', 'Estructura de Copys Persuasivos', 'Optimizaciones de Carga'],
      icon: FileText,
    },
    {
      number: '04',
      title: 'Estrategia de Lanzamiento & Ventas',
      description: 'Embudo simple para llevar tráfico desde redes sociales directamente a tu checkout de venta.',
      lessons: ['Secuencia de Emails de Venta', 'Pauta y Contenido Orgánico', 'Automatización de Entregas'],
      icon: Sparkles,
    },
  ];

  return (
    <section id="modulos" className="py-24 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <span>Programa Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ¿Qué vas a aprender en este programa?
          </h2>
          <p className="text-zinc-400 text-base">
            Módulos directos al grano, sin relleno teórico, diseñados para que implementes mientras avanzas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.number}
                className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700 transition-all group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-zinc-700 group-hover:text-emerald-500/40 transition-colors">
                    {mod.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{mod.description}</p>

                <div className="border-t border-zinc-900 pt-4 space-y-2">
                  {mod.lessons.map((lesson, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}