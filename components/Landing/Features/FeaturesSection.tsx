"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Smartphone, Zap, Blocks } from "lucide-react";
import WhatsAppCard from "./Cards/WhatsappCard";
import OperationsCard from "./Cards/OperationsCard";
import FinanceAdminCard from "./Cards/FinanceAdminCard";
import DecisionEngineCard from "./Cards/IntegrationsCard";

const features = [
    {
        id: "guest-inbox",
        tabTitle: "Guest Inbox",
        icon: MessageSquare,
        title: "Unify every guest message in one dashboard",
        description: "ARTURO captures requests from Gmail and WhatsApp, then centralizes conversations so your team can reply faster without channel switching.",
        customComponent: <WhatsAppCard />,
        duration: 7500,
    },
    {
        id: "operations",
        tabTitle: "Operations",
        icon: Smartphone,
        title: "Delegate tasks instantly to the right staff",
        description: "From housekeeping to maintenance, ARTURO routes work to the right teammate with live timers and clear ownership.",
        customComponent: <OperationsCard />,
        duration: 7400,
    },
    {
        id: "finance-admin",
        tabTitle: "Finance & Admin",
        icon: Zap,
        title: "Run finance workflows from invoice to forecast",
        description: "Automate invoicing, reconcile accounting data, track vendor expenses, and monitor forward-looking RevPAR performance in one place.",
        customComponent: <FinanceAdminCard />,
        duration: 19000,
    },
    {
        id: "decision-engine",
        tabTitle: "Decision Engine",
        icon: Blocks,
        title: "Automate routine decisions with human control",
        description: "Route each request through automatic, suggested, or escalated paths so routine work is handled instantly and critical cases stay supervised.",
        customComponent: <DecisionEngineCard />,
        duration: 10000,
    }
];

export default function FeaturesSection() {
    const [activeTabId, setActiveTabId] = useState(features[0].id);

    useEffect(() => {
        const activeFeature = features.find((f) => f.id === activeTabId) || features[0];

        const timeout = setTimeout(() => {
            setActiveTabId((currentId) => {
                const currentIndex = features.findIndex((f) => f.id === currentId);
                const nextIndex = (currentIndex + 1) % features.length;
                return features[nextIndex].id;
            });
        }, activeFeature.duration);

        return () => clearTimeout(timeout);
    }, [activeTabId]);

    const activeFeature = features.find((f) => f.id === activeTabId) || features[0];

    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col mb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900"
                    >
                        Built for hotels <br className="hidden md:block" />
                        that are always evolving
                    </motion.h2>
                </div>

                {/* Main Feature Container */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Tabs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-200">
                        {features.map((feature, idx) => {
                            const isActive = activeTabId === feature.id;
                            const Icon = feature.icon;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveTabId(feature.id)}
                                    className={`flex items-center justify-center gap-3 py-6 px-4 text-[15px] font-semibold transition-all border-b-2 outline-none relative hover:bg-gray-50/50 ${isActive
                                        ? "border-primary-light text-primary-light bg-white z-10"
                                        : "border-transparent text-gray-600 bg-[#FAFAFA]"
                                        } ${idx !== features.length - 1 ? 'border-r border-gray-200' : ''}`}
                                >
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive ? 'bg-primary-light/10 text-primary-light' : 'bg-[#F1F5F9] text-gray-400'
                                        }`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    {feature.tabTitle}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Section */}
                    <div className="p-4  lg:p-20 overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-26 items-center">

                            {/* Left side: Text & Button */}
                            <div className="w-full lg:w-[45%] flex flex-col items-start gap-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature.id + "-text"}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-6"
                                    >
                                        <h3 className="text-3xl lg:text-[40px] font-bold text-[#111827] leading-[1.15] tracking-tight">
                                            {activeFeature.title}
                                        </h3>
                                        <p className="text-lg lg:text-[19px] text-gray-600 leading-[1.6]">
                                            {activeFeature.description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                <button className="mt-2 px-8 py-3.5 bg-primary-light text-white text-[15px] font-semibold rounded-xl hover:bg-main transition-colors shadow-sm hover:shadow-md">
                                    Learn more
                                </button>
                            </div>

                            {/* Right side: Active Card / Animation */}
                            <div className="w-full lg:w-[45%] h-[550px]  relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeFeature.id + "-component"}
                                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden border border-gray-100 bg-[#FAFAFA]"
                                    >
                                        {/* Optional background styling to match the reference's varied backgrounds */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-primary-light/20 mix-blend-overlay pointer-events-none" />

                                        <div className="relative z-10 w-full min-h-[400px] md:h-[500px] flex items-center justify-center sm:p-8">
                                            {activeFeature.customComponent}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
