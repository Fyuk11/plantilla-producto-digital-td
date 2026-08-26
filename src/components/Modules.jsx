import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Sparkles, Check } from 'lucide-react';

export default function Modules() {
  const modules = [
    {
      number: "01",
      icon: BookOpen,
      title: "Fundamentos & Posicionamiento",
      description: "Define tu propuesta de valor, tu cliente ideal y cómo estructurar tu conocimiento en una oferta irresistible.",
      items: [
        "Definición de Avatar & Dolor",
        "Estructura del Infoproducto",
        "Fijación de Precios Estratégica"
      ]
    },
    {
      number: "02",
      icon: Video,
      title: "Creación del Contenido & Guiones",
      description: "Aprende el método paso a paso para grabar, editar y organizar tus lecciones de forma ágil y profesional.",
      items: [
        "Guionizado de Lecciones HD",
        "Herramientas de Grabación",
        "Recursos Descargables & Workbooks"
      ]
    },
    {
      number: "03",
      icon: FileText,
      title: "Diseño de la Landing Page",
      description: "Uso de esta plantilla, personalización de colores, fuentes y copywriting directo para convertir visitas.",
      items: [
        "Adaptación de Branding",
        "Estructura de Copys Persuasivos",
        "Optimizaciones de Carga"
      ]
    },
    {
      number: "04",
      icon: Sparkles,
      title: "Estrategia de Lanzamiento & Ventas",
      description: "Embudo simple para llevar tráfico desde redes sociales directamente a tu checkout de venta.",
      items: [
        "Secuencia de Emails de Venta",
        "Pauta y Contenido Orgánico",
        "Automatización de Entregas"
      ]
    }
  ];

  // Variantes para animar el contenedor y sus hijos en cascada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="modulos" className="py-24 bg-[#09090b] text-zinc-100 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16"
        >
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
            Plan de Estudio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            ¿Qué vas a aprender?
          </h2>
          <p className="text-zinc-400 text-base">
            Un paso a paso estructurado para llevar tu proyecto digital desde cero a ventas reales.
          </p>
        </motion.div>

        {/* Grid de Módulos Animados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700/80 rounded-3xl p-7 sm:p-8 backdrop-blur-xl shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Fila Superior: Icono y Número de Módulo */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
                      {mod.number}
                    </span>
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                {/* Lista del temario */}
                <ul className="space-y-3 pt-6 border-t border-zinc-900/80">
                  {mod.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-zinc-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mr-3 border border-emerald-500/20">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}