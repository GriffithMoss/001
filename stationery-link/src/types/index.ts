export type Product = {
  id: number;
  created_at: string;
  name: string;
  description: string | null; // Can be null
  price: number;
  image_url: string | null; // Can be null
  category: string | null; // Can be null
};