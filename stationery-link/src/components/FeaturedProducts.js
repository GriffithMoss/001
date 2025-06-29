const FeaturedProducts = () => {
    // State to hold products, loading status, and errors
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            if (!supabase) {
                setError("Supabaseクライアントが利用できません。ライブラリが読み込まれていることを確認してください。");
                setLoading(false);
                return;
            }
            if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
                setError("Supabaseの認証情報が設定されていません。");
                setLoading(false);
                return;
            }
            try {
                // For a Japanese site, ensure the data in your 'products' table (name, description, etc.) is in Japanese.
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .limit(4);

                if (error) {
                    throw error;
                }
                
                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Empty dependency array means this effect runs once on mount

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