"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const dishes = [
  {
    name: "Jollof Rice",
    description: "Our world-famous smoky Jollof rice served with spicy grilled chicken and fried plantain.",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=1000",
    price: "$18.99"
  },
  {
    name: "Waakye",
    description: "Traditional rice and beans cooked with sorghum leaves, served with shito, wele, and egg.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    price: "$16.99"
  },
  {
    name: "Fufu with Light Soup",
    description: "Pounded yam and plantain served in a rich, spicy tomato-based soup with goat meat.",
    image: "https://images.unsplash.com/photo-1512058560366-cd2427ffbb62?auto=format&fit=crop&q=80&w=1000",
    price: "$20.99"
  },
  {
    name: "Banku with Tilapia",
    description: "Fermented corn and cassava dough served with large grilled tilapia and fresh pepper sauce.",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=1000",
    price: "$22.99"
  },
  {
    name: "Fried Plantain",
    description: "Sweet, ripe plantains fried to golden perfection. The perfect side for any meal.",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=1000",
    price: "$6.99"
  },
  {
    name: "Kelewele",
    description: "Spicy fried plantain cubes seasoned with ginger, onions, and chili peppers.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
    price: "$8.99"
  }
];

const SignatureDishes = () => {
  return (
    <section id="dishes" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#FCD116] uppercase">The Favorites</h2>
          <h3 className="text-4xl md:text-5xl font-black">Signature Dishes</h3>
          <div className="w-24 h-1 bg-[#CE1126] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="bg-zinc-900 border-none rounded-none overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                <div className="absolute top-4 right-4 bg-[#FCD116] text-black font-black px-3 py-1 text-sm">
                  {dish.price}
                </div>
              </div>
              <CardContent className="p-8 space-y-3">
                <h4 className="text-2xl font-bold text-white group-hover:text-[#FCD116] transition-colors">
                  {dish.name}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {dish.description}
                </p>
                <div className="pt-4 flex items-center gap-2">
                  <div className="h-[1px] flex-1 bg-zinc-800" />
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">Authentic Recipe</span>
                  <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;