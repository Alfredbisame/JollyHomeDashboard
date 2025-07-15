import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import React from 'react';

interface SuccessMessageProps {
  onReturnHome: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReturnHome }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
    <Card className="w-full max-w-md mx-auto shadow-2xl border-0 animate-fade-in">
      <CardContent className="p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h1>
          <p className="text-gray-600">
            Thank you for your interest in joining JollyHomes. We'll review your application and contact you within 2-3 business days.
          </p>
        </div>
        <Button 
          onClick={onReturnHome} 
          className="w-full bg-green-600 hover:bg-green-700"
        >
          Return to Home
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default SuccessMessage; 