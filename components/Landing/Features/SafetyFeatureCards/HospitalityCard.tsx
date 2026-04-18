import React from 'react';

export default function HospitalityCard() {
    return (
        <div className="w-full max-w-[540px] h-[360px] bg-[#050505] rounded-3xl p-10 shadow-lg border border-neutral-900 flex flex-col relative overflow-hidden">
            {/* Text Content */}
            <div className="relative z-10">
                <p className="text-xs  font-medium tracking-[0.15em] text-neutral-500 mb-4 uppercase">
                    Hospitality
                </p>
                <h2 className="text-xl  text-white mb-4 tracking-tight leading-none">
                    Hospitality-First Design
                </h2>
                <p className="text-lg  text-neutral-300 leading-snug max-w-[85%]">
                    Built specifically for hotel workflows from the ground up, understanding the nuances of guest experience and staff operations.
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
                        d="M 110 145 L 20 100 L 110 55 L 200 100 Z"
                        fill="none"
                        stroke="#333333"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />
                    <path
                        d="M 65 77.5 L 155 122.5 M 155 77.5 L 65 122.5"
                        fill="none"
                        stroke="#333333"
                        strokeWidth="0.75"
                        strokeDasharray="2 2"
                    />

                    {/* Building (Back Right) */}
                    <g transform="translate(160, 65)">
                        {/* Top Face */}
                        <path d="M 0 -35 L 15 -27.5 L 0 -20 L -15 -27.5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Left Face */}
                        <path d="M -15 -27.5 L 0 -20 L 0 10 L -15 2.5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Right Face */}
                        <path d="M 15 -27.5 L 0 -20 L 0 10 L 15 2.5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />

                        {/* Window Grid on Left Face */}
                        <g stroke="#fff" strokeWidth="0.5" fill="none">
                            <path d="M -12 -23 L -3 -18.5" />
                            <path d="M -12 -17 L -3 -12.5" />
                            <path d="M -12 -11 L -3 -6.5" />
                            <path d="M -12 -5 L -3 -0.5" />

                            <path d="M -10 -24 L -10 -2" />
                            <path d="M -5 -21.5 L -5 0.5" />
                        </g>
                    </g>

                    {/* Floating UI Panel (Left) */}
                    <g transform="translate(60, 75)">
                        {/* Panel */}
                        <path d="M -10 -15 L 10 -5 L 10 5 L -10 -5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Abstract User Icon on Panel */}
                        <circle cx="-1" cy="-7" r="1.5" fill="none" stroke="#fff" strokeWidth="0.75" />
                        <path d="M -4 -3 C -4 -5, 2 -5, 2 -3" fill="none" stroke="#fff" strokeWidth="0.75" />
                        {/* Connector Line */}
                        <path d="M 10 0 L 30 10" fill="none" stroke="#fff" strokeWidth="0.75" strokeDasharray="1 2" />
                    </g>

                    {/* Reception Desk */}
                    <g transform="translate(110, 105)">
                        {/* Desk Top */}
                        <path d="M -15 -10 L 10 -22.5 L 20 -17.5 L -5 -5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Desk Left Front */}
                        <path d="M -15 -10 L -5 -5 L -5 5 L -15 0 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        {/* Desk Right Front */}
                        <path d="M -5 -5 L 20 -17.5 L 20 -7.5 L -5 5 Z" fill="#050505" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />

                        {/* Computer Monitor */}
                        <g transform="translate(2, -14)">
                            <path d="M -3 -3 L 3 -6 L 3 -1 L -3 2 Z" fill="#050505" stroke="#fff" strokeWidth="0.75" />
                            <path d="M 0 0 L 0 3" fill="none" stroke="#fff" strokeWidth="0.75" />
                        </g>

                        {/* Receptionist */}
                        <g transform="translate(8, -25)">
                            <circle cx="0" cy="0" r="2" fill="none" stroke="#fff" strokeWidth="1" />
                            <path d="M -3 6 L 0 3 L 3 6" fill="none" stroke="#fff" strokeWidth="1" />
                        </g>
                    </g>

                    {/* Guest and Luggage */}
                    <g transform="translate(145, 125)">
                        {/* Connecting arrow line from guest to desk */}
                        <path d="M -10 -5 L -25 -12.5" fill="none" stroke="#fff" strokeWidth="0.75" />
                        <path d="M -22 -14 L -25 -12.5 L -24 -9" fill="none" stroke="#fff" strokeWidth="0.75" />

                        {/* Guest */}
                        <circle cx="0" cy="-12" r="2" fill="none" stroke="#fff" strokeWidth="1" />
                        <path d="M -2 -9 L 0 -10 L 2 -9 L 2 -2" fill="none" stroke="#fff" strokeWidth="1" strokeLinejoin="round" />
                        <path d="M -2 -2 L 0 -5 L 0 -10" fill="none" stroke="#fff" strokeWidth="1" />

                        {/* Suitcase */}
                        <g transform="translate(7, -3)">
                            <path d="M -3 -4 L 2 -6.5 L 2 0 L -3 2 Z" fill="#050505" stroke="#fff" strokeWidth="0.75" strokeLinejoin="round" />
                            {/* Handle */}
                            <path d="M -1 -5.5 L -1 -7 L 1 -8 L 1 -6.5" fill="none" stroke="#fff" strokeWidth="0.5" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}