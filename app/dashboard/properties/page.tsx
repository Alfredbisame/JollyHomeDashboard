'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  MapPin,
  Bed,
  Bath,
  Square,
  Upload,
  Image as ImageIcon,
  Video
} from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: 'Modern Villa in Accra',
    location: 'East Legon, Accra',
    price: { ghs: 2500000, usd: 210000, eur: 195000, gbp: 168000 },
    status: 'For Sale',
    bedrooms: 4,
    bathrooms: 3,
    size: 3200,
    images: 8,
    videos: 2,
    featured: true,
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    location: 'Airport City, Accra',
    price: { ghs: 1800000, usd: 151000, eur: 140000, gbp: 121000 },
    status: 'Featured',
    bedrooms: 3,
    bathrooms: 2,
    size: 2100,
    images: 12,
    videos: 1,
    featured: true,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'Family Home',
    location: 'Tema, Greater Accra',
    price: { ghs: 3500, usd: 295, eur: 273, gbp: 236 },
    status: 'For Rent',
    bedrooms: 5,
    bathrooms: 4,
    size: 4000,
    images: 6,
    videos: 0,
    featured: false,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 4,
    title: 'Executive Townhouse',
    location: 'Cantonments, Accra',
    price: { ghs: 3200000, usd: 269000, eur: 249000, gbp: 215000 },
    status: 'Sold',
    bedrooms: 4,
    bathrooms: 3,
    size: 2800,
    images: 15,
    videos: 3,
    featured: false,
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currency, setCurrency] = useState('ghs');
  const [showAddForm, setShowAddForm] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [uploadingVideos, setUploadingVideos] = useState(false);
  const { toast } = useToast();

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || property.status.toLowerCase().replace(' ', '-') === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'For Sale': return 'bg-green-100 text-green-800';
      case 'For Rent': return 'bg-blue-100 text-blue-800';
      case 'Sold': return 'bg-gray-100 text-gray-800';
      case 'Featured': return 'bg-yellow-100 text-yellow-800';
      case 'Upcoming': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: any, curr: string) => {
    const symbols = { ghs: '₵', usd: '$', eur: '€', gbp: '£' };
    return `${symbols[curr as keyof typeof symbols]}${price[curr].toLocaleString()}`;
  };

  const handleImageUpload = () => {
    setUploadingImages(true);
    // Simulate upload
    setTimeout(() => {
      setUploadingImages(false);
      toast({
        title: "Images Uploaded",
        description: "Property images have been uploaded successfully.",
      });
    }, 2000);
  };

  const handleVideoUpload = () => {
    setUploadingVideos(true);
    // Simulate upload
    setTimeout(() => {
      setUploadingVideos(false);
      toast({
        title: "Videos Uploaded",
        description: "Property videos have been uploaded successfully.",
      });
    }, 3000);
  };

  const handleAddProperty = () => {
    setShowAddForm(false);
    toast({
      title: "Property Added",
      description: "New property has been added successfully.",
    });
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
          <p className="text-gray-600">Manage your property listings and uploads</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="for-rent">For Rent</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ghs">Ghanaian Cedis (₵)</SelectItem>
                <SelectItem value="usd">US Dollars ($)</SelectItem>
                <SelectItem value="eur">Euros (€)</SelectItem>
                <SelectItem value="gbp">British Pounds (£)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="property-card overflow-hidden">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <Badge className={getStatusColor(property.status)}>
                  {property.status}
                </Badge>
              </div>
              {property.featured && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-yellow-500 text-white">
                    Featured
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-3 right-3 flex space-x-2">
                <Badge variant="secondary" className="text-xs">
                  <ImageIcon className="w-3 h-3 mr-1" />
                  {property.images}
                </Badge>
                {property.videos > 0 && (
                  <Badge variant="secondary" className="text-xs">
                    <Video className="w-3 h-3 mr-1" />
                    {property.videos}
                  </Badge>
                )}
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {property.location}
                  </p>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl text-green-600">
                    {formatPrice(property.price, currency)}
                    {property.status === 'For Rent' && <span className="text-sm">/month</span>}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.bedrooms} bed
                  </span>
                  <span className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.bathrooms} bath
                  </span>
                  <span className="flex items-center">
                    <Square className="w-4 h-4 mr-1" />
                    {property.size} sqft
                  </span>
                </div>
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
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

      {/* Add Property Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Add New Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Property Title</Label>
                  <Input id="title" placeholder="Enter property title" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter location" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Property description" rows={3} />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input id="bathrooms" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="size">Size (sqft)</Label>
                  <Input id="size" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="for-sale">For Sale</SelectItem>
                      <SelectItem value="for-rent">For Rent</SelectItem>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="price-ghs">Price (₵)</Label>
                  <Input id="price-ghs" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="price-usd">Price ($)</Label>
                  <Input id="price-usd" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="price-eur">Price (€)</Label>
                  <Input id="price-eur" type="number" placeholder="0" />
                </div>
                <div>
                  <Label htmlFor="price-gbp">Price (£)</Label>
                  <Input id="price-gbp" type="number" placeholder="0" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Property Images</Label>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                    onClick={handleImageUpload}
                  >
                    <Upload className={`w-8 h-8 mx-auto mb-2 ${uploadingImages ? 'text-primary animate-pulse' : 'text-gray-400'}`} />
                    <p className="text-sm text-gray-600">
                      {uploadingImages ? 'Uploading images...' : 'Click to upload images or drag and drop'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <Label>Property Videos</Label>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                    onClick={handleVideoUpload}
                  >
                    <Video className={`w-8 h-8 mx-auto mb-2 ${uploadingVideos ? 'text-primary animate-pulse' : 'text-gray-400'}`} />
                    <p className="text-sm text-gray-600">
                      {uploadingVideos ? 'Uploading videos...' : 'Click to upload videos or drag and drop'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddProperty} className="bg-primary hover:bg-primary/90">
                  Add Property
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}