import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemsSolved: string[];
  materials: string[];
  benefits: string[];
  bestFor: string[];
  faqs: FAQ[];
  icon: LucideIcon;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial';
  subCategory: string; // e.g., "Terrace", "Basement"
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  location?: string;
  completionDate?: string;
  beforeImage?: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  content: string;
  rating: number;
  date?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface BrandPillar {
  title: string;
  description: string;
  icon: LucideIcon;
}