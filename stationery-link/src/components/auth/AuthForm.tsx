// src/components/auth/AuthForm.tsx

'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async () => {
    setIsSubmitting(true);
    setError(null);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      setError(error.message);
    } else {
      alert('登録確認メールを送信しました。メールボックスをご確認ください。');
    }
    setIsSubmitting(false);
  };

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push('/');
      router.refresh();
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-900">
        アカウントにログイン
      </h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            パスワード
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        
        {error && <p className="text-sm text-center text-red-600">{error}</p>}

        <div className="space-y-2">
            <button
                onClick={handleLogin}
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-medium text-white bg-primary rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
            >
                {isSubmitting ? '処理中...' : 'ログイン'}
            </button>
            <button
                onClick={handleSignUp}
                disabled={isSubmitting}
                className="w-full px-4 py-2 font-medium text-gray-700 bg-subtle rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
            >
                {isSubmitting ? '処理中...' : '新規登録'}
            </button>
        </div>
      </div>
    </div>
  );
}