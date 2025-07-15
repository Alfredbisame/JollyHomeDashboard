export interface StatCard {
  name: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface PropertyData {
  month: string;
  sold: number;
  rented: number;
  featured: number;
}

export interface StatusData {
  name: string;
  value: number;
  color: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  image: string;
}

export interface ProjectProgress {
  name: string;
  progress: number;
}

export interface DashboardHeaderProps {
  onAddProperty?: () => void;
}

export interface StatsCardsProps {
  stats: StatCard[];
}

export interface PropertyCardProps {
  property: Property;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
}

export interface PropertyPerformanceChartProps {
  data: PropertyData[];
}

export interface PropertyStatusChartProps {
  data: StatusData[];
}

export interface RevenueTrendChartProps {
  data: PropertyData[];
}

export interface ProjectProgressProps {
  projects: ProjectProgress[];
}

export interface OverviewTabProps {
  propertyData: PropertyData[];
  statusData: StatusData[];
  recentProperties: Property[];
  onViewProperty?: (id: number) => void;
  onEditProperty?: (id: number) => void;
}

export interface AnalyticsTabProps {
  propertyData: PropertyData[];
  projects: ProjectProgress[];
}

export interface AgentsTabProps {
  onInviteAgent?: () => void;
}

export interface DashboardContentProps {
  onAddProperty?: () => void;
  onViewProperty?: (id: number) => void;
  onEditProperty?: (id: number) => void;
  onInviteAgent?: () => void;
} 