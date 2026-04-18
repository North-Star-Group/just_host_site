import React from 'react';
// Assuming the 4 cards are in the same directory or adjust imports accordingly
import MultiAgentCard from './SafetyFeatureCards/MultiAgentCard';
import HospitalityCard from './SafetyFeatureCards/HospitalityCard';
import SwissInfrastructureCard from './SafetyFeatureCards/SwissCard';
import NoVendorCard from './SafetyFeatureCards/NoVendorCard';

export default function SafetyFeature() {
    return (
        // The background color closely matches the light gray from your reference image
        <div className="min-h-screen bg-[#fafafa] p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-[1120px] w-full">
                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Top Left */}
                    <div className="flex justify-center md:justify-end">
                        <MultiAgentCard />
                    </div>

                    {/* Top Right */}
                    <div className="flex justify-center md:justify-start">
                        <HospitalityCard />
                    </div>

                    {/* Bottom Left */}
                    <div className="flex justify-center md:justify-end">
                        <SwissInfrastructureCard />
                    </div>

                    {/* Bottom Right */}
                    <div className="flex justify-center md:justify-start">
                        <NoVendorCard />
                    </div>

                </div>
            </div>
        </div>
    );
}