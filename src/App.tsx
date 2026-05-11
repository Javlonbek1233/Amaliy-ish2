import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import OrderModal from './components/OrderModal';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto bento-grid">
          {/* Hero Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <Hero />
          </div>

          {/* Menu Card */}
          <div className="lg:col-start-3 lg:col-span-1 lg:row-span-2">
            <Menu />
          </div>

          {/* About Card */}
          <div className="lg:col-start-4 lg:col-span-1 lg:row-span-1">
            <About />
          </div>

          {/* Gallery Card */}
          <div className="lg:col-start-4 lg:col-span-1 lg:row-span-1">
            <Gallery />
          </div>

          {/* Contact Card */}
          <div className="lg:col-start-2 lg:col-span-2 lg:row-span-1">
            <Contact />
          </div>

          {/* Brand/Footer Card */}
          <div className="lg:col-start-1 lg:col-span-1 lg:row-span-1">
            <Footer />
          </div>

          {/* Testimonials or Social Mock Card (Since the provided HTML had a social-card) */}
          <div className="lg:col-start-4 lg:col-span-1 lg:row-span-1">
            <Testimonials />
          </div>
        </div>
      </main>

      {/* Floating Action Button for Mobile Order */}
      <button
        onClick={() => setIsOrderModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-accent text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all md:hidden flex items-center gap-2"
      >
        <ShoppingBag size={24} />
        <span className="font-bold">Order Now</span>
      </button>

      {/* Persistent Order Button for Desktop */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group"
        >
          <div className="bg-white/20 p-1 rounded-full group-hover:rotate-12 transition-transform">
            <ShoppingBag size={20} />
          </div>
          Order Online
        </button>
      </div>

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
}
