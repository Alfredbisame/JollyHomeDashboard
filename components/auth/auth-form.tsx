'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Shield, LogIn, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    // Simulate Google sign-in
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] animate-fade-in">
      <Card className="w-full max-w-lg mx-auto border-0 shadow-2xl backdrop-blur-xl bg-white/15 border-white/30 rounded-3xl transition-all duration-700 animate-slide-in-up overflow-hidden">
        {/* Header Section */}
        <CardHeader className="space-y-6 pb-8 pt-8 px-8">
          <div className="flex items-center justify-center mb-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-blue-400/40 rounded-full blur-xl animate-pulse"></div>
              <div className="relative p-4 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
                <Home className="w-12 h-12 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>
          <div className="text-center space-y-3">
            <CardTitle className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Welcome to
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                JollyHomes
              </span>
            </CardTitle>
            <CardDescription className="text-lg text-white/80 font-medium">
              {activeTab === 'signin' ? 'Sign in to your admin dashboard' : 'Create your admin account'}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <Tabs 
            defaultValue="signin" 
            className="w-full" 
            onValueChange={setActiveTab}
          >
            {/* Fixed Tab List */}
            <TabsList className="grid w-full grid-cols-2 h-14 bg-white/20 backdrop-blur-xl rounded-2xl mb-8 p-1 border border-white/30 shadow-lg">
              <TabsTrigger 
                value="signin" 
                className="flex items-center justify-center gap-2 h-full rounded-xl font-semibold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="flex items-center justify-center gap-2 h-full rounded-xl font-semibold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-white/70 data-[state=inactive]:hover:text-white data-[state=inactive]:hover:bg-white/10"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <TabsContent value="signin" className="space-y-6 mt-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <SignInForm
                  isLoading={isLoading}
                  onSubmit={handleSubmit}
                  onGoogleSignIn={handleGoogleSignIn}
                />
              </div>
            </TabsContent>

            <TabsContent value="signup" className="space-y-6 mt-0">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <SignUpForm
                  isLoading={isLoading}
                  userType={userType}
                  setUserType={setUserType}
                  onSubmit={handleSubmit}
                  onGoogleSignIn={handleGoogleSignIn}
                />
              </div>
            </TabsContent>
          </Tabs>

          {/* Footer Section */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure & Encrypted Connection</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
