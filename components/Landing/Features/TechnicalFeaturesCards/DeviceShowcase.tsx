"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Agents in your pocket",
    description: "Monitor workflows and receive real-time alerts on the go.",
    deviceType: "mobile",
  },
  {
    id: 2,
    title: "Full control at your desk",
    description: "Build, debug, and deploy agents with powerful desktop tools.",
    deviceType: "laptop",
  },
  {
    id: 3,
    title: "Orchestrate from anywhere",
    description: "Manage complex workflows with touch-friendly dashboards.",
    deviceType: "tablet",
  },
];

// Reusable cinematic easing
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DeviceShowcase() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Timeline Connector Graphic */}
        <div className="hidden md:block relative h-8 w-full max-w-3xl mx-auto mb-20">

        
          <div className="absolute inset-0 flex items-center pointer-events-none">
            <svg width="100%" height="100%" className="absolute">
              <defs>
                <linearGradient id="path-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="white" stopOpacity="0" />
                  <stop offset="5%" stopColor="white" stopOpacity="1" />
                  <stop offset="85%" stopColor="white" stopOpacity="1" />
                  <stop offset="97%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="fade-mask">
                  <rect width="100%" height="100%" fill="url(#path-fade)" />
                </mask>
              </defs>
              <motion.line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#003A5C"
                strokeWidth="2.5"
                strokeDasharray="4 8"
                strokeLinecap="round"
                strokeOpacity="0.5"
                mask="url(#fade-mask)"
                animate={{ strokeDashoffset: [0, -12] }} // 4 (dash) + 8 (gap) = 12
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </div>

          {/* Timeline Nodes */}
          <div className="absolute inset-0 flex justify-between items-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2, ease }}
                className="w-3 h-3 bg-white border-[1.5px] border-[#003A5C] rotate-45 shadow-[0_0_10px_rgba(0,58,92,0.1)] z-10"
              />
            ))}
          </div>
        </div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease }}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Device Mockup Container */}
              <div className="h-48 flex items-end justify-center mb-10 w-full relative">
                <DeviceMockup type={feature.deviceType} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-[#003A5C] tracking-tight mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Internal Device Mockup Components --- */

function ScreenContent() {
  return (
    <div className="absolute inset-0 bg-gray-50 flex items-center justify-center overflow-hidden z-0">
      {/* Expanding Blue Circle (Slowed down) */}
      <motion.div
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { scale: 35, opacity: 1 },
        }}
        transition={{ duration: 1.2, ease }}
        className="absolute m-auto inset-0 w-8 h-8 rounded-full bg-[#003A5C]"
      />

      {/* Agent Logo & Text Reveal (Slowed down) */}
      <motion.div
        variants={{
          rest: { opacity: 0, scale: 0.5, y: 15 },
          hover: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ delay: 0.3, duration: 1.0, ease }}
        className="relative z-10 flex flex-col items-center justify-center text-white"
      >
        {/* Agent SVG Icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-1.5"
        >
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
        <span className="text-[9px] font-bold tracking-[0.2em] ml-0.5">
          ARTURO
        </span>
      </motion.div>
    </div>
  );
}

function DeviceMockup({ type }: { type: string }) {
  switch (type) {
    case "mobile":
      return (
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="group/device relative w-24 h-48 border-[3px] rounded-[20px] border-gray-300 hover:border-[#003A5C] bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden z-10"
        >
          {/* Dynamic Island Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-9 h-2.5 bg-gray-300 group-hover/device:bg-[#003A5C] rounded-full z-20 transition-colors duration-500 shadow-sm" />
          <ScreenContent />
        </motion.div>
      );

    case "laptop":
      return (
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="flex flex-col items-center group/laptop cursor-pointer"
          style={{ perspective: "1000px" }}
        >
          {/* Screen / Lid (Slowed down opening) */}
          <motion.div
            variants={{
              rest: { rotateX: -70, y: 4 },
              hover: { rotateX: 0, y: 0 },
            }}
            transition={{ duration: 1.2, ease }}
            style={{ transformOrigin: "bottom" }}
            className="relative w-56 h-36 rounded-t-lg bg-gray-50 border-[3px] border-b-0 border-gray-300 group-hover/laptop:border-[#003A5C] transition-colors duration-500 overflow-hidden z-10 shadow-lg"
          >
            <ScreenContent />

            {/* Realistic dark ambient shadow when the lid is closed (Slowed down) */}
            <motion.div
              variants={{
                rest: { opacity: 0.5 },
                hover: { opacity: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-black pointer-events-none z-10"
            />
          </motion.div>

          {/* Keyboard Base (Slowed down) */}
          <motion.div
            variants={{
              rest: { y: -8, scale: 0.96 },
              hover: { y: 0, scale: 1 },
            }}
            transition={{ duration: 1.2, ease }}
            className="relative w-64 h-3.5 bg-gray-300 group-hover/laptop:bg-gray-200 rounded-b-xl flex justify-center border border-gray-400 group-hover/laptop:border-[#003A5C] transition-colors duration-500 z-20 shadow-xl"
          >
            {/* Trackpad notch */}
            <div className="w-12 h-1 bg-gray-400 group-hover/laptop:bg-[#003A5C]/40 absolute top-0 rounded-b-sm transition-colors duration-500" />
          </motion.div>
        </motion.div>
      );

    case "tablet":
      return (
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="group/device relative w-44 h-32 border-[3px] rounded-[16px] border-gray-300 hover:border-[#003A5C] bg-white shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden z-10"
        >
          {/* Tablet Camera Dot */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 group-hover/device:bg-[#003A5C] rounded-full z-20 transition-colors duration-500" />
          <ScreenContent />
        </motion.div>
      );

    default:
      return null;
  }
}