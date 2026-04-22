"use client";

import React, { useState } from "react";

type FaqItem = {
    question: string;
    answer: string;
};

const faqs: FaqItem[] = [
    {
        question: "What is JustHost, and what is ARTURO?",
        answer: "JustHost is an AI-powered operating system for independent hotels. ARTURO is its orchestration engine, coordinating 19 specialized assistants across guest communication, operations, and administration.",
    },
    {
        question: "Who is JustHost built for?",
        answer: "JustHost is built primarily for independent hotels with 10-80 rooms, and also supports boutique chains, hospitality consultants, and multi-property operators.",
    },
    {
        question: "Do we need to replace our current hotel tools?",
        answer: "No. JustHost connects with your existing stack, including PMS, communication channels, and accounting tools, so you can get started without data migration.",
    },
    {
        question: "What can JustHost automate in day-to-day operations?",
        answer: "It automates guest communication, reservation changes, check-in/check-out workflows, housekeeping and maintenance coordination, invoicing, expense tracking, and more.",
    },
    {
        question: "How much control does my team keep?",
        answer: "Your team keeps full control. ARTURO uses a 3-level decision system: about 80% automatic handling, 15% suggested actions for quick approval, and 5% escalated to humans for sensitive cases.",
    },
    {
        question: "How is pricing structured?",
        answer: "JustHost offers three tiers: Boutique (EUR 500/month), Resort (EUR 1500/month), and Premium (EUR 2500/month), depending on the modules you need.",
    },
    {
        question: "Is JustHost secure and compliant?",
        answer: "Yes. JustHost uses Swiss infrastructure with GDPR and AI Act-aligned practices, and you keep full ownership of your data with export-anytime flexibility.",
    },
];

const categories = [
    "Getting Started",
    "Members and Pricing",
    "Book Requests and Recommendations",
    "Account & Technical Issues"
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState("Getting Started");

    const toggleFaq = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="bg-[#FAFAFA] text-gray-900 min-h-screen py-24 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
            {/* Subtle background glow to match the image's lighting */}
            <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-pink-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col">
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 text-black tracking-tight">
                        FAQs
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-md leading-relaxed">
                        Everything you need to know about features, membership, and troubleshooting.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 border ${activeCategory === cat
                                        ? "bg-black text-white border-black"
                                        : "bg-transparent text-gray-700 border-gray-400 hover:border-gray-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-7 flex flex-col">
                    <div className="flex flex-col space-y-6 mb-12">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="pb-2">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-start justify-between text-left focus:outline-none group"
                                    >
                                        <span className={`text-lg transition-colors duration-300 pr-8 ${isOpen ? 'text-black font-medium' : 'text-gray-800'}`}>
                                            {faq.question}
                                        </span>
                                        <span className="flex-shrink-0 mt-1">
                                            {isOpen ? (
                                                <MinusIcon className="w-6 h-6 text-black" />
                                            ) : (
                                                <PlusIcon className="w-6 h-6 text-gray-800" />
                                            )}
                                        </span>
                                    </button>

                                    {/* Answer transition */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                ? "grid-rows-[1fr] opacity-100 mt-3"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <p className="text-gray-500 text-base leading-relaxed pr-8">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Support Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden max-w-2xl border border-gray-100/50">
                        {/* Decorative pattern for the card */}
                        <div
                            className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 10px)',
                                WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
                            }}
                        />

                        <div className="relative z-10">
                            <h3 className="text-xl font-medium mb-3 text-black">Still have questions?</h3>
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-md">
                                Contact our support team and we will make sure everything is clear and intuitive for you!
                            </p>
                            <button className="bg-[#003A5C] hover:bg-[#032f4c]/50 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 shadow-sm">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Simple SVG Icons
type IconProps = {
    className?: string;
};

function PlusIcon({ className }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className={className}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
    );
}

function MinusIcon({ className }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className={className}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
    );
}
