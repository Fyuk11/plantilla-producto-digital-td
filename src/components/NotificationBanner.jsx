import { Zap, ArrowRight } from 'lucide-react';

export default function NotificationBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 text-zinc-950 text-xs font-bold py-2.5 px-4 text-center relative z-50 flex items-center justify-center gap-2 shadow-md">
      <span className="flex items-center gap-1.5 bg-zinc-950/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-zinc-950 font-black">
        <Zap className="w-3 h-3 fill-current" /> Oferta Limitada
      </span>
      <span>
        🔥 <strong>75% OFF</strong> en la plantilla para productos digitales por lanzamiento.
      </span>
      <a
        href="#precio"
        className="hidden sm:inline-flex items-center gap-1 underline underline-offset-2 hover:opacity-80 transition-opacity ml-1"
      >
        <span>Aprovechar</span>
        <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}