'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Building, 
  Users, 
  BarChart3, 
  Mail, 
  Settings, 
  FileText,
  Image,
  Video,
  MapPin,
  TrendingUp,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Properties', href: '/dashboard/properties', icon: Building },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Agents', href: '/dashboard/agents', icon: Users },
  { name: 'Gallery', href: '/dashboard/gallery', icon: Image },
  { name: 'Videos', href: '/dashboard/videos', icon: Video },
  { name: 'Locations', href: '/dashboard/locations', icon: MapPin },
  { name: 'Newsletter', href: '/dashboard/newsletter', icon: Mail },
  { name: 'Reports', href: '/dashboard/reports', icon: FileText },
  { name: 'Performance', href: '/dashboard/performance', icon: TrendingUp },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white">
            <SidebarContent onClose={onClose} />
          </div>
        </div>
      )}
      
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <SidebarContent />
      </div>
    </>
  );
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
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
      
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              pathname === item.href
                ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
            )}
          >
            <item.icon
              className={cn(
                pathname === item.href ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-5 w-5'
              )}
            />
            {item.name}
          </a>
        ))}
      </nav>
      
      <div className="px-4 py-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold text-sm">SA</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Super Admin</p>
            <p className="text-xs text-gray-500">admin@jollyhomes.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}