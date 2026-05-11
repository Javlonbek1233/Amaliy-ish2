export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Fast Food' | 'National Dishes' | 'Drinks';
  image: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
}
