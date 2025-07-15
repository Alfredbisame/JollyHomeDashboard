'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PropertyPerformanceChartProps } from '../types';

export function PropertyPerformanceChart({ data }: PropertyPerformanceChartProps) {
  const [ChartComponents, setChartComponents] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    import('recharts').then((recharts) => {
      setChartComponents(recharts);
    });
  }, []);

  console.log('PropertyPerformanceChart data:', data);
  console.log('PropertyPerformanceChart data length:', data?.length);
  
  if (!data || data.length === 0) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Property Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-500">
            No data available
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isClient || !ChartComponents) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Property Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-500">
            Loading chart...
          </div>
        </CardContent>
      </Card>
    );
  }

  const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } = ChartComponents;

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Property Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-sm text-gray-600">
          Chart rendering with {data.length} data points
        </div>
        <div style={{ width: '100%', height: '300px', border: '1px solid #e5e7eb' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sold" fill="#22c55e" />
              <Bar dataKey="rented" fill="#3b82f6" />
              <Bar dataKey="featured" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
} 