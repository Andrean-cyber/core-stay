"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Pilihan Unit", href: "#explore" },
  { name: "Lokasi Strategis", href: "#location" },
  { name: "Daftar Harga", href: "#pricing" },
  { name: "Tanya Jawab (FAQ)", href: "#faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, and auto-close if the
  // viewport grows back to desktop width (e.g. rotating a tablet).
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const whatsappUrl = "https://wa.me/62816500707?text=Halo%20The%20Osborn%20Living,%20saya%20tertarik%20dengan%20Villa%20dan%20ingin%20konsultasi%20mengenai%20unit%20ini.";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out border-b font-sans",
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md border-[#421E2C]/10 shadow-sm"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1380px] items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:h-20 lg:px-8">

          {/* Logo dengan Logic Invert */}
          <a href="#" onClick={closeMobileMenu} className="relative z-[60] block shrink-0">
            <div className="relative h-8 w-[120px] sm:h-9 sm:w-[135px] md:h-10 md:w-[150px] lg:w-[165px]">
              <Image
                src="/Logo.png"
                alt="The Osborn Living"
                fill
                priority
                className={cn(
                  "object-contain object-left transition-all duration-500",
                  // Jika tidak scroll dan menu tertutup (transparan), logo jadi putih.
                  !isScrolled && !isMobileMenuOpen ? "brightness-0 invert" : "brightness-100 invert-0"
                )}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden md:flex items-center gap-6 transition-colors duration-500",
            isScrolled ? "text-[#421E2C]/70" : "text-white/80"
          )}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative py-1 text-[10px] lg:text-[10.5px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#421E2C]",
                  isScrolled ? "hover:text-[#421E2C]" : "hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-[10px] lg:text-[10.5px] font-bold uppercase tracking-[0.18em] transition-all duration-300 active:scale-95",
                isScrolled
                  ? "border-[#421E2C] text-[#421E2C] hover:bg-[#421E2C] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#421E2C]"
              )}
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            className={cn(
              "relative z-[60] p-2 md:hidden transition-colors",
              isScrolled || isMobileMenuOpen ? "text-[#421E2C]" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        onClick={closeMobileMenu}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile Menu Panel */}
      <nav
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-0 z-50 origin-top bg-white shadow-xl transition-all duration-300 ease-out md:hidden",
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        {/* spacer matching the header height, with an explicit close button in-panel */}
        <div className="relative flex h-16 items-center justify-end px-4 sm:h-[72px] sm:px-6">
          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Tutup menu"
            className="rounded-full p-1.5 text-[#421E2C]/60 transition-colors hover:bg-[#421E2C]/5 hover:text-[#421E2C]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col px-6 pb-8 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="border-b border-[#421E2C]/10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#421E2C]/80 transition-colors hover:text-[#421E2C]"
            >
              {link.name}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-[#421E2C] px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#421E2C] transition-all duration-300 hover:bg-[#421E2C] hover:text-white active:scale-95"
          >
            <span>Hubungi Kami</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </nav>
    </>
  );
}
