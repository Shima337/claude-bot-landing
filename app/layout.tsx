import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw — Open Claw that actually works for you",
  description:
    "We set up and deploy Open Claw for you — connected to Notion, Slack, Telegram, CRM — so you can automate your daily workflows without touching a single config file.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
