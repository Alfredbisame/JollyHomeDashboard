'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Building, 
  Users, 
  Eye,
  Calendar,
  Download,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

const monthlyData = [
  { month: 'Jan', sales: 45, revenue: 2400000, views: 12000, leads: 340 },
  { month: 'Feb', sales: 52, revenue: 2800000, views: 15000, leads: 420 },
  { month: 'Mar', sales: 48, revenue: 2600000, views: 13500, leads: 380 },
  { month: 'Apr', sales: 61, revenue: 3200000, views: 18000, leads: 520 },
  { month: 'May', sales: 55, revenue: 2900000, views: 16000, leads: 460 },
  { month: 'Jun', sales: 67, revenue: 3500000, views: 20000, leads: 580 },
];

const propertyTypeData = [
  { name: 'Residential', value: 45, color: '#22c55e' },
  { name: 'Commercial', value: 25, color: '#3b82f6' },
  { name: 'Land', value: 20, color: '#f59e0b' },
  { name: 'Industrial', value: 10, color: '#ef4444' },
];

const locationData = [
  { location: 'East Legon', properties: 45, avgPrice: 2500000, growth: 12 },
  { location: 'Airport City', properties: 32, avgPrice: 1800000, growth: 8 },
  { location: 'Cantonments', properties: 28, avgPrice: 3200000, growth: 15 },
  { location: 'Tema', properties: 38, avgPrice: 1200000, growth: 5 },
  { location: 'Spintex', properties: 25, avgPrice: 1500000, growth: 10 },
];

const kpiData = [
  { 
    title: 'Total Revenue', 
    value: '₵18.5M', 
    change: '+12.5%', 
    trend: 'up', 
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  { 
    title: 'Properties Sold', 
    value: '328', 
    change: '+8.2%', 
    trend: 'up', 
    icon: Building,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  { 
    title: 'Active Leads', 
    value: '2,840', 
    change: '+15.3%', 
    trend: 'up', 
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  { 
    title: 'Page Views', 
    value: '94.2K', 
    change: '-2.1%', 
    trend: 'down', 
    icon: Eye,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('6months');
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <Card key={kpi.title} className="stats-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`flex items-center space-x-1 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {kpi.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="text-sm font-medium">{kpi.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
                <p className="text-sm text-gray-600">{kpi.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Revenue & Sales Trend</CardTitle>
              <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="views">Views</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`₵${(value / 1000000).toFixed(1)}M`, 'Revenue']} />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#22c55e" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Property Types */}
        <Card>
          <CardHeader>
            <CardTitle>Property Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={propertyTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {propertyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Location Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Location Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {locationData.map((location, index) => (
              <div key={location.location} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{location.location}</h4>
                  <p className="text-sm text-gray-600">{location.properties} properties</p>
                </div>
                <div className="flex-1 mx-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Avg. Price</span>
                    <span>₵{(location.avgPrice / 1000000).toFixed(1)}M</span>
                  </div>
                  <Progress value={(location.avgPrice / 3500000) * 100} className="h-2" />
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={location.growth > 10 ? 'default' : 'secondary'} className="bg-green-100 text-green-800">
                    +{location.growth}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Website Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#f59e0b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}