"use client";

import React from "react";

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

      // ✅ NEW MODULES
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

      // ✅ NEW PRODUCTS
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
  return (
    <div className="bg-gradient-to-tr from-red-300 via-orange-200 to-orange-200 min-h-screen py-12 px-6 scroll-smooth transition">
      <div className="max-w-6xl mx-auto">
        {solutionsData.map((group) => (
          <div key={group.category} className="mb-16">
            <h2 className="text-3xl font-extrabold mb-10 text-slate-800 border-l-4 border-blue-600 pl-4">
              {group.category}
            </h2>

            <div className="grid grid-cols-1 gap-12">
              {group.items.map((item) => (
                <section
                  key={item.id}
                  id={item.id}
                  className="bg-olive-300/25 rounded-2xl border-2 border-red-400/60 duration-300 hover:-translate-2.5 transition hover:shadow-black/50 hover:shadow-2xl"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {item.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-4 bg-slate-50 rounded-xl border-2 border-red-200 hover:bg-gray-200 hover:shadow-black/50 hover:shadow-lg transition hover:-translate-1.5 duration-150"
                        >
                          <span className="text-sm font-semibold text-slate-700 ">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}