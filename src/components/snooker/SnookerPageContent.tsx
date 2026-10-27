"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import SectionCopy from "@/components/common/SectionCopy";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import type { FaqItem } from "@/lib/seo";
import {
  FiMonitor,
  FiGrid,
  FiClock,
  FiUsers,
  FiCreditCard,
  FiPercent,
  FiFileText,
  FiShield,
  FiBell,
  FiMapPin,
  FiSettings,
  FiAward,
} from "react-icons/fi";

const CORE_MODULES = [
  { n: 1, title: "Dashboard", desc: "Real-time overview of tables, active sessions, sales, expenses, profit, cash, credit, staff activity, and key KPIs.", icon: <FiMonitor /> },
  { n: 2, title: "Table Management", desc: "Manage snooker/pool tables, table type, availability, reservations, maintenance, live status, and table-specific pricing.", icon: <FiGrid /> },
  { n: 3, title: "Single Game Billing", desc: "Flat-rate billing for a standard Single Game, with configurable pricing.", icon: <FiCreditCard /> },
  { n: 4, title: "Double Game Billing", desc: "Separate configurable flat-rate billing for Double Game sessions.", icon: <FiCreditCard /> },
  { n: 5, title: "Century Timer", desc: "Time-based billing with Start, Pause, Resume, Stop, per-minute pricing, minimum duration, and rounding rules.", icon: <FiClock /> },
  { n: 6, title: "Session Management", desc: "Complete table session from start to finish, payment, closure, customer linking, and session history.", icon: <FiMonitor /> },
  { n: 7, title: "Customer Management", desc: "Lightweight CRM with contact details, visit history, spending, notes, and credit balance.", icon: <FiUsers /> },
  { n: 8, title: "Credit / Udhar Management", desc: "Udhar sales, limits, recoveries, partial payments, write-offs, outstanding balances, and statements.", icon: <FiCreditCard /> },
  { n: 9, title: "Discount Management", desc: "Fixed or percentage discounts with mandatory reasons, approval limits, and complete discount history.", icon: <FiPercent /> },
  { n: 10, title: "Expense Management", desc: "Rent, salaries, electricity, repairs, cleaning, and other club expenses with categories and approval.", icon: <FiFileText /> },
  { n: 11, title: "Daily Opening", desc: "Start the business day with opening cash, cashier, opening time, and business date.", icon: <FiClock /> },
  { n: 12, title: "Daily Closing", desc: "End-of-day cash reconciliation: expected vs actual cash, variance, and manager approval.", icon: <FiFileText /> },
  { n: 13, title: "Reports & Analytics", desc: "Sales, profit, expenses, credit, discounts, cash flow, customers, tables, staff, branches, and audit reports.", icon: <FiFileText /> },
  { n: 14, title: "Staff Management", desc: "Employee profiles, roles, branch assignments, joining dates, contact information, and employment status.", icon: <FiUsers /> },
  { n: 15, title: "User Roles", desc: "Owner, Manager, Cashier, Accountant, Viewer, and Super Admin assigned to system users.", icon: <FiShield /> },
  { n: 16, title: "Permissions / RBAC", desc: "View, Create, Edit, Delete, and Approve permissions module-by-module and role-by-role.", icon: <FiShield /> },
  { n: 17, title: "Settings & Configuration", desc: "Review game rates, club details and the configuration controls available in your setup. Confirm backup arrangements separately before rollout.", icon: <FiSettings /> },
  { n: 18, title: "Audit Logs", desc: "Review the history and records available for changes and session activity. Confirm retention, access and audit requirements for the selected setup.", icon: <FiFileText /> },
  { n: 19, title: "Notifications", desc: "Alerts for overdue credit, cash discrepancies, large discounts, maintenance issues, and pending closings.", icon: <FiBell /> },
  { n: 20, title: "Branch Management", desc: "Multiple club locations with separate tables, employees, pricing, hours, settings, and consolidated reporting.", icon: <FiMapPin /> },
  { n: 21, title: "SaaS Administration", desc: "Platform Super Admin for onboarding clubs, tenant status, support access, usage, and platform configuration.", icon: <FiSettings /> },
];

