'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Award, 
  Users, 
  Building, 
  DollarSign,
  Calendar,
  BarChart3,
  Activity,
  Zap
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
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const performanceData = [
  { month: 'Jan', sales: 45, target: 50, revenue: 2400000, leads: 340 },
  { month: 'Feb', sales: 52, target: 50, revenue: 2800000, leads: 420 },
  { month: 'Mar', sales: 48, target: 55, revenue: 2600000, leads: 380 },
  { month: 'Apr', sales: 61, target: 55, revenue: 3200000, leads: 520 },
  { month: 'May', sales: 55, target: 60, revenue: 2900000, leads: 460 },
  { month: 'Jun', sales: 67, target: 60, revenue: 3500000, leads: 580 },
];

const kpiData = [
  { name: 'Sales Target', value: 85, color: '#22c55e' },
  { name: 'Revenue Goal', value: 92, color: '#3b82f6' },
  { name: 'Lead Conversion', value: 78, color: '#f59e0b' },
  { name: 'Customer Satisfaction', value: 96, color: '#8b5cf6' },
];

const agentPerformance = [
  { name: 'Sarah Johnson', sales: 23, target: 20, performance: 115, trend: 'up' },
  { name: 'Michael Asante', sales: 18, target: 20, performance: 90, trend: 'down' },
  { name: 'Grace Mensah', sales: 31, target: 25, performance: 124, trend: 'up' },
  { name: 'David Osei', sales: 15, target: 18, performance: 83, trend: 'down' },
];

const goalData = [
  { 
    title: 'Monthly Sales Target', 
    current: 67, 
    target: 75, 
    percentage: 89,
    status: 'On Track',
    icon: Target,
    color: 'text-green-600'
  },
  { 
    title: 'Revenue Goal', 
    current: 3500000, 
    target: 4000000, 
    percentage: 88,
    status: 'Behind',
    icon: DollarSign,
    color: 'text-orange-600'
  },
  { 
    title: 'New Leads', 
    current: 580, 
    target: 600, 
    percentage: 97,
    status: 'Excellent',
    icon: Users,
    color: 'text-blue-600'
  },
  { 
    title: 'Properties Listed', 
    current: 45, 
    target: 50, 
    percentage: 90,
    status: 'Good',
    icon: Building,
    color: 'text-purple-600'
  },
];

export default function PerformancePage() {
  const [timeRange, setTimeRange] = useState('6months');
  const [activeTab, setActiveTab] = useState('overview');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'On Track': return 'bg-green-100 text-green-800';
      case 'Behind': return 'bg-orange-100 text-orange-800';
      case 'Critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
          <p className="text-gray-600">Track goals, KPIs, and team performance metrics</p>
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
          <Button className="bg-green-600 hover:bg-green-700">
            <Activity className="w-4 h-4 mr-2" />
            View Report
          </Button>
        </div>
      </div>

      {/* Goal Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goalData.map((goal, index) => (
          <Card key={goal.title} className="stats-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <goal.icon className={`w-8 h-8 ${goal.color}`} />
                <Badge className={getStatusColor(goal.status)}>
                  {goal.status}
                </Badge>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{goal.percentage}%</span>
                  </div>
                  <Progress value={goal.percentage} className="h-2" />
                </div>
                <div className="text-sm text-gray-600">
                  {goal.title === 'Revenue Goal' 
                    ? `₵${(goal.current / 1000000).toFixed(1)}M of ₵${(goal.target / 1000000).toFixed(1)}M`
                    : `${goal.current} of ${goal.target}`
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team Performance</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance vs Target */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Performance vs Target</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="target" fill="#e5e7eb" name="Target" />
                    <Bar dataKey="sales" fill="#22c55e" name="Actual Sales" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* KPI Radial Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={kpiData}>
                    <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                    <Tooltip />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {kpiData.map((kpi) => (
                    <div key={kpi.name} className="flex items-center text-sm">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: kpi.color }}
                      />
                      <span>{kpi.name}: {kpi.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`₵${(value / 1000000).toFixed(1)}M`, 'Revenue']} />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentPerformance.map((agent, index) => {
                  const TrendIcon = getTrendIcon(agent.trend);
                  return (
                    <div key={agent.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold">{agent.name}</h4>
                          <p className="text-sm text-gray-600">
                            {agent.sales} sales of {agent.target} target
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-bold text-lg">{agent.performance}%</p>
                          <p className="text-xs text-gray-500">Performance</p>
                        </div>
                        <TrendIcon className={`w-5 h-5 ${getTrendColor(agent.trend)}`} />
                        <div className="w-24">
                          <Progress value={agent.performance} className="h-2" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="kpis" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  Conversion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">24.5%</div>
                  <p className="text-sm text-gray-600">Lead to Sale Conversion</p>
                  <div className="mt-4">
                    <Progress value={24.5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600" />
                  Customer Satisfaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                  <div className="mt-4">
                    <Progress value={96} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-600" />
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2.3h</div>
                  <p className="text-sm text-gray-600">Average Response</p>
                  <div className="mt-4">
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed KPI Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly KPI Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#8b5cf6" name="Leads Generated" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}