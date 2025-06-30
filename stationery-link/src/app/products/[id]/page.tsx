// src/app/products/[id]/page.tsx

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: product } = await supabase
    .from('products')
    .select('name, description')
    .eq('id', params.id)
    .single();
 
  return {
    title: `${product?.name || '商品'} | Stationery-Link`,
    description: product?.description || '文房具の詳細ページ',
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square">
          <Image
            src={product.image_url || '/placeholder.png'}
            alt={`Picture of ${product.name}`}
            fill
            className="object-contain object-center rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-text">
            {product.name}
          </h1>
          <p className="mt-2 text-gray-500">{product.category}</p>
          <p className="mt-4 text-3xl font-bold text-text">
            ¥{product.price.toLocaleString()}
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-text">商品説明</h2>
            <p className="mt-2 text-base text-gray-600 leading-relaxed">
              {product.description || '詳細な説明はありません。'}
            </p>
          </div>
          <div className="mt-8">
            <button className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              カートに追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}