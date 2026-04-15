"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────
   Shared glass card style
   ──────────────────────────────────────────── */

const glassStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.82)",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.65)",
    boxShadow:
        "0 8px 32px rgba(13,31,45,0.12), 0 1.5px 4px rgba(13,31,45,0.06)",
    borderRadius: "16px",
};

/* ────────────────────────────────────────────
   Tiny inline SVG components for chart icons
   ──────────────────────────────────────────── */

function TrendLineIcon() {
    return (
        <svg width="100%" height="40" viewBox="0 0 120 40" fill="none" preserveAspectRatio="none">
            <polyline
                points="0,36 20,22 40,28 60,12 80,16 100,6 120,2"
                stroke="var(--color-accent-blue)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            {/* Gradient fill under line */}
            <defs>
                <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon
                points="0,36 20,22 40,28 60,12 80,16 100,6 120,2 120,40 0,40"
                fill="url(#trendFill)"
            />
        </svg>
    );
}

function BarChartIcon() {
    const bars = [28, 18, 34, 22, 38, 26, 40, 30];
    return (
        <svg width="100%" height="50" viewBox="0 0 104 50" fill="none">
            {bars.map((h, i) => (
                <rect
                    key={i}
                    x={i * 13 + 2}
                    y={50 - h}
                    width="9"
                    height={h}
                    rx="2.5"
                    fill={i === bars.length - 1 ? "var(--color-accent-blue)" : "#D1E3F8"}
                />
            ))}
        </svg>
    );
}

function DonutIcon({ pct = 73 }: { pct?: number }) {
    const r = 38;
    const circ = 2 * Math.PI * r;
    const dash = (pct / 100) * circ;
    return (
        <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={r} strokeWidth="11" stroke="#EBF2FA" fill="none" />
            <circle
                cx="50"
                cy="50"
                r={r}
                strokeWidth="11"
                stroke="var(--color-accent-blue)"
                fill="none"
                strokeDasharray={`${dash} ${circ - dash}`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
            />
            <text x="50" y="55" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-text-heading)">
                {pct}%
            </text>
        </svg>
    );
}

function TimerArcIcon({ min = 12, sec = 12 }: { min?: number; sec?: number }) {
    const pct = (min * 60 + sec) / (20 * 60);
    const r = 30;
    const circ = 2 * Math.PI * r;
    const dash = pct * circ;
    return (
        <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r={r} strokeWidth="8" stroke="#EBF2FA" fill="none" />
            <circle
                cx="40"
                cy="40"
                r={r}
                strokeWidth="8"
                stroke="var(--color-accent-blue)"
                fill="none"
                strokeDasharray={`${dash} ${circ - dash}`}
                strokeLinecap="round"
                transform="rotate(-90 40 40)"
            />
            {/* tick marks */}
            {[0, 25, 50, 75].map((p, i) => {
                const angle = (p / 100) * 2 * Math.PI - Math.PI / 2;
                const x1 = 40 + (r - 6) * Math.cos(angle);
                const y1 = 40 + (r - 6) * Math.sin(angle);
                const x2 = 40 + (r + 2) * Math.cos(angle);
                const y2 = 40 + (r + 2) * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D1E3F8" strokeWidth="2" />;
            })}
        </svg>
    );
}

/* ────────────────────────────────────────────
   Reusable card header row
   ──────────────────────────────────────────── */

function CardHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ color: "var(--color-accent-blue)", display: "flex" }}>{icon}</span>
                <span
                    style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                    }}
                >
                    {title}
                </span>
            </div>
            {/* Arrow out icon */}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5V7.5" stroke="var(--color-text-muted)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
        </div>
    );
}

/* ────────────────────────────────────────────
   StatCard glass wrapper
   ──────────────────────────────────────────── */

