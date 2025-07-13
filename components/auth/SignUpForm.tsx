import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Lock, User, Eye, EyeOff, Shield, CheckCircle } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import React, { useState } from 'react';

interface SignUpFormProps {
  isLoading: boolean;
  userType: string;
  setUserType: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onGoogleSignIn: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ 
  isLoading, 
  userType, 
  setUserType, 
  onSubmit, 
  onGoogleSignIn 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={onSubmit} className="space-y-6 animate-fade-in">
        {/* Full Name Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="fullName" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Full Name
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'fullName' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'fullName' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="pl-12 pr-4 py-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-gray-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-400 focus:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
              onFocus={() => setFocusedField('fullName')}
              onBlur={() => setFocusedField(null)}
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="signupEmail" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Email Address
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'signupEmail' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'signupEmail' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Input
              id="signupEmail"
              type="email"
              placeholder="admin@jollyhomes.com"
              className="pl-12 pr-4 py-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-gray-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-400 focus:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
              onFocus={() => setFocusedField('signupEmail')}
              onBlur={() => setFocusedField(null)}
              required
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* User Type Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="userType" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Account Type
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'userType' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <Shield className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'userType' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger 
                className="pl-12 pr-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white focus:ring-4 focus:ring-green-400/30 focus:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
                onFocus={() => setFocusedField('userType')}
                onBlur={() => setFocusedField(null)}
              >
                <SelectValue placeholder="Choose your account type" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
                <SelectItem 
                  value="super-admin" 
                  className="rounded-xl hover:bg-green-400/20 focus:bg-green-400/20 transition-colors text-gray-800 font-medium py-3"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-green-600" />
                    <div>
                      <div className="font-semibold">Super Admin</div>
                      <div className="text-xs text-gray-600">Full system access</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem 
                  value="admin" 
                  className="rounded-xl hover:bg-blue-400/20 focus:bg-blue-400/20 transition-colors text-gray-800 font-medium py-3"
                >
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-blue-600" />
                    <div>
                      <div className="font-semibold">Admin</div>
                      <div className="text-xs text-gray-600">Standard admin access</div>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-3">
          <Label 
            htmlFor="signupPassword" 
            className="text-sm font-medium text-white drop-shadow-sm"
          >
            Password
          </Label>
          <div 
            className={`relative group transition-all duration-300 ${
              focusedField === 'signupPassword' ? 'transform scale-[1.02]' : ''
            }`}
          >
            <Lock className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10 ${
              focusedField === 'signupPassword' ? 'text-green-400' : 'text-blue-300'
            }`} />
            <Input
              id="signupPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className="pl-12 pr-14 py-4 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-gray-300 focus:ring-4 focus:ring-green-400/30 focus:border-green-400 focus:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-base"
              onFocus={() => setFocusedField('signupPassword')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => checkPasswordStrength(e.target.value)}
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
          
          {/* Password Strength Indicator */}
          {passwordStrength > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                    style={{ width: `${(passwordStrength / 4) * 100}%` }}
                  />
                </div>
                <span className={`text-xs font-medium ${
                  passwordStrength >= 3 ? 'text-green-400' : 'text-yellow-400'
                }`}>
                  {getPasswordStrengthText()}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Create Account Button */}
        <Button
          type="submit"
          className="w-full h-14 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              <span className="animate-pulse">Creating your account...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Create Account
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
            Or sign up with
          </span>
        </div>
      </div>

      {/* Google Sign Up Button */}
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
          Create your secure Jolly Home Dashboard account
        </p>
      </div>
    </div>
  );
};
