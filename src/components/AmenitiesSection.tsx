import { Waves, Trees, Dumbbell, Baby, Theater, Footprints, CircleDot, Fence, Car } from "lucide-react";

const amenities = [
  { icon: CircleDot, label: "Basketball Court" },
  { icon: Trees, label: "Lawn Terraces" },
  { icon: Dumbbell, label: "Clubhouse & Gym" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Theater, label: "Amphitheatre" },
  { icon: Footprints, label: "Jogging Track" },
  { icon: Fence, label: "Skating Rink" },
  { icon: Trees, label: "Multipurpose Lawn" },
  { icon: Car, label: "Surface Car Park" },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto" style={{ maxWidth: "72rem" }}>
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Amenities</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Godrej Raipur Plots — <span className="text-gradient-gold">Amenities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-forest flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-300">
                <item.icon className="w-6 h-6 text-cream" />
              </div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
