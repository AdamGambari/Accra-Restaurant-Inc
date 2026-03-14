"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    title: "Main Dishes",
    items: [
      { name: "Assorted Jollof", price: "$22", desc: "Beef, chicken, and shrimp" },
      { name: "Red Red", price: "$15", desc: "Beans stew with fried plantain" },
      { name: "Kenkey & Fish", price: "$18", desc: "Served with hot pepper sauce" }
    ]
  },
  {
    title: "Soups & Stews",
    items: [
      { name: "Groundnut Soup", price: "$14", desc: "Creamy peanut base with meat" },
      { name: "Okra Stew", price: "$16", desc: "Fresh okra with seafood" },
      { name: "Palava Sauce", price: "$15", desc: "Spinach and melon seed stew" }
    ]
  },
  {
    title: "Sides & Extras",
    items: [
      { name: "Extra Plantain", price: "$5", desc: "Sweet and ripe" },
      { name: "Shito Sauce", price: "$3", desc: "Spicy black pepper sauce" },
      { name: "Boiled Yam", price: "$7", desc: "Soft and tender" }
    ]
  },
  {
    title: "Drinks",
    items: [
      { name: "Sobolo", price: "$5", desc: "Hibiscus and ginger drink" },
      { name: "Asaana", price: "$5", desc: "Caramelized corn drink" },
      { name: "Palm Wine", price: "$8", desc: "Fresh and traditional" }
    ]
  }
];

const MenuPreview = () => {
  return (
    <section id="menu" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#006B3F] uppercase">Explore</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black">Menu Preview</h3>
          </div>
          <Button className="bg-black text-white hover:bg-[#CE1126] transition-colors rounded-none px-8 py-6 h-auto text-lg font-bold">
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