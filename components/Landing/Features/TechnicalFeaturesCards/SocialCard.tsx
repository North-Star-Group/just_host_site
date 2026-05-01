"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";

// Types
type ChatMessage = {
  id: string;
  text: string;
  isSender: boolean; // false = customer (left), true = AI/You (right)
  isDraft?: boolean;
};

type Platform = {
  id: string;
  name: string;
  icon: string;
  actionText: string;
  customerAvatar: string;
  messages: ChatMessage[];
};

// Integration Data updated for Chat UI
const platforms: Platform[] = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: "/brands/whatsapp.png",
    actionText: "New Direct Message",
    customerAvatar: "https://randomuser.me/api/portraits/women/24.jpg",
    messages: [
      { id: "w1", text: "Hi! We're running a bit late.", isSender: false },
      { id: "w2", text: "Is it possible to keep the restaurant open for us? We'll arrive at 10 PM.", isSender: false },
      { id: "w3", text: "No problem at all! I've informed the restaurant to keep your table ready for 10 PM. Drive safely! 🚗✨", isSender: true },
    ],
  },
  {
    id: "gmail",
    name: "Gmail",
    icon: "/brands/gmail.png",
    actionText: "Email Inquiry",
    customerAvatar: "https://randomuser.me/api/portraits/men/12.jpg",
    messages: [
      { id: "g1", text: "Hello, could you please confirm if room 304 has a sea view?", isSender: false },
      { id: "g2", text: "Also requesting extra pillows.", isSender: false },
      { id: "g3", text: "Yes, room 304 has a beautiful sea view! 🌊 I've also added extra pillows to your reservation. Let me know if you need anything else!", isSender: true },
    ],
  },
  {
    id: "airbnb",
    name: "Airbnb",
    icon: "/brands/airbnb.png",
    actionText: "Guest Message",
    customerAvatar: "https://randomuser.me/api/portraits/women/18.jpg",
    messages: [
      { id: "a1", text: "What is the WiFi password?", isSender: false },
      { id: "a2", text: "And where can we park our rental car?", isSender: false },
      { id: "a3", text: "The WiFi is 'Guest2024'. You can park in any spot marked 'Visitor' right in front of the building! 🚙📶", isSender: true },
    ],
  },
  {
    id: "booking",
    name: "Booking.com",
    icon: "/brands/booking-icon.svg",
    actionText: "Reservation Update",
    customerAvatar: "https://randomuser.me/api/portraits/men/46.jpg",
    messages: [
      { id: "b1", text: "Guest requested an airport transfer.", isSender: false },
      { id: "b2", text: "2 adults on Friday at 14:00. Flight BA204.", isSender: false },
      { id: "b3", text: "Got it! Your airport transfer is confirmed for Friday at 14:00 (Flight BA204). The driver will be waiting at arrivals! ✈️🚕", isSender: true },
    ],
  },
];

// Animation variants for the individual chat bubbles
const chatBubbleVariants: Variants = {
  inactive: { opacity: 0, y: 15 },
  active: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.35 + 0.1, // Staggered pop-up delay
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  prev: { opacity: 1, y: 0 } // Keeps bubbles visible when rotating to the background
};

export default function SocialCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate the cards every 5 seconds (slightly longer to let animations finish)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % platforms.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Main container
    <div className="flex flex-col bg-[#F8F9FB] h-full w-full p-8 md:p-12 font-sans overflow-hidden min-h-[450px]">
      {/* Top Content */}
      <div className="relative z-10 space-y-6 mb-12">
        <div className="inline-block px-4 py-1 rounded-lg border border-[#003A5C]/20 bg-white/50 shadow-sm">
          <span className="text-[#003A5C] text-sm font-medium">Unified Inbox</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
          Unify all your <br /> customer messages
        </h2>

        <p className="text-sm md:text-base text-gray-500">
          Centralize communications from WhatsApp, Gmail, Airbnb, and more into a single, intelligent interface.
        </p>
      </div>

      {/* Animated Card Section */}
      <div className="relative w-full max-w-md h-[340px] flex justify-center items-end self-center mt-auto">
        <AnimatePresence mode="popLayout">
          {platforms.map((platform, index) => {
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
                animate={{ opacity, y: yOffset, scale, zIndex }}
                exit={{ opacity: 0, y: -40, scale: 0.8 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col"
                style={{ backgroundColor: "#F5F5F7", height: "100%" }}
              >
                {/* Header: Platform Info */}
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12  flex items-center justify-center ">
                      <img src={platform.icon} alt={platform.name} className="w-10 h-10 object-contain" />
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

                {/* Body: Chat Interface */}
                <div className="flex-1 overflow-hidden flex flex-col justify-end gap-3 pb-1">
                  {platform.messages.map((msg, msgIndex) => (
                    <motion.div
                      key={msg.id}
                      custom={msgIndex}
                      variants={chatBubbleVariants}
                      initial="inactive"
                      animate={isActive ? "active" : isPrev ? "prev" : "inactive"}
                      className={`flex items-end gap-2 w-full ${msg.isSender ? "justify-end" : "justify-start"}`}
                    >
                      {/* Receiver Avatar (Left) */}
                      {!msg.isSender && (
                        <div className="w-6 h-6 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center shrink-0 overflow-hidden">
                          <img src={platform.customerAvatar} alt="Customer Avatar" className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* Chat Bubble */}
                      <div
                        className={`px-3 py-2 text-sm max-w-[80%] shadow-sm ${msg.isSender
                          ? "bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-br-sm"
                          : "bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-bl-sm"
                          }`}
                      >
                        {msg.isDraft ? (
                          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                            <ArrowRight size={14} className="animate-pulse" />
                            <span>{msg.text}</span>
                          </div>
                        ) : (
                          msg.text
                        )}
                      </div>

                      {/* AI Sender Avatar (Right) */}
                      {msg.isSender && (
                        <div className="w-6 h-6 rounded-full bg-[#00283F] border border-[#00283F] flex items-center justify-center shrink-0 overflow-hidden">
                          <Bot size={12} className="text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}