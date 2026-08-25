import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    { value: "+1,200", label: "Estudiantes Activos" },
    { value: "4.9/5", label: "Calificación Promedio" },
    { value: "100%", label: "Proyectos Prácticos" },
    { value: "24/7", label: "Acceso de por Vida" },
  ];

  return (
    <section className="bg-slate-900/50 border-y border-slate-800 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor principal que se expande al entrar en pantalla */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-slate-800/40 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-xl shadow-2xl"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="space-y-1"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-indigo-400">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}