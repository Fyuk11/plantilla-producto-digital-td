import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

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
    <section className="py-24 bg-slate-950/50 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con fade in al bajar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Es este producto para ti?
          </h2>
          <p className="text-slate-400">
            Asegúrate de que este programa se alinea con tus objetivos antes de dar el siguiente paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Tarjeta Izquierda (Entra desde la izquierda) */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">🏼</span> Esto ES para ti si:
            </h3>
            <ul className="space-y-4">
              {isForYou.map((item, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <Check className="text-emerald-400 mr-3 w-5 h-5 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta Derecha (Entra desde la derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-slate-900 border border-rose-500/30 rounded-2xl p-8 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">🏼‍♂️</span> Esto NO es para ti si:
            </h3>
            <ul className="space-y-4">
              {isNotForYou.map((item, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <X className="text-rose-400 mr-3 w-5 h-5 shrink-0 mt-0.5" />
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