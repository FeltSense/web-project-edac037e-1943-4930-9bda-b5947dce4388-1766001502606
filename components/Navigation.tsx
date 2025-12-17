'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none' as const,
    },
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto' as const,
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <a href="#" className="text-2xl font-bold tracking-tight">
              <span className="text-white">LETTUCE</span>
              <span className="text-indigo-500 ml-1">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-indigo-500 w-0 group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${i}`}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/20"
          >
            Get Started
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: 45, y: 8 },
              }}
              className="absolute w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="absolute w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={isOpen ? 'open' : 'closed'}
              variants={{
                closed: { rotate: 0 },
                open: { rotate: -45, y: -8 },
              }}
              className="absolute w-6 h-0.5 bg-white"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50"
        >
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-300 py-3"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              custom={navLinks.length}
              variants={linkVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              onClick={() => setIsOpen(false)}
              className="block w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 text-center mt-6"
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
