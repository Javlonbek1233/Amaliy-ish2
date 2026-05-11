import { MenuItem, GalleryImage, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // National Dishes
  {
    id: 'n1',
    name: 'Khiva Plov (Osh)',
    description: 'Traditional Khwarezmian plov with tender beef, yellow carrots, and fragrant rice cooked in a wood-fired kazan.',
    price: 45000,
    category: 'National Dishes',
    image: 'https://picsum.photos/seed/plov/800/600'
  },
  {
    id: 'n2',
    name: 'Shivit Oshi',
    description: 'A Khiva specialty: green dill-infused noodles served with a savory meat and vegetable sauce.',
    price: 38000,
    category: 'National Dishes',
    image: 'https://picsum.photos/seed/shivit/800/600'
  },
  {
    id: 'n3',
    name: 'Manti',
    description: 'Steamed dumplings filled with spiced lamb and onions, served with sour cream.',
    price: 35000,
    category: 'National Dishes',
    image: 'https://picsum.photos/seed/manti/800/600'
  },
  {
    id: 'n4',
    name: 'Tuxum Barak',
    description: 'Ancient Khiva recipe: egg-filled dumplings, delicate and unique.',
    price: 32000,
    category: 'National Dishes',
    image: 'https://picsum.photos/seed/egg/800/600'
  },
  
  // Fast Food
  {
    id: 'f1',
    name: 'Ayami Burger',
    description: 'Juicy beef patty with special sauce, fresh vegetables, and homemade bun.',
    price: 28000,
    category: 'Fast Food',
    image: 'https://picsum.photos/seed/burger/800/600'
  },
  {
    id: 'f2',
    name: 'Chicken Lavash',
    description: 'Grilled chicken, fresh veggies, and garlic sauce wrapped in a thin flatbread.',
    price: 25000,
    category: 'Fast Food',
    image: 'https://picsum.photos/seed/lavash/800/600'
  },
  
  // Drinks
  {
    id: 'd1',
    name: 'Green Tea (Choy)',
    description: 'Traditional Uzbek green tea served in a ceramic teapot.',
    price: 5000,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/tea/800/600'
  },
  {
    id: 'd2',
    name: 'Fresh Ayran',
    description: 'Refreshing yogurt-based drink with a hint of mint.',
    price: 10000,
    category: 'Drinks',
    image: 'https://picsum.photos/seed/ayran/800/600'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://picsum.photos/seed/restaurant-1/800/1000', alt: 'Cozy interior of Ayami Food' },
  { id: 'g2', url: 'https://picsum.photos/seed/khiva-1/800/800', alt: 'Khiva ancient city view' },
  { id: 'g3', url: 'https://picsum.photos/seed/food-1/800/600', alt: 'Traditional Uzbek Plov' },
  { id: 'g4', url: 'https://picsum.photos/seed/restaurant-2/800/1200', alt: 'Smiling staff at Ayami Food' },
  { id: 'g5', url: 'https://picsum.photos/seed/food-2/800/800', alt: 'Khiva national dishes' },
  { id: 'g6', url: 'https://picsum.photos/seed/interior-1/800/600', alt: 'Elegant table setting' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Azamat Karimov',
    text: 'The best Shivit Oshi I have ever tasted! The atmosphere is so warm and welcoming. A must-visit in Khiva.',
    rating: 5,
    date: 'March 2024'
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    text: 'Authentic flavors and beautiful presentation. The staff was incredibly friendly. Highly recommend the Plov!',
    rating: 5,
    date: 'February 2024'
  },
  {
    id: 't3',
    name: 'Dilshod Tojiev',
    text: 'Great place for both national food and a quick snack. The Ayami Burger is fantastic!',
    rating: 4,
    date: 'January 2024'
  }
];
