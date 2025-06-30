// src/components/Header.tsx

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from './auth/LogoutButton';

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <header className="flex items-center justify-between p-4 bg-background border-b border-subtle">
      <Link href="/" className="text-xl font-bold">
        Stationery-Link
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>{user.email}</span>
            <LogoutButton />
          </>
        ) : (
          <Link href="/login" className="px-4 py-2 font-semibold text-white bg-primary rounded-lg hover:opacity-90 transition-opacity">
            ログイン
          </Link>
        )}
      </div>
    </header>
  );
}