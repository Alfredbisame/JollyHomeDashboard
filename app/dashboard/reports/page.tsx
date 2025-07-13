'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar, 
  TrendingUp, 
  Building, 
  DollarSign,
  Users,
  BarChart3,
  PieChart,
  LineChart,
  Filter
} from 'lucide-react';

const mockReports = [
  {
    id: 1,
    title: 'Monthly Sales Report',
    description: 'Comprehensive sales analysis for January 2024',
    type: 'Sales',
    period: 'January 2024',
    generatedDate: '2024-02-01',
    status: 'Ready',
    size: '2.4 MB',
    format: 'PDF'
  },
  {
    id: 2,
    title: 'Property Inventory Report',
    description: 'Current property listings and availability status',
    type: 'Inventory',
    period: 'Q1 2024',
    generatedDate: '2024-01-31',
    status: 'Ready',
    size: '1.8 MB',
    format: 'Excel'
  },
  {
    id: 3,
    title: 'Agent Performance Report',
    description: 'Individual agent sales and performance metrics',
    type: 'Performance',
    period: 'January 2024',
    generatedDate: '2024-02-01',
    status: 'Generating',
    size: '0 MB',
    format: 'PDF'
  },
  {
    id: 4,
    title: 'Market Analysis Report',
    description: 'Regional market trends and price analysis',
    type: 'Market',
    period: 'Q4 2023',
    generatedDate: '2024-01-15',
    status: 'Ready',
    size: '3.2 MB',
    format: 'PDF'
  },
  {
    id: 5,
    title: 'Financial Summary',
    description: 'Revenue, expenses, and profit analysis',
    type: 'Financial',
    period: 'January 2024',
    generatedDate: '2024-02-01',
    status: 'Ready',
    size: '1.5 MB',
    format: 'Excel'
  }
];

const reportTemplates = [
  {
    id: 1,
    name: 'Sales Performance',
    description: 'Track sales metrics, revenue, and conversion rates',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 2,
    name: 'Property Analytics',
    description: 'Analyze property listings, views, and engagement',
    icon: Building,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    name: 'Financial Report',
    description: 'Revenue, expenses, and profitability analysis',
    icon: DollarSign,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 4,
    name: 'Agent Report',
    description: 'Individual agent performance and productivity',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
];

export default function ReportsPage() {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('all');
  const { toast } = useToast();

  const filteredReports = mockReports.filter(report => {
    if (reportType === 'all') return true;
    return report.type.toLowerCase() === reportType.toLowerCase();
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800';
      case 'Generating': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Sales': return 'bg-green-100 text-green-800';
      case 'Inventory': return 'bg-blue-100 text-blue-800';
      case 'Performance': return 'bg-purple-100 text-purple-800';
      case 'Market': return 'bg-orange-100 text-orange-800';
      case 'Financial': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: "Your report is being generated and will be available shortly.",
    });
  };

  const handleDownloadReport = () => {
    toast({
      title: "Download Started",
      description: "Your report download has started.",
    });
  };

  const handleViewReport = () => {
    toast({
      title: "Opening Report",
      description: "Report is being opened in a new window.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Generate and download comprehensive business reports</p>
        </div>
        <div className="flex space-x-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleGenerateReport} className="bg-primary hover:bg-primary/90">
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Reports</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <Calendar className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Downloads</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <Download className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Storage Used</p>
                <p className="text-2xl font-bold text-gray-900">24.8 MB</p>
              </div>
              <BarChart3 className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Report Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportTemplates.map((template, index) => (
              <div 
                key={template.id} 
                className={`p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-green-300 cursor-pointer transition-all duration-300 animate-slide-up ${template.bgColor}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`p-3 rounded-full ${template.bgColor} mx-auto mb-3 w-fit`}>
                    <template.icon className={`w-6 h-6 ${template.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <Button size="sm" variant="outline" className="w-full">
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <Select value={reportType} onValueChange={setReportType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="market">Market</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredReports.length} of {mockReports.length} reports
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report, index) => (
          <Card key={report.id} className="property-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <FileText className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold">{report.title}</h3>
                      <Badge className={getTypeColor(report.type)}>
                        {report.type}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{report.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {report.period}
                      </span>
                      <span>Generated: {report.generatedDate}</span>
                      <span>{report.format} • {report.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {report.status === 'Ready' && (
                    <Button size="sm" onClick={handleDownloadReport} className="bg-primary hover:bg-primary/90">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  )}
                  <Button size="sm" variant="outline" onClick={handleViewReport}>
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Visualization Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Sales Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Chart preview available in full report</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Property Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <PieChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Chart preview available in full report</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="w-5 h-5 mr-2" />
              Revenue Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <LineChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Chart preview available in full report</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}