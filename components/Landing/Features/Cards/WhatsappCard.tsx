"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Bot, ArrowRight } from "lucide-react";

// Reusable animated dot component using layoutId for seamless transitions across containers
const RedDot = ({ id }: { id: string }) => (
    <motion.div
        layoutId={id}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm"
    />
);

export default function WhatsAppCard() {
    const [step, setStep] = useState(0);

    // Timing sequence for the animation story
    useEffect(() => {
        let isMounted = true;
        const runSequence = async () => {
            while (isMounted) {
                setStep(0); await new Promise(r => setTimeout(r, 600)); // Reset
                if (!isMounted) break;
                setStep(1); await new Promise(r => setTimeout(r, 1000)); // Dots appear on apps
                if (!isMounted) break;
                setStep(2); await new Promise(r => setTimeout(r, 600));  // Arturo flies to Gmail
                if (!isMounted) break;
                setStep(3); await new Promise(r => setTimeout(r, 600));  // Grabs Gmail dot
                if (!isMounted) break;
                setStep(4); await new Promise(r => setTimeout(r, 600));  // Arturo flies to WA
                if (!isMounted) break;
                setStep(5); await new Promise(r => setTimeout(r, 600));  // Grabs WA dot
                if (!isMounted) break;
                setStep(6); await new Promise(r => setTimeout(r, 800));  // Arturo flies back to center
                if (!isMounted) break;
                setStep(7); await new Promise(r => setTimeout(r, 1200)); // Send dot 1 to Dash (Dash breathes & glows)
                if (!isMounted) break;
                setStep(8); await new Promise(r => setTimeout(r, 1500)); // Send dot 2 to Dash (Dash breathes & glows)
            }
        };
        runSequence();
        return () => { isMounted = false; };
    }, []);

    // Determine Arturo's physical position based on the current step
    let arturoState = "center";
    if (step === 2 || step === 3) arturoState = "left";
    if (step === 4 || step === 5) arturoState = "right";

    const isGlowing = step >= 3 && step <= 7;
    const dashboardPulseStep = step === 7 ? "first" : step === 8 ? "second" : "idle";

    const dashboardButtonAnimation =
        dashboardPulseStep === "idle"
            ? { scale: 1, borderColor: "#e5e7eb", boxShadow: "0px 0px 0px rgba(0, 40, 63, 0)" }
            : {
                scale: [1, dashboardPulseStep === "first" ? 1.05 : 1.06, 1],
                borderColor: ["#e5e7eb", "#00283F", "#e5e7eb"],
                boxShadow: [
                    "0px 0px 0px rgba(0, 40, 63, 0)",
                    "0px 0px 20px 4px rgba(255, 87, 87, 0.3)",
                    "0px 0px 0px rgba(0, 40, 63, 0)"
                ]
            };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 relative overflow-hidden group">
            {/* Top Row: Incoming Channels */}
            <div className="flex w-full justify-center gap-12 md:gap-20 mb-10 relative z-10">

                {/* Gmail Channel */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <Mail className="w-7 h-7 text-red-500" />

                        {/* Gmail Dot Holder */}
                        <div className="absolute -top-1.5 -right-1.5">
                            {step >= 1 && step <= 2 && <RedDot id="gmail-dot" />}
                        </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Gmail</span>
                </div>

                {/* WhatsApp Channel */}
                <div className="flex flex-col items-center gap-3">
                    <div className="relative p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <MessageCircle className="w-7 h-7 text-green-500" />

                        {/* WhatsApp Dot Holder */}
                        <div className="absolute -top-1.5 -right-1.5">
                            {step >= 1 && step <= 4 && <RedDot id="wa-dot" />}
                        </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp</span>
                </div>

                {/* Railroad Lines */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-24 -z-10 text-gray-200 pointer-events-none" viewBox="0 0 200 100">
                    <path d="M 40 20 Q 100 20 100 80" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 160 20 Q 100 20 100 80" fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
            </div>

            {/* Middle Row: AI Agent Processing */}
            <motion.div
                animate={{
                    x: arturoState === "left" ? -80 : arturoState === "right" ? 80 : 0,
                    y: arturoState === "left" ? -100 : arturoState === "right" ? -100 : 0,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="relative mb-12 flex flex-col items-center z-20"
            >
                <motion.div
                    animate={{
                        boxShadow: isGlowing
                            ? "0px 0px 15px 4px rgba(0, 40, 63, 0.25)" // Reduced shadow spread and opacity
                            : "0px 0px 0px 0px rgba(0, 40, 63, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-5 bg-[#00283F] rounded-2xl text-white relative shadow-lg"
                >
                    <Bot className="w-8 h-8" />

                    {/* Arturo's Dot Catcher */}
                    <div className="absolute -top-2 -right-2 flex gap-1">
                        {step >= 3 && step <= 6 && <RedDot id="gmail-dot" />}
                        {step >= 5 && step <= 7 && <RedDot id="wa-dot" />}
                    </div>
                </motion.div>

                <div className="absolute -bottom-7 text-xs font-semibold text-[#00283F] whitespace-nowrap uppercase tracking-widest">
                    ARTURO
                </div>
            </motion.div>

            {/* Bottom Row: Dashboard Button */}
            <div className="relative z-30 flex flex-col items-center">

                {/* Dashboard Dot Catcher (Placed BEHIND the button using -z-10) */}
                <div className="absolute inset-0 flex items-center justify-center gap-2 -z-10">
                    {step >= 7 && step <= 8 && <RedDot id="gmail-dot" />}
                    {step === 8 && <RedDot id="wa-dot" />}
                </div>

                {/* Added relative and z-20 to ensure it stays above the dots. Added boxShadow to animation sequence. */}
                <motion.button
                    key={`dashboard-pulse-${dashboardPulseStep}`}
                    animate={dashboardButtonAnimation}
                    transition={{ duration: 0.5, delay: 0.2 }} // Delay slightly so it breathes exactly as the dot hits it
                    className="relative z-20 flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 shadow-sm rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors duration-300"
                >
                    Unified Dashboard
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                </motion.button>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none"></div>
        </div>
    );
}
