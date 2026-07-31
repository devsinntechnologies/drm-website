"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMonitor, FiBox, FiSettings, FiCreditCard, FiUsers, 
  FiSliders, FiTruck, FiMenu, FiMessageSquare, FiCalendar, 
  FiZap, FiLayers, FiTv, FiBriefcase, FiGrid, 
  FiSmartphone, FiSearch, FiCheck 
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  pos: <FiMonitor />,
  scm: <FiBox />,
  production: <FiSettings />,
  finance: <FiCreditCard />,
  hris: <FiUsers />,
  crm: <FiSliders />,
  "sales-order": <FiTruck />,
  recipe: <FiMenu />,
  sms: <FiMessageSquare />,
  reservation: <FiCalendar />,
  queue: <FiZap />,
  erp: <FiLayers />,
  feedo: <FiTv />,
  cando: <FiBriefcase />,
  "cloud-dashboard": <FiGrid />,
  "order-app": <FiSmartphone />,
  "price-checker": <FiSearch />,
};

// Data mapping
const solutionsData = [
  {
    category: "Modules",
    items: [
      {
        id: "pos",
        title: "Point of Sales",
        desc: "A high-performance retail solution designed for rapid transactions and real-time inventory management.",
        features: [
          "Real-time Cloud Sync",
          "Offline Transaction Mode",
          "Multi-payment Support",
          "Barcode & QR Scanning",
          "Digital Receipting",
          "Shift & Drawer Tracking",
          "Automated Tax Calculation",
          "Sales Performance Analytics",
        ],
      },
      {
        id: "scm",
        title: "Supply Chain Management",
        desc: "End-to-end visibility of your logistics network, from procurement to final distribution.",
        features: [
          "Vendor Management",
          "Automated Reordering",
          "Warehouse Optimization",
          "Shipment Tracking",
          "Quality Control Logs",
          "Cost Analytics",
          "Route Planning",
          "Inventory Forecasting",
          "Multi-location Transfers",
        ],
      },
      {
        id: "production",
        title: "Production",
        desc: "Manage your manufacturing floor with precise scheduling and resource allocation tools.",
        features: [
          "Bill of Materials (BOM)",
          "Work Order Management",
          "Machine Maintenance",
          "Labor Allocation",
          "Waste Monitoring",
          "Capacity Planning",
          "Production Logs",
          "Safety Compliance",
        ],
      },
      {
        id: "finance",
        title: "Accounts and Finance",
        desc: "A complete financial suite ensuring accuracy, legal compliance, and deep profitability insights.",
        features: [
          "Double-entry Ledger",
          "Bank Reconciliation",
          "Tax Filing Automation",
          "Profit & Loss Reports",
          "Fixed Asset Tracking",
          "Budgeting Tools",
          "Audit Trail Logs",
          "Multi-currency Support",
        ],
      },
      {
        id: "hris",
        title: "HRIS",
        desc: "Centralize your HR operations from recruitment and onboarding to payroll and retirement.",
        features: [
          "Biometric Attendance",
          "Automated Payroll",
          "Leave Management",
          "Employee Self-Service",
          "Performance Appraisals",
          "Recruitment Pipeline",
          "Document Digital Vault",
          "Benefits Administration",
        ],
      },
      {
        id: "crm",
        title: "CRM",
        desc: "Enhance customer loyalty with a 360-degree view of every client interaction and sales lead.",
        features: [
          "Lead Scoring",
          "Sales Pipeline View",
          "Email Integration",
          "Contact Management",
          "Forecasting Tools",
          "Meeting Scheduler",
          "Support Ticket System",
          "Task Automation",
        ],
      },
      {
        id: "sales-order",
        title: "Sales Order & Delivery",
        desc: "Manage complete order lifecycle from order creation to delivery tracking with real-time updates.",
        features: [
          "Order Creation System",
          "Delivery Tracking",
          "Status Updates in Real-time",
          "Customer Notifications",
          "Driver Assignment",
          "Route Optimization",
          "Order History Logs",
          "Invoice Integration",
        ],
      },
      {
        id: "recipe",
        title: "Recipe Management",
        desc: "Maintain standardized recipes to ensure consistency in food quality and cost control.",
        features: [
          "Ingredient Control",
          "Recipe Costing",
          "Portion Management",
          "Nutritional Tracking",
          "Menu Integration",
          "Auto Cost Updates",
          "Waste Reduction Tracking",
          "Chef Notes System",
        ],
      },
      {
        id: "sms",
        title: "SMS Notifications",
        desc: "Automated messaging system for customer engagement and operational alerts.",
        features: [
          "Order Confirmation SMS",
          "Delivery Updates",
          "Promotional Campaigns",
          "Custom Templates",
          "Bulk Messaging",
          "Real-time Alerts",
          "Scheduled Messages",
          "Delivery Reports",
        ],
      },
      {
        id: "reservation",
        title: "Guest Reservation",
        desc: "Smart table booking system for restaurants with automated scheduling and management.",
        features: [
          "Online Table Booking",
          "Table Availability View",
          "Auto Confirmation",
          "Customer History",
          "Peak Time Management",
          "Waitlist System",
          "SMS Reminders",
          "Reservation Analytics",
        ],
      },
      {
        id: "queue",
        title: "Quick Queue Management",
        desc: "Reduce waiting time with intelligent queue handling for walk-in customers.",
        features: [
          "Digital Queue System",
          "Token Generation",
          "Live Queue Status",
          "Estimated Wait Time",
          "Priority Handling",
          "Customer Notifications",
          "Table Allocation Sync",
          "Peak Load Balancing",
        ],
      },
    ],
  },
  {
    category: "Products",
    items: [
      {
        id: "erp",
        title: "Business Expert ERP",
        desc: "A flagship enterprise-grade platform that unifies all departments into a single data source.",
        features: [
          "Unified Data Hub",
          "Modular Scalability",
          "Enterprise Security",
          "Predictive Analytics",
          "Mobile App Access",
          "Third-party API Sync",
          "Custom Report Builder",
          "Role-based Access Control",
        ],
      },
      {
        id: "feedo",
        title: "Feedo",
        desc: "Capture real-time customer sentiment and actionable insights to improve service delivery.",
        features: [
          "Live Survey Engine",
          "Sentiment Analysis",
          "NPS Score Tracking",
          "Instant Alerts",
          "Omni-channel Support",
          "Trend Reporting",
          "Custom Branding",
          "Data Export (CSV/PDF)",
        ],
      },
      {
        id: "cando",
        title: "Task Management (CANDO)",
        desc: "Streamline team collaboration and ensure projects are delivered on time with transparency.",
        features: [
          "Kanban Workflows",
          "Gantt Chart View",
          "Time Tracking",
          "File Attachments",
          "Team Collaboration",
          "Deadline Alerts",
          "Milestone Tracking",
          "Resource Loading",
        ],
      },
      {
        id: "cloud-dashboard",
        title: "Cloud Based Dashboard",
        desc: "A centralized cloud dashboard to monitor all restaurant operations in real-time from anywhere.",
        features: [
          "Real-time Analytics",
          "Multi-location Access",
          "Secure Cloud Storage",
          "Live Performance Metrics",
          "Role-based Dashboard Views",
          "Auto Data Sync",
          "Custom Widgets",
          "Export Reports (PDF/CSV)",
        ],
      },
      {
        id: "order-app",
        title: "Restaurant Order App",
        desc: "A mobile ordering application for customers and staff to simplify order placement and tracking.",
        features: [
          "Mobile Ordering System",
          "Menu Browsing",
          "Order Customization",
          "Live Order Tracking",
          "Push Notifications",
          "QR Code Ordering",
          "Secure Payments",
          "Order History",
        ],
      },
      {
        id: "price-checker",
        title: "Price Checker",
        desc: "A smart in-store tool for customers and staff to quickly check product or menu prices.",
        features: [
          "Barcode Price Lookup",
          "Instant Price Display",
          "Inventory Sync",
          "Discount Visibility",
          "Offline Mode Support",
          "Fast Search Engine",
          "Multi-device Support",
          "POS Integration",
        ],
      },
    ],
  },
];

