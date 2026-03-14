"use client";

import React from 'react';
import { Phone, Truck, ShoppingBag, Clock } from 'lucide-react';

const OrderSection = () => {
  return (
    <section id="order" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD116]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CE1126]/10 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[#FCD116] font-bold tracking-widest uppercase text-sm">Order & Pickup</h2>
                <h3 className="text-4xl md:text-5xl font-black leading-tight">
                  Craving Accra? <br />
                  <span className="text-white/60">We've got you covered.</span>
                </h3>
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed">
                Order your favorite Ghanaian dishes from <span className="text-white font-bold">Accra Restaurant</span> by phone or through your preferred delivery app. We ensure every meal is packed with care and delivered fresh.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-4 bg-white text-black p-4 hover:bg-[#FCD116] transition-colors group"
                >
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/60">Call to Order</p>
                    <p className="text-xl font-black">(123) 456-7890</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-bold border-b border-white/10 pb-4">Available on Delivery Platforms</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Uber Eats', color: 'hover:bg-[#06C167]' },
                  { name: 'SkipTheDishes', color: 'hover:bg-[#FF0000]' },
                  { name: 'DoorDash', color: 'hover:bg-[#FF3008]' }
                ].map((platform) => (
                  <a 
                    key={platform.name}
                    href="#" 
                    className={`bg-zinc-900 p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group ${platform.color}`}
                  >
                    <ShoppingBag className="w-8 h-8 text-white/40 group-hover:text-white" />
                    <span className="font-bold text-sm">{platform.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-4 text-white/50 text-sm">
                <Clock className="w-5 h-5 text-[#FCD116]" />
                <span>Delivery available during regular business hours.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;