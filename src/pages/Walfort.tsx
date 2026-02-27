import { useState, useEffect } from "react";
import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed } from "lucide-react";

import heroBanner1 from "@/images/walmart1.jpeg";
import heroBanner2 from "@/images/walmart2.jpeg";
import heroBanner3 from "@/images/walmart4.jpeg";

import aboutimage from "@/images/walmart3.jpeg";
import masterlayout from "@/images/walmart7.jpeg";

import gal1 from "@/images/walmart7.jpeg";
import gal2 from "@/images/walmart5.jpeg";
import gal3 from "@/images/walmart6.jpeg";
import gal4 from "@/images/walmart4.jpeg";

/* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
const wf = {
  primary: "#c8a27a",
  primaryDark: "#b58d63",
  secondary: "#1e4a2e",
  secondaryLight: "#2e6b3e",
  accent: "#e9b17a",
  dark: "#2c2c2c",
  light: "#faf7f2",
  gold: "#d4af37",
  textDark: "#333",
  textLight: "#666",
  shadow: "0 10px 30px rgba(0,0,0,0.1)",
  shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
};

const banners = [heroBanner1, heroBanner2, heroBanner3];

const highlights = [
  { icon: Shield, title: "T&C Approved", desc: "All necessary approvals in place" },
  { icon: Building2, title: "Club House", desc: "Exclusive Community Space" },
  { icon: Cctv, title: "24x7 Security", desc: "CCTV surveillance throughout" },
  { icon: TreePine, title: "Covered Campus", desc: "3 Gardens & Children's Park" },
];

const amenities = [
  { icon: Shield, label: "24*7 Security" },
  { icon: Cctv, label: "CCTV Surveillance" },
  { icon: TreePine, label: "3 Gardens" },
  { icon: Baby, label: "Children's Park" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Building2, label: "Club House" },
  { icon: Gamepad2, label: "Indoor Games" },
  { icon: Trophy, label: "Outdoor Games" },
  { icon: Dumbbell, label: "Gym Facility" },
  { icon: UtensilsCrossed, label: "Community Hall" },
];

const galleryImages = [gal1, gal2, gal3, gal4 ];

const locationAdvantages = [
  "Well-connected via New Dhamtari Road",
  "Close to major schools and hospitals",
  "Easy access to Raipur city center",
  "Peaceful yet convenient location",
];

const navItems = ["Home", "Overview", "Plans", "Gallery", "Amenities", "Contact"];

// Video Player Component
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) return null;

  if (isPlaying) {
    return (
      <div className="relative rounded-xl overflow-hidden h-60">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="Project Walkthrough"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img 
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
        alt="Video thumbnail" 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          // Fallback to hqdefault if maxresdefault doesn't exist
          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
          style={{ background: wf.primary }}
        >
          <Play className="w-7 h-7 text-white ml-1" />
        </div>
      </div>
    </div>
  );
};

const Wallfort = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", plotSize: "" });

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((c) => (c + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", plotSize: "" });
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          boxShadow: scrolled ? wf.shadow : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("wf-home")}
            className="text-xl font-bold uppercase tracking-widest"
            style={{ color: scrolled ? wf.secondary : "white" }}
          >
            WALLFORT.
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
                className="relative px-4 py-2 text-sm font-medium transition-colors group"
                style={{ color: scrolled ? wf.dark : "white" }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: wf.primary }}
                />
              </button>
            ))}
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: scrolled ? wf.dark : "white" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: scrolled ? wf.dark : "white" }} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden px-4 py-3 space-y-1" style={{ background: "rgba(0,0,0,0.9)" }}>
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} className="block w-full text-left py-2 text-white text-sm font-medium">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="wf-home" className="relative h-screen overflow-hidden">
        {banners.map((b, i) => (
          <img
            key={i}
            src={b}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)" }} />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div className="max-w-3xl px-4">
            <p className="text-lg tracking-[5px] uppercase mb-4 animate-[fadeInUp_1s_ease_forwards] opacity-0">Premium Plotted Development</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-5 animate-[fadeInUp_1s_ease_0.3s_forwards] opacity-0">
              WALLFORT RESIDENCY
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-[fadeInUp_1s_ease_0.6s_forwards] opacity-0">
              Boriyakala, Raipur — Your Address for Premium Living
            </p>

            <div
              className="inline-block rounded-2xl p-6 animate-[fadeInUp_1s_ease_0.9s_forwards] opacity-0"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: `2px solid ${wf.primary}` }}
            >
              <h3 className="text-white font-semibold text-lg mb-2">Bookings Open</h3>
              <p className="text-white/80 text-sm">T&C Approved | Club House | 24×7 Security & CCTV</p>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="w-3 h-3 rounded-full transition-all"
              style={{ background: i === currentSlide ? wf.primary : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle title="Project Highlights" subtitle="Experience premium living at WALLFORT Residency, Boriyakala" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
                >
                  <h.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{h.title}</h3>
                <p className="text-sm" style={{ color: wf.textLight }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Overview */}
      <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
              <img src={aboutimage} alt="WALLFORT Overview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div
                className="absolute bottom-6 right-0 p-5 rounded-l-xl"
                style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}
              >
                <h3 className="text-3xl font-bold text-white leading-none">50+</h3>
                <p className="text-white/80 text-sm">Acres</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark, fontFamily: "'Poppins', sans-serif" }}>
                WALLFORT Residency Overview
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
                Wallfort Residency is a premium plotted development by Wallfort Properties, ideally located near Old Dhamtari Road, 
                Boriya Khurd Raipur Road, Raipur. Spread across a spacious campus with T&C approval, it offers thoughtfully designed plots 
                in a covered, secure environment.
              </p>
              <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
                The project features 3 beautifully landscaped gardens, a children's park, a modern club house, and 24×7 security with CCTV 
                surveillance — making it an ideal choice for families seeking a premium lifestyle in Raipur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan */}
      <section id="wf-plans" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle title="Master Plan & Layout" subtitle="Well-planned plots in a green, secure campus" />
          <div
            className="rounded-2xl overflow-hidden mt-10 transition-all duration-300 hover:-translate-y-2"
            style={{ boxShadow: wf.shadow, background: "white" }}
          >
            <img src={masterlayout} alt="Master Layout" className="w-full" />
            <div className="p-6 text-left">
              <h4 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>WALLFORT Residency Master Plan</h4>
              <p className="text-sm" style={{ color: wf.textLight }}>
                Spacious plotted development with gardens, club house and children's park. Covered campus with 24×7 security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
        <div className="max-w mx-auto">
          <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Residency" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  {/* <h4 className="text-white text-lg font-medium">View {i + 1}</h4> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="World-Class Amenities" subtitle="Everything you need for a vibrant community life" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
            {amenities.map((a, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
              >
                <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Location & Connectivity" subtitle="Near Old Dhamtari Road, Boriya Khurd Raipur Road, Raipur" light />
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
              <ul className="space-y-4">
                {locationAdvantages.map((l, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
                <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Booking */}
      <section id="wf-contact" className="py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Book a FREE Site Visit" subtitle="Take the first step towards your plot at WALLFORT Residency" />
          <div className="rounded-2xl p-8 md:p-12 mt-10" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)", boxShadow: wf.shadow }}>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
                style={{ background: "white" }}
                onFocus={(e) => (e.target.style.borderColor = wf.primary)}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
                style={{ background: "white" }}
                onFocus={(e) => (e.target.style.borderColor = wf.primary)}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
                style={{ background: "white" }}
                onFocus={(e) => (e.target.style.borderColor = wf.primary)}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
              />
              <select
                value={formData.plotSize}
                onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
                style={{ background: "white", color: formData.plotSize ? wf.textDark : wf.textLight }}
                onFocus={(e) => (e.target.style.borderColor = wf.primary)}
                onBlur={(e) => (e.target.style.borderColor = "transparent")}
              >
                <option value="">Plot Size (sq. ft.)</option>
                <option>1200 - 1500</option>
                <option>1500 - 1800</option>
                <option>1800 - 2000</option>
                <option>2000+</option>
              </select>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full h-14 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-0.5"
                  style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})`, boxShadow: wf.shadow }}
                >
                  Book a Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">WALLFORT Residency</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 inline mr-1" />
              Boriya Khurd Raipur Road, Raipur<br />
              Your address for premium living.
            </p>
          </div>
          <div>
            <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
            </h5>
            <ul className="space-y-2">
              {["Home", "Overview", "Plans", "Gallery"].map((l) => (
                <li key={l}>
                  <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
              Legal
              <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
            </h5>
            <ul className="space-y-2">
              <li><span className="text-white/70 text-sm">Privacy Policy</span></li>
              <li><span className="text-white/70 text-sm">Terms of Use</span></li>
            </ul>
          </div>
          <div>
            <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
            </h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9074307248</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> shrirajteam@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Near Old Dhamtari Road, Raipur</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href="tel:+919074307248"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-110 transition-transform"
        style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
      >
        <Phone className="w-5 h-5" /> Book a FREE Site Visit
      </a>

      {/* Keyframe animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* Reusable section title */
const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="text-center mb-4">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark, fontFamily: "'Poppins', sans-serif" }}>
      {title}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
    </h2>
    <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
  </div>
);

export default Wallfort;