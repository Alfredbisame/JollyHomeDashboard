import { SidebarNavItem } from './SidebarNavItem';

interface SidebarNavProps {
  navigation: { name: string; href: string; icon: React.ComponentType<any> }[];
  pathname: string;
}

export function SidebarNav({ navigation, pathname }: SidebarNavProps) {
  return (
    <nav className="flex-1 px-4 py-6 space-y-1">
      {navigation.map((item) => (
        <SidebarNavItem key={item.name} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}
