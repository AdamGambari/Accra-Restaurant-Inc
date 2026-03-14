"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SignatureDishes from '@/components/SignatureDishes';
import MenuPreview from '@/components/MenuPreview';
import OrderSection from '@/components/OrderSection';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FCD116] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <MenuPreview />
        <OrderSection />
        <Gallery />
        <Location />
      </main>

      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;