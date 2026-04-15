"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Smartphone, CalendarDays, BarChart3, Database } from "lucide-react";

const features = [
    {
        id: 1,
        title: "From reservation to room, seamlessly.",
        description: "Our intuitive platform makes it easy to manage bookings, update availability, and adapt to guest needs in real-time.",
        image: "/test.png",
        icon: <CalendarDays className="w-8 h-8 text-[#00283F]" />
    },
    {
        id: 2,
        title: "Modern by design.",
        description: "Replace clunky legacy systems with a beautiful mobile experience. Empower guests with digital keys and mobile check-in.",
        image: "/test.png",
        icon: <Smartphone className="w-8 h-8 text-[#00283F]" />
    },
    {
        id: 3,
        title: "Automate what slows you down.",
        description: "Create sophisticated workflows for housekeeping and maintenance to prevent delays, eliminate busywork, and delight guests.",
        image: "/test.png",
        icon: <BarChart3 className="w-8 h-8 text-[#00283F]" />
    },
    {
        id: 4,
        title: "Connect and manage your data.",
        description: "Integrate seamlessly with your existing PMS, channel managers, payment gateways, and accounting software.",
        image: "/test.png",
        icon: <Database className="w-8 h-8 text-[#00283F]" />
    }
];

export default function FeaturesSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl text-gray-900"
                    >
                        Built for hotels <br className="hidden md:block" />
                        that are always evolving
                    </motion.h2>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll("left")}
                            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                            aria-label="Scroll left"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                            aria-label="Scroll right"
                        >
                            <ArrowRight className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[300px] md:min-w-[400px] max-w-[400px] snap-start flex flex-col gap-6 group cursor-pointer"
                        >
                            {/* Image Card */}
                            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                {/* Overlay with subtle tint using the requested accent color */}
                                <div className="absolute inset-0 bg-[#00283F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                                {/* Center Icon Overlay (Optional touch of design) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 p-4 rounded-full shadow-lg backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-2 pr-4">
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                    <strong className="text-gray-900 font-semibold mr-1">
                                        {feature.title}
                                    </strong>
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}