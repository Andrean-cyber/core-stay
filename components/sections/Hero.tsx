"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, Stamp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = "transition-all ease-out";

  return (
    <section
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-[#421E2C]",
        "pt-28 pb-20 px-4 md:px-10 lg:px-16 flex items-center"
      )}
    >
      {/* ── Ambient orange bloom, top right — sized as an accent, not a dominant shape ── */}
      <div
        className={cn(
          anim, "duration-[1400ms]",
          "absolute -top-24 right-[-6%] w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] rounded-full pointer-events-none",
          "bg-[radial-gradient(circle_at_50%_50%,#FF8A3D_0%,#F26B1D_40%,transparent_72%)] blur-[70px]",
          isLoaded ? "opacity-50 scale-100" : "opacity-0 scale-75"
        )}
      />
      {/* second smaller bloom, lower left, to balance composition */}
      <div
        className={cn(
          anim, "duration-[1400ms] delay-150",
          "absolute bottom-[-10%] left-[-6%] w-[20vw] h-[20vw] max-w-[260px] max-h-[260px] rounded-full pointer-events-none",
          "bg-[radial-gradient(circle_at_50%_50%,#FFAA63_0%,transparent_72%)] blur-[60px]",
          isLoaded ? "opacity-30 scale-100" : "opacity-0 scale-75"
        )}
      />

      {/* fine grain texture for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#FBF6F0_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="mx-auto w-full max-w-[1320px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-6 items-center">

          {/* ── LEFT: editorial headline block ── */}
          <div className="lg:col-span-7 relative text-center lg:text-left">

            {/* eyebrow — the "only one" claim, treated as a seal/stamp, not a generic badge */}
            <div
              className={cn(
                anim, "duration-700",
                "inline-flex items-center gap-2.5 mb-6",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              )}
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full border-[1.5px] border-[#F26B1D]/60 text-[#F26B1D] rotate-[-8deg]">
                <Stamp size={15} strokeWidth={2} />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#FBF6F0]/70">
                Satu-satunya Cluster Guest House di Malang
              </span>
            </div>

            {/* Headline — sans-serif, scaled like the reference, light weight with one bold/italic accent */}
            <h1
              className={cn(
                anim, "duration-700 delay-100",
                "font-sans text-4xl md:text-6xl text-[#FBF6F0] tracking-tight leading-[1.1]",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
            >
              <span className="font-light">Kini Hadir Peluang Investasi Premium</span>
              <br />
              <span className="font-bold italic text-[#F26B1D]">Di Pusat Kota Malang</span>
            </h1>

            {/* Body copy */}
            <p
              className={cn(
                anim, "duration-700 delay-200",
                "mt-6 text-[#FBF6F0]/65 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Sebuah cluster guest house privat di jantung Malang — Saat yang tepat untuk memiliki property bernilai tinggi dengan kenyamanan maksimal di kawasan terbaik kota malang.
            </p>

            {/* CTA row */}
            <div
              className={cn(
                anim, "duration-700 delay-300",
                "mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4",
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <a
                href="#explore"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#F26B1D] text-[#421E2C] font-bold text-xs px-7 py-3.5 rounded-full shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#FBF6F0] w-full sm:w-auto active:scale-95"
              >
                Lihat Unit Tersedia
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/62816500707?text=Halo%2C%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Cluster%20Guest%20House%20ini."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-[#FBF6F0]/20 text-[#FBF6F0] font-bold text-xs px-7 py-3.5 rounded-full transition-all duration-300 hover:border-[#F26B1D]/50 hover:text-[#F26B1D] w-full sm:w-auto active:scale-95"
              >
                <MessageCircle size={15} />
                Tanya via WhatsApp
              </a>
            </div>

            {/* Quiet fact strip — set as a single horizontal rule with inline data, not a card grid */}
            <div
              className={cn(
                anim, "duration-700 delay-[450ms]",
                "mt-10 pt-6 border-t border-[#FBF6F0]/10",
                "flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-3",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
            >
              {[
                ["4", "unit privat"],
                ["100%", "LEGALITAS AMAN"],
                ["±3'", "ke pusat wisata kota Malang"],
              ].map(([value, label], i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#FBF6F0]">{value}</span>
                  <span className="text-[10px] text-[#FBF6F0]/50 uppercase tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: offset image collage ── */}
          <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[560px] w-full mt-4 lg:mt-0">

            {/* Primary photo — tall, anchored right, deliberately cropped off-frame */}
            <div
              className={cn(
                anim, "duration-[900ms] delay-[250ms]",
                "absolute right-0 top-0 w-[78%] h-[80%] rounded-[28px] overflow-hidden",
                "shadow-[0_40px_70px_-20px_rgba(0,0,0,0.45)]",
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
              )}
            >
              <Image
                src="/hero1.jpg"
                alt="Tampak depan unit Cluster Guest House Malang"
                fill
                priority
                className={cn(
                  "object-cover transition-transform duration-[2200ms] ease-out",
                  isLoaded ? "scale-100" : "scale-110"
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#421E2C]/40 via-transparent to-transparent" />
            </div>

            {/* Secondary photo — small, overlapping bottom-left, breaks the rectangle */}
            <div
              className={cn(
                anim, "duration-[900ms] delay-[400ms]",
                "absolute left-0 bottom-0 w-[58%] h-[42%] rounded-[22px] overflow-hidden border-[5px] border-[#421E2C]",
                "shadow-[0_24px_45px_-15px_rgba(0,0,0,0.4)] z-20",
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
              )}
            >
              <Image
                src="/hero2.webp"
                alt="Interior salah satu unit guest house"
                fill
                className={cn(
                  "object-cover transition-transform duration-[2200ms] ease-out",
                  isLoaded ? "scale-100" : "scale-110"
                )}
              />
            </div>

            {/* Signature element: rotated seal/stamp mark, pinned at the seam between the two photos */}
            <div
              className={cn(
                anim, "duration-700 delay-[600ms]",
                "absolute left-[42%] bottom-[34%] -translate-x-1/2 z-30",
                isLoaded ? "opacity-100 rotate-[-6deg] scale-100" : "opacity-0 rotate-0 scale-75"
              )}
            >
              <div className="relative w-[92px] h-[92px] rounded-full bg-[#F26B1D] border-[3px] border-[#421E2C] shadow-xl flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#421E2C" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="2 3" />
                </svg>
                <div className="text-center px-3">
                  <span className="block text-[#421E2C] text-[10px] font-bold uppercase tracking-[0.1em] leading-tight">
                    No.1
                  </span>
                  <span className="block text-[#421E2C]/80 text-[8px] uppercase tracking-wide leading-tight mt-0.5">
                    di Malang
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
