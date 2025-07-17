import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Star, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

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

interface AgentCardProps {
  agent: Agent;
  index: number;
  onView?: (id: number) => void;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const getStatusColor = (status: string) => {
  return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
};

const AgentCard: React.FC<AgentCardProps> = ({ agent, index, onView, onEdit, onDelete }) => (
  <Card className="property-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
            <Button size="sm" variant="outline" onClick={() => onView && onView(agent.id)}>
              <Eye className="w-3 h-3 mr-1" />
              View
            </Button>
            <Button size="sm" variant="outline" onClick={() => onEdit && onEdit(agent.id)}>
              <Edit className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700" onClick={() => onDelete && onDelete(agent.id)}>
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AgentCard; 