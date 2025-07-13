'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { SearchBarProps } from './types';

export function SearchBar({ 
  placeholder = "Search properties, agents...", 
  className = "w-64",
  onSearch 
}: SearchBarProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder={placeholder}
        className={`pl-10 ${className}`}
        onChange={handleInputChange}
      />
    </div>
  );
} 