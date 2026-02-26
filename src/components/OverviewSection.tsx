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
            Godrej Raipur <span className="text-gradient-gold">Plots</span>
          </h2>
          <p className="text-muted-foreground text-sm mt-1">Old Dhamtri Road, Raipur</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image slider */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={images[current]}
              alt="Godrej Raipur Plots overview"
              className="w-full h-[350px] object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button
                onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
                className="bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setCurrent((p) => (p + 1) % images.length)}
                className="bg-card/80 backdrop-blur-sm rounded-full p-2 hover:bg-card transition"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Godrej Raipur Plots is an upcoming premium plotted development by Godrej Properties,
              thoughtfully located on Old Dhamtari Road, one of Raipur's fastest-evolving growth corridors.
              Designed as a serene green sanctuary, the project is enveloped by over 1,000 trees,
              offering a naturally cooler and healthier living environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With excellent connectivity to top schools, universities, hospitals, and lifestyle
              destinations, this address balances everyday convenience with the calm of nature,
              making it ideal for both end-users and long-term investors.
            </p>
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
