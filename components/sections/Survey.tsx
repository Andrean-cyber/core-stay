"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sparkles, MapPin, ArrowRight, ArrowUpRight, X, ZoomIn } from "lucide-react";

export default function Survey() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // State baru untuk menangani preview gambar yang sedang dibuka
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const surveyGalleries = [
    {
      id: "01",
      title: "Family Private Gathering Tour",
      visitor: "Keluarga Bp. Hendra",
      origin: "Surabaya",
      image: "/srvy1.webp",
    },
    {
      id: "02",
      title: "Investor Executive Briefing",
      visitor: "Ibu Citra & Rekan",
      origin: "Jakarta Pusat",
      image: "/srvy2.webp",
    },
    {
      id: "03",
      title: "Weekend Site Inspection",
      visitor: "Dr. Aditya",
      origin: "Malang",
      image: "/srvy3.webp",
    },
    {
      id: "04",
      title: "VIP Booking Deal Survey",
      visitor: "Bp. Ronald & Istri",
      origin: "Sidoarjo",
      image: "/srvy4.webp",
    },
  ];

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

  // Mencegah scroll pada body saat modal preview terbuka
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section 
      id="survey" 
      ref={sectionRef}
      className="bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden border-t border-zinc-100"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* ── HEADER ── */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">On-Site Realtime Journal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Dokumentasi <span className="text-[#F26B1D]">Kunjungan Lapangan</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* BAUHAUS ROW STRIP LAYOUT (Pasti Rapi & Simetris)          */}
        {/* ========================================================= */}
        <div className={cn(
          "border-t border-zinc-200 divide-y divide-zinc-200 transition-all duration-1000 delay-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {surveyGalleries.map((item, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveImage({ src: item.image, title: item.title })}
                className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative group transition-colors duration-300 hover:bg-zinc-50/50 px-4 -mx-4 rounded-lg cursor-pointer"
              >
                {/* Col 1: Index Number */}
                <div className="md:col-span-1">
                  <span className={cn(
                    "text-xs font-mono font-bold tracking-wider transition-colors duration-300",
                    isHovered ? "text-[#F26B1D]" : "text-zinc-400"
                  )}>
                    {item.id}
                  </span>
                </div>

                {/* Col 2: Title & Location Tag */}
                <div className="md:col-span-4 space-y-1">
                  <h3 className="text-base md:text-lg font-bold text-[#421E2C] tracking-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                    <MapPin size={10} className="text-[#F26B1D]" />
                    <span className="font-medium uppercase tracking-wider">Polehan, Kec. Blimbing</span>
                  </div>
                </div>

                {/* Col 3: Visitor Detail */}
                <div className="md:col-span-3">
                  <p className="text-sm text-zinc-600 font-light">
                    {item.visitor}
                  </p>
                  <p className="text-[11px] text-zinc-400 italic">
                    Asal: {item.origin}
                  </p>
                </div>

                {/* Col 4: Interactive Image Frame Pop-up */}
                <div className="md:col-span-3 flex justify-start md:justify-center relative">
                  <div className={cn(
                    "relative w-28 h-16 md:w-36 md:h-20 rounded-lg overflow-hidden border border-zinc-200 shadow-sm transition-all duration-500 ease-out origin-center md:absolute md:-top-10 z-20 pointer-events-none group-hover:border-[#F26B1D]/40",
                    isHovered 
                      ? "md:scale-150 md:shadow-xl md:border-[#421E2C]/20 opacity-100" 
                      : "md:opacity-40 md:scale-100"
                  )}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                    
                    {/* Hover Overlay Zoom Icon */}
                    <div className={cn(
                      "absolute inset-0 bg-black/30 flex items-center justify-center text-white opacity-0 transition-opacity duration-300",
                      isHovered && "opacity-100"
                    )}>
                      <ZoomIn size={16} className="animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Col 5: Arrow Trigger */}
                <div className="md:col-span-1 flex justify-end">
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                    isHovered 
                      ? "bg-[#421E2C] border-[#421E2C] text-white rotate-45" 
                      : "bg-white border-zinc-200 text-zinc-400"
                  )}>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM MINIMALIST ACTION CALLOUT                          */}
        {/* ========================================================= */}
        <div className={cn(
          "mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <a 
            href="https://wa.me/62816500707"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#421E2C] hover:bg-[#F26B1D] text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded transition-all duration-300 shrink-0 shadow-sm"
          >
            <span>Request VIP Survey</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL DIALOG PREVIEW CONTAINER                  */}
      {/* ========================================================= */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 transition-all duration-500 animate-in fade-in"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button Top-Right */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2.5 rounded-full backdrop-blur transition-colors cursor-pointer"
            onClick={() => setActiveImage(null)}
          >
            <X size={20} />
          </button>

          {/* Image Canvas Box */}
          <div 
            className="relative w-full max-w-4xl h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan modal saat mengklik area dalam gambar
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              fill
              className="object-contain"
              quality={95}
              priority
            />
          </div>

          {/* Bottom Title Label Context */}
          <div className="text-center mt-4 max-w-xl animate-in slide-in-from-bottom-3 duration-300">
            <p className="text-white font-semibold text-sm md:text-base tracking-wide">
              {activeImage.title}
            </p>
            <p className="text-zinc-400 text-xs mt-1">
              Klik di mana saja pada area gelap untuk kembali ke halaman utama.
            </p>
          </div>
        </div>
      )}

    </section>
  );
}