'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';
import { NotificationButtonProps } from './types';

export function NotificationButton({ 
  notificationCount = 0,
  onNotificationClick,
  className = ""
}: NotificationButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className={`relative ${className}`}
      onClick={onNotificationClick}
    >
      <Bell className="h-5 w-5" />
      {notificationCount > 0 && (
        <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
          {notificationCount}
        </Badge>
      )}
    </Button>
  );
} 