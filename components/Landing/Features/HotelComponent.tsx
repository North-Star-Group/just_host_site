"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, X } from "lucide-react";

// Grey architectural paths extracted from original SVG
const backgroundPaths = [
    { d: "M300.072 0V201.232V302", color: "#AAAAAA", width: "0.5" },
    { d: "M200.072 34V150", color: "#AAAAAA", width: "0.5" },
    { d: "M200.072 281V512", color: "#AAAAAA", width: "0.5" },
    { d: "M100.072 79.5V180", color: "#AAAAAA", width: "0.5" },
    { d: "M100.072 280V373", color: "#AAAAAA", width: "0.5" },
    { d: "M100.072 506V547", color: "#AAAAAA", width: "0.5" },
    { d: "M400.072 39V276", color: "#AAAAAA", width: "0.5" },
    { d: "M400.072 375V550", color: "#AAAAAA", width: "0.5" },
    { d: "M100.072 120L300.072 60L400.072 135", color: "#AAAAAA", width: "0.5" },
    { d: "M0.0717773 250L100.072 220", color: "#AAAAAA", width: "0.5" },
    { d: "M129.072 302L230.072 272", color: "#888888", width: "0.75" },
    { d: "M63.0718 517L179.072 483", color: "#888888", width: "0.75" },
    { d: "M377.072 383L271.074 308.969", color: "#888888", width: "0.75" },
    { d: "M377.072 382.5L400.072 377", color: "#888888", width: "0.75" },
    { d: "M129.072 302L100.072 281", color: "#888888", width: "0.75" },
    { d: "M63.0718 517L29.0718 497", color: "#888888", width: "0.75" },
    { d: "M230.572 172L300.072 160L400.072 235", color: "#AAAAAA", width: "0.5" },
    { d: "M0.0717773 350L30.0718 341", color: "#AAAAAA", width: "0.5" },
    { d: "M30.0718 341L270.072 272V285.463", color: "#AAAAAA", width: "0.5" },
    { d: "M0.0717773 450L30.0718 441", color: "#AAAAAA", width: "0.5" },
    { d: "M179.572 395.5L300.072 360L400.072 435", color: "#AAAAAA", width: "0.5" },
    { d: "M190.572 162.5L110.072 187L130.072 202L190.072 184", color: "#888888", width: "0.75" },
    { d: "M200.072 150L230.072 172V272L200.072 250V150Z", color: "#888888", width: "0.75" },
    { d: "M309.572 216.5L390.072 277L370.072 284L309.572 242V216.5Z", color: "#888888", width: "0.75" },
    { d: "M300.072 200L270.072 209V309L300.072 300V200Z", color: "#888888", width: "0.75" },
    { d: "M140.072 373L40.5718 402.5L60.0718 418L140.072 393.5", color: "#888888", width: "0.75" },
    { d: "M150.072 360L180.072 382V482L150.072 460V360Z", color: "#888888", width: "0.75" },
    { d: "M300.072 329.5L299.4 464.614L299.4 524.5", color: "#AAAAAA", width: "0.5" }
];

// Interactive features mapped directly to their SVG coordinates and normal axes
const features = [
    {
        id: "guest-experience",
        title: "Guest Experience",
        description: "ARTURO coordinates guest communication, reservations, check-in and check-out automation, upselling, and feedback.",

        cx: 149.5, // Center X of the window
        cy: 215,   // Center Y of the window
        popX: -20, // Axis normal (Moves Up/Left)
        popY: -15,
        paths: [
            { d: "M100.072 180L199.072 150V250L100.072 280V180Z", strokeWidth: 2.5, isFill: false },
            { d: "M110.072 187L190.072 163V243L110.072 267V187Z", strokeWidth: 1.25, isFill: true }
        ]
    },
    {
        id: "operations-excellence",
        title: "Operations Excellence",
        description: "Housekeeping, maintenance, staff scheduling, and logistics stay synchronized automatically, with human escalation only when needed.",

        cx: 350,
        cy: 287.5,
        popX: 20, // Axis normal (Moves Up/Right)
        popY: -15,
        paths: [
            { d: "M300.072 200L400.072 275V375L300.072 300V200Z", strokeWidth: 2.5, isFill: false },
            { d: "M310.072 217L390.072 277V357L310.072 297V217Z", strokeWidth: 1.25, isFill: true }
        ]
    },
    {
        id: "finance-admin",
        title: "Finance & Admin",
        description: "Automate invoicing, accounting workflows, expense tracking, and budget forecasting to reduce manual admin work.",

        cx: 90,
        cy: 428,
        popX: -20, // Axis normal (Moves Up/Left)
        popY: -15,
        paths: [
            { d: "M30.0718 396L150.072 360V460L30.0718 496V396Z", strokeWidth: 2.5, isFill: false },
            { d: "M40.0718 403L140.072 373V453L40.0718 483V403Z", strokeWidth: 1.25, isFill: true }
        ]
    },
];

