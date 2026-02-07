"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import { images } from "@/lib/images";

type Category = "All" | "Design" | "Photo" | "Branding";

const GALLERY_ITEMS: Array<{
  src: string;
  title: string;
  alt: string;
  category: Category;
  subtitle: string;
}> = [
  { ...images.gallery[0], category: "Branding", subtitle: "Print and visual identity" },
  { ...images.gallery[1], category: "Photo", subtitle: "Video and motion" },
  { ...images.gallery[2], category: "Design", subtitle: "Digital experiences" },
  { ...images.gallery[3], category: "Design", subtitle: "Web and data" },
  { ...images.gallery[4], category: "Branding", subtitle: "Team and culture" },
  { ...images.gallery[5], category: "Photo", subtitle: "Events and coverage" },
  { ...images.gallery[6], category: "Design", subtitle: "Social content" },
  { ...images.gallery[7], category: "Design", subtitle: "Web and app" },
];

const CATEGORIES: Category[] = ["All", "Design", "Photo", "Branding"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-32 dark:bg-dark-900">
        {/* Page title + breadcrumb - Unibody style */}
        <div className="border-b border-gray-200 bg-white/80 dark:border-white/10 dark:bg-dark-800/50">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-white/50"
            >
              Home / Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-2 font-display text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white"
            >
              Our works
            </motion.h1>
          </div>
        </div>

        {/* Filters - Unibody style tabs */}
        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition sm:px-6 ${
                  activeFilter === cat
                    ? "bg-primary-500 text-white"
                    : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>

        {/* Responsive grid - bigger images, fewer columns on large screens */}
        <div className="mx-auto w-full max-w-7xl px-4 pt-14 pb-20 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  key={project.title}
                  variants={item}
                  layout
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group"
                >
                  <Link href="/#contact" className="block">
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-dark-700 sm:min-h-[260px] lg:min-h-[300px]">
                      <Image
                        src={project.src}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-lg font-semibold text-gray-900 transition group-hover:text-primary-500 dark:text-white dark:group-hover:text-primary-400">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-white/60">
                        {project.subtitle}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-gray-500 dark:text-white/60">No projects in this category.</p>
          )}
        </div>

        {/* CTA strip */}
        <div className="border-t border-gray-200 bg-gray-100 py-16 dark:border-white/10 dark:bg-dark-800/50">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
<p className="font-display text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
            Share your passion with the world!
          </p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Link
                href="/#contact"
                className="inline-flex rounded-full bg-primary-500 px-8 py-4 font-semibold text-white transition hover:bg-primary-400"
              >
                Get started
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
