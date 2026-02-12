
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  // Show the first 4 products on the home page as "Our Favorites"
  const featuredProducts = PRODUCTS.slice(0, 4);

  const testimonials = [
    {
      name: "Priya Sundar",
      role: "Home Chef",
      content: "The cold-pressed sesame oil from Abeit is absolutely authentic. The aroma takes me back to my grandmother's kitchen. Exceptional quality!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Fitness Enthusiast",
      content: "I've tried many brands, but Abeit's groundnut oil is noticeably purer. It's become a staple in my healthy diet plan.",
      rating: 5
    },
    {
      name: "Meera Krishnan",
      role: "Mother of Two",
      content: "Finding chemical-free oil was a priority for my family. Abeit Oil Mills provides the purity I can trust for my children's meals.",
      rating: 5
    }
  ];

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
              <Link to="/products" className="bg-primary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all hover:-translate-y-1 text-center">
                Explore Products
              </Link>
              <Link to="/about" className="bg-white text-gray-800 border-2 border-gray-100 font-bold py-4 px-8 rounded-full hover:border-primary transition-all text-center">
                Our Story
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 p-8 text-center">
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

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-gray-600">Join thousands of happy families who have switched to the pure goodness of Abeit Oil Mills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
                <div className="text-secondary mb-4 flex">
                  {[...Array(t.rating)].map((_, index) => (
                    <svg key={index} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <div className="absolute top-8 right-8 text-gray-100">
                  <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
                  </svg>
                </div>
              </div>
            ))}
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
