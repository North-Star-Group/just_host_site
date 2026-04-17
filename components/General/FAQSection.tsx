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

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="bg-main text-[var(--color-cream)] min-h-screen py-24 px-4 font-sans">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-4">
                        Frequently asked questions
                    </h2>
                    <p className="text-lg opacity-80">
                        Everything you need to know about JustHost and ARTURO.
                    </p>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-300 rounded-xl ${isOpen ? "bg-primary-light p-6" : "p-6"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-lg font-medium pr-8">
                                        {faq.question}
                                    </span>
                                    <span className="flex-shrink-0">
                                        {isOpen ? (
                                            <MinusCircleIcon className="w-6 h-6 text-sec" />
                                        ) : (
                                            <PlusCircleIcon className="w-6 h-6 text-sec" />
                                        )}
                                    </span>
                                </button>

                                {/* Answer transition */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100 mt-4"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-sec opacity-80 text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Simple SVG Icons to match the design
type IconProps = {
    className?: string;
};

function PlusCircleIcon({ className }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    );
}

function MinusCircleIcon({ className }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    );
}
