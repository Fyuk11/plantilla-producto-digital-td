import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-3 h-3" />
          </div>
          <span className="font-bold text-white text-sm">PLANTILLA DIGITAL</span>
          <span className="text-xs text-zinc-400">by Traducción Creativa</span>
        </div>

        {/* Links a Redes Sociales con SVGs Nativos */}
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.27a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.28-.7z"/>
            </svg>
          </a>
        </div>

        {/* Navegación */}
        <div className="flex items-center gap-6 text-xs text-zinc-400">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#modulos" className="hover:text-white transition-colors">Módulos</a>
          <a href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mí</a>
          <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
          <a href="#precio" className="hover:text-white transition-colors">Precio</a>
        </div>

        <div className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Traducción Creativa.
        </div>

      </div>
    </footer>
  );
}