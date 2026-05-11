import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="h-full bento-card bg-brand-ink text-white flex flex-col md:flex-row gap-8 overflow-hidden relative">
      <div className="w-full h-40 md:h-auto md:w-1/3 bg-brand-olive/20 rounded-xl overflow-hidden relative group">
        <iframe
          title="Ayami Food Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.809185121!2d60.354145!3d41.378335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDIyJzQyLjAiTiA2MMKwMjEnMTQuOSJF!5e0!3m2!1sen!2suz!4v1655123456789!5m2!1sen!2suz"
          width="100%"
          height="100%"
          className="grayscale invert opacity-50 group-hover:invert-0 group-hover:grayscale-0 transition-all duration-500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="flex flex-col justify-center gap-4 flex-grow">
        <h3 className="text-2xl font-bold">Find Us</h3>
        <div className="space-y-2 text-sm text-white/70">
          <p className="flex items-center gap-2"><MapPin size={16} className="text-brand-accent" /> Khiva, N. Qubro 105, Uzbekistan</p>
          <p className="flex items-center gap-2"><Phone size={16} className="text-brand-accent" /> +998 90 123 45 67</p>
          <p className="flex items-center gap-2 font-bold text-brand-accent mt-4">
            <Instagram size={16} /> @ayami_food_khiva
          </p>
        </div>
      </div>
    </section>
  );
}
