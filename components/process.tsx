"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Strategy & Discovery",
    description: "Deep dive into your brand, market, and audience. We build the blueprint before we build anything else.",
  },
  {
    num: "02",
    title: "Creative & Content",
    description: "Compelling visuals, strategic messaging, and content that resonates. Designed to convert, not just impress.",
  },
  {
    num: "03",
    title: "Build & Optimize",
    description: "Launch campaigns across all channels. Real-time tracking, daily optimization, and constant improvement.",
  },
  {
    num: "04",
    title: "Measure & Scale",
    description: "Monthly reports, transparent metrics, and strategies to scale what works. Growth that compounds.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-4 font-mono transition-colors duration-300">
          Our Process
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white transition-colors duration-300">
          Four steps to <span className="text-cyan-500 dark:text-cyan-400">sustainable growth</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-900 transition-colors duration-300"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-black p-8 group transition-colors duration-300"
          >
            <div className="text-5xl font-bold text-cyan-500/10 dark:text-cyan-400/10 mb-6 font-mono transition-colors duration-300">
              {step.num}
            </div>
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white transition-colors duration-300">{step.title}</h3>
            <p className="text-gray-700 dark:text-gray-500 text-sm leading-relaxed transition-colors duration-300">{step.description}</p>

            {/* Arrow between steps */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cyan-500 dark:bg-cyan-400 rounded-full items-center justify-center transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-white dark:text-black" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
