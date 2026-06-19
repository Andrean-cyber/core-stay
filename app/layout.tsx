import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
import Navbar from "@/components/sections/Navbar"
import Footer from "@/components/sections/Footer" // Kita akan buat ini
import Script from "next/script"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CoreStay - Cluster Guest House",
  description: "Satu-satunya Cluster Guest House di Malang",
  icons: {
    icon: "/icon.ico", // Sesuaikan dengan nama file di folder public
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      {/* PERBAIKAN: Menambahkan antialiased untuk render font yang lebih bersih di mobile */}
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* PERBAIKAN: Memastikan layout dasar flex-col mengunci luapan lebar */}
          <div className={cn('flex', 'min-h-screen', 'flex-col', 'w-full', 'overflow-x-hidden')}>
            <Navbar />
            {/* PERBAIKAN: Mengunci elemen main agar tidak ikut melar */}
            <main className="flex-1 w-full max-w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}