import { Barber, Branch, GalleryItem, Review, Service, ServiceCategory } from './types';

export const APP_NAME = "ROYALE BARBERS";

// ==========================================
// HOW TO ADD YOUR OWN IMAGES:
// 1. Upload your image to the internet and paste the URL string below.
// 2. OR place your image in the 'public' folder of your project (e.g., public/assets/my-image.jpg)
//    and use the path '/assets/my-image.jpg'
// ==========================================

export const SERVICES: Service[] = [
  // --- HAIRCUTS ---
  {
    id: 'h1',
    title: 'The Royal Cut',
    description: 'Precision haircut with hot towel finish and styling.',
    price: 45,
    duration: 45,
    category: ServiceCategory.HAIRCUT,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop'
  },
  {
    id: 'h2',
    title: 'Skin Fade & Style',
    description: 'Seamless fade transition with razor detailing.',
    price: 50,
    duration: 50,
    category: ServiceCategory.HAIRCUT,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'h3',
    title: 'Scissor Cut',
    description: 'All-scissor cut for longer styles and texture.',
    price: 55,
    duration: 60,
    category: ServiceCategory.HAIRCUT,
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'h4',
    title: 'Buzz Cut',
    description: 'Uniform length clipper cut with line up.',
    price: 30,
    duration: 30,
    category: ServiceCategory.HAIRCUT,
    image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b93?q=80&w=2070&auto=format&fit=crop'
  },
   {
    id: 'k1',
    title: 'Kids Cut (Under 12)',
    description: 'Gentle and patient styling for young gentlemen.',
    price: 30,
    duration: 30,
    category: ServiceCategory.HAIRCUT,
    image: 'https://images.unsplash.com/photo-1596392927817-1a067675f68b?q=80&w=2000&auto=format&fit=crop'
  },

  // --- BEARDS & SHAVES ---
  {
    id: 'b1',
    title: 'Beard Sculpting',
    description: 'Expert trimming, shaping, and razor lining.',
    price: 35,
    duration: 30,
    category: ServiceCategory.BEARD,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b2',
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with essential oils.',
    price: 40,
    duration: 40,
    category: ServiceCategory.SHAVE,
    image: 'https://images.unsplash.com/photo-1536548665151-575696808e5e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'b3',
    title: 'Beard Trim (Clipper)',
    description: 'Quick reshape and tidy using clippers only.',
    price: 25,
    duration: 20,
    category: ServiceCategory.BEARD,
    image: 'https://images.unsplash.com/photo-1552642986-cca41e593910?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'b4',
    title: 'Moustache Styling',
    description: 'Waxing and shaping for the perfect handlebar.',
    price: 15,
    duration: 15,
    category: ServiceCategory.BEARD,
    image: 'https://images.unsplash.com/photo-1503951914290-934c483298f6?q=80&w=2070&auto=format&fit=crop'
  },

  // --- STYLING ---
  {
    id: 'st1',
    title: 'Wash & Style',
    description: 'Shampoo, condition, and professional blow-dry styling.',
    price: 25,
    duration: 30,
    category: ServiceCategory.STYLING,
    image: 'https://images.unsplash.com/photo-1519699047748-40ba52c79303?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'st2',
    title: 'Hair Design / Tattoo',
    description: 'Intricate razor designs carved into your fade.',
    price: 20,
    duration: 30,
    category: ServiceCategory.STYLING,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop'
  },

  // --- MANICURE & PEDICURE ---
  {
    id: 'mp1',
    title: 'Gentleman\'s Manicure',
    description: 'Nail trimming, shaping, cuticle care, and hand massage.',
    price: 35,
    duration: 40,
    category: ServiceCategory.MANICURE,
    image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'mp2',
    title: 'Sports Pedicure',
    description: 'Soak, scrub, nail care, and calf massage for active feet.',
    price: 50,
    duration: 50,
    category: ServiceCategory.MANICURE,
    image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'mp3',
    title: 'Executive Combo',
    description: 'Full Manicure and Pedicure service.',
    price: 80,
    duration: 80,
    category: ServiceCategory.MANICURE,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop'
  },

  // --- FACIAL & SKINCARE ---
  {
    id: 'f1',
    title: 'Express Facial',
    description: 'Cleanse, exfoliate, and moisturize for a quick glow.',
    price: 45,
    duration: 30,
    category: ServiceCategory.FACIAL,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'f2',
    title: 'Deep Pore Cleansing',
    description: 'Steam, extraction, and mask to remove impurities.',
    price: 75,
    duration: 60,
    category: ServiceCategory.FACIAL,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'f3',
    title: 'Black Mask Peel',
    description: 'Charcoal peel-off mask for blackhead removal.',
    price: 30,
    duration: 30,
    category: ServiceCategory.FACIAL,
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1887&auto=format&fit=crop'
  },

  // --- WAXING ---
  {
    id: 'w1',
    title: 'Eyebrow Shaping',
    description: 'Waxing and trimming for clean, masculine brows.',
    price: 20,
    duration: 15,
    category: ServiceCategory.WAXING,
    image: 'https://images.unsplash.com/photo-1595867990428-1b03372c0576?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'w2',
    title: 'Nose & Ears',
    description: 'Quick and effective hair removal.',
    price: 15,
    duration: 15,
    category: ServiceCategory.WAXING,
    image: 'https://images.unsplash.com/photo-1552642986-cca41e593910?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'w3',
    title: 'Chest or Back',
    description: 'Smooth skin finish for larger areas.',
    price: 55,
    duration: 45,
    category: ServiceCategory.WAXING,
    image: 'https://images.unsplash.com/photo-1506214534887-21a1467554cc?q=80&w=2070&auto=format&fit=crop'
  },

  // --- HAIR TREATMENTS ---
  {
    id: 't1',
    title: 'Scalp Treatment',
    description: 'Exfoliating scrub and massage to promote hair health.',
    price: 40,
    duration: 30,
    category: ServiceCategory.TREATMENT,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 't2',
    title: 'Grey Blending',
    description: 'Subtle coloring to camouflage grey hair naturally.',
    price: 50,
    duration: 45,
    category: ServiceCategory.TREATMENT,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop'
  },

  // --- PACKAGES ---
  {
    id: 'p1',
    title: 'The Groom Experience',
    description: 'Haircut, Shave, Facial, and Manicure for the big day.',
    price: 180,
    duration: 180,
    category: ServiceCategory.GROOM,
    image: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=2064&auto=format&fit=crop'
  },
  {
    id: 'p2',
    title: 'Groomsmen Party (per person)',
    description: 'Private booking, drinks included. Min 4 people.',
    price: 100,
    duration: 120,
    category: ServiceCategory.GROOM,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'e1',
    title: 'Father & Son',
    description: 'Classic cuts for both generations.',
    price: 70,
    duration: 60,
    category: ServiceCategory.EVENT,
    image: 'https://images.unsplash.com/photo-1620052087053-15f225eb167c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'e2',
    title: 'The Monthly Ritual',
    description: 'Membership includes 2 cuts and 1 shave per month.',
    price: 100,
    duration: 0,
    category: ServiceCategory.EVENT,
    image: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop'
  }
];

