import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="h-full bento-card bg-brand-sand flex flex-col justify-center gap-4">
      <div className="space-y-4">
        <span className="text-brand-olive uppercase tracking-[0.2em] font-bold text-[10px]">Our Story</span>
        <h3 className="text-xl md:text-2xl font-bold leading-tight">
          Heart of Ichan Kala
        </h3>
        <p className="text-brand-ink/70 text-sm leading-relaxed">
          Ayami Food brings the authentic flavors of Khiva to your table with traditional recipes passed through generations. We use only fresh, locally sourced ingredients.
        </p>
      </div>
    </section>
  );
}
