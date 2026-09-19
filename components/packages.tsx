"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Growth Starter",
    
    desc: "Perfect for new brands building foundation",
    items: [
      "Social Media Setup & Strategy",
      "4 Posts per week",
      "Community Management",
      "Monthly Analytics Report",
      "Content Calendar Planning",
    ],
  },
  {
    name: "Growth Accelerator",
    
    desc: "For brands ready to scale fast",
    items: [
      "Full Social Media Management",
      "Meta Ads Campaign Setup",
      "Content Creation (8+ posts/week)",
      "Engagement & Community Management",
      "Weekly Performance Reports",
      "Quarterly Strategy Review",
      "Basic SEO Optimization",
    ],
    featured: true,
  },
  {
    name: "Growth Engine",
    price: "Custom",
    desc: "Complete digital transformation",
    items: [
      "Everything in Accelerator +",
      "Web Development",
      "Graphic Design Suite",
      "Google & Facebook Ads",
      "Content Strategy & Pillars",
      "Weekly Strategy Sessions",
      "Custom Analytics Dashboard",
      "Full Brand Development",
    ],
  },
];

export function Packages() {
  const handleGetStarted = (packageName: string) => {
    const message = `Hi, I am interested in the ${packageName} package. I would like to learn more about getting started.`;
    const whatsappLink = `https://wa.me/254705913410?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="packages" className="py-24 px-6 md:px-16 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-4 font-mono transition-colors duration-300">
          Flexible Pricing
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-black dark:text-white transition-colors duration-300">
          Growth packages for <span className="text-cyan-500 dark:text-cyan-400">every stage</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 max-w-2xl text-lg transition-colors duration-300">
          Start lean, scale strong. Whether you&apos;re just starting or ready to dominate your market, we have a package designed for your growth.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl overflow-hidden transition-all duration-300 ${
              pkg.featured
                ? "border-2 border-cyan-500 dark:border-cyan-400 bg-gray-100 dark:bg-gray-900/50 scale-105"
                : "border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950"
            }`}
          >
            {pkg.featured && (
              <div className="bg-cyan-500 dark:bg-cyan-400 text-white dark:text-black py-2 text-center font-bold text-sm tracking-wider transition-colors duration-300">
                MOST POPULAR
              </div>
            )}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white transition-colors duration-300">{pkg.name}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm mb-6 transition-colors duration-300">{pkg.desc}</p>

              {/* <div className="mb-8">
                <div className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 transition-colors duration-300">
                  KES {pkg.price}
                  <span className="text-sm text-gray-700 dark:text-gray-400 font-normal transition-colors duration-300">/month</span>
                </div>
              </div> **/}

              <button
                onClick={() => handleGetStarted(pkg.name)}
                className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 text-sm md:text-base ${
                  pkg.featured
                    ? "bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black hover:opacity-90 hover:shadow-lg hover:shadow-cyan-400/50"
                    : "border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-4">
                {pkg.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