const FUTURE_MODULES = [
  { n: 22, title: "Club subscription administration", desc: "Planned administration functionality. The current commercial process remains a demo, requirements discussion and agreed pricing. Online payment integration is unavailable." },
  { n: 23, title: "Tournament Management", desc: "Create tournaments/leagues, register players, generate brackets, schedule tables, record scores, standings, and prize pools." },
  { n: 24, title: "Membership System", desc: "Paid membership tiers with special pricing, validity periods, member benefits, QR membership cards, and renewals." },
  { n: 25, title: "Loyalty Programme", desc: "Customer reward points, redemption rules, loyalty levels, expiry policies, and loyalty reporting." },
  { n: 26, title: "Online table booking", desc: "Planned booking functionality. Online reservations and deposits are outside the current club billing scope. Online payment integration is unavailable." },
];

const snookerFaqs: FaqItem[] = [
  {
    q: "How does snooker club software calculate table-session charges?",
    a: "A snooker club can bill a game at a configured fixed rate or calculate a timed session from its duration and rate. DigiNizam shows Single Game, Double Game and timed Century workflows. Review the table rates, pause behaviour, minimum duration and rounding supported by your club setup.",
  },
  {
    q: "Which DigiNizam snooker modules are available now and which are planned?",
    a: "The core workflow shown here covers table selection, game type, session, bill and receipt. Review the available management functions in the demo. Subscription administration, tournaments, memberships, loyalty and online table booking are roadmap items, not currently offered as delivered features on this page.",
  },
];

const FLOW = [
  "Table Selection",
  "Game Type",
  "Start Session",
  "Timer / Game",
  "Finish Session",
  "Discount",
  "Cash / Udhar",
  "Receipt",
  "Table Available",
];

export default function SnookerPageContent() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        label="Snooker POS"
        title="Snooker Club Software for Table Sessions & Billing"
        description="Move from table selection to game type, session, bill and receipt. Review Single Game, Double Game and timed Century billing for your club configuration."
      />

      <SectionCopy label="Overview" title="What Is Snooker Club Management Software?">
        <p>
          Snooker club software connects table selection, game sessions and billing.
          DigiNizam&rsquo;s club workflow moves from choosing a table and game type to ending the
          session, recording payment and issuing a receipt. Review game rates and timing rules in
          the live demo.
        </p>
      </SectionCopy>

      <SectionShell glow>
        <SectionHeader
          align="center"
          label="Daily operational flow"
          title="From table selection to receipt"
          description="The core POS path clubs run all day. Pricing is configurable per branch and, for Century tables, per table."
        />
        <ol className="flex flex-wrap justify-center gap-2">
          {FLOW.map((step, index) => (
            <li
              key={step}
              className="rounded-full border border-surface-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground"
            >
              {index + 1}. {step}
            </li>
          ))}
        </ol>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { title: "Single Game", desc: "Fixed price. Configurable per branch." },
            { title: "Double Game", desc: "Separate flat rate for doubles." },
            { title: "Century", desc: "Per-minute timer with pause, minimum duration, and rounding." },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="background">
        <SectionHeader
          align="center"
          label="Club workflows"
          title="Club Billing and Management Workflows"
          description="The session workflow connects table selection, game type, billing and receipt. Review the management screens and permissions available in your selected club setup during the demo."
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_MODULES.map((module, index) => (
            <motion.article
              key={module.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="rounded-2xl border border-surface-border bg-surface p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {module.icon}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Module {module.n}</p>
              <h3 className="mt-1 font-semibold text-foreground">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{module.desc}</p>
            </motion.article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          align="center"
          label="Roadmap"
          title="Planned Modules"
          description="These modules are planned and are not available to enable now. Future availability and scope have not been confirmed."
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {FUTURE_MODULES.map((module) => (
            <article key={module.title} className="rounded-2xl border border-surface-border bg-surface p-5">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <FiAward />
                <p className="text-[11px] font-bold uppercase tracking-wider">Planned</p>
              </div>
              <h3 className="font-semibold text-foreground">{module.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{module.desc}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionCopy label="Your setup" title="Discuss Your Club Setup" reverse>
        <p>
          Snooker clubs and pool halls in Pakistan can review table-session billing and receipts
          with DigiNizam. Confirm game types, timing rules and the club configuration before
          rollout.
        </p>
        <IndustryContextLinks featuresLabel="DigiNizam platform features" />
      </SectionCopy>

      <SeoFaq
        label="Snooker club software"
        title="Snooker club software questions"
        description="Direct answers for common snooker club billing questions."
        items={snookerFaqs}
      />

      <SiteCTA
        title="Review DigiNizam for Your Snooker Club"
        description="Book a demo to review table selection, session billing and receipts for your club. Pricing is discussed after the demo, once requirements are understood."
        primaryCtaLabel="Book a Demo"
      />
    </div>
  );
}
