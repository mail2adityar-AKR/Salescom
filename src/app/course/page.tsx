"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight, Zap, Target, TrendingUp, ShieldCheck, Award, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";

export default function CoursePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const sections = [
    { title: "B2B High Ticket Sales", link: "/course/b2b", icon: Target },
    { title: "B2C Closing Techniques", link: "/course/b2c", icon: Zap },
    { title: "Objection Handling", link: "/course/objection", icon: ShieldCheck },
    { title: "Sales Scripts", link: "/course/scripts", icon: Award },
    { title: "Pipeline System", link: "/course/pipeline", icon: TrendingUp },
    { title: "Personal Branding", link: "/course/branding", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight tracking-tight text-gradient"
          >
            Explore the Sales System
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select a specialized module to master. Each stage is designed for high-performance execution.
          </p>
        </div>

        {/* HUB GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {sections.map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={item.link}>
                <Card className="glass-card h-full hover:border-purple-500/50 hover:bg-white/5 transition-all group cursor-pointer relative overflow-hidden p-1">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <CardContent className="p-10 flex flex-col h-full relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform group-hover:bg-purple-500 group-hover:text-white transition-all">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                      <div className="mt-auto flex items-center text-sm font-semibold text-purple-400 group-hover:gap-2 transition-all">
                        Explore Module <ChevronRight className="w-4 h-4" />
                      </div>
                   </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE / WHAT'S INSIDE */}
        <div className="text-center mb-20">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">The 20-Day Execution Roadmap</h2>
           <p className="text-gray-400 text-lg">Every module follows our proven day-by-day implementation system.</p>
        </div>

        <div className="glass-card rounded-[3rem] p-12 border-purple-500/20 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award className="w-32 h-32 text-purple-500" />
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                "Foundation & Targeting",
                "Discovery & Authority",
                "Pitch & Objections",
                "Closing & Execution"
              ].map((week, i) => (
                <div key={i} className="flex flex-col gap-3">
                   <div className="text-xs font-bold text-purple-500 uppercase tracking-widest">Week 0{i+1}</div>
                   <div className="text-lg font-bold text-white">{week}</div>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: `${(i + 1) * 25}%` }} />
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* FINAL HUB CTA */}
        <motion.div 
          {...fadeInUp}
          className="mt-32 text-center"
        >
          <Link href="/checkout">
            <Button size="lg" className="rounded-full px-12 py-8 text-2xl bg-white text-black hover:bg-gray-200 shadow-2xl shadow-white/10 group">
              Start Full Program
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
          <p className="mt-6 text-gray-500 font-medium italic">Instant Access to all 6 modules + 20-day roadmap</p>
        </motion.div>

        <FAQSection />
      </div>
    </div>
  );
}
