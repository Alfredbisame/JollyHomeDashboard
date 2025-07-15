'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import AgentApplicationForm from '@/components/agent-application/AgentApplicationForm';
import SuccessMessage from '@/components/agent-application/SuccessMessage';

export default function AgentApplicationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  if (isSubmitted) {
    return (
      <SuccessMessage onReturnHome={() => router.push('/')} />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12 px-4">
      <div className="flex items-center justify-center mb-8">
        <div className="p-3 bg-green-100 rounded-full">
          <Home className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <AgentApplicationForm onSuccess={() => setIsSubmitted(true)} />
    </div>
  );
}