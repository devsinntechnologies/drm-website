"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiMonitor, FiPercent, FiSettings, FiFileText, 
  FiGitCommit, FiDollarSign, FiCreditCard, FiCheckCircle, FiTrash2 
} from "react-icons/fi";

const SmartPosSection: React.FC = () => {
  const [discount, setDiscount] = useState(10); // percentage
  const [tax, setTax] = useState(8); // percentage
  const [paymentType, setPaymentType] = useState<"Cash" | "Card" | "Split">("Cash");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Truffle Beef Burger", qty: 2, price: 18.00 },
    { id: 2, name: "Parmesan Truffle Fries", qty: 1, price: 8.50 },
    { id: 3, name: "Fresh Mint Mojito", qty: 2, price: 6.00 },
  ]);

  const features = [
    { title: "Fast Billing", icon: <FiMonitor />, desc: "Execute sales tickets in under 3 taps with keyboard & barcode support." },
    { title: "Touch POS Terminal", icon: <FiSettings />, desc: "Optimized mobile & tablet layout designed for fast-paced service staff." },
    { title: "Multi Terminal Support", icon: <FiGitCommit />, desc: "Deploy multiple billing counters syncing to a single unified inventory." },
    { title: "Discount Management", icon: <FiPercent />, desc: "Easily apply item-wise, percentage, flat, or promotional coupon discounts." },
    { title: "Tax Management", icon: <FiFileText />, desc: "Apply region-specific multi-tier taxes automatically on bill prints." },
    { title: "Split Payments", icon: <FiDollarSign />, desc: "Settle single bills across cash, cards, and custom split combinations." },
  ];

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const discountVal = (subtotal * discount) / 100;
  const taxVal = ((subtotal - discountVal) * tax) / 100;
  const total = subtotal - discountVal + taxVal;

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    }));
  };

  const deleteItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-4 items-center">
          
          {/* Left Details */}
          <div>
            <span className="section-label">Billing Speed</span>
            <h2 className="text-xl md:text-base font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Smart & Intuitive <span className="text-primary">Touch POS System</span>
            </h2>
            <p className="text-muted text-lg mb-4 font-medium">
              Eliminate order bottlenecks. Our fast billing interface works across tablets, computers, and mobile terminals to process orders and settle payments in seconds.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
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

            <div className="mt-4 pt-8 border-t border-surface-border flex gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3EA348]/10 text-[#3EA348] text-xs font-black uppercase tracking-widest rounded-full">
                <FiCheckCircle /> Cash & Card Support
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3EA348]/10 text-[#3EA348] text-xs font-black uppercase tracking-widest rounded-full">
                <FiCheckCircle /> Receipt Printing Sync
              </span>
            </div>
          </div>

          {/* Right Interactive Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative"
          >
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-xl" />

            {/* POS Terminal Card */}
            <div className="relative glass-card rounded-[32px] border border-surface-border/90 bg-white p-6 shadow-2xl">
              
              {/* POS Top Header */}
              <div className="flex justify-between items-center border-b border-surface-border pb-4 mb-4">
                <div>
                  <h4 className="font-black text-foreground text-sm">Terminal #01 (Main Counter)</h4>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Active Cashier: Alex</p>
                </div>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] text-muted font-black tracking-wider uppercase">Cloud Online</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                      className="flex justify-between items-center bg-background/50 border border-surface-border/60 rounded-xl p-3"
                    >
                      <div className="flex-1 min-w-0 pr-2">
                        <p className="font-bold text-foreground text-xs truncate">{item.name}</p>
                        <p className="text-[10px] text-muted font-semibold">{item.price.toFixed(2)} each</p>
                      </div>
                      
                      {/* Qty Adjustment */}
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQty(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-surface-border flex items-center justify-center font-black text-xs hover:border-primary transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-foreground w-4 text-center">{item.qty}</span>
                        <button 
                          onClick={() => updateQty(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-surface-border flex items-center justify-center font-black text-xs hover:border-primary transition-colors"
                        >
                          +
                        </button>
                        
                        <button 
                          onClick={() => deleteItem(item.id)}
                          className="text-red-400 hover:text-red-600 p-1 transition-colors"
                        >
                          <FiTrash2 className="text-sm" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Quick Settings controls */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-surface-border">
                <div>
                  <label className="text-[10px] text-muted font-black tracking-wider uppercase block mb-2">Discount (%)</label>
                  <div className="flex gap-2">
                    {[5, 10, 15].map(d => (
                      <button
                        key={d}
                        onClick={() => setDiscount(d)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition-all ${
                          discount === d 
                            ? "bg-primary border-primary text-white" 
                            : "bg-background border-surface-border text-foreground hover:border-primary"
                        }`}
                      >
                        {d}%
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-muted font-black tracking-wider uppercase block mb-2">Tax Rate (%)</label>
                  <div className="flex gap-2">
                    {[0, 8, 15].map(t => (
                      <button
                        key={t}
                        onClick={() => setTax(t)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-extrabold border transition-all ${
                          tax === t 
                            ? "bg-primary border-primary text-white" 
                            : "bg-background border-surface-border text-foreground hover:border-primary"
                        }`}
                      >
                        {t}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Billing Summary */}
              <div className="space-y-1.5 mt-6 pt-4 border-t border-dashed border-surface-border">
                <div className="flex justify-between text-xs text-muted font-bold">
                  <span>Subtotal:</span>
                  <span>{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-red-500 font-bold">
                  <span>Discount ({discount}%):</span>
                  <span>-{discountVal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted font-bold">
                  <span>Tax ({tax}%):</span>
                  <span>+{taxVal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-black text-foreground pt-1.5">
                  <span>Total Bill:</span>
                  <span className="text-primary">{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {[
                  { name: "Cash", icon: <FiDollarSign /> },
                  { name: "Card", icon: <FiCreditCard /> },
                  { name: "Split", icon: <FiSettings /> },
                ].map(pay => (
                  <button
                    key={pay.name}
                    onClick={() => setPaymentType(pay.name as any)}
                    className={`py-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 font-bold text-xs transition-all ${
                      paymentType === pay.name 
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                        : "bg-background border-surface-border text-foreground hover:border-primary"
                    }`}
                  >
                    <span className="text-lg">{pay.icon}</span>
                    <span>{pay.name}</span>
                  </button>
                ))}
              </div>

              {/* Settle Bill Button */}
              <button 
                onClick={() => alert(`Bill of ${total.toFixed(2)} Settled via ${paymentType}!`)}
                className="w-full mt-4 py-4 rounded-xl bg-primary text-white font-black text-sm hover:bg-primary-hover transition-colors tracking-widest uppercase shadow-lg glow-primary flex items-center justify-center gap-2"
              >
                Settle & Print Receipt 🚀
              </button>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default SmartPosSection;
