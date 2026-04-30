import HotelFeaturesSection from "@/components/Landing/Features/FeaturesSection";
import Hero from "@/components/Landing/Hero/Hero";
import Navbar from "@/components/Layout/Navbar";
import AutoFeatureSection from "@/components/Landing/Features/AutoFeatureSection";
import AppBuilderSteps from "@/components/Landing/Features/AppBuilderSteps";
import FaqSection from "@/components/General/FAQSection";
import HotelComponent from "@/components/Landing/Features/HotelComponent";

import SafetyFeature from "@/components/Landing/Features/SafetyFeature";
import Footer from "@/components/Layout/Footer";
import TechnicalFeatures from "@/components/Landing/Features/TechnicalFeatures";
import IntegrationsCard from "@/components/Landing/Features/TechnicalFeaturesCards/IntegrationsCard";
import PDFCard from "@/components/Landing/Features/TechnicalFeaturesCards/PDFCard";
import DeviceShowcase from "@/components/Landing/Features/TechnicalFeaturesCards/DeviceShowcase";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HotelFeaturesSection />
      <IntegrationsCard />
      <PDFCard />
      <DeviceShowcase />
      <TechnicalFeatures />
      <AutoFeatureSection />
      <AppBuilderSteps />
      <HotelComponent />
      <SafetyFeature />


      <FaqSection />
      <Footer />
    </main>
  );
}
