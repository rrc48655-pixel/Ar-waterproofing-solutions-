import { 
  Droplets, 
  Home, 
  Building2, 
  ShieldCheck, 
  Hammer, 
  Layers, 
  Warehouse, 
  PaintBucket,
  ClipboardList,
  Search,
  CheckSquare,
  BadgeCheck,
  Waves,
  ThermometerSun,
  Microscope,
  HardHat,
  Clock,
  Users,
  CloudRain,
  Bath,
  Syringe,
  ArrowDownFromLine
} from 'lucide-react';
import { Service, Project, Testimonial, NavItem, FAQ, ProcessStep, Stat, BrandPillar } from './types';

// ==========================================
// 📸 IMAGE CONFIGURATION CENTER
// Replace the URLs below with your own image paths
// Local images: "/images/filename.jpg" (put in public folder)
// External images: "https://example.com/image.jpg"
// ==========================================

export const IMAGES = {
  // Hero Carousel Images (Home Page)
  hero: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1600", // Slide 1
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600", // Slide 2
    "https://images.unsplash.com/photo-1599708153386-fa2e2bc1356e?auto=format&fit=crop&q=80&w=1600", // Slide 3
    "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=1600"  // Slide 4
  ],

  // About Page Images
  about: {
    mission: "https://images.unsplash.com/photo-1581094794329-cd109c090150?auto=format&fit=crop&q=80&w=800",
    safety: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  },

  // Service Thumbnails
  services: {
    terrace: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800",
    bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    grouting: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    basement: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800"
  },

  // Project Gallery (Before/After)
  projects: {
    p1: {
      before: "https://images.unsplash.com/photo-1628190222444-a0c5c832281a?q=80&w=800",
      after: "https://images.unsplash.com/photo-1596263576926-2820c7e2b724?auto=format&fit=crop&q=80&w=800"
    },
    p2: {
      before: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    p3: {
      before: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
    },
    p4: {
      before: "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80&w=800"
    },
    p5: {
      before: "https://images.unsplash.com/photo-1633505766297-c88f3eb92e44?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1572331165267-854da2b00dc1?auto=format&fit=crop&q=80&w=800"
    },
    p6: {
      before: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
    }
  },

  // Home Page Gallery Section
  gallery: {
    terrace: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    bathroom: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200",
    exterior: "https://images.unsplash.com/photo-1599708153386-fa2e2bc1356e?auto=format&fit=crop&q=80&w=1200",
    industrial: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
  },

  // Background Patterns
  patterns: {
    carbon: "https://www.transparenttextures.com/patterns/carbon-fibre.png"
  }
};

// ==========================================
// CONSTANTS
// ==========================================

export const COMPANY_NAME = "AR Waterproofing Solutions";
export const TAGLINE = "Trusted Waterproofing Experts for Long-Lasting Protection";
export const PHONE_NUMBER = "+91 86399 15784";
export const EMAIL_ADDRESS = "contact@arwaterproofing.in";
export const ADDRESS = "Hyderabad, Telangana";
export const WHATSAPP_LINK = "https://wa.me/918639915784";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/arwaterproofingsolutions",
  youtube: "https://youtube.com/shorts/dyhbdGO8Efk?si=jO90heeUK8afHIna",
  facebook: "https://www.facebook.com/share/1CjhWrdSs2/"
};

export const SERVICE_AREAS = [
  "Hyderabad", 
  "Secunderabad", 
  "Warangal", 
  "Hitech City",
  "Jubilee Hills",
  "Gachibowli",
  "Visakhapatnam", 
  "Vijayawada",
  "Guntur",
  "Telangana & AP (Major Districts)"
];

export const WORKING_HOURS = "Mon - Sat: 9:00 AM - 8:00 PM";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const KEY_STATS: Stat[] = [
  { label: "Projects Completed", value: "500+", icon: CheckSquare },
  { label: "Years Experience", value: "12+", icon: Clock },
  { label: "Client Satisfaction", value: "100%", icon: Users },
  { label: "Warranty Up To", value: "10 Years", icon: ShieldCheck },
];

