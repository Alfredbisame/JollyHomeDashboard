import { Home, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarHeaderProps {
  onClose?: () => void;
}

export function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Home className="h-8 w-8 text-green-600" />
        </div>
        <div className="ml-2">
          <h1 className="text-xl font-bold text-gray-900">JollyHomes</h1>
          <p className="text-xs text-gray-500">Admin Dashboard</p>
        </div>
      </div>
      {onClose && (
        <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
