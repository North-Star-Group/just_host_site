"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navData = [
    {
        name: "Platform",
        columns: [
            {
                title: "Core",
                items: [
                    { name: "Modules", href: "/modules", description: "Explore the core system features" },
                    { name: "How it works", href: "/how-it-works", description: "Understand the underlying architecture" },
                ],
            },
            {
                title: "Ecosystem",
                items: [
                    { name: "Integrations", href: "/integrations", description: "Connect with your existing stack" },
                    { name: "Pricing", href: "/pricing", description: "Transparent plans for all sizes" },
                ],
            },
        ],
    },
    {
        name: "Pricing",
        columns: [
            {
                title: "Core",
                items: [
                    { name: "Modules", href: "/modules", description: "Explore the core system features" },
                    { name: "How it works", href: "/how-it-works", description: "Understand the underlying architecture" },
                ],
            },
            {
                title: "Ecosystem",
                items: [
                    { name: "Integrations", href: "/integrations", description: "Connect with your existing stack" },
                    { name: "Pricing", href: "/pricing", description: "Transparent plans for all sizes" },
                ],
            },
        ],
    },
    {
        name: "Features",
        columns: [
            {
                title: "Core",
                items: [
                    { name: "Modules", href: "/modules", description: "Explore the core system features" },
                    { name: "How it works", href: "/how-it-works", description: "Understand the underlying architecture" },
                ],
            },
            {
                title: "Ecosystem",
                items: [
                    { name: "Integrations", href: "/integrations", description: "Connect with your existing stack" },
                    { name: "Pricing", href: "/pricing", description: "Transparent plans for all sizes" },
                ],
            },
        ],
    },
    {
        name: "Customers",
        columns: [
            {
                title: "Solutions",
                items: [
                    { name: "Who it's for", href: "/who-its-for", description: "Tailored solutions for your industry" },
                ],
            },
            {
                title: "Proof",
                items: [
                    { name: "Case studies", href: "/case-studies", description: "Read our client success stories" },
                ],
            },
        ],
    },
    {
        name: "Company",
        columns: [
            {
                title: "Resources",
                items: [
                    { name: "About us", href: "/about", description: "Our mission, vision, and team" },
                    { name: "Blog", href: "/blog", description: "Latest news and industry insights" },
                ],
            },
            {
                title: "Support",
                items: [
                    { name: "Contact", href: "/contact", description: "Get in touch with our team" },
                    { name: "Legal", href: "/legal", description: "Terms, privacy, and compliance" },
                ],
            },
        ],
    },
];

export default function Navbar() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 text-black bg-[var(--color-cream)] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="/just_host.svg" alt="Just Host Logo" className="h-14 w-auto -ml-3" />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Wrapper handles the mouse leave to prevent flickering */}
                    <div className="hidden lg:flex items-center justify-center h-full" onMouseLeave={() => setHoveredItem(null)}>
                        <div className="flex space-x-2">
                            {navData.map((item) => (
                                <button
                                    key={item.name}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    className="flex items-center gap-2.5 text-sm font-medium transition-colors hover:text-black/70 px-4 py-2 rounded-full focus:outline-none"
                                >
                                    {item.name}
                                    <svg
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${hoveredItem === item.name ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            ))}
                        </div>

                        {/* Centralized Desktop Megamenu Dropdown */}
                        <div className="absolute top-[80px] left-0 w-full flex justify-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                {hoveredItem && (
                                    <motion.div
                                        key={hoveredItem}
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-[600px] pointer-events-auto pt-2"
                                        onMouseEnter={() => setHoveredItem(hoveredItem)}
                                    >
                                        {/* FIXED DIMENSIONS: h-[300px] applied here for consistency across all menus */}
                                        <div className="bg-[#00283F] border border-white/10 rounded-2xl p-6 shadow-2xl flex gap-8 w-full h-[300px]">
                                            {navData.find((n) => n.name === hoveredItem)?.columns.map((col, idx) => (
                                                <div key={idx} className="flex-1">
                                                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                                        {col.title}
                                                    </h3>
                                                    <div className="flex flex-col gap-4">
                                                        {col.items.map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                className="group flex flex-col hover:bg-white/5 p-3 -mx-3 rounded-xl transition-colors"
                                                            >
                                                                <span className="text-sm font-medium text-[#FDF8F1] mb-1">
                                                                    {subItem.name}
                                                                </span>
                                                                <span className="text-xs text-white/60">
                                                                    {subItem.description}
                                                                </span>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden lg:flex items-center">
                        <Link href="/demo">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[var(--color-primary)] text-sec px-6 py-2.5 rounded-full text-sm font-semibold transition-colors hover:bg-main hover:text-sec shadow-sm"
                            >
                                Schedule a demo
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-black focus:outline-none p-2"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                {mobileMenuOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden border-t border-white/10 overflow-hidden bg-[#00283F]"
                    >
                        <div className="px-6 py-6 space-y-8 max-h-[80vh] overflow-y-auto">
                            {navData.map((item) => (
                                <div key={item.name} className="space-y-4">
                                    <h2 className="text-lg font-semibold text-[#FDF8F1] border-b border-white/10 pb-2 hover:bg-main">
                                        {item.name}
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 pl-2">
                                        {item.columns.map((col, idx) => (
                                            <div key={idx} className="space-y-3">
                                                <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                                    {col.title}
                                                </h3>
                                                <div className="flex flex-col gap-3">
                                                    {col.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="text-sm font-medium text-white/80 hover:text-white"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-white/10">
                                <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>
                                    <div className="w-full bg-[var(--color-primary)] text-sec px-6 py-3 rounded-full text-sm font-semibold text-center">
                                        Schedule a demo
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}