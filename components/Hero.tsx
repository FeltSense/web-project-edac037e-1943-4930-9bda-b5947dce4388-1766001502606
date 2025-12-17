'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl opacity-5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200">
                <span className="w-2 h-2 bg-indigo-600 rounded-full" />
                <span className="text-sm font-semibold text-indigo-600">
                  Premium Fashion Redefined
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6"
            >
              Elevate Your{' '}
              <span className="relative">
                <span className="relative z-10 text-indigo-600">
                  Style
                </span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-amber-400 opacity-30 -z-10" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed"
            >
              Discover curated collections designed for those who refuse to compromise on quality. From timeless pieces to bold statements, LETTUCE brings luxury within reach.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mb-12"
            >
              <div>
                <p className="text-3xl font-bold text-slate-900">50K+</p>
                <p className="text-sm text-slate-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Premium Pieces</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500">Satisfaction Rate</p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-indigo-600 font-semibold rounded-xl px-8 py-4 border-2 border-indigo-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-full min-h-96 lg:min-h-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop&q=80"
                alt="LETTUCE - Premium Fashion"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-transparent to-amber-900/10" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 border border-slate-100 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Free Shipping</p>
                  <p className="text-sm text-slate-500">On orders over $100</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs text-slate-400 uppercase tracking-widest mb-2">
          Scroll to explore
        </p>
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
