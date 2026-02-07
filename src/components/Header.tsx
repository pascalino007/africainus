"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(250,250,250,0)", "rgba(250,250,250,0.95)"],
  );
  const bgDark = useTransform(scrollY, [0, 80], ["rgba(10,10,11,0)", "rgba(10,10,11,0.9)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 dark:border-white/5"
      style={{
        backgroundColor: theme === "dark" ? bgDark : bg,
        backdropFilter: blur,
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Africa<span className="text-primary-500 dark:text-primary-400"> In  </span> Us
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 transition hover:text-primary-500 dark:text-white/80 dark:hover:text-primary-400">{link.label}</Link>
          ))}
          <SocialIcons className="hidden lg:flex gap-5" iconClassName="text-gray-500 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400" />
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2.5 text-gray-600 transition hover:bg-gray-200 hover:text-gray-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <Link href="/#contact" className="rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-400">Get in touch</Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={toggleTheme} className="rounded-full p-2 text-gray-600 dark:text-white/80" aria-label="Toggle theme">
            {theme === "dark" ? <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg> : <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          </button>
          <button type="button" className="flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="h-0.5 w-6 bg-gray-900 dark:bg-white" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-6 bg-gray-900 dark:bg-white" />
            <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="h-0.5 w-6 bg-gray-900 dark:bg-white" />
          </button>
        </div>
      </div>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} className="md:hidden overflow-hidden border-t border-gray-200 dark:border-white/5">
        <div className="flex flex-col gap-4 bg-gray-50 px-6 py-4 dark:bg-transparent">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-primary-500 dark:text-white/80 dark:hover:text-primary-400" onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <div className="pt-2">
            <SocialIcons iconClassName="text-gray-500 hover:text-primary-500 dark:text-white/70 dark:hover:text-primary-400" />
          </div>
          <Link href="/#contact" className="text-primary-500 font-semibold dark:text-primary-400" onClick={() => setOpen(false)}>Get in touch</Link>
        </div>
      </motion.div>
    </motion.header>
  );
}
