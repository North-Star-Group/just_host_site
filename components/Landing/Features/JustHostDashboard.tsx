import React from "react";

export default function Differentiators() {
    return (
        <section className="min-h-screen bg-[var(--color-cream,#f8f9fa)] p-8 font-sans flex items-center justify-center">
            {/* Embedded styles for sequential fade-and-lift animations */}
            <style>{`
                @keyframes fadeLift {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-card-1 { animation: fadeLift 0.6s ease-out forwards; animation-delay: 0.1s; opacity: 0; }
                .animate-card-2 { animation: fadeLift 0.6s ease-out forwards; animation-delay: 0.25s; opacity: 0; }
                .animate-card-3 { animation: fadeLift 0.6s ease-out forwards; animation-delay: 0.4s; opacity: 0; }
                .animate-card-4 { animation: fadeLift 0.6s ease-out forwards; animation-delay: 0.55s; opacity: 0; }
            `}</style>

            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--color-primary,#111827)] mb-4">Unique Differentiators</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        The core architectural advantages that make our platform built for the future of hospitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1: Multi-Agent System */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group cursor-default animate-card-1 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[var(--color-accent-blue,#2563eb)]/10 text-[var(--color-accent-blue,#2563eb)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-blue,#2563eb)] group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="18" cy="5" r="3" />
                                    <circle cx="6" cy="12" r="3" />
                                    <circle cx="18" cy="19" r="3" />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary,#111827)] mb-3">Multi-Agent System</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Not a single AI — multiple specialized agents working together seamlessly to handle complex, multi-step operations.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Hospitality-First Design */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group cursor-default animate-card-2 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary,#111827)] mb-3">Hospitality-First Design</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                Built specifically for hotel workflows from the ground up, understanding the nuances of guest experience and staff operations.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Swiss Infrastructure */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group cursor-default animate-card-3 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-red-500/10 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M12 8v8" />
                                    <path d="M8 12h8" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary,#111827)] mb-3">Swiss Infrastructure</h3>
                            <ul className="text-gray-500 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Data hosted securely in Switzerland
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Fully GDPR & AI Act compliant
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 4: No Vendor Lock-in */}
                    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] group cursor-default animate-card-4 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    <path d="M12 11v-1" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--color-primary,#111827)] mb-3">No Vendor Lock-in</h3>
                            <ul className="text-gray-500 space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    100% full data ownership
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Export your data anytime
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}