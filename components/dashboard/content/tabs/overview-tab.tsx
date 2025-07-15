'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PropertyPerformanceChart } from '../charts/property-performance-chart';
import { PropertyStatusChart } from '../charts/property-status-chart';
import { PropertyCard } from '../property-card';
import { OverviewTabProps } from '../types';

export function OverviewTab({ 
  propertyData, 
  statusData, 
  recentProperties, 
  onViewProperty, 
  onEditProperty 
}: OverviewTabProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <PropertyPerformanceChart data={propertyData} />
        <PropertyStatusChart data={statusData} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onView={onViewProperty}
                onEdit={onEditProperty}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 