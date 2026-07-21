"use client";

import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="py-32 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 text-center relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500 dark:bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-cyan-500 dark:bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-400 mb-8 tracking-widest font-mono italic transition-colors duration-300">
          تحقيق الأحلام
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300">
            Realising dreams.
          </span>
          <br />
          <span className="text-black dark:text-white transition-colors duration-300">One brand at a time.</span>
        </h2>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12 transition-colors duration-300">
          We&apos;re not just another digital agency. We&apos;re believers in African ambition and builders
          of world-class execution. Every brand we work with becomes an obsession. Every strategy
          we create compounds over time. Every result we deliver lasts.
        </p>

        <div className="text-sm tracking-widest text-cyan-500 dark:text-cyan-400 font-mono uppercase transition-colors duration-300">
          ThirtyNine.INC — Tahqeeq Al-Ahlam
        </div>
      </motion.div>
    </section>
  );
}
