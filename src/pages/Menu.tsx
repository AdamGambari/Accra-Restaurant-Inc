"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuData = [
  {
    category: "Starters & Small Bites",
    items: [
      { name: "Kelewele", price: "$8.99", desc: "Spicy fried plantain cubes seasoned with ginger and chili." },
      { name: "Meat Pie", price: "$4.50", desc: "Flaky pastry filled with seasoned minced beef and vegetables." },
      { name: "Spring Rolls", price: "$6.99", desc: "Crispy rolls filled with fresh vegetables and shrimp." },
      { name: "Fried Yam & Turkey", price: "$12.99", desc: "Golden fried yam chunks served with spicy turkey wings." }
    ]
  },
  {
    category: "Signature Rice Dishes",
    items: [
      { name: "Accra Jollof Rice", price: "$18.99", desc: "Smoky, spicy rice served with grilled chicken and plantain." },
      { name: "Waakye Special", price: "$19.99", desc: "Rice and beans with shito, wele, egg, and fried fish." },
      { name: "Fried Rice", price: "$16.99", desc: "Ghanaian style fried rice with mixed veggies and beef." },
      { name: "Angwa Mo", price: "$14.99", desc: "Traditional oil rice served with fried eggs and sardines." }
    ]
  },
  {
    category: "Traditional Swallows",
    items: [
      { name: "Fufu & Light Soup", price: "$20.99", desc: "Pounded yam/plantain in a spicy tomato broth with goat meat." },
      { name: "Banku & Tilapia", price: "$22.99", desc: "Fermented corn dough with large grilled tilapia and pepper." },
      { name: "Kenkey & Fried Fish", price: "$17.99", desc: "Fermented corn dumplings with fried fish and hot shito." },
      { name: "Eba & Okra Stew", price: "$19.99", desc: "Gari swallow served with rich seafood okra stew." }
    ]
  },
  {
    category: "Soups & Stews",
    items: [
      { name: "Groundnut Soup", price: "$15.99", desc: "Creamy peanut soup with choice of meat or fish." },
      { name: "Palava Sauce", price: "$16.99", desc: "Spinach and melon seed stew served with boiled yam." },
      { name: "Red Red", price: "$14.99", desc: "Black-eyed pea stew served with fried ripe plantains." },
      { name: "Garden Egg Stew", price: "$15.99", desc: "Traditional eggplant stew with steamed fish." }
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Sobolo", price: "$5.00", desc: "Refreshing hibiscus and ginger infusion." },
      { name: "Asaana", price: "$5.00", desc: "Traditional caramelized corn drink." },
      { name: "Palm Wine", price: "$8.00", desc: "Freshly tapped traditional palm wine." },
      { name: "Supermalt", price: "$4.50", desc: "Classic non-alcoholic malt drink." }
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
            <Button className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-12 py-8 text-xl font-bold">
              (123) 456-7890
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;