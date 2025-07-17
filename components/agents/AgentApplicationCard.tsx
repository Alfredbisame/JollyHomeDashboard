import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, UserPlus, Eye, Trash2 } from 'lucide-react';
import React from 'react';

interface AgentApplicationRequest {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  licenseNumber: string;
  preferredLocation: string;
  specialization: string;
  motivation: string;
  applicationDate: string;
  status: string;
}

interface AgentApplicationCardProps {
  request: AgentApplicationRequest;
  index: number;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onReview: (id: number) => void;
}

const AgentApplicationCard: React.FC<AgentApplicationCardProps> = ({ request, index, onApprove, onReject, onReview }) => (
  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
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
          onClick={() => onApprove(request.id)}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Approve
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          onClick={() => onReview(request.id)}
        >
          <Eye className="w-4 h-4 mr-2" />
          Review
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
          onClick={() => onReject(request.id)}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Reject
        </Button>
      </div>
    </div>
  </div>
);

export default AgentApplicationCard; 