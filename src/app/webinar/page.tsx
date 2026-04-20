"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Users, Target, ShieldCheck, Zap, ArrowRight, Star, Clock } from "lucide-react";
import { useState } from "react";

export default function WebinarPage() {
  const [registered, setRegistered] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {!registered ? (
          <>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-8"
              >
                <PlayCircle className="w-4 h-4" />
                <span>Live Training Session</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-gradient"
              >
                Free Webinar: Close High-Ticket Deals Consistently
              </motion.h1>
              
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Learn the exact system to close ₹1L+ deals in B2B & B2C without 
                being pushy or salesy.
              </p>
            </div>

            {/* BENEFITS */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: "High-Ticket Strategy", icon: Zap, desc: "Step-by-step roadmap." },
                { title: "Live Case Study", icon: Target, desc: "₹50L deal walkthrough." },
                { title: "Closing Framework", icon: ShieldCheck, desc: "Neuro-sales tactics." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInUp} 
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl text-center border-white/5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* REGISTRATION FORM */}
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.4 }}
              className="glass-card p-10 md:p-16 rounded-[3.5rem] border-purple-500/20 shadow-2xl shadow-purple-500/10 text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Reserve Your Seat</h2>
              <p className="text-gray-400 mb-10">Limited to 100 serious professionals.</p>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input placeholder="Your Name" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                <input placeholder="Your Email" className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                <Button onClick={() => setRegistered(true)} className="rounded-2xl px-10 py-4 bg-purple-600 hover:bg-purple-700 font-bold group">
                  Register Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500">
                 <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    Today at 8:00 PM IST
                 </div>
                 <div className="flex items-center gap-2">
                    <Users className="84/100 joined" />
                    84/100 Seats Filled
                 </div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
             <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                <ShieldCheck className="w-12 h-12 text-green-500" />
             </div>
             <h2 className="text-5xl font-bold mb-6">Registration Confirmed!</h2>
             <p className="text-xl text-gray-400 mb-12">We've sent the joining link to your email. See you at 8:00 PM.</p>
             <Button variant="outline" className="rounded-xl" onClick={() => setRegistered(false)}>
                Invite a Friend
             </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