export const BRAND_PILLARS: BrandPillar[] = [
  {
    title: "Technical Diagnosis",
    description: "We don't guess. We use digital moisture meters and technical analysis to pinpoint the exact source of leakage.",
    icon: Microscope
  },
  {
    title: "Premium Materials",
    description: "Authorized applicators for Dr. Fixit, Fosroc, Sika, and Asian Paints. No diluted or sub-standard chemicals.",
    icon: PaintBucket
  },
  {
    title: "Trained Workforce",
    description: "Our team consists of verified, skilled technicians trained in correct mixing ratios and application techniques.",
    icon: HardHat
  },
  {
    title: "Leak-Free Guarantee",
    description: "We provide a formal, stamp-signed warranty certificate ranging from 5 to 10 years depending on the service.",
    icon: BadgeCheck
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "1. Scientific Inspection",
    description: "Site visit with digital moisture meters & technical assessment to detect hidden leak sources.",
    icon: Search
  },
  {
    title: "2. Custom Solution",
    description: "We design a technical proposal specifying the right chemical system (Acrylic/PU/Epoxy) for your structure.",
    icon: ClipboardList
  },
  {
    title: "3. Surface Prep",
    description: "Aggressive cleaning, crack opening, and grinding. 70% of durability depends on this stage.",
    icon: Hammer
  },
  {
    title: "4. Layered Application",
    description: "Application of primers, reinforcement mesh, and multiple top coats as per manufacturer standards.",
    icon: Layers
  },
  {
    title: "5. Ponding Test",
    description: "We flood the area with water for 48 hours to prove the seal before final handover.",
    icon: CheckSquare
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do you provide a warranty for your waterproofing services?",
    answer: "Yes, we strictly offer a 5 to 10-year warranty on paper. The duration depends on the specific coating system (e.g., Acrylic vs. PU) and the condition of the substrate."
  },
  {
    question: "Can you stop leakage without breaking my bathroom tiles?",
    answer: "Absolutely. We specialize in 'Non-Destructive' Epoxy Tile Grouting and PU Injection. This solves 90% of bathroom leaks without removing a single tile."
  },
  {
    question: "Why is my new building already leaking?",
    answer: "This is often due to poor concrete compaction (honeycombing) or lack of proper curing. We treat these structural flaws using Pressure Grouting technology."
  },
  {
    question: "How much does waterproofing cost per sq. ft?",
    answer: "Costs vary based on the solution (e.g., basic coating vs. heavy-duty membrane). After our free inspection, we provide a transparent quote with no hidden charges."
  }
];

export const MAINTENANCE_TIPS = [
  "Clean terrace drains weekly during monsoon to prevent water stagnation.",
  "Re-grout bathroom tiles every 2-3 years to maintain the waterproof seal.",
  "Inspect exterior walls for hairline cracks before the painting cycle.",
  "Ensure water tank overflows are piped away from the building walls."
];

