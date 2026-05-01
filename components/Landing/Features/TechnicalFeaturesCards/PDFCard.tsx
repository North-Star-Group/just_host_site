import React from 'react';
import { Sparkles, Bot, Check } from 'lucide-react';

export default function PDFCard() {
    return (
        <div className="relative w-full overflow-hidden bg-[#F8F9FB] p-8 md:p-12 flex flex-col min-h-[450px]">

            <style>{`
                @keyframes popOrb {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes shootLeft {
                    0% { opacity: 0; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2) rotate(0deg); }
                    100% { opacity: 1; top: 3rem; left: 3rem; transform: translate(0, 0) scale(1) rotate(-12deg); }
                }
                @keyframes shootTop {
                    0% { opacity: 0; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2); }
                    100% { opacity: 1; top: -1rem; left: 50%; transform: translateX(-50%) scale(1) rotate(0deg); }
                }
                @keyframes shootRight {
                    0% { opacity: 0; top: 50%; right: 50%; transform: translate(50%, -50%) scale(0.2) rotate(0deg); }
                    100% { opacity: 1; top: 5rem; right: 2rem; transform: translate(0, 0) scale(1) rotate(8deg); }
                }
                
                /* New Satisfying Bouncy Spring Notification */
                @keyframes notifyBounce {
                    0% { opacity: 0; transform: translate(-50%, 40px) scale(0.9); }
                    50% { opacity: 1; transform: translate(-50%, -10px) scale(1.03); }
                    75% { transform: translate(-50%, 4px) scale(0.98); }
                    100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
                }

                /* Pop animation for the checkmark */
                @keyframes popCheck {
                    0% { transform: scale(0); opacity: 0; }
                    60% { transform: scale(1.4); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }

                /* Gentle pulse glow for the checkmark background */
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(0, 58, 92, 0.15); }
                    70% { box-shadow: 0 0 0 8px rgba(0, 58, 92, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(0, 58, 92, 0); }
                }

                /* Animation classes with delays to create the 1-by-1 effect */
                .animate-orb { animation: popOrb 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
                .animate-shoot-1 { animation: shootLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
                .animate-shoot-2 { animation: shootTop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both; }
                .animate-shoot-3 { animation: shootRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both; }
                
                /* Upgraded notification timings */
                .animate-notify { animation: notifyBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s both; }
                .animate-check { animation: popCheck 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 2.1s both; }
                .animate-pulse-glow { animation: pulseGlow 2s infinite 2.2s; }
            `}</style>

            {/* Background Concentric Rings */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[1.0]" />
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[0.75]" />
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[0.5]" />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 space-y-6 mb-12">
                <div className="inline-block px-4 py-1 rounded-lg border border-[#003A5C]/20 bg-white/50 shadow-sm">
                    <span className="text-[#003A5C] text-sm font-medium">Custom Training</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                    Train Arturo on your <br /> knowledge base
                </h2>

                <p className="text-sm md:text-base text-gray-500">
                    Upload PDFs, Docs, or URLs to create a custom AI assistant that understands your business inside and out.
                </p>
            </div>

            {/* Visual Composition - pushed to bottom */}
            <div className="relative w-full h-[340px] mt-auto flex items-center justify-center">

                {/* Central Logo Orb */}
                <div className="relative z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#003A5C] to-[#005a8e] flex items-center justify-center shadow-2xl shadow-[#003A5C]/40 animate-orb">
                    <div className="grid grid-cols-2 gap-1 p-2">
                        <div className="w-4 h-4 bg-white rounded-sm" />
                        <div className="w-4 h-4 border-2 border-white rounded-sm" />
                        <div className="w-4 h-4 border-2 border-white rounded-sm" />
                        <div className="w-4 h-4 bg-white rounded-sm" />
                    </div>

                    {/* Sparkle Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                        <Sparkles className="w-4 h-4 text-[#003A5C]" fill="currentColor" />
                    </div>
                </div>

                {/* PDF Left */}
                <div className="absolute bg-white p-3 rounded-xl shadow-xl border border-gray-50 animate-shoot-1 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-8 bg-gray-100 rounded" />
                        <div className="h-1.5 w-12 bg-gray-100 rounded" />
                        <div className="h-1.5 w-10 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-wide">PDF</span>
                        </div>
                    </div>
                </div>

                {/* PDF Top Center */}
                <div className="absolute bg-white p-4 rounded-xl shadow-xl border border-gray-50 animate-shoot-2 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-10 bg-gray-100 rounded" />
                        <div className="h-1.5 w-14 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-wide">PDF</span>
                        </div>
                    </div>
                </div>

                {/* DOC Right */}
                <div className="absolute bg-white p-3 rounded-xl shadow-xl border border-gray-50 animate-shoot-3 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-8 bg-gray-100 rounded" />
                        <div className="h-1.5 w-12 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold tracking-wide">DOC</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Notification */}
                <div className="absolute bottom-4 left-1/2 w-full max-w-[340px] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white flex items-center justify-between animate-notify z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#00283F] border-2 border-[#003A5C]/20 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                            <Bot size={20} className="text-white" />
                        </div>
                        <p className="text-slate-800 font-bold text-sm">
                            Knowledge Acquired.
                        </p>
                    </div>
                    <div className="p-2 bg-[#F8F9FB] rounded-lg text-[#003A5C] animate-pulse-glow rounded-full">
                        <Check strokeWidth={3} className="w-4 h-4 animate-check" />
                    </div>
                </div>

            </div>
        </div>
    );
}