import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import ProductDetails from '@/components/ProductDetails';

type PageProps = { params: { id: string } };

async function getProduct(id: string) {
  const { data, error } = await supabase.from('products').select('*').eq('id', id).single();
  if (error) notFound();
  return data;
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id);
  return <ProductDetails product={product} />;
}