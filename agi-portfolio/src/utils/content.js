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
  strapline: 'Innovative and collaborative supply solutions.',
  heroTitle: 'Premium procurement for institutions that cannot afford delays.',
  heroCopy:
    'AGI Enterprise Limited is a registered Zambian supplier delivering dependable, cost-effective goods and procurement support for public and private sector operations.',
  description:
    'AGI Enterprise Limited supports organizations with reliable general supply, procurement, and delivery solutions. The company serves public and private sector institutions with quality products tailored to operational needs, timelines, and budgets.',
  mission:
    'To empower public and private sector institutions with reliable, high-quality, and cost-effective procurement solutions that improve operational efficiency and support sustainable growth.',
  vision:
    'To become Zambia\'s most reliable and innovative provider of quality goods and services.',
  contact: {
    address: 'Mpika St, Nchanga, CHTS Shops',
    phonePrimary: '0761700608',
    phoneSecondary: '0965318772',
    email: 'ganizanilungu@gmail.com',
  },
};

export const stats = [
  { label: 'Service categories', value: '6+' },
  { label: 'Core values', value: '5' },
  { label: 'National delivery focus', value: 'ZM' },
];

export const services = [
  {
    icon: Cpu,
    title: 'ICT & Office Solutions',
    summary:
      'Technology, print consumables, and office essentials that help teams work with fewer interruptions.',
    items: ['ICT equipment and accessories', 'Toners, cartridges, and printer supplies', 'Office furniture'],
  },
  {
    icon: Blocks,
    title: 'IT & Digital Solutions',
    summary:
      'Compliance-ready hardware procurement and software licensing for modern administrative environments.',
    items: ['Hardware procurement', 'Retail software licensing', 'Cashless revenue system support'],
  },
  {
    icon: Sparkles,
    title: 'Cleaning & Hygiene Supplies',
    summary:
      'High-quality consumables and safety essentials for clean, safe, and well-maintained workspaces.',
    items: ['Cleaning supplies and detergents', 'Household consumables', 'PPE, safety gear, and first aid'],
  },
  {
    icon: Wrench,
    title: 'Construction, Electrical & Hardware',
    summary:
      'Robust materials and reliable tools for construction, maintenance, and infrastructure work.',
    items: ['Building materials', 'Electrical and plumbing supplies', 'Industrial tools and equipment'],
  },
  {
    icon: Leaf,
    title: 'Agriculture & Automotive Supplies',
    summary:
      'Essential products that support productivity, field operations, and mobility across sectors.',
    items: ['Agricultural supplies', 'Automotive essentials', 'Operational support products'],
  },
  {
    icon: Paintbrush,
    title: 'Branding Services',
    summary:
      'Professional branding solutions that strengthen business identity and create a cohesive market presence.',
    items: ['Corporate identity support', 'Branded materials', 'Professional presentation assets'],
  },
];

export const values = [
  { icon: ShieldCheck, title: 'Integrity', copy: 'Transparent dealings and principled decisions at every step.' },
  { icon: BadgeCheck, title: 'Reliability', copy: 'Consistent quality, dependable sourcing, and delivery commitments.' },
  { icon: Zap, title: 'Efficiency', copy: 'Lean procurement workflows that protect timelines and budgets.' },
  { icon: Lightbulb, title: 'Innovation', copy: 'Modern solutions that improve how organizations source and operate.' },
  { icon: CheckCircle2, title: 'Accountability', copy: 'Clear ownership from quotation through fulfillment.' },
];

export const reasons = [
  {
    icon: PackageCheck,
    title: 'Competitive, transparent pricing',
    copy:
      'Market-driven pricing with clear quotations and no hidden costs, designed to deliver value without budget surprises.',
  },
  {
    icon: Truck,
    title: 'Prompt national delivery',
    copy:
      'Reliable logistics support helps organizations keep operations moving across Zambia with fewer supply interruptions.',
  },
  {
    icon: Handshake,
    title: 'Trusted supplier partnerships',
    copy:
      'Strong relationships with reputable manufacturers and suppliers support consistent quality and product availability.',
  },
  {
    icon: Headphones,
    title: 'Responsive customer support',
    copy:
      'Fast quotations, clear communication, and professional follow-through from a team built around service.',
  },
];

export const portfolio = [
  {
    icon: Building2,
    title: 'Public sector procurement',
    copy: 'Structured supply support for administrative, hygiene, ICT, and operational requirements.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Private institution supply',
    copy: 'Flexible sourcing for offices, facilities, retail operations, and corporate teams.',
  },
  {
    icon: Factory,
    title: 'Infrastructure support',
    copy: 'Hardware, electrical, plumbing, and industrial supplies for maintenance and project delivery.',
  },
];

export const contactCards = [
  { icon: MapPin, label: 'Office', value: company.contact.address },
  { icon: Phone, label: 'Phone', value: `${company.contact.phonePrimary} / ${company.contact.phoneSecondary}` },
  { icon: Mail, label: 'Email', value: company.contact.email },
  { icon: Timer, label: 'Response', value: 'Quotations and inquiries welcome' },
];
