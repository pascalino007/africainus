"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-100 dark:border-white/5 dark:bg-dark-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-gray-900 dark:text-white"
          >
            Africa<span className="text-primary-500 dark:text-primary-400">In</span>Us
          </motion.div>
          <nav className="flex flex-wrap gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 transition hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-gray-200 pt-12 sm:flex-row sm:items-center sm:justify-between dark:border-white/5">
          <p className="text-sm text-gray-500 dark:text-white/50">
            © {new Date().getFullYear()} AfricaInUs. All rights reserved.
          </p>
          <SocialIcons iconClassName="text-gray-500 transition hover:text-primary-500 dark:text-white/50 dark:hover:text-primary-400" />
        </div>
      </div>
    </footer>
  );
}
