'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { DashboardContent as DashboardContentComponent } from './content';

export function DashboardContent() {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddProperty = () => {
    router.push('/dashboard/properties');
    toast({
      title: "Redirecting to Properties",
      description: "You can add a new property from the properties page.",
    });
  };

  const handleViewProperty = (id: number) => {
    router.push(`/dashboard/properties/${id}`);
    toast({
      title: "Viewing Property",
      description: `Opening property details for property #${id}`,
    });
  };

  const handleEditProperty = (id: number) => {
    router.push(`/dashboard/properties/${id}/edit`);
    toast({
      title: "Editing Property",
      description: `Opening edit form for property #${id}`,
    });
  };

  const handleInviteAgent = () => {
    router.push('/dashboard/agents');
    toast({
      title: "Agent Management",
      description: "Redirecting to agent management page.",
    });
  };
  
  return (
    <DashboardContentComponent
      onAddProperty={handleAddProperty}
      onViewProperty={handleViewProperty}
      onEditProperty={handleEditProperty}
      onInviteAgent={handleInviteAgent}
    />
  );
}


// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useToast } from '@/hooks/use-toast';
// import { 
//   Building, 
//   DollarSign, 
//   Users, 
//   TrendingUp, 
//   MapPin, 
//   Plus,
//   Eye,
//   Edit} from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// const statsData = [
//   { name: 'Total Properties', value: '1,234', change: '+12%', icon: Building, color: 'text-blue-600' },
//   { name: 'Total Revenue', value: '$2.4M', change: '+8%', icon: DollarSign, color: 'text-green-600' },
//   { name: 'Active Agents', value: '87', change: '+3%', icon: Users, color: 'text-purple-600' },
//   { name: 'Avg. Property Value', value: '$485K', change: '+15%', icon: TrendingUp, color: 'text-orange-600' },
// ];

// const propertyData = [
//   { month: 'Jan', sold: 45, rented: 32, featured: 12 },
//   { month: 'Feb', sold: 52, rented: 41, featured: 15 },
//   { month: 'Mar', sold: 48, rented: 38, featured: 18 },
//   { month: 'Apr', sold: 61, rented: 45, featured: 22 },
//   { month: 'May', sold: 55, rented: 42, featured: 20 },
//   { month: 'Jun', sold: 67, rented: 48, featured: 25 },
// ];

// const statusData = [
//   { name: 'For Sale', value: 45, color: '#22c55e' },
//   { name: 'For Rent', value: 32, color: '#3b82f6' },
//   { name: 'Sold', value: 18, color: '#ef4444' },
//   { name: 'Featured', value: 25, color: '#f59e0b' },
// ];

// const recentProperties = [
//   {
//     id: 1,
//     title: 'Modern Villa in Accra',
//     location: 'East Legon, Accra',
//     price: '₵2,500,000',
//     status: 'For Sale',
//     bedrooms: 4,
//     bathrooms: 3,
//     size: '3,200 sqft',
//     image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=300'
//   },
//   {
//     id: 2,
//     title: 'Luxury Apartment',
//     location: 'Airport City, Accra',
//     price: '₵1,800,000',
//     status: 'Featured',
//     bedrooms: 3,
//     bathrooms: 2,
//     size: '2,100 sqft',
//     image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=300'
//   },
//   {
//     id: 3,
//     title: 'Family Home',
//     location: 'Tema, Greater Accra',
//     price: '₵3,500/month',
//     status: 'For Rent',
//     bedrooms: 5,
//     bathrooms: 4,
//     size: '4,000 sqft',
//     image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300'
//   }
// ];

// export function DashboardContent() {
//   const [activeTab, setActiveTab] = useState('overview');
//   const router = useRouter();
//    const { toast } = useToast();

