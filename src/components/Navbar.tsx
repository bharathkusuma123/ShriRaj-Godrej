import { useState, useEffect } from "react";
import { Home, IndianRupee, LayoutGrid, Image, MapPin, Video, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Price", href: "#pricing", icon: IndianRupee },
  { label: "Site Plan", href: "#siteplan", icon: LayoutGrid },
  { label: "Amenities", href: "#amenities", icon: LayoutGrid },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "Location", href: "#location", icon: MapPin },
  { label: "Virtual Tour", href: "#virtual-tour", icon: Video },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-deep/95 backdrop-blur-md shadow-lg" : "bg-forest-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-bold text-cream tracking-wide">
          GOLDEN <span className="text-gold">RESIDENCY</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-2 text-sm text-cream/80 hover:text-gold transition-colors rounded-md hover:bg-primary/20"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=919035032000&text=Hi!%20I'm%20Interested%20In%20Golden%20Residency%20Raipur"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            WhatsApp Us
          </a>
        </div>

        <button className="lg:hidden text-cream" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-6 py-3 text-cream/80 hover:text-gold transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
