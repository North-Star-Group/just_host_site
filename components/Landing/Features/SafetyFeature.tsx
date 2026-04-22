import React from 'react';
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
                <div className="flex flex-col gap-4 max-w-3xl mx-auto mb-8 justify-center items-center text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-tight text-center">
                        Built on a foundation of absolute trust
                    </h2>
                    <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mt-2 text-center text-balance">
                        We prioritize your security, data ownership, and operational reliability above all else. Experience a platform designed from the ground up to meet the highest enterprise standards in the industry.
                    </p>
                </div>

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