// src/app/page.tsx

import ProductCard from "@/components/ProductCard";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Fetch products from the database
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false }); // Show newest products first

  if (error) {
    return <p className="text-center text-red-500 mt-8">エラーが発生しました: {error.message}</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500 mt-8">商品が見つかりませんでした。</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        新着商品
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}