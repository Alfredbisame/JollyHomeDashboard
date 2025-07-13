# Header Components

This directory contains modular header components that have been refactored for better maintainability and reusability.

## Components

### Header
The main header component that orchestrates all other header components.

**Props:**
- `onMenuClick`: Function called when mobile menu button is clicked
- `onSearch`: Function called when search input changes
- `onNotificationClick`: Function called when notification button is clicked
- `onProfileClick`: Function called when profile menu item is clicked
- `onSettingsClick`: Function called when settings menu item is clicked
- `onLogoutClick`: Function called when logout menu item is clicked
- `notificationCount`: Number of notifications to display (default: 3)
- `userAvatar`: URL of user avatar image (default: "/avatars/01.png")
- `userInitials`: User initials for avatar fallback (default: "AD")
- `searchPlaceholder`: Placeholder text for search input (default: "Search properties, agents...")
- `className`: Additional CSS classes

### SearchBar
A reusable search input component with an icon.

**Props:**
- `placeholder`: Placeholder text for the input
- `className`: Additional CSS classes
- `onSearch`: Function called when input value changes

### NotificationButton
A button component with a bell icon and optional notification badge.

**Props:**
- `notificationCount`: Number of notifications to display
- `onNotificationClick`: Function called when button is clicked
- `className`: Additional CSS classes

### UserMenu
A dropdown menu component with user avatar and menu items.

**Props:**
- `userAvatar`: URL of user avatar image
- `userInitials`: User initials for avatar fallback
- `onProfileClick`: Function called when profile is clicked
- `onSettingsClick`: Function called when settings is clicked
- `onLogoutClick`: Function called when logout is clicked
- `className`: Additional CSS classes

### MobileMenuButton
A button component for mobile menu toggle.

**Props:**
- `onMenuClick`: Function called when button is clicked
- `className`: Additional CSS classes (default: "lg:hidden")

## Usage

```tsx
import { Header } from '@/components/dashboard/header';

function DashboardLayout() {
  const handleMenuClick = () => {
    // Handle mobile menu toggle
  };

  const handleSearch = (value: string) => {
    // Handle search functionality
  };

  const handleNotificationClick = () => {
    // Handle notification click
  };

  return (
    <Header
      onMenuClick={handleMenuClick}
      onSearch={handleSearch}
      onNotificationClick={handleNotificationClick}
      notificationCount={5}
      userAvatar="/path/to/avatar.jpg"
      userInitials="JD"
    />
  );
}
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components can be used independently in other parts of the application
3. **Maintainability**: Easier to modify individual components without affecting others
4. **Testability**: Each component can be tested in isolation
5. **Type Safety**: Centralized types ensure consistency across components
6. **Developer Experience**: Clear component boundaries and well-defined interfaces 