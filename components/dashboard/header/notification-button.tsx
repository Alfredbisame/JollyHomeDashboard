'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';
import { NotificationButtonProps } from './types';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { NotificationDropdownContent } from './NotificationDropdownContent';

export function NotificationButton({ 
  notificationCount = 0,
  onNotificationClick,
  className = ""
}: NotificationButtonProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
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
      </PopoverTrigger>
      <PopoverContent className="animate-bounce-in">
        <NotificationDropdownContent notificationCount={notificationCount} />
      </PopoverContent>
    </Popover>
  );
} 