import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Instagram, Send } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold font-serif">Order Now</h3>
                  <p className="text-brand-dark/60">Choose your preferred way to order</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-bg rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid gap-4">
                <a 
                  href="tel:+998901234567"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-brand-bg hover:bg-brand-accent hover:text-white transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-accent group-hover:bg-white/20 flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Call to Order</h4>
                    <p className="text-sm opacity-70">Direct line to our kitchen</p>
                  </div>
                </a>

                <a 
                  href="https://t.me/ayami_food"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-brand-bg hover:bg-[#0088cc] hover:text-white transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0088cc] group-hover:bg-white/20 flex items-center justify-center text-white">
                    <Send size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Order via Telegram</h4>
                    <p className="text-sm opacity-70">Fast response via messenger</p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/ayami_food_khiva"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-brand-bg hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#dc2743] group-hover:bg-white/20 flex items-center justify-center text-white">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Order via Instagram</h4>
                    <p className="text-sm opacity-70">DM us for availability</p>
                  </div>
                </a>
              </div>

              <div className="bg-brand-accent/5 p-4 rounded-xl text-center">
                <p className="text-sm text-brand-dark/60">
                  <span className="font-bold text-brand-accent">Delivery hours:</span> 10:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
