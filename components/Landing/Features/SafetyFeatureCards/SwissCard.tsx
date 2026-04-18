import React from 'react';

export default function SwissInfrastructureCard() {
    return (
        <div className="w-full max-w-[540px] h-[360px] bg-[#CF3835] rounded-3xl p-10 shadow-lg border border-[#B92F2C] flex flex-col relative overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10">
                <p className="text-xs  font-medium tracking-[0.15em] text-red-200 mb-4 uppercase">
                    Data
                </p>
                <h2 className="text-xl  text-white mb-4 tracking-tight leading-none">
                    Swiss Infrastructure
                </h2>
                <div className="text-lg  text-red-50 leading-snug max-w-[85%] space-y-4">
                    <p>Data hosted securely in Switzerland</p>
                    <p>Fully GDPR & AI Act compliant</p>
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
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M 55 72.5 L 145 117.5 M 145 72.5 L 55 117.5"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />

                    {/* Mountains (Background) */}
                    <g stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none" strokeLinejoin="round">
                        {/* Left Mountain */}
                        <path d="M 125 75 L 145 45 L 155 60 L 175 35 L 200 65" />
                        {/* Snow Caps */}
                        <path d="M 140 52 L 145 55 L 148 50" strokeWidth="0.75" />
                        <path d="M 168 44 L 175 48 L 180 41" strokeWidth="0.75" />
                    </g>

                    {/* Data Lines (Bottom Left to Servers) */}
                    <g stroke="rgba(255,255,255,0.8)" strokeWidth="1" fill="none" strokeLinejoin="round">
                        <path d="M 30 115 L 60 130 L 100 110" />
                        <path d="M 25 105 L 55 120 L 95 100" />
                        <path d="M 20 95 L 50 110 L 90 90" />

                        {/* Nodes on data lines */}
                        <circle cx="60" cy="130" r="1.5" fill="#fff" stroke="none" />
                        <circle cx="55" cy="120" r="1.5" fill="#fff" stroke="none" />
                        <circle cx="50" cy="110" r="1.5" fill="#fff" stroke="none" />
                    </g>

                    {/* Server Rack 2 (Back Right) */}
                    <g transform="translate(125, 75)">
                        {/* Top */}
                        <path d="M 0 -25 L 15 -17.5 L 0 -10 L -15 -17.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Left */}
                        <path d="M -15 -17.5 L 0 -10 L 0 15 L -15 7.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Right */}
                        <path d="M 15 -17.5 L 0 -10 L 0 15 L 15 7.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />

                        {/* Server slots (Left face) */}
                        <path d="M -12 -12 L -3 -7.5 M -12 -7 L -3 -2.5 M -12 -2 L -3 2.5 M -12 3 L -3 7.5" fill="none" stroke="#fff" strokeWidth="0.75" />
                        {/* Server slots (Right face) */}
                        <path d="M 12 -12 L 3 -7.5 M 12 -7 L 3 -2.5 M 12 -2 L 3 2.5 M 12 3 L 3 7.5" fill="none" stroke="#fff" strokeWidth="0.75" />
                    </g>

                    {/* Server Rack 1 (Front Left) */}
                    <g transform="translate(95, 95)">
                        {/* Top */}
                        <path d="M 0 -25 L 15 -17.5 L 0 -10 L -15 -17.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Left */}
                        <path d="M -15 -17.5 L 0 -10 L 0 15 L -15 7.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
                        {/* Right */}
                        <path d="M 15 -17.5 L 0 -10 L 0 15 L 15 7.5 Z" fill="#CF3835" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />

                        {/* Server slots & Lights (Left face) */}
                        <path d="M -12 -12 L -3 -7.5 M -12 -7 L -3 -2.5 M -12 -2 L -3 2.5 M -12 3 L -3 7.5" fill="none" stroke="#fff" strokeWidth="1" />
                        <circle cx="-10" cy="-10" r="0.75" fill="#fff" />
                        <circle cx="-10" cy="-5" r="0.75" fill="#fff" />
                        <circle cx="-10" cy="0" r="0.75" fill="#fff" />
                        <circle cx="-10" cy="5" r="0.75" fill="#fff" />

                        {/* Server slots (Right face) */}
                        <path d="M 12 -12 L 3 -7.5 M 12 -7 L 3 -2.5 M 12 -2 L 3 2.5 M 12 3 L 3 7.5" fill="none" stroke="#fff" strokeWidth="1" />
                    </g>
                </svg>
            </div>
        </div>
    );
}