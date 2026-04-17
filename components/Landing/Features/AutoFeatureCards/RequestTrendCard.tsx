'use client';

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { MoreVertical } from 'lucide-react';

// Simulated data showing the transition to automated efficiency
const data = [
    { day: 'Mon', automated: 20, manual: 85, afterHours: 10 },
    { day: 'Tue', automated: 30, manual: 75, afterHours: 12 },
    { day: 'Wed', automated: 50, manual: 50, afterHours: 18 },
    { day: 'Thu', automated: 75, manual: 30, afterHours: 25 },
    { day: 'Fri', automated: 85, manual: 25, afterHours: 28 },
    { day: 'Sat', automated: 95, manual: 15, afterHours: 35 },
    { day: 'Sun', automated: 90, manual: 20, afterHours: 32 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="px-3 py-2 rounded-lg shadow-lg text-white text-sm"
                style={{ backgroundColor: 'var(--color-primary)' }}
            >
                <p className="font-semibold mb-1">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.name}: {entry.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default function RequestTrendCard() {
    return (
        <div
            className="w-full max-w-2xl p-6 rounded-2xl shadow-sm relative"
            style={{ backgroundColor: 'var(--color-cream)' }}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--color-primary)' }}
                >
                    Guest Request Trends
                </h2>
                <button
                    className="p-1 rounded-full hover:bg-black/5 transition-colors"
                    style={{ color: 'var(--color-primary-light)' }}
                >
                    <MoreVertical size={20} />
                </button>
            </div>

            {/* Chart Area */}
            <div className="h-64 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 120, left: -20, bottom: 0 }}>
                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={false}
                            stroke="#E5E7EB"
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-primary-light)', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'var(--color-primary-light)', fontSize: 12 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#9CA3AF', strokeWidth: 1, strokeDasharray: '3 3' }} />

                        <Line
                            type="monotone"
                            name="Automated (Time Saved)"
                            dataKey="automated"
                            stroke="var(--color-accent-blue)"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6, fill: 'var(--color-accent-blue)', stroke: 'white', strokeWidth: 2 }}
                        />
                        <Line
                            type="monotone"
                            name="Manual Queries"
                            dataKey="manual"
                            stroke="var(--color-accent-teal)"
                            strokeWidth={3}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            name="After-Hours (24/7)"
                            dataKey="afterHours"
                            stroke="var(--color-accent-gold)"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>

                {/* Custom Legend positioned absolutely to match the design */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                    <div className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-500 shadow-sm" style={{ backgroundColor: 'var(--color-accent-blue)' }}>
                        Automated
                    </div>
                    <div className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-teal-500 shadow-sm" style={{ backgroundColor: 'var(--color-accent-teal)' }}>
                        Manual
                    </div>
                    <div className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-amber-500 shadow-sm" style={{ backgroundColor: 'var(--color-accent-gold)' }}>
                        After-Hours
                    </div>
                </div>
            </div>
        </div>
    );
}