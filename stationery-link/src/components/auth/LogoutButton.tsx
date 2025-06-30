// src/components/auth/LogoutButton.tsx

"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
    >
      ログアウト
    </button>
  );
}