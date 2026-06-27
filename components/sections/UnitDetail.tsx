"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Layers,
  Maximize2,
  BedDouble,
  Bath,
  Flower2,
  Car,
  FileText,
  Layers2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  FileBadge,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const TABS = [
  { id: "spec", label: "Spesifikasi" },
  { id: "facility", label: "Fasilitas" },
] as const;

type TabId = (typeof TABS)[number]["id"];

const CONTENT: Record<
  TabId,
  {
    images: string[];
    eyebrow: string;
    heading: string;
    body: string;
    rows: { icon: React.ReactNode; label: string; value: string }[];
  }
> = {
  spec: {
    // Ganti / tambah path foto fasad di sini. Urutan = urutan slide.
    images: [
      "/fasad_depan (1).webp",
      "/int1.webp",
      "/int2.webp",
      "/int3.webp",
      "/int4.webp",
      "/int5.webp",
      "/int6.webp",
      "/int7.webp",
      "/int8.webp",
      "/int9.webp",
    ],
    eyebrow: "Exclusive Guest House",
    heading: "Ruang yang dirancang untuk kebutuhan \nlebih baik di masa mendatang.",
    body: "Lobby/recepsionist dan tempat parkir yang luas, cocok untuk keluarga yang menginginkan kenyamanan premium tanpa kompromi.",
    rows: [
      { icon: <Maximize2 size={16} />, label: "Luas Tanah", value: "108 m²" },
      {
        icon: <Layers size={16} />,
        label: "Luas Bangunan",
        value: "255 m²",
      },
      {
        icon: <BedDouble size={16} />,
        label: "Kamar Tidur",
        value: "10 Master Bedrooms",
      },
      {
        icon: <Bath size={16} />,
        label: "Kamar Mandi",
        value: "11 Bathrooms",
      },
    ],
  },
  facility: {
    images: ["/interior (1).webp"],
    eyebrow: "Fasilitas Internal Premium",
    heading: "Kenyamanan resor\ndari dalam.",
    body: "Setiap fasilitas dipilih untuk menghadirkan pengalaman tinggal setara bintang lima.",
    rows: [
      {
        icon: <Car size={16} />,
        label: "Area Parkir",
        value: "2 Mobil + 10 Motor",
      },
      {
        icon: <Flower2 size={16} />,
        label: "Taman Privat",
        value: "Space Exclusive",
      },
    ],
  },
};

const PERKS = [
  {
    icon: <MapPin size={15} />,
    label: "Pusat Kota Malang",
    desc: "Hitungan menit ke pusat kota, sekolah, dan rumah sakit",
    href: "#location",
  },
  {
    icon: <FileText size={15} />,
    label: "Legalitas 100% Aman",
    desc: "Dokumen dan perizinan lengkap, siap transaksi dengan aman",
    href: "#pricing",
  },
  {
    icon: <Layers2 size={15} />,
    label: "Full Furnished",
    desc: "Interior premium lengkap, siap huni atau langsung menghasilkan pasif income",
     href: "#explore",
  },
  {
    icon: <FileBadge size={15} />,
    label: "Support Management",
    desc: "Dikelola oleh tim profesional, optimalkan keuntungan tanpa repot mengurus operasional harian",
    href: "#investasi",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function UnitDetail() {
  const [activeTab, setActiveTab] = useState<TabId>("spec");
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // ── Carousel state ──
  const [slideIndex, setSlideIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const content = CONTENT[activeTab];
  const images = content.images;

  // Reset carousel setiap kali tab berganti
  useEffect(() => {
    setSlideIndex(0);
  }, [activeTab]);

  const goToSlide = (idx: number) => {
    const total = images.length;
    const next = ((idx % total) + total) % total; // wrap-around aman
    setSlideIndex(next);
  };

  const goPrev = () => goToSlide(slideIndex - 1);
  const goNext = () => goToSlide(slideIndex + 1);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 40; // px minimum swipe untuk dianggap geser
    if (touchDeltaX.current > threshold) {
      goPrev();
    } else if (touchDeltaX.current < -threshold) {
      goNext();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // Smooth-scroll ke section lain (mis. "location") tanpa reload
  const handlePerkClick = (href?: string) => {
    if (!href) return;
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="explore"
      ref={sectionRef}
      className="bg-white w-full overflow-hidden py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">

        {/* ── TOP LABEL + HEADING + TABS (CENTERED) ── */}
        <div
          className={cn(
            "flex flex-col items-center text-center w-full max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Badge Atas */}
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">Spesifikasi Unit</span>
          </div>
          
          {/* Judul Utama */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-tight md:leading-none">
            Setiap Detail <span className="text-[#F26B1D]">Dirancang untuk</span> Anda
          </h2>

          {/* Navigasi Segmented Pill Tabs */}
          <div className="flex justify-center w-full mt-6">
            <div className="flex items-center justify-center bg-[#F7F2EE] rounded-full p-1 border border-[#421E2C]/8 mx-auto">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer",
                    activeTab === tab.id
                      ? "bg-[#421E2C] text-white shadow-sm"
                      : "text-[#421E2C]/50 hover:text-[#421E2C]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN GRID: IMAGE LEFT + CONTENT RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 xl:gap-16 items-start">

          {/* ── IMAGE PANEL ── */}
          <div
            className={cn(
              "relative transition-all duration-700 delay-100 ease-out",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            {/* Main image / carousel */}
            <div
              className="relative h-[380px] md:h-[560px] w-full rounded-3xl overflow-hidden group/carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides track */}
              <div
                className="absolute inset-0 flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
              >
                {images.map((src, i) => (
                  <div key={src} className="relative h-full w-full shrink-0 basis-full">
                    <Image
                      src={src}
                      alt={`${content.eyebrow} - foto ${i + 1}`}
                      fill
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#421E2C]/60 via-transparent to-transparent pointer-events-none" />

              {/* Vertical rotated label — signature element */}
              <div className="absolute top-6 left-0 -translate-x-0 z-10">
                <div className="bg-[#F26B1D] px-3 py-2 rounded-r-xl">
                  <span
                    className="block text-[9px] font-black tracking-[0.3em] uppercase text-white"
                    style={{ writingMode: "vertical-lr", letterSpacing: "0.3em" }}
                  >
                    {activeTab === "spec" ? "EXCLUSIVE" : "FASILITAS"}
                  </span>
                </div>
              </div>

              {/* Prev / Next arrows — hanya tampil jika lebih dari 1 foto */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors duration-300 cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/35 transition-colors duration-300 cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Dots indicator */}
              {images.length > 1 && (
                <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goToSlide(i)}
                      aria-label={`Ke foto ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        i === slideIndex
                          ? "w-5 bg-[#F26B1D]"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      )}
                    />
                  ))}
                </div>
              )}

              {/* Bottom floating stat strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <div className="flex gap-3">
                  {[
                    { val: "108", unit: "m²", label: "Luas Tanah" },
                    { val: "255", unit: "m²", label: "Luas Bangunan" },
                    { val: "10", unit: "KT", label: "Kamar Tidur" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center"
                    >
                      <p className="text-white font-black text-lg leading-none">
                        {s.val}
                        <span className="text-[#F26B1D] text-xs ml-0.5">{s.unit}</span>
                      </p>
                      <p className="text-white/60 text-[9px] uppercase tracking-wider mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Below image: perks strip */}
            <div
              className={cn(
                "mt-4 grid grid-cols-2 gap-2.5 transition-all duration-700 delay-300 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              {PERKS.map((p, i) => {
                const isClickable = Boolean(p.href);
                return (
                  <div
                    key={i}
                    role={isClickable ? "button" : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                    onClick={isClickable ? () => handlePerkClick(p.href) : undefined}
                    onKeyDown={
                      isClickable
                        ? (e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handlePerkClick(p.href);
                            }
                          }
                        : undefined
                    }
                    className={cn(
                      "flex items-center gap-3 bg-[#FBF8F6] border border-[#421E2C]/8 rounded-2xl px-3.5 py-3 hover:border-[#F26B1D]/30 transition-colors duration-300 group",
                      isClickable && "cursor-pointer"
                    )}
                  >
                    <div className="shrink-0 w-7 h-7 rounded-xl bg-[#F26B1D]/10 flex items-center justify-center text-[#F26B1D] group-hover:bg-[#F26B1D] group-hover:text-white transition-colors duration-300">
                      {p.icon}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={cn(
                          "text-[11px] font-bold text-[#421E2C] leading-tight truncate",
                          isClickable && "group-hover:text-[#F26B1D] transition-colors duration-300"
                        )}
                      >
                        {p.label}
                      </p>
                      <p className="text-[9px] text-zinc-400 leading-tight mt-0.5 truncate">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── CONTENT PANEL ── */}
          <div
            className={cn(
              "flex flex-col gap-8 transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            {/* Eyebrow + heading + body */}
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#F26B1D] mb-2">
                {content.eyebrow}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#421E2C] leading-snug whitespace-pre-line tracking-tight">
                {content.heading}
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed mt-3 max-w-sm">
                {content.body}
              </p>
            </div>

            {/* Spec rows — horizontal list style */}
            <div className="divide-y divide-[#421E2C]/6">
              {content.rows.map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    transitionDelay: isVisible ? `${300 + idx * 70}ms` : "0ms",
                  }}
                  className={cn(
                    "flex items-center justify-between py-4 group transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  )}
                >
                  {/* Label side */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#421E2C]/5 flex items-center justify-center text-[#421E2C]/50 group-hover:bg-[#F26B1D] group-hover:text-white transition-all duration-300 shrink-0">
                      {row.icon}
                    </div>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {row.label}
                    </span>
                  </div>
                  {/* Value side */}
                  <span className="text-sm font-bold text-[#421E2C] text-right max-w-[180px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-[#421E2C]/8" />
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#421E2C]/30">
                Keistimewaan
              </span>
              <div className="flex-1 h-px bg-[#421E2C]/8" />
            </div>

            {/* CTA strip + legal badge */}
            <div className="space-y-3">
              {/* Legal guarantee */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#421E2C]/[0.04] border border-[#421E2C]/8">
                <ShieldCheck size={18} className="text-[#F26B1D] shrink-0 mt-0.5" />
                <p className="text-xs text-[#421E2C]/70 leading-relaxed font-medium">
                  Seluruh spesifikasi di atas terikat secara legal dalam{" "}
                  <span className="text-[#421E2C] font-bold">MoU jual beli unit</span>{" "}
                  — tidak ada biaya tersembunyi.
                </p>
              </div>

              {/* CTA button */}
              <button className="group w-full flex items-center justify-between bg-[#421E2C] hover:bg-[#5a2a3d] text-white rounded-2xl px-5 py-4 transition-all duration-300 cursor-pointer">
                <span className="text-sm font-bold tracking-wide">
                  Konsultasi & Info Harga
                </span>
                <span className="w-8 h-8 rounded-xl bg-[#F26B1D] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={15} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
