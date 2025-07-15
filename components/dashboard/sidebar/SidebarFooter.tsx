export function SidebarFooter() {
  return (
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
  );
}
