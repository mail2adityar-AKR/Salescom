"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    { q: "Who is this course for?", a: "This program is designed for experienced sales professionals, business owners, and consultants who want to close high-ticket deals in B2B and B2C." },
    { q: "Is this suitable for beginners?", a: "No. This is for people who already have basic sales experience and want to increase deal size and conversions." },
    { q: "What makes this different from other courses?", a: "You get a 20-day execution system with real scripts, frameworks, and practical implementation—not just theory." },
    { q: "Will I get scripts and templates?", a: "Yes. You’ll get call scripts, WhatsApp scripts, objection frameworks, and closing templates." },
    { q: "How long will it take to see results?", a: "With consistent execution, most users see improvements within 2–4 weeks." },
    { q: "What happens on the 1:1 strategy call?", a: "We analyze your current sales process, identify gaps, and give you a clear action plan." },
    { q: "Is the call really free?", a: "Yes—but only for qualified applicants. Slots are limited to maintain quality." },
    { q: "Can I reschedule my call?", a: "Yes, you’ll receive a reschedule link after booking." },
    { q: "What results can I expect?", a: "You’ll learn to close high-ticket deals, improve conversions, and build a predictable pipeline." }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
             Common Questions
           </h2>
           <p className="text-gray-500 text-lg">Everything you need to know about the Salescom system.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="border border-white/5 rounded-[2rem] px-8 bg-white/[0.02] hover:bg-white/[0.04] transition-all overflow-hidden"
              >
                <AccordionTrigger className="text-left text-xl font-bold text-white hover:no-underline py-8 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-data-[state=open]:bg-purple-500 group-data-[state=open]:text-white transition-all">
                       <HelpCircle className="w-5 h-5" />
                    </div>
                    {item.q}
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="text-gray-400 pb-8 pl-14 text-lg leading-relaxed max-w-2xl">
                    {item.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
