"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  BadgePercent,
  CalendarDays,
  Banknote,
  Sparkles
} from "lucide-react";

/* ─────────────────────────────────────────────
   DATA — dari brosur Core Stay (foto referensi)
───────────────────────────────────────────── */
const TIERS = [
  {
    label: "Low Season",
    months: 2,
    monthlyIncome: 26_720_000,
    total: 53_440_000,
    color: "#C9A882",
    barW: "20%",
  },
  {
    label: "Shoulder Season",
    months: 3,
    monthlyIncome: 33_400_000,
    total: 100_200_000,
    color: "#B07040",
    barW: "40%",
  },
  {
    label: "High Season",
    months: 4,
    monthlyIncome: 46_760_000,
    total: 187_040_000,
    color: "#E67A40",
    barW: "65%",
  },
  {
    label: "Peak Season",
    months: 3,
    monthlyIncome: 60_120_000,
    total: 180_360_000,
    color: "#F26B1D",
    barW: "100%",
  },
];

const NETT_PROFIT = 521_040_000;

const fmt = (n: number) =>
  "Rp " +
  n
    .toLocaleString("id-ID")
    .replace(/\./g, ".")
    .replace(",", ".");

/* ─────────────────────────────────────────────
   COUNTER HOOK
───────────────────────────────────────────── */
function useCountUp(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function PassiveIncome() {
  const [isVisible, setIsVisible] = useState(false);
  const [barsIn, setBarsIn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setBarsIn(true), 300);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const displayProfit = useCountUp(NETT_PROFIT, isVisible, 2000);

  return (
    <section
      ref={sectionRef}
      id="investasi"
      className="bg-white w-full overflow-hidden py-20 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">

        {/* ── HEADER ── */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">PROFIT INVESTMENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Biarkan properti Anda <span className="text-[#F26B1D]">Bekerja</span> Untuk Anda
          </h2>
          <p className="text-zinc-500 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Simulasi pendapatan tahunan Cluster Guest House— dihitung transparan per tier musim.
          </p>
        </div>

        

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

          {/* ── LEFT: TIER BREAKDOWN ── */}
          <div
            className={cn(
              "space-y-4 transition-all duration-700 delay-100 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            {/* Column labels */}
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-300">
                Tier Musim
              </span>
              <div className="flex gap-8 md:gap-14">
                <span className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-300">
                  / Bulan
                </span>
                <span className="text-[9px] font-black tracking-[0.2em] uppercase text-zinc-300 hidden sm:block">
                  Total
                </span>
              </div>
            </div>

            {/* Tier rows */}
            {TIERS.map((tier, idx) => (
              <div
                key={idx}
                style={{ transitionDelay: isVisible ? `${150 + idx * 100}ms` : "0ms" }}
                className={cn(
                  "group relative bg-white border border-[#421E2C]/8 rounded-2xl overflow-hidden",
                  "hover:border-[#F26B1D]/30 hover:shadow-md transition-all duration-400 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
              >
                {/* Animated progress fill behind the row */}
                <div
                  className="absolute inset-y-0 left-0 rounded-2xl transition-all duration-[1200ms] ease-out opacity-[0.06]"
                  style={{
                    width: barsIn ? tier.barW : "0%",
                    transitionDelay: `${200 + idx * 150}ms`,
                    backgroundColor: tier.color,
                  }}
                />

                <div className="relative flex items-center justify-between px-5 py-4 gap-4">
                  {/* Left: color dot + label + duration */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="w-3 h-3 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: tier.color }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#421E2C] leading-tight">
                        {tier.label}
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <CalendarDays size={10} className="text-zinc-300" />
                        <span className="text-[10px] text-zinc-400 font-medium">
                          {tier.months} bulan
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: monthly + total */}
                  <div className="flex items-center gap-6 md:gap-14 shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-bold text-[#421E2C]">
                        {fmt(tier.monthlyIncome)}
                      </p>
                      <p className="text-[9px] text-zinc-300 uppercase tracking-wider mt-0.5">
                        per bulan
                      </p>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p
                        className="text-sm font-black"
                        style={{ color: tier.color }}
                      >
                        {fmt(tier.total)}
                      </p>
                      <p className="text-[9px] text-zinc-300 uppercase tracking-wider mt-0.5">
                        subtotal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom thin bar */}
                <div
                  className="h-[3px] transition-all duration-[1200ms] ease-out"
                  style={{
                    width: barsIn ? tier.barW : "0%",
                    transitionDelay: `${200 + idx * 150}ms`,
                    backgroundColor: tier.color,
                  }}
                />
              </div>
            ))}

            {/* NETT PROFIT total row */}
            <div
              style={{ transitionDelay: isVisible ? "650ms" : "0ms" }}
              className={cn(
                "flex items-center justify-between bg-[#421E2C] rounded-2xl px-5 py-5 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F26B1D] flex items-center justify-center shrink-0">
                  <Banknote size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/40">
                    Nett Profit / Tahun
                  </p>
                  <p className="text-[11px] text-white/60 font-light mt-0.5">
                    Akumulasi 12 Bulan — Semua Tier
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl md:text-2xl font-black text-white tabular-nums">
                  Rp{" "}
                  <span className="text-[#F26B1D]">
                    {displayProfit.toLocaleString("id-ID")}
                  </span>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-zinc-300 leading-relaxed px-1 pt-1">
              * Simulasi berbasis skema okupansi brosur resmi Core Stay. Capital gain tahunan belum
              termasuk dalam proyeksi ini.
            </p>
          </div>

          {/* ── RIGHT: STAT CARDS ── */}
          <div
            className={cn(
              "flex flex-col gap-4 transition-all duration-700 delay-200 ease-out",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {/* Big highlight card */}
            <div className="bg-[#421E2C] rounded-3xl p-6 md:p-8 relative overflow-hidden">
              {/* Background texture rings */}
              <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full border border-white/5" />
              <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full border border-white/5" />

              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#F26B1D] mb-1">
                Potensi Keuntungan
              </p>
              <p className="text-[10px] text-white/40 font-light mb-6">
                Per Tahun — Type Medium 3 Room
              </p>

              <div className="space-y-1 mb-6">
                <p className="text-3xl md:text-4xl font-black text-white tabular-nums leading-none">
                  Rp{" "}
                  <span className="text-[#F26B1D]">
                    {displayProfit.toLocaleString("id-ID")}
                  </span>
                </p>
                <p className="text-xs text-white/30 font-light">
                  ≈{" "}
                  <span className="text-white/60 font-medium">
                    Rp {Math.round(NETT_PROFIT / 12).toLocaleString("id-ID")} / bulan
                  </span>{" "}
                  rata-rata
                </p>
              </div>

              <div className="flex items-center gap-2 text-white/50 text-[10px] font-medium">
                <TrendingUp size={12} className="text-[#F26B1D]" />
                Proyeksi moderat & terukur
              </div>
            </div>

            {/* Stat pills */}
            {[
              {
                icon: <CalendarDays size={15} />,
                label: "Total Bulan Aktif",
                value: "12 Bulan",
                sub: "Low → Peak Season",
              },
              {
                icon: <BadgePercent size={15} />,
                label: "ROI Estimasi",
                value: "~18–22%",
                sub: "Dari harga beli unit",
              },
              {
                icon: <TrendingUp size={15} />,
                label: "Peak Monthly Income",
                value: "Rp 60.120.000",
                sub: "3 bulan peak season",
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{ transitionDelay: isVisible ? `${400 + i * 80}ms` : "0ms" }}
                className={cn(
                  "flex items-center gap-4 bg-white border border-[#421E2C]/8 rounded-2xl px-5 py-4",
                  "hover:border-[#F26B1D]/25 hover:shadow-sm transition-all duration-300 group",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="w-9 h-9 rounded-xl bg-[#F26B1D]/8 flex items-center justify-center text-[#F26B1D] shrink-0 group-hover:bg-[#F26B1D] group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-black tracking-[0.15em] uppercase text-zinc-300">
                    {stat.label}
                  </p>
                  <p className="text-sm font-bold text-[#421E2C] mt-0.5">{stat.value}</p>
                  <p className="text-[10px] text-zinc-400 font-light">{stat.sub}</p>
                </div>
              </div>
            ))}

            {/* Legal badge */}
            <div
              style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}
              className={cn(
                "flex items-start gap-3.5 p-4 rounded-2xl bg-[#FBF8F6] border border-[#421E2C]/8 transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <ShieldCheck size={16} className="text-[#F26B1D] shrink-0 mt-0.5" />
              <p className="text-[10px] text-[#421E2C]/60 leading-relaxed font-medium">
                Simulasi dihitung berdasarkan skema okupansi berkala resmi dari brosur{" "}
                <span className="text-[#421E2C] font-bold">Core Stay Cluster Guest House</span>.
              </p>
            </div>

            {/* CTA */}
            <button
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
              className={cn(
                "group flex items-center justify-between bg-[#F26B1D] hover:bg-[#d85e17] text-white rounded-2xl px-5 py-4 transition-all duration-300 cursor-pointer",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <span className="text-sm font-bold tracking-wide">
                Hitung ROI Saya Sekarang
              </span>
              <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
