import OnboardingStep from './OnboardingStep';

interface OnboardingContentProps {
  currentStep: number;
  currentStepData: any;
  isAnimating: boolean;
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingContent = ({ currentStep, currentStepData, isAnimating, onNext, onSkip }: OnboardingContentProps) => (
  <div className="flex flex-col justify-center min-h-[600px] p-6 md:p-12 bg-gradient-to-br from-white/80 to-gray-50/90 dark:from-gray-900/80 dark:to-gray-800/90">
    <OnboardingStep
      currentStep={currentStep}
      currentStepData={currentStepData}
      isAnimating={isAnimating}
      onNext={onNext}
      onSkip={onSkip}
    />
  </div>
);

export default OnboardingContent;
