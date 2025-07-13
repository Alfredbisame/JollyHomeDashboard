'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Plus, 
  Search, 
  Filter, 
  Building, 
  TrendingUp, 
  DollarSign,
  Eye,
  Edit,
  Trash2,
  Map
} from 'lucide-react';

const mockLocations = [
  {
    id: 1,
    name: 'East Legon',
    region: 'Greater Accra',
    properties: 145,
    avgPrice: 2500000,
    priceRange: '₵800K - ₵5.2M',
    growth: 12.5,
    status: 'Active',
    description: 'Premium residential area with modern amenities and excellent infrastructure.',
    coordinates: '5.6037° N, 0.1870° W'
  },
  {
    id: 2,
    name: 'Airport City',
    region: 'Greater Accra',
    properties: 89,
    avgPrice: 1800000,
    priceRange: '₵600K - ₵3.8M',
    growth: 8.3,
    status: 'Active',
    description: 'Commercial and residential hub near Kotoka International Airport.',
    coordinates: '5.6052° N, 0.1719° W'
  },
  {
    id: 3,
    name: 'Cantonments',
    region: 'Greater Accra',
    properties: 67,
    avgPrice: 3200000,
    priceRange: '₵1.2M - ₵8.5M',
    growth: 15.2,
    status: 'Active',
    description: 'Upscale diplomatic area with luxury properties and embassies.',
    coordinates: '5.5558° N, 0.1844° W'
  },
  {
    id: 4,
    name: 'Tema',
    region: 'Greater Accra',
    properties: 234,
    avgPrice: 1200000,
    priceRange: '₵300K - ₵2.8M',
    growth: 5.7,
    status: 'Active',
    description: 'Industrial city with affordable housing and growing commercial sector.',
    coordinates: '5.6698° N, 0.0166° E'
  },
  {
    id: 5,
    name: 'Spintex',
    region: 'Greater Accra',
    properties: 156,
    avgPrice: 1500000,
    priceRange: '₵400K - ₵3.2M',
    growth: 10.1,
    status: 'Active',
    description: 'Rapidly developing area with mixed residential and commercial properties.',
    coordinates: '5.6108° N, 0.1297° W'
  },
  {
    id: 6,
    name: 'Kumasi',
    region: 'Ashanti',
    properties: 98,
    avgPrice: 900000,
    priceRange: '₵250K - ₵2.1M',
    growth: 7.4,
    status: 'Expanding',
    description: 'Cultural capital with traditional and modern housing options.',
    coordinates: '6.6885° N, 1.6244° W'
  }
];

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const filteredLocations = mockLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         location.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = regionFilter === 'all' || location.region.toLowerCase().includes(regionFilter.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Expanding': return 'bg-blue-100 text-blue-800';
      case 'Developing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGrowthColor = (growth: number) => {
    if (growth > 10) return 'text-green-600';
    if (growth > 5) return 'text-blue-600';
    return 'text-orange-600';
  };
  const handleAddLocation = () => {
    setShowAddForm(false);
    toast({
      title: "Location Added",
      description: "New location has been added successfully.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Location Management</h1>
          <p className="text-gray-600">Manage property locations and market insights</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Location
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Locations</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Markets</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Growth</p>
                <p className="text-2xl font-bold text-gray-900">9.2%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Properties</p>
                <p className="text-2xl font-bold text-gray-900">789</p>
              </div>
              <Building className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="greater accra">Greater Accra</SelectItem>
                <SelectItem value="ashanti">Ashanti</SelectItem>
                <SelectItem value="western">Western</SelectItem>
                <SelectItem value="central">Central</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Locations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLocations.map((location, index) => (
          <Card key={location.id} className="property-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.region} Region</p>
                  </div>
                  <Badge className={getStatusColor(location.status)}>
                    {location.status}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600">{location.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{location.properties}</p>
                    <p className="text-xs text-gray-600">Properties</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">₵{(location.avgPrice / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-gray-600">Avg Price</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price Range:</span>
                    <span className="font-medium">{location.priceRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Growth Rate:</span>
                    <span className={`font-medium ${getGrowthColor(location.growth)}`}>
                      +{location.growth}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Coordinates:</span>
                    <span className="font-mono text-xs">{location.coordinates}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Map className="w-3 h-3 mr-1" />
                    View Map
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Location Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Add New Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="locationName">Location Name</Label>
                  <Input id="locationName" placeholder="Enter location name" />
                </div>
                <div>
                  <Label htmlFor="region">Region</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="greater-accra">Greater Accra</SelectItem>
                      <SelectItem value="ashanti">Ashanti</SelectItem>
                      <SelectItem value="western">Western</SelectItem>
                      <SelectItem value="central">Central</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Location description" rows={3} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="coordinates">Coordinates</Label>
                  <Input id="coordinates" placeholder="e.g., 5.6037° N, 0.1870° W" />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="expanding">Expanding</SelectItem>
                      <SelectItem value="developing">Developing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddLocation} className="bg-primary hover:bg-primary/90">
                  Add Location
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}