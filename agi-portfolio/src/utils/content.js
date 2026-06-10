import {
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Handshake,
  Headphones,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  PackageCheck,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Timer,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react';

export const company = {
  name: 'AGI Enterprise Limited',
  shortName: 'AGI',
  strapline: 'Strategic Procurement. Reliable Supply. Institutional Growth.',
  heroTitle: 'Precision Procurement and Supply Solutions for Zambia’s Leading Institutions.',
  heroCopy:
    'AGI Enterprise Limited is a premier Zambian provider of comprehensive procurement and supply services. We empower public and private sector organizations with dependable, high-quality solutions tailored to modern operational requirements.',
  description:
    'AGI Enterprise Limited is a strategic partner for organizations seeking seamless supply chain solutions. We bridge the gap between institutional needs and high-quality deliverables across diverse sectors, ensuring efficiency and cost-effectiveness at every stage.',
  mission:
    'To empower public and private sector institutions by delivering reliable, high-quality, and cost-effective procurement solutions that enhance operational efficiency and support sustainable organizational growth.',
  vision:
    'To become Zambia’s most reliable and innovative provider of quality goods and services, setting the benchmark for excellence in the supply chain industry.',
  contact: {
    address: 'Mpika St, Nchanga, CHTS Shops',
    phonePrimary: '0761700608',
    phoneSecondary: '0965318772',
    email: 'ganizanilungu@gmail.com',
  },
};

export const stats = [
  { label: 'Service Categories', value: '6+' },
  { label: 'Operational Reach', value: 'Nationwide' },
  { label: 'Strategic Values', value: '5' },
];

export const services = [
  {
    icon: Cpu,
    title: 'ICT & Office Solutions',
    summary:
      'Providing high-performance technology, print consumables, and office essentials for modern work environments.',
    items: ['ICT equipment and accessories', 'Premium print consumables', 'Ergonomic office furniture'],
  },
  {
    icon: Blocks,
    title: 'IT & Digital Infrastructure',
    summary:
      'Compliant hardware procurement and software licensing to support robust administrative and digital operations.',
    items: ['Enterprise hardware procurement', 'Software licensing and compliance', 'Digital payment system support'],
  },
  {
    icon: Sparkles,
    title: 'Hygiene & Facilities Supply',
    summary:
      'Professional-grade consumables and safety essentials to maintain clean, secure, and compliant workspaces.',
    items: ['Industrial cleaning supplies', 'Healthcare-standard consumables', 'PPE and safety equipment'],
  },
  {
    icon: Wrench,
    title: 'Construction & Industrial Hardware',
    summary:
      'Sourcing robust materials and industrial tools for infrastructure maintenance and construction projects.',
    items: ['Building and civil materials', 'Electrical and plumbing hardware', 'Industrial tools and machinery'],
  },
  {
    icon: Leaf,
    title: 'Operational & Automotive Support',
    summary:
      'Specialized supplies supporting productivity, field operations, and mobility across various sectors.',
    items: ['Agricultural inputs', 'Automotive parts and fluids', 'Fleet maintenance supplies'],
  },
  {
    icon: Paintbrush,
    title: 'Corporate Branding',
    summary:
      'Strategic branding solutions that enhance organizational identity and market presence through quality assets.',
    items: ['Identity design support', 'Branded corporate materials', 'Professional collateral'],
  },
];

export const values = [
  { icon: ShieldCheck, title: 'Integrity', copy: 'We maintain the highest ethical standards in all procurement processes.' },
  { icon: BadgeCheck, title: 'Reliability', copy: 'Consistent delivery on quality and timelines for every client engagement.' },
  { icon: Zap, title: 'Efficiency', copy: 'Streamlined workflows that optimize resource allocation and minimize delays.' },
  { icon: Lightbulb, title: 'Innovation', copy: 'Implementing modern sourcing strategies to solve complex supply challenges.' },
  { icon: CheckCircle2, title: 'Accountability', copy: 'Ownership of the entire supply lifecycle from quotation to fulfillment.' },
];

export const reasons = [
  {
    icon: PackageCheck,
    title: 'Strategic Pricing',
    copy:
      'Market-competitive pricing with transparent cost structures, ensuring institutional value without hidden fees.',
  },
  {
    icon: Truck,
    title: 'National Logistics',
    copy:
      'Robust distribution network capable of delivering essential supplies to any location within Zambia.',
  },
  {
    icon: Handshake,
    title: 'Quality Partnerships',
    copy:
      'Long-term relationships with reputable global and local manufacturers guarantee product authenticity.',
  },
  {
    icon: Headphones,
    title: 'Professional Service',
    copy:
      'Dedicated account support providing rapid response times and clear technical communication.',
  },
];

export const portfolio = [
  {
    icon: Building2,
    title: 'Public Sector Partnerships',
    copy: 'Supporting government institutions with reliable procurement for large-scale administrative and operational needs.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate Enterprises',
    copy: 'Tailored supply solutions for private sector organizations, from retail chains to corporate headquarters.',
  },
  {
    icon: Factory,
    title: 'Industrial & Projects',
    copy: 'Provisioning hardware and specialized equipment for construction, maintenance, and infrastructure developments.',
  },
];

export const contactCards = [
  { icon: MapPin, label: 'Address', value: company.contact.address },
  { icon: Phone, label: 'Telephone', value: `${company.contact.phonePrimary} / ${company.contact.phoneSecondary}` },
  { icon: Mail, label: 'Email', value: company.contact.email },
  { icon: Timer, label: 'Availability', value: 'Professional consultation available during business hours' },
];
