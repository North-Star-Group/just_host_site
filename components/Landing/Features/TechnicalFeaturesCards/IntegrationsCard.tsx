"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    MessageCircle,
    Mail,
    Home,
    Globe,
    CalendarCheck,
    CreditCard,
    Bot
} from "lucide-react";

export default function IntegrationsCard() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to this component's position in the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Triggers as it enters and leaves screen
    });

    // Calculate the subtle outward movement based on scroll progress
    // Nodes on the left move negatively (left/up), nodes on the right move positively (right/down)
    const moveLeftOut = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const moveRightOut = useTransform(scrollYProgress, [0, 1], [0, 30]);
    const moveUpOut = useTransform(scrollYProgress, [0, 1], [0, -20]);
    const moveDownOut = useTransform(scrollYProgress, [0, 1], [0, 20]);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen bg-[#00283F] py-20 overflow-hidden font-sans"
        >
            {/* Header Text */}
            <div className="z-10 text-center mb-16 px-4">
                <h2 className="text-3xl md:text-5xl font-semibold text-[#FDF8F1] mb-4 tracking-tight">
                    Connect your entire hospitality stack
                </h2>
                <p className="text-[#FDF8F1]/70 max-w-2xl mx-auto text-lg">
                    Arturo centralizes bookings, guest messages, and scheduling.
                </p>
            </div>

            {/* Network Graph Container */}
            <div className="relative w-full max-w-5xl aspect-square md:aspect-[16/9]">

                {/* SVG Connecting Lines */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
                    viewBox="0 0 1000 600"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g fill="none" stroke="#003A5C" strokeWidth="3" strokeLinecap="round">
                        {/* Left side connections */}
                        <path d="M 500 300 C 400 300, 350 150, 250 150" />
                        <path d="M 500 300 L 150 300" />
                        <path d="M 500 300 C 400 300, 350 450, 250 450" />

                        {/* Right side connections */}
                        <path d="M 500 300 C 600 300, 650 150, 750 150" />
                        <path d="M 500 300 L 850 300" />
                        <path d="M 500 300 C 600 300, 650 450, 750 450" />
                    </g>
                </svg>

                {/* Central Node: Arturo AI */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-[#003A5C] rounded-full border-4 border-[#00283F] shadow-2xl shadow-[#003A5C]/50">
                        {/* Outer animated ring */}
                        <div className="absolute inset-0 rounded-full border border-[#FDF8F1]/20 animate-ping opacity-20" />
                        <Bot size={48} className="text-[#FDF8F1]" />
                    </div>
                </div>

                {/* --- PERIPHERAL NODES --- */}

                {/* Top Left: Airbnb */}
                <motion.div
                    style={{ x: moveLeftOut, y: moveUpOut }}
                    className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={Home} label="Airbnb" />
                </motion.div>

                {/* Middle Left: Gmail */}
                <motion.div
                    style={{ x: moveLeftOut }}
                    className="absolute left-[15%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={Mail} label="Gmail" />
                </motion.div>

                {/* Bottom Left: Property Management */}
                <motion.div
                    style={{ x: moveLeftOut, y: moveDownOut }}
                    className="absolute left-[25%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={CalendarCheck} label="PMS" />
                </motion.div>

                {/* Top Right: Booking.com */}
                <motion.div
                    style={{ x: moveRightOut, y: moveUpOut }}
                    className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={Globe} label="Booking.com" />
                </motion.div>

                {/* Middle Right: WhatsApp */}
                <motion.div
                    style={{ x: moveRightOut }}
                    className="absolute left-[85%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={MessageCircle} label="WhatsApp" />
                </motion.div>

                {/* Bottom Right: Payments */}
                <motion.div
                    style={{ x: moveRightOut, y: moveDownOut }}
                    className="absolute left-[75%] top-[75%] -translate-x-1/2 -translate-y-1/2 z-10"
                >
                    <NodeIcon icon={CreditCard} label="Stripe" />
                </motion.div>

            </div>
        </div>
    );
}

// Reusable sub-component for the peripheral icons
function NodeIcon({ icon: Icon, label }: { icon: React.ElementType, label: string }) {
    return (
        <div className="flex flex-col items-center gap-2 group cursor-default">
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#FDF8F1] rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
                <Icon size={28} className="text-[#00283F]" />
            </div>
            <span className="text-xs md:text-sm font-medium text-[#FDF8F1]/80 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 whitespace-nowrap bg-[#003A5C] px-2 py-1 rounded-md">
                {label}
            </span>
        </div>
    );
}