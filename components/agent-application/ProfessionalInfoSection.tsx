import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Award, Clock, FileText, MapPin } from 'lucide-react';
import React from 'react';

interface ProfessionalInfoSectionProps {
  values: {
    experience: string;
    licenseNumber: string;
    preferredLocation: string;
    specialization: string;
  };
  onChange: (field: string, value: string) => void;
  disabled?: boolean;
}

const ProfessionalInfoSection: React.FC<ProfessionalInfoSectionProps> = ({ values, onChange, disabled }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
      <Award className="w-5 h-5 mr-2 text-green-600" />
      Professional Information
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="experience">Years of Experience *</Label>
        <div className="relative">
          <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Select value={values.experience} onValueChange={(value) => onChange('experience', value)} disabled={disabled}>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-1">0-1 years</SelectItem>
              <SelectItem value="2-3">2-3 years</SelectItem>
              <SelectItem value="4-5">4-5 years</SelectItem>
              <SelectItem value="6-10">6-10 years</SelectItem>
              <SelectItem value="10+">10+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="licenseNumber">License Number</Label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            id="licenseNumber"
            value={values.licenseNumber}
            onChange={(e) => onChange('licenseNumber', e.target.value)}
            placeholder="Enter license number (if applicable)"
            className="pl-10"
            disabled={disabled}
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="preferredLocation">Preferred Location *</Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Select value={values.preferredLocation} onValueChange={(value) => onChange('preferredLocation', value)} disabled={disabled}>
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Select preferred location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="east-legon">East Legon</SelectItem>
              <SelectItem value="airport-city">Airport City</SelectItem>
              <SelectItem value="cantonments">Cantonments</SelectItem>
              <SelectItem value="tema">Tema</SelectItem>
              <SelectItem value="spintex">Spintex</SelectItem>
              <SelectItem value="kumasi">Kumasi</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="specialization">Specialization *</Label>
        <Select value={values.specialization} onValueChange={(value) => onChange('specialization', value)} disabled={disabled}>
          <SelectTrigger>
            <SelectValue placeholder="Select specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential Properties</SelectItem>
            <SelectItem value="commercial">Commercial Properties</SelectItem>
            <SelectItem value="luxury">Luxury Homes</SelectItem>
            <SelectItem value="land">Land Sales</SelectItem>
            <SelectItem value="rental">Rental Properties</SelectItem>
            <SelectItem value="investment">Investment Properties</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);

export default ProfessionalInfoSection; 