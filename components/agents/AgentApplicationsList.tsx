import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AgentApplicationCard from './AgentApplicationCard';

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

interface AgentApplicationsListProps {
  requests: AgentApplicationRequest[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
  onReview: (id: number) => void;
}

const AgentApplicationsList: React.FC<AgentApplicationsListProps> = ({ requests, onApprove, onReject, onReview }) => (
  <div className="space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Agent Application Review</CardTitle>
        <p className="text-sm text-gray-600">Review and approve new agent applications</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request, index) => (
            <AgentApplicationCard
              key={request.id}
              request={request}
              index={index}
              onApprove={onApprove}
              onReject={onReject}
              onReview={onReview}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default AgentApplicationsList; 