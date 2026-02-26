import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const images = [heroBanner1, heroBanner2];

const OverviewSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section id="overview" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Overview</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Golden <span className="text-gradient-gold">Residency</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Boriyakala, New Dhamtari Road, Raipur</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img src={images[current]} alt="Golden Residency overview" className="w-full h-[350px] object-cover transition-all duration-500" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)} className="bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={() => setCurrent((p) => (p + 1) % images.length)} className="bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Golden Residency is a premium plotted development located at Boriyakala, New Dhamtari Road, Raipur — one of the city's most promising growth corridors. This T&C Approved and RERA Approved project offers a covered campus with world-class amenities and round-the-clock security.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With amenities including a big swimming pool with rain dance, duplex clubhouse, indoor badminton court, gym facility, 3 beautiful gardens, children's park, and a serene temple — Golden Residency is designed for modern families who seek both luxury and tranquility.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-3 py-1.5 rounded-full">T&C Approved</span>
              <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-3 py-1.5 rounded-full">RERA Approved</span>
              <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-3 py-1.5 rounded-full">Covered Campus</span>
              <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-semibold px-3 py-1.5 rounded-full">24×7 CCTV Security</span>
            </div>
            <button className="flex items-center gap-2 bg-gradient-gold text-forest-deep font-bold px-6 py-3 rounded-lg hover:opacity-90 transition">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
