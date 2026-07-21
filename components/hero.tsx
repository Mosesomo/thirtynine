"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-20 px-6 md:px-16 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background Number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-9xl md:text-[520px] font-bold text-cyan-400 opacity-5 dark:opacity-10 pointer-events-none -mr-20">
        39
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-8 font-mono"
        >
          Digital Growth Agency · Nairobi, Kenya
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-black dark:text-white"
        >
          <span className="text-gray-600 dark:text-gray-400">We don&apos;t take on clients.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300">
            We take on brands we
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300">
            believe in.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed max-w-xl mb-10 transition-colors duration-300"
        >
          ThirtyNine.INC builds digital growth engines for ambitious African brands — turning
          followers into revenue, visibility into trust, and online presence into lasting business
          results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 mb-20"
        >
          <button 
            onClick={() => handleScrollTo("#packages")}
            className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center gap-2 w-fit text-sm md:text-base"
          >
            Start Growing Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => handleScrollTo("#services")}
            className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-black dark:text-white font-semibold rounded-lg hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 text-sm md:text-base"
          >
            See What We Do
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-900"
        >
          {[
            { value: "9,200+", label: "Followers gained in 60 days" },
            { value: "5.8%", label: "Avg engagement rate" },
            { value: "$0", label: "Ad spend for organic growth" },
            { value: "22+", label: "Client leads per campaign" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker at Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-12 bg-cyan-400 flex items-center overflow-hidden"
      >
        <div className="flex gap-0 whitespace-nowrap animate-ticker">
          {[
            "Social Media Management",
            "Meta & Google Ads",
            "Web Development",
            "Graphic Design",
            "Content Strategy",
            "Data Analytics",
            "SEO & GEO",
          ].map((service, idx) => (
            <span
              key={idx}
              className="text-black font-bold text-xs tracking-wider px-8 uppercase font-mono"
            >
              {service}
              {idx < 6 && <span className="text-black/50 mx-8">·</span>}
            </span>
          ))}
          {[
            "Social Media Management",
            "Meta & Google Ads",
            "Web Development",
            "Graphic Design",
            "Content Strategy",
            "Data Analytics",
            "SEO & GEO",
          ].map((service, idx) => (
            <span
              key={`repeat-${idx}`}
              className="text-black font-bold text-xs tracking-wider px-8 uppercase font-mono"
            >
              {service}
              {idx < 6 && <span className="text-black/50 mx-8">·</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
