'use client';

import { RevenueTrendChart } from '../charts/revenue-trend-chart';
import { ProjectProgress } from '../charts/project-progress';
import { AnalyticsTabProps } from '../types';

export function AnalyticsTab({ propertyData, projects }: AnalyticsTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <RevenueTrendChart data={propertyData} />
      <ProjectProgress projects={projects} />
    </div>
  );
} 