"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, HeadphonesIcon, CheckCircle, AlertCircle } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "Your data stays yours" },
  { icon: Zap, text: "Live in days, not weeks" },
  { icon: HeadphonesIcon, text: "Support when you need it" },
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong");
        return;
      }
      setStatus("success");
      setEmail("");
      setMessage("Thanks! We'll be in touch soon.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="cta" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Stop Configuring.
            <br />
            <span className="gradient-text">Start Automating.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Leave the API keys and config files to us. Get a working AI
            assistant connected to your tools in days.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3.5 rounded-xl bg-primary hover:bg-indigo-600 text-white font-semibold transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Get Started"}
            </button>
          </form>
          {message && (
            <p
              className={`flex items-center justify-center gap-2 text-sm mb-6 ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
              )}
              {message}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-8 text-zinc-500 text-sm">
            {trustBadges.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <b.icon className="w-4 h-4 text-primary" />
                {b.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
