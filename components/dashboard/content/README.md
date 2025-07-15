# Dashboard Content Components

This directory contains modular dashboard content components that have been refactored for better maintainability and reusability.

## Structure

```
components/dashboard/content/
├── README.md                           # Documentation
├── index.ts                            # Barrel exports
├── types.ts                            # Centralized TypeScript interfaces
├── data.ts                             # Data constants and mock data
├── dashboard-content.tsx               # Main orchestrator component
├── dashboard-header.tsx                # Dashboard header with title and add button
├── stats-cards.tsx                     # Statistics cards grid
├── property-card.tsx                   # Individual property card component
├── charts/                             # Chart components
│   ├── property-performance-chart.tsx  # Bar chart for property performance
│   ├── property-status-chart.tsx       # Pie chart for property status
│   ├── revenue-trend-chart.tsx         # Line chart for revenue trends
│   └── project-progress.tsx            # Progress bars for projects
└── tabs/                               # Tab content components
    ├── overview-tab.tsx                # Overview tab content
    ├── analytics-tab.tsx               # Analytics tab content
    └── agents-tab.tsx                  # Agents tab content
```

## Components

### DashboardContent
The main orchestrator component that manages the entire dashboard layout and state.

**Props:**
- `onAddProperty`: Function called when add property button is clicked
- `onViewProperty`: Function called when view property button is clicked
- `onEditProperty`: Function called when edit property button is clicked
- `onInviteAgent`: Function called when invite agent button is clicked

### DashboardHeader
The header section with title and add property button.

**Props:**
- `onAddProperty`: Function called when add property button is clicked

### StatsCards
Displays a grid of statistics cards.

**Props:**
- `stats`: Array of stat card data

### PropertyCard
Individual property card component with image, details, and action buttons.

**Props:**
- `property`: Property object with all property details
- `onView`: Function called when view button is clicked
- `onEdit`: Function called when edit button is clicked

### Chart Components

#### PropertyPerformanceChart
Bar chart showing property performance over time.

#### PropertyStatusChart
Pie chart showing property status distribution.

#### RevenueTrendChart
Line chart showing revenue trends.

#### ProjectProgress
Progress bars showing project completion status.

### Tab Components

#### OverviewTab
Contains property performance chart, status chart, and recent properties.

#### AnalyticsTab
Contains revenue trend chart and project progress.

#### AgentsTab
Contains agent management interface.

## Data Structure

### StatCard
```typescript
interface StatCard {
  name: string;
  value: string;
  change: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}
```

### Property
```typescript
interface Property {
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
```

## Usage

```tsx
import { DashboardContent } from '@/components/dashboard/content';

function DashboardPage() {
  const handleAddProperty = () => {
    // Handle add property
  };

  const handleViewProperty = (id: number) => {
    // Handle view property
  };

  const handleEditProperty = (id: number) => {
    // Handle edit property
  };

  const handleInviteAgent = () => {
    // Handle invite agent
  };

  return (
    <DashboardContent
      onAddProperty={handleAddProperty}
      onViewProperty={handleViewProperty}
      onEditProperty={handleEditProperty}
      onInviteAgent={handleInviteAgent}
    />
  );
}
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be used independently in other parts of the application
3. **Maintainability**: Easy to modify individual components without affecting others
4. **Testability**: Each component can be tested in isolation
5. **Type Safety**: Centralized types ensure consistency across components
6. **Developer Experience**: Clear component boundaries and well-defined interfaces
7. **Data Management**: Centralized data constants for easy updates
8. **Chart Reusability**: Chart components can be reused in other dashboard sections 