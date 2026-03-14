"use client";

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-black tracking-tighter text-white">ACCRA</span>
                <span className="text-[12px] tracking-[0.3em] text-white/70 font-medium">RESTAURANT</span>
              </div>
              <div className="flex gap-0.5 ml-1">
                <div className="w-1.5 h-8 bg-[#CE1126]" />
                <div className="w-1.5 h-8 bg-[#FCD116]" />
                <div className="w-1.5 h-8 bg-[#006B3F]" />
              </div>
            </a>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Bringing the authentic flavors and warm hospitality of Ghana to your table. Experience tradition, taste heritage.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#FCD116]">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#dishes" className="hover:text-white transition-colors">Signature Dishes</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#order" className="hover:text-white transition-colors">Order Online</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#006B3F]">Newsletter</h4>
            <p className="text-white/50 text-sm">Join our list for special events and new menu items.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border-none px-4 py-3 text-sm w-full focus:ring-1 focus:ring-[#CE1126] outline-none"
              />
              <button className="bg-[#CE1126] px-4 py-3 font-bold text-sm hover:bg-[#CE1126]/80 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Accra Restaurant. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;