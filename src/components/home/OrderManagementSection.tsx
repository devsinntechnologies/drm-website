"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiShoppingBag, FiMapPin, FiTruck, FiMaximize, FiSmartphone, 
  FiMessageSquare, FiActivity, FiArrowRight, FiCheckCircle 
} from "react-icons/fi";

const OrderManagementSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const sources = [
    { name: "Dine-In", icon: <FiShoppingBag />, desc: "Instantly route dine-in seat orders to POS & Kitchen." },
    { name: "Takeaway", icon: <FiMapPin />, desc: "Queue-free pre-ordering for self-pickup customers." },
    { name: "Delivery", icon: <FiTruck />, desc: "Integrate logistics, assign riders, and calculate delivery charges." },
    { name: "QR Orders", icon: <FiMaximize />, desc: "Scan-and-order directly from the dining table." },
    { name: "Mobile Orders", icon: <FiSmartphone />, desc: "Order on the go via our white-labeled client apps." },
    { name: "WhatsApp Orders", icon: <FiMessageSquare />, desc: "AI chatbot order taking syncs straight to the POS." },
  ];

  const features = [
    "Real-Time Order Tracking",
    "Kitchen Routing & KOT",
    "Dynamic Split Billing",
    "Interactive Table Management",
    "Smart Rider Assignment",
    "Refund & Void Control",
    "Full Order Audit History",
    "Multi Branch Order Sync",
  ];

  const workflowSteps = [
    { title: "Customer Order", status: "Triggered", icon: "🛒", desc: "Customer places order via Web, Mobile, POS, QR or WhatsApp." },
    { title: "Kitchen Routing", status: "KOT Sent", icon: "⚙️", desc: "System auto-generates KOT & routes to correct preparation station." },
    { title: "Preparation", status: "Cooking", icon: "🍳", desc: "Chefs track recipes and timers on the Kitchen Display screen." },
    { title: "Ready", status: "Plated", icon: "🛎️", desc: "Order is packed, matched with bills, and ready for serving/pickup." },
    { title: "Served/Delivered", status: "Complete", icon: "🛵", desc: "Waiter serves table, or delivery rider delivers with real-time tracking." },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <span className="section-label">Order Operations</span>
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-4">
            Advanced <span className="text-primary">Order Management</span>
          </h2>
          <p className="text-muted text-lg font-medium">
            Capture orders from any source and orchestrate them seamlessly through kitchen preparation to the customer's hands.
          </p>
        </div>

        {/* Order Sources Grid */}
        <div className="mb-4">
          <h3 className="text-xl font-black text-foreground mb-4 text-center uppercase tracking-widest text-muted/80">
            Omnichannel Order Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {sources.map((src, idx) => (
              <motion.div
                key={src.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card bg-surface/30 border-surface-border p-6 rounded-2xl flex items-start gap-4 hover:bg-surface hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {src.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-foreground text-base mb-1 group-hover:text-primary transition-colors duration-200">
                    {src.name}
                  </h4>
                  <p className="text-muted text-xs leading-relaxed font-semibold">
                    {src.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-4 max-w-6xl mx-auto">
          <h3 className="text-xl font-black text-foreground mb-4 text-center uppercase tracking-widest text-muted/80">
            Visual Order Lifecycle Workflow
          </h3>

          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-surface-border z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative z-10">
              {workflowSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`glass-card p-6 rounded-3xl text-center cursor-default transition-all duration-300 border ${
                    activeStep === idx 
                      ? "bg-surface border-primary shadow-xl scale-[1.03]" 
                      : "bg-surface/50 border-surface-border"
                  }`}
                  style={{
                    boxShadow: activeStep === idx ? "0 20px 40px rgba(62, 163, 72, 0.08)" : "none"
                  }}
                >
                  <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center text-2.5xl mb-4 transition-all duration-300 border ${
                    activeStep === idx 
                      ? "bg-primary border-primary text-white" 
                      : "bg-surface border-surface-border"
                  }`}>
                    <span className="text-xl">{step.icon}</span>
                  </div>

                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block ${
                    activeStep === idx 
                      ? "bg-primary/20 text-primary" 
                      : "bg-surface-border/50 text-muted"
                  }`}>
                    Step 0{idx + 1} • {step.status}
                  </span>

                  <h4 className="font-extrabold text-foreground text-base mb-1.5">{step.title}</h4>
                  <p className="text-muted text-xs leading-relaxed font-medium">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Highlights List */}
        <div className="max-w-4xl mx-auto bg-surface/30 border border-surface-border rounded-3xl p-4 shadow-xs">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <FiCheckCircle className="text-primary text-lg shrink-0" />
                <span className="font-bold text-foreground/90 text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrderManagementSection;
