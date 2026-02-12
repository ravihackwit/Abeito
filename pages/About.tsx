
import React from 'react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Our Journey</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From the fertile fields of Tamil Nadu to your kitchen, Abeit Oil Mills is on a mission to bring back the traditional ways of healthy living.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-8 border-l-4 border-secondary pl-6">The Abeit Philosophy</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Abeit Oil Mills was founded with a singular vision: to restore the purity of oils used in Indian households. Located in the heart of Tenkasi, we leverage the natural richness of the region to source the finest seeds.
                </p>
                <p>
                  We specialize in the <strong>Cold Press method</strong>, an ancient technique where oil is extracted at low temperatures without any chemical solvents. This ensures that the natural aroma, color, and most importantly, the nutritional value are preserved perfectly.
                </p>
                <p>
                  Our commitment goes beyond just business; it's about community health. We believe that what you put into your body defines your longevity and vitality.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/id/42/1200/900" 
                  alt="Extraction Process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-8 rounded-3xl text-white shadow-xl hidden md:block max-w-xs">
                 <p className="text-2xl font-serif mb-2 italic">"Nature's Own Process"</p>
                 <p className="text-sm opacity-80">Our cold-press technology mimics nature's slow and steady pace to ensure absolute quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { label: "Founded", value: "Abeit Heritage" },
               { label: "Quality Focus", value: "Cold Pressed" },
               { label: "Certified", value: `FSSAI: ${CONTACT_INFO.fssai}` },
               { label: "Region", value: "Tenkasi, Tamil Nadu" }
             ].map((stat, i) => (
               <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
                 <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">{stat.label}</p>
                 <p className="text-xl font-bold text-gray-900 font-serif">{stat.value}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Production Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg">Every bottle that leaves our mill carries the promise of Abeit quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-gray-100 rounded-3xl bg-accent/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pure Sourcing</h3>
              <p className="text-gray-600">We work directly with local farmers to select the highest quality seeds. Only the best sun-dried raw materials enter our processing unit.</p>
            </div>
            <div className="p-10 border border-gray-100 rounded-3xl bg-accent/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Our process is sustainable and low-waste. We respect the land that provides us with our livelihood.</p>
            </div>
            <div className="p-10 border border-gray-100 rounded-3xl bg-accent/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Additives</h3>
              <p className="text-gray-600">No preservatives. No artificial coloring. No synthetic fragrances. Just 100% natural oil as nature intended.</p>
            </div>
            <div className="p-10 border border-gray-100 rounded-3xl bg-accent/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Health First</h3>
              <p className="text-gray-600">Our goal is to reduce the prevalence of refined oils in kitchens, promoting better cardiovascular and metabolic health for all.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
