"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Types
type Platform = {
  id: string;
  name: string;
  icon: string;
  actionText: string;
  sender: string;
  message: string;
  time: string;
};

// Integration Data
const platforms: Platform[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "/brands/whatsapp.png",
    actionText: "New Direct Message",
    sender: "+1 (555) 019-8372",
    message: "Hi! We're running a bit late. Is it possible to keep the restaurant open for us? We'll arrive at 10 PM.",
    time: "Just now",
  },
  {
    id: "gmail",
    name: "Gmail",
    icon: "/brands/gmail.png",
    actionText: "Email Inquiry",
    sender: "sarah.jenkins@example.com",
    message: "Booking #88291: Hello, could you please confirm if room 304 has a sea view? Also requesting extra pillows.",
    time: "2 mins ago",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    icon: "/brands/airbnb.png",
    actionText: "Guest Message",
    sender: "Michael T. (Check-in tomorrow)",
    message: "What is the WiFi password? And where can we park our rental car when we arrive?",
    time: "15 mins ago",
  },
  {
    id: "booking",
    name: "Booking.com",
    icon: "/brands/booking-icon.svg",
    actionText: "Reservation Update",
    sender: "Booking.com System",
    message: "Guest has requested an airport transfer for 2 adults on Friday at 14:00. Flight BA204.",
    time: "1 hour ago",
  },
];

export default function SocialCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate the cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % platforms.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Main container
    <div className="flex flex-col items-center justify-center h-full w-full p-6 font-sans overflow-hidden">
      
      {/* Animated Card Section */}
      <div className="relative w-full max-w-md h-[220px] mb-6 flex justify-center items-end">
        <AnimatePresence mode="popLayout">
          {platforms.map((platform, index) => {
            // Calculate distance from active index to create a stacked effect
            const isActive = index === activeIndex;
            const isNext = index === (activeIndex + 1) % platforms.length;
            const isPrev = index === (activeIndex - 1 + platforms.length) % platforms.length;

            if (!isActive && !isNext && !isPrev) return null;

            let zIndex = 0;
            let scale = 1;
            let yOffset = 0;
            let opacity = 0;

            if (isActive) {
              zIndex = 30;
              scale = 1;
              yOffset = 0;
              opacity = 1;
            } else if (isNext) {
              zIndex = 20;
              scale = 0.95;
              yOffset = -16;
              opacity = 0.8;
            } else if (isPrev) {
              zIndex = 10;
              scale = 0.9;
              yOffset = -32;
              opacity = 0.4;
            }

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                animate={{
                  opacity,
                  y: yOffset,
                  scale,
                  zIndex,
                }}
                exit={{ opacity: 0, y: -40, scale: 0.8 }}
                transition={{ 
                  duration: 0.7, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="absolute w-full border border-gray-200 rounded-2xl p-6 shadow-2xl"
                style={{
                  backgroundColor: "#F5F5F7",
                }}
              >
                {/* Header: Platform Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <img src={platform.icon} alt={platform.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-sm">
                        {platform.name}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {platform.actionText}
                      </p>
                    </div>
                  </div>
               
                </div>

                {/* Body: Arturo Intercepting the Message */}
                <div className="bg-white rounded-xl p-4 border border-gray-200 relative overflow-hidden">
                  <p className="text-xs text-gray-500 mb-2 font-medium">
                    From: {platform.sender}
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    "{platform.message}"
                  </p>
                  
                  {/* Arturo Action Tag */}
                  <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mt-2">
                    <ArrowRight size={14} />
                    <span>Arturo AI drafting response...</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}