// Re-export images for Home Page consumption
export const HERO_IMAGES = IMAGES.hero;
export const GALLERY_IMAGES = [
  {
    url: IMAGES.gallery.terrace,
    title: "Terrace Waterproofing",
    description: "Multi-layer protection for long-lasting durability"
  },
  {
    url: IMAGES.gallery.bathroom,
    title: "Bathroom Leakage Repair",
    description: "Epoxy grouting without breaking tiles"
  },
  {
    url: IMAGES.gallery.exterior,
    title: "Exterior Wall Coatings",
    description: "Weather-proof paint solutions"
  },
  {
    url: IMAGES.gallery.industrial,
    title: "Industrial Solutions",
    description: "Heavy-duty protection for factories"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'terrace-walls',
    title: 'Terrace & Wall Waterproofing',
    shortDescription: 'Advanced 7-layer coating systems for roofs and heat-reflective wall solutions.',
    fullDescription: 'Our terrace waterproofing service uses high-elongation elastomeric coatings that bridge cracks and move with thermal expansion. For walls, we address both rising dampness (saltpeter) and external rain lashing using specialized acrylic polymers.',
    problemsSolved: ['Water ponding on roof', 'Ceiling damp patches', 'High indoor temperature', 'External wall algal growth'],
    materials: ['Fiber Mesh (45 GSM)', 'Acrylic Polymer Coatings', 'PU Hybrid Membranes', 'Crack-X Paste'],
    benefits: ['Reduces indoor heat by 5-6°C', 'UV Resistant & Walkable', 'Seamless (No Joints)', 'Anti-Fungal'],
    bestFor: ['Old Independent Houses', 'Apartment Complexes', 'Villas', 'Commercial Rooftops'],
    faqs: [
      { question: "Can I walk on the terrace after treatment?", answer: "Yes, our coatings are designed for regular foot traffic." },
      { question: "Does this replace tiling?", answer: "It can be applied over existing tiles or concrete. No need to remove old tiles." }
    ],
    icon: CloudRain,
    image: IMAGES.services.terrace
  },
  {
    id: 'wet-areas',
    title: 'Bathroom, Sump & Tank',
    shortDescription: 'Leak-free toilets and sanitary areas without breaking tiles.',
    fullDescription: 'We use advanced epoxy grouts and penetrative sealers to waterproof bathrooms, sunken slabs, and water tanks. Our food-grade epoxy coatings for tanks ensure that your stored water remains free from chemical contamination and algae.',
    problemsSolved: ['Seepage on lower floor ceiling', 'Sump water level dropping', 'Foul smell in toilets', 'Contaminated tank water'],
    materials: ['Epoxy Tile Grout', '2-Component Cementitious Coating', 'Food-Grade Epoxy', 'Silicone Sealants'],
    benefits: ['No breaking of tiles required', 'Safe for drinking water tanks', 'Stops dampness instantly', 'Chemical resistant'],
    bestFor: ['Furnished Apartments', 'Hotels', 'Old Bathrooms', 'Underground Sumps'],
    faqs: [
      { question: "Is the tank coating safe?", answer: "Yes, we use certified food-grade epoxy suitable for potable water." }
    ],
    icon: Bath,
    image: IMAGES.services.bathroom
  },
  {
    id: 'grouting',
    title: 'Grouting & Expansion Joints',
    shortDescription: 'High-pressure injection for deep structural cracks and industrial joints.',
    fullDescription: 'For active running water leaks or deep concrete voids, surface coating is not enough. We use high-pressure PU injection pumps to fill voids deep inside the concrete. We also seal structural expansion joints using polysulphide sealants.',
    problemsSolved: ['Active running water leaks', 'Honeycomb concrete voids', 'Expansion joint failure', 'Deep structural cracks'],
    materials: ['Hydrophobic PU Foam', 'Polysulphide Sealants', 'Low Viscosity Epoxy', 'Backer Rods'],
    benefits: ['Stops water instantly', 'Strengthens concrete structure', 'Accommodates building movement'],
    bestFor: ['Basement Carparks', 'Large Commercial Buildings', 'Industrial Floors', 'Dams/Tunnels'],
    faqs: [
      { question: "How long does the grout take to set?", answer: "PU foam reacts with water and sets within minutes, stopping leaks instantly." }
    ],
    icon: Syringe,
    image: IMAGES.services.grouting
  },
  {
    id: 'pools-basements',
    title: 'Pools & Basements',
    shortDescription: 'Negative-side waterproofing for high-pressure water retention.',
    fullDescription: 'Basements and pools face constant hydrostatic pressure. We use crystalline waterproofing technology that grows crystals inside concrete pores to block water, along with heavy-duty TPO or PVC membranes for external protection.',
    problemsSolved: ['Rising dampness in basements', 'Swimming pool leakage', 'Retaining wall seepage', 'Groundwater pressure'],
    materials: ['Crystalline Admixtures', 'PVC/TPO Membranes', 'Bituminous Torch-on', 'Pool Tile Adhesives'],
    benefits: ['Withstands high water pressure', 'Protects foundation steel from rust', 'Self-healing properties'],
    bestFor: ['Swimming Pools', 'Basement Parking', 'Retaining Walls', 'Lift Pits'],
    faqs: [
      { question: "Do you treat damp walls in basements?", answer: "Yes, we use negative-side waterproofing to stop water entering from the soil." }
    ],
    icon: Waves,
    image: IMAGES.services.basement
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Commercial Complex Terrace',
    category: 'Commercial',
    subCategory: 'Terrace Waterproofing',
    location: 'Hitech City, Hyderabad',
    description: 'Complete terrace restoration for a 15,000 sq. ft. commercial building using a 5-layer acrylic system.',
    problem: 'Severe water ponding and leakage into 4th-floor offices causing electrical hazards.',
    solution: 'Removed old screed, repaired cracks with V-grooving, applied 2 coats primer + 3 coats fiber-reinforced acrylic.',
    outcome: '100% leak-free for 3 years. Reduced top-floor AC load due to heat reflection.',
    beforeImage: IMAGES.projects.p1.before,
    afterImage: IMAGES.projects.p1.after
  },
  {
    id: '2',
    title: 'Luxury Villa Basement',
    category: 'Residential',
    subCategory: 'Basement Repair',
    location: 'Jubilee Hills, Hyderabad',
    description: 'Restoration of a damp home theater basement using negative-side crystalline waterproofing.',
    problem: 'Groundwater seepage ruining expensive interiors and causing mold smell.',
    solution: 'Removed plaster, applied crystalline slurry to concrete, and used PU injection for active leak points.',
    outcome: 'Completely dry basement. Client successfully installed wooden flooring post-treatment.',
    beforeImage: IMAGES.projects.p2.before,
    afterImage: IMAGES.projects.p2.after
  },
  {
    id: '3',
    title: 'Pharma Warehouse Roof',
    category: 'Industrial',
    subCategory: 'Metal Roof Coating',
    location: 'Visakhapatnam, AP',
    description: 'Heat-reflective coating on metal sheets for a pharmaceutical warehouse.',
    problem: 'High internal temperature affecting medicine storage and leaks at J-hook bolts.',
    solution: 'Applied elastomeric cool-roof coating and sealed all bolt joints with PU sealant.',
    outcome: 'Internal temperature dropped by 7°C. Zero leaks during cyclone season.',
    beforeImage: IMAGES.projects.p3.before,
    afterImage: IMAGES.projects.p3.after
  },
  {
    id: '4',
    title: 'Apartment Water Tanks',
    category: 'Residential',
    subCategory: 'Tank Waterproofing',
    location: 'Vijayawada, AP',
    description: 'Food-grade epoxy treatment for overhead tanks in a 50-flat society.',
    problem: 'Cracks in RCC tank causing water loss and contamination.',
    solution: 'Crack injection followed by 2 coats of solvent-free, food-grade epoxy.',
    outcome: 'Hygienic water storage and stopped structural deterioration.',
    beforeImage: IMAGES.projects.p4.before,
    afterImage: IMAGES.projects.p4.after
  },
  {
    id: '5',
    title: 'Infinity Pool Sealing',
    category: 'Commercial',
    subCategory: 'Swimming Pool',
    location: 'Gachibowli, Hyderabad',
    description: 'Waterproofing of a rooftop infinity pool for a boutique hotel.',
    problem: 'Tile grout failure causing leakage into rooms below.',
    solution: 'Re-grouted with epoxy and applied transparent polyurethane coating.',
    outcome: 'Aesthetic preserved, leaks stopped immediately.',
    beforeImage: IMAGES.projects.p5.before,
    afterImage: IMAGES.projects.p5.after
  },
  {
    id: '6',
    title: 'Expansion Joint Treatment',
    category: 'Industrial',
    subCategory: 'Joint Sealing',
    location: 'Warangal, Telangana',
    description: 'Sealing of 50mm expansion joints in a factory floor.',
    problem: 'Water ingress through joints damaging machinery.',
    solution: 'Installed backer rods and filled with gun-grade polysulphide sealant.',
    outcome: 'Flexible, watertight joints capable of withstanding forklift traffic.',
    beforeImage: IMAGES.projects.p6.before,
    afterImage: IMAGES.projects.p6.after
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Reddy',
    role: 'Homeowner',
    location: 'Banjara Hills, Hyderabad',
    content: 'AR Waterproofing solved a persistent leakage issue in my terrace that three other contractors failed to fix. Their technical diagnosis was accurate, and the team was highly professional.',
    rating: 5,
    date: 'Oct 2023'
  },
  {
    id: '2',
    name: 'Suresh Rao',
    role: 'Facility Manager',
    location: 'Cherlapally, Hyderabad',
    content: 'We hired them for our factory roof repair. The work was done on time without disrupting our production. The quality of materials used was top-notch. Highly recommended for industrial jobs.',
    rating: 5,
    date: 'Dec 2023'
  },
  {
    id: '3',
    name: 'Amit Sharma',
    role: 'Civil Engineer',
    location: 'Warangal',
    content: 'Technically sound team. They understood the structural expansion joint problem immediately and provided the correct polysulphide sealant solution. Good attention to detail.',
    rating: 4,
    date: 'Jan 2024'
  },
  {
    id: '4',
    name: 'Mrs. Lakshmi',
    role: 'Apartment Secretary',
    location: 'Kukatpally, Hyderabad',
    content: 'Very honest pricing. They advised us not to do unnecessary work and focused only on the problem areas. The 5-year warranty certificate gives us peace of mind.',
    rating: 5,
    date: 'Feb 2024'
  }
];