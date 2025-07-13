'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  MapPin, 
  Star,
  TrendingUp,
  Building,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  FileText,
  User,
  Calendar
} from 'lucide-react';

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
    lastName: 'Doe',
    email: 'john.doe@example.com',
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

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const handleAddAgent = () => {
    toast({
      title: "Agent Added",
      description: "New agent has been added successfully.",
    });
  };

  const handleApproveRequest = (requestId: number) => {
    toast({
      title: "Request Approved",
      description: "Agent request has been approved and user has been notified.",
    });
  };

  const handleRejectRequest = (requestId: number) => {
    toast({
      title: "Request Rejected",
      description: "Agent request has been rejected and user has been notified.",
    });
  };
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agent Management</h1>
          <p className="text-gray-600">Review agent applications and manage your real estate team</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => window.open('/agent-application', '_blank')}>
            <FileText className="w-4 h-4 mr-2" />
            View Public Application Form
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Agents</p>
                <p className="text-2xl font-bold text-gray-900">87</p>
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
                <p className="text-2xl font-bold text-gray-900">{mockAgentRequests.length}</p>
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
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Application Review</CardTitle>
              <p className="text-sm text-gray-600">Review and approve new agent applications</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAgentRequests.map((request, index) => (
                  <div key={request.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{request.firstName} {request.lastName}</h3>
                            <p className="text-sm text-gray-600">{request.specialization}</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800">
                            {request.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-900">Contact Information</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="text-gray-500">Email:</span>
                                <p className="font-medium">{request.email}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Phone:</span>
                                <p className="font-medium">{request.phone}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-900">Professional Details</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="text-gray-500">Experience:</span>
                                <p className="font-medium">{request.experience} years</p>
                              </div>
                              <div>
                                <span className="text-gray-500">License:</span>
                                <p className="font-medium">{request.licenseNumber}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Location:</span>
                                <p className="font-medium">{request.preferredLocation}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <h4 className="font-medium text-gray-900">Application Details</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="text-gray-500">Applied:</span>
                                <p className="font-medium">{request.applicationDate}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">Specialization:</span>
                                <p className="font-medium">{request.specialization}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-900 mb-2">Why JollyHomes?</h4>
                          <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                            {request.motivation}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 ml-6">
                        <Button 
                          size="sm" 
                          onClick={() => handleApproveRequest(request.id)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <UserPlus className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setShowRequestDetails(request.id)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                          onClick={() => handleRejectRequest(request.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'agents' && (
        <>
          {/* Filters */}
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
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
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

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent, index) => (
              <Card key={agent.id} className="property-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={agent.avatar} alt={agent.name} />
                          <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{agent.name}</h3>
                          <p className="text-sm text-gray-600">{agent.specialization}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(agent.status)}>
                        {agent.status}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        {agent.email}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        {agent.phone}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {agent.location}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{agent.propertiesSold}</p>
                        <p className="text-xs text-gray-600">Properties Sold</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">₵{(agent.totalRevenue / 1000000).toFixed(1)}M</p>
                        <p className="text-xs text-gray-600">Total Revenue</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{agent.rating}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}