import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salescom | Close Bigger Deals in B2B & B2C",
  description: "Advanced system for experienced sales professionals to increase conversions, close high-ticket deals, and grow income.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} antialiased bg-black text-white selection:bg-purple-500/30`}>
        {/* SHARED NAVBAR */}
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Salescom Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                SALESCOM
              </span>
            </Link>

            <nav className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/course" className="hover:text-white transition-colors">Sales Course</Link>
              <Link href="/webinar" className="hover:text-white transition-colors">Webinar</Link>
              <Link href="/book-call" className="text-purple-400 hover:text-purple-300 transition-colors font-bold">Book a Call</Link>
            </nav>

            <Button className="rounded-full px-6 bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Enroll Now
            </Button>
          </div>
        </header>

        <main>{children}</main>

        {/* SHARED FOOTER */}
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Salescom" width={32} height={32} />
              <span className="font-bold tracking-tighter text-white">SALESCOM</span>
            </div>
            <div className="flex gap-8">
              <div>© 2026 Salescom Academy.</div>
              <Link href="/admin" className="hover:text-white transition opacity-30 hover:opacity-100">Admin Dashboard</Link>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition">Privacy</Link>
              <Link href="#" className="hover:text-white transition">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
