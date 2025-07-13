export interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
}

export interface NotificationButtonProps {
  notificationCount?: number;
  onNotificationClick?: () => void;
  className?: string;
}

export interface UserMenuProps {
  userAvatar?: string;
  userInitials?: string;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  className?: string;
}

export interface MobileMenuButtonProps {
  onMenuClick: () => void;
  className?: string;
}

export interface HeaderProps {
  onMenuClick: () => void;
  onSearch?: (value: string) => void;
  onNotificationClick?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  notificationCount?: number;
  userAvatar?: string;
  userInitials?: string;
  searchPlaceholder?: string;
  className?: string;
} 