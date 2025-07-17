import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import AgentCard from './AgentCard';

interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  rating: number;
  propertiesSold: number;
  totalRevenue: number;
  joinDate: string;
  specialization: string;
  avatar: string;
}

interface AgentDirectoryProps {
  agents: Agent[];
  searchTerm: string;
  statusFilter: string;
  onSearch: (term: string) => void;
  onStatusFilter: (status: string) => void;
  onViewAgent?: (id: number) => void;
  onEditAgent?: (id: number) => void;
  onDeleteAgent?: (id: number) => void;
}

const AgentDirectory: React.FC<AgentDirectoryProps> = ({
  agents,
  searchTerm,
  statusFilter,
  onSearch,
  onStatusFilter,
  onViewAgent,
  onEditAgent,
  onDeleteAgent
}) => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>Agent Directory</CardTitle>
        <p className="text-sm text-gray-600">Manage your current real estate agents</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={onStatusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent, index) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          index={index}
          onView={onViewAgent}
          onEdit={onEditAgent}
          onDelete={onDeleteAgent}
        />
      ))}
    </div>
  </>
);

export default AgentDirectory; 