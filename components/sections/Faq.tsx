"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, MessageSquare, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqItems = [
    {
      question: "Apakah ada promo yang tersedia?",
      answer: "Ya, saat ini tersedia promo eksklusif peluncuran unit baru. Anda berhak mendapatkan potongan langsung harga perdana, skema cicilan lunak internal, serta bonus opsi furnitur lengkap (fully furnished) untuk unit pilihan Anda."
    },
    {
      question: "Di mana lokasi tepatnya Core Stay?",
      answer: "Corestay berada di lokasi strategis pusat kota malang. Hanya berjarak sekitar 2 menit dari Lapangan Rampal Kota Malang dan memiliki akses langsung yang sangat mudah menuju rute wisata utama."
    },
    {
      question: "Bagaimana cara mendapatkan brosur dan pricelist?",
      answer: "Anda dapat mengunduh berkas e-brochure resmi, peta kavling, serta rincian kalkulasi harga terbaru secara instan dengan menghubungi representatif penjualan kami melalui tautan asisten WhatsApp resmi di halaman ini."
    },
    {
      question: "Berapa jumlah kamar tidur yang tersedia?",
      answer: "10 Kamar tidur untuk menunjang kepuasan pelanggan"
    },
    {
      question: "Bagaimana mekanisme pengelolaan jika saya tinggal di luar kota?",
      answer: "Kami menerapkan sistem 100% Hands-off Management. Seluruh aspek pemeliharaan fisik guest house, operasional harian, tata kelola kebersihan, hingga strategi pemasaran penyewaan ditangani sepenuhnya oleh Operator Guest Profesional. Investor menerima laporan berkala pembagian hasil secara berkala dan transparan."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16 w-full relative border-t border-zinc-100"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        
        {/* ========================================================= */}
        {/* ASYMMETRIC LAYOUT CONTAINER                               */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          


                  <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">General Inquiry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Pahami <span className="text-[#F26B1D]">Setiap Detailnya </span>
          </h2>
          <p className="text-zinc-500 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Kami merangkum poin-poin krusial terkait aspek legalitas, lokasi strategis, dan keunggulan sistem tata kelola investasi pasif di The Osborn Living.
          </p>
        </div>

          {/* RIGHT COLUMN: REFINED MINIMALIST LINES ACCORDION (8 Columns) */}
          <div className={cn(
            "lg:col-span-8 border-t border-zinc-200 transition-all duration-1000 delay-200 ease-out",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="divide-y divide-zinc-200">
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="group transition-colors duration-300"
                  >
                    {/* Accordion Toggle Header */}
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between py-6 text-left gap-6 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className={cn(
                        "text-sm md:text-base font-semibold tracking-wide transition-colors duration-200",
                        isOpen ? "text-[#F26B1D]" : "text-[#421E2C] group-hover:text-zinc-900"
                      )}>
                        {item.question}
                      </span>
                      
                      {/* Minimalist Micro Border Box Arrow */}
                      <div className={cn(
                        "w-7 h-7 rounded border border-zinc-200 flex items-center justify-center shrink-0 text-[#421E2C] bg-white transition-all duration-300",
                        isOpen && "rotate-180 bg-[#421E2C] border-[#421E2C] text-white"
                      )}>
                        <ChevronDown size={14} />
                      </div>
                    </button>

                    {/* Expandable Body Panel */}
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <p className="pb-6 text-zinc-500 font-light text-xs md:text-sm leading-relaxed max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile / Fallback Assistance Bottom Callout */}
            <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50/70 p-4 rounded-xl">
              <div className="flex items-center gap-2.5 text-xs text-zinc-500 text-center sm:text-left">
                <MessageSquare size={14} className="text-[#F26B1D] shrink-0" />
                <span>Membutuhkan simulasi perhitungan legalitas atau skema kredit khusus?</span>
              </div>
              <a 
                href="https://wa.me/62816500707"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#421E2C] hover:text-[#F26B1D] underline tracking-wider uppercase transition-colors whitespace-nowrap shrink-0"
              >
                Hubungi Investment Officer
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}