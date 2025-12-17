import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Press', href: '#press' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#privacy' },
        { label: 'Terms', href: '#terms' },
        { label: 'Cookies', href: '#cookies' },
        { label: 'Compliance', href: '#compliance' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-slate-800">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">LETTUCE</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium fashion curated for the modern wardrobe. Discover timeless style.
            </p>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} LETTUCE. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
