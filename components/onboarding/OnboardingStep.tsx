import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { onboardingSteps } from './onboardingSteps';

interface OnboardingStepProps {
  currentStep: number;
  currentStepData: any;
  isAnimating: boolean;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingStep = ({ currentStep, currentStepData, isAnimating, onNext, onSkip }: OnboardingStepProps) => (
  <div className={`glass-effect p-10 md:p-14 rounded-2xl shadow-xl border border-emerald-200/40 ${isAnimating ? 'animate-slide-up' : ''}`}> 
    <div className="flex items-center justify-between mb-10">
      <div className="text-base text-gray-500 font-semibold tracking-wide">
        Step {currentStep + 1} <span className="opacity-60">/ {onboardingSteps.length}</span>
      </div>
      <Button
        variant="ghost"
        onClick={onSkip}
        className="text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full px-4 py-2 transition-all duration-200 shadow-none"
      >
        Skip
      </Button>
    </div>
    <div className="space-y-10">
      <div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-3 leading-tight bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(34,197,94,0.2)] animate-fade-in">
          {currentStepData.title}
        </h2>
        <h3 className="text-2xl text-primary font-semibold mb-6 relative inline-block animate-fade-in">
          <span>{currentStepData.subtitle}</span>
          <span className="block h-1 w-16 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full mt-2 animate-pulse-slow" />
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md animate-fade-in">
          {currentStepData.description}
        </p>
      </div>
      <div className="pt-8">
        <Button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 hover:from-green-300 hover:to-emerald-500 text-white py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_32px_4px_rgba(16,185,129,0.5)] focus:ring-4 focus:ring-emerald-300 drop-shadow-xl animate-fade-in"
        >
          {currentStep < onboardingSteps.length - 1 ? (
            <>
              Continue
              <ArrowRight className="w-6 h-6 ml-2" />
            </>
          ) : (
            'Get Started'
          )}
        </Button>
      </div>
      <div className="pt-4 text-center">
        <p className="text-base text-gray-500 font-medium tracking-wide animate-fade-in">
          <span className="text-primary font-bold">Trusted by 500+</span> real estate professionals
        </p>
      </div>
    </div>
  </div>
);

export default OnboardingStep; 