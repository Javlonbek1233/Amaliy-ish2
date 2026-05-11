import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section className="h-full bento-card bg-brand-accent text-white flex flex-col justify-center items-center gap-2 p-6 text-center">
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">Follow Us</span>
      <div className="text-2xl font-bold tracking-tighter">IG • FB • TG</div>
      <p className="text-[10px] opacity-70">Tag us in your photos<br />#AyamiKhiva</p>
    </section>
  );
}
