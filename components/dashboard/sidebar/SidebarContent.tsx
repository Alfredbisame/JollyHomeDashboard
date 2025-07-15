import { usePathname } from 'next/navigation';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNav } from './SidebarNav';
import { SidebarFooter } from './SidebarFooter';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: require('lucide-react').Home },
  { name: 'Properties', href: '/dashboard/properties', icon: require('lucide-react').Building },
  { name: 'Analytics', href: '/dashboard/analytics', icon: require('lucide-react').BarChart3 },
  { name: 'Agents', href: '/dashboard/agents', icon: require('lucide-react').Users },
  { name: 'Gallery', href: '/dashboard/gallery', icon: require('lucide-react').Image },
  { name: 'Videos', href: '/dashboard/videos', icon: require('lucide-react').Video },
  { name: 'Locations', href: '/dashboard/locations', icon: require('lucide-react').MapPin },
  { name: 'Newsletter', href: '/dashboard/newsletter', icon: require('lucide-react').Mail },
  { name: 'Reports', href: '/dashboard/reports', icon: require('lucide-react').FileText },
  { name: 'Performance', href: '/dashboard/performance', icon: require('lucide-react').TrendingUp },
  { name: 'Settings', href: '/dashboard/settings', icon: require('lucide-react').Settings },
];

export function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <SidebarHeader onClose={onClose} />
      <SidebarNav navigation={navigation} pathname={pathname} />
      <div className="px-4 py-4 border-t border-gray-200">
        <SidebarFooter />
      </div>
    </div>
  );
} 