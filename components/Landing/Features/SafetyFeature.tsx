'use client';
import React from 'react';
import { motion } from 'framer-motion';
// Assuming the 4 cards are in the same directory or adjust imports accordingly
import MultiAgentCard from './SafetyFeatureCards/MultiAgentCard';
import HospitalityCard from './SafetyFeatureCards/HospitalityCard';
import SwissInfrastructureCard from './SafetyFeatureCards/SwissCard';
import NoVendorCard from './SafetyFeatureCards/NoVendorCard';

export default function SafetyFeature() {
    return (
        // The background color closely matches the light gray from your reference image
        <div className="bg-[#fafafa] px-6 md:px-12 lg:px-24 py-24 relative overflow-visible">
            <div className="w-full max-w-[1140px] mx-auto flex flex-col gap-16 pb-32">
                {/* Section Header */}
                <motion.div
                    className="flex flex-col gap-4 max-w-3xl mx-auto mb-8 justify-center items-center text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.6 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.18 } },
                    }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900"
                        variants={{
                            hidden: { opacity: 0, y: 28 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                        }}
                    >
                        Built on a foundation <br /> of absolute trust
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 mb-10 mt-10 leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: 22 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                        }}
                    >
                        We prioritize your security, data ownership, and operational reliability above all else. Experience a platform designed from the ground up to meet the highest enterprise standards in the industry.
                    </motion.p>
                </motion.div>

                <div className="sticky top-24 w-full transition-all duration-500 hover:scale-[1.01]">
                    <SwissInfrastructureCard />
                </div>
                <div className="sticky top-32 w-full transition-all duration-500 hover:scale-[1.01]">
                    <MultiAgentCard />
                </div>
                <div className="sticky top-40 w-full transition-all duration-500 hover:scale-[1.01]">
                    <HospitalityCard />
                </div>
                <div className="sticky top-48 w-full transition-all duration-500 hover:scale-[1.01]">
                    <NoVendorCard />
                </div>
            </div>
        </div>
    );
}