//    const handleAddProperty = () => {
//      router.push('/dashboard/properties');
//      toast({
//        title: "Redirecting to Properties",
//        description: "You can add a new property from the properties page.",
//      });
//    };
  
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//           <p className="text-gray-600">Welcome back! Here's what's happening with your properties.</p>
//         </div>
//         <Button onClick={handleAddProperty} className="bg-primary hover:bg-primary/90">
//           <Plus className="w-4 h-4 mr-2" />
//           Add Property
//         </Button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {statsData.map((stat) => (
//           <Card key={stat.name} className="stats-card">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium text-gray-600">
//                 {stat.name}
//               </CardTitle>
//               <stat.icon className={`h-4 w-4 ${stat.color}`} />
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <p className="text-xs text-green-600 font-medium">
//                 {stat.change} from last month
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Main Content Tabs */}
//       <Tabs value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid w-full grid-cols-3 lg:w-auto">
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="analytics">Analytics</TabsTrigger>
//           <TabsTrigger value="agents">Agents</TabsTrigger>
//         </TabsList>

//         <TabsContent value="overview" className="space-y-6">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Property Performance Chart */}
//             <Card className="lg:col-span-2">
//               <CardHeader>
//                 <CardTitle>Property Performance</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={propertyData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="sold" fill="#22c55e" />
//                     <Bar dataKey="rented" fill="#3b82f6" />
//                     <Bar dataKey="featured" fill="#f59e0b" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             {/* Property Status Distribution */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Property Status</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <PieChart>
//                     <Pie
//                       data={statusData}
//                       cx="50%"
//                       cy="50%"
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {statusData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={entry.color} />
//                       ))}
//                     </Pie>
//                     <Tooltip />
//                   </PieChart>
//                 </ResponsiveContainer>
//                 <div className="mt-4 space-y-2">
//                   {statusData.map((item) => (
//                     <div key={item.name} className="flex items-center justify-between text-sm">
//                       <div className="flex items-center">
//                         <div 
//                           className="w-3 h-3 rounded-full mr-2" 
//                           style={{ backgroundColor: item.color }}
//                         />
//                         {item.name}
//                       </div>
//                       <span className="font-medium">{item.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Recent Properties */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Recent Properties</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {recentProperties.map((property) => (
//                   <div key={property.id} className="property-card border rounded-lg p-4">
//                     <div className="aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
//                       <img 
//                         src={property.image} 
//                         alt={property.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex justify-between items-start">
//                         <h3 className="font-semibold text-sm">{property.title}</h3>
//                         <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
//                           {property.status}
//                         </Badge>
//                       </div>
//                       <p className="text-xs text-gray-600 flex items-center">
//                         <MapPin className="w-3 h-3 mr-1" />
//                         {property.location}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <span className="font-bold text-green-600">{property.price}</span>
//                         <span className="text-xs text-gray-500">
//                           {property.bedrooms}bed • {property.bathrooms}bath • {property.size}
//                         </span>
//                       </div>
//                       <div className="flex space-x-2 pt-2">
//                         <Button size="sm" variant="outline" className="flex-1">
//                           <Eye className="w-3 h-3 mr-1" />
//                           View
//                         </Button>
//                         <Button size="sm" variant="outline" className="flex-1">
//                           <Edit className="w-3 h-3 mr-1" />
//                           Edit
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="analytics" className="space-y-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Revenue Trend</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={propertyData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="sold" stroke="#22c55e" strokeWidth={2} />
//                     <Line type="monotone" dataKey="rented" stroke="#3b82f6" strokeWidth={2} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Project Completion</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span>East Legon Phase 1</span>
//                     <span>85%</span>
//                   </div>
//                   <Progress value={85} className="h-2" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span>Airport City Complex</span>
//                     <span>62%</span>
//                   </div>
//                   <Progress value={62} className="h-2" />
//                 </div>
//                 <div>
//                   <div className="flex justify-between text-sm mb-1">
//                     <span>Tema Community 15</span>
//                     <span>94%</span>
//                   </div>
//                   <Progress value={94} className="h-2" />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
        
//         <TabsContent value="agents" className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Agent Directory</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-center py-8">
//                 <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-semibold mb-2">Agent Management</h3>
//                 <p className="text-gray-600 mb-4">View and manage registered agents</p>
//                 <Button className="bg-green-600 hover:bg-green-700">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Invite New Agent
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }