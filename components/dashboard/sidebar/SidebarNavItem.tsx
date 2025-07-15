import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
  item: { name: string; href: string; icon: React.ComponentType<any> };
  pathname: string;
}

export function SidebarNavItem({ item, pathname }: SidebarNavItemProps) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      className={cn(
        pathname === item.href
          ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
        'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200'
      )}
    >
      <Icon
        className={cn(
          pathname === item.href ? 'text-green-600' : 'text-gray-400 group-hover:text-gray-500',
          'mr-3 flex-shrink-0 h-5 w-5'
        )}
      />
      {item.name}
    </a>
  );
}
