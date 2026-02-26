import heroBanner1 from "@/assets/hero-banner-1.jpg";

const SitePlanSection = () => {
  return (
    <section id="siteplan" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Site & Floor Plans</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Godrej Raipur Plots — <span className="text-gradient-gold">Master Plan</span>
          </h2>
        </div>

        <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
          <img
            src={heroBanner1}
            alt="Godrej Raipur Plots Master Plan"
            className="w-full h-auto"
          />
        </div>
        <p className="text-center text-muted-foreground text-xs mt-4">
          *Master plan is indicative and subject to change as per approvals.
        </p>
      </div>
    </section>
  );
};

export default SitePlanSection;
