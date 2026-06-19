"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Compass } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={cn('bg-[#421E2C]', 'text-[#E2D8CC]', 'pt-16', 'pb-8', 'px-6', 'md:px-12', 'lg:px-16', 'relative', 'overflow-hidden')}>
      {/* BACKGROUND DECORATIVE ACCENT */}
      <div className={cn('absolute', 'inset-0', 'bg-[radial-gradient(#E67E22_1px,transparent_1px)]', '[background-size:24px_24px]', 'opacity-[0.025]', 'pointer-events-none')} />

      <div className={cn('mx-auto', 'w-full', 'max-w-[1360px]', 'relative', 'z-10')}>

        {/* ========================================================= */}
        {/* TOP ROW: BRANDING & CALL TO ACTION                        */}
        {/* ========================================================= */}
        <div className={cn('flex', 'flex-col', 'lg:flex-row', 'justify-between', 'items-start', 'lg:items-center', 'gap-8', 'pb-12', 'border-b', 'border-[#E2D8CC]/10')}>
          <div className={cn('space-y-3', 'max-w-xl')}>
            <div className={cn('flex', 'items-center', 'gap-3')}>
              {/* LOGO IMAGE */}
              <Image
                src="/Logo-white.png"
                alt="Core Stay Logo"
                width={160}
                height={48}
                className={cn('h-10', 'w-auto', 'object-contain')}
                priority
              />
            </div>
            <p className={cn('text-zinc-300/70', 'font-light', 'text-xs', 'md:text-sm', 'leading-relaxed')}>
              Cluster Guest House ekslusif dengan kemewahan disempurnakan dengan lokasi strategis untuk peminat tinggi.
            </p>
          </div>

          <div className={cn('w-full', 'lg:w-auto', 'flex', 'flex-col', 'sm:flex-row', 'gap-4', 'shrink-0')}>
            <a
              href="https://wa.me/62816500707"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex', 'items-center', 'justify-center', 'gap-2',
                'bg-[#E67E22]', 'text-white', 'hover:bg-[#D35400]',
                'font-bold', 'text-xs', 'px-6', 'py-3.5', 'rounded-xl',
                'transition-all', 'shadow-md', 'active:scale-95'
              )}
            >
              <Compass size={14} />
              <span>Private Consultation</span>
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MIDDLE ROW: CUSTOM RESTORED NAVIGATION LINK GRID         */}
        {/* ========================================================= */}
        <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-4', 'gap-10', 'py-12', 'border-b', 'border-[#E2D8CC]/10')}>

          {/* Column 1: Core Navigation */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#F39C12]')}>
              Navigasi
            </h4>
            <ul className={cn('space-y-2.5', 'text-zinc-300/70', 'text-xs', 'font-light')}>
              <li><Link href="#explore" className={cn('hover:text-[#E67E22]', 'transition-colors')}>Pilihan Unit</Link></li>
              <li><Link href="#location" className={cn('hover:text-[#E67E22]', 'transition-colors')}>Lokasi Strategis</Link></li>
              <li><Link href="#pricing" className={cn('hover:text-[#E67E22]', 'transition-colors')}>Daftar Harga</Link></li>
            </ul>
          </div>

          {/* Column 2: Management & Care */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#F39C12]')}>
              Layanan
            </h4>
            <ul className={cn('space-y-2.5', 'text-zinc-300/70', 'text-xs', 'font-light')}>
              <li><Link href="#explore" className={cn('hover:text-[#E67E22]', 'transition-colors')}>Manajemen Villa</Link></li>
              <li><Link href="#faq" className={cn('hover:text-[#E67E22]', 'transition-colors')}>Pertanyaan (FAQ)</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#F39C12]')}>
              Hubungi Kami
            </h4>
            <ul className={cn('space-y-3', 'text-zinc-300/70', 'text-xs', 'font-light', 'leading-relaxed')}>
              <li className={cn('flex', 'items-center', 'gap-2.5', 'hover:text-[#E67E22]', 'transition-colors')}>
                <Phone size={13} className="text-[#E67E22]" />
                <a href="tel:+62816500707">+62 816-500-707</a>
              </li>
              <li className={cn('flex', 'items-center', 'gap-2.5', 'hover:text-[#E67E22]', 'transition-colors')}>
                <Mail size={13} className="text-[#E67E22]" />
                <a href="mailto:rekaastaventura@gmail.com">rekaastaventura@gmail.com</a>
              </li>
              <li className={cn('flex', 'items-start', 'gap-2.5')}>
                <MapPin size={14} className="text-[#E67E22] shrink-0 mt-0.5" />
                <span>Polehan, Kota Malang, Jawa Timur</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media Presence */}
          <div className="space-y-4">
            <h4 className={cn('font-semibold', 'text-xs', 'tracking-[0.2em]', 'text-[#F39C12]')}>
              Media Sosial
            </h4>
            <div className={cn('flex', 'items-center', 'gap-4', 'text-zinc-300/60', 'pt-1')}>
              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/corestayofficial.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn('hover:text-[#E67E22]', 'transition-colors')} 
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              {/* Facebook Link */}
              <a 
                href="https://www.facebook.com/profile.php?id=61589529388905" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn('hover:text-[#E67E22]', 'transition-colors')} 
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>

              {/* Youtube Link */}
              <a 
                href="https://youtube.com/shorts/f8JHUE7Tb2I?si=Z_hhSCFMDY9spRts" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={cn('hover:text-[#E67E22]', 'transition-colors')} 
                aria-label="Youtube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: COPYRIGHT & SCROLL TO TOP                     */}
        {/* ========================================================= */}
        <div className={cn('pt-8', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-4', 'text-center', 'sm:text-left')}>
          <p className={cn('text-zinc-400/80', 'text-[11px]', 'font-light', 'tracking-wide')}>
            &copy; 2026 Core Stay. Luxury Property Developer. All rights reserved.
          </p>

          {/* Back To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className={cn('group', 'flex', 'items-center', 'gap-2', 'text-zinc-400', 'hover:text-[#E67E22]', 'transition-colors', 'text-[11px]', 'tracking-widest')}
          >
            <span>Back to top</span>
            <div className={cn('p-1.5', 'border', 'border-zinc-500/30', 'group-hover:border-[#E67E22]', 'group-hover:bg-[#E67E22]/5', 'rounded-lg', 'transition-all')}>
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}