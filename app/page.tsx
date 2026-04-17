import HotelFeaturesSection from "@/components/Landing/Features/FeaturesSection";
import WhatsAppCard from "@/components/Landing/Features/Cards/WhatsappCard";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";
import AutoFeatureSection from "@/components/Landing/Features/AutoFeatureSection";
import AppBuilderSteps from "@/components/Landing/Features/AppBuilderSteps";
import FaqSection from "@/components/General/FAQSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotelFeaturesSection />
      <AutoFeatureSection />
      <AppBuilderSteps />
      <FaqSection />
    </main>
  );
}
