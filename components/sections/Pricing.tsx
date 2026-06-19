"use client";

import { useEffect, useState } from "react";
import { Check, Sparkles, ShieldCheck, ArrowRight, TrendingUp, Coins, Percent, Landmark, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  // State untuk memilih unit aktif yang ingin ditampilkan di Card Konversi Kanan
  const [selectedUnit, setSelectedUnit] = useState("Unit A-1");

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Data dinamis disesuaikan 100% dengan Gambar Price List Core Stay
  const unitsData = {
    "Unit A-1": { lb: 255, lt: 108, cash: "Rp 2.750.000.000", inhouse1: "Rp 3.025.000.000", dp1: "Rp 907.500.000", cicilan1: "Rp 176.458.333", inhouse2: "Rp 3.300.000.000", dp2: "Rp 990.000.000", cicilan2: "Rp 96.250.000" },
    "Unit A-2": { lb: 255, lt: 108, cash: "Rp 2.925.000.000", inhouse1: "Rp 3.217.500.000", dp1: "Rp 965.250.000", cicilan1: "Rp 187.687.500", inhouse2: "Rp 3.510.000.000", dp2: "Rp 1.053.000.000", cicilan2: "Rp 102.375.000" },
    "Unit A-3": { lb: 255, lt: 108, cash: "Rp 2.925.000.000", inhouse1: "Rp 3.217.500.000", dp1: "Rp 965.250.000", cicilan1: "Rp 187.687.500", inhouse2: "Rp 3.510.000.000", dp2: "Rp 1.053.000.000", cicilan2: "Rp 102.375.000" },
    "Unit A-4": { lb: 255, lt: 111, cash: "Rp 2.925.000.000", inhouse1: "Rp 3.217.500.000", dp1: "Rp 965.250.000", cicilan1: "Rp 187.687.500", inhouse2: "Rp 3.510.000.000", dp2: "Rp 1.053.000.000", cicilan2: "Rp 102.375.000" },
  };

  const investmentMetrics = [
    {
      icon: <Percent size={16} className="text-[#F26B1D]" />,
      label: "Target ROI / Yield Per Tahun",
      value: "11% - 14%",
      desc: "Jauh di atas rata-rata instrumen reksa dana atau deposito"
    },
    {
      icon: <Coins size={16} className="text-[#F26B1D]" />,
      label: "Estimasi Passive Income / Thn",
      value: "Rp 255 Juta+",
      desc: "Proyeksi bersih melalui manajemen pengelolaan sewa properti khusus"
    },
    {
      icon: <TrendingUp size={16} className="text-[#F26B1D]" />,
      label: "Capital Gain Progresif",
      value: "Up to 25%",
      desc: "Kenaikan nilai aset otomatis pasca fase konstruksi selesai"
    }
  ];

  const valueInclusions = [
    "Fully Furnished Premium Interior (Hemat Rp 350 Juta)",
    "Free 1-Year Property & Marketing Management System",
    "Free Seluruh Biaya Notaris, Balik Nama, & Sertifikat",
    "Smart Home Security System Integrated",
    "Hak Akses Fasilitas Premium Private Cluster Guest House"
  ];

  const activeData = unitsData[selectedUnit as keyof typeof unitsData];

  return (
    <section 
      id="pricing" 
      className="bg-white py-20 md:py-28 px-4 md:px-8 lg:px-16 w-full relative border-t border-zinc-100"
    >
      <div className="mx-auto w-full max-w-[1140px]">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: INVESTMENT FOCUS                          */}
        {/* ========================================================= */}
        <div className={cn(
          "mb-16 text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          <div className="inline-flex items-center gap-2 text-[#F26B1D] bg-[#F26B1D]/10 px-3.5 py-1.5 rounded-full mb-4 border border-[#F26B1D]/20">
            <Sparkles size={12} className="animate-pulse" />
            <span className="text-[10px] font-extrabold tracking-widest uppercase">Core Stay — Cluster Guest House</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#421E2C] tracking-tight leading-none">
            Mulai Amankan <span className="text-[#F26B1D]">Arus Kas Pasif</span> Anda
          </h2>
          <p className="text-zinc-500 font-light text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Satu kali penempatan kapital untuk keuntungan finansial yang bekerja terus-menerus. Pilihan unit eksklusif dengan skema pembayaran fleksibel.
          </p>
        </div>

        {/* ========================================================= */}
        {/* FINANCIAL & PRICING SHOWCASE GRID                        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: UNIT SELECTOR & TABULAR PRICE LIST (7 Columns) */}
          <div className={cn(
            "lg:col-span-7 flex flex-col justify-between space-y-6 transition-all duration-1000 delay-200 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          )}>
            
            {/* Unit Price List Grid Selection */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#421E2C] uppercase tracking-widest block border-b border-zinc-100 pb-2">
                Pilih Unit & Daftar Harga (Price List)
              </span>
              
              <div className="flex flex-col gap-3">
                {Object.entries(unitsData).map(([unitName, details]) => (
                  <div 
                    key={unitName}
                    onClick={() => setSelectedUnit(unitName)}
                    className={cn(
                      "flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-all cursor-pointer",
                      selectedUnit === unitName 
                        ? "bg-zinc-50 border-l-4 border-l-[#F26B1D] border-y-[#421E2C]/30 border-r-[#421E2C]/30 shadow-sm" 
                        : "bg-white border-zinc-200 hover:bg-zinc-50/60"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-9 h-9 shadow-sm border rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        selectedUnit === unitName ? "bg-[#421E2C] text-white" : "bg-zinc-50 text-zinc-500"
                      )}>
                        <Building2 size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#421E2C] flex items-center gap-2">
                          {unitName}
                          <span className="text-[10px] px-1.5 py-0.5 bg-zinc-200 text-zinc-700 font-medium rounded">
                            LB: {details.lb} | LT: {details.lt}
                          </span>
                        </h4>
                        <div className="text-[11px] text-zinc-400 mt-1 space-x-2">
                          <span>Inhouse 1Thn: <strong className="text-zinc-600 font-semibold">{details.inhouse1}</strong></span>
                          <span className="hidden sm:inline">•</span>
                          <span>Inhouse 2Thn: <strong className="text-zinc-600 font-semibold">{details.inhouse2}</strong></span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <span className="text-[10px] text-zinc-400 block uppercase font-medium">Cash Price</span>
                      <div className="text-base font-black text-[#F26B1D] tracking-tight font-mono">
                        {details.cash}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Metrics Metrics Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {investmentMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl">
                  <div className="flex items-center gap-2 mb-1">
                    {metric.icon}
                    <h5 className="text-[10px] font-bold text-[#421E2C] truncate">{metric.label}</h5>
                  </div>
                  <p className="text-base font-black text-[#421E2C] font-mono leading-none">{metric.value}</p>
                  <p className="text-[9px] text-zinc-400 font-light mt-1 leading-tight">{metric.desc}</p>
                </div>
              ))}
            </div>

            {/* What is Included List */}
            <div className="space-y-3 pt-2 border-t border-zinc-100">
              <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block">
                All-Inclusive Property Features:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {valueInclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                    <div className="w-4 h-4 rounded-full bg-zinc-100 text-[#421E2C] flex items-center justify-center shrink-0 mt-0.5 border border-zinc-200">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: HIGH-CONTRAST CONVERSION BOX & INSTALLMENT SIMULATION (5 Columns) */}
          <div className={cn(
            "lg:col-span-5 transition-all duration-1000 delay-400 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          )}>
            {/* Box Utama dengan Border Wine Tebal */}
            <div className="border-2 border-[#421E2C] rounded-2xl p-6 md:p-8 bg-white shadow-[0_25px_60px_rgba(66,30,44,0.05)] flex flex-col justify-between h-full relative overflow-hidden">
              
              {/* Top Banner Tag */}
              <div className="absolute top-0 right-0 left-0 bg-[#F26B1D] text-white text-[9px] font-extrabold uppercase tracking-widest py-1.5 text-center">
                🔥 Selected: {selectedUnit} — Update Price List 9 Maret 2026
              </div>

              <div className="space-y-5 pt-4">
                {/* Main Investment Tag */}
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase block">
                    Hard Cash Price
                  </span>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#421E2C] tracking-tight font-sans">
                    {activeData.cash}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-[#F26B1D] text-[10px] font-medium bg-[#F26B1D]/5 px-2 py-0.5 rounded mt-1">
                    <span>Nett Price — Kavling Siap Bangun / Kelola</span>
                  </div>
                </div>

                {/* Installment Scheme Matrix Based on Screenshot */}
                <div className="border-t border-b border-zinc-100 py-3.5 space-y-3">
                  <span className="text-[10px] font-bold text-[#421E2C] uppercase tracking-wider block">
                    Simulasi Inhouse / Cicilan:
                  </span>
                  
                  {/* Option 1: 1 Year */}
                  <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/60 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#421E2C]">Inhouse 1 Tahun</span>
                      <span className="font-mono text-zinc-700 font-semibold">{activeData.inhouse1}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-zinc-500">
                      <span>DP 30%: {activeData.dp1}</span>
                      <span>{activeData.cicilan1} <span className="text-[9px]">/ bln (12x)</span></span>
                    </div>
                  </div>

                  {/* Option 2: 2 Years */}
                  <div className="p-2.5 bg-zinc-50 rounded-lg border border-zinc-200/60 space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#421E2C]">Inhouse 2 Tahun</span>
                      <span className="font-mono text-zinc-700 font-semibold">{activeData.inhouse2}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] text-zinc-500">
                      <span>DP 30%: {activeData.dp2}</span>
                      <span>{activeData.cicilan2} <span className="text-[9px]">/ bln (24x)</span></span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="text-zinc-500 font-light">Registrasi NUP / Booking Fee</span>
                    <span className="font-bold text-[#421E2C] bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">Rp 25.000.000</span>
                  </div>
                </div>

                {/* Short Advisory Text */}
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                  *Pilihan unit bersifat dinamis dan *first-come, first-served*. Nilai cicilan di atas sesuai dengan rilis ketetapan official manajemen SAN Group.
                </p>
              </div>

              {/* Action Button dengan Warna Aksen Merah/Oranye Dominan */}
              <div className="pt-4 mt-4 border-t border-zinc-100">
                <a
                  href="https://wa.me/62816500707" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 bg-[#F26B1D] hover:bg-[#421E2C] text-white font-bold text-xs py-4 rounded-xl shadow-lg shadow-[#F26B1D]/20 transition-all duration-300 w-full text-center active:scale-[0.98]"
                >
                  <span>Amankan {selectedUnit} & Klaim Harga Early-Bird</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center justify-center gap-1.5 mt-3 text-zinc-400 text-[10px]">
                  <ShieldCheck size={12} className="text-[#F26B1D]" />
                  <span>Legalitas Aman & Transparan di Bawah Naungan Notaris</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}