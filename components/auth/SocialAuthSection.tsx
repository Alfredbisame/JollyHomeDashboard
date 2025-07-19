import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import { Shield, Crown, Building2, X } from 'lucide-react';
import React, { useState } from 'react';

interface SocialAuthSectionProps {
  isLoading: boolean;
  onGoogleSignIn: (role?: string) => void;
  dividerText?: string;
  buttonText?: string;
}

export const SocialAuthSection: React.FC<SocialAuthSectionProps> = ({ 
  isLoading, 
  onGoogleSignIn, 
  dividerText = "Or continue with",
  buttonText = "Continue with Google"
}) => {
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleGoogleSignInClick = () => {
    setShowRoleSelection(true);
  };

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    setShowRoleSelection(false);
    onGoogleSignIn(role);
  };

  const roles = [
    {
      id: 'super-admin',
      title: 'Super Admin',
      description: 'Full system access with complete control',
      icon: Crown,
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      features: ['Complete system control', 'User management', 'System settings', 'Analytics access']
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Standard administrative access',
      icon: Shield,
      color: 'from-blue-500 to-green-500',
      hoverColor: 'from-blue-600 to-green-600',
      features: ['Property management', 'Agent oversight', 'Reports access', 'Standard admin tools']
    }
  ];

  return (
    <>
      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-white/30" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white/20 backdrop-blur-xl px-6 py-2 text-sm font-medium text-white/90 rounded-full border border-white/30 shadow-lg">
            {dividerText}
          </span>
        </div>
      </div>

      {/* Google Sign In Button */}
      <Button
        variant="outline"
        className="w-full h-14 py-4 rounded-2xl border-2 border-white/30 bg-white/20 backdrop-blur-xl hover:bg-white/30 hover:border-white/50 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        onClick={handleGoogleSignInClick}
        disabled={isLoading}
      >
        <FcGoogle className="w-6 h-6" />
        <span>{buttonText}</span>
      </Button>

      {/* Role Selection Dialog */}
      <Dialog open={showRoleSelection} onOpenChange={setShowRoleSelection}>
        <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border-2 border-white/30 rounded-3xl shadow-2xl p-0 overflow-hidden">
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-green-400/20 rounded-3xl" />
            
            {/* Close Button */}
            <button
              onClick={() => setShowRoleSelection(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-gray-200 hover:border-green-300 transition-all duration-300 transform hover:scale-110"
            >
              <X className="h-5 w-5 text-gray-600 hover:text-green-600 transition-colors duration-300" />
            </button>
            
            {/* Header */}
            <DialogHeader className="relative z-10 p-8 pb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-2">
                Choose Your Role
              </DialogTitle>
              <p className="text-gray-600 text-center text-sm">
                Select the role that best describes your responsibilities in the Jolly Home Dashboard
              </p>
            </DialogHeader>

            {/* Role Options */}
            <div className="relative z-10 px-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {roles.map((role) => {
                  const IconComponent = role.icon;
                  return (
                    <div
                      key={role.id}
                      className={`group relative p-6 rounded-2xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl bg-white/80 backdrop-blur-sm hover:bg-white/90`}
                      onClick={() => handleRoleSelection(role.id)}
                    >
                      {/* Hover Effect Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                      
                      {/* Role Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${role.color} shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      {/* Role Title */}
                      <h3 className="relative z-10 text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {role.title}
                      </h3>

                      {/* Role Description */}
                      <p className="relative z-10 text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {role.description}
                      </p>

                      {/* Features List */}
                      <ul className="relative z-10 space-y-2">
                        {role.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.color} mr-2`} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Selection Indicator */}
                      <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-transparent transition-all duration-300 ${
                        selectedRole === role.id ? 'bg-gradient-to-r ' + role.color + ' border-transparent' : ''
                      }`}>
                        {selectedRole === role.id && (
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${role.color}`} />
                          </div>
                        )}
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cancel Button */}
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowRoleSelection(false)}
                  className="px-8 py-3 rounded-2xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:border-green-300 text-gray-600 hover:text-green-600 font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}; 