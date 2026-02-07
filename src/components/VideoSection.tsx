"use client";

import { motion } from "framer-motion";

const VIDEO_POSTER =
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80";

export default function VideoSection() {
  return (
    <section className="relative bg-gray-50 py-16 dark:bg-dark-900 md:py-20" id="video">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl bg-dark-800 shadow-xl dark:bg-dark-800"
        >
          <div className="relative aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              poster={VIDEO_POSTER}
              playsInline
              muted
              loop
              controls
              preload="metadata"
            >
              <source src="/video/showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
