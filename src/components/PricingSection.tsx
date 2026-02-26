import { IndianRupee } from "lucide-react";

const priceData = [
  { type: "30×40", area: "1,200 Sq.Ft", price: "On Request" },
  { type: "30×50", area: "1,500 Sq.Ft", price: "On Request" },
  { type: "30×60", area: "1,800 Sq.Ft", price: "On Request" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Price</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Godrej Raipur Plots — <span className="text-gradient-gold">Price</span>
          </h2>
        </div>

        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 bg-gradient-forest text-cream font-semibold text-sm">
            <div className="px-6 py-4">Type</div>
            <div className="px-6 py-4">Area</div>
            <div className="px-6 py-4">Price</div>
          </div>
          {priceData.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 text-sm ${
                idx % 2 === 0 ? "bg-card" : "bg-secondary/30"
              } border-b border-border last:border-0`}
            >
              <div className="px-6 py-5 font-semibold text-foreground">{row.type}</div>
              <div className="px-6 py-5 text-muted-foreground">{row.area}</div>
              <div className="px-6 py-5 flex items-center gap-1">
                <IndianRupee className="w-4 h-4 text-gold" />
                <span className="text-foreground font-semibold">{row.price}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-6">
          *Prices are subject to change. Contact us for the latest pricing and offers.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
