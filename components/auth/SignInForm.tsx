import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';

interface SignInFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleSignIn: () => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({ isLoading, onSubmit, onGoogleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-6 animate-fade-in">
        {/* Email Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="email" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Email Address
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'email' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'email' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Input
              id="email"
              type="email"
              placeholder="admin@jollyhomes.com"
              className="pl-12 pr-4 py-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-gray-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-400 focus:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="password" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Password
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'password' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'password' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="pl-12 pr-14 py-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-gray-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-400 focus:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-green-400 transition-colors duration-300 z-10 p-1"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Sign In Button */}
        <Button
          type="submit"
          className="w-full h-14 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              <span className="animate-pulse">Signing you in...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Lock className="h-5 w-5" />
              Sign In to Dashboard
            </span>
          )}
        </Button>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-white/30" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white/20 backdrop-blur-xl px-6 py-2 text-sm font-medium text-white/90 rounded-full border border-white/30 shadow-lg">
            Or continue with
          </span>
        </div>
      </div>

      {/* Google Sign In Button */}
      <Button
        variant="outline"
        className="w-full h-14 py-4 rounded-2xl border-2 border-white/30 bg-white/20 backdrop-blur-xl hover:bg-white/30 hover:border-white/50 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        onClick={onGoogleSignIn}
        disabled={isLoading}
      >
        <FcGoogle className="w-6 h-6" />
        <span>Continue with Google</span>
      </Button>

      {/* Additional Help Text */}
      <div className="mt-6 text-center">
        <p className="text-sm text-white/70">
          Secure access to your Jolly Home Dashboard
        </p>
      </div>
    </div>
  );
};
