"use client";

import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#006B3F] uppercase">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black">Location & Hours</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#CE1126] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <p className="text-zinc-600">123 Heritage Way<br />Accra District, NY 10001</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#FCD116] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Contact</h4>
                    <p className="text-zinc-600">(123) 456-7890<br />hello@accrarestaurant.com</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#006B3F] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Hours</h4>
                    <ul className="text-zinc-600 space-y-1">
                      <li className="flex justify-between gap-4"><span>Mon - Thu:</span> <span>11am - 9pm</span></li>
                      <li className="flex justify-between gap-4"><span>Fri - Sat:</span> <span>11am - 11pm</span></li>
                      <li className="flex justify-between gap-4"><span>Sunday:</span> <span>12pm - 8pm</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] bg-zinc-200 grayscale">
            {/* Placeholder for Google Maps */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-8 text-center">
              <MapPin className="w-12 h-12 mb-4 opacity-20" />
              <p className="font-bold uppercase tracking-widest text-sm">Google Maps Placeholder</p>
              <p className="text-xs mt-2">123 Heritage Way, Accra District, NY 10001</p>
            </div>
            {/* Decorative border */}
            <div className="absolute inset-4 border border-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;