import React from 'react';

interface NotificationDropdownContentProps {
  notificationCount: number;
}

export function NotificationDropdownContent({ notificationCount }: NotificationDropdownContentProps) {
  return (
    <div>
      <div className="font-semibold mb-2">Notifications</div>
      <div className="space-y-2">
        {notificationCount > 0 ? (
          Array.from({ length: notificationCount }).map((_, i) => (
            <div key={i} className="p-2 rounded bg-muted">
              Notification {i + 1}
            </div>
          ))
        ) : (
          <div className="p-2 rounded bg-muted">No new notifications</div>
        )}
      </div>
    </div>
  );
}
