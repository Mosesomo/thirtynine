"use client";

import { motion } from "framer-motion";

const results = [
  { value: "9,200+", label: "Followers Gained", sub: "In 60 days, organic" },
  { value: "5.8%", label: "Engagement Rate", sub: "Industry average: 1.5%" },
  { value: "$0", label: "Ad Spend Required", sub: "For organic growth results" },
  { value: "22+", label: "Client Leads", sub: "Per strategic campaign" },
];

export function Results() {
  return (
    <section id="results" className="py-24 px-6 md:px-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-4 font-mono transition-colors duration-300">
          What We Deliver
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black dark:text-white transition-colors duration-300">
          Proven results that <span className="text-cyan-500 dark:text-cyan-400">actually matter</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-300 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-800 transition-colors duration-300"
      >
        {results.map((result, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black p-10 text-center group hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-cyan-500 dark:text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
              {result.value}
            </div>
            <div className="text-sm font-bold text-black dark:text-white uppercase tracking-wider mb-1 transition-colors duration-300">
              {result.label}
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-500 font-mono transition-colors duration-300">{result.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
