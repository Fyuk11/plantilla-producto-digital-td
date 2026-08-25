import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "5491100000000"; 
  const message = encodeURIComponent("¡Hola! Tengo una consulta sobre la Plantilla de Producto Digital.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all flex items-center justify-center group"
    >
      <span className="absolute right-16 bg-zinc-900 border border-zinc-800 text-white text-xs font-semibold px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        ¿Tienes dudas? ¡Escríbenos!
      </span>

      <MessageCircle className="w-6 h-6 fill-zinc-950 stroke-zinc-950" />
    </a>
  );
}