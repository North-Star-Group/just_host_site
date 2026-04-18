import React from 'react';

export default function MultiAgentCard() {
    return (
        <div className="w-full max-w-[540px] h-[360px] bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10">
                <p className="text-xs  font-medium tracking-[0.15em] text-gray-500 mb-4 uppercase">
                    AI System
                </p>
                <h2 className="text-xl text-black mb-4 tracking-tight leading-none">
                    Multi-Agent System
                </h2>
                <p className="text-lg  text-black leading-snug max-w-[85%]">
                    Not a single AI —{' '}
                    <span className="text-gray-400">
                        multiple specialized agents
                    </span>{' '}
                    working together seamlessly to handle complex, multi-step
                    operations.
                </p>
            </div>

            {/* Custom Isometric SVG Illustration */}
            <div className="absolute -bottom-2 -right-4 w-[280px] h-[220px]">
                <svg
                    viewBox="0 0 200 150"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Base Grid Plane */}
                    <path
                        d="M 100 140 L 10 95 L 100 50 L 190 95 Z"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M 55 72.5 L 145 117.5 M 145 72.5 L 55 117.5"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />

                    {/* Dashed Connecting Lines */}
                    <path
                        d="M 100 95 L 45 65 M 100 95 L 155 65"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                    />

                    {/* Left Node (Small Cube with circle) */}
                    <g transform="translate(45, 60)">
                        <path d="M 0 -12 L 18 -3 L 0 6 L -18 -3 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M -18 -3 L 0 6 L 0 24 L -18 15 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 18 -3 L 0 6 L 0 24 L 18 15 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        {/* Top Face Detail */}
                        <ellipse cx="0" cy="-3" rx="6" ry="3" fill="none" stroke="#000" strokeWidth="0.75" />
                    </g>

                    {/* Right Node (Flat Platform with detail) */}
                    <g transform="translate(155, 60)">
                        <path d="M 0 -12 L 18 -3 L 0 6 L -18 -3 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M -18 -3 L 0 6 L 0 12 L -18 3 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 18 -3 L 0 6 L 0 12 L 18 3 Z" fill="#fff" stroke="#000" strokeWidth="1" strokeLinejoin="round" />
                        {/* Top Face Detail */}
                        <path d="M 0 -8 L 8 -4 L 0 0 L -8 -4 Z" fill="none" stroke="#000" strokeWidth="0.75" />
                    </g>

                    {/* Center Main Node (Large Cube) */}
                    <g transform="translate(100, 95)">
                        {/* Top Face */}
                        <path d="M 0 -24 L 30 -9 L 0 6 L -30 -9 Z" fill="#fff" stroke="#000" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Left Face */}
                        <path d="M -30 -9 L 0 6 L 0 36 L -30 21 Z" fill="#fff" stroke="#000" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Right Face */}
                        <path d="M 30 -9 L 0 6 L 0 36 L 30 21 Z" fill="#fff" stroke="#000" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Inner Tech Details on Top Face */}
                        <path d="M 0 -16 L 14 -9 L 0 -2 L -14 -9 Z" fill="none" stroke="#000" strokeWidth="1" />
                        <circle cx="0" cy="-9" r="2" fill="#000" />
                        <path d="M 0 -16 L 0 -2 M -14 -9 L 14 -9" fill="none" stroke="#000" strokeWidth="0.5" />
                        {/* Side Panel Detail (Left) */}
                        <path d="M -22 2 L -8 9 L -8 20 L -22 13 Z" fill="none" stroke="#000" strokeWidth="0.75" />
                        {/* Side Panel Detail (Right) */}
                        <path d="M 22 2 L 8 9 L 8 20 L 22 13 Z" fill="none" stroke="#000" strokeWidth="0.75" />
                    </g>
                </svg>
            </div>
        </div>
    );
}