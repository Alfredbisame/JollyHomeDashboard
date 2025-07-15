'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Eye, Edit } from 'lucide-react';
import { PropertyCardProps } from './types';

export function PropertyCard({ property, onView, onEdit }: PropertyCardProps) {
  return (
    <div className="property-card border rounded-lg p-4">
      <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm">{property.title}</h3>
          <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
            {property.status}
          </Badge>
        </div>
        <p className="text-xs text-gray-600 flex items-center">
          <MapPin className="w-3 h-3 mr-1" />
          {property.location}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">{property.price}</span>
          <span className="text-xs text-gray-500">
            {property.bedrooms}bed • {property.bathrooms}bath • {property.size}
          </span>
        </div>
        <div className="flex space-x-2 pt-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1"
            onClick={() => onView?.(property.id)}
          >
            <Eye className="w-3 h-3 mr-1" />
            View
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1"
            onClick={() => onEdit?.(property.id)}
          >
            <Edit className="w-3 h-3 mr-1" />
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
} 