'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import ProductCard from './ProductCard';
import { Product } from '@/context/CartContext';

const FeaturedProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error: supabaseError } = await supabase
                    .from('products')
                    .select('*')
                    .limit(4);

                if (supabaseError) throw supabaseError;
                
                setProducts(data || []);
            } catch (err) {
                // Type guard to check if the error is an object with a message property
                if (err instanceof Error) {
                    setError(err.message);
                    console.error("Error fetching products:", err.message);
                } else {
                    setError("予期せぬエラーが発生しました。"); // An unexpected error occurred.
                    console.error("An unexpected error occurred:", err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">おすすめ商品</h2>
            <p className="mt-4 text-lg text-gray-600">あなたにぴったりの、選りすぐりのアイテム。</p>
          </div>
          <div className="mt-12">
            {loading && <p className="text-center text-gray-600">商品を読み込み中...</p>}
            {error && <p className="text-center text-red-600">エラー: {error}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
          </div>
        </div>
      </section>
    );
};

export default FeaturedProducts;