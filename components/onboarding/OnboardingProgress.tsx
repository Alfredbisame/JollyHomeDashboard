import { onboardingSteps } from './onboardingSteps';

interface OnboardingProgressProps {
  currentStep: number;
}

const OnboardingProgress = ({ currentStep }: OnboardingProgressProps) => (
  <div className="mt-8 flex justify-center space-x-4">
    {onboardingSteps.map((_, index) => (
      <div
        key={index}
        className={`w-4 h-4 rounded-full transition-all duration-500 shadow-lg border-2 border-white/30 ${
          index === currentStep
            ? 'bg-white scale-150 shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]'
            : index < currentStep
            ? 'bg-green-200'
            : 'bg-green-400 opacity-50'
        }`}
      />
    ))}
  </div>
);

export default OnboardingProgress; 