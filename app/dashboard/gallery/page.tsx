'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Image as ImageIcon, 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Eye, 
  Edit, 
  Trash2,
  Download,
  Grid3X3,
  List,
  Calendar
} from 'lucide-react';

const mockImages = [
  {
    id: 1,
    title: 'Modern Villa Living Room',
    property: 'Modern Villa in East Legon',
    category: 'Interior',
    uploadDate: '2024-01-15',
    size: '2.4 MB',
    dimensions: '1920x1080',
    url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Luxury Apartment Exterior',
    property: 'Luxury Apartment Complex',
    category: 'Exterior',
    uploadDate: '2024-01-14',
    size: '3.1 MB',
    dimensions: '1920x1280',
    url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Family Home Kitchen',
    property: 'Family Home in Tema',
    category: 'Interior',
    uploadDate: '2024-01-13',
    size: '1.8 MB',
    dimensions: '1600x1200',
    url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Executive Townhouse Garden',
    property: 'Executive Townhouse',
    category: 'Exterior',
    uploadDate: '2024-01-12',
    size: '2.7 MB',
    dimensions: '1920x1080',
    url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    title: 'Modern Bathroom Design',
    property: 'Modern Villa in East Legon',
    category: 'Interior',
    uploadDate: '2024-01-11',
    size: '2.2 MB',
    dimensions: '1600x1200',
    url: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 6,
    title: 'Commercial Building Facade',
    property: 'Commercial Complex',
    category: 'Exterior',
    uploadDate: '2024-01-10',
    size: '3.5 MB',
    dimensions: '1920x1280',
    url: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 7,
    title: 'Bedroom Interior',
    property: 'Luxury Apartment Complex',
    category: 'Interior',
    uploadDate: '2024-01-09',
    size: '1.9 MB',
    dimensions: '1600x1200',
    url: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 8,
    title: 'Swimming Pool Area',
    property: 'Executive Townhouse',
    category: 'Exterior',
    uploadDate: '2024-01-08',
    size: '2.8 MB',
    dimensions: '1920x1080',
    url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

  const filteredImages = mockImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || image.category.toLowerCase() === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Interior': return 'bg-blue-100 text-blue-800';
      case 'Exterior': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleImageSelection = (imageId: number) => {
    setSelectedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600">Manage property images and media assets</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Selected
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Images
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Images</p>
                <p className="text-2xl font-bold text-gray-900">2,847</p>
              </div>
              <ImageIcon className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Interior Photos</p>
                <p className="text-2xl font-bold text-gray-900">1,523</p>
              </div>
              <ImageIcon className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Exterior Photos</p>
                <p className="text-2xl font-bold text-gray-900">1,324</p>
              </div>
              <ImageIcon className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900">8.4 GB</p>
              </div>
              <Upload className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search images..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="interior">Interior</SelectItem>
                  <SelectItem value="exterior">Exterior</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Images Info */}
      {selectedImages.length > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <p className="text-green-800">
                {selectedImages.length} image{selectedImages.length > 1 ? 's' : ''} selected
              </p>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline" className="text-red-600">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
                <Button size="sm" variant="outline" onClick={() => setSelectedImages([])}>
                  Clear Selection
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Images Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`property-card cursor-pointer animate-slide-up ${
                selectedImages.includes(image.id) ? 'ring-2 ring-green-500' : ''
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => toggleImageSelection(image.id)}
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(image.category)}>
                    {image.category}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => toggleImageSelection(image.id)}
                    className="w-4 h-4 text-green-600 rounded"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">{image.title}</h3>
                  <p className="text-xs text-gray-600">{image.property}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{image.dimensions}</span>
                    <span>{image.size}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {image.uploadDate}
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="space-y-0">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className={`flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer animate-slide-up ${
                    selectedImages.includes(image.id) ? 'bg-green-50' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => toggleImageSelection(image.id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedImages.includes(image.id)}
                    onChange={() => toggleImageSelection(image.id)}
                    className="w-4 h-4 text-green-600 rounded mr-4"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-4">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.property}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <Badge className={getCategoryColor(image.category)}>
                      {image.category}
                    </Badge>
                    <span>{image.dimensions}</span>
                    <span>{image.size}</span>
                    <span>{image.uploadDate}</span>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Eye className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}