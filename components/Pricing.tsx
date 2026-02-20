"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Crown } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    icon: Zap,
    description: "Get your first bot live in days.",
    features: [
      "1 Open Claw bot",
      "Up to 3 integrations",
      "Email support",
      "Standard deployment",
    ],
    cta: "Get Started",
    href: "#cta",
    featured: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    icon: Crown,
    description: "For teams that automate seriously.",
    features: [
      "Up to 3 bots",
      "Unlimited integrations",
      "Priority support",
      "Custom workflows",
      "Slack + Notion + CRM",
    ],
    cta: "Get Started",
    href: "#cta",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    icon: Building2,
    description: "Dedicated setup and peace of mind.",
    features: [
      "Unlimited bots",
      "Dedicated server option",
      "SLA & onboarding",
      "Custom integrations",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    href: "#cta",
    featured: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            One predictable fee. No hidden setup costs. We handle deployment and
            integrations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              variants={item}
              className={`relative rounded-2xl p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 ${
                tier.featured
                  ? "glass border-2 border-primary bg-primary/5"
                  : "glass border border-white/10"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                  Most popular
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <tier.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-1">
                {tier.name}
              </h3>
              <p className="text-zinc-400 text-sm mb-6">{tier.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-3xl text-white">
                  {tier.price}
                </span>
                <span className="text-zinc-500 text-sm">{tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`block w-full py-3 rounded-xl text-center font-semibold transition-colors ${
                  tier.featured
                    ? "bg-primary hover:bg-indigo-600 text-white"
                    : "glass border border-white/20 hover:bg-white/10 text-white"
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
