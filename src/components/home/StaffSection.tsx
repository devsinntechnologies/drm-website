"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiUsers, FiCalendar, FiClock, FiDollarSign, 
  FiFileText, FiTrendingUp, FiCheckCircle 
} from "react-icons/fi";

const StaffSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>("Mon");

  const features = [
    { title: "Staff Profiles", desc: "Keep unified records of contacts, wage details, certifications, and compliance logs.", icon: <FiUsers /> },
    { title: "Attendance Tracking", desc: "Support digital shift clock-ins on POS screens with facial verification or secure PINs.", icon: <FiClock /> },
    { title: "Shift Scheduling", desc: "Build scheduling grids and allocate shifts while preventing over-time labor flags.", icon: <FiCalendar /> },
    { title: "Payroll Management", desc: "Automate wage calculations based on attendance, shifts, and leaves.", icon: <FiDollarSign /> },
    { title: "Leave Management", desc: "Staff request time-off on mobile apps; managers review and reallocate shifts instantly.", icon: <FiFileText /> },
    { title: "Performance Monitoring", desc: "Track average order prep speed, table turnovers, tips, and sales volumes.", icon: <FiTrendingUp /> },
  ];

  const schedule = [
    { name: "Sarah Connor", role: "Cashier", shift: "08:00 AM - 04:00 PM", status: "Clocked In" },
    { name: "John Doe", role: "Head Chef", shift: "10:00 AM - 06:00 PM", status: "Clocked In" },
    { name: "Marcus Wright", role: "Waiter", shift: "12:00 PM - 08:00 PM", status: "On Leave" },
    { name: "Kyle Reese", role: "Kitchen Hand", shift: "04:00 PM - 12:00 AM", status: "Scheduled" },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-85 h-85 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          
          {/* Details - Left Side */}
          <div>
            <span className="section-label">Human Capital</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Staff, HR & <span className="text-primary">Shift Scheduling</span>
            </h2>
            <p className="text-muted text-lg mb-8 font-medium">
              Take care of the team that takes care of your guests. Coordinate shifts, track attendance clock-ins, monitor waiter performance metrics, and automate monthly payroll calculations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-base mb-1">{feat.title}</h4>
                    <p className="text-muted text-xs leading-relaxed font-semibold">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Calendar Mockup - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-xl" />

            <div className="relative glass-card rounded-[32px] border border-surface-border/95 bg-white p-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Shift Planning & Attendance</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Weekly Schedule</p>
                </div>
                {/* Days tabs */}
                <div className="flex gap-1 bg-background p-0.5 rounded-lg border border-surface-border">
                  {["Mon", "Tue", "Wed"].map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`px-2.5 py-1 text-[9px] font-black uppercase tracking-wider rounded-md transition-all ${
                        activeDay === day 
                          ? "bg-primary text-white shadow-xs" 
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Roster list */}
              <div className="space-y-3">
                {schedule.map((staff) => (
                  <div key={staff.name} className="p-3.5 border border-surface-border/60 bg-background/30 rounded-xl flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs uppercase">
                        {staff.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">{staff.name}</p>
                        <p className="text-[9px] text-muted font-bold uppercase tracking-wider">{staff.role}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-[10px] text-foreground font-semibold">{staff.shift}</p>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md mt-1.5 inline-block ${
                        staff.status === "Clocked In" 
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
                          : staff.status === "On Leave"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-surface-border text-muted border border-surface-border/60"
                      }`}>{staff.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Attendance metrics simulation */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-dashed border-surface-border">
                <div className="p-3 bg-background/50 border border-surface-border rounded-xl text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-wider mb-1">Labor Cost Ratio</p>
                  <p className="text-lg font-black text-foreground">18.4% <span className="text-[9px] font-bold text-emerald-500">(-1.2%)</span></p>
                </div>
                <div className="p-3 bg-background/50 border border-surface-border rounded-xl text-center">
                  <p className="text-[9px] text-muted font-bold uppercase tracking-wider mb-1">Overtime Hours</p>
                  <p className="text-lg font-black text-foreground">0.0 hrs</p>
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
