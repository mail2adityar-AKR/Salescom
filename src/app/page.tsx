"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-center">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 bg-hero-gradient min-h-[80vh] flex flex-col justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20 p-2 bg-white/5">
               <Image src="/logo.png" alt="Salescom" fill className="object-contain" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-gradient"
          >
            Close Bigger Deals <br className="hidden md:block" /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              in B2B & B2C
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced system for experienced sales professionals to increase
            conversions, close high-ticket deals, and grow income.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/course">
              <Button size="lg" className="rounded-full px-12 py-8 text-xl bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/20 group">
                View Course
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS / TRUST */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Students", value: "2,500+", icon: Zap },
              { label: "Deals Closed", value: "₹500Cr+", icon: Target },
              { label: "Success Rate", value: "94%", icon: TrendingUp },
              { label: "Avg. Income Jump", value: "3.5x", icon: ArrowRight },
            ].map((stat, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
