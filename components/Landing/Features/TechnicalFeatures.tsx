'use client'

import SocialCard from "./TechnicalFeaturesCards/SocialCard";
import IntegrationsCard from "./TechnicalFeaturesCards/IntegrationsCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TechnicalFeatures() {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical Features
        </h2>

        {/* Bento Grid Layout - 3 Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]"
        >

          {/* Card 1: 1/3 width (Top Left) */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
            <SocialCard />
          </motion.div>

          {/* Card 2: 2/3 width (Top Right) */}
          <motion.div variants={itemVariants} className="md:col-span-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
            <IntegrationsCard />
          </motion.div>

          {/* Card 3: 1/3 width (Bottom Left) */}
          <motion.div variants={itemVariants} className="md:col-span-1 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">

          </motion.div>

          {/* Card 4: 2/3 width (Bottom Right) */}
          <motion.div variants={itemVariants} className="md:col-span-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5">
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
