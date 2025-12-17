'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Fashion Director, Vogue Studio',
    quote: 'Lettuce transformed how we source sustainable fabrics. The quality is impeccable, and their team understands luxury retail like no one else. Our collection launch exceeded projections by 40%.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'Founder, Minimal Atelier',
    quote: 'Working with Lettuce has been a game-changer for our boutique. Their attention to detail and commitment to ethical production aligns perfectly with our brand values. Customers notice the difference immediately.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Merchandising, Urban Retail Co',
    quote: 'The consistency and reliability from Lettuce is unmatched. We\'ve reduced inventory issues by 60% and our customer satisfaction scores are at an all-time high. They\'re not just a supplier—they\'re a true partner.',
    avatar: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-indigo-600 font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-6">
            What Fashion Leaders Say About Lettuce
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From boutique owners to fashion directors, discover why the industry's most discerning retailers choose Lettuce.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-slate-600 text-sm md:text-base">
            Trusted by <span className="font-semibold text-slate-900">500+ retailers</span> across North America
          </p>
        </motion.div>
      </div>
    </section>
  );
}
