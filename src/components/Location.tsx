"use client";

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from "@/constants/contact";

const Location = () => {
  return (
    <section id="location" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.3em] text-[#006B3F] uppercase">Visit Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-black">Location & Hours</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-[#CE1126] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <p className="text-zinc-600">3300 Dufferin St, Unit G<br />Toronto, ON M6A 2T5</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-[#FCD116] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Contact</h4>
                    <p className="text-zinc-600">
                      <a href={PHONE_TEL} className="hover:text-[#CE1126] transition-colors">{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-[#006B3F] shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Hours</h4>
                    <ul className="text-zinc-600 space-y-1">
                      <li className="flex justify-between gap-4"><span>Mon - Sun:</span> <span>10am - 9pm</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] bg-zinc-200 grayscale">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.344444444444!2d-79.45!3d43.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b339999999999%3A0x9999999999999999!2s3300%20Dufferin%20St%2C%20North%20York%2C%20ON%20M6A%202T5!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <div className="absolute inset-4 border border-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;