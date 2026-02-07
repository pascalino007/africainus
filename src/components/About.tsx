"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { images } from "@/lib/images";

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "5", label: "Core services" },
  { value: "100%", label: "Client focus" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative bg-gray-100 py-24 md:py-32 dark:bg-dark-800" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-500 dark:text-primary-400">
              About us
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Creativity rooted in <span className="text-primary-500 dark:text-primary-400">Africa</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-white/70">
              AfricaInUs is a full-service media and digital agency. We craft flyers, videos, 3D animations, websites, and social campaigns that connect with your audience and reflect the richness of African creativity and storytelling.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-white/70">
              From concept to delivery, we combine strategy, design, and technology to deliver top-notch content that drives results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center gap-12 sm:flex-row lg:flex-col lg:gap-16"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 dark:bg-dark-700">
              <Image
                src={images.about}
                alt="AfricaInUs creative team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:justify-start lg:gap-16">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center sm:text-left">
                <motion.span
                  className="font-display text-4xl font-bold text-primary-500 sm:text-5xl dark:text-primary-400"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <p className="mt-2 font-sans text-gray-600 dark:text-white/70">{stat.label}</p>
              </div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
