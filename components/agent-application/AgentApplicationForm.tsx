import React, { useState } from 'react';
import PersonalInfoSection from './PersonalInfoSection';
import ProfessionalInfoSection from './ProfessionalInfoSection';
import MotivationSection from './MotivationSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface AgentApplicationFormProps {
  onSuccess: () => void;
}

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  experience: '',
  licenseNumber: '',
  preferredLocation: '',
  specialization: '',
  motivation: ''
};

const AgentApplicationForm: React.FC<AgentApplicationFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Application Submitted!',
        description: "Your agent application has been submitted successfully. We'll review it and get back to you soon.",
      });
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-green-100 rounded-full">
            {/* Home icon is used in the page, not here */}
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Join JollyHomes</h1>
        <p className="text-gray-600">Apply to become a real estate agent with Ghana's premier property company</p>
      </div>
      <Card className="shadow-2xl border-0">
        <CardHeader>
          <CardTitle>Agent Application Form</CardTitle>
          <CardDescription>
            Please fill out all required information to apply as a real estate agent
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <PersonalInfoSection
              values={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
              }}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
            <ProfessionalInfoSection
              values={{
                experience: formData.experience,
                licenseNumber: formData.licenseNumber,
                preferredLocation: formData.preferredLocation,
                specialization: formData.specialization,
              }}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
            <MotivationSection
              value={formData.motivation}
              onChange={(value) => handleInputChange('motivation', value)}
              disabled={isSubmitting}
            />
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </Button>
              <p className="text-sm text-gray-500 text-center mt-3">
                By submitting this form, you agree to our terms and conditions
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentApplicationForm; 