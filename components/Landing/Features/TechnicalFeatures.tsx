'use client'

import DeviceShowcase from "./TechnicalFeaturesCards/DeviceShowcase";
import PDFCard from "./TechnicalFeaturesCards/PDFCard";
import SocialCard from "./TechnicalFeaturesCards/SocialCard";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TechnicalFeatures() {
  return (
    <section className="w-full bg-[#F8F9FB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900"
          >
            Intelligent workflows across <br className="hidden md:block" /> every device and channel
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          {/* Top Row: Device Showcase (Full Width) */}
          <motion.div
            variants={itemVariants}
            className="w-full rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <DeviceShowcase />
          </motion.div>

          {/* Bottom Row: Social Card (40%) and PDF Card (60%) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Social Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"
            >
              <SocialCard />
            </motion.div>

            {/* PDF Card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col"
            >
              <PDFCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
