import { Card, CardContent } from '@/components/ui/card';
import { Users, FileText, Calendar, TrendingUp } from 'lucide-react';
import React from 'react';

interface AgentStatsCardsProps {
  pendingApplicationsCount: number;
  agentCount: number;
}

const AgentStatsCards: React.FC<AgentStatsCardsProps> = ({ pendingApplicationsCount, agentCount }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <Card className="stats-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Active Agents</p>
            <p className="text-2xl font-bold text-gray-900">{agentCount}</p>
          </div>
          <Users className="w-8 h-8 text-blue-600" />
        </div>
      </CardContent>
    </Card>
    <Card className="stats-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Pending Applications</p>
            <p className="text-2xl font-bold text-gray-900">{pendingApplicationsCount}</p>
          </div>
          <FileText className="w-8 h-8 text-orange-600" />
        </div>
      </CardContent>
    </Card>
    <Card className="stats-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Applications This Month</p>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
          <Calendar className="w-8 h-8 text-green-600" />
        </div>
      </CardContent>
    </Card>
    <Card className="stats-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Approval Rate</p>
            <p className="text-2xl font-bold text-gray-900">78%</p>
          </div>
          <TrendingUp className="w-8 h-8 text-purple-600" />
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AgentStatsCards; 