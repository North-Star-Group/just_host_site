"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    MousePointerClick,
    ShieldAlert,
    ArrowRight,
    CheckCircle2,
    AlertCircle
} from "lucide-react";

type Task = {
    id: number;
    type: "auto" | "suggested" | "escalated";
    text: string;
    time: string;
};

const DECISION_TIERS = [
    {
        id: "auto",
        title: "Automatic",
        percentage: 80,
        desc: "Routine tasks handled instantly.",
        icon: Zap,
        color: "emerald",
        bgClass: "bg-emerald-50",
        textClass: "text-emerald-600",
        borderClass: "border-emerald-200",
        ringClass: "ring-emerald-500/30"
    },
    {
        id: "suggested",
        title: "Suggested",
        percentage: 15,
        desc: "Requires quick human approval.",
        icon: MousePointerClick,
        color: "blue",
        bgClass: "bg-blue-50",
        textClass: "text-blue-600",
        borderClass: "border-blue-200",
        ringClass: "ring-blue-500/30"
    },
    {
        id: "escalated",
        title: "Escalated",
        percentage: 5,
        desc: "Complex cases for human review.",
        icon: ShieldAlert,
        color: "rose",
        bgClass: "bg-rose-50",
        textClass: "text-rose-600",
        borderClass: "border-rose-200",
        ringClass: "ring-rose-500/30"
    }
];

// Simulated real-time task queue
const TASK_SEQUENCE: Task[] = [
    { id: 1, type: "auto", text: "Process standard room checkout", time: "0ms" },
    { id: 2, type: "auto", text: "Sync daily OTA commissions", time: "120ms" },
    { id: 3, type: "suggested", text: "Unusual F&B vendor invoice amount", time: "Pending" },
    { id: 4, type: "auto", text: "Automated standard guest refund", time: "45ms" },
    { id: 5, type: "escalated", text: "High-risk chargeback dispute", time: "Alert" },
    { id: 6, type: "auto", text: "Update RevPAR forecasting models", time: "80ms" },
];

export default function IntegrationsCard() {
    const [activeTaskIndex, setActiveTaskIndex] = useState(0);
    const [processedTasks, setProcessedTasks] = useState<Task[]>([]);

    // Orchestrate the live feed loop
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTaskIndex((prev) => {
                const next = (prev + 1) % TASK_SEQUENCE.length;

                // Add to recent feed (keep last 3)
                setProcessedTasks((current) => {
                    const updated = [TASK_SEQUENCE[prev], ...current];
                    return updated.slice(0, 3);
                });

                return next;
            });
        }, 2800); // 2.8s per task to allow smooth reading

        return () => clearInterval(timer);
    }, []);

    const activeTask = TASK_SEQUENCE[activeTaskIndex];

    return (
        <div className="w-full h-full bg-white rounded-2xl p-5 flex flex-col gap-5 relative overflow-hidden font-sans border-0">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* --- HEADER & PROGRESS BAR --- */}
            <div className="relative z-10 flex flex-col gap-3 shrink-0">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 tracking-tight">Decision Engine</h2>
                        <p className="text-xs text-gray-500 font-medium mt-0.5">3-level autonomous routing</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">Live</span>
                    </div>
                </div>

                {/* Proportional Distribution Bar */}
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex gap-0.5">
                    {DECISION_TIERS.map((tier, i) => (
                        <motion.div
                            key={tier.id}
                            initial={{ width: 0 }}
                            animate={{ width: `${tier.percentage}%` }}
                            transition={{ duration: 1.5, delay: 0.2 + i * 0.2, ease: "easeOut" }}
                            className={`h-full ${tier.bgClass.replace('50', '400')}`} // Darken bg for bar
                        />
                    ))}
                </div>
            </div>

            {/* --- 3-TIER CARDS (Vertical Flex for smaller container) --- */}
            <div className="flex flex-col gap-2 relative z-10 shrink-0">
                {DECISION_TIERS.map((tier) => {
                    const Icon = tier.icon;
                    const isActive = activeTask.type === tier.id;

                    return (
                        <motion.div
                            key={tier.id}
                            animate={{
                                scale: isActive ? 1.02 : 1,
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`relative p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${isActive
                                    ? `${tier.bgClass} ${tier.borderClass} ring-2 ${tier.ringClass} shadow-md`
                                    : "bg-white border-gray-100 shadow-sm opacity-60"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${isActive ? 'bg-white' : tier.bgClass}`}>
                                    <Icon className={`w-4 h-4 ${tier.textClass}`} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className={`text-sm font-semibold mb-0.5 ${isActive ? 'text-gray-900' : 'text-gray-600'}`}>
                                        {tier.title}
                                    </h3>
                                    <p className="text-[10px] text-gray-500 leading-tight">
                                        {tier.desc}
                                    </p>
                                </div>
                            </div>
                            
                            <span className={`text-lg font-bold tracking-tighter ${isActive ? tier.textClass : 'text-gray-300'}`}>
                                {tier.percentage}%
                            </span>

                            {/* Active Pulse Indicator */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${tier.bgClass.replace('50', '500')} border border-white`}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* --- LIVE PROCESSING TERMINAL --- */}
            <div className="mt-auto relative z-10 bg-[#001b2a] rounded-xl p-3 shadow-inner border border-slate-800 shrink-0">
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center justify-between">
                    <span>Routing Log</span>
                    <span className="font-mono">{new Date().toISOString().split('T')[1].split('.')[0]} UTC</span>
                </div>

                <div className="relative h-[24px] overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeTask.id}
                            initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(2px)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="absolute inset-0 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                {activeTask.type === 'auto' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                                {activeTask.type === 'suggested' && <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />}
                                {activeTask.type === 'escalated' && <AlertCircle className="w-3.5 h-3.5 text-rose-400" />}

                                <span className="text-[11px] font-medium text-slate-200 truncate max-w-[150px] md:max-w-xs">
                                    {activeTask.text}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                                <ArrowRight className="w-3 h-3 text-slate-600" />
                                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/50 ${activeTask.type === 'auto' ? 'text-emerald-400' :
                                        activeTask.type === 'suggested' ? 'text-blue-400' : 'text-rose-400'
                                    }`}>
                                    {activeTask.time}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
    );
}
