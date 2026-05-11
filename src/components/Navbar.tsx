import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className={`w-8 h-8 transition-colors ${isScrolled ? 'text-brand-accent' : 'text-white'}`} />
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-brand-ink' : 'text-white'}`}>
            Ayami Food
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:text-brand-accent ${
                isScrolled ? 'text-brand-ink/70 active:text-brand-ink' : 'text-white/70 active:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className="border border-brand-ink text-brand-ink px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-all">
            Reservations
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-bg border-t border-brand-dark/10 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-dark p-2 hover:bg-brand-dark/5 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-primary text-white py-3 rounded-lg font-bold">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
