"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";



const glassStyle: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.82)",
    backdropFilter: "blur(10px) saturate(180%)",
    WebkitBackdropFilter: "blur(10px) saturate(180%)",
    border: "2px solid rgba(210, 210, 210, 0.65)",
    boxShadow:
        "0 8px 32px rgba(13,31,45,0.12), 0 1.5px 4px rgba(13,31,45,0.06)",
    borderRadius: "16px",
};
function CardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--color-accent-blue)", display: "flex" }}>{icon}</span>
                <span
                    style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--color-text-heading)",
                        letterSpacing: "0.01em",
                        textTransform: "normal",
                    }}
                >
                    {title}
                </span>
            </div>


        </div>
    );
}

const ROTATING_WORDS = ["hotels", "hostels", "boutiques", "real estate"];



function StatCard({
    children,
    delay = 0,
    style,
    scale = 1,
    x = 0,
}: {
    children: React.ReactNode;
    delay?: number;
    style?: React.CSSProperties;
    scale?: number;
    x?: string | number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, x, scale: scale * 0.96 }}
            animate={{ opacity: 1, y: 0, x, scale: scale }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            style={{
                position: "absolute",
                zIndex: 10,
                padding: "16px 18px",
                ...glassStyle,
                ...style,
            }}
        >
            {children}
        </motion.div>
    );
}