export default function Products() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen py-10 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Intro */}
        <div className="text-center mb-8">
          <span className="section-label">RMS Capabilities</span>
          <h1 className="text-5xl md:text-6xl font-black text-foreground mt-4 leading-tight tracking-tight">
            Our Modules & <span className="text-primary">Products</span>
          </h1>
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed mt-4 font-semibold">
            Explore the comprehensive suite of tools built to optimize order flows, kitchen routes, fleet dispatch, dynamic pricing, and brand finances.
          </p>
        </div>

        {solutionsData.map((group) => (
          <div key={group.category} className="mb-8">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-px bg-primary" />
              <h2 className="text-3xl font-black text-primary uppercase tracking-widest">
                {group.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {group.items.map((item) => {
                const isHovered = hoveredId === item.id;
                
                return (
                  <motion.section
                    key={item.id}
                    id={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ y: -4 }}
                    className="glass-card bg-surface/50 border-surface-border rounded-3xl transition-all duration-300 hover:bg-white hover:border-primary/25 shadow-lg relative overflow-hidden"
                  >
                    {/* Background glow sweep */}
                    {isHovered && (
                      <div className="absolute inset-0 opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-xl pointer-events-none" />
                    )}

                    <div className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {iconMap[item.id] || <FiLayers />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <span className="text-[9px] font-black uppercase tracking-wider text-primary">
                            RMS {group.category.slice(0, -1)} Option
                          </span>
                        </div>
                      </div>

                      <p className="text-muted mb-8 text-base leading-relaxed font-semibold">
                        {item.desc}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {item.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-4 bg-background border border-surface-border hover:border-primary/20 rounded-xl hover:bg-white transition duration-150 group"
                          >
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <FiCheck className="text-xs" />
                            </span>
                            <span className="text-xs font-bold text-foreground/90 group-hover:text-primary transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}