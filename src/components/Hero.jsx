import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center bg-[#09090b] text-zinc-100 overflow-hidden pt-28 pb-16 border-b border-zinc-800/80">
      
      {/* Video de Fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 filter contrast-125 brightness-90"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/60 via-[#09090b]/40 to-[#09090b]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Copy Principal */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-sans text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plantilla para Creadores & Emprendedores</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Lanza tu Curso Digital con una <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">Página Profesional.</span>
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Muestra el valor de tu infoproducto con un diseño moderno, rápido y optimizado para convertir visitas en clientes. Ideal para adaptar a tu marca personal.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#precio"
              className="px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl flex items-center gap-2 transition-all shadow-xl shadow-emerald-500/20"
            >
              <span>Ver Oferta del Producto</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#modulos"
              className="px-7 py-4 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-semibold text-sm rounded-xl flex items-center gap-2 transition-all backdrop-blur-md"
            >
              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Explorar Módulos</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-zinc-400 border-t border-zinc-800/60">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Acceso Inmediato
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Personalizable
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Carga Ultra Rápida
            </span>
          </div>
        </div>

        {/* Card Ilustrativa del Producto Digital */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl p-6 relative group">
            
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden relative mb-6 border border-zinc-800/80 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                <Play className="w-5 h-5 fill-emerald-400 ml-0.5" />
              </div>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm text-[11px] font-medium text-zinc-300 border border-zinc-800">
                Vista Previa del Curso
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-zinc-400 font-medium">4.9/5 por alumnos</span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">
                Programa Completo: Estrategia y Contenido Digital
              </h3>

              <div className="p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800/60 space-y-2">
                <div className="flex items-center justify-between text-xs text-zinc-300 font-medium">
                  <span>Módulos incluidos</span>
                  <span className="text-emerald-400 font-bold">6 Módulos HD</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}