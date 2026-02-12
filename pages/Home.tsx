
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(1, 5); // Pick 4 products

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[#f7fdfb]">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px]" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary/5 rounded-tr-[300px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase py-1 px-4 rounded-full mb-6">
              100% Cold Pressed & Natural
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-8">
              The Essence of <br />
              <span className="text-primary italic">Nature's Purity</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Abeit Oil Mills brings you oils harvested with care and extracted through traditional cold-press methods to preserve every drop of goodness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/products" className="bg-primary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all hover:-translate-y-1">
                Explore Products
              </Link>
              <Link to="/about" className="bg-white text-gray-800 border-2 border-gray-100 font-bold py-4 px-8 rounded-full hover:border-primary transition-all">
                Our Story
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 p-8">
              <img 
                src={PRODUCTS[1].image} 
                alt="Featured Product" 
                className="w-full max-w-md mx-auto drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-1000"
              />
            </div>
            {/* Visual Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Why Abeit Oil Mills?</h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-8" />
            <p className="text-gray-600 text-lg">
              We believe in the power of nature. Our oils are not just ingredients; they are the result of a commitment to health, tradition, and purity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Cold Pressed Extraction", 
                desc: "Extracted below 30°C to ensure all natural nutrients, enzymes, and antioxidants remain intact for your body's benefit.",
                icon: "❄️"
              },
              { 
                title: "Zero Chemicals", 
                desc: "No refining, bleaching, or deodorizing. Just the pure, unadulterated essence of nature in every bottle.",
                icon: "🌿"
              },
              { 
                title: "Rich in Nutrients", 
                desc: "High in Omega fats and vitamins. Our oils support heart health, skin vitality, and overall wellness.",
                icon: "💪"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-accent p-10 rounded-3xl text-center group hover:bg-secondary/5 transition-colors">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Favorites</h2>
              <p className="text-gray-600">Hand-picked premium oils from our wide range of cold-pressed offerings.</p>
            </div>
            <Link to="/products" className="text-primary font-bold hover:underline mt-6 md:mt-0">
              View All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="100" cy="0" r="80" fill="white" /></svg>
        </div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to transform your health?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 font-light">
            Switch to Abeit Oil Mills today and experience the difference that pure, traditional oil can make in your life.
          </p>
          <Link to="/contact" className="inline-block bg-white text-primary font-bold py-4 px-12 rounded-full shadow-2xl hover:bg-gray-100 transition-all hover:scale-105">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
