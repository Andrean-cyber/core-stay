"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Home, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#FAFAFA] flex items-center justify-center px-4 md:px-8 relative overflow-hidden font-sans pt-30">
      {/* Background Ambient Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2D8CC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#543420]/5 rounded-full blur-3xl pointer-events-none" />

      <div className={cn(
        "max-w-md w-full text-center space-y-8 transition-all duration-1000 ease-out",
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        
        {/* Large Luxury 404 Badge */}
        <div className="relative inline-block">
          <div className="absolute -top-6 -right-6 text-[#E2D8CC] animate-pulse">
            <Sparkles size={24} />
          </div>
          <h1 className="text-8xl md:text-9xl font-extralight tracking-tighter text-[#543420]/20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center mt-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#543420] bg-white border border-[#543420]/10 px-4 py-2 rounded-full shadow-sm">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Editorial Sales Copy Content */}
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-light text-[#543420] tracking-tight">
            Halaman Tidak <span className="font-semibold italic">Ditemukan</span>
          </h2>
          <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
            Maaf, rute eksklusif yang Anda tuju saat ini belum tersedia atau telah dipindahkan ke alamat plot yang baru.
          </p>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href="/"
            className="group flex items-center justify-center gap-2.5 bg-[#543420] hover:bg-[#432918] text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-[#543420]/10 active:scale-95 w-full sm:w-auto"
          >
            <Home size={14} />
            <span>Kembali ke Home</span>
          </Link>
          
          <a
            href="https://wa.me/62816500160?text=Halo%20The%20Osborn%20Living,%20saya%20mengalami%20kendala%20halaman%20tidak%20ditemukan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-white hover:bg-zinc-50 text-[#543420] border border-[#543420]/10 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm active:scale-95 w-full sm:w-auto"
          >
            <HelpCircle size={14} />
            <span>Hubungi Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}