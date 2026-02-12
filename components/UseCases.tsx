"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, BarChart3, LayoutGrid, Calculator, Megaphone, Users } from "lucide-react";

const professions = [
  {
    id: "lawyers",
    label: "Lawyers",
    Icon: Scale,
    automations: [
      "Contract review and key clause extraction",
      "Legal research summaries and case briefs",
      "Compliance tracking and deadline reminders",
      "Client communication drafts and follow-ups",
    ],
    timeSaved: "10+ hrs/week",
  },
  {
    id: "analysts",
    label: "Business Analysts",
    Icon: BarChart3,
    automations: [
      "Data synthesis from multiple sources (decks, DBs, spreadsheets)",
      "Report generation and executive summaries",
      "Competitive analysis and market snapshots",
      "Dashboard summaries and KPI briefings",
    ],
    timeSaved: "15+ hrs/week",
  },
  {
    id: "pm",
    label: "Product Managers",
    Icon: LayoutGrid,
    automations: [
      "Sprint planning and backlog summaries from Jira",
      "Release notes and changelog generation",
      "Stakeholder updates and status reports",
      "Feature prioritization and roadmap drafts",
    ],
    timeSaved: "8+ hrs/week",
  },
  {
    id: "finance",
    label: "Accountants / Finance",
    Icon: Calculator,
    automations: [
      "Invoice processing and data extraction",
      "Financial report summaries and variance analysis",
      "Tax document analysis and checklist generation",
      "Expense categorization and audit trails",
    ],
    timeSaved: "12+ hrs/week",
  },
  {
    id: "marketing",
    label: "Marketing / Sales",
    Icon: Megaphone,
    automations: [
      "Lead qualification and scoring from CRM",
      "Content generation and social copy",
      "Social media scheduling and campaign briefs",
      "CRM data enrichment and contact summaries",
    ],
    timeSaved: "10+ hrs/week",
  },
  {
    id: "hr",
    label: "HR Managers",
    Icon: Users,
    automations: [
      "Resume screening and shortlist summaries",
      "Onboarding checklists and welcome packs",
      "Policy document Q&A and employee guides",
      "Employee feedback analysis and themes",
    ],
    timeSaved: "6+ hrs/week",
  },
];

export default function UseCases() {
  const [activeId, setActiveId] = useState(professions[0].id);
  const active = professions.find((p) => p.id === activeId)!;

  return (
    <section id="use-cases" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Built for Your Role
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Same powerful AI, tuned for what you do every day. Pick your
            profession and see what we automate.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {professions.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeId === p.id
                  ? "bg-primary text-white"
                  : "glass text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <p.Icon className="w-4 h-4" />
              {p.label}
            </button>
          ))}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl glass border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <active.Icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-2xl text-white">
                  {active.label}
                </h3>
                <p className="text-accent font-medium text-sm">
                  Time saved: {active.timeSaved}
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {active.automations.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
