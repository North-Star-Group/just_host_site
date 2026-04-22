"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Twitter = ({ className, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ className, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ className, ...props }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Modules", href: "/modules" },
        { name: "How it works", href: "/how-it-works" },
        { name: "Integrations", href: "/integrations" },
        { name: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Boutique Hotels", href: "/who-its-for" },
        { name: "Resorts", href: "/who-its-for" },
        { name: "Historic Properties", href: "/who-its-for" },
        { name: "Guesthouses", href: "/who-its-for" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/legal" },
        { name: "Privacy Policy", href: "/legal" },
        { name: "Cookie Policy", href: "/legal" },
        { name: "AI Act Compliance", href: "/legal" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#00283F] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-64 -right-64 w-[500px] h-[500px] bg-[var(--color-accent-blue)]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] bg-[#0EA5A0]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 relative z-10">
        {/* Top CTA Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 pb-20 border-b border-white/10">
          <div className="max-w-2xl mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to automate your hotel?
            </h2>
            <p className="text-white/70 text-lg">
              Join leading independent hotels using ARTURO to coordinate bookings, housekeeping, and administration seamlessly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[var(--color-cream)] text-[#00283F] px-8 py-4 rounded-full font-semibold transition-shadow hover:shadow-[0_0_20px_rgba(253,248,241,0.3)] flex items-center justify-center gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center justify-center"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/just_host.svg"
                alt="Just Host Logo"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              The independent hotel that works even while you sleep. Designed specifically for boutique properties with 10–80 rooms.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {footerLinks.map((section, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[var(--color-cream)] transition-colors text-sm font-medium relative group inline-block"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--color-cream)] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} JustHost. Independent hotel, amplified. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <div className="w-2 h-2 rounded-full bg-[#16A34A] shadow-[0_0_8px_#16A34A]"></div>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
