import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

interface MotivationSectionProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const MotivationSection: React.FC<MotivationSectionProps> = ({ value, onChange, disabled }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900">Why JollyHomes?</h3>
    <div>
      <Label htmlFor="motivation">Why would you like to join JollyHomes? *</Label>
      <Textarea
        id="motivation"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tell us why you want to join our team and what you can bring to JollyHomes..."
        rows={4}
        required
        disabled={disabled}
      />
    </div>
  </div>
);

export default MotivationSection; 