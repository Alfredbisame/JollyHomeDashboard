'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardHeader } from './dashboard-header';
import { StatsCards } from './stats-cards';
import { OverviewTab } from './tabs/overview-tab';
import { AnalyticsTab } from './tabs/analytics-tab';
import { AgentsTab } from './tabs/agents-tab';
import { DashboardContentProps } from './types';
import { 
  statsData, 
  propertyData, 
  statusData, 
  recentProperties, 
  projectProgressData 
} from './data';

export function DashboardContent({ 
  onAddProperty,
  onViewProperty,
  onEditProperty,
  onInviteAgent
}: DashboardContentProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <DashboardHeader onAddProperty={onAddProperty} />
      
      <StatsCards stats={statsData} />

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="agents">Agents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab
            propertyData={propertyData}
            statusData={statusData}
            recentProperties={recentProperties}
            onViewProperty={onViewProperty}
            onEditProperty={onEditProperty}
          />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsTab
            propertyData={propertyData}
            projects={projectProgressData}
          />
        </TabsContent>

        <TabsContent value="agents">
          <AgentsTab onInviteAgent={onInviteAgent} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 