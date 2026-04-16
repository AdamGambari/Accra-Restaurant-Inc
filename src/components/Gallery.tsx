"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Images } from 'lucide-react';
import { accraHomeGalleryPreview } from '@/data/accraExperienceVisuals';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const images = accraHomeGalleryPreview;

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const active = lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#CE1126] uppercase">Visuals</h2>
          <h3 className="text-4xl md:text-5xl font-black text-black">The Accra Experience</h3>
        </div>

        <Dialog
          open={lightboxIndex !== null}
          onOpenChange={(open) => {
            if (!open) setLightboxIndex(null);
          }}
        >
          <DialogContent
            className="max-w-[min(96vw,1280px)] w-full border-0 bg-zinc-950 p-0 shadow-2xl overflow-hidden gap-0 sm:rounded-sm [&>button]:right-3 [&>button]:top-3 [&>button]:z-[60] [&>button]:rounded-full [&>button]:bg-black/60 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-black/80 [&>button]:ring-0"
          >
            {active && (
              <>
                <DialogTitle className="sr-only">{active.alt}</DialogTitle>
                <img
                  src={active.src}
                  alt={active.alt}
                  className="block w-full max-h-[min(85vh,900px)] object-contain bg-black"
                />
              </>
            )}
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className={`relative overflow-hidden group cursor-pointer text-left border-0 p-0 bg-transparent w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006B3F] focus-visible:ring-offset-2 rounded-sm ${
                idx === 0 ? "md:row-span-2 md:col-span-1" : ""
              } ${idx === 4 ? "md:col-span-2" : ""}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover aspect-square md:aspect-auto pointer-events-none"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white font-bold tracking-widest uppercase text-xs border border-white px-4 py-2">View</span>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-black text-white hover:bg-[#006B3F] transition-colors rounded-none px-10 py-6 h-auto text-base font-bold tracking-wide"
          >
            <Link to="/visuals">
              <Images className="w-5 h-5 mr-2 inline-block" aria-hidden />
              View all visuals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;