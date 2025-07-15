'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { DashboardHeaderProps } from './types';

export function DashboardHeader({ onAddProperty }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
      </div>
      {onAddProperty && (
        <Button onClick={onAddProperty} className="bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      )}
    </div>
  );
} 