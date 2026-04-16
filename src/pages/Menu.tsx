"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_TEL } from "@/constants/contact";

const menuData = [
  {
    category: "Drinks",
    items: [
      { name: "Sobolo", price: "$6.00", desc: "Sobolo Special—chilled hibiscus with a spicy kick" },
      { name: "Amoduro", price: "$6.00", desc: "Hausa Beer—ginger, lemon, and spice; shake well" },
      { name: "Burkina", price: "$6.00", desc: "Millet and yogurt drink with cloves; shake well" },
      { name: "Fura", price: "$6.00", desc: "Fura Special—spicy millet drink with ginger and sour cream" },
      { name: "Water", price: "$2.50", desc: "Bottled water" }
    ]
  },
  {
    category: "Main Dishes",
    items: [
      { name: "Jollof Rice", price: "$20", desc: "Smoky Jollof with grilled chicken and plantain" },
      { name: "Waakye", price: "$20", desc: "Rice and beans with sorghum leaves, shito, wele, and egg" }
    ]
  },
  {
    category: "Soups & Stews",
    items: [
      { name: "Fufu with Light Soup", price: "$25", desc: "Pounded yam and plantain in rich light soup with goat" },
      { name: "Zaafi (Dieho)", price: "$25", desc: "Steamed dough with ayoyo soup and meat stew" },
      { name: "Omotua", price: "$30", desc: "Classic swallow with palm nut or groundnut soup and assorted protein" },
      { name: "Banku & Okra Stew", price: "$25", desc: "Fermented corn dough with okra stew, fish, and meat" },
      { name: "Fufu With Goat Light Soup", price: "$25", desc: "Fufu served with goat light soup" },
      { name: "Groundnut Soup", price: "$25", desc: "Creamy peanut soup with tender meat" },
      { name: "Okra Soup", price: "$25", desc: "Fresh okra in a savory, well-seasoned broth" }
    ]
  },
  {
    category: "Sides & Extras",
    items: [
      { name: "Extra Plantain", price: "$5.99", desc: "Sweet fried ripe plantain" },
      { name: "Shito Sauce", price: "$3.99", desc: "Spicy black pepper sauce" },
      { name: "Boiled Yam", price: "$7.99", desc: "Soft, hearty yam" },
      { name: "Stew Sauce", price: "$4.99", desc: "Rich tomato stew for rice or sides" },
      { name: "Garri", price: "$3.99", desc: "Toasted cassava for soups and stews" }
    ]
  }
];

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <Link to="/" className="flex items-center text-sm font-bold text-[#CE1126] hover:gap-2 transition-all group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:mr-3 transition-all" />
              BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-black tracking-tighter">OUR MENU</h1>
            <div className="flex gap-1">
              <div className="w-12 h-1.5 bg-[#CE1126]" />
              <div className="w-12 h-1.5 bg-[#FCD116]" />
              <div className="w-12 h-1.5 bg-[#006B3F]" />
            </div>
          </div>

          <div className="space-y-20">
            {menuData.map((section, idx) => (
              <div key={idx} className="space-y-10">
                <div className="flex items-center gap-6">
                  <h2 className="text-3xl font-black uppercase tracking-tighter whitespace-nowrap">{section.category}</h2>
                  <div className="h-[2px] flex-1 bg-zinc-100" />
                  <Utensils className="w-6 h-6 text-zinc-300" />
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
                  {section.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-bold group-hover:text-[#CE1126] transition-colors">{item.name}</h3>
                        <span className="font-black text-zinc-400">{item.price}</span>
                      </div>
                      <p className="text-zinc-500 leading-relaxed text-sm italic">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-black text-white text-center space-y-6">
            <h3 className="text-3xl font-black">Ready to taste the tradition?</h3>
            <p className="text-white/60 max-w-md mx-auto">Call us now to place your order for pickup or delivery.</p>
            <Button asChild className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-12 py-8 text-xl font-bold">
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;