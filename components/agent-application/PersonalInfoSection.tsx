import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, User } from 'lucide-react';
import React from 'react';

interface PersonalInfoSectionProps {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  onChange: (field: string, value: string) => void;
  disabled?: boolean;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ values, onChange, disabled }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
      <User className="w-5 h-5 mr-2 text-green-600" />
      Personal Information
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="firstName">First Name *</Label>
        <Input
          id="firstName"
          value={values.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          placeholder="Enter your first name"
          required
          disabled={disabled}
        />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name *</Label>
        <Input
          id="lastName"
          value={values.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          placeholder="Enter your last name"
          required
          disabled={disabled}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="your.email@example.com"
            className="pl-10"
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="phone"
            value={values.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+233 XX XXX XXXX"
            className="pl-10"
            required
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  </div>
);

export default PersonalInfoSection; 