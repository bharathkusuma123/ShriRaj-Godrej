import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-forest text-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4">
              GODREJ <span className="text-gold">PROPERTIES</span>
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Godrej Raipur Plots — Premium plotted development at Old Dhamtri Road, Raipur.
              A green sanctuary with 1,000+ trees.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-cream/60">
              {["Overview", "Price", "Amenities", "Gallery", "Location", "Virtual Tour"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-gold transition">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-cream/60">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> +91 90350 32000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" /> info@godrejproperties.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> Old Dhamtri Road, Raipur
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-6 text-center text-xs text-cream/40">
          <p>Disclaimer: This website is for informational purposes only. Prices, layout & offers subject to change.</p>
          <p className="mt-2">© 2026 Godrej Properties. All rights reserved. RERA No: Coming Soon</p>
        </div>
      </div>

      {/* Sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 py-3 px-4 flex items-center justify-center gap-4 lg:hidden">
        <a
          href="tel:+919035032000"
          className="flex-1 bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold"
        >
          Call Now
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919035032000&text=Hi!%20I'm%20Interested"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-gold text-forest-deep text-center py-2.5 rounded-lg text-sm font-semibold"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
