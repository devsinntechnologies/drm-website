"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import Button from "@/components/ui/Button";

const openings = [
  {
    title: "Sales executive — POS & ERP",
    location: "Lahore · On-site",
    type: "Full-time",
    desc: "Help retailers discover DigiNizam. Demo-driven sales with existing inbound leads.",
  },
  {
    title: "Implementation specialist",
    location: "Lahore · Hybrid",
    type: "Full-time",
    desc: "Onboard new clients, configure POS workflows, and train store teams.",
  },
  {
    title: "Support engineer (L1)",
    location: "Remote · Pakistan",
    type: "Full-time",
    desc: "Resolve client tickets, document issues, and coordinate with product team.",
  },
];

const perks = [
  "Competitive salary & growth path",
  "Hands-on product training",
  "Work with 500+ retail brands",
  "Collaborative engineering culture",
];

export default function HiringPageContent() {
  return (
    <main className="bg-background">
      <PageHero
        label="Careers"
        title={
          <>
            Build retail software that <span className="text-primary">matters</span>
          </>
        }
        description="Join DigiNizam by Devsinn—help businesses across Pakistan run smarter with modern POS and ERP."
      />

      <SectionShell tone="surface">
        <SectionHeader
          align="center"
          label="Open roles"
          title="Current openings"
          description="Don't see a fit? Send your CV—we're always looking for talented people."
        />
        <div className="space-y-4 max-w-3xl mx-auto">
          {openings.map((job, idx) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-2xl border border-surface-border bg-background p-5 sm:p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="type-card-title text-foreground mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 text-xs text-muted mb-3">
                    <span className="inline-flex items-center gap-1">
                      <FiMapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiBriefcase className="w-3.5 h-3.5" /> {job.type}
                    </span>
                  </div>
                  <p className="type-body text-muted">{job.desc}</p>
                </div>
                <Button href="/contact" variant="secondary" size="sm" className="shrink-0">
                  Apply
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <SectionHeader
            label="Life at DigiNizam"
            title="Why work with us"
            description="We're a product team focused on real retail problems—not slide decks."
            className="mb-0"
          />
          <ul className="space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm text-muted">
                <FiClock className="w-4 h-4 text-primary shrink-0" />
                {perk}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Send your resume to{" "}
          <Link href="mailto:careers@diginizam.com" className="text-primary font-semibold hover:underline">
            careers@diginizam.com
          </Link>
        </p>
      </SectionShell>

      <SiteCTA title="Ready to apply?" description="Contact us with your CV and the role you're interested in." />
    </main>
  );
}
