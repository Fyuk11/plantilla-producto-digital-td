import NotificationBanner from './components/NotificationBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutBrand from './components/AboutBrand';
import Modules from './components/Modules';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-[#09090b] min-h-screen text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950 relative">
      <NotificationBanner />
      <Navbar />
      <Hero />
      <AboutBrand />
      <Modules />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}