export const BARBERS: Barber[] = [
  {
    id: 'b1',
    name: 'James Sterling',
    role: 'Master Barber',
    experience: 12,
    specialty: 'Classic Cuts',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=1000&auto=format&fit=crop',
    instagram: '@sterling_cuts'
  },
  {
    id: 'b2',
    name: 'Marcus Thorne',
    role: 'Senior Stylist',
    experience: 8,
    specialty: 'Fades & Beards',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop',
    instagram: '@thorne_fades'
  },
  {
    id: 'b3',
    name: 'Elena Rossi',
    role: 'Stylist',
    experience: 5,
    specialty: 'Modern Textures',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    instagram: '@elena_styles'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'br1',
    name: 'Downtown Flagship',
    address: '1204 luxury Blvd, Metropolis',
    phone: '+1 (555) 012-3456',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?q=80&w=2074&auto=format&fit=crop',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 'br2',
    name: 'Westside Studio',
    address: '88 Sunset Strip, Westview',
    phone: '+1 (555) 098-7654',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 34.0522, lng: -118.2437 }
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Alexander Hamilton',
    rating: 5,
    comment: 'Best cut I have had in years. The atmosphere is top tier.',
    date: '2023-10-15'
  },
  {
    id: 'r2',
    name: 'David Miller',
    rating: 5,
    comment: 'Incredible attention to detail. James is a wizard.',
    date: '2023-11-02'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', title: 'Classic Pompadour', category: 'Haircut', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1000&auto=format&fit=crop' },
  { id: 'g2', title: 'Sharp Skin Fade', category: 'Fades', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop' },
  { id: 'g3', title: 'Full Beard Sculpt', category: 'Beard', image: 'https://images.unsplash.com/photo-1552642986-cca41e593910?q=80&w=1000&auto=format&fit=crop' },
  { id: 'g4', title: 'Textured Crop', category: 'Haircut', image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1000&auto=format&fit=crop' },
  { id: 'g5', title: 'Hot Towel Experience', category: 'Grooming', image: 'https://images.unsplash.com/photo-1512690459411-b9245aed8ad6?q=80&w=1000&auto=format&fit=crop' },
  { id: 'g6', title: 'Razor Line Up', category: 'Fades', image: 'https://images.unsplash.com/photo-1599351431202-6e0c051cd708?q=80&w=1000&auto=format&fit=crop' },
];