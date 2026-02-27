import { useState } from "react";
import { Phone, Download } from "lucide-react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "" });
  const [consent, setConsent] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest in GODREJ RAIPUR PLOTS! Our team will contact you shortly.");
    setFormData({ name: "", mobile: "", email: "" });
  };

  return (
    <div id="enquiry" className="w-full glass-card rounded-xl p-6 space-y-4">
      <div className="flex gap-2 mb-2">
        <a href="#" className="flex-1 bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition">
          Book FREE Site Visit
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919035032000&text=Hi!%20I'm%20Interested%20In%20GODREJ %20RAIPUR PLOTS%20Raipur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-gold text-forest-deep text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
        >
          WhatsApp Us
        </a>
      </div>

      {/* <p className="text-center text-muted-foreground text-xs">or Request a</p>
      <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary/80 transition">
        <Phone className="w-4 h-4" />
        Call Back Now
      </button> */}

      <div className="border-t border-border pt-4">
        <h3 className="font-display text-lg font-bold text-foreground text-center mb-4">
          Book a Free Consultation
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <input type="tel" placeholder="Mobile No" required value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-background border border-input rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 accent-primary" />
            I consent to the use of my provided data in accordance with the privacy policy.
          </label>
          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold text-sm hover:opacity-90 transition">
            Book a Free Consultation
          </button>
        </form>
      </div>

      {/* <div className="text-center pt-2 border-t border-border">
        <p className="text-xs text-muted-foreground mb-2">For More Information:</p>
        <button className="flex items-center justify-center gap-2 mx-auto border border-border rounded-lg px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition">
          <Download className="w-4 h-4" />
          Download Brochure
        </button>
      </div> */}
    </div>
  );
};

export default EnquiryForm;
