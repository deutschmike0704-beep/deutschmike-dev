"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const nameWords = profile.name.split(" ");

  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-accent/25 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-accent-2/20 blur-[100px]"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm font-medium text-muted"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {profile.role} · {profile.location}
      </motion.p>

      <motion.h1
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-6 flex flex-wrap gap-x-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        {nameWords.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            variants={word}
            className={i === nameWords.length - 1 ? "bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent" : undefined}
          >
            {w}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-xl text-lg leading-8 text-muted"
      >
        {profile.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 max-w-xl leading-7 text-muted"
      >
        {profile.summary}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 flex flex-wrap gap-3 text-sm font-medium"
      >
        <a
          href="#projekte"
          className="rounded-full bg-foreground px-5 py-2.5 text-background transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-foreground/10"
        >
          Projekte ansehen
        </a>
        <a
          href="#kontakt"
          className="rounded-full border border-foreground/15 px-5 py-2.5 transition-transform hover:-translate-y-0.5 hover:border-foreground/30"
        >
          Kontakt aufnehmen
        </a>
      </motion.div>
    </section>
  );
}
