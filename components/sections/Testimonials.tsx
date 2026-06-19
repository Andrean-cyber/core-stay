"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Quote, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const testimonials = [
    {
      quote: "Keputusan terbaik mengalokasikan kapital di Core Stay. Konsep cluster guest house ini sangat langka di Malang. Dengan 10 kamar tidur dalam satu unit, potensi passive income-nya jauh lebih masif dibanding sewa vila biasa, ditambah operasionalnya ditangani penuh secara transparan.",
      author: "Hendra Wijaya",
      title: "Property Investor & Entrepreneur",
      origin: "Surabaya",
      avatar: "/psn1.jfif",
      tag: "Passive Income Focus"
    },
    {
      quote: "Sebagai investor, tingkat okupansi adalah segalanya. Core Stay menawarkan manajemen kelola guest house profesional yang terintegrasi. Proyeksi yield tahunan hingga 14% sangat masuk akal mengingat lokasi strategisnya yang selalu padat wisatawan.",
      author: "Dr. Amalia Citra",
      title: "Spesialis Jantung & Investor Aset",
      origin: "Jakarta Pusat",
      avatar: "/dokter.jfif",
      tag: "High Yield ROI"
    },
    {
      quote: "Legalitas SHM dan perizinan operasional guest house di Core Stay sudah clean sejak awal. Proses transaksinya dibantu dengan sangat profesional oleh tim manajemen. Sangat aman dan menguntungkan untuk diversifikasi portofolio jangka panjang.",
      author: "Robert Janssen",
      title: "Expatriate & Tech Consultant",
      origin: "Bali / Netherlands",
      avatar: "/psn2.jfif",
      tag: "Legal Security"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden border-t border-zinc-100"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        
        {/* ========================================================= */}
        {/* SECTION TITLES                                            */}
        {/* ========================================================= */}

        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">VERIFIED INVESTORS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Suara Kepercayaan <span className="text-[#F26B1D]">Investor Kami</span> 
          </h2>
        </div>

        {/* ========================================================= */}
        {/* EDITORIAL SPLIT-SCREEN LAYOUT                             */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: GIANT QUOTE SHOWCASE (7 Columns) */}
          <div className={cn(
            "lg:col-span-7 bg-[#421E2C] text-white rounded-3xl p-8 md:p-14 relative min-h-[400px] flex flex-col justify-between shadow-[0_30px_60px_rgba(66,30,44,0.15)] transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          )}>
            {/* Giant Background Quote Graphic */}
            <div className="absolute top-8 right-10 text-[#F26B1D]/10 pointer-events-none select-none">
              <Quote size={120} className="fill-current" />
            </div>

            {/* Active Content Tracker Tag */}
            <div className="inline-flex items-center">
              <span className="text-[9px] font-bold tracking-widest uppercase bg-[#F26B1D] text-white px-3 py-1 rounded-full">
                {testimonials[activeIndex].tag}
              </span>
            </div>

            {/* Main Text Content */}
            <div key={activeIndex} className="my-8 animate-in fade-in duration-500">
              <p className="text-lg md:text-2xl font-light leading-relaxed tracking-tight text-zinc-100">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>

            {/* Author Profile Footer & Navigation */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-bold text-base text-[#F26B1D]">{testimonials[activeIndex].author}</h3>
                <p className="text-xs text-zinc-300 font-light mt-0.5">
                  {testimonials[activeIndex].title} — <span className="italic opacity-70">{testimonials[activeIndex].origin}</span>
                </p>
              </div>

              {/* Minimalist Slider Arrows */}
              <div className="flex items-center gap-2 shrink-0">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26B1D] hover:border-[#F26B1D] transition-all text-white active:scale-95 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#F26B1D] hover:border-[#F26B1D] transition-all text-white active:scale-95 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE PORTRAIT PICKER (5 Columns) */}
          <div className={cn(
            "lg:col-span-5 space-y-4 transition-all duration-1000 delay-400",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">
              Klik nama untuk membaca analisis mitra:
            </span>

            <div className="space-y-3">
              {testimonials.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group relative overflow-hidden cursor-pointer",
                      isActive 
                        ? "bg-zinc-50 border-[#421E2C] shadow-sm" 
                        : "bg-white border-zinc-200/60 hover:bg-zinc-50/50 hover:border-zinc-300"
                    )}
                  >
                    {/* Active Accent Bar Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F26B1D]" />
                    )}

                    {/* Thumbnail Avatar */}
                    <div className={cn(
                      "relative w-12 h-12 rounded-lg overflow-hidden shrink-0 transition-transform duration-300 border",
                      isActive ? "border-[#F26B1D] scale-105" : "border-zinc-200 group-hover:scale-102"
                    )}>
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    {/* Basic Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={cn(
                          "text-xs font-bold truncate",
                          isActive ? "text-[#421E2C]" : "text-zinc-700"
                        )}>
                          {item.author}
                        </h4>
                        {isActive && (
                          <div className="flex gap-px">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={8} className="fill-[#F26B1D] text-[#F26B1D]" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-400 truncate mt-0.5">{item.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro Social Proof Bar */}
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-light">
              <span>Komunitas Investor Premium Core Stay</span>
              <a 
                href="https://wa.me/62816500160"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F26B1D] font-medium inline-flex items-center gap-1 hover:underline text-xs"
              >
                Join Investor Community <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}