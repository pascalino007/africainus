"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { images } from "@/lib/images";

const projects = [
  { title: "Brand Campaign", category: "Flyers & Video", image: images.work.brand },
  { title: "Product Launch", category: "3D & Social", image: images.work.product },
  { title: "Web Platform", category: "Web Development", image: images.work.web },
  { title: "Event Coverage", category: "Video & Social", image: images.work.event },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative bg-white py-24 md:py-32 dark:bg-dark-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-500 dark:text-primary-400">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">Selected work</h2>
          </div>
          <Link href="/work" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-primary-500 hover:text-primary-500 dark:border-white/20 dark:text-white dark:hover:text-primary-400">
            View all projects
          </Link>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href="/work"
              className="group relative block overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative aspect-[4/3] transition group-hover:scale-105"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent dark:from-dark-900/95 dark:via-dark-900/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-sm font-medium text-primary-400">{project.category}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
