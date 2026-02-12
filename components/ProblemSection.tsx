"use client";

import { motion } from "framer-motion";
import { Key, Terminal, FileJson, Wrench, Frown, Smile } from "lucide-react";

const painPoints = [
  {
    icon: Key,
    title: "Finding API keys and tokens",
    description:
      "Notion integration token, Slack app credentials, CRM API keys — each service has its own setup maze.",
  },
  {
    icon: Terminal,
    title: "Installing dependencies",
    description:
      "Node.js, Python, MCP servers, environment variables. One wrong step and nothing works.",
  },
  {
    icon: FileJson,
    title: "Configuring JSON and servers",
    description:
      "Edit config files, deploy to a server or keep your machine running 24/7. Easy to break, hard to maintain.",
  },
  {
    icon: Wrench,
    title: "Maintaining everything yourself",
    description:
      "Updates, security patches, and debugging when integrations break. Your time is worth more.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemSection() {
  return (
    <section id="problems" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Setting Up AI Shouldn&apos;t Be This Hard
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Most people give up before their bot ever runs. We fix that.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl glass border border-red-500/20"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
              <Frown className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                Doing it yourself
              </h3>
              <p className="text-zinc-400 text-sm">
                Hours of docs, broken configs, and still no bot that talks to
                your Notion or Slack. Frustrating.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl glass border border-primary/40"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
              <Smile className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                With ClaudeBot
              </h3>
              <p className="text-zinc-400 text-sm">
                We deploy a ready bot, connect your tools securely, and you start
                automating from day one. No config files.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-6 rounded-2xl glass hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-zinc-400">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
