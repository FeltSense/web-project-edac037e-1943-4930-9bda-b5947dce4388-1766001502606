'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Zap, Shield, Palette } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      id: 1,
      title: 'Curated Collections',
      description: 'Hand-picked pieces that define your style. We source globally, deliver locally.',
      icon: Sparkles,
      span: 'col-span-1 row-span-2',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80',
      hasImage: true,
    },
    {
      id: 2,
      title: 'Express Shipping',
      description: 'Get your order in 24 hours. Free shipping on orders over $100.',
      icon: Zap,
      span: 'col-span-1',
      hasImage: false,
    },
    {
      id: 3,
      title: 'Lifetime Quality',
      description: 'Every piece guaranteed. Repairs, exchanges, returns—no questions asked.',
      icon: Shield,
      span: 'col-span-1',
      hasImage: false,
    },
    {
      id: 4,
      title: 'Personal Styling',
      description: 'Connect with our stylists. Get recommendations tailored to your taste.',
      icon: Palette,
      span: 'col-span-2',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&q=80',
      hasImage: true,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-4">
            What Makes LETTUCE Different
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl">
            We're redefining fashion retail with pieces that matter, service that cares, and style that lasts.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[280px]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                className={`${feature.span} group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                variants={itemVariants}
              >
                {/* Background Image (if applicable) */}
                {feature.hasImage && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>
                )}

                {/* Content */}
                <div className={`relative z-10 h-full p-6 flex flex-col ${feature.hasImage ? 'justify-end text-white' : 'justify-start'}`}>
                  {!feature.hasImage && (
                    <div className="mb-4 inline-flex p-3 bg-indigo-50 rounded-xl w-fit group-hover:bg-indigo-100 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                  )}

                  <h3 className={`text-xl md:text-2xl font-bold tracking-tight leading-[1.2] mb-2 ${feature.hasImage ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed ${feature.hasImage ? 'text-slate-100' : 'text-slate-500'}`}>
                    {feature.description}
                  </p>

                  {/* Icon for image cards */}
                  {feature.hasImage && (
                    <div className="mt-4 inline-flex p-2 bg-white/10 rounded-lg w-fit backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-slate-500 text-lg mb-6">
            Ready to discover your next favorite piece?
          </p>
          <a
            href="#contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Start Shopping
          </a>
        </motion.div>
      </div>
    </section>
  );
}
