"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Results over aesthetics",
    description: "Beautiful content that doesn't convert is a pretty failure. Every decision is measured against one question: does this grow the client's business?",
  },
  {
    title: "Partnership over transaction",
    description: "We don't take on clients. We take on brands we believe in and treat them like our own business.",
  },
  {
    title: "Transparency always",
    description: "We report real numbers. Share honest feedback. Tell clients what they need to hear — not what they want to hear.",
  },
  {
    title: "Consistency over shortcuts",
    description: "We build things that last. Not viral moments that fade. Sustainable digital growth requires showing up every day.",
  },
  {
    title: "African ambition, world-class execution",
    description: "We are rooted in Africa and proud of it. We serve African brands with the same strategy and execution as any global agency.",
  },
  {
    title: "Growth that compounds",
    description: "Everything we build gets stronger over time. Content that keeps reaching. SEO that keeps ranking. Audiences that keep growing.",
  },
];

export function Values() {
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-4 font-mono transition-colors duration-300">
          Our Foundation
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white transition-colors duration-300">
          Built on <span className="text-cyan-500 dark:text-cyan-400">six core values</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4 p-6 rounded-lg border border-gray-300 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-400/30 transition-all duration-300 group bg-white dark:bg-gray-900"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="font-bold text-black dark:text-white text-lg mb-2 transition-colors duration-300">{value.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">{value.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
