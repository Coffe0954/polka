import {
  Smartphone,
  Home,
  Car,
  Laptop,
  Armchair,
  Watch,
  Baby,
  Dumbbell
} from 'lucide-react';
import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Электроника', icon: Smartphone },
  { id: '2', name: 'Недвижимость', icon: Home },
  { id: '3', name: 'Транспорт', icon: Car },
  { id: '4', name: 'Работа', icon: Laptop },
  { id: '5', name: 'Дом и сад', icon: Armchair },
  { id: '6', name: 'Личные вещи', icon: Watch },
  { id: '7', name: 'Детские товары', icon: Baby },
  { id: '8', name: 'Хобби и отдых', icon: Dumbbell },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'iPhone 15 Pro Max 256GB Natural Titanium',
    price: 115000,
    location: 'Москва, ул. Тверская',
    imageUrl: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop',
    category: 'Электроника',
    createdAt: '2 часа назад',
  },
  {
    id: '2',
    title: 'MacBook Pro 14 M3 Max 32/1TB',
    price: 285000,
    location: 'Санкт-Петербург, Невский пр-т',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    category: 'Электроника',
    createdAt: '5 часов назад',
  },
  {
    id: '3',
    title: 'BMW M4 Competition (G82)',
    price: 9800000,
    location: 'Казань, ул. Баумана',
    imageUrl: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=800&auto=format&fit=crop',
    category: 'Транспорт',
    createdAt: 'Вчера',
  },
  {
    id: '4',
    title: 'Квартира в ЖК «Лужники Колл»',
    price: 45000000,
    location: 'Москва, Хамовники',
    imageUrl: 'https://images.unsplash.com/photo-1600607687940-477a2846953b?q=80&w=800&auto=format&fit=crop',
    category: 'Недвижимость',
    createdAt: '3 дня назад',
  },
  {
    id: '5',
    title: 'Sony PlayStation 5 Slim',
    price: 45000,
    location: 'Екатеринбург, ул. Ленина',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop',
    category: 'Электроника',
    createdAt: '1 час назад',
  },
  {
    id: '6',
    title: 'Кресло Herman Miller Aeron',
    price: 125000,
    location: 'Краснодар, Красная ул.',
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop',
    category: 'Дом и сад',
    createdAt: '4 часа назад',
  },
];
