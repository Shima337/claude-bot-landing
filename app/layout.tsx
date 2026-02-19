import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClaudeBot — Your AI That Actually Works For You",
  description:
    "We deploy a fully configured Claude AI assistant connected to your tools — Notion, Slack, Telegram, CRM — so you can automate your daily workflows without touching a single config file.",
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
