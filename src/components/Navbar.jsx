import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Lo que incluye', href: '#modulos' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Precio', href: '#precio' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-base tracking-tight leading-none">PLANTILLA DIGITAL</span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-wide">by Traducción Creativa</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#precio"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-full flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
          >
            <span>Obtener Plantilla</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-800 overflow-hidden backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-zinc-300 hover:text-emerald-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-800/80">
                <a
                  href="#precio"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Obtener Plantilla</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}