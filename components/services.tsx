"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  BarChart3,
  Globe,
  Palette,
  FileText,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: Smartphone,
    title: "Social Media Management",
    desc: "Full management of Instagram, Facebook, and TikTok. Content calendar, copywriting, community management, and monthly analytics — all handled.",
  },
  {
    num: "02",
    icon: BarChart3,
    title: "Meta & Google Ads",
    desc: "Targeted paid campaigns that reach the right people at the right moment. Every conversion measured, every campaign optimised.",
  },
  {
    num: "03",
    icon: Globe,
    title: "Web Development",
    desc: "Mobile-first websites that sell while you sleep. Clean, fast, optimised for search engines and built to convert.",
  },
  {
    num: "04",
    icon: Palette,
    title: "Graphic Design",
    desc: "Visuals that stop the scroll and build instant brand trust. Designed with strategy, not just style.",
  },
  {
    num: "05",
    icon: FileText,
    title: "Content Strategy",
    desc: "A full content system built around your business goals. Topic research, content pillars, caption frameworks all in one plan.",
  },
  {
    num: "06",
    icon: TrendingUp,
    title: "Data Analytics",
    desc: "Real-time insights that guide every decision. From audience analysis to campaign performance tracking.",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-4 font-mono transition-colors duration-300">
          What We Do
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-black dark:text-white transition-colors duration-300">
          Six services.
          <br />
          One obsession:{" "}
          <span className="text-cyan-500 dark:text-cyan-400">your growth.</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl text-base md:text-lg transition-colors duration-300">
          We don&apos;t offer a menu of services. We build a complete digital growth engine — every
          component working together to convert your online presence into revenue.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-900 transition-colors duration-300"
      >
        {services.map((service, idx) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-black p-8 hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="text-xs font-bold text-cyan-500 dark:text-cyan-400 tracking-wider font-mono mb-4 transition-colors duration-300">
                {service.num}
              </div>
              <div className="mb-4 text-3xl group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors text-gray-800 dark:text-gray-200">
                <IconComponent className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-500 text-sm leading-relaxed transition-colors duration-300">{service.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
