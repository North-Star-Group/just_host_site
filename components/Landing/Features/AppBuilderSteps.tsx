"use client";


import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        time: "Step 1",
        title: "Install and connect your stack",
        desc: "Connect PMS, communication channels, accounting tools, and IoT systems. JustHost goes live without forcing a data migration.",
        stickyTop: "top-24 md:top-32",
        marginLeft: "ml-0",
    },
    {
        id: 2,
        time: "Step 2",
        title: "Train ARTURO on your standards",
        desc: "Define tone of voice, operating policies, and business rules so ARTURO can act like an extension of your team from day one.",
        stickyTop: "top-28 md:top-40",
        marginLeft: "ml-0 md:ml-[40px]",
    },
    {
        id: 3,
        time: "Step 3",
        title: "Automate daily hotel operations",
        desc: "ARTURO coordinates guest communication, operations, and finance through automatic, suggested, and escalated decisions with human control.",
        stickyTop: "top-32 md:top-48",
        marginLeft: "ml-0 md:ml-[80px]",
    },
];

export default function AppBuilderSteps() {
    return (
        <section className="w-full bg-[#fafafa] px-6 py-24 font-sans text-gray-900">
            <div className="mx-auto max-w-6xl">

                {/* Header Section */}
                <div className="mb-24 max-w-3xl">
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
                        className="mb-10 text-xl text-gray-600"
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

                {/* Ladder Steps Section */}
                <div className="relative w-full pb-32 flex flex-col gap-16 md:gap-24">
                    {/* Subtle background line connecting the steps */}
                    <div className="absolute bottom-0 left-[2.5rem] top-0 hidden w-[2px] bg-gray-200 md:block" />

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`sticky z-10 ${step.stickyTop} ${step.marginLeft} w-full max-w-md md:max-w-lg transition-all duration-500`}
                        >
                            {/* Entrance Animation Wrapper */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {/* Glowing Card Wrapper */}
                                <motion.div
                                    className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg"
                                    animate={{
                                        boxShadow: [
                                            "0px 10px 30px -10px rgba(0,0,0,0.1)",
                                            "0px 0px 40px 0px rgba(133, 230, 230, 0.4)", // Teal glow
                                            "0px 10px 30px -10px rgba(0,0,0,0.1)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                >
                                    <span className="mb-6 inline-block rounded bg-gray-100 px-3 py-1 text-sm font-bold tracking-wide text-gray-800">
                                        {step.time}
                                    </span>
                                    <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                                    <p className="leading-relaxed text-gray-600">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
