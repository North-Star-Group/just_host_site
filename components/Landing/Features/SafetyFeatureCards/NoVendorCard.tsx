import React from 'react';

export default function NoVendorCard() {
    return (
        <div className="w-full max-w-[540px] h-[360px] bg-[#050505] rounded-3xl p-10 shadow-lg border border-neutral-900 flex flex-col relative overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10">
                <p className="text-xs  font-medium tracking-[0.15em] text-neutral-500 mb-4 uppercase">
                    Ownership
                </p>
                <h2 className="text-xl  text-white mb-4 tracking-tight leading-none">
                    No Vendor Lock-in
                </h2>
                <div className="text-lg text-neutral-300 leading-snug max-w-[85%] space-y-4">
                    <p>100% full data ownership</p>
                    <p>Export your data anytime</p>
                </div>
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
                        stroke="#333333"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M 55 72.5 L 145 117.5 M 145 72.5 L 55 117.5"
                        fill="none"
                        stroke="#333333"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />

                    {/* Data Lines Escaping (Bottom Left) */}
                    <g stroke="#fff" strokeWidth="1" fill="none" strokeLinejoin="round">
                        <path d="M 60 115 L 80 125 L 105 112.5" />
                        <path d="M 50 110 L 70 120 L 95 107.5" />
                        <path d="M 40 105 L 60 115 L 85 102.5" />
                    </g>

                    {/* Key */}
                    <g transform="translate(65, 105)">
                        {/* Key Head */}
                        <path d="M 0 0 L 10 5 L 5 7.5 L -5 2.5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 0 0 L -5 2.5 L -5 -2.5 L 0 -5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 10 5 L 5 7.5 L 5 2.5 L 10 0 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M 0 -5 L 10 0 L 10 5 L 0 0 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Key Shaft */}
                        <path d="M 7 3.5 L 25 -5.5 L 22 -7 L 4 2 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Key Teeth */}
                        <path d="M 18 -2 L 18 2 L 15 3.5 L 15 -0.5 M 22 -4 L 22 0 L 19 1.5 L 19 -2.5" fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                    </g>

                    {/* Padlock */}
                    <g transform="translate(130, 85)">
                        {/* Open Shackle (U-shape) */}
                        <path d="M -10 -20 L -10 -35 C -10 -45, 10 -45, 10 -35 L 10 -15" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Shackle shadow/depth effect */}
                        <path d="M -8 -20 L -8 -35 C -8 -42, 8 -42, 8 -35 L 8 -15" fill="none" stroke="#333" strokeWidth="0.5" />

                        {/* Lock Body */}
                        {/* Top */}
                        <path d="M 0 -25 L 20 -15 L 0 -5 L -20 -15 Z" fill="#050505" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Left */}
                        <path d="M -20 -15 L 0 -5 L 0 15 L -20 5 Z" fill="#050505" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Right */}
                        <path d="M 20 -15 L 0 -5 L 0 15 L 20 5 Z" fill="#050505" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />

                        {/* Keyhole (Left Face) */}
                        <g transform="translate(-10, -2)">
                            <ellipse cx="0" cy="0" rx="3" ry="5" transform="rotate(26)" fill="#fff" />
                            <path d="M -2 2 L 2 4 L 0 8 L -4 6 Z" fill="#fff" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}