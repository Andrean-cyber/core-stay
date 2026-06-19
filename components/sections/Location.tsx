"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mountain, TreePine, Navigation2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const nearbyDestinations = [
  {
    name: "Lapangan Rampal Malang",
    time: "2",
    category: "Kesehatanan & Rekreasi",
    icon: "🏛️",
    image: "/rampal.jpg",
  },
  {
    name: "Tugu Malang",
    time: "3",
    category: "Pusat Kota ",
    icon: "🌿",
    image: "/tugu.jpg",
  },
  {
    name: "Kajoetangan Heritage",
    time: "5",
    category: "Destinasi Keluarga",
    icon: "🎡",
    image: "/kayutangan.jpg",
  },
  {
    name: "Stasiun Malang Kota Baru",
    time: "3",
    category: "Perjalanan",
    icon: "🚗",
    image: "/stasiun.jpg",
  },
];

const geoStrip = [
  {
    label: "Pegunungan Semeru - Kawi",
    sub: "panorama dari rooftop",
    Icon: Mountain,
  },
  {
    label: "Akses tol langsung",
    sub: "Exit TOL Malang",
    Icon: Navigation2,
  },
  {
    label: "Kawasan hijau",
    sub: "60% tutupan vegetasi",
    Icon: TreePine,
  },
];

export default function Location() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="location"
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-16 w-full overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px]">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start mb-12 lg:mb-14"> 


        {/* ── HEADER ── */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">strategic micro-location</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Jantung <span className="text-[#F26B1D]">Kota Wisata</span> Malang
          </h2>
          <p className="text-zinc-500 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Diposisikan di titik paling prestisius Kota Malang — Berada di jantung destinasi favorit, dikelilingi berbagai ikon wisata populer yang selalu ramai pengunjung, menciptakan okupansi tinggi dan peluang income yang terus mengalir.
          </p>
        </div>

          {/* RIGHT CARD */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="relative bg-[#421E2C] rounded-2xl p-7 overflow-hidden">
              <p className="text-[10px] tracking-widest uppercase text-white/35 font-medium mb-1.5">
                Koordinat GPS
              </p>
              {/* Teks koordinat visual disesuaikan dengan posisi presisi dari iframe Core Stay */}
              <p className="text-xl font-light tracking-wide text-[#F9F0EF] mb-1 font-mono">
                7°58’40"S  112°38’55"E
              </p>
              <p className="font-serif italic text-[#F26B1D] text-base mb-6">
                Core Stay
              </p>

              {/* Tautan eksternal yang mengarah ke link maps yang Anda berikan sebelumnya */}
              <Link
                href="https://maps.app.goo.gl/ayvzfsvKwSFoUAoo6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#F26B1D] hover:bg-[#E05C0E] transition-colors rounded-xl px-4 py-3.5"
              >
                <span className="text-sm font-medium text-white">
                  Buka di Google Maps
                </span>
                <MapPin size={16} className="text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* DESTINATION GRID WITH IMAGES */}
        <div
          className={cn(
            "transition-all duration-1000 delay-300 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nearbyDestinations.map((spot, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-2xl overflow-hidden border border-[#F2EDE9]"
              >
                {/* IMAGE */}
                <div className="relative h-48 w-full">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-[#421E2C]/90 via-[#421E2C]/50 to-transparent transition-opacity duration-500",
                    hoveredIndex === idx ? "opacity-100" : "opacity-80"
                  )}
                />

                {/* CONTENT */}
                <div className="absolute bottom-0 p-5 text-white z-10">
                  <p className="text-[10px] tracking-widest uppercase text-white/60 mb-1">
                    {spot.category}
                  </p>
                  <p className="text-sm font-medium leading-snug mb-3">
                    {spot.name}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-lg text-xs">
                    <span className="text-sm font-semibold">{spot.time}</span>
                    <span className="text-[10px] uppercase tracking-wide">
                      menit
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GEO STRIP */}
        <div className="border-t border-[#F2EDE9] mt-12 pt-6 flex flex-wrap gap-6 lg:gap-10">
          {geoStrip.map(({ label, sub, Icon }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Icon size={15} className="text-[#C0A8B0]" />
              <span className="text-[11px] text-[#9B7D88]">
                <strong className="text-[#421E2C] font-medium">
                  {label}
                </strong>{" "}
                — {sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}