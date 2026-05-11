import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-full w-full flex items-end overflow-hidden bento-card border-none bg-brand-olive group min-h-[400px]">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-none">
            Delicious <br /> taste of Khiva
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-serif italic max-w-md leading-relaxed">
            Experience the warmth of ancient Uzbekistan in every bite.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#menu"
              className="bg-brand-accent text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-accent/90 transition-all hover:scale-105 shadow-lg shadow-brand-accent/20"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
