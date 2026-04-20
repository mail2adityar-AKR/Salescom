"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, CreditCard, Lock, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 relative z-10">
        {/* ORDER SUMMARY */}
        <motion.div {...fadeInUp}>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Complete Your Enrollment</h1>
          <p className="text-gray-400 mb-10 text-lg">You're one step away from joining the elite 1% of high-ticket closers.</p>
          
          <Card className="glass-card mb-8 border-purple-500/20">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">Salescom Academy Pass</h3>
                  <p className="text-gray-500 text-sm">Full Lifetime Access</p>
                </div>
                <div className="text-2xl font-bold">₹4,999</div>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "All 6 Masterclass Modules",
                  "20-Day Execution System",
                  "Elite Sales Script Library",
                  "Private Community Access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center font-bold text-xl">
                 <span>Total Amount</span>
                 <span className="text-purple-400">₹4,999</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center gap-4 text-gray-500 text-sm">
             <ShieldCheck className="w-5 h-5 text-green-500" />
             100% Money-Back Guarantee if not satisfied within 7 days.
          </div>
        </motion.div>

        {/* PAYMENT ACTION */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <Card className="bg-white/5 border-white/10 p-10 rounded-[3rem] text-center shadow-2xl shadow-purple-500/10">
             <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto mb-8">
                <CreditCard className="w-8 h-8 text-white" />
             </div>
             <h2 className="text-2xl font-bold mb-4">Secure Checkout</h2>
             <p className="text-gray-400 mb-8">Choose your preferred payment method via Razorpay.</p>
             
             <Button size="lg" className="w-full rounded-2xl py-8 text-xl bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/30 mb-6 flex items-center justify-center gap-3">
               Pay Now
               <Zap className="w-5 h-5 fill-current" />
             </Button>

             <div className="flex items-center justify-center gap-6 opacity-30 grayscale mb-8">
                <Image src="/logo.png" alt="Payment Method" width={40} height={40} className="invert" />
                <Lock className="w-6 h-6" />
                <span className="font-bold text-xs">RAZORPAY SECURE</span>
             </div>

             <p className="text-xs text-gray-500 leading-relaxed px-4">
                By completing your purchase, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
             </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