function StatCard({
    children,
    delay = 0,
    style,
    scale = 1,
}: {
    children: React.ReactNode;
    delay?: number;
    style?: React.CSSProperties;
    scale?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18, scale: scale * 0.97 }}
            animate={{ opacity: 1, y: 0, scale: scale }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
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

/* ────────────────────────────────────────────
   Five Dashboard Cards
   ──────────────────────────────────────────── */

function RevenueCard() {
    return (
        <StatCard
            delay={0.3}
            style={{
                top: "6%",
                left: "-2%",
                minWidth: "240px", /* Slightly widened from 210px to accommodate side-by-side flex layout comfortably */
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <CardHeader
                    title="Revenue"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, #f3f4f6)", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <path d="M2 14l4-4 3 2 5-8" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

                {/* Left: Trend line */}
                <div style={{ flex: 1, height: "40px", width: "80px", position: "relative" }}>
                    <TrendLineIcon />
                </div>

                {/* Right: Metrics */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{
                        fontSize: "24px",
                        fontWeight: 500, /* Lowered slightly from 800 to match the clean, editorial aesthetic in the image */
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
    return (
        <StatCard
            delay={0.45}
            scale={1.2}
            style={{
                bottom: "5%",
                left: "-5%",
                transformOrigin: "bottom center",
                minWidth: "260px" // Slightly widened to fit the 3 legend items perfectly inline 
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <CardHeader
                    title="Reservations"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, rgba(255,255,255,0.1))", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <rect x="2" y="3" width="12" height="11" rx="2" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
                                <path d="M5 1v4M11 1v4M2 7h12" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    }
                />
                {/* Top-right directional arrow */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: "4px" }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>

            {/* Main Metric Row */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "16px" }}>
                <p style={{
                    fontSize: "32px",
                    fontWeight: 400, // Reduced from 800 for a cleaner, luxury aesthetic
                    color: "var(--color-text-heading)",
                    margin: 0,
                    lineHeight: 1
                }}>
                    64
                </p>
                <p style={{ fontSize: "11px", margin: 0, letterSpacing: "0.2px" }}>
                    <span style={{ fontWeight: 500, color: "var(--color-accent-teal)" }}>+24</span>
                    <span style={{ color: "var(--color-text-muted)" }}> / Than last month</span>
                </p>
            </div>

            {/* Legend Row (All 3 items inline) */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                {[
                    { color: "var(--color-accent-blue)", label: "VIP: 12" },
                    { color: "var(--color-accent-gold)", label: "Regular: 42" },
                    { color: "var(--color-text-muted)", label: "Corporate: 10" }, // Added corporate into the inline map
                ].map(({ color, label }) => (
                    <span key={label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "var(--color-text-heading)", fontWeight: 500 }}>
                        <span style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: color,
                            display: "inline-block",
                            boxShadow: `0 0 4px ${color}` // Replicates the subtle glow on the dots
                        }} />
                        {label}
                    </span>
                ))}
            </div>

            {/* Bar Chart */}
            <div style={{ width: "100%", height: "70px", position: "relative", marginBottom: "12px" }}>
                <BarChartIcon />
            </div>

            {/* X-Axis Labels (Exact match to image spacing) */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "9px", color: "var(--color-text-muted)", opacity: 0.7, letterSpacing: "0.5px" }}>
                <span>|</span>
                <span>6AM</span>
                <span>|</span>
                <span>5AM</span>
                <span>|</span>
                <span>12AM</span>
                <span>|</span>
            </div>
        </StatCard>
    );
}

function OccupancyCard() {
    return (
        <StatCard
            delay={0.55}
            scale={1.26}
            style={{
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                transformOrigin: "bottom center",
                minWidth: "270px", // Widened slightly to accommodate the pill shape
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
                    { color: "var(--color-accent-blue)", label: "Deluxe: 20%", opacity: 0.5 }, // Assuming a muted tone for deluxe
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
                marginBottom: "20px"
            }}>
                {/* Replace this border div with your actual SVG pill progress bar. 
                    Set your SVG to absolute positioning so it sits behind the text.
                */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "999px",
                    border: "3px solid var(--color-accent-blue)",
                    opacity: 0.3
                }} />

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
                            borderRadius: "2px", // Slight curve to match the image's squarish icons
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
    return (
        <StatCard
            delay={0.35}
            style={{ top: "6%", right: "-2%", width: "215px" }}
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
                <p style={{ fontSize: "26px", fontWeight: 800, color: "var(--color-accent-blue)", margin: 0 }}>4.8</p>
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
                            width: "85%",
                            background: "var(--color-accent-blue)",
                            borderRadius: "99px",
                        }}
                    />
                </div>
                <p style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-heading)", margin: 0, whiteSpace: "nowrap" }}>
                    85% Positive
                </p>
            </div>
            {/* Emoji row */}
            <div style={{ display: "flex", gap: "6px" }}>
                {["😊", "😐", "😞"].map((e) => (
                    <span
                        key={e}
                        style={{
                            fontSize: "20px",
                            background: "#F0F5FB",
                            borderRadius: "8px",
                            padding: "4px 7px",
                            lineHeight: 1,
                        }}
                    >
                        {e}
                    </span>
                ))}
            </div>
        </StatCard>
    );
}

function HousekeepingCard() {
    return (
        <StatCard
            delay={0.5}
            scale={1.2}
            style={{
                bottom: "5%",
                right: "-4%",
                transformOrigin: "bottom center",
                minWidth: "260px" // Widened to comfortably fit the names and arc labels
            }}
        >
            {/* Top Row: Header & Arrow */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <CardHeader
                    title="Housekeeping"
                    icon={
                        <div style={{ backgroundColor: "var(--color-bg-muted, rgba(255,255,255,0.1))", padding: "4px", borderRadius: "8px", display: "flex" }}>
                            <svg width="15" height="15" fill="none" viewBox="0 0 16 16">
                                <path d="M3 13V7l5-5 5 5v6" stroke="var(--color-accent-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="5.5" y="9" width="5" height="4" rx="0.5" stroke="var(--color-accent-blue)" strokeWidth="1.5" />
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
                        <span style={{ color: "var(--color-accent-teal)", fontWeight: 500 }}>10:12</span>
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
                {/* Arc Graphic (Absolute to sit behind text/labels) */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "180px", height: "90px" }}>
                    <TimerArcIcon min={12} sec={12} />
                </div>

                {/* Arc Time Labels */}
                <span style={{ position: "absolute", left: "5%", bottom: "25%", fontSize: "10px", color: "var(--color-text-muted)" }}>5 min.</span>
                <span style={{ position: "absolute", top: "-5%", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "var(--color-text-muted)" }}>10 min.</span>
                <span style={{ position: "absolute", right: "5%", bottom: "25%", fontSize: "10px", color: "var(--color-text-muted)" }}>15 min.</span>

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
                <div style={{ height: "6px", borderRadius: "99px", background: "var(--color-bg-muted, rgba(255,255,255,0.2))", overflow: "hidden" }}>
                    <div
                        style={{
                            height: "100%",
                            width: "80%", // Adjusted to match the visual weight of the image
                            background: "var(--color-accent-blue)",
                            borderRadius: "99px",
                        }}
                    />
                </div>
            </div>
        </StatCard>
    );
}

/* ────────────────────────────────────────────
   Main Hero
   ──────────────────────────────────────────── */

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--color-cream)]">

            {/* TOP CONTENT */}
            <div className="flex-shrink-0 pt-20 pb-6 text-center z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    JustHost an AI-powered <br />  operating system for hotels.
                </h1>
                <p className="text-base md:text-lg max-w-xl mx-auto ">
                    Streamline operations, boost revenue, and delight guests — all from one intuitive platform.
                </p>
            </div>

            {/* HERO IMAGE AREA */}
            <div className="relative w-full max-w-[1100px] mx-auto mt-12">

                <div className="relative w-full max-w-[90rem] h-full">

                    <Image
                        src="/hotel_blue.png"
                        alt="Hotel"
                        width={1400}
                        height={800}
                        priority
                        className="object-contain scale-130"
                    />

                    {/* Cards */}
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