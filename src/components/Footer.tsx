import React from 'react';
import { UtensilsCrossed, Instagram, Facebook, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-full bento-card bg-brand-sand flex flex-col justify-center space-y-4">
      <div className="flex items-center gap-2">
        <UtensilsCrossed size={20} className="text-brand-accent" />
        <span className="text-xl font-bold font-serif">Ayami Food</span>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] text-brand-ink/40 uppercase tracking-widest">© 2024 Ayami Food Khiva</p>
        <p className="text-[11px] text-brand-accent font-bold">Open Daily 10:00 - 23:00</p>
      </div>
    </footer>
  );
}
