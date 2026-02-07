"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-6 pt-20 dark:bg-dark-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-dark-900/75" />
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(234,117,31,0.12),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-500 dark:text-primary-400">Media - Content - Branding</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">We create <span className="bg-gradient-to-r from-primary-500 via-accent-gold to-primary-500 bg-clip-text text-transparent">top-notch</span><br />media content</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mx-auto mt-8 max-w-2xl font-sans text-lg text-gray-600 md:text-xl dark:text-white/70">Flyers, videos, 3D animation, web development, and social media marketing.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="/#contact" className="rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition hover:bg-primary-400">Start a project</a>
          <Link href="/work" className="rounded-full border border-gray-400 px-8 py-4 font-semibold text-gray-900 transition hover:border-primary-500 hover:text-primary-500 dark:border-white/20 dark:text-white dark:hover:text-primary-400">View our work</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-24 flex items-center justify-center gap-12 text-sm text-gray-500 dark:text-white/50"><span>Flyers</span><span>Videos</span><span>3D Animation</span><span>Web Dev</span><span>Social Media</span></motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-400 dark:border-white/30"><motion.span className="mt-2 h-2 w-2 rounded-full bg-primary-500 dark:bg-primary-500" /></motion.div>
      </motion.div>
    </section>
  );
}
