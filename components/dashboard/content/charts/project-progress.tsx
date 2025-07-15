'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ProjectProgressProps } from '../types';

export function ProjectProgress({ projects }: ProjectProgressProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Completion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{project.name}</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 