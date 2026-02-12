"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Send,
  Database,
  Zap,
  Shield,
} from "lucide-react";

const floatingIcons = [
  { Icon: MessageSquare, label: "Slack", x: "10%", y: "20%", delay: 0 },
  { Icon: FileText, label: "Notion", x: "85%", y: "15%", delay: 0.2 },
  { Icon: Send, label: "Telegram", x: "15%", y: "70%", delay: 0.4 },
  { Icon: Database, label: "CRM", x: "80%", y: "65%", delay: 0.1 },
  { Icon: Zap, label: "Automation", x: "50%", y: "10%", delay: 0.3 },
  { Icon: Shield, label: "Secure", x: "75%", y: "85%", delay: 0.5 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.35),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(245,158,11,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(99,102,241,0.2),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Floating integration icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, label, x, y, delay }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 0.4,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { delay: delay + 0.5, duration: 0.5 },
              scale: { delay: delay + 0.5 },
              y: { delay: delay + 1, duration: 4, repeat: Infinity },
            }}
            className="absolute hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl glass text-zinc-400"
            style={{ left: x, top: y }}
          >
            <Icon size={18} />
            <span className="text-xs font-medium">{label}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 hero-headline"
        >
          Your AI That{" "}
          <span className="gradient-text">Actually Works</span>
          <br />
          For You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
        >
          We deploy a fully configured Claude AI assistant connected to your
          tools — Notion, Slack, Telegram, CRM — so you can automate your daily
          workflows without touching a single config file.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#solutions"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary hover:bg-indigo-600 text-white font-semibold transition-colors"
          >
            See How It Works
          </Link>
          <Link
            href="#cta"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl glass border border-white/20 hover:bg-white/10 text-white font-semibold transition-colors"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-zinc-500"
        >
          Trusted by <span className="text-accent font-semibold">200+</span>{" "}
          professionals
        </motion.div>
      </div>
    </section>
  );
}
