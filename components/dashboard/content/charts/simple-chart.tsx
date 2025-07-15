'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const testData = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 15 },
];

export function SimpleChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple Chart Test</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '400px', height: '200px' }}>
          <BarChart width={400} height={200} data={testData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </CardContent>
    </Card>
  );
} 