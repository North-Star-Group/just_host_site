"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, X } from "lucide-react";

// Adjusted coordinates to pin perfectly to the new precise architectural modules
const features = [
    {
        id: "layout",
        title: "Layout Editor",
        description: "Customize the spatial arrangement of your hotel floor plans effortlessly.",
        x: "50%",
        y: "40%",
    },
    {
        id: "security",
        title: "Access Security",
        description: "Monitor digital key logs and secure restricted areas in real-time.",
        x: "75%",
        y: "55%",
    },
    {
        id: "concierge",
        title: "Concierge Dashboard",
        description: "Manage guest requests, room service, and bookings from a unified view.",
        x: "40%",
        y: "75%",
    },
];

export default function OperationsHero() {
    const [activeFeature, setActiveFeature] = useState<string | null>(null);

    return (
        <section className="min-h-screen w-full bg-white text-black flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 font-sans">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text & CTA */}
                <div className="flex flex-col items-start max-w-lg relative z-20">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                        The engine powering your operations
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                        Our all-in-one platform lets you build intelligent hospitality software with speed, security, and scale—without writing code.
                    </p>
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3 rounded-full text-sm font-medium">
                        Explore platform <ArrowRight size={16} />
                    </button>
                </div>

                {/* Right Column: Architectural Wireframe & Interactive Nodes */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">

                    {/* Clean Geometric Perspective Wireframe SVG */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            viewBox="0 0 800 600"
                            className="w-full h-full"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {/* Background / Core structural lines */}
                            <g
                                strokeWidth="0.75"
                                className="stroke-[var(--color-primary-light)]"
                            >
                                {/* Vertical pillars */}
                                <path d="M 550 50 L 550 600" />
                                <path d="M 450 120 L 450 200" />
                                <path d="M 450 300 L 450 600" />
                                <path d="M 350 150 L 350 230" />
                                <path d="M 350 330 L 350 600" />
                                <path d="M 650 125 L 650 250" />
                                <path d="M 650 425 L 650 600" />

                                {/* Floor plates */}
                                <path d="M 350 170 L 550 110 L 650 185" />
                                <path d="M 250 300 L 350 270" />
                                <path d="M 450 240 L 550 210 L 650 285" />
                                <path d="M 250 400 L 280 391" />
                                <path d="M 400 355 L 550 310 L 650 385" />
                                <path d="M 250 500 L 280 491" />
                                <path d="M 400 455 L 550 410 L 650 485" />
                            </g>

                            {/* Module 1: Top Left Projection */}
                            <g className="text-black">
                                {/* Top & Side Depth Planes */}
                                <path d="M 350 230 L 450 200 L 480 222 L 380 252 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />
                                <path d="M 450 200 L 480 222 L 480 322 L 450 300 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />

                                {/* Bold Front Face */}
                                <path d="M 350 230 L 450 200 L 450 300 L 350 330 Z" strokeWidth="2" stroke="currentColor" />

                                {/* Clear Window Showcase */}
                                <path d="M 360 237 L 440 213 L 440 293 L 360 317 Z" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" fill="rgba(0,0,0,0.02)" />
                                <path d="M 400 225 L 400 305" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" />
                            </g>

                            {/* Module 2: Right Projection */}
                            <g className="text-black">
                                {/* Top & Side Depth Planes */}
                                <path d="M 550 250 L 650 325 L 620 334 L 520 259 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />
                                <path d="M 550 250 L 520 259 L 520 359 L 550 350 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />

                                {/* Bold Front Face */}
                                <path d="M 550 250 L 650 325 L 650 425 L 550 350 Z" strokeWidth="2" stroke="currentColor" />

                                {/* Clear Window Showcase */}
                                <path d="M 560 267 L 640 327 L 640 407 L 560 347 Z" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" fill="rgba(0,0,0,0.02)" />
                                <path d="M 600 297 L 600 377" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" />
                            </g>

                            {/* Module 3: Bottom Left Projection */}
                            <g className="text-black">
                                {/* Top & Side Depth Planes */}
                                <path d="M 280 446 L 400 410 L 430 432 L 310 468 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />
                                <path d="M 400 410 L 430 432 L 430 532 L 400 510 Z" strokeWidth="1" className="text-gray-400" stroke="currentColor" />

                                {/* Bold Front Face */}
                                <path d="M 280 446 L 400 410 L 400 510 L 280 546 Z" strokeWidth="2" stroke="currentColor" />

                                {/* Clear Window Showcase */}
                                <path d="M 290 453 L 390 423 L 390 503 L 290 533 Z" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" fill="rgba(0,0,0,0.02)" />
                                <path d="M 340 438 L 340 518" strokeWidth="0.5" className="text-gray-500" stroke="currentColor" />
                            </g>
                        </svg>
                    </div>

                    {/* Interactive Nodes */}
                    {features.map((feature) => {
                        const isActive = activeFeature === feature.id;

                        return (
                            <div
                                key={feature.id}
                                className="absolute z-10"
                                style={{ left: feature.x, top: feature.y }}
                            >
                                <div className="relative">
                                    {/* The '+' Node Button */}
                                    <button
                                        onClick={() => setActiveFeature(isActive ? null : feature.id)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${isActive
                                            ? "bg-black text-white border-black shadow-lg"
                                            : "bg-white/80 backdrop-blur-sm border-gray-200 text-black hover:bg-gray-50"
                                            }`}
                                    >
                                        <motion.div
                                            animate={{ rotate: isActive ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus size={16} />
                                        </motion.div>
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {feature.title}
                                        </span>
                                    </button>

                                    {/* Popover Card */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-5 z-20"
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}