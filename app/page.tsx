import HotelFeaturesSection from "@/components/Landing/Features/FeaturesSection";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Layout/Navbar";
import AutoFeatureSection from "@/components/Landing/Features/AutoFeatureSection";
import AppBuilderSteps from "@/components/Landing/Features/AppBuilderSteps";
import FaqSection from "@/components/General/FAQSection";
import HotelComponent from "@/components/Landing/Features/HotelComponent";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotelFeaturesSection />
      <AutoFeatureSection />
      <AppBuilderSteps />
      <HotelComponent/>


      <FaqSection />
    </main>
  );
}



