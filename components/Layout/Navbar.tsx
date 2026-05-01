"use client";

import React, { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [activeLang, setActiveLang] = useState("EN");

    const languages = [
        { code: "EN", name: "English", icon: "/flags/united-kingdom.png" },
        { code: "DE", name: "Deutsch", icon: "/flags/german.png" },
        { code: "IT", name: "Italiano", icon: "/flags/italy.png" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out rounded-full bg-[#FDF8F1] ${
                scrolled
                    ? "w-[90%] max-w-5xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-[#FDF8F1]/95 backdrop-blur-2xl"
                    : "w-[95%] max-w-7xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[#FDF8F1]/80 backdrop-blur-2xl"
            }`}
        >
            <div className="px-4 pr-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 ml-2">
                        <Link href="/" className="flex items-center">
                            <img src="/just_host.svg" alt="Just Host Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center h-full" onMouseLeave={() => setHoveredItem(null)}>
                        <div className={`flex bg-gray-100/80 p-1.5 rounded-full border border-gray-200/50 shadow-inner transition-all duration-500 ${scrolled ? 'gap-0' : 'gap-4'}`}>
                            {navData.map((item) => (
                                <button
                                    key={item.name}
                                    onMouseEnter={() => setHoveredItem(item.name)}
                                    className={`relative flex items-center text-sm font-medium transition-colors px-5 py-1.5 rounded-full focus:outline-none z-10 ${
                                        hoveredItem === item.name ? "text-black" : "text-gray-500 hover:text-black"
                                    }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {/* Animated pill highlight */}
                                    {hoveredItem === item.name && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Centralized Desktop Megamenu Dropdown */}
                        <div className="absolute top-[75px] left-0 w-full flex justify-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                {hoveredItem && (
                                    <motion.div
                                        key={hoveredItem}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={{
                                            hidden: { opacity: 0, y: 15, scale: 0.98 },
                                            visible: { 
                                                opacity: 1, 
                                                y: 0, 
                                                scale: 1,
                                                transition: { 
                                                    duration: 0.2,
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.05
                                                }
                                            },
                                            exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.15 } }
                                        }}
                                        className="w-[600px] pointer-events-auto"
                                        onMouseEnter={() => setHoveredItem(hoveredItem)}
                                    >
                                        {/* FIXED DIMENSIONS: h-[300px] applied here for consistency across all menus */}
                                        <div className="bg-[#00283F] border border-white/10 rounded-3xl p-6 shadow-2xl flex gap-8 w-full h-[300px]">
                                            {navData.find((n) => n.name === hoveredItem)?.columns.map((col, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="flex-1"
                                                    variants={{
                                                        hidden: { opacity: 0, y: 5 },
                                                        visible: { 
                                                            opacity: 1, 
                                                            y: 0,
                                                            transition: { staggerChildren: 0.05 } 
                                                        }
                                                    }}
                                                >
                                                    <motion.h3 
                                                        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                                        className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 border-b border-white/10 pb-2"
                                                    >
                                                        {col.title}
                                                    </motion.h3>
                                                    <div className="flex flex-col gap-4">
                                                        {col.items.map((subItem) => (
                                                            <motion.div 
                                                                key={subItem.name}
                                                                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                                                            >
                                                                <Link
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
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right side icons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-2">
                        <button className="w-9 h-9 rounded-full bg-gray-100/50 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <div className="relative flex items-center" onMouseEnter={() => setLangDropdownOpen(true)} onMouseLeave={() => setLangDropdownOpen(false)}>
                            <button className="flex items-center gap-1.5 pl-2 pr-2 py-1 hover:bg-gray-50 transition-colors">
                                <div className="w-6 h-6 rounded-sm  overflow-hidden  flex items-center justify-center">
                                    <img src={languages.find(l => l.code === activeLang)?.icon} alt={activeLang} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-sm font-medium text-gray-600">{activeLang}</span>
                                <svg className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {langDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full right-0 mt-2 w-36 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => {
                                                    setActiveLang(lang.code);
                                                    setLangDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                                                    activeLang === lang.code ? "bg-gray-100 text-black" : "text-gray-500 hover:bg-gray-50 hover:text-black"
                                                }`}
                                            >
                                                <img src={lang.icon} alt={lang.name} className="w-5 h-5 rounded-full object-cover border border-gray-100" />
                                                {lang.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[75px] left-0 w-full lg:hidden overflow-hidden bg-[#00283F] rounded-3xl shadow-2xl border border-white/10"
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
        </motion.nav>
    );
}