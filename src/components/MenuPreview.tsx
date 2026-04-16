"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: "Drinks",
    items: [
      { name: "Sobolo", price: "$5.00", desc: "Sobolo Special—chilled hibiscus with a spicy kick" },
      { name: "Amoduro", price: "$5.00", desc: "Hausa Beer—ginger, lemon, and spice; shake well" },
      { name: "Burkina", price: "$6.00", desc: "Millet and yogurt drink with cloves; shake well" },
      { name: "Fura", price: "$6.00", desc: "Fura Special—spicy millet drink with ginger and sour cream" },
      { name: "Water", price: "$2.50", desc: "Bottled water" }
    ]
  },
  {
    title: "Main Dishes",
    items: [
      { name: "Jollof Rice", price: "$20", desc: "Smoky Jollof with grilled chicken and plantain" },
      { name: "Waakye", price: "$20", desc: "Rice and beans with sorghum leaves, shito, wele, and egg" }
    ]
  },
  {
    title: "Soups & Stews",
    items: [
      { name: "Fufu with Light Soup", price: "$25", desc: "Pounded yam and plantain in rich light soup with goat" },
      { name: "Tuo Zaafi (Dieho)", price: "$25", desc: "Steamed dough with ayoyo soup and meat stew" },
      { name: "Omotua", price: "$25", desc: "Classic swallow with palm nut or groundnut soup and assorted protein" },
      { name: "Banku & Okra Stew", price: "$25", desc: "Fermented corn dough with okra stew, fish, and meat" },
      { name: "Fufu With Goat Light Soup", price: "$25", desc: "Fufu served with goat light soup" },
      { name: "Groundnut Soup", price: "$25", desc: "Creamy peanut soup with tender meat" },
      { name: "Okra Soup", price: "$25", desc: "Fresh okra in a savory, well-seasoned broth" }
    ]
  },
  {
    title: "Sides & Extras",
    items: [
      { name: "Extra Plantain", price: "$5.99", desc: "Sweet fried ripe plantain" },
      { name: "Shito Sauce", price: "$3.99", desc: "Spicy black pepper sauce" },
      { name: "Boiled Yam", price: "$7.99", desc: "Soft, hearty yam" },
      { name: "Stew Sauce", price: "$4.99", desc: "Rich tomato stew for rice or sides" },
      { name: "Garri", price: "$3.99", desc: "Toasted cassava for soups and stews" }
    ]
  }
];

const MenuPreview = () => {
  const navigate = useNavigate();

  return (
    <section id="menu" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#006B3F] uppercase">Explore</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">Menu Preview</h3>
          </div>
          <Button 
            onClick={() => navigate('/menu')}
            className="bg-black text-white hover:bg-[#CE1126] transition-colors rounded-none px-8 py-6 h-auto text-lg font-bold"
          >
            View Full Menu
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center gap-4">
                <h4 className="text-2xl font-black uppercase tracking-tighter">{cat.title}</h4>
                <div className="h-[2px] flex-1 bg-zinc-200" />
              </div>
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-lg font-bold group-hover:text-[#CE1126] transition-colors">{item.name}</span>
                      <span className="font-black text-zinc-400">{item.price}</span>
                    </div>
                    <p className="text-sm text-zinc-500 italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;