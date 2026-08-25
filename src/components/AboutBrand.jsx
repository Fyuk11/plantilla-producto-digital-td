import { Award, Users, BookOpen, Check } from 'lucide-react';

export default function AboutBrand() {
  return (
    <section id="sobre-mi" className="py-24 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Imagen / Avatar de la Marca o Creador */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-2xl -z-10" />
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 overflow-hidden">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center text-center p-8 border border-zinc-800">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold mb-4">
                    TC
                  </div>
                  <h4 className="text-xl font-bold text-white">Traducción Creativa</h4>
                  <p className="text-xs text-zinc-400 mt-1">Estrategia & Comunicación Digital</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio / Bio de la persona que da el curso */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-xs font-semibold">
              <span>Quién está detrás</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Creamos soluciones directas para impulsar tu marca personal.
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              En <strong className="text-white">Traducción Creativa</strong> ayudamos a emprendedores y creadores a empaquetar su conocimiento en productos digitales de alto impacto. Esta plantilla fue diseñada para eliminar la complejidad técnica y enfocarse en lo más importante: transmitir tu mensaje y vender.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4">
                <Users className="w-5 h-5 text-emerald-400 mb-2" />
                <span className="text-2xl font-bold text-white block">+500</span>
                <span className="text-xs text-zinc-400">Alumnos e Impactos</span>
              </div>
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4">
                <BookOpen className="w-5 h-5 text-emerald-400 mb-2" />
                <span className="text-2xl font-bold text-white block">100%</span>
                <span className="text-xs text-zinc-400">Contenido Práctico</span>
              </div>
              <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4">
                <Award className="w-5 h-5 text-emerald-400 mb-2" />
                <span className="text-2xl font-bold text-white block">Garantía</span>
                <span className="text-xs text-zinc-400">De Satisfacción</span>
              </div>
            </div>

            <ul className="space-y-2 pt-2 text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Diseño pensado para convertir visitas en compras.</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Estructura modular fácil de editar sin tocar código complejo.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}