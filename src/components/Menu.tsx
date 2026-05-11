import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<'Fast Food' | 'National Dishes' | 'Drinks'>('National Dishes');

  const categories = ['National Dishes', 'Fast Food', 'Drinks'] as const;
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="h-full bento-card flex flex-col gap-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold">Menu</h2>
        <span className="text-[10px] text-brand-accent uppercase tracking-widest font-bold">UZS</span>
      </div>

      {/* Category Mini-Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
              activeCategory === category 
                ? 'bg-brand-olive text-white' 
                : 'bg-brand-sand text-brand-ink/60'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Scrollable List */}
      <div className="flex-grow overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-between items-start border-b border-dashed border-brand-ink/10 pb-3"
            >
              <div className="space-y-1">
                <h4 className="font-bold text-sm">{item.name}</h4>
                <p className="text-[11px] text-brand-ink/50 leading-tight pr-4">{item.description}</p>
              </div>
              <span className="text-brand-accent font-bold text-xs whitespace-nowrap">
                {item.price.toLocaleString()}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
