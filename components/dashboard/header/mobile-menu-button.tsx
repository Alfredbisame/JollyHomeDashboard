'use client';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { MobileMenuButtonProps } from './types';

export function MobileMenuButton({ 
  onMenuClick, 
  className = "lg:hidden" 
}: MobileMenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={onMenuClick}
    >
      <Menu className="h-5 w-5" />
    </Button>
  );
} 