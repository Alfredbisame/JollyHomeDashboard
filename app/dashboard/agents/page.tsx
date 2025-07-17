'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import AgentManagementHeader from '@/components/agents/AgentManagementHeader';
import AgentStatsCards from '@/components/agents/AgentStatsCards';
import AgentApplicationsList from '@/components/agents/AgentApplicationsList';
import AgentDirectory from '@/components/agents/AgentDirectory';

const mockAgents = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@jollyhomes.com',
    phone: '+233 24 123 4567',
    location: 'East Legon, Accra',
    status: 'Active',
    rating: 4.8,
    propertiesSold: 45,
    totalRevenue: 2400000,
    joinDate: '2023-01-15',
    specialization: 'Luxury Homes',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Michael Asante',
    email: 'michael.asante@jollyhomes.com',
    phone: '+233 20 987 6543',
    location: 'Airport City, Accra',
    status: 'Active',
    rating: 4.6,
    propertiesSold: 32,
    totalRevenue: 1800000,
    joinDate: '2023-03-20',
    specialization: 'Commercial',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Grace Mensah',
    email: 'grace.mensah@jollyhomes.com',
    phone: '+233 26 555 7890',
    location: 'Tema, Greater Accra',
    status: 'Inactive',
    rating: 4.9,
    propertiesSold: 67,
    totalRevenue: 3200000,
    joinDate: '2022-08-10',
    specialization: 'Residential',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'David Osei',
    email: 'david.osei@jollyhomes.com',
    phone: '+233 24 111 2233',
    location: 'Cantonments, Accra',
    status: 'Active',
    rating: 4.7,
    propertiesSold: 28,
    totalRevenue: 1500000,
    joinDate: '2023-06-05',
    specialization: 'Land Sales',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const mockAgentRequests = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Kumson',
    email: 'john.k1@example.com',
    phone: '+233 24 555 1234',
    experience: '2-3',
    licenseNumber: 'RE-2024-001',
    preferredLocation: 'East Legon',
    specialization: 'Residential Properties',
    motivation: 'I am passionate about real estate and believe JollyHomes is the perfect platform to grow my career...',
    applicationDate: '2024-01-15',
    status: 'Pending'
  },
  {
    id: 2,
    firstName: 'Mary',
    lastName: 'Asante',
    email: 'mary.asante@example.com',
    phone: '+233 20 555 5678',
    experience: '4-5',
    licenseNumber: 'RE-2024-002',
    preferredLocation: 'Airport City',
    specialization: 'Commercial Properties',
    motivation: 'With my extensive background in commercial real estate, I want to contribute to JollyHomes success...',
    applicationDate: '2024-01-14',
    status: 'Under Review'
  }
];

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('agents');
  const [showRequestDetails, setShowRequestDetails] = useState<number | null>(null);
  const { toast } = useToast();

  const filteredAgents = mockAgents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || agent.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddAgent = () => {
    toast({
      title: 'Agent Added',
      description: 'New agent has been added successfully.',
    });
  };

  const handleApproveRequest = (requestId: number) => {
    toast({
      title: 'Request Approved',
      description: 'Agent request has been approved and user has been notified.',
    });
  };

  const handleRejectRequest = (requestId: number) => {
    toast({
      title: 'Request Rejected',
      description: 'Agent request has been rejected and user has been notified.',
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <AgentManagementHeader />
      <AgentStatsCards pendingApplicationsCount={mockAgentRequests.length} agentCount={filteredAgents.length} />
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('applications')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'applications'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Pending Applications ({mockAgentRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'agents'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Agent Directory ({filteredAgents.length})
          </button>
        </nav>
      </div>
      {activeTab === 'applications' && (
        <AgentApplicationsList
          requests={mockAgentRequests}
          onApprove={handleApproveRequest}
          onReject={handleRejectRequest}
          onReview={setShowRequestDetails}
        />
      )}
      {activeTab === 'agents' && (
        <AgentDirectory
          agents={filteredAgents}
          searchTerm={searchTerm}
          statusFilter={statusFilter}
          onSearch={setSearchTerm}
          onStatusFilter={setStatusFilter}
        />
      )}
    </div>
  );
}