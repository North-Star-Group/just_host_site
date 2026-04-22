"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Assuming you use lucide-react for icons
import RequestTrendCard from "./AutoFeatureCards/RequestTrendCard";
import EfficiencyFunnelCard from "./AutoFeatureCards/EfficiencyFunnelCard";
import EuropeanMapCard from "./AutoFeatureCards/EuropeanMapCard";

// 1. Define your data structure
const features = [
    {
        id: "request-trends",
        tabLabel: "Request Trends",
        headline: "Stay ahead of guest demand, 24/7.",
        description: "Track manual, automated, and after-hours requests in one view. ARTURO handles routine questions instantly so your team can focus on on-site hospitality.",

        customComponent: <RequestTrendCard />,
    },
    {
        id: "resolution-efficiency",
        tabLabel: "Resolution Efficiency",
        headline: "Resolve more in seconds, escalate only what matters.",
        description: "ARTURO triages every inquiry, resolves most cases automatically, and routes only sensitive or complex issues to staff for fast, controlled operations.",

        customComponent: <EfficiencyFunnelCard />,
    },
    {
        id: "active-integrations",
        tabLabel: "Active Integrations",
        headline: "See where your connected systems are live.",
        description: "Monitor integration coverage by region while JustHost keeps PMS, communication, accounting, and IoT data synchronized without data migration.",
        customComponent: <EuropeanMapCard />,
    },

];

const AUTO_ADVANCE_TIME = 6000; // 6 seconds per slide

export default function AutoFeatureSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const progressRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-advance logic
    useEffect(() => {
        if (isHovered) return;

        progressRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, AUTO_ADVANCE_TIME);

        return () => {
            if (progressRef.current) clearInterval(progressRef.current);
        };
    }, [activeIndex, isHovered]);

    return (
        <section className="w-full py-24 bg-[#fafafa] text-neutral-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
                        One operating system <br className="hidden md:block" /> for independent hotels
                    </h2>
                    <p className="text-lg text-neutral-500">
                        JustHost, powered by ARTURO, orchestrates guest communication,
                        operations, and administration so your hotel keeps running even
                        when your team is offline.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex overflow-x-auto hide-scrollbar border-b border-neutral-200 mb-8 pb-4 gap-8">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveIndex(index)}
                            className="relative pb-4 whitespace-nowrap text-sm font-medium transition-colors"
                            style={{
                                color: activeIndex === index ? "#000" : "#888",
                            }}
                        >
                            {feature.tabLabel}

                            {/* Active Tab Indicator with Progress Bar */}
                            {activeIndex === index && (
                                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-neutral-200 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-black"
                                        initial={{ width: "0%" }}
                                        animate={{ width: isHovered ? "100%" : "100%" }}
                                        transition={{
                                            duration: AUTO_ADVANCE_TIME / 1000,
                                            ease: "linear",
                                            repeat: isHovered ? 0 : Infinity,
                                        }}
                                    />
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area - Crossfading */}
                <div
                    className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-neutral-900"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex"
                        >

                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/50 to-transparent" />

                            {/* Layout Split inside the card */}
                            <div className="relative z-10 flex flex-col lg:flex-row w-full h-full p-8 md:p-12 lg:p-16 items-center">

                                {/* Left Text Content */}
                                <div className="w-full lg:w-5/12 flex flex-col justify-end lg:justify-center h-full text-white space-y-6 z-20 mr-20">
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="text-3xl md:text-3xl font-medium tracking-tight"
                                    >
                                        {features[activeIndex].headline}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-neutral-300 text-md leading-relaxed max-w-md"
                                    >
                                        {features[activeIndex].description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white transition-all group">
                                            See module
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </motion.div>
                                </div>

                                {/* Right side custom component area */}
                                <div className="w-full lg:w-7/12 h-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0 perspective-1000">
                                    <motion.div
                                        initial={{ x: 50, opacity: 0, rotateY: 10 }}
                                        animate={{ x: 0, opacity: 1, rotateY: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                                        className="relative w-full max-w-2xl flex items-center justify-center"
                                    >
                                        {features[activeIndex].customComponent}
                                    </motion.div>
                                </div>


                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
