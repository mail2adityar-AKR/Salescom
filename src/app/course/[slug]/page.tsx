"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Target, TrendingUp, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";

const courseData: Record<string, { title: string; desc: string; icon: any; curriculum: string[] }> = {
  b2b: {
    title: "B2B High Ticket Sales",
    desc: "Master the long-form sales cycle for enterprise deals. Navigate multi-stakeholder corporate environments and close multi-million dollar contracts.",
    icon: Target,
    curriculum: ["Enterprise Prospecting", "Stakeholder Mapping", "Proposal Engineering", "C-Level Negotiation"],
  },
  b2c: {
    title: "B2C Closing Techniques",
    desc: "High-speed closing frameworks for individual consumers. Master emotional triggers and fast-decision psychology.",
    icon: Zap,
    curriculum: ["One-Call Closing", "Emotional Triggers", "Scarcity Frameworks", "Trust Building"],
  },
  objection: {
    title: "Objection Handling",
    desc: "Transform 'I'll think about it' into 'Where do I sign?'. Learn to use pushback as a catalyst for closing.",
    icon: ShieldCheck,
    curriculum: ["The Pivot Method", "Reframing Logic", "Addressing Pricing Fears", "The Silence Strategy"],
  },
  scripts: {
    title: "Sales Scripts",
    desc: "Our field-tested repository of high-conversion scripts for cold calls, LinkedIn outreach, and discovery sessions.",
    icon: Award,
    curriculum: ["The 30-Second Hook", "Discovery Questioning", "The Closing Sequence", "Follow-up Automation"],
  },
  pipeline: {
    title: "Pipeline System",
    desc: "Build a predictable, infinite revenue engine. Stop chasing leads and start managing flow.",
    icon: TrendingUp,
    curriculum: ["Lead Velocity Matrix", "CRM Optimization", "Automated Outreach", "Conversion Analytics"],
  },
  branding: {
    title: "Personal Branding",
    desc: "Position yourself as the only logical choice. Build an authority brand that attracts high-ticket deals to you.",
    icon: CheckCircle2,
    curriculum: ["Authority Content Strategy", "LinkedIn Positioning", "The Expert Flywheel", "Attraction Marketing"],
  },
};

export default function SubCoursePage() {
  const { slug } = useParams();
  const course = courseData[slug as string];

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link href="/">
          <Button variant="outline" className="rounded-full">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-48 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Academy
        </Link>

        <motion.div {...fadeInUp}>
          <div className="w-20 h-20 rounded-3xl bg-purple-500/10 flex items-center justify-center mb-10 border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <course.icon className="w-10 h-10 text-purple-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-gradient">
            {course.title}
          </h1>
          
          <p className="text-2xl text-gray-400 mb-16 leading-relaxed">
            {course.desc}
          </p>
        </motion.div>

        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 tracking-tight text-white/50 uppercase text-sm">Core Curriculum</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {course.curriculum.map((item, i) => (
              <Card key={i} className="glass-card border-white/5 group hover:border-purple-500/30 transition-all">
                <CardContent className="p-8 flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="glass-card p-16 rounded-[4rem] border-purple-500/30 bg-hero-gradient text-center"
        >
           <h2 className="text-4xl font-bold mb-6">Ready to Master {course.title}?</h2>
           <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
             Join the elite rank of high-ticket closers and transform your career trajectory today.
           </p>
           <Link href="/checkout">
            <Button size="lg" className="rounded-full px-12 py-8 text-2xl bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/30 group">
              Enroll Now
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
           </Link>
        </motion.div>
      </div>
    </div>
  );
}
