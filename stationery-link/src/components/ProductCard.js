const ProductCard = ({ product }) => {
    // Note: Tag names ('New Arrival', 'Best Seller', 'Sale') should be provided in Japanese from your Supabase data.
    let tagColor = '';
    if (product.tag === '新入荷') tagColor = 'bg-green-500';
    else if (product.tag === 'ベストセラー') tagColor = 'bg-yellow-500';
    else if (product.tag === 'セール') tagColor = 'bg-red-500';

    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative">
          <img className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
               src={product.imageUrl || 'https://placehold.co/400x400/E2E8F0/4A5568?text=Image'} 
               alt={product.name} />
          {product.tag && (
            <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
              {product.tag}
            </span>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
          {/* Prices are formatted with a ¥ symbol */}
          <p className="text-gray-500 mt-1">¥{typeof product.price === 'number' ? product.price.toLocaleString('ja-JP') : product.price}</p>
          <button className="w-full mt-4 bg-indigo-50 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors">
            カートに入れる
          </button>
        </div>
      </div>
    );
};