const proofPoints = [
    "Built for independent hotels (10-80 rooms)",
    "Up to 70% less admin workload",
    "80% automatic • 15% suggested • 5% escalated",
];

export default function HotelComponent() {
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    return (
        <section className="min-h-screen w-full bg-[#fafafa] text-black flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text & CTA */}
                <div className="flex flex-col items-start max-w-lg relative z-20">

                    <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                        Your hotel runs. Even when you don&apos;t.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                        JustHost is an AI-powered operating system for independent hotels. ARTURO orchestrates 19 specialized assistants across guest experience, operations, and administration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {proofPoints.map((point) => (
                            <span
                                key={point}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700"
                            >
                                {point}
                            </span>
                        ))}
                    </div>
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3 rounded-full text-sm font-medium group">
                        Explore ARTURO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Right Column: Interactive 3D Wireframe */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                    <svg
                        className="w-full h-full drop-shadow-xl"
                        viewBox="0 0 402 550"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* 1. Base Structure Render (Animated Drawing) */}
                        <g>
                            {backgroundPaths.map((path, index) => (
                                <motion.path
                                    key={`bg-${index}`}
                                    d={path.d}
                                    stroke={path.color}
                                    strokeWidth={path.width}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, delay: index * 0.03, ease: "easeInOut" }}
                                />
                            ))}
                        </g>

                        {/* 2. Render Animated Window Panes */}
                        {features.map((feature) => {
                            const isActive = activeFeature === feature.id;
                            return (
                                <motion.g
                                    key={`window-${feature.id}`}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        x: isActive ? feature.popX : 0,
                                        y: isActive ? feature.popY : 0,
                                        opacity: 1
                                    }}
                                    transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.5 }}
                                    className="cursor-pointer"
                                    onClick={() => setActiveFeature(isActive ? null : feature.id)}
                                >
                                    {feature.paths.map((p, i) => (
                                        <motion.path
                                            key={`path-${feature.id}-${i}`}
                                            d={p.d}
                                            stroke="#003A5C"
                                            strokeWidth={p.strokeWidth}
                                            fill={p.isFill ? "#003A5C" : "none"}
                                            animate={{ fillOpacity: isActive && p.isFill ? 0.15 : p.isFill ? 0.04 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ))}
                                </motion.g>
                            );
                        })}

                        {/* 3. Render HTML UI Nodes locked to the exact SVG axes */}
                        {/* We sort to bring the active node to the front of the SVG rendering stack */}
                        {features.slice().sort((a, b) => (activeFeature === a.id ? 1 : activeFeature === b.id ? -1 : 0)).map((feature) => {
                            const isActive = activeFeature === feature.id;
                            const popoverPlacementClasses = feature.id === "finance-admin"
                                ? "bottom-full left-0 mb-4"
                                : "top-full left-1/2 mt-4 -translate-x-1/2";

                            // Making the foreignObject huge (600x600) prevents Safari from clipping dropdown content 
                            // while maintaining perfect window-centered axes.
                            return (
                                <motion.g
                                    key={`ui-${feature.id}`}
                                    animate={{ x: isActive ? feature.popX : 0, y: isActive ? feature.popY : 0 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                                >
                                    <foreignObject
                                        x={feature.cx - 300}
                                        y={feature.cy - 300}
                                        width="600"
                                        height="600"
                                        className="pointer-events-none"
                                    >
                                        <div className="w-full h-full relative flex items-center justify-center">

                                            {/* Button Marker */}
                                            <div className="relative pointer-events-auto z-20">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveFeature(isActive ? null : feature.id);
                                                    }}
                                                    className={`relative z-30 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary-light)] bg-[var(--color-primary-light)] text-white transition-all duration-300 shadow-md hover:brightness-110 ${isActive ? "scale-105" : ""}`}
                                                    aria-label={`Toggle ${feature.title}`}
                                                >
                                                    <motion.div animate={{ rotate: isActive ? 45 : 0 }} transition={{ duration: 0.2 }}>
                                                        <Plus size={16} />
                                                    </motion.div>
                                                </button>

                                                {/* Popover Detail Card */}
                                                <AnimatePresence>
                                                    {isActive && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                                            className={`absolute z-40 w-80 cursor-default rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ${popoverPlacementClasses}`}
                                                        >
                                                            <div className="flex justify-between items-start mb-2">
                                                                <h4 className="font-semibold text-sm">{feature.title}</h4>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setActiveFeature(null);
                                                                    }}
                                                                    className="text-gray-400 hover:text-black transition-colors"
                                                                >
                                                                    <X size={14} />
                                                                </button>
                                                            </div>
                                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                                {feature.description}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                        </div>
                                    </foreignObject>
                                </motion.g>
                            );
                        })}
                    </svg>
                </div>
            </div>
        </section>
    );
}
