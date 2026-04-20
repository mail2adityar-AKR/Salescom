"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle2, ShieldCheck, Users, Zap, ArrowRight, Star, Target, Loader2 } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";

export default function BookCallPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    role: "",
    challenge: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>Limited Strategy Sessions Available</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-gradient"
          >
            Book a Free 1:1 <br className="hidden md:block" /> Sales Strategy Call
          </motion.h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {!submitted 
              ? "In 30 minutes, we’ll identify exactly how you can close bigger deals and increase your revenue. Apply below to unlock the booking calendar."
              : "Application approved! Please select a convenient time for our session below."}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-3xl mx-auto"
            >
              <form onSubmit={handleSubmit} className="glass-card p-10 md:p-16 rounded-[3.5rem] border-purple-500/20 shadow-2xl shadow-purple-500/10">
                <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                   <Zap className="w-8 h-8 text-purple-500" />
                   Quick Application
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input required name="name" onChange={handleChange} placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Work Email</label>
                    <input required type="email" name="email" onChange={handleChange} placeholder="john@company.com" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>
                </div>
                
                <div className="grid gap-6 mb-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">WhatsApp Number</label>
                    <input required name="phone" onChange={handleChange} placeholder="+91 98765 43210" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Primary Challenge</label>
                    <select required name="topic" onChange={handleChange} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all text-gray-400 appearance-none">
                      <option className="bg-black" value="">Select Topic You Need Help With</option>
                      <option className="bg-black" value="b2b">B2B High Ticket Sales</option>
                      <option className="bg-black" value="b2c">B2C Closing Techniques</option>
                      <option className="bg-black" value="objection">Objection Handling</option>
                      <option className="bg-black" value="scripts">Sales Scripts</option>
                      <option className="bg-black" value="pipeline">Pipeline System</option>
                      <option className="bg-black" value="branding">Personal Branding</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Current Role / Business</label>
                    <input required name="role" onChange={handleChange} placeholder="Founder / Sales Head" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Details on your challenge</label>
                    <textarea required name="challenge" onChange={handleChange} rows={4} placeholder="Tell us more about your current sales roadblocks..." className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-purple-500 outline-none transition-all placeholder:text-gray-700 resize-none" />
                  </div>
                </div>

                <Button disabled={isSubmitting} type="submit" className="w-full rounded-2xl py-8 text-xl bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/30 font-bold group">
                  {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                    <>
                      Submit Application & Book Slot
                      <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </Button>

                <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500">
                   <ShieldCheck className="w-4 h-4 text-purple-500" />
                   We review applications to ensure maximum value for both parties.
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card rounded-[4rem] p-2 border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-500/20">
                <div className="bg-white/5 rounded-[3.5rem] p-1 h-[700px] overflow-hidden">
                  <iframe
                    src={`https://calendly.com/YOUR-USERNAME/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`}
                    width="100%"
                    height="100%"
                    className="rounded-[3rem] invert grayscale contrast-[1.2] brightness-[0.8]"
                  ></iframe>
                </div>
                <div className="p-10 text-center flex items-center justify-center gap-12">
                   <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-bold text-gray-400">Application Approved</span>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div className="flex items-center gap-3 text-purple-400 font-bold uppercase text-xs tracking-widest">
                      <Calendar className="w-5 h-5" />
                      Please select your slot
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TRUST SECTION AT BOTTOM */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-60">
           {[
             { title: "Revenue Leaks", icon: Zap, text: "We'll pinpoint exactly where you're losing deals." },
             { title: "Action Plan", icon: Target, text: "A step-by-step roadmap for the next 90 days." },
             { title: "Fix Closing", icon: ShieldCheck, text: "Immediate adjustments to your pitch framework." }
           ].map((item, i) => (
             <div key={i} className="text-center p-6">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/10">
                   <item.icon className="w-5 h-5 text-purple-500" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
             </div>
           ))}
        </div>

        <FAQSection />
      </div>
    </div>
  );
}