function RevenueCard() {

    const [chartWidth, setChartWidth] = useState(0);

    useEffect(() => {

        const timer = setTimeout(() => {
            setChartWidth(100);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StatCard
            delay={1.2}
            scale={0.88}
            style={{
                top: "22%",
                right: "80%",
                width: "300px",
                height: "140px",
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <CardHeader
                    title="Revenue"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, #f3f4f6)", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <path d="M2 14l4-4 3 2 5-8" stroke="var(--color-accent-blue, #0B2B3C)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    }
                />
                {/* Subtle top-right directional arrow */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "4px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Bottom Row: Chart & Metrics */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>

                {/* Left: Animated Trend Line with Area & Arrow */}
                <div style={{ flex: 1, height: "55px", position: "relative" }}>
                    <svg width="100%" height="100%" viewBox="0 0 120 60" preserveAspectRatio="none" style={{ overflow: "visible" }}>
                        <defs>
                            {/* Gradient for the area under the curve */}
                            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-accent-blue, #0B2B3C)" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="var(--color-accent-blue, #0B2B3C)" stopOpacity="0" />
                            </linearGradient>

                            {/* Gradient for the main wave line */}
                            <linearGradient id="wave-line-gradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="rgba(11, 43, 60, 0.1)" />
                                <stop offset="100%" stopColor="var(--color-accent-blue, #0B2B3C)" />
                            </linearGradient>

                            {/* Clip path that grows to reveal the chart */}
                            <clipPath id="chart-wipe">
                                <rect
                                    x="0" y="-10"
                                    width={`${chartWidth}%`}
                                    height="120%"
                                    style={{ transition: "width 4.5s cubic-bezier(0.25, 1, 0.5, 1)" }}
                                />
                            </clipPath>
                        </defs>

                        {/* Group with the clip path applied so everything reveals together */}
                        <g clipPath="url(#chart-wipe)">
                            {/* Area Fill */}
                            <path
                                d="M 5 50 C 15 40, 25 50, 35 45 C 45 40, 55 20, 65 20 C 75 20, 85 40, 95 30 C 105 20, 110 15, 115 10 L 115 60 L 5 60 Z"
                                fill="url(#chart-gradient)"
                            />

                            {/* Main Wave Line */}
                            <path
                                d="M 5 50 C 15 40, 25 50, 35 45 C 45 40, 55 20, 65 20 C 75 20, 85 40, 95 30 C 105 20, 110 15, 115 10"
                                fill="none"
                                stroke="url(#wave-line-gradient)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Arrowhead at the end of the line */}
                            <path
                                d="M 107 10 L 115 10 L 115 18"
                                fill="none"
                                stroke="var(--color-accent-blue, #0B2B3C)"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </div>

                {/* Right: Metrics */}
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "4px" }}>
                    <p style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        color: "var(--color-text-heading)",
                        margin: 0,
                        letterSpacing: "-0.5px",
                        lineHeight: 1
                    }}>
                        $210,500
                    </p>
                    <p style={{
                        fontSize: "11px",
                        color: "var(--color-text-muted)",
                        marginTop: "4px",
                        margin: 0
                    }}>
                        Total Revenue
                    </p>
                </div>

            </div>
        </StatCard>
    );
}

function ReservationsCard() {

    const [visibleBars, setVisibleBars] = useState(0);
    const totalBars = 9;

    useEffect(() => {

        const interval = setInterval(() => {
            setVisibleBars((prev) => {
                if (prev < totalBars) return prev + 1;
                clearInterval(interval);
                return prev;
            });
        }, 240);

        return () => clearInterval(interval);
    }, []);

    return (
        <StatCard
            delay={1.35}
            scale={0.88}
            style={{
                top: "45%",
                left: "-6%",
                transformOrigin: "center left",
                minWidth: "340px",
                height: "280px",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <CardHeader
                    title="Reservations"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, rgba(255,255,255,0.1))", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <rect x="2" y="3" width="12" height="11" rx="2" stroke="var(--color-accent-blue, #0B2B3C)" strokeWidth="1.5" />
                                <path d="M5 1v4M11 1v4M2 7h12" stroke="var(--color-accent-blue, #0B2B3C)" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    }
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "4px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Main Metric Row */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                <p style={{
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "var(--color-text-heading)",
                    margin: 0,
                    lineHeight: 1
                }}>
                    64
                </p>
                <p style={{ fontSize: "11px", margin: 0, letterSpacing: "0.2px" }}>
                    <span style={{ fontWeight: 500, color: "var(--color-accent-teal, #4CAF50)" }}>+24</span>
                    <span style={{ color: "var(--color-text-muted)" }}> / Than last month</span>
                </p>
            </div>

            {/* Legend Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                {[

                    { color: "var(--color-accent-blue, #0B2B3C)", label: "VIP: 12" },
                    { color: "var(--color-accent-blue, #0B2B3C)", label: "Regular: 42" },
                    { color: "#E4E3DD", label: "Corporate: 10" },
                ].map(({ color, label }) => (
                    <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--color-text-heading)", fontWeight: 500 }}>
                        <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: color,
                            display: "inline-block",
                            boxShadow: `0 0 4px ${color}40`
                        }} />
                        {label}
                    </span>
                ))}
            </div>

            {/* Custom Animated Bar Chart */}
            <div style={{
                width: "100%",
                height: "90px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "8px"
            }}>
                {Array.from({ length: totalBars }).map((_, index) => {
                    const isActive = index === 3;
                    const isVisible = index < visibleBars;

                    return (
                        <div key={index} style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            width: "12px",
                            opacity: isVisible ? 1 : 0,
                            transform: `translateY(${isVisible ? "0px" : "10px"})`,
                            transition: "all 1.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                        }}>
                            {/* Top Dot */}
                            <div style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                backgroundColor: "var(--color-accent-blue, #0B2B3C)",
                                marginBottom: "4px"
                            }} />

                            {/* The Bar */}
                            <div style={{
                                flex: 1,
                                width: "6px",
                                borderRadius: "99px",

                                background: isActive
                                    ? "linear-gradient(to bottom, var(--color-accent-blue, #0B2B3C) 0%, rgba(11, 43, 60, 0.1) 100%)"
                                    : "#F0EFE9",
                                transformOrigin: "bottom",
                                transform: `scaleY(${isVisible ? 1 : 0})`,
                                transition: "transform 2.4s cubic-bezier(0.25, 1, 0.5, 1)"
                            }} />

                            {/* Bottom Dot */}
                            <div style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                backgroundColor: "var(--color-accent-blue, #0B2B3C)",
                                marginTop: "4px"
                            }} />
                        </div>
                    );
                })}
            </div>

            {/* X-Axis Labels & Ticks */}
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "9px",
                color: "var(--color-text-muted)",
                opacity: 0.6,
                letterSpacing: "0.5px",
                marginTop: "auto"
            }}>
                <span style={{ fontSize: "8px" }}>|</span>
                <span style={{ fontSize: "8px", opacity: 0.3 }}>|</span>
                <span>6AM</span>
                <span style={{ fontSize: "8px", opacity: 0.3 }}>|</span>
                <span>9AM</span>
                <span style={{ fontSize: "8px", opacity: 0.3 }}>|</span>
                <span>12PM</span>
                <span style={{ fontSize: "8px", opacity: 0.3 }}>|</span>
                <span style={{ fontSize: "8px" }}>|</span>
            </div>
        </StatCard>
    );
}
function OccupancyCard() {

    const [progressOffset, setProgressOffset] = useState(100);

    useEffect(() => {

        const timer = setTimeout(() => {
            setProgressOffset(100 - 73);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StatCard
            delay={1.5}
            scale={0.9}
            x="-50%"
            style={{
                top: "40%",
                left: "50%",
                transformOrigin: "bottom center",
                minWidth: "400px",
                height: "320px"
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <CardHeader
                    title="Occupancy"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, rgba(255,255,255,0.1))", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <circle cx="8" cy="5" r="3" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
                                <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    }
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "4px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Occupancy Headline */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                <p style={{
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "var(--color-text-heading)",
                    margin: 0,
                    lineHeight: 1
                }}>
                    73%
                </p>
                <p style={{ fontSize: "11px", margin: 0, letterSpacing: "0.2px" }}>
                    <span style={{ fontWeight: 500, color: "var(--color-accent-teal)" }}>+11%</span>
                    <span style={{ color: "var(--color-text-muted)" }}> / Than last month</span>
                </p>
            </div>

            {/* Top Legend */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                {[
                    { color: "var(--color-accent-blue)", label: "Standard: 45%" },
                    { color: "var(--color-accent-blue)", label: "Deluxe: 20%", opacity: 0.5 },
                    { color: "var(--color-text-muted)", label: "Suite: 8%" },
                ].map(({ color, label, opacity = 1 }) => (
                    <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--color-text-heading)", fontWeight: 500 }}>
                        <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: color,
                            display: "inline-block",
                            opacity: opacity,
                            boxShadow: `0 0 4px ${color}`
                        }} />
                        {label}
                    </span>
                ))}
            </div>

            {/* Pill-Shaped Progress & Daily Profit Center */}
            <div style={{
                position: "relative",
                width: "100%",
                height: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "20px",
                zIndex: 1
            }}>
                {/* SVG Animated Pill Progress */}
                <svg
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "visible" }}
                >
                    <defs>
                        <linearGradient id="pill-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(11, 43, 60, 0.1)" />
                            <stop offset="100%" stopColor="var(--color-accent-blue, #0B2B3C)" />
                        </linearGradient>
                    </defs>
                    {/* Background Track */}
                    <rect
                        x="4" y="4"
                        width="calc(100% - 8px)"
                        height="calc(100% - 8px)"
                        rx="36"
                        fill="none"
                        stroke="#F0EFE9"
                        strokeWidth="8"
                    />

                    {/* Foreground Animated Track */}
                    <rect
                        x="4" y="4"
                        width="calc(100% - 8px)"
                        height="calc(100% - 8px)"
                        rx="36"
                        fill="none"
                        stroke="url(#pill-gradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        pathLength="100"
                        strokeDasharray="100"
                        strokeDashoffset={progressOffset}
                        style={{
                            transition: "stroke-dashoffset 4.5s cubic-bezier(0.25, 1, 0.5, 1)",
                        }}
                    />
                </svg>

                <p style={{ fontSize: "11px", color: "var(--color-text-muted)", margin: "0 0 4px", letterSpacing: "0.5px" }}>
                    Daily profit
                </p>
                <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--color-text-heading)", margin: 0, letterSpacing: "-0.5px" }}>
                    $ 151.526
                </p>
            </div>

            {/* Bottom Legend */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
                {[
                    { label: "Hotel", color: "var(--color-accent-blue)" },
                    { label: "Restaurant", color: "var(--color-accent-gold)" },
                    { label: "Parking", color: "var(--color-text-muted)" }
                ].map(({ label, color }) => (
                    <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "10px", color: "var(--color-text-muted)" }}>
                        <span style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "2px",
                            background: color,
                            display: "inline-block",
                            opacity: 0.8
                        }} />
                        {label}
                    </span>
                ))}
            </div>
        </StatCard>
    );
}

