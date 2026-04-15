import HotelFeaturesSection from "@/components/Landing/Features/FeaturesSection";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Navbar />
        <Hero />
        <HotelFeaturesSection />
    </main>
  );
}
