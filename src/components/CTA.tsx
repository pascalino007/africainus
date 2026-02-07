"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { images } from "@/lib/images";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden bg-gray-200 py-24 md:py-32 dark:bg-dark-900" ref={ref}>
      <div className="absolute inset-0">
        <Image src={images.cta} alt="" fill className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-white/80 dark:bg-dark-900/80" />
      </div>
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,117,31,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <h2 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
          Ready to bring your{" "}
          <span className="bg-gradient-to-r from-primary-500 to-accent-gold bg-clip-text text-transparent dark:from-primary-400">
            vision
          </span>{" "}
          to life?
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-white/70">
          Tell us about your project. We will get back to you with ideas and a plan.
        </p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="/#contact"
            className="rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition hover:bg-primary-400"
          >
            Start a project
          </a>
          <a
            href="mailto:hello@africainus.com"
            className="rounded-full border border-gray-400 px-8 py-4 font-semibold text-gray-900 transition hover:border-primary-500 hover:text-primary-500 dark:border-white/20 dark:text-white dark:hover:text-primary-400"
          >
            hello@africainus.com
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