function GuestSatisfactionCard() {
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBarWidth(85);
        }, 150);
        return () => clearTimeout(timer);
    }, []);

    return (
        <StatCard
            delay={1.65}
            scale={0.88}
            style={{ top: "22%", right: "-12%", width: "285px", height: "140px" }}
        >
            <CardHeader
                title="Guest Satisfaction"
                icon={
                    <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="6" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
                        <path d="M5 9s1 2 3 2 3-2 3-2" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                }
            />
            {/* Rating row */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <p style={{ fontSize: "26px", fontWeight: 400, color: "var(--color-text-heading)", margin: 0 }}>4.8</p>
                <div style={{ display: "flex", gap: "2px" }}>
                    {[1, 2, 3, 4].map((i) => (
                        <svg key={i} width="15" height="15" viewBox="0 0 14 14" fill="var(--color-accent-blue)">
                            <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" />
                        </svg>
                    ))}
                    {/* Half star */}
                    <svg width="15" height="15" viewBox="0 0 14 14">
                        <defs>
                            <linearGradient id="halfStar">
                                <stop offset="50%" stopColor="var(--color-accent-blue)" />
                                <stop offset="50%" stopColor="#D1E3F8" />
                            </linearGradient>
                        </defs>
                        <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z" fill="url(#halfStar)" />
                    </svg>
                </div>
            </div>
            {/* Progress bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <div
                    style={{
                        flex: 1,
                        height: "7px",
                        borderRadius: "99px",
                        background: "#EBF2FA",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `${barWidth}%`,
                            background: "linear-gradient(to right, rgba(11, 43, 60, 0.1) 0%, var(--color-accent-blue) 100%)",
                            borderRadius: "99px",
                            transition: "width 4.5s cubic-bezier(0.25, 1, 0.5, 1)"
                        }}
                    />
                </div>
                <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-heading)", margin: 0, whiteSpace: "nowrap" }}>
                    85% Positive
                </p>
            </div>
            {/* Emoji row */}

        </StatCard>
    );
}

function HousekeepingCard() {

    const [arcOffset, setArcOffset] = useState(100);
    const [barWidth, setBarWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setArcOffset(100 - 80);
            setBarWidth(80);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <StatCard
            delay={1.8}
            scale={0.88}
            style={{
                top: "45%",
                right: "-6%",
                transformOrigin: "center right",
                minWidth: "240px",
                height: "340px"
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <CardHeader
                    title="Housekeeping"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, rgba(255,255,255,0.1))", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <path d="M3 13V7l5-5 5 5v6" stroke="var(--color-accent-blue, #0B2B3C)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="5.5" y="9" width="5" height="4" rx="0.5" stroke="var(--color-accent-blue, #0B2B3C)" strokeWidth="1.5" />
                            </svg>
                        </div>
                    }
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "4px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Staff Count & Status */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <p style={{ fontSize: "32px", fontWeight: 400, color: "var(--color-text-heading)", margin: 0, lineHeight: 1 }}>
                    30
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <p style={{ fontSize: "11px", color: "var(--color-text-muted)", margin: 0 }}>
                        Staff on Duty
                    </p>
                    <p style={{ fontSize: "11px", margin: 0, letterSpacing: "0.2px" }}>
                        <span style={{ color: "var(--color-accent-teal, #4CAF50)", fontWeight: 500 }}>10:12</span>
                        <span style={{ color: "var(--color-text-muted)" }}> / The last cleaning</span>
                    </p>
                </div>
            </div>

            {/* Staff Names */}
            <p style={{
                fontSize: "12px",
                color: "var(--color-text-heading)",
                fontWeight: 500,
                marginBottom: "24px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
            }}>
                Anna (Cleaning), Tom (Inspection), Maria (Room Service)
            </p>

            {/* Arc Timer Section */}
            <div style={{
                position: "relative",
                width: "100%",
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginBottom: "24px"
            }}>
                {/* SVG Animated Arc Graphics */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "180px", height: "90px" }}>
                    <svg width="100%" height="100%" viewBox="0 0 200 100" style={{ overflow: "visible" }}>
                        <defs>
                            <linearGradient id="arc-gradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="rgba(11, 43, 60, 0.1)" />
                                <stop offset="100%" stopColor="var(--color-accent-blue, #0B2B3C)" />
                            </linearGradient>
                        </defs>
                        {/* Background Dotted Arc */}
                        <path
                            d="M 10 100 A 90 90 0 0 1 190 100"
                            fill="none"
                            stroke="#E4E3DD"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="2 8"
                        />

                        {/* Foreground Animated Solid Arc */}
                        <path
                            d="M 10 100 A 90 90 0 0 1 190 100"
                            fill="none"
                            stroke="url(#arc-gradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            pathLength="100"
                            strokeDasharray="100"
                            strokeDashoffset={arcOffset}
                            style={{
                                transition: "stroke-dashoffset 4.5s cubic-bezier(0.25, 1, 0.5, 1)"
                            }}
                        />
                    </svg>
                </div>

                {/* Arc Time Labels */}
                <span style={{ position: "absolute", left: "10%", bottom: "25%", fontSize: "10px", color: "var(--color-text-muted)" }}>5 min.</span>
                <span style={{ position: "absolute", top: "-15%", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--color-text-muted)" }}>10 min.</span>
                <span style={{ position: "absolute", right: "10%", bottom: "25%", fontSize: "10px", color: "var(--color-text-muted)" }}>15 min.</span>

                {/* Center Timer Value */}
                <div style={{ textAlign: "center", zIndex: 1, paddingBottom: "8px" }}>
                    <p style={{ fontSize: "11px", color: "var(--color-text-muted)", margin: "0 0 4px", letterSpacing: "0.5px" }}>
                        Timer
                    </p>
                    <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--color-text-heading)", margin: 0, letterSpacing: "-0.5px" }}>
                        12:12 min
                    </p>
                </div>
            </div>

            {/* Bottom Progress Bar */}
            <div style={{ width: "100%" }}>
                <p style={{ fontSize: "12px", color: "var(--color-text-heading)", fontWeight: 500, margin: "0 0 8px" }}>
                    The last cleaning
                </p>
                <div style={{ height: "6px", borderRadius: "99px", background: "#E4E3DD", overflow: "hidden" }}>
                    <div
                        style={{
                            height: "100%",
                            width: `${barWidth}%`,
                            background: "linear-gradient(to right, rgba(11, 43, 60, 0.1) 0%, var(--color-accent-blue, #0B2B3C) 100%)",
                            borderRadius: "99px",
                            transition: "width 4.5s cubic-bezier(0.25, 1, 0.5, 1)"
                        }}
                    />
                </div>
            </div>
        </StatCard>
    );
}


export default function Hero() {
    const { scrollY } = useScroll();
    const rawScale = useTransform(scrollY, [0, 500], [1, 1.1]);
    const smoothScale = useSpring(rawScale, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [index, setIndex] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX - innerWidth / 2;
            const y = e.clientY - innerHeight / 2;
            mouseX.set(x / 50);
            mouseY.set(y / 50);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--color-cream)] font-inter">

            {/* Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at center, rgba(0,40,63,0.06), transparent 70%)" }}
            />

            <div className="flex-shrink-0 pt-6 pb-2 text-center z-10 w-full px-4 translate-y-10 md:translate-y-14">

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-extrabold mb-2 text-[var(--color-primary-light)] leading-tight"
                >
                    JustHost an AI-powered <br /> Operating system for {" "}


                    <span className="inline-flex flex-col h-[1.25em] overflow-hidden align-bottom">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={index}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="block text-[var(--color-primary-light)]"
                            >
                                {ROTATING_WORDS[index]}
                            </motion.span>
                        </AnimatePresence>
                    </span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-base md:text-xl mx-auto text-[var(--color-text-muted)]"
                >
                    Streamline operations, boost revenue, and delight guests — all from one intuitive platform.
                </motion.p>

            </div>

            {/* HERO IMAGE */}
            <div className="relative w-full max-w-[1100px] mx-auto flex justify-center items-center z-10">

                <div className="relative w-full max-w-[1000px] mx-auto">

                    <motion.div style={{ scale: smoothScale }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                            <motion.div style={{ x: springX, y: springY }}>
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                                >
                                    <Image
                                        src="/hotel_blue.png"
                                        alt="Hotel"
                                        width={1400}
                                        height={800}
                                        priority
                                        className="object-contain w-full h-auto mx-auto pointer-events-none"
                                        style={{
                                            transform: "scale(1.52) translateY(-10px)",
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <RevenueCard />
                    <ReservationsCard />
                    <OccupancyCard />
                    <GuestSatisfactionCard />
                    <HousekeepingCard />

                </div>
            </div>

        </section>
    );
}
