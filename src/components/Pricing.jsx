import { Check, ShieldCheck, Zap, ArrowRight, Gift, Sparkles, Clock } from 'lucide-react';

export default function Pricing() {
  const valueItems = [
    { title: 'Programa Completo en HD (4 Módulos)', value: 'Valorado en $150 USD' },
    { title: 'Plantilla Web React + Vite (Lista para publicar)', value: 'Valorada en $200 USD' },
    { title: 'Guías de Copywriting & Workbooks PDF', value: 'Valorados en $50 USD' },
    { title: 'Actualizaciones de por vida sin costo extra', value: 'Invaluable' },
  ];

  return (
    <section 
      id="precio" 
      className="py-28 bg-gradient-to-b from-[#09090b] via-emerald-950/40 to-[#09090b] border-y border-emerald-500/20 relative overflow-hidden text-zinc-100"
    >
      {/* Luz Ambiental de Fondo para el "Corte de Página" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(16,185,129,0.08),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide uppercase backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>Oferta Especial de Lanzamiento</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Todo lo que necesitas para lanzar, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">en un solo paquete.</span>
          </h2>
          <p className="text-zinc-300 text-base">
            Acceso inmediato y de por vida. Sin cuotas mensuales ni cobros recurrentes.
          </p>
        </div>

        {/* Estructura a 2 Columnas */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LADO IZQUIERDO: Stack de Valor */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span>¿Qué incluye tu acceso hoy?</span>
              </h3>
              <p className="text-sm text-zinc-400">
                Diseñamos este producto para que no tengas que contratar programadores ni perder semanas configurando tu web.
              </p>
            </div>

            {/* Lista de Recursos con Valoración */}
            <div className="space-y-3">
              {valueItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md flex items-center justify-between gap-4 hover:border-zinc-700 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-200">{item.title}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400/80 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 shrink-0">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bloque de Bonus Exclusivo */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-zinc-950 border border-emerald-500/30 backdrop-blur-md space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Gift className="w-4 h-4" />
                <span>Bonus Incluido #1</span>
              </div>
              <h4 className="text-base font-bold text-white">Plantilla de Notion para Organización de Lanzamiento</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Organiza tus guiones, calendario de publicaciones y lista de espera en un solo panel listo para clonar.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Tarjeta de Compra Destacada */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-950/90 border-2 border-emerald-500/80 rounded-3xl p-8 shadow-2xl shadow-emerald-500/20 relative overflow-hidden backdrop-blur-xl">
              
              {/* CINTA DE DESCUENTO */}
              <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-wider flex items-center gap-1 shadow-md">
                <Clock className="w-3 h-3" />
                <span>Ahorra 75% Hoy</span>
              </div>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Licencia Comercial</span>
                <h3 className="text-2xl font-black text-white">Acceso Total + Plantilla</h3>
              </div>

              {/* Precios */}
              <div className="mb-6 border-b border-zinc-800/80 pb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-white">$49</span>
                  <span className="text-xl font-bold text-zinc-500 line-through">$197 USD</span>
                </div>
                <p className="text-xs text-emerald-400 font-medium mt-1">Pago único • Acceso ilimitado para siempre</p>
              </div>

              {/* Puntos Clave de Cierre */}
              <ul className="space-y-3 mb-8 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descarga inmediata del código y material</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Uso ilimitado en tus proyectos personales</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Soporte por correo electrónico</span>
                </li>
              </ul>

              {/* Botón CTA */}
              <a
                href="#checkout"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-400 text-zinc-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] select-none"
              >
                <span>¡OBTENER MI ACCESO AHORA!</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Garantía */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantía incondicional de 7 días</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}