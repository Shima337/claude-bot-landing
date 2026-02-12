"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Solutions", href: "#solutions" },
    { label: "Integrations", href: "#integrations" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#cta" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link
              href="#"
              className="font-display font-bold text-xl text-white"
            >
              ClaudeBot
            </Link>
            <p className="mt-3 text-zinc-500 text-sm max-w-xs">
              Your AI that actually works — connected to your tools, deployed
              for you.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.Product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-zinc-500 text-sm">
          © {new Date().getFullYear()} ClaudeBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
