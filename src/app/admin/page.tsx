"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Mail, Phone, Tag, Briefcase, Calendar, ChevronRight, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Lead {
  name: string;
  email: string;
  phone: string;
  topic: string;
  role: string;
  timestamp: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/leads")
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Leads Dashboard</h1>
            <p className="text-gray-500">Manage and track your strategy call applications.</p>
          </div>
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input placeholder="Search leads..." className="pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 transition-all text-sm w-64" />
             </div>
             <Button variant="outline" className="rounded-xl border-white/10 gap-2">
                <Download className="w-4 h-4" />
                Export CSV
             </Button>
          </div>
        </header>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
           {[
             { label: "Total Leads", value: leads.length, icon: Users, color: "text-blue-400" },
             { label: "New Today", value: "2", icon: Calendar, color: "text-purple-400" },
             { label: "Conversion Rate", value: "12%", icon: ChevronRight, color: "text-green-400" },
             { label: "Avg. Deal Size", value: "₹2.5L", icon: Tag, color: "text-yellow-400" }
           ].map((stat, i) => (
             <Card key={i} className="glass-card border-white/5">
                <CardContent className="p-6">
                   <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                         <stat.icon className="w-5 h-5" />
                      </div>
                   </div>
                   <div className="text-2xl font-bold mb-1">{stat.value}</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* LEADS TABLE */}
        <Card className="glass-card border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Name</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Email</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Phone</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Topic</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Role</th>
                  <th className="p-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="p-20 text-center text-gray-500">
                       <div className="flex flex-col items-center gap-4">
                          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                          Loading leads...
                       </div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-20 text-center text-gray-500">No leads found.</td>
                  </tr>
                ) : (
                  leads.map((lead, i) => (
                    <motion.tr 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={i} 
                      className="border-b border-white/5 hover:bg-white/[0.01] transition-colors"
                    >
                      <td className="p-6">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-xs">
                               {lead.name.charAt(0)}
                            </div>
                            <span className="font-medium">{lead.name}</span>
                         </div>
                      </td>
                      <td className="p-6 text-gray-400 text-sm">
                         <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                         </div>
                      </td>
                      <td className="p-6 text-gray-400 text-sm">
                         <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                         </div>
                      </td>
                      <td className="p-6">
                         <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider border border-purple-500/20">
                            {lead.topic}
                         </span>
                      </td>
                      <td className="p-6 text-gray-400 text-sm">
                         <div className="flex items-center gap-2">
                            <Briefcase className="w-3 h-3" />
                            {lead.role}
                         </div>
                      </td>
                      <td className="p-6">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs text-green-500 font-medium">Active</span>
                         </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
