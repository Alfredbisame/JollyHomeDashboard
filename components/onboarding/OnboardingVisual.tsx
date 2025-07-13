import { Sparkles } from 'lucide-react';
import OnboardingProgress from './OnboardingProgress';

interface OnboardingVisualProps {
  currentStepData: any;
  isAnimating: boolean;
  currentStep: number;
}

const OnboardingVisual = ({ currentStepData, isAnimating, currentStep }: OnboardingVisualProps) => {
  const IconComponent = currentStepData.icon;
  return (
    <div className="relative flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-700/80 via-emerald-700/90 to-teal-900/80 p-10 md:p-14 text-white overflow-hidden">
      {/* Animated Gradient Ring Behind Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-green-400 via-emerald-400 to-teal-400 opacity-30 blur-2xl animate-pulse-slow" />
        <div className="w-72 h-72 rounded-full border-4 border-emerald-300/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
      </div>
      {/* Glassmorphic Floating Card for Icon */}
      <div className="relative z-20 flex flex-col items-center mb-10">
        <div className="rounded-3xl glass-effect shadow-2xl border border-emerald-200/40 p-6 mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
          <IconComponent className={`w-28 h-28 mx-auto ${currentStepData.color} drop-shadow-[0_0_32px_rgba(34,197,94,0.7)]`} />
        </div>
        {/* Animated Sparkles */}
        <div className="absolute -top-4 -right-4">
          <Sparkles className="w-8 h-8 text-green-200 animate-pulse drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
        </div>
        <div className="absolute -bottom-4 -left-4">
          <Sparkles className="w-6 h-6 text-green-300 animate-pulse animation-delay-1000 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
        </div>
      </div>
      <div className={`relative z-20 text-center flex flex-col items-center ${isAnimating ? 'animate-bounce-in' : ''}`}>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-green-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_32px_rgba(34,197,94,0.7)] animate-fade-in">
          JollyHomes
        </h1>
        <p className="text-2xl text-green-100 max-w-sm mx-auto leading-relaxed mb-8 drop-shadow-[0_1px_8px_rgba(16,185,129,0.2)] animate-fade-in">
          Revolutionizing Real Estate Management
        </p>
        <OnboardingProgress currentStep={currentStep} />
      </div>
    </div>
  );
};

export default OnboardingVisual;
