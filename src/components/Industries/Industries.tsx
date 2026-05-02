import React from "react";

const Industries = () => {
  const features = [
    {
      title: "Point of Sale (POS)",
      desc: "Manage billing, orders, payments, and customer experience from one smart restaurant POS system.",
      icon: "💻",
    },
    {
      title: "Supply Chain",
      desc: "Track inventory, vendors, stock levels, and kitchen supplies with real-time updates.",
      icon: "📦",
    },
    {
      title: "Production Management",
      desc: "Monitor kitchen workflows and improve restaurant operations with better efficiency.",
      icon: "⚙️",
    },
    {
      title: "Accounts & Finance",
      desc: "Handle restaurant expenses, reports, invoices, and financial management easily.",
      icon: "💳",
    },
    {
      title: "Customer Loyalty",
      desc: "Build customer relationships using rewards, loyalty programs, and CRM tools.",
      icon: "⭐",
    },
    {
      title: "Sales & Delivery",
      desc: "Manage online orders, takeaway, and delivery operations from a single dashboard.",
      icon: "🚚",
    },
    {
      title: "Kitchen Display System (KDS)",
      desc: "Send live orders directly to kitchen screens to reduce paper tickets and speed up preparation.",
      icon: "🖥️",
    },
    {
      title: "Table & Reservation Management",
      desc: "Manage table bookings, seating plans, and customer reservations in real-time.",
      icon: "🪑",
    },
    {
      title: "Barcode & Billing Scanner",
      desc: "Scan product/barcode items for faster billing and accurate order processing.",
      icon: "📊",
    },
    {
      title: "Printer Integration",
      desc: "Automatically print receipts, kitchen orders, and invoices directly from POS system.",
      icon: "🖨️",
    },
    {
      title: "Staff Management System",
      desc: "Assign roles, track shifts, attendance, and performance of restaurant staff.",
      icon: "👨‍🍳",
    },
    {
      title: "Vendor & Supplier Management",
      desc: "Manage physical suppliers, purchase orders, and raw material deliveries efficiently.",
      icon: "🚚",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-tr from-red-200 via-orange-100 to-orange-100 text-foreground py-24 px-4 md:px-8">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-primary">
          Restaurant
        </h1>

        <p className="mt-6 text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          Our smart restaurant ERP solution helps restaurants simplify orders,
          manage inventory, improve customer experience, and grow business with
          one powerful cloud platform.
        </p>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <img
            src="/restaurantservice.jpg"
            alt="Restaurant ERP"
            className="w-full h-[260px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="max-w-7xl mx-auto mt-28 text-center">
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          Our All-in-One
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
          Restaurant ERP Solution
        </h2>
        <p className="mt-5 text-foreground/70 max-w-2xl mx-auto">
          Powerful tools designed to streamline restaurant operations,
          improve productivity, and deliver a better dining experience.
        </p>
      </div>

      {/* 🚀 PREMIUM FEATURE CARDS */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group rounded-3xl p-8 bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 overflow-hidden"
          >

            {/* Glow background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-primary/10 via-transparent to-orange-200/20 blur-2xl" />

            {/* floating glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative z-10">

              {/* ICON */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-all duration-300">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 group-hover:text-foreground/90 transition-all duration-300">
                {feature.desc}
              </p>

              {/* underline bar */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-500 rounded-full" />

            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-32">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-5xl font-black">
            Transform Your Restaurant Business
          </h2>

          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Digitize your restaurant operations with our modern ERP platform
            and provide a seamless experience to your customers.
          </p>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all duration-300">
            Book Free Demo
          </button>

        </div>
      </div>

    </section>
  );
};

export default Industries;