'use client';

import React from 'react';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    ReferenceLine,
    XAxis,
    YAxis,
} from 'recharts';
import { MoreVertical } from 'lucide-react';

// Using array ranges [bottom, top] to create the centered, symmetrical streamgraph effect
const data = [
    { step: '0', layer1: [-15, 15], layer2: [-25, 25], layer3: [-35, 35] },
    { step: '1', layer1: [-18, 18], layer2: [-28, 28], layer3: [-38, 38] },
    { step: '2', layer1: [-12, 12], layer2: [-20, 20], layer3: [-28, 28] }, // The "squeeze" (fewer errors/filtering)
    { step: '3', layer1: [-14, 14], layer2: [-22, 22], layer3: [-30, 30] },
    { step: '4', layer1: [-20, 20], layer2: [-35, 35], layer3: [-45, 45] }, // Expanding out to successful interactions
    { step: '5', layer1: [-22, 22], layer2: [-38, 38], layer3: [-48, 48] },
    { step: '6', layer1: [-20, 20], layer2: [-36, 36], layer3: [-46, 46] },
];

export default function EfficiencyFunnelCard() {
    return (
        <div
            className="w-full max-w-2xl p-6 rounded-2xl shadow-sm"
            style={{ backgroundColor: 'var(--color-cream)' }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--color-primary)' }}
                >
                    Resolution Efficiency
                </h2>
                <button
                    className="p-1 rounded-full hover:bg-black/5 transition-colors"
                    style={{ color: 'var(--color-primary-light)' }}
                >
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Stats Row */}
            <div className="flex justify-between items-end mb-8 pr-4">
                <div>
                    <p className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                        15.2K
                    </p>
                    <p className="text-sm font-medium opacity-70" style={{ color: 'var(--color-primary-light)' }}>
                        Total Inquiries
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                        85%
                    </p>
                    <p className="text-sm font-medium opacity-70" style={{ color: 'var(--color-primary-light)' }}>
                        AI Resolved
                    </p>
                </div>
                <div>
                    <p className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                        15%
                    </p>
                    <p className="text-sm font-medium opacity-70" style={{ color: 'var(--color-primary-light)' }}>
                        Staff Escalated
                    </p>
                </div>
            </div>

            {/* Chart Area */}
            <div className="h-48 w-full relative mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        {/* Hiding axes as the mockup focuses strictly on the visual flow */}
                        <XAxis dataKey="step" hide />
                        <YAxis domain={[-50, 50]} hide />

                        {/* Vertical Reference Lines to match mockup styling */}
                        <ReferenceLine x="1" stroke="var(--color-primary-light)" strokeDasharray="3 3" opacity={0.5} />
                        <ReferenceLine x="3" stroke="var(--color-primary-light)" strokeDasharray="3 3" opacity={0.5} />
                        <ReferenceLine x="5" stroke="var(--color-primary-light)" strokeDasharray="3 3" opacity={0.5} />

                        {/* Area Layers - Back to Front */}
                        <Area
                            type="monotone"
                            dataKey="layer3"
                            stroke="none"
                            fill="var(--color-accent-blue)"
                            fillOpacity={0.15}
                        />
                        <Area
                            type="monotone"
                            dataKey="layer2"
                            stroke="none"
                            fill="var(--color-accent-blue)"
                            fillOpacity={0.3}
                        />
                        <Area
                            type="monotone"
                            dataKey="layer1"
                            stroke="none"
                            fill="var(--color-accent-blue)"
                            fillOpacity={0.8}
                        />
                    </AreaChart>
                </ResponsiveContainer>

                {/* Floating Percentage Labels over Reference Lines */}
                <div className="absolute top-[10%] left-[18%] -translate-x-1/2 bg-white/90 text-xs font-bold px-2 py-1 rounded-md shadow-sm" style={{ color: 'var(--color-primary)' }}>
                    100%
                </div>
                <div className="absolute bottom-[20%] left-[18%] -translate-x-1/2 text-xs font-semibold" style={{ color: 'var(--color-primary-light)' }}>
                    0s
                </div>

                <div className="absolute top-[15%] left-[50%] -translate-x-1/2 text-xs font-bold px-2 py-1 rounded-md shadow-sm text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
                    85%
                </div>
                <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 text-xs font-semibold" style={{ color: 'var(--color-primary-light)' }}>
                    &lt; 5s
                </div>

                <div className="absolute top-[10%] left-[82%] -translate-x-1/2 bg-white/90 text-xs font-bold px-2 py-1 rounded-md shadow-sm" style={{ color: 'var(--color-primary)' }}>
                    15%
                </div>
                <div className="absolute bottom-[20%] left-[82%] -translate-x-1/2 text-xs font-semibold" style={{ color: 'var(--color-primary-light)' }}>
                    Escalated
                </div>
            </div>
        </div>
    );
}