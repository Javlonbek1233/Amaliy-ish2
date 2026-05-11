import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="h-full bento-card p-2 grid grid-cols-2 gap-2">
      {GALLERY_IMAGES.slice(0, 4).map((image) => (
        <div key={image.id} className="relative aspect-square overflow-hidden rounded-xl bg-brand-sand">
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
    </section>
  );
}
