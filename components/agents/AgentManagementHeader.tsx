import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import React from 'react';

interface AgentManagementHeaderProps {
  onViewForm?: () => void;
}

const AgentManagementHeader: React.FC<AgentManagementHeaderProps> = ({ onViewForm }) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Agent Management</h1>
      <p className="text-gray-600">Review agent applications and manage your real estate team</p>
    </div>
    <div className="flex space-x-3">
      <Button variant="outline" onClick={onViewForm || (() => window.open('/agent-application', '_blank'))}>
        <FileText className="w-4 h-4 mr-2" />
        View Public Application Form
      </Button>
    </div>
  </div>
);

export default AgentManagementHeader; 