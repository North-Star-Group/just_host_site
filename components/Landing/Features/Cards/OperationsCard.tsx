"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Wrench, Clock, ClipboardList } from "lucide-react";

// Reusable Task payload component with smoother spring physics
const TaskPayload = ({ id, colorClass }: { id: string, colorClass: string }) => (
    <motion.div
        layoutId={id}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md z-50 ${colorClass}`}
    >
        <ClipboardList className="w-4 h-4 text-white" />
    </motion.div>
);

export default function OperationsCard() {
    const [step, setStep] = useState(0);

    // Timing sequence for delegation story
    useEffect(() => {
        let isMounted = true;
        const runSequence = async () => {
            while (isMounted) {
                setStep(0); await new Promise(r => setTimeout(r, 800));  // Reset
                if (!isMounted) break;
                setStep(1); await new Promise(r => setTimeout(r, 800));  // Arturo generates Task 1
                if (!isMounted) break;
                setStep(2); await new Promise(r => setTimeout(r, 600));  // Task 1 flies to Housekeeping (Card Reacts)
                if (!isMounted) break;
                setStep(3); await new Promise(r => setTimeout(r, 800));  // Timer 1 appears
                if (!isMounted) break;
                setStep(4); await new Promise(r => setTimeout(r, 800));  // Arturo generates Task 2
                if (!isMounted) break;
                setStep(5); await new Promise(r => setTimeout(r, 600));  // Task 2 flies to Valet (Card Reacts)
                if (!isMounted) break;
                setStep(6); await new Promise(r => setTimeout(r, 1500)); // Timer 2 appears, both tick
                if (!isMounted) break;
                setStep(7); await new Promise(r => setTimeout(r, 1500)); // Hold before reset
            }
        };
        runSequence();
        return () => { isMounted = false; };
    }, []);

    const isArturoActive = step === 1 || step === 4;

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50/50 rounded-2xl border border-gray-100 relative overflow-hidden group">

            {/* Top Row: AI Agent Dispatcher */}
            <div className="relative mt-2 mb-12 flex flex-col items-center z-20">
                <motion.div
                    animate={{
                        boxShadow: isArturoActive
                            ? "0px 0px 15px 4px rgba(0, 40, 63, 0.25)"
                            : "0px 0px 0px 0px rgba(0, 40, 63, 0)",
                        scale: isArturoActive ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-[#00283F] rounded-2xl text-white relative shadow-lg"
                >
                    <Bot className="w-7 h-7" />

                    {/* Arturo's Task Generator */}
                    <div className="absolute -bottom-2 -right-2 flex gap-1 z-50">
                        {step === 1 && <TaskPayload id="task-housekeeping" colorClass="bg-pink-500" />}
                        {step === 4 && <TaskPayload id="task-valet" colorClass="bg-orange-500" />}
                    </div>
                </motion.div>

                <div className="absolute -top-5 text-[10px] font-semibold text-[#00283F] whitespace-nowrap uppercase tracking-widest">
                    ARTURO DELEGATES
                </div>
            </div>

            {/* SVG Connecting Lines */}
            <svg className="absolute top-[38%] left-1/2 -translate-x-1/2 w-56 md:w-64 h-24 md:h-32 -z-10 text-gray-200 pointer-events-none" viewBox="0 0 200 100">
                {/* Line to Housekeeping (Left) */}
                <motion.path
                    d="M 100 0 Q 100 40 40 80"
                    fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    animate={step >= 2 ? { stroke: "#ec4899", opacity: 0.5 } : { stroke: "currentColor", opacity: 1 }}
                />
                {/* Line to Valet (Right) */}
                <motion.path
                    d="M 100 0 Q 100 40 160 80"
                    fill="transparent" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
                    animate={step >= 5 ? { stroke: "#f97316", opacity: 0.5 } : { stroke: "currentColor", opacity: 1 }}
                />
            </svg>

            {/* Bottom Row: Staff Profiles */}
            <div className="flex w-full justify-center gap-6 md:gap-16 relative z-10">

                {/* Housekeeping Profile */}
                <div className="flex flex-col items-center gap-2 md:gap-3">
                    <motion.div
                        // Card reaction animation when task lands
                        animate={
                            step === 2 || step === 3
                                ? { scale: [1, 1.05, 1], borderColor: ["#f3f4f6", "#ec4899", "#f3f4f6"], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px 3px rgba(236, 72, 153, 0.2)", "0px 0px 0px rgba(0,0,0,0)"] }
                                : { scale: 1, borderColor: "#f3f4f6", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }
                        }
                        transition={{ duration: 0.5 }}
                        className="relative flex items-center gap-2.5 p-2 pr-4 bg-white rounded-full border-2 shadow-sm"
                    >
                        {/* Realistic Avatar Image */}
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative shadow-inner shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                alt="Maria Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name/Role */}
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-800">Maria</span>
                            <span className="text-[9px] text-gray-500 uppercase flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5 text-pink-400" /> Housekeeping
                            </span>
                        </div>

                        {/* Task Receiver & Timer */}
                        <div className="absolute -top-3 -right-2 flex items-center gap-1 z-50">
                            {step >= 2 && <TaskPayload id="task-housekeeping" colorClass="bg-pink-500" />}

                            <AnimatePresence>
                                {step >= 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        className="bg-white border border-gray-100 shadow-md rounded-full p-0.5 flex items-center gap-1 px-1.5 whitespace-nowrap"
                                    >
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                                            <Clock className="w-2.5 h-2.5 text-pink-500" />
                                        </motion.div>
                                        <span className="text-[9px] font-mono font-semibold text-gray-600">14:59</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Valet/Maintenance Profile */}
                <div className="flex flex-col items-center gap-2 md:gap-3">
                    <motion.div
                        // Card reaction animation when task lands
                        animate={
                            step === 5 || step === 6
                                ? { scale: [1, 1.05, 1], borderColor: ["#f3f4f6", "#f97316", "#f3f4f6"], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px 3px rgba(249, 115, 22, 0.2)", "0px 0px 0px rgba(0,0,0,0)"] }
                                : { scale: 1, borderColor: "#f3f4f6", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }
                        }
                        transition={{ duration: 0.5 }}
                        className="relative flex items-center gap-2.5 p-2 pr-4 bg-white rounded-full border-2 shadow-sm"
                    >
                        {/* Realistic Avatar Image */}
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative shadow-inner shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                alt="James Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name/Role */}
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-gray-800">James</span>
                            <span className="text-[9px] text-gray-500 uppercase flex items-center gap-1">
                                <Wrench className="w-2.5 h-2.5 text-orange-400" /> Maintenance
                            </span>
                        </div>

                        {/* Task Receiver & Timer */}
                        <div className="absolute -top-3 -right-2 flex items-center gap-1 z-50">
                            {step >= 5 && <TaskPayload id="task-valet" colorClass="bg-orange-500" />}

                            <AnimatePresence>
                                {step >= 6 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10, scale: 0.8 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        className="bg-white border border-gray-100 shadow-md rounded-full p-0.5 flex items-center gap-1 px-1.5 whitespace-nowrap"
                                    >
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                                            <Clock className="w-2.5 h-2.5 text-orange-500" />
                                        </motion.div>
                                        <span className="text-[9px] font-mono font-semibold text-gray-600">29:59</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none"></div>
        </div>
    );
}