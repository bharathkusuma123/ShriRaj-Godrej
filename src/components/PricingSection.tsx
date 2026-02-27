import { IndianRupee } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          {/* <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Price</p> */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            GODREJ RAIPUR PLOTS — <span className="text-gradient-gold">Pricing</span>
          </h2>
        </div>

        {/* Main price card */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-forest text-cream px-6 py-4">
            <h3 className="font-display text-lg font-bold">Plot Pricing</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div>
                {/* <p className="text-muted-foreground text-sm">Plot Rate</p> */}
                <p className="text-2xl font-display font-bold text-foreground flex items-center gap-1 ">
                  PRICE ON REQUEST<span className="text-sm text-muted-foreground font-normal"></span>
                </p>
              </div>
              {/* <span className="bg-gradient-gold text-forest-deep font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
                Best Value
              </span> */}
            </div>
          </div>
        </div>

        {/* Other charges */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-forest text-cream px-6 py-4">
            <h3 className="font-display text-lg font-bold">Other Charges</h3>
          </div>
          <div className="divide-y divide-border">
            <div className="grid grid-cols-2 px-6 py-5">
              <div className="text-foreground font-semibold text-sm">Club House</div>
              <div className="flex items-center gap-1 text-foreground font-semibold text-sm text-gradient-gold">
                AS APPLICABLE
              </div>
            </div>
            <div className="grid grid-cols-2 px-6 py-5 bg-secondary/30">
              <div className="text-foreground font-semibold text-sm">Electricity</div>
              <div className="flex items-center gap-1 text-foreground font-semibold text-sm text-gradient-gold">
             AS APPLICABLE
              </div>
            </div>
          </div>
        </div>

        {/* <p className="text-center text-muted-foreground text-xs mt-6">
          *Prices are subject to change. Contact us for the latest pricing and payment plans.
        </p> */}
      </div>
    </section>
  );
};

export default PricingSection;
