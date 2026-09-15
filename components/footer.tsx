"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Briefcase, Share2 } from "lucide-react";

export function Footer() {
  const handleScrollTo = (target: string) => {
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-gray-900 transition-colors duration-300">
      <div className="px-6 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <div className="text-xl font-bold mb-2 text-black dark:text-white transition-colors duration-300">
              THIRTY<span className="text-cyan-500 dark:text-cyan-400">NINE</span>.INC
            </div>
            <div className="text-xs tracking-widest text-gray-600 dark:text-gray-500 font-mono mb-4 transition-colors duration-300">
              تحقيق الأحلام · Tahqeeq Al-Ahlam
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              Building digital growth engines for ambitious African brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-6 font-mono transition-colors duration-300">
              Services
            </h4>
            <ul className="space-y-3">
              {["Social Media", "Paid Ads", "Web Development", "Design"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-6 font-mono transition-colors duration-300">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Packages", href: "#packages" },
                { label: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 font-mono">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:info@thirtynineinc.co.ke"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@thirtynineinc.co.ke
              </a>
              <a
                href="tel:+254 707 208768"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +254 707 208768
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                Nairobi, Kenya
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xs text-gray-500">
              © 2026 ThirtyNine.INC. All rights reserved.
            </div>
            <div className="flex gap-6">
              {[
                { icon: Briefcase, label: "LinkedIn" },
                { icon: Share2, label: "Share" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
