'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import OnboardingVisual from './OnboardingVisual';
import OnboardingContent from './OnboardingContent';
import { onboardingSteps } from './onboardingSteps';

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      router.push('/auth');
    }
  };

  const handleSkip = () => {
    router.replace('/auth');
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 dark:from-[#0f172a] dark:via-[#052e16] dark:to-[#0f766e]">
      {/* Animated Gradient/Blob Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-300 via-emerald-200 to-teal-300 rounded-full mix-blend-lighten filter blur-2xl opacity-60 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-300 via-green-200 to-teal-200 rounded-full mix-blend-lighten filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-br from-teal-300 via-green-200 to-emerald-200 rounded-full mix-blend-lighten filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
      </div>
      <Card className="w-full max-w-7xl mx-auto glass-effect shadow-2xl border-0 overflow-hidden backdrop-blur-lg">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 min-h-[600px]">
            <OnboardingVisual currentStepData={currentStepData} isAnimating={isAnimating} currentStep={currentStep} />
            <OnboardingContent
              currentStep={currentStep}
              currentStepData={currentStepData}
              isAnimating={isAnimating}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}