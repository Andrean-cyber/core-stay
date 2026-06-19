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
    className="relative w-full border-t border-zinc-100 bg-white py-20 px-4 md:px-8 lg:px-16 md:py-32"
  >
    <div className="mx-auto max-w-[1200px]">

      {/* ========================= */}
      {/* Heading */}
      {/* ========================= */}
      <div
        className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F26B1D]/20 bg-[#F26B1D]/10 px-3.5 py-1.5 text-[#F26B1D]">
          <Sparkles size={12} className="animate-pulse" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
            General Inquiry
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#421E2C] md:text-5xl">
          Pahami{" "}
          <span className="text-[#F26B1D]">
            Setiap Detailnya
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
          Kami merangkum poin-poin krusial terkait legalitas,
          lokasi strategis, serta sistem pengelolaan investasi
          pasif di Core Stay Guest House.
        </p>
      </div>

      {/* ========================= */}
      {/* FAQ */}
      {/* ========================= */}
      <div
        className={cn(
          "mx-auto max-w-4xl transition-all duration-1000 delay-200 ease-out",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">

          <div className="divide-y divide-zinc-200">
            {faqItems.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="group transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-sm font-semibold transition-colors duration-200 md:text-base",
                        isOpen
                          ? "text-[#F26B1D]"
                          : "text-[#421E2C] group-hover:text-black"
                      )}
                    >
                      {item.question}
                    </span>

                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-300",
                        isOpen &&
                          "rotate-180 border-[#421E2C] bg-[#421E2C] text-white"
                      )}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-7 text-zinc-500">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-5">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-3 text-center text-sm text-zinc-500 md:text-left">
                <MessageSquare
                  size={16}
                  className="text-[#F26B1D]"
                />
                <span>
                  Membutuhkan simulasi investasi atau
                  konsultasi langsung dengan tim kami?
                </span>
              </div>

              <a
                href="https://wa.me/62816500707"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#421E2C] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#F26B1D]"
              >
                Hubungi Sekarang
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
);
}