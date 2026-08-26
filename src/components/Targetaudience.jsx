import { motion } from 'framer-motion';
import { Check, X, CheckCircle2, XCircle } from 'lucide-react';

export default function TargetAudience() {
  const isForYou = [
    "Quieres crear páginas de alta conversión para tus clientes o proyectos.",
    "Buscas dar el salto de sitios estáticos a aplicaciones web interactivas.",
    "Deseas dominar Tailwind CSS y React con las mejores prácticas del sector.",
    "Necesitas un flujo de trabajo rápido y escalable para tus desarrollos."
  ];

  const isNotForYou = [
    "Buscas fórmulas mágicas sin dedicar tiempo a practicar el código.",
    "Prefieres seguir usando maquetadores visuales pesados y lentos.",
    "No tienes interés en aprender desarrollo web moderno con JavaScript."
  ];

  return (
    <section className="py-24 bg-[#09090b] border-y border-zinc-800/80 overflow-hidden text-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ¿Es este producto para ti?
          </h2>
          <p className="text-zinc-400 text-base">
            Asegúrate de que este programa se alinea con tus objetivos antes de dar el siguiente paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Tarjeta Izquierda: ES para ti */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-zinc-950/80 border border-emerald-500/30 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl shadow-xl shadow-emerald-500/5 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Esto <span className="text-emerald-400">ES</span> para ti si:
              </h3>
            </div>

            <ul className="space-y-4">
              {isForYou.map((item, index) => (
                <li key={index} className="flex items-start text-zinc-300 text-sm leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta Derecha: NO es para ti */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-zinc-950/80 border border-rose-500/30 rounded-3xl p-8 relative overflow-hidden backdrop-blur-xl shadow-xl shadow-rose-500/5 flex flex-col"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/30">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Esto <span className="text-rose-400">NO</span> es para ti si:
              </h3>
            </div>

            <ul className="space-y-4">
              {isNotForYou.map((item, index) => (
                <li key={index} className="flex items-start text-zinc-300 text-sm leading-relaxed">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 mr-3">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}