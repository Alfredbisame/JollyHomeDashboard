'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  Video, 
  Plus, 
  Search, 
  Filter, 
  Upload, 
  Play, 
  Edit, 
  Trash2,
  Download,
  Clock,
  Eye,
  Calendar
} from 'lucide-react';

const mockVideos = [
  {
    id: 1,
    title: 'Modern Villa Virtual Tour',
    property: 'Modern Villa in East Legon',
    duration: '3:45',
    size: '125 MB',
    format: 'MP4',
    quality: '1080p',
    uploadDate: '2024-01-15',
    views: 1250,
    status: 'Published',
    thumbnail: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    title: 'Luxury Apartment Walkthrough',
    property: 'Luxury Apartment Complex',
    duration: '5:20',
    size: '210 MB',
    format: 'MP4',
    quality: '4K',
    uploadDate: '2024-01-14',
    views: 890,
    status: 'Published',
    thumbnail: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    title: 'Family Home Interior Tour',
    property: 'Family Home in Tema',
    duration: '4:15',
    size: '180 MB',
    format: 'MP4',
    quality: '1080p',
    uploadDate: '2024-01-13',
    views: 650,
    status: 'Processing',
    thumbnail: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 4,
    title: 'Executive Townhouse Overview',
    property: 'Executive Townhouse',
    duration: '2:30',
    size: '95 MB',
    format: 'MP4',
    quality: '720p',
    uploadDate: '2024-01-12',
    views: 420,
    status: 'Draft',
    thumbnail: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 5,
    title: 'Commercial Building Tour',
    property: 'Commercial Complex',
    duration: '6:10',
    size: '280 MB',
    format: 'MP4',
    quality: '4K',
    uploadDate: '2024-01-11',
    views: 1100,
    status: 'Published',
    thumbnail: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export default function VideosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [qualityFilter, setQualityFilter] = useState('all');

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || video.status.toLowerCase() === statusFilter;
    const matchesQuality = qualityFilter === 'all' || video.quality.toLowerCase() === qualityFilter;
    return matchesSearch && matchesStatus && matchesQuality;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case '4K': return 'bg-purple-100 text-purple-800';
      case '1080p': return 'bg-blue-100 text-blue-800';
      case '720p': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Video Management</h1>
          <p className="text-gray-600">Manage property videos and virtual tours</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Upload className="w-4 h-4 mr-2" />
          Upload Video
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Videos</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Video className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold text-gray-900">24.5K</p>
              </div>
              <Eye className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900">12.8 GB</p>
              </div>
              <Upload className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Duration</p>
                <p className="text-2xl font-bold text-gray-900">4:12</p>
              </div>
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search videos..."
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
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Select value={qualityFilter} onValueChange={setQualityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by quality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Quality</SelectItem>
                <SelectItem value="4k">4K</SelectItem>
                <SelectItem value="1080p">1080p</SelectItem>
                <SelectItem value="720p">720p</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <Card key={video.id} className="property-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button size="lg" className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-30">
                  <Play className="w-8 h-8 text-white" />
                </Button>
              </div>
              <div className="absolute top-3 left-3 flex space-x-2">
                <Badge className={getStatusColor(video.status)}>
                  {video.status}
                </Badge>
                <Badge className={getQualityColor(video.quality)}>
                  {video.quality}
                </Badge>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge variant="secondary" className="bg-black bg-opacity-70 text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.property}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {video.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {video.uploadDate}
                  </div>
                </div>
                
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{video.format}</span>
                  <span>{video.size}</span>
                </div>

                {video.status === 'Processing' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing...</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                )}
                
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Play className="w-3 h-3 mr-1" />
                    Play
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

      {/* Upload Progress (if uploading) */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <Upload className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-900">Uploading: Property_Tour_HD.mp4</p>
                <p className="text-sm text-blue-700">245 MB of 280 MB</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="text-blue-600">
              Cancel
            </Button>
          </div>
          <Progress value={87} className="h-2" />
          <p className="text-xs text-blue-600 mt-1">87% complete - 2 minutes remaining</p>
        </CardContent>
      </Card>
    </div>
  );
}