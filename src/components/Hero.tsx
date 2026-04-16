"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroGhanaianCuisine from "@/assets/hero-ghanaian-cuisine.png";
import { PHONE_TEL } from "@/constants/contact";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroGhanaianCuisine}
          alt="Traditional Ghanaian dishes — fufu light soup, kontomire, waakye, jollof, and banku"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="h-[2px] w-12 bg-[#FCD116]" />
            <span className="text-[#FCD116] font-bold tracking-widest uppercase text-sm">Welcome to Ghana</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight animate-in fade-in slide-in-from-left duration-1000 delay-200">
            Authentic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Ghanaian</span> Cuisine
          </h1>
          
          <div className="flex items-center gap-2 text-[#006B3F] font-bold bg-white/10 backdrop-blur-sm w-fit px-4 py-2 rounded-full animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <ShieldCheck className="w-5 h-5" />
            <span className="uppercase tracking-widest text-xs">100% Halal Certified</span>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 max-w-lg animate-in fade-in slide-in-from-left duration-1000 delay-400">
            Experience the rich flavors of traditional Ghanaian cooking at <span className="text-white font-bold">Accra Restaurant</span>. Proudly serving authentic Halal dishes in Toronto.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button 
              onClick={() => navigate('/menu')}
              className="bg-white text-black hover:bg-[#FCD116] transition-colors rounded-none px-8 py-6 text-lg font-bold group"
            >
              <UtensilsCrossed className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Menu
            </Button>
            <Button asChild className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-8 py-6 text-lg font-bold">
              <a href={PHONE_TEL} className="inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 flex">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-[#FCD116]" />
        <div className="flex-1 bg-[#006B3F]" />
      </div>
    </section>
  );
};

export default Hero;