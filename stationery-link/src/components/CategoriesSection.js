const CategoriesSection = () => (
    <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">カテゴリーで探す</h2>
                <p className="mt-4 text-lg text-gray-600">お探しのものがきっと見つかります。</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {categories.map(category => (
                    <a href="#" key={category.name} className={`flex items-center justify-center h-40 md:h-56 rounded-xl text-xl md:text-2xl font-bold text-gray-800 transition-all duration-300 ${category.color} ${category.hover} transform hover:scale-105`}>
                        {category.name}
                    </a>
                ))}
            </div>
        </div>
    </section>
);