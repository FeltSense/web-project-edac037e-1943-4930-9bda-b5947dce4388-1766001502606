'use client';

import { motion } from 'framer-motion';
import { Check, Lock, ShieldCheck } from 'lucide-react';

export default function Pricing() {
  const features = [
    {
      icon: '✨',
      text: 'Early access to exclusive collections before public launch',
    },
    {
      icon: '🎁',
      text: '$50 store credit for your first purchase after delivery',
    },
    {
      icon: '📦',
      text: 'Free priority shipping on all orders',
    },
    {
      icon: '🔄',
      text: '60-day fit guarantee with hassle-free returns',
    },
    {
      icon: '💎',
      text: 'VIP member status with exclusive discounts',
    },
    {
      icon: '📧',
      text: 'Personal styling consultation via email',
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            Secure Your Style
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Pre-order the LETTUCE collection and join an exclusive community of fashion-forward thinkers. Limited spots available.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent rounded-3xl blur-2xl" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
              Limited Time
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Price Section */}
              <div className="text-center mb-12">
                <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-4">
                  Pre-Order Price
                </p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-slate-900">$29</span>
                  <span className="text-xl text-slate-400 line-through">$79</span>
                </div>
                <p className="text-slate-500 text-sm">
                  One-time payment • Ships in 6-8 weeks
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 py-8 border-t border-b border-slate-100">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() =>
                  (window.location.href =
                    'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00')
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Pre-Order Now - $29
              </motion.button>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  <span>Secure checkout</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>Money-back guarantee</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm mb-4">
            Trusted by fashion enthusiasts worldwide
          </p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400">
                ★
              </span>
            ))}
            <span className="text-slate-500 text-sm ml-2">
              4.9/5 from 2,400+ pre-orders
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
