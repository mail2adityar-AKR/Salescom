"use client";

import { motion } from "framer-motion";
import { Info, Target, Award, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-8"
        >
          <Info className="w-4 h-4" />
          <span>Our Story</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-gradient"
        >
          About Salescom
        </motion.h1>

        <motion.div {...fadeInUp} className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Salescom is built for experienced sales professionals who want to move
            beyond average deals and start closing high-ticket opportunities. 
            We bridge the gap between "working hard" and "closing elite."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              desc: "To empower sales professionals with the psychological frameworks needed to navigate multi-million dollar deals."
            },
            {
              icon: Award,
              title: "Our Impact",
              desc: "Over 2,500 students have transformed their closing rates, contributing to over ₹500Cr in total deals closed."
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              {...fadeInUp} 
              transition={{ delay: i * 0.2 }}
              className="glass-card p-10 rounded-[2.5rem]"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
           <ShieldCheck className="w-16 h-16 text-purple-500/20 absolute -top-4 -right-4" />
           <h2 className="text-3xl font-bold mb-6 relative z-10">Real-World Strategies</h2>
           <p className="text-gray-400 text-lg relative z-10 max-w-2xl mx-auto">
             This platform focuses on real-world selling strategies across both B2B
             and B2C environments. We don't teach theory—we teach what works in the trenches.
           </p>
        </motion.div>
      </div>
    </div>
  );
}
