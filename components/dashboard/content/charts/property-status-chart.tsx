'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PropertyStatusChartProps } from '../types';

export function PropertyStatusChart({ data }: PropertyStatusChartProps) {
  const [ChartComponents, setChartComponents] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    import('recharts').then((recharts) => {
      setChartComponents(recharts);
    });
  }, []);

  if (!isClient || !ChartComponents) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Property Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-500">
            Loading chart...
          </div>
        </CardContent>
      </Card>
    );
  }

  const { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } = ChartComponents;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </div>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 