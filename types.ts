export enum ServiceCategory {
  HAIRCUT = 'Haircuts',
  BEARD = 'Beards',
  SHAVE = 'Shave',
  STYLING = 'Styling',
  FACIAL = 'Facial & Skin',
  MANICURE = 'Manicure & Pedicure',
  WAXING = 'Waxing',
  TREATMENT = 'Hair Treatments',
  EVENT = 'Event Packages',
  GROOM = 'Groom Packages',
  KIDS = 'Kids'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: number; // minutes
  category: ServiceCategory;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: number; // years
  specialty: string;
  rating: number;
  image: string;
  instagram?: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  rating: number;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Booking {
  id: string;
  serviceId: string;
  barberId: string;
  branchId: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  status: 'pending' | 'confirmed' | 'completed';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}