import { Home } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { Search } from "lucide-react";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Shield, Users, Award, TrendingUp } from "lucide-react";
import { MapPin as MapPinIcon, Phone, Mail } from "lucide-react";

// Property Card Component
const PropertyCardComponent = ({ image, title, location, price, beds, baths, sqft, tag }: any) => (
  <div className="group rounded-lg overflow-hidden bg-card border border-border hover:shadow-lg transition-shadow duration-300">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      {tag && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
    </div>
    <div className="p-5">
      <p className="text-lg font-semibold text-primary mb-1" style={{ fontFamily: "var(--font-display)" }}>{price}</p>
      <h3 className="text-base font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
        <MapPin className="h-3.5 w-3.5" /> {location}
      </p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-3">
        <span className="flex items-center gap-1"><Bed className="h-4 w-4" /> {beds}</span>
        <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {baths}</span>
        <span className="flex items-center gap-1"><Maximize className="h-4 w-4" /> {sqft} sqft</span>
      </div>
    </div>
  </div>
);

// Navbar Component
const PropNestNavbar = () => {
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Projects", path: "#projects" },
    { label: "About Us", path: "#about" },
    { label: "Contact", path: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            PropNest
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
              className="block py-3 text-sm font-medium border-b border-border last:border-0 text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

// Footer Component
const PropNestFooter = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>PropNest</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Your trusted partner in finding the perfect property. Premium listings, expert guidance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li><li>Careers</li><li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Help Center</li><li>Privacy Policy</li><li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 PropNest. All rights reserved.
      </div>
    </div>
  </footer>
);

// Home Section
const HomeSection = () => {
  const properties = [
    { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", title: "Modern Villa with Pool", location: "Beverly Hills, CA", price: "$2,450,000", beds: 4, baths: 3, sqft: 3200, tag: "Featured" },
    { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "Luxury Penthouse Suite", location: "Manhattan, NY", price: "$1,890,000", beds: 3, baths: 2, sqft: 2100, tag: "New" },
    { image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", title: "Contemporary Family Home", location: "Austin, TX", price: "$875,000", beds: 5, baths: 4, sqft: 4100 },
    { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", title: "Waterfront Estate", location: "Miami, FL", price: "$3,200,000", beds: 6, baths: 5, sqft: 5500, tag: "Premium" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", title: "Urban Loft Apartment", location: "Chicago, IL", price: "$420,000", beds: 2, baths: 1, sqft: 1100 },
    { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80", title: "Hillside Retreat", location: "Portland, OR", price: "$1,150,000", beds: 3, baths: 3, sqft: 2800 },
  ];

  return (
    <section id="home" className="pt-16">
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-4 text-center bg-gradient-to-b from-accent/60 to-background">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Find Your <span className="text-primary">Dream Property</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Discover premium homes, apartments, and estates curated for modern living.
        </p>
        <div className="max-w-lg mx-auto flex items-center bg-card border border-border rounded-full overflow-hidden shadow-sm">
          <Search className="h-5 w-5 text-muted-foreground ml-4" />
          <input
            type="text"
            placeholder="Search by city, neighborhood, or ZIP..."
            className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button className="bg-primary text-primary-foreground text-sm font-medium px-6 py-3 hover:opacity-90 transition">
            Search
          </button>
        </div>
      </section>

      {/* Listings */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Properties</h2>
        <p className="text-muted-foreground mb-8">Hand-picked properties you'll love</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <PropertyCardComponent key={i} {...p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Ready to Find Your Home?
        </h2>
        <p className="opacity-90 mb-6 max-w-md mx-auto">
          Get in touch with our expert agents and start your journey today.
        </p>
        <button className="bg-background text-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
          Get Started
        </button>
      </section>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", title: "Greenwood Residences", location: "Denver, CO", price: "From $650,000", beds: 3, baths: 2, sqft: 2400, tag: "Ongoing" },
    { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", title: "Skyline Towers", location: "Seattle, WA", price: "From $1,200,000", beds: 4, baths: 3, sqft: 3000, tag: "Upcoming" },
    { image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", title: "Maple Gardens", location: "Nashville, TN", price: "From $480,000", beds: 3, baths: 2, sqft: 1800, tag: "Completed" },
    { image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", title: "Harbor View Complex", location: "San Diego, CA", price: "From $2,100,000", beds: 5, baths: 4, sqft: 4200, tag: "Ongoing" },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Projects</h1>
      <p className="text-muted-foreground mb-10">Explore our ongoing, upcoming, and completed developments.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <PropertyCardComponent key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const stats = [
    { icon: Shield, label: "Years of Trust", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "2,500+" },
    { icon: Award, label: "Awards Won", value: "30+" },
    { icon: TrendingUp, label: "Properties Sold", value: "4,000+" },
  ];

  return (
    <section id="about">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About PropNest</h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Founded in 2011, PropNest is a premier real estate company dedicated to connecting people with their perfect properties. We combine deep market expertise with a client-first philosophy to deliver exceptional results.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-12">
          Our team of seasoned professionals brings together decades of experience in residential and commercial real estate. Whether you're buying your first home or investing in a luxury estate, we're here to guide you every step of the way.
        </p>
      </div>
      <div className="bg-card border-y border-border py-14">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To redefine the real estate experience through transparency, innovation, and unwavering commitment to our clients' dreams. Every property we list, every relationship we build, reflects our passion for excellence.
        </p>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => (
  <section id="contact" className="container mx-auto px-4 py-16">
    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Contact Us</h1>
    <p className="text-muted-foreground mb-12">We'd love to hear from you. Reach out anytime.</p>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPinIcon className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Office Address</p>
              <p className="text-sm text-muted-foreground">123 Property Lane, Suite 400<br />Los Angeles, CA 90001</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">hello@propnest.com</p>
            </div>
          </div>
        </div>
      </div>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
        <input type="email" placeholder="Your Email" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
        <textarea placeholder="Your Message" rows={5} className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
        <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition w-full">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

// Main PropNest Component
import { useState } from "react";
import { Menu, X } from "lucide-react";

const PropNest = () => {
  return (
    <div className="min-h-screen bg-background">
      <PropNestNavbar />
      <main>
        <HomeSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <PropNestFooter />
    </div>
  );
};

export default PropNest;