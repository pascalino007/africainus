"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  return (
    <section className="relative bg-white py-24 md:py-32 dark:bg-dark-700" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-500 dark:text-primary-400">
            Get in touch
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Start your project
          </h2>
          <p className="mt-6 text-gray-600 dark:text-white/70">
            Fill out the form below and we will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">Name</span>
              <input
                type="text"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder-white/40"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">Email</span>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder-white/40"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">Service</span>
            <select
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-white/10 dark:bg-dark-800 dark:text-white"
            >
              <option value="">Select a service</option>
              <option value="flyers">Flyers & Print Design</option>
              <option value="videos">Video Production</option>
              <option value="3d">3D Animation</option>
              <option value="web">Web Development</option>
              <option value="social">Social Media Marketing</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-white/80">Message</span>
            <textarea
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder-white/40"
              placeholder="Tell us about your project..."
            />
          </label>
          <motion.button
            type="submit"
            className="w-full rounded-full bg-primary-500 py-4 font-semibold text-white transition hover:bg-primary-400 sm:w-auto sm:px-12"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {sent ? "Message sent!" : "Send message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
