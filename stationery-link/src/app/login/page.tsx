// src/app/login/page.tsx

import AuthForm from '@/components/auth/AuthForm';

export default function LoginPage() {
  return (
    // The old background color class is removed to let the global style apply.
    <div className="flex items-center justify-center min-h-screen">
      <AuthForm />
    </div>
  );
}