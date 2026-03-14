"use client";

import React from 'react';

const About = () => {
  return (
    <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#CE1126] z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#006B3F] z-10" />
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070" 
              alt="Our Chef" 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 bg-black text-white p-6 max-w-[200px]">
              <p className="text-3xl font-black leading-none">20+</p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/60">Years of Tradition</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#CE1126] uppercase">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black leading-tight">
                A Taste of Heritage in Every Bite
              </h3>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                At <span className="text-black font-bold">Accra Restaurant</span>, we believe that food is the ultimate expression of culture. Our journey began with a simple mission: to bring the authentic, vibrant flavors of Ghana to our community.
              </p>
              <p>
                Every dish we serve is prepared using time-honored recipes passed down through generations. From the smoky aroma of our Jollof rice to the comforting warmth of our Fufu and soup, we use only the freshest ingredients and traditional spices.
              </p>
              <p>
                Hospitality is at the core of Ghanaian culture, and it's at the heart of everything we do. When you step into Accra Restaurant, you're not just a customer—you're family.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#FCD116]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-[#FCD116] rounded-full" />
                </div>
                <p className="text-xs font-bold uppercase tracking-tighter">Authentic</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#CE1126]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-[#CE1126] rounded-full" />
                </div>
                <p className="text-xs font-bold uppercase tracking-tighter">Fresh</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#006B3F]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-[#006B3F] rounded-full" />
                </div>
                <p className="text-xs font-bold uppercase tracking-tighter">Traditional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;