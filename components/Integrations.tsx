"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Send,
  Users,
  Mail,
  MessageSquare,
  LayoutGrid,
  Calendar,
  FileCheck,
  ListTodo,
  GitBranch,
  BookOpen,
  Database,
  BarChart3,
  CreditCard,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Communication",
    items: [
      { name: "Slack", Icon: MessageCircle },
      { name: "Telegram", Icon: Send },
      { name: "Microsoft Teams", Icon: Users },
      { name: "Discord", Icon: MessageSquare },
    ],
  },
  {
    name: "Productivity",
    items: [
      { name: "Notion", Icon: FileText },
      { name: "Google Workspace", Icon: LayoutGrid },
      { name: "Obsidian", Icon: BookOpen },
      { name: "Todoist", Icon: ListTodo },
    ],
  },
  {
    name: "Project Management",
    items: [
      { name: "Jira", Icon: LayoutGrid },
      { name: "Asana", Icon: ListTodo },
      { name: "Linear", Icon: BarChart3 },
      { name: "Trello", Icon: LayoutGrid },
    ],
  },
  {
    name: "CRM & Sales",
    items: [
      { name: "HubSpot", Icon: Users },
      { name: "Salesforce", Icon: Database },
      { name: "Pipedrive", Icon: BarChart3 },
    ],
  },
  {
    name: "Development",
    items: [
      { name: "GitHub", Icon: GitBranch },
      { name: "GitLab", Icon: GitBranch },
      { name: "Confluence", Icon: BookOpen },
    ],
  },
  {
    name: "Other",
    items: [
      { name: "Airtable", Icon: Database },
      { name: "Zapier", Icon: Zap },
      { name: "Stripe", Icon: CreditCard },
      { name: "Email", Icon: Mail },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Connects to Your Stack
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            One bot, all your tools. We wire everything securely so your AI has
            context and can take action.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {categories.flatMap((cat) =>
            cat.items.map(({ name, Icon }) => (
              <motion.div
                key={name}
                variants={item}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl glass hover:bg-white/[0.08] hover:border-primary/30 border border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">
                  {name}
                </span>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
