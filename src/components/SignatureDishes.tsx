"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import signatureJollofRice from "@/assets/signature-jollof-rice.png";
import omotua from "@/assets/OMOTUA.jpg";
import fufuWithLightSoup from "@/assets/FUFUWITHMEAT.jpg";
import waakye from "@/assets/WAAKYE.jpg";
import zaafiDieho from "@/assets/zaafi-dieho.png";
import burkina from "@/assets/BURKINA.jpg";
import fura from "@/assets/FURA.jpg";
import hausaBeer from "@/assets/HAUSA-BEER.jpg";
import sobolo from "@/assets/SOBOLO.jpg";

const dishes = [
  {
    name: "Jollof Rice",
    description: "Our world-famous smoky Jollof rice served with spicy grilled chicken and fried plantain.",
    image: signatureJollofRice,
    price: "$20"
  },
  {
    name: "Waakye",
    description: "Traditional rice and beans cooked with sorghum leaves, served with shito, wele, and egg.",
    image: waakye,
    price: "$20"
  },
  {
    name: "Omotua",
    description: "Classic swallow with palm nut or groundnut soup and assorted protein.",
    image: omotua,
    price: "$30"
  },
  {
    name: "Fufu with Light Soup",
    description: "Pounded yam and plantain served in a rich, spicy tomato-based soup with goat meat.",
    image: fufuWithLightSoup,
    price: "$25"
  },
  {
    name: "Zaafi (Dieho)",
    description: "Steamed corn and cassava dough with ayoyo soup, savory meat stew, and egg—a northern Ghanaian favorite.",
    image: zaafiDieho,
    price: "$25"
  },
  {
    name: "Burkina",
    description: "Our signature millet yogurt drink—creamy, lightly sweetened, and spiced with cloves. Shake well and enjoy cold.",
    image: burkina,
    price: "$6.00"
  },
  {
    name: "Fura",
    description: "Fura Special—our healthy spicy millet drink with ginger, black pepper, cloves, cayenne, and sour cream. Shake well before serving cold.",
    image: fura,
    price: "$6.00"
  },
  {
    name: "Hausa Beer",
    description: "Amoduro—our healthy spicy ginger and lemon drink. Rich, refreshing, and full of flavor. Shake well before enjoying cold.",
    image: hausaBeer,
    price: "$6.00"
  },
  {
    name: "Sobolo",
    description: "Sobolo Special—traditional chilled hibiscus drink, bold and refreshing with a spicy kick. Shake well before enjoying cold.",
    image: sobolo,
    price: "$6.00"
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