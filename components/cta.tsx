"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const handleAudit = () => {
    const message = "I'd like to book a free audit session for my brand. Could you help me?";
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative py-20 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 rounded-2xl p-12 md:p-20 text-center transition-colors duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-black mb-4 transition-colors duration-300">
          Ready to grow?
        </h2>
        <p className="text-base md:text-lg text-white/80 dark:text-black/70 mb-10 max-w-2xl mx-auto transition-colors duration-300">
          Let&apos;s talk about your brand, your goals, and how we can turn your online presence into your
          most powerful growth engine.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAudit}
          className="group px-10 py-4 bg-white dark:bg-black text-cyan-500 dark:text-cyan-400 font-bold rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-black/50 transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base"
        >
          Get Your Free Audit Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </section>
  );
}
