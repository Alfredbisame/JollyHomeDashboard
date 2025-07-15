import { 
  Building, 
  DollarSign, 
  Users, 
  TrendingUp 
} from 'lucide-react';
import { StatCard, PropertyData, StatusData, Property, ProjectProgress } from './types';

export const statsData: StatCard[] = [
  { name: 'Total Properties', value: '1,234', change: '+12%', icon: Building, color: 'text-blue-600' },
  { name: 'Total Revenue', value: '$2.4M', change: '+8%', icon: DollarSign, color: 'text-green-600' },
  { name: 'Active Agents', value: '87', change: '+3%', icon: Users, color: 'text-purple-600' },
  { name: 'Avg. Property Value', value: '$485K', change: '+15%', icon: TrendingUp, color: 'text-orange-600' },
];

export const propertyData: PropertyData[] = [
  { month: 'Jan', sold: 45, rented: 32, featured: 12 },
  { month: 'Feb', sold: 52, rented: 41, featured: 15 },
  { month: 'Mar', sold: 48, rented: 38, featured: 18 },
  { month: 'Apr', sold: 61, rented: 45, featured: 22 },
  { month: 'May', sold: 55, rented: 42, featured: 20 },
  { month: 'Jun', sold: 67, rented: 48, featured: 25 },
];

export const statusData: StatusData[] = [
  { name: 'For Sale', value: 45, color: '#22c55e' },
  { name: 'For Rent', value: 32, color: '#3b82f6' },
  { name: 'Sold', value: 18, color: '#ef4444' },
  { name: 'Featured', value: 25, color: '#f59e0b' },
];

export const recentProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Villa in Accra',
    location: 'East Legon, Accra',
    price: '₵2,500,000',
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    size: '3,200 sqft',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    location: 'Airport City, Accra',
    price: '₵1,800,000',
    status: 'Featured',
    bedrooms: 3,
    bathrooms: 2,
    size: '2,100 sqft',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'Family Home',
    location: 'Tema, Greater Accra',
    price: '₵3,500/month',
    status: 'For Rent',
    bedrooms: 5,
    bathrooms: 4,
    size: '4,000 sqft',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export const projectProgressData: ProjectProgress[] = [
  { name: 'East Legon Phase 1', progress: 85 },
  { name: 'Airport City Complex', progress: 62 },
  { name: 'Tema Community 15', progress: 94 },
]; 