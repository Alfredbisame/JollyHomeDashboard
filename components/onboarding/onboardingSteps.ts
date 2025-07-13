import { Home, Users, TrendingUp, Shield } from 'lucide-react';

export const onboardingSteps = [
  {
    id: 1,
    title: 'Welcome to JollyHomes',
    subtitle: 'Your Premier Real Estate Management Platform',
    description: 'Manage properties, track sales, and grow your real estate business with our comprehensive admin dashboard.',
    icon: Home,
    color: 'text-green-500'
  },
  {
    id: 2,
    title: 'Powerful Property Management',
    subtitle: 'Complete Control at Your Fingertips',
    description: 'Upload properties, manage listings, track status, and handle everything from rentals to sales with ease.',
    icon: TrendingUp,
    color: 'text-blue-500'
  },
  {
    id: 3,
    title: 'Advanced Analytics',
    subtitle: 'Data-Driven Insights',
    description: 'Get detailed analytics, performance metrics, and insights to make informed business decisions.',
    icon: Users,
    color: 'text-purple-500'
  },
  {
    id: 4,
    title: 'Secure & Scalable',
    subtitle: 'Built for Growth',
    description: 'Enterprise-grade security with role-based access control for your team and agents.',
    icon: Shield,
    color: 'text-orange-500'
  }
];
