'use client';

import { SearchBar } from './search-bar';
import { NotificationButton } from './notification-button';
import { UserMenu } from './user-menu';
import { MobileMenuButton } from './mobile-menu-button';
import { HeaderProps } from './types';

export function Header({ 
  onMenuClick,
  onSearch,
  onNotificationClick,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  notificationCount = 3,
  userAvatar = "/avatars/01.png",
  userInitials = "AD",
  searchPlaceholder = "Search properties, agents...",
  className = ""
}: HeaderProps) {
  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MobileMenuButton onMenuClick={onMenuClick} />
            <div className="ml-4 flex items-center space-x-4">
              <SearchBar 
                placeholder={searchPlaceholder}
                onSearch={onSearch}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <NotificationButton 
              notificationCount={notificationCount}
              onNotificationClick={onNotificationClick}
            />
            
            <UserMenu 
              userAvatar={userAvatar}
              userInitials={userInitials}
              onProfileClick={onProfileClick}
              onSettingsClick={onSettingsClick}
              onLogoutClick={onLogoutClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
} 