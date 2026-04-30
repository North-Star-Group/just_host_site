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
const ease = [0.22, 1, 0.36, 1];

export default function DeviceShowcase() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Timeline Connector Graphic */}
        <div className="hidden md:block relative h-px w-full max-w-4xl mx-auto mb-20">
          {/* Dashed Line */}
          <div className="absolute inset-0 border-t border-dashed border-[#003A5C]/20" />

          {/* Timeline Nodes (Sharp edged squares for a brutalist/minimalist touch) */}
          <div className="absolute inset-0 flex justify-between items-center -mt-[5px]">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2, ease }}
                className="w-3 h-3 bg-white border-[1.5px] border-[#003A5C] rotate-45 shadow-[0_0_10px_rgba(0,58,92,0.1)]"
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

/* --- Internal Device Mockup Component --- */

function DeviceMockup({ type }: { type: string }) {
  // Screen area where the logo will be placed. 
  // It features a subtle reveal animation on parent hover.
  const ScreenContent = () => (
    <div className="absolute inset-1 bg-gray-50  group-hover:bg-[#003A5C]/5 flex items-center justify-center overflow-hidden transition-colors duration-700 ease-out">
      {/* Replace this div with your actual next/image logo for Polares */}
      <motion.div
        className="text-[#003A5C] font-bold tracking-widest text-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100"
      >
        JUSTHOST
      </motion.div>
    </div>
  );

  switch (type) {
    case "mobile":
      return (
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease }}
          className="relative w-24 h-48 border-2 rounded-md border-gray-200 group-hover:border-[#003A5C] bg-white transition-colors duration-500"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-gray-200 group-hover:bg-[#003A5C] rounded-b-sm transition-colors duration-500 z-10" />
          <ScreenContent />
        </motion.div>
      );

    case "laptop":
      return (
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease }}
          className="flex flex-col items-center"
        >
          {/* Screen */}
          <div className="relative w-56 h-36 border-2 border-b-0 border-gray-200 group-hover:border-[#003A5C] bg-white transition-colors duration-500">
            <ScreenContent />
          </div>
          {/* Keyboard Base */}
          <div className="relative w-64 h-3 bg-gray-200 group-hover:bg-[#003A5C] transition-colors duration-500 flex justify-center">
            {/* Trackpad notch */}
            <div className="w-10 h-1 bg-gray-300 group-hover:bg-white/30 absolute top-0" />
          </div>
        </motion.div>
      );

    case "tablet":
      return (
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, ease }}
          className="relative w-44 h-32 border-2 border-gray-200 group-hover:border-[#003A5C] bg-white transition-colors duration-500"
        >
          {/* Camera dot */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-gray-200 group-hover:bg-[#003A5C] rounded-none transition-colors duration-500 z-10" />
          <ScreenContent />
        </motion.div>
      );

    default:
      return null;
  }
}