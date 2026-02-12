
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
        />
        {product.category && (
          <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
            {product.category}
          </span>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 flex-grow">
          Cold-pressed for maximum nutrition and natural flavor.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-50">
          <Link 
            to="/contact" 
            className="text-primary font-bold text-sm flex items-center hover:text-secondary transition-colors"
          >
            Get Enquiry
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
