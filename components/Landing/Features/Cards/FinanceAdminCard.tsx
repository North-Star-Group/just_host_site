"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Bot,
    CreditCard,
    Mail,
    Bed,
    RefreshCw,
    TrendingUp,
    Building2,
    CheckCircle2,
    FileText,
    ArrowUpRight
} from "lucide-react";

export default function HotelFinanceAdminCard() {
    const [scene, setScene] = useState(0);

    // Orchestrate the 4-part Hotel Management sequence
    useEffect(() => {
        let isMounted = true;
        const runSequence = async () => {
            while (isMounted) {
                // Scene 0: Reset / Intro
                setScene(0);
                await new Promise((r) => setTimeout(r, 1000));
                if (!isMounted) break;

                // Scene 1: Invoicing (Global Bookings)
                setScene(1);
                await new Promise((r) => setTimeout(r, 4500));
                if (!isMounted) break;

                // Scene 2: Accounting Automation (PMS Sync)
                setScene(2);
                await new Promise((r) => setTimeout(r, 4500));
                if (!isMounted) break;

                // Scene 3: Expense Tracking (Vendor Payments)
                setScene(3);
                await new Promise((r) => setTimeout(r, 4500));
                if (!isMounted) break;

                // Scene 4: Budget Forecasting (RevPAR & Occupancy)
                setScene(4);
                await new Promise((r) => setTimeout(r, 4500));
            }
        };
        runSequence();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div
            className="w-full h-full flex flex-col items-center py-6 px-4 rounded-2xl border border-gray-100 relative overflow-hidden group shadow-sm transition-colors duration-1000"
            style={{
                backgroundColor: scene === 1 ? "rgba(0, 58, 92, 0.08)" : "#f8fafc",
            }}
        >
            {/* ARTURO Master Controller - Floating above */}
            <motion.div
                layout
                className="absolute z-50 flex flex-col items-center"
                initial={{ top: 24 }}
                animate={{
                    top: scene === 0 ? 220 : 24,
                    scale: scene === 0 ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <motion.div
                    animate={
                        scene > 0
                            ? { boxShadow: "0px 10px 25px -5px rgba(0, 40, 63, 0.3)" }
                            : { boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)" }
                    }
                    className="p-3 bg-[#00283F] rounded-2xl text-white relative z-20 shadow-xl"
                >
                    <Bot className="w-6 h-6" />
                    {scene > 0 && (
                        <motion.div
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="absolute inset-0 bg-[#00283F] rounded-2xl -z-10"
                        />
                    )}
                </motion.div>

                {/* Dynamic Scene Label */}
                <div className="mt-4 h-6 overflow-hidden relative w-48 flex justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={scene}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`text-xs font-bold uppercase tracking-widest absolute ${scene === 1 ? "text-primary-light" : "text-gray-500"
                                }`}
                        >
                            {scene === 0 && "Arturo OS"}
                            {scene === 1 && "Global Invoicing"}
                            {scene === 2 && "Accounting Sync"}
                            {scene === 3 && "Expense Tracking"}
                            {scene === 4 && "Budget Forecast"}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* =======================================================
          SCENE 1: INVOICING (Global Hotel Bookings)
          ======================================================= */}
            <AnimatePresence>
                {scene === 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                    >
                        {/* Wireframe Globe Background */}
                        <div className="absolute bottom-[-20%] w-[120%] h-[80%] opacity-40">
                            <svg viewBox="0 0 200 100" className="w-full h-full stroke-[#003A5C] fill-none" strokeWidth="0.5">
                                <path d="M 0 50 Q 100 0 200 50 M 0 70 Q 100 20 200 70 M 0 90 Q 100 40 200 90" />
                                <path d="M 100 0 Q 50 50 100 100 M 100 0 Q 150 50 100 100" />
                                <ellipse cx="100" cy="50" rx="100" ry="50" />
                                <circle cx="80" cy="65" r="2" fill="#003A5C" className="animate-pulse" />
                            </svg>
                        </div>

                        {/* Notification Cards Container */}
                        <div className="relative w-full h-full max-w-sm mt-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50, scale: 0.8 }}
                                animate={{ opacity: 1, x: -10, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute top-[15%] left-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-30"
                            >
                                <div className="text-xl">🇺🇸</div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] text-gray-900 font-medium">Corporate Account <span className="text-gray-500 font-normal">paid</span></span>
                                    <span className="text-[10px] font-semibold text-gray-800">Invoice #4092 • Conf. Retreat</span>
                                </div>
                                <span className="text-emerald-500 font-medium text-xs ml-2">+$4,250</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                animate={{ opacity: 1, x: 10, scale: 1 }}
                                transition={{ delay: 1.5, type: "spring" }}
                                className="absolute top-[40%] right-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-20"
                            >
                                <div className="text-xl">🇬🇧</div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] text-gray-900 font-medium">Eleanor <span className="text-gray-500 font-normal">settled</span></span>
                                    <span className="text-[10px] font-semibold text-gray-800">Invoice #2091 • Penthouse</span>
                                </div>
                                <span className="text-emerald-500 font-medium text-xs ml-2">+$1,850</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 2.5, type: "spring" }}
                                className="absolute bottom-[20%] left-8 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-30"
                            >
                                <div className="text-xl">🇦🇪</div>
                                <div className="flex flex-col">
                                    <span className="text-[11px] text-gray-900 font-medium">Travel Agency <span className="text-gray-500 font-normal">deposit</span></span>
                                    <span className="text-[10px] font-semibold text-gray-800">Invoice #882 • 10 Room Block</span>
                                </div>
                                <span className="text-emerald-500 font-medium text-xs ml-2">+$8,500</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =======================================================
          SCENE 2: ACCOUNTING AUTOMATION (PMS Ledger Sync)
          ======================================================= */}
            <AnimatePresence>
                {scene === 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center mt-12"
                    >
                        <div className="bg-white p-5 rounded-2xl w-72 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
                            <div className="flex justify-between items-center mb-5 border-b border-gray-50 pb-3">
                                <div className="flex items-center gap-2">
                                    <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />
                                    <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wide">Auto-Reconciliation</span>
                                </div>
                                <Building2 className="w-4 h-4 text-gray-300" />
                            </div>

                            <div className="space-y-4">
                                {/* Item 1: Revenue */}
                                <div className="relative h-8 flex items-center">
                                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 1, duration: 0.2 }} className="absolute text-xs text-gray-400 font-mono">
                                        TXN-STRIPE-99201...
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="absolute w-full flex justify-between items-center">
                                        <span className="text-xs font-medium text-gray-900">Direct Booking</span>
                                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Room Rev</span>
                                    </motion.div>
                                </div>

                                {/* Item 2: Expense */}
                                <div className="relative h-8 flex items-center">
                                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 2, duration: 0.2 }} className="absolute text-xs text-gray-400 font-mono">
                                        ACH-SYSCO-CORP-FB...
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} className="absolute w-full flex justify-between items-center">
                                        <span className="text-xs font-medium text-gray-900">Sysco Foods</span>
                                        <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">F&B Expense</span>
                                    </motion.div>
                                </div>

                                {/* Item 3: Commission */}
                                <div className="relative h-8 flex items-center">
                                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 3, duration: 0.2 }} className="absolute text-xs text-gray-400 font-mono">
                                        WIRE-BOOKING.COM...
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} className="absolute w-full flex justify-between items-center">
                                        <span className="text-xs font-medium text-gray-900">Booking.com</span>
                                        <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">OTA Comm.</span>
                                    </motion.div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
                                className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-center gap-1 text-emerald-500 text-[10px] font-semibold"
                            >
                                <CheckCircle2 className="w-3 h-3" /> Ledger Synced to PMS
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =======================================================
          SCENE 3: EXPENSE TRACKING (Vendor Payment Form)
          ======================================================= */}
            <AnimatePresence>
                {scene === 3 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center mt-12"
                    >
                        <div className="relative w-[320px]">
                            {/* Main Expense Form */}
                            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-5 flex flex-col gap-4">
                                <div className="flex bg-gray-50 p-1 rounded-lg">
                                    <div className="w-1/2 bg-white text-center py-1.5 rounded-md shadow-sm text-xs font-semibold text-gray-800">Pay Vendor</div>
                                    <div className="w-1/2 text-center py-1.5 rounded-md text-xs font-medium text-gray-500">Reimburse Staff</div>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <label className="text-[10px] text-gray-500 mb-1 block">Vendor Email</label>
                                        <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2">
                                            <Mail className="w-3 h-3 text-gray-400" />
                                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-xs text-gray-800 font-medium">
                                                billing@elitelinens.com
                                            </motion.span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] text-gray-500 mb-1 block">Invoice Details</label>
                                        <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2 relative overflow-hidden">
                                            <FileText className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-400">Scanning invoice...</span>
                                            <motion.div
                                                initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ delay: 1, duration: 1 }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent"
                                            />
                                            <motion.span
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
                                                className="absolute left-7 text-xs text-gray-900 bg-white pr-2 font-medium"
                                            >
                                                INV-2026-LND • $1,240.00
                                            </motion.span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-[10px] text-gray-500 mb-1 block">Payment Method</label>
                                        <div className="border border-gray-200 rounded-md p-2 flex items-center gap-2">
                                            <CreditCard className="w-3 h-3 text-gray-400" />
                                            <span className="text-xs text-gray-800 font-medium">Corporate Card ending in 4920</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-primary-light hover:bg-main transition-colors text-white font-semibold py-2.5 rounded-lg text-sm mt-2">
                                    Process Expense
                                </motion.button>
                            </div>

                            {/* Floating Vendor Receipt Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, rotate: 5 }}
                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
                                className="absolute -right-6 -bottom-6 w-36 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-visible z-50"
                            >
                                <div className="h-20 bg-slate-100 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                                    <Bed className="w-10 h-10 text-slate-300 absolute transform -rotate-12 translate-y-1 -translate-x-2 drop-shadow-sm" />
                                    <Bed className="w-10 h-10 text-white absolute transform rotate-12 translate-x-3 -translate-y-1 drop-shadow-md" />
                                </div>

                                <div className="p-3 pt-5 relative flex flex-col items-center">
                                    <div className="absolute -top-5 w-10 h-10 bg-slate-800 rounded-full border-4 border-white flex items-center justify-center shadow-sm text-white">
                                        <span className="text-xs font-bold font-serif">EL</span>
                                    </div>
                                    <span className="text-xs font-bold text-gray-900 mt-1">Elite Linens</span>
                                    <span className="text-[9px] text-gray-400">Housekeeping</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =======================================================
          SCENE 4: BUDGET FORECASTING (Dashboard Chart)
          ======================================================= */}
            <AnimatePresence>
                {scene === 4 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center mt-12"
                    >
                        <div className="bg-[#001b2a] p-6 rounded-2xl shadow-2xl w-80 border border-slate-700/50 flex flex-col gap-4">

                            <div className="flex justify-between items-start">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Q3 Performance Forecast</span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-2xl font-bold text-white">$185.00</span>
                                        <span className="text-xs text-slate-400 mb-1">RevPAR</span>
                                    </div>
                                </div>
                                <div className="flex items-center text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md border border-emerald-400/20">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    <span className="text-[10px] font-bold">+12.4%</span>
                                </div>
                            </div>

                            {/* Animated Line Chart */}
                            <div className="w-full h-20 mt-2 relative">
                                <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                                    <defs>
                                        <linearGradient id="forecastGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* Background Fill */}
                                    <motion.path
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5, duration: 1 }}
                                        d="M 0 55 C 40 55, 60 35, 100 40 C 140 45, 160 15, 200 10 L 200 60 L 0 60 Z"
                                        fill="url(#forecastGradient)"
                                    />

                                    {/* Line Graph */}
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        d="M 0 55 C 40 55, 60 35, 100 40 C 140 45, 160 15, 200 10"
                                        fill="transparent"
                                        stroke="#34d399"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />

                                    {/* Projection Dot */}
                                    <motion.circle
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1.5 }}
                                        cx="200" cy="10" r="4" fill="#001b2a" stroke="#34d399" strokeWidth="2"
                                    />
                                </svg>
                            </div>

                            <div className="flex justify-between border-t border-slate-700/50 pt-4 mt-2">
                                <div className="flex flex-col">
                                    <span className="text-[9px] text-slate-400 uppercase">Exp. Occupancy</span>
                                    <span className="text-sm font-semibold text-white">88.5%</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-slate-400 uppercase">Proj. ADR</span>
                                    <span className="text-sm font-semibold text-white">$210.00</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}