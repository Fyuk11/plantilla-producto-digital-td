import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    { value: "+1,200", label: "Estudiantes Activos" },
    { value: "4.9/5", label: "Calificación Promedio" },
    { value: "100%", label: "Proyectos Prácticos" },
    { value: "24/7", label: "Acceso de por Vida" },
  ];

  return (
    <section className="bg-[#09090b] border-y border-zinc-800/80 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Contenedor principal alineado a la paleta zinc/emerald */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-zinc-950/80 border border-zinc-800/80 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-xl shadow-emerald-500/5"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="space-y-1 p-3 rounded-2xl hover:bg-zinc-900/50 active:bg-zinc-900/50 transition-colors duration-200 select-none group"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 group-hover:scale-105 group-active:scale-105 transition-transform duration-200">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}