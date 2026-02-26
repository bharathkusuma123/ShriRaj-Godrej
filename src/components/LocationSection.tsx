import { MapPin, GraduationCap, Hospital, ShoppingBag } from "lucide-react";

const locations = [
  { icon: GraduationCap, name: "GD Goenka School", time: "5 min" },
  { icon: GraduationCap, name: "Bhilai Institute of Technology", time: "20 min" },
  { icon: Hospital, name: "MMI Narayana Hospital", time: "20 min" },
  { icon: ShoppingBag, name: "Magneto Mall", time: "25 min" },
  { icon: ShoppingBag, name: "City Centre Mall", time: "30 min" },
  { icon: Hospital, name: "Ramkrishna Hospital", time: "20 min" },
];

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Location</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Godrej Raipur Plots — <span className="text-gradient-gold">Location</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.962!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOld+Dhamtari+Road+Raipur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Godrej Raipur Plots location"
            />
          </div>

          {/* Location advantages */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gold" />
              Location Advantages
            </h3>
            <div className="space-y-4">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-forest flex items-center justify-center flex-shrink-0">
                    <loc.icon className="w-5 h-5 text-cream" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-foreground">{loc.name}</p>
                  </div>
                  <span className="text-gold font-bold text-sm">{loc.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
