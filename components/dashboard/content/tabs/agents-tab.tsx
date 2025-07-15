'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Plus } from 'lucide-react';
import { AgentsTabProps } from '../types';

export function AgentsTab({ onInviteAgent }: AgentsTabProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Agent Directory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Agent Management</h3>
          <p className="text-gray-600 mb-4">View and manage registered agents</p>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={onInviteAgent}
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite New Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 