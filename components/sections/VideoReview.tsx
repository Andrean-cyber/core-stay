"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, Tv, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VideoReview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // URL Video Shorts Resmi The Osborn Living
  const youtubeShortsUrl = "https://youtube.com/shorts/f8JHUE7Tb2I?si=Z_hhSCFMDY9spRts";
  // Menggunakan Thumbnail Resmi Resolusi Tertinggi (Maxresdefault) dari YouTube
  const highResThumbnail = "https://i.ytimg.com/vi/f8JHUE7Tb2I/maxresdefault.jpg";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="video-review" 
      ref={sectionRef}
      className="bg-white py-20 md:py-28 px-4 md:px-8 lg:px-16 w-full overflow-hidden relative border-t border-zinc-100"
    >
      {/* Subtle geometric line patterns representing design layout & architecture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-[#421E2C]"></div>
        <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-[#421E2C]"></div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] relative z-10">
        
        {/* ========================================================= */}
        {/* EDITORIAL TOP HEADER WITH SPLIT DESIGN                     */}
        {/* ========================================================= */}

        {/* ── HEADER ── */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">property briefing video</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Konsep Hunian <span className="text-[#F26B1D]">Dan Investasi</span>
          </h2>
          <p className="text-zinc-500 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
           Melalui visual 3D ini, setiap detail dirancang untuk memberikan kenyamanan, kualitas dan pengalaman menginap yang berkesan
          </p>
        </div>

        

        {/* ========================================================= */}
        {/* ASYMMETRIC CONTENT BLOCK                                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: ELEGANT MAGAZINE-STYLE DETAILS (5 Cols) */}
          <div className={cn(
            "lg:col-span-5 flex flex-col justify-between order-2 lg:order-1 transition-all duration-1000 delay-300 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            
            <div className="space-y-6 md:space-y-8">
              {/* Highlight Header */}
              <div className="border-b border-zinc-100 pb-6">
                <span className="text-xs font-semibold text-[#F26B1D] tracking-wider uppercase block mb-2">
                  Topik Utama Video
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[#421E2C] tracking-tight">
                  Bukan sekedar bangunan <span className="text-[#F26B1D] font-medium italic">Tetapi sebuah konsep hunian dan investasi</span>
                </h3>
              </div>

              {/* Quote Block */}
              <blockquote className="text-zinc-600 font-light text-sm md:text-base border-l-2 border-[#421E2C] pl-4 italic leading-relaxed">
                "Banyak yang belum tahu kalau berinvestasi di awal pembangunan memberikan ground-floor price, di mana potensi lonjakan capital gain paling maksimal didapatkan."
              </blockquote>

              {/* Grid Feature Bullet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { title: "Harga Perdana", desc: "Mulai Rp 2 M-an saja" },
                  { title: "Dapatkan", desc: "Promo KPR Harga Cash" },
                  { title: "Lokasi Premium", desc: "Kawasan pusat kota" },
                  { title: "Capital Gain", desc: "Bertumbuh sejak awal" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                    <CheckCircle2 size={16} className="text-[#F26B1D] mb-2" />
                    <h4 className="text-xs font-bold text-[#421E2C]">{item.title}</h4>
                    <p className="text-[11px] text-zinc-500 font-light mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium CTA Panel */}
            <div className="pt-8 mt-8 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <a 
                href={youtubeShortsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-[#421E2C] hover:bg-[#F26B1D] text-white font-medium text-xs px-6 py-4 rounded-lg shadow-md transition-all duration-300 active:scale-[0.98]"
              >
                <span>Buka Video di YouTube</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2.5 px-2 text-zinc-400">
                <ShieldCheck size={16} className="text-zinc-400" />
                <span className="text-[11px] font-light">Liputan & Analisis Valid</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: MODERN THEATER PLAYER PRESENTATION (7 Cols) */}
          <div className={cn(
            "lg:col-span-7 order-1 lg:order-2 transition-all duration-1000 delay-500 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="relative h-full flex flex-col justify-center">
              
              {/* Artistic Background Frame Box using Wine #421E2C */}
              <div className="absolute -inset-2 md:-inset-3 rounded-[1.5rem] border border-[#421E2C]/10 pointer-events-none"></div>
              
              {/* Main Media Player Container */}
              <div className="relative aspect-[16/9] w-full bg-zinc-950 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(66,30,44,0.08)] group">
                
                {/* Background Image / Thumbnail Cover */}
                <img
                  src={highResThumbnail}
                  alt="The Osborn Living Video Tour Preview"
                  className="object-cover w-full h-full object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Linear Minimalist Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Floating Top Info Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 flex items-center gap-2">
                    <Tv size={12} className="text-[#F26B1D]" />
                    <span className="text-[10px] text-white font-medium tracking-wide">Walkthrough Showcase</span>
                  </div>
                  <span className="text-[10px] bg-white/10 text-white backdrop-blur-sm px-2 py-1 rounded font-mono">
                    SHORTS
                  </span>
                </div>

                {/* Central Futuristic Play Button Container */}
                <a 
                  href={youtubeShortsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white text-[#421E2C] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-[#F26B1D] hover:text-white z-20 group/btn"
                  aria-label="Putar Video Review"
                >
                  <Play size={20} className="fill-current translate-x-0.5 transition-transform group-hover/btn:rotate-12" />
                </a>

                {/* Bottom Status Title Overlay */}
                <div className="absolute bottom-4 left-4 z-20 pointer-events-none max-w-[85%]">
                  <p className="text-white font-medium text-xs md:text-sm drop-shadow-sm line-clamp-1">
                    Bukan sekedar bangunan, tetapi sebuah...
                  </p>
                  <div className="flex items-center gap-2 mt-1 opacity-80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26B1D] animate-ping" />
                    <span className="text-[10px] text-zinc-300 font-light">Tekan tombol untuk putar video</span>
                  </div>
                </div>

              </div>

              {/* Minimal Accent Bar at the Bottom of video */}
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex gap-1.5">
                  <span className="w-8 h-1 rounded-full bg-[#421E2C]"></span>
                  <span className="w-2 h-1 rounded-full bg-zinc-200"></span>
                  <span className="w-2 h-1 rounded-full bg-zinc-200"></span>
                </div>
                <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                  Official Content <ArrowRight size={10} />
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}