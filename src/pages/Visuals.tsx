"use client";

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { accraExperienceVisuals } from "@/data/accraExperienceVisuals";

const GhanaianFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="p-[3px] bg-[#CE1126] shadow-lg">
    <div className="p-[3px] bg-[#FCD116]">
      <div className="p-[3px] bg-[#006B3F]">{children}</div>
    </div>
  </div>
);

const Visuals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-bold text-[#CE1126] hover:gap-2 transition-all group mb-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
            BACK TO HOME
          </Link>

          <div className="text-center mb-14 space-y-3">
            <p className="text-sm font-bold tracking-[0.3em] text-[#006B3F] uppercase">Visuals</p>
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight">
              The Accra Experience
            </h1>
            <p className="text-zinc-600 max-w-xl mx-auto">
              A walk through our space—warm colours, honest cooking, and the spirit of Ghana in North York.
            </p>
            <div className="flex justify-center gap-1 pt-2">
              <div className="w-10 h-1 bg-[#CE1126]" />
              <div className="w-10 h-1 bg-[#FCD116]" />
              <div className="w-10 h-1 bg-[#006B3F]" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {accraExperienceVisuals.map((img) => (
              <figure key={img.src} className="group">
                <GhanaianFrame>
                  <div className="overflow-hidden bg-black aspect-[4/3]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </GhanaianFrame>
              </figure>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Visuals;
