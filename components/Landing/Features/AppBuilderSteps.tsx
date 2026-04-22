"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        time: "Step 1",
        title: "Install and connect your stack",
        desc: "Connect PMS, communication channels, accounting tools, and IoT systems. JustHost goes live without forcing a data migration.",
    },
    {
        id: 2,
        time: "Step 2",
        title: "Train ARTURO on your standards",
        desc: "Define tone of voice, operating policies, and business rules so ARTURO can act like an extension of your team from day one.",
    },
    {
        id: 3,
        time: "Step 3",
        title: "Automate daily hotel operations",
        desc: "ARTURO coordinates guest communication, operations, and finance through automatic, suggested, and escalated decisions with human control.",
    },
];

export default function AppBuilderSteps() {
    return (
        <section className="w-full bg-[#fafafa] px-6 py-24 font-sans text-gray-900">
            <div className="mx-auto max-w-7xl">

                {/* Header Section — left-aligned, mirroring the reference */}
                <div className="mb-16 max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900"
                    >
                        Go live with JustHost<br />in 3 simple steps
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 mb-8 text-lg text-gray-600"
                    >
                        ARTURO orchestrates 19 assistants across guest communication, operations, and administration so your hotel keeps running 24/7.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex items-center gap-2 rounded-lg bg-[var(--color-primary-light)] px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
                    >
                        Book a demo
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </div>

                {/* Steps Row — horizontal 3-column grid with connecting line */}
                <div className="relative w-full">

                    {/* Horizontal connecting line */}
                    <div className="absolute left-0 right-0 top-[18px] h-[1px] bg-gray-200" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-5% 0px" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                                className="relative pt-10"
                            >
                                {/* Timeline pill — sits on top of the line */}
                                <span className="absolute top-0 left-0 z-10 inline-block rounded bg-gray-100 px-3 py-1 text-sm font-bold tracking-wide text-gray-800">
                                    {step.time}
                                </span>

                                {/* Content */}
                                <h3 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
