import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import PricingSection from "@/components/PricingSection";
import SitePlanSection from "@/components/SitePlanSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import VirtualTourSection from "@/components/VirtualTourSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <PricingSection />
      <SitePlanSection />
      <AmenitiesSection />
      <GallerySection />
      <LocationSection />
      <VirtualTourSection />
      <Footer />
    </div>
  );
};

export default Index;
