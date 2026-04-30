import React from 'react';
import { Download, Sparkles } from 'lucide-react';

export default function PDFCard() {
    return (
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-[#F8F9FB] rounded-3xl border border-gray-100 p-12 flex flex-col md:flex-row items-center min-h-[450px]">

            {/* Embedded CSS for 1-by-1 shooting animation */}
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
                @keyframes slideUpFade {
                    0% { opacity: 0; transform: translate(-50%, 20px); }
                    100% { opacity: 1; transform: translate(-50%, 0); }
                }

                /* Animation classes with delays to create the 1-by-1 effect */
                .animate-orb { animation: popOrb 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both; }
                .animate-shoot-1 { animation: shootLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
                .animate-shoot-2 { animation: shootTop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both; }
                .animate-shoot-3 { animation: shootRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s both; }
                .animate-notify { animation: slideUpFade 0.6s ease-out 1.4s both; }
            `}</style>

            {/* Background Concentric Rings */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[1.0]" />
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[0.75]" />
                <div className="absolute inset-0 border border-gray-200/60 rounded-full scale-[0.5]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex-1 space-y-6">
                <div className="inline-block px-4 py-1 rounded-lg border border-[#003A5C]/20 bg-white/50">
                    <span className="text-[#003A5C] text-sm font-medium">Save Time</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                    Save 6+ hours <br /> per 360° report
                </h2>

                <p className="max-w-md text-slate-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
            </div>

            {/* Right Visual Composition */}
            <div className="relative flex-1 w-full h-[400px] mt-12 md:mt-0 flex items-center justify-center">

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

                {/* Orbiting Documents */}

                {/* PDF Left */}
                <div className="absolute bg-white p-3 rounded-xl shadow-xl border border-gray-50 animate-shoot-1 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-8 bg-gray-100 rounded" />
                        <div className="h-1.5 w-12 bg-gray-100 rounded" />
                        <div className="h-1.5 w-10 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold">PDF</span>
                        </div>
                    </div>
                </div>

                {/* PDF Top Center */}
                <div className="absolute bg-white p-4 rounded-xl shadow-xl border border-gray-50 animate-shoot-2 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-10 bg-gray-100 rounded" />
                        <div className="h-1.5 w-14 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold">PDF</span>
                        </div>
                    </div>
                </div>

                {/* DOC Right */}
                <div className="absolute bg-white p-3 rounded-xl shadow-xl border border-gray-50 animate-shoot-3 z-10">
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-8 bg-gray-100 rounded" />
                        <div className="h-1.5 w-12 bg-gray-100 rounded" />
                        <div className="mt-4 flex justify-end">
                            <span className="bg-[#003A5C] text-[10px] text-white px-2 py-0.5 rounded uppercase font-bold">DOC</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Status Notification */}
                <div className="absolute bottom-4 left-1/2 w-full max-w-[340px] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white flex items-center justify-between animate-notify z-20">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#003A5C]/20 shadow-inner">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-slate-800 font-bold text-sm">
                            Your Report is ready.
                        </p>
                    </div>
                    <div className="p-2 bg-[#F8F9FB] rounded-lg text-[#003A5C]">
                        <Download className="w-4 h-4" />
                    </div>
                </div>

            </div>
        </div>
    );
}