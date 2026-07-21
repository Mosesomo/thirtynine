"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/theme-provider";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Packages", href: "#packages" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-cyan-500/10 transition-colors duration-300"
    >
      {/* Logo */}
      <Link href="#" className="flex items-center gap-3">
        {/* Dark mode: Original PNG logo, Light mode: SVG with rounded background */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          {/* Dark mode PNG logo */}
          <Image
            src="/logo.png"
            alt="ThirtyNine.INC"
            width={56}
            height={56}
            className="object-contain rounded transition-colors duration-300"
            priority
          />

          {/* Light mode SVG logo with rounded background */}
          
        </div>
        <div className="flex flex-col gap-0.5 hidden sm:block">
          <div className="text-base md:text-lg font-bold tracking-wider text-black dark:text-white transition-colors duration-300">
            THIRTY<span className="text-cyan-500 dark:text-cyan-400">NINE</span>
          </div>
          <div className="text-[8px] tracking-widest text-gray-600 dark:text-gray-500 font-mono transition-colors duration-300">
            Digital Growth Agency
          </div>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 items-center">
        <ul className="flex gap-8 list-none">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
        <button 
          onClick={() => handleNavClick("#packages")}
          className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black font-bold rounded-lg text-sm transition-all duration-200 tracking-wide"
        >
          Get a Free Audit
        </button>
      </div>

      {/* Mobile menu button and theme toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <button 
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-cyan-500/10 md:hidden transition-colors duration-300"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 tracking-wide py-2"
                >
                  {item.label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick("#packages");
                }}
                className="w-full px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-black font-bold rounded-lg text-sm transition-all duration-200 tracking-wide mt-2"
              >
                Get a Free Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
