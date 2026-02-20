"use client";

import { motion } from "framer-motion";
import { Bot, Plug, Workflow } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Ready-to-Go Bot",
    description:
      "Pre-configured Open Claw bot deployed to your server. Connect your tools in one click and start automating.",
  },
  {
    icon: Plug,
    title: "Full Integration Setup",
    description:
      "We connect Notion, Slack, Telegram, CRM, Google Workspace, and more. Securely, on your infrastructure.",
  },
  {
    icon: Workflow,
    title: "Custom Automation Workflows",
    description:
      "Tailored automation pipelines for your specific business processes. Your rules, your data, our expertise.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function SolutionSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            We Handle Everything
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            From deployment to integrations — you get a working AI assistant
            without touching a single config file.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group p-8 rounded-2xl glass border border-white/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <sol.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {sol.title}
              </h3>
              <p className="text-zinc-400">{sol.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
