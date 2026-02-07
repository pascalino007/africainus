"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { images } from "@/lib/images";

const services = [
  {
    title: "Flyers & Print Design",
    description: "Stunning flyers, brochures, and print materials that capture attention and communicate your message with clarity and style.",
    icon: "📄",
    image: images.services.flyers,
    color: "from-amber-500/20 to-orange-600/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "Video Production",
    description: "From concept to final cut: commercials, social content, documentaries, and event coverage that tell your story powerfully.",
    icon: "🎬",
    image: images.services.video,
    color: "from-primary-500/20 to-red-600/20",
    borderColor: "border-primary-500/30",
  },
  {
    title: "3D Animation",
    description: "Immersive 3D visuals, product demos, explainers, and motion graphics that elevate your brand and engage your audience.",
    icon: "🎨",
    image: images.services.animation,
    color: "from-violet-500/20 to-purple-600/20",
    borderColor: "border-violet-500/30",
  },
  {
    title: "Web Development",
    description: "Fast, responsive, and beautiful websites and web apps built with modern tech. From landing pages to full platforms.",
    icon: "💻",
    image: images.services.web,
    color: "from-emerald-500/20 to-teal-600/20",
    borderColor: "border-emerald-500/30",
  },
  {
    title: "Social Media Marketing",
    description: "Strategy, content creation, and community management across platforms. We grow your presence and drive real engagement.",
    icon: "📱",
    image: images.services.social,
    color: "from-rose-500/20 to-pink-600/20",
    borderColor: "border-rose-500/30",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-gray-100 py-24 md:py-32 dark:bg-dark-800" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-sm font-medium uppercase tracking-[0.3em] text-primary-500 dark:text-primary-400">
            What we do
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Our services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-white/70">
            End-to-end media and digital solutions to grow your brand and reach your audience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={item}
              className={`group relative overflow-hidden rounded-2xl border transition hover:scale-[1.02] ${service.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/95 to-gray-100 dark:via-dark-800/95 dark:to-dark-800 ${service.color}`} />
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-70 transition group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 p-8">
                <span className="text-4xl" aria-hidden>{service.icon}</span>
                <h3 className="mt-6 font-display text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-white/80">
                  {service.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-primary-500 opacity-0 transition group-hover:opacity-100 dark:text-primary-400">
                  Learn more →
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
