"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is my data secure?",
    a: "Yes. We deploy on your infrastructure when possible, and we never store your API keys or business data on our servers. All connections use encryption and follow best practices.",
  },
  {
    q: "How long does setup take?",
    a: "Typically 1–3 business days for Starter and Professional. We handle Notion, Slack, CRM, and other integrations for you. Enterprise setups are customized and may take a bit longer.",
  },
  {
    q: "What tools can you connect?",
    a: "Notion, Slack, Telegram, HubSpot, Salesforce, Google Workspace, Jira, GitHub, and many more. If you use it for work, we can usually integrate it. Ask us for a specific tool.",
  },
  {
    q: "Do I need to run anything on my computer?",
    a: "No. We deploy the bot on a server (yours or ours), so it runs 24/7. You just use Slack, Telegram, or the web interface — no local setup required.",
  },
  {
    q: "What if I need a custom workflow?",
    a: "Professional and Enterprise plans include custom automation workflows. We design pipelines around your processes (e.g. lead scoring, report generation, approval flows) and wire them to your tools.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans cancel at the end of the billing period. We’ll help you export any configs or data if you switch later.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl glass border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-white">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-zinc-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
