
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category || 'Other')))];
  
  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary/5 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Our Collection</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of oils, each crafted with the same dedication to purity and health.
          </p>
        </div>
        {/* Subtle pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? 'bg-secondary text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Badge Section */}
      <section className="py-20 bg-accent border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div>
               <h4 className="text-lg font-bold mb-3 font-serif">100% Organic</h4>
               <p className="text-gray-600 text-sm">Responsibly sourced from the finest farms.</p>
             </div>
             <div>
               <h4 className="text-lg font-bold mb-3 font-serif">Cold Extraction</h4>
               <p className="text-gray-600 text-sm">Traditional Marachekku/Expeller process.</p>
             </div>
             <div>
               <h4 className="text-lg font-bold mb-3 font-serif">Purity Guaranteed</h4>
               <p className="text-gray-600 text-sm">Lab tested for quality and consistency.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
