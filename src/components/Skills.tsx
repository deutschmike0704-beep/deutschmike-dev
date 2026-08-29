"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import ScrollReveal from "./ScrollReveal";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-foreground/10 py-16"
    >
      <ScrollReveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Skills
        </h2>
      </ScrollReveal>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-8 flex flex-wrap gap-2.5"
      >
        {skills.map((skill) => (
          <motion.li
            key={skill}
            variants={item}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
