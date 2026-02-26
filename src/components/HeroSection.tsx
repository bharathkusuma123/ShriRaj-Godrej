import { useState, useEffect } from "react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import EnquiryForm from "./EnquiryForm";

const banners = [heroBanner1, heroBanner2, heroBanner3];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-stretch pt-16">
      {/* Banner images */}
      {banners.map((banner, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner}
            alt={`Godrej Raipur Plots view ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 py-12 lg:py-0">
        {/* Left info panel */}
        <div className="flex-1 flex flex-col justify-center animate-fade-in-up">
          <span className="inline-block bg-gradient-gold text-forest-deep font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 w-fit">
            Pre-Launch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream leading-tight mb-2">
            Godrej Raipur
            <br />
            <span className="text-gradient-gold">Plots</span>
          </h1>
          <p className="text-cream/70 text-lg mb-2">At Old Dhamtri Road, Raipur</p>
          <p className="text-cream/50 text-sm mb-6">By Godrej Properties</p>

          <div className="bg-primary/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 mb-6 max-w-md">
            <p className="text-gold font-semibold text-sm mb-1">EOI Window Open Now!</p>
            <p className="text-cream/80 text-xs">Attractive Payment Plan for First 250 Plot Customers*</p>
            <p className="text-cream/80 text-xs">Early Bird Discount Available</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { label: "Total Land", value: "50+ Acres" },
              { label: "No. of Plots", value: "600+" },
              { label: "Plot Size", value: "1200–1800 Sq.Ft" },
            ].map((stat) => (
              <div key={stat.label} className="bg-forest-deep/50 backdrop-blur-sm border border-primary/20 rounded-lg px-4 py-3">
                <p className="text-cream/60 text-xs">{stat.label}</p>
                <p className="text-cream font-semibold text-sm">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-cream/60 text-sm">Premium Plots at</p>
            <p className="text-3xl font-display font-bold text-gold">₹ 50 Lakhs* <span className="text-lg text-cream/60">Onwards</span></p>
          </div>

          <a
            href="#enquiry"
            className="bg-gradient-gold text-forest-deep font-bold px-8 py-3 rounded-lg text-lg hover:opacity-90 transition w-fit animate-pulse-glow"
          >
            I am Interested
          </a>

          <p className="text-cream/40 text-xs mt-4">RERA No : Coming Soon !!</p>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-8">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentSlide ? "w-8 bg-gold" : "w-4 bg-cream/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="w-full lg:w-[400px] flex items-center lg:items-start lg:pt-20">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
