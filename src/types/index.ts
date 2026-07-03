import { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  category: string;
  createdAt: string;
  isFavorite?: boolean;
}
