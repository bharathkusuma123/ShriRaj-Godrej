// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun } from "lucide-react";
// import { Link } from "react-router-dom";
// import heroBanner from "@/images/webnewhome.jpeg"; 
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", phone: "", email: "", plotSize: "" });

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("Thank you! We will contact you shortly.");
//     setFormData({ name: "", phone: "", email: "", plotSize: "" });
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <button
//             onClick={() => scrollTo("wf-home")}
//             className="text-xl font-bold uppercase tracking-widest"
//             style={{ color: wf.secondary }}
//           >
//             WALLFORT.
//           </button>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}

//             <Link
//               to="/"
//               className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Godrej
//             </Link>
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/"
//                 className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="wf-home" className="relative h-screen overflow-hidden">
//         <img
//           src={heroBanner}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//           {/* <div className="max-w-4xl px-4">
//             <p className="text-lg tracking-[5px] uppercase mb-4 animate-[fadeInUp_1s_ease_forwards] opacity-0">
//               wallfort Building Homes
//             </p>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 animate-[fadeInUp_1s_ease_0.3s_forwards] opacity-0">
//               WALLFORT Parkview
//             </h1>
//             <p className="text-2xl md:text-3xl font-light mb-6 animate-[fadeInUp_1s_ease_0.6s_forwards] opacity-0">
//               DEVELOPED PLOTS
//             </p>
//             <p className="text-xl md:text-2xl mb-8 animate-[fadeInUp_1s_ease_0.9s_forwards] opacity-0" style={{ color: wf.primary }}>
//               PRIME LOCATION OF DATRENGA
//             </p>
//           </div> */}
//         </div>
//       </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>145 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>TOTAL LAND DEVELOPED</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>50 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>DEVELOPMENT IN PROGRESS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>5000+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>HAPPY CUSTOMERS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Trophy className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>17+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>CURRENT PROJECTS</p>
//             </div>
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision Statement */}
//       {/* <section className="py-16 px-4" style={{ background: "white" }}>
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: wf.secondary }}>
//             A WORLD WITHIN A WORLD
//           </h3>
//           <p className="text-lg leading-relaxed" style={{ color: wf.textLight }}>
//             A world class club house, strikes a beautiful balance between active and leisure lifestyle.
//           </p>
//         </div>
//       </section> */}

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           {/* Placeholder for location map image - you'll need to add the actual map image */}
//           {/* <div className="rounded-2xl overflow-hidden mb-10 h-96" style={{ background: "rgba(255,255,255,0.1)" }}>
//             <div className="w-full h-full flex items-center justify-center">
//               <p className="text-white/70">Location Map - Wallfort Parkview, Datrenga</p>
//             </div>
//           </div> */}

//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
//               <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-4">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90">
//                     <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
//                     {l}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
//                 <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Projects */}
//       {/* <section className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Other Projects" subtitle="1, 2, 3 BHK Flats, 3.5 BHK Bungalows & Developed Plots" />
//           <div className="grid md:grid-cols-2 gap-8 mt-10">
//             <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//               <h3 className="text-2xl font-semibold mb-3" style={{ color: wf.secondary }}>Wallfort Vihar</h3>
//               <p className="text-sm" style={{ color: wf.textLight }}>Vidhan Sabha Road, Raipur</p>
//             </div>
//             <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//               <h3 className="text-2xl font-semibold mb-3" style={{ color: wf.secondary }}>Wallfort City</h3>
//               <p className="text-sm" style={{ color: wf.textLight }}>Offices Fafadh Chowk, Raipur</p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Contact / Booking */}
//       <section id="wf-contact" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle title="Book a FREE Site Visit" subtitle="Take the first step towards your plot at WALLFORT Parkview" />
//           <div className="rounded-2xl p-8 md:p-12 mt-10" style={{ background: "white", boxShadow: wf.shadow }}>
//             <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 required
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <select
//                 value={formData.plotSize}
//                 onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors"
//                 style={{ background: "#f8f4f0", color: formData.plotSize ? wf.textDark : wf.textLight }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               >
//                 <option value="">Plot Size (sq. ft.)</option>
//                 <option>1200 - 1500</option>
//                 <option>1500 - 1800</option>
//                 <option>1800 - 2000</option>
//                 <option>2000+</option>
//               </select>
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   className="w-full h-14 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-0.5"
//                   style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})`, boxShadow: wf.shadow }}
//                 >
//                   Book a Free Consultation
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <h3 className="text-xl font-bold mb-4">WALLFORT Parkview</h3>
//             <p className="text-white/60 text-sm leading-relaxed">
//               <MapPin className="w-4 h-4 inline mr-1" />
//               Datrenga, Raipur<br />
//               Prime Location of Datrenga
//             </p>
//             <p className="text-white/40 text-xs mt-4">
//               www.wallfortproperties.com
//             </p>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//                 <li key={l}>
//                   <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//                     <ChevronRight className="w-3 h-3" /> {l}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Legal
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               <li><span className="text-white/70 text-sm">Privacy Policy</span></li>
//               <li><span className="text-white/70 text-sm">Terms of Use</span></li>
//               <li><span className="text-white/70 text-sm">Disclaimer</span></li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2 text-sm text-white/70">
//               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//               <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@wallfortproperties.com</li>
//               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//             </ul>
//           </div>
//         </div>
//         {/* <div className="max-w-6xl mx-auto mt-12 pt-6 text-center border-t border-white/10">
//           <p className="text-white/40 text-xs">
//             Disclaimer: The information, specifications, drawings, amenities, facilities, parameters, vegetation, etc. shown in this brochure are conceptual and indicative of the kind of development that is intended by the developer to develop the projects and is solely an artist's Impression. The developer reserves the sole right to amend the layout, plans, number of floors, specifications, elevations, colour schemes, amenities, price, etc. without any obligation and/or prior notice to anyone. This work is the copyright of Wallfort Properties and cannot be reproduced in any form whatsoever.
//           </p>
//         </div> */}
//       </footer>

//       {/* Floating CTA */}
//       <a
//         href="tel:+917999983093"
//         className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-110 transition-transform"
//         style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//       >
//         <Phone className="w-5 h-5" /> Book a FREE Site Visit
//       </a>

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* Reusable section title */
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;





// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun } from "lucide-react";
// import { Link } from "react-router-dom";
// import heroBanner from "@/images/webnewhome.jpeg"; 
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ 
//     firstName: "", 
//     lastName: "", 
//     phone: "", 
//     email: "", 
//     plotSize: "" 
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     // Split full name into first and last name
//     let firstName = formData.firstName;
//     let lastName = formData.lastName;

//     // If firstName contains space and lastName is empty, split it
//     if (firstName.includes(' ') && !lastName) {
//       const nameParts = firstName.split(' ');
//       firstName = nameParts[0];
//       lastName = nameParts.slice(1).join(' ');
//     }

//     const payload = {
//       first_name: firstName || "Not provided",
//       last_name: lastName || "Not provided",
//       email: formData.email,
//       phone_number: formData.phone,
//       message: `Enquiry from WALLFORT Parkview landing page. Interested in plot size: ${formData.plotSize || 'Not specified'}`
//     };

//     try {
//       const response = await fetch('https://shrirajproperty.com:90/leads/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ 
//           type: 'success', 
//           message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
//         });
//         // Reset form
//         setFormData({ 
//           firstName: "", 
//           lastName: "", 
//           phone: "", 
//           email: "", 
//           plotSize: "" 
//         });
//       } else {
//         setSubmitStatus({ 
//           type: 'error', 
//           message: data.message || 'Something went wrong. Please try again.' 
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear success message after 5 seconds
//       if (submitStatus.type === 'success') {
//         setTimeout(() => {
//           setSubmitStatus({ type: '', message: '' });
//         }, 5000);
//       }
//     }
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <button
//             onClick={() => scrollTo("wf-home")}
//             className="text-xl font-bold uppercase tracking-widest"
//             style={{ color: wf.secondary }}
//           >
//             WALLFORT.
//           </button>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}

//             <Link
//               to="/godrej"
//               className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Godrej
//             </Link>
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/"
//                 className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="wf-home" className="relative h-screen overflow-hidden">
//         <img
//           src={heroBanner}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//           {/* <div className="max-w-4xl px-4">
//             <p className="text-lg tracking-[5px] uppercase mb-4 animate-[fadeInUp_1s_ease_forwards] opacity-0">
//               wallfort Building Homes
//             </p>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 animate-[fadeInUp_1s_ease_0.3s_forwards] opacity-0">
//               WALLFORT Parkview
//             </h1>
//             <p className="text-2xl md:text-3xl font-light mb-6 animate-[fadeInUp_1s_ease_0.6s_forwards] opacity-0">
//               DEVELOPED PLOTS
//             </p>
//             <p className="text-xl md:text-2xl mb-8 animate-[fadeInUp_1s_ease_0.9s_forwards] opacity-0" style={{ color: wf.primary }}>
//               PRIME LOCATION OF DATRENGA
//             </p>
//           </div> */}
//         </div>
//       </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>145 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>TOTAL LAND DEVELOPED</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>50 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>DEVELOPMENT IN PROGRESS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>5000+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>HAPPY CUSTOMERS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Trophy className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>17+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>CURRENT PROJECTS</p>
//             </div>
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
//               <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-4">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90">
//                     <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
//                     {l}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
//                 <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact / Booking */}
//       <section id="wf-contact" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle title="Book a FREE Site Visit" subtitle="Take the first step towards your plot at WALLFORT Parkview" />
          
//           {submitStatus.message && (
//             <div className={`mb-6 p-4 rounded-lg ${
//               submitStatus.type === 'success' 
//                 ? 'bg-green-100 text-green-700 border border-green-200' 
//                 : 'bg-red-100 text-red-700 border border-red-200'
//             }`}>
//               {submitStatus.message}
//             </div>
//           )}
          
//           <div className="rounded-2xl p-8 md:p-12 mt-10" style={{ background: "white", boxShadow: wf.shadow }}>
//             <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name *"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number *"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address *"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               {/* <select
//                 name="plotSize"
//                 value={formData.plotSize}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0", color: formData.plotSize ? wf.textDark : wf.textLight }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               >
//                 <option value="">Plot Size (sq. ft.)</option>
//                 <option value="1200-1500">1200 - 1500</option>
//                 <option value="1500-1800">1500 - 1800</option>
//                 <option value="1800-2000">1800 - 2000</option>
//                 <option value="2000+">2000+</option>
//               </select> */}
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full h-14 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//                   style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})`, boxShadow: wf.shadow }}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <h3 className="text-xl font-bold mb-4">WALLFORT Parkview</h3>
//             <p className="text-white/60 text-sm leading-relaxed">
//               <MapPin className="w-4 h-4 inline mr-1" />
//               Datrenga, Raipur<br />
//               Prime Location of Datrenga
//             </p>
//             <p className="text-white/40 text-xs mt-4">
//               www.wallfortproperties.com
//             </p>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//                 <li key={l}>
//                   <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//                     <ChevronRight className="w-3 h-3" /> {l}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Legal
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               <li><span className="text-white/70 text-sm">Privacy Policy</span></li>
//               <li><span className="text-white/70 text-sm">Terms of Use</span></li>
//               <li><span className="text-white/70 text-sm">Disclaimer</span></li>
//             </ul>
//           </div>
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2 text-sm text-white/70">
//               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//               <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@wallfortproperties.com</li>
//               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* Floating CTA */}
//       <a
//         href="tel:+917999983093"
//         className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-110 transition-transform"
//         style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//       >
//         <Phone className="w-5 h-5" /> Book a FREE Site Visit
//       </a>

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* Reusable section title */
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;




// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun, ArrowLeft } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// // import heroBannerforweb from "@/images/webnewhome.jpeg"; 
// import heroBannerforweb from "@/images/webnewhome1.png"; 
// import heroBannerformobile from "@/images/herobannerformobile.jpeg"
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ 
//     firstName: "", 
//     lastName: "", 
//     phone: "", 
//     email: "", 
//     plotSize: "" 
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     // Split full name into first and last name
//     let firstName = formData.firstName;
//     let lastName = formData.lastName;

//     // If firstName contains space and lastName is empty, split it
//     if (firstName.includes(' ') && !lastName) {
//       const nameParts = firstName.split(' ');
//       firstName = nameParts[0];
//       lastName = nameParts.slice(1).join(' ');
//     }

//     const payload = {
//       first_name: firstName || "Not provided",
//       last_name: lastName || "Not provided",
//       email: formData.email,
//       phone_number: formData.phone,
//       message: `Enquiry from WALLFORT Parkview landing page. Interested in plot size: ${formData.plotSize || 'Not specified'}`
//     };

//     try {
//       const response = await fetch('https://shrirajproperty.com:90/leads/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ 
//           type: 'success', 
//           message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
//         });
//         // Reset form
//         setFormData({ 
//           firstName: "", 
//           lastName: "", 
//           phone: "", 
//           email: "", 
//           plotSize: "" 
//         });
//       } else {
//         setSubmitStatus({ 
//           type: 'error', 
//           message: data.message || 'Something went wrong. Please try again.' 
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear success message after 5 seconds
//       if (submitStatus.type === 'success') {
//         setTimeout(() => {
//           setSubmitStatus({ type: '', message: '' });
//         }, 5000);
//       }
//     }
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={goBack}
//               className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
//               style={{ color: wf.dark }}
//               aria-label="Go back"
//             >
//               <ArrowLeft className="w-4 h-4" />
//             </button>
//             <button
//               onClick={() => scrollTo("wf-home")}
//               className="text-xl font-bold uppercase tracking-widest"
//               style={{ color: wf.secondary }}
//             >
//               WALLFORT.
//             </button>
//           </div>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}

//             <Link
//               to="/godrej"
//               className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Godrej
//             </Link>
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             {/* Back button in mobile menu */}
//             <button
//               onClick={() => {
//                 goBack();
//                 setMobileMenuOpen(false);
//               }}
//               className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium border-b border-primary/20 mb-2"
//               style={{ color: wf.dark }}
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>
            
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/godrej"
//                 className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       {/* <section id="wf-home" className="relative h-screen overflow-hidden">
//         <img
//           src={heroBannerforweb}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//           <img
//           src={heroBannerformobile}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 " />
//         <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//           <div className="max-w-4xl px-4">
//             <p className="text-lg tracking-[5px] uppercase mb-4 animate-[fadeInUp_1s_ease_forwards] opacity-0">
//               wallfort Building Homes
//             </p>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 animate-[fadeInUp_1s_ease_0.3s_forwards] opacity-0">
//               WALLFORT Parkview
//             </h1>
//             <p className="text-2xl md:text-3xl font-light mb-6 animate-[fadeInUp_1s_ease_0.6s_forwards] opacity-0">
//               DEVELOPED PLOTS
//             </p>
//             <p className="text-xl md:text-2xl mb-8 animate-[fadeInUp_1s_ease_0.9s_forwards] opacity-0" style={{ color: wf.primary }}>
//               PRIME LOCATION OF DATRENGA
//             </p>
//           </div>
//         </div>
//       </section> */}
//       {/* Hero Section */}
// <section id="wf-home" className="relative h-screen overflow-hidden">
//   {/* Desktop banner - hidden on mobile */}
//   <img
//     src={heroBannerforweb}
//     alt="WALLFORT Parkview Banner"
//     className="absolute inset-0 w-full h-full object-cover hidden md:block"
//   />
  
//   {/* Mobile banner - hidden on desktop */}
//   <img
//     src={heroBannerformobile}
//     alt="WALLFORT Parkview Banner"
//     className="absolute inset-0 w-full h-full object-cover block md:hidden"
//   />
  
//   <div className="absolute inset-0" />
//   <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//     {/* Your text content here if needed */}
//   </div>
// </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>145 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>TOTAL LAND DEVELOPED</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>50 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>DEVELOPMENT IN PROGRESS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>5000+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>HAPPY CUSTOMERS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Trophy className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>17+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>CURRENT PROJECTS</p>
//             </div>
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
//               <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-4">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90">
//                     <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
//                     {l}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
//                 <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact / Booking */}
//       <section id="wf-contact" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle title="Book a FREE Site Visit" subtitle="Take the first step towards your plot at WALLFORT Parkview" />
          
//           {submitStatus.message && (
//             <div className={`mb-6 p-4 rounded-lg ${
//               submitStatus.type === 'success' 
//                 ? 'bg-green-100 text-green-700 border border-green-200' 
//                 : 'bg-red-100 text-red-700 border border-red-200'
//             }`}>
//               {submitStatus.message}
//             </div>
//           )}
          
//           <div className="rounded-2xl p-8 md:p-12 mt-10" style={{ background: "white", boxShadow: wf.shadow }}>
//             <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name *"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number *"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address *"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full h-14 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//                   style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})`, boxShadow: wf.shadow }}
//                 >
//                   {isSubmitting ? 'Submitting...' : 'Book a Free Consultation'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//    {/* Footer */}
// <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//   <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//     <div>
//       <h3 className="text-xl font-bold mb-4">WALLFORT.</h3>
//       <p className="text-white/60 text-sm leading-relaxed">
//         <MapPin className="w-4 h-4 inline mr-1" />
//         Datrenga, Raipur<br />
//         Prime Location of Datrenga
//       </p>
//     </div>
    
//     <div>
//       <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//         Quick Links
//         <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//       </h5>
//       <ul className="space-y-2">
//         {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//           <li key={l}>
//             <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//               <ChevronRight className="w-3 h-3" /> {l}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
    
//     <div>
//       <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//         Contact Us
//         <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//       </h5>
//       <ul className="space-y-2 text-sm text-white/70">
//         <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//         <li className="flex items-center gap-2"><Mail className="w-4 h-4" />shrirajteam@gmail.com</li>
//         <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//       </ul>
//     </div>
//   </div>
// </footer>

//       {/* Floating CTA */}
//       {/* <a
//         href="tel:+917999983093"
//         className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-xl hover:scale-110 transition-transform"
//         style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//       >
//         <Phone className="w-5 h-5" /> Book a FREE Site Visit
//       </a> */}

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* Reusable section title */
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;




// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun, ArrowLeft } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// // import heroBannerforweb from "@/images/webnewhome.jpeg"; 
// import heroBannerforweb from "@/images/webnewhome1.png"; 
// import heroBannerformobile from "@/images/herobannerformobile.jpeg"
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [formData, setFormData] = useState({ 
//     full_name: "", 
//     email: "", 
//     phone_number: "", 
//     message: "" 
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     const payload = {
//       full_name: formData.full_name || "Not provided",
//       email: formData.email,
//       phone_number: formData.phone_number,
//       message: formData.message || `Enquiry from WALLFORT Parkview landing page.`,
//       property_name:"WALLFORT Parkview",
//     };

//     try {
//       const response = await fetch('https://shrirajproperty.com:90/leads/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ 
//           type: 'success', 
//           message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
//         });
//         // Reset form
//         setFormData({ 
//           full_name: "", 
//           email: "", 
//           phone_number: "", 
//           message: "" 
//         });
//       } else {
//         setSubmitStatus({ 
//           type: 'error', 
//           message: data.message || 'Something went wrong. Please try again.' 
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear success message after 5 seconds
//       if (submitStatus.type === 'success') {
//         setTimeout(() => {
//           setSubmitStatus({ type: '', message: '' });
//         }, 5000);
//       }
//     }
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             {/* <button
//               onClick={goBack}
//               className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
//               style={{ color: wf.dark }}
//               aria-label="Go back"
//             >
//               <ArrowLeft className="w-4 h-4" />
//             </button> */}
//             <button
//               onClick={() => scrollTo("wf-home")}
//               className="text-xl font-bold uppercase tracking-widest"
//               style={{ color: wf.secondary }}
//             >
//               WALLFORT.
//             </button>
//           </div>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}

//             {/* <Link
//               to="/godrej"
//               className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Godrej
//             </Link> */}
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             {/* Back button in mobile menu */}
//             <button
//               onClick={() => {
//                 goBack();
//                 setMobileMenuOpen(false);
//               }}
//               className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium border-b border-primary/20 mb-2"
//               style={{ color: wf.dark }}
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>
            
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/godrej"
//                 className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="wf-home" className="relative h-screen overflow-hidden">
//         {/* Desktop banner - hidden on mobile */}
//         <img
//           src={heroBannerforweb}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover hidden md:block"
//         />
        
//         {/* Mobile banner - hidden on desktop */}
//         <img
//           src={heroBannerformobile}
//           alt="WALLFORT Parkview Banner"
//           className="absolute inset-0 w-full h-full object-cover block md:hidden"
//         />
        
//         <div className="absolute inset-0" />
//         <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
//           {/* Your text content here if needed */}
//         </div>
//       </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>145 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>TOTAL LAND DEVELOPED</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Home className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>50 LAKH SQFT</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>DEVELOPMENT IN PROGRESS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Users className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>5000+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>HAPPY CUSTOMERS</p>
//             </div>

//             <div
//               className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//             >
//               <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//               >
//                 <Trophy className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: wf.secondary }}>17+</h3>
//               <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>CURRENT PROJECTS</p>
//             </div>
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
//               <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-4">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90">
//                     <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
//                     {l}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
//                 <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact / Booking */}
//       <section id="wf-contact" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-4xl mx-auto">
//           <SectionTitle title="Get in Touch" subtitle="Take the first step towards your plot at WALLFORT Parkview" />
          
//           {submitStatus.message && (
//             <div className={`mb-6 p-4 rounded-lg ${
//               submitStatus.type === 'success' 
//                 ? 'bg-green-100 text-green-700 border border-green-200' 
//                 : 'bg-red-100 text-red-700 border border-red-200'
//             }`}>
//               {submitStatus.message}
//             </div>
//           )}
          
//           <div className="rounded-2xl p-8 md:p-12 mt-10" style={{ background: "white", boxShadow: wf.shadow }}>
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <input
//                 type="text"
//                 name="full_name"
//                 placeholder="Full Name *"
//                 required
//                 value={formData.full_name}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="w-full h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address *"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="w-full h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <input
//                 type="tel"
//                 name="phone_number"
//                 placeholder="Phone Number *"
//                 required
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 className="w-full h-14 rounded-xl px-5 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message (Optional)"
//                 value={formData.message}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//                 rows={4}
//                 className="w-full rounded-xl px-5 py-3 text-base border-2 border-transparent focus:outline-none transition-colors disabled:opacity-50 resize-none"
//                 style={{ background: "#f8f4f0" }}
//                 onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//                 onBlur={(e) => (e.target.style.borderColor = "transparent")}
//               />
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full h-14 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})`, boxShadow: wf.shadow }}
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div>
//             <h3 className="text-xl font-bold mb-4">WALLFORT.</h3>
//             <p className="text-white/60 text-sm leading-relaxed">
//               <MapPin className="w-4 h-4 inline mr-1" />
//               Datrenga, Raipur<br />
//               Prime Location of Datrenga
//             </p>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//                 <li key={l}>
//                   <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//                     <ChevronRight className="w-3 h-3" /> {l}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2 text-sm text-white/70">
//               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//               <li className="flex items-center gap-2"><Mail className="w-4 h-4" />shrirajteam@gmail.com</li>
//               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* Reusable section title */
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark, fontFamily: "'Poppins', sans-serif" }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;


// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun, ArrowLeft } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import heroBannerforweb from "@/images/webnewhome1.png"; 
// import heroBannerformobile from "@/images/herobannerformobile.jpeg"
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Enquiry Form Component
// const EnquiryForm = () => {
//   const [formData, setFormData] = useState({ 
//     full_name: "", 
//     email: "", 
//     phone_number: "", 
//     message: "" 
//   });
//   const [consent, setConsent] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!consent) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Please consent to the privacy policy to continue.' 
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     const payload = {
//       full_name: formData.full_name || "Not provided",
//       email: formData.email,
//       phone_number: formData.phone_number,
//       message: formData.message || `Enquiry from WALLFORT Parkview landing page`,
//       property_name:"WALLFORT Parkview",
//     };

//     try {
//       const response = await fetch('https://shrirajproperty.com:90/leads/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ 
//           type: 'success', 
//           message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
//         });
//         // Reset form
//         setFormData({ 
//           full_name: "", 
//           email: "", 
//           phone_number: "", 
//           message: "" 
//         });
//         setConsent(true);
//       } else {
//         setSubmitStatus({ 
//           type: 'error', 
//           message: data.message || 'Something went wrong. Please try again.' 
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus({ type: '', message: '' });
//       }, 5000);
//     }
//   };

//   return (
//     <div id="enquiry" className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-2xl" style={{ border: `1px solid ${wf.primary}20` }}>
//       {/* <div className="flex gap-2 mb-2">
//         <a 
//           href="#" 
//           className="flex-1 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
//           style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}
//         >
//           Book FREE Site Visit
//         </a>
//         <a
//           href="https://api.whatsapp.com/send?phone=9399492809&text=Hi!%20I'm%20Interested%20In%20WALLFORT%20Parkview%20Raipur"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 text-white text-center py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition"
//           style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//         >
//           WhatsApp Us
//         </a>
//       </div> */}

//       <div className="border-t pt-4" style={{ borderColor: `${wf.primary}30` }}>
//         <h3 className="font-bold text-lg text-center mb-4" style={{ color: wf.dark }}>
//           Book a Free Consultation
//         </h3>
        
//         {submitStatus.message && (
//           <div className={`mb-4 p-3 rounded-lg text-sm ${
//             submitStatus.type === 'success' 
//               ? 'bg-green-100 text-green-700 border border-green-200' 
//               : 'bg-red-100 text-red-700 border border-red-200'
//           }`}>
//             {submitStatus.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input 
//             type="text" 
//             name="full_name"
//             placeholder="Full Name *" 
//             required 
//             value={formData.full_name} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <input 
//             type="email" 
//             name="email"
//             placeholder="Email Address *" 
//             required 
//             value={formData.email} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <input 
//             type="tel" 
//             name="phone_number"
//             placeholder="Phone Number *" 
//             required 
//             value={formData.phone_number} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message (Optional)"
//             value={formData.message}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             rows={3}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50 resize-none"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <label className="flex items-start gap-2 text-xs" style={{ color: wf.textLight }}>
//             <input 
//               type="checkbox" 
//               checked={consent} 
//               onChange={(e) => setConsent(e.target.checked)} 
//               disabled={isSubmitting}
//               className="mt-0.5 accent-primary"
//               style={{ accentColor: wf.primary }}
//             />
//             I consent to the use of my provided data in accordance with the privacy policy.
//           </label>
//           <button 
//             type="submit" 
//             disabled={isSubmitting || !consent}
//             className="w-full text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => scrollTo("wf-home")}
//               className="text-xl font-bold uppercase tracking-widest"
//               style={{ color: wf.secondary }}
//             >
//               WALLFORT.
//             </button>
//           </div>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             <button
//               onClick={() => {
//                 goBack();
//                 setMobileMenuOpen(false);
//               }}
//               className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium border-b mb-2"
//               style={{ color: wf.dark, borderColor: `${wf.primary}20` }}
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>
            
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/godrej"
//                 className="inline-block text-white font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section with Single Banner and Content */}
//       <section id="wf-home" className="relative min-h-screen flex items-stretch pt-16 overflow-hidden">
//         {/* Single Banner Image */}
//         <div className="absolute inset-0">
//           <img 
//             src={heroBannerforweb} 
//             alt="WALLFORT Parkview" 
//             className="w-full h-full object-cover hidden md:block"
//           />
//           <img 
//             src={heroBannerformobile} 
//             alt="WALLFORT Parkview" 
//             className="w-full h-full object-cover block md:hidden"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r via-black/50 to-transparent" />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 py-12 lg:py-0">
//           {/* Left Side Content */}
//           <div className="flex-1 flex flex-col justify-center text-white">
//             {/* Badges */}
//             {/* <div className="flex gap-2 mb-6">
//               <span 
//                 className="inline-block text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
//                 style={{ background: wf.primary }}
//               >
//                 RERA Approved
//               </span>
//               <span 
//                 className="inline-block text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full"
//                 style={{ background: wf.secondary }}
//               >
//                 Premium Plots
//               </span>
//             </div> */}

//             {/* Main Heading */}
//             {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//               WALLFORT 
//               <br />
//               <span style={{ color: wf.primary }}>PARKVIEW</span>
//             </h1> */}
            
//             {/* Location */}
//             {/* <p className="text-white/80 text-lg mb-2 flex items-center gap-2">
//               <MapPin className="w-5 h-5" style={{ color: wf.primary }} />
//               Datrenga, Raipur
//             </p>
//              */}
//             {/* <p className="text-white/60 text-sm mb-6">Premium Plotted Development</p> */}

//             {/* Highlights Box */}
//             {/* <div 
//               className="backdrop-blur-sm rounded-lg p-5 mb-8 max-w-md"
//               style={{ 
//                 background: `${wf.secondary}40`, 
//                 border: `1px solid ${wf.primary}40`
//               }}
//             >
//               <p className="font-semibold text-lg mb-2" style={{ color: wf.primary }}>
//                 World-Class Amenities
//               </p>
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full" style={{ background: wf.primary }} />
//                   <span className="text-white/90 text-sm">Swimming Pool</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full" style={{ background: wf.primary }} />
//                   <span className="text-white/90 text-sm">Club House</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full" style={{ background: wf.primary }} />
//                   <span className="text-white/90 text-sm">Gymnasium</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full" style={{ background: wf.primary }} />
//                   <span className="text-white/90 text-sm">Party Lawn</span>
//                 </div>
//               </div>
//             </div> */}

//             {/* Stats */}
//             {/* <div className="grid grid-cols-3 gap-4 max-w-md">
//               <div>
//                 <p className="text-2xl font-bold" style={{ color: wf.primary }}>145L</p>
//                 <p className="text-white/60 text-xs">SQFT Developed</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold" style={{ color: wf.primary }}>5000+</p>
//                 <p className="text-white/60 text-xs">Happy Families</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold" style={{ color: wf.primary }}>17+</p>
//                 <p className="text-white/60 text-xs">Projects</p>
//               </div>
//             </div> */}
//           </div>

//           {/* Right Side - Enquiry Form */}
//           <div className="w-full lg:w-[400px] flex items-center lg:items-start lg:pt-20">
//             <EnquiryForm />
//           </div>
//         </div>
//       </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <HighlightCard
//               icon={Building2}
//               title="145 LAKH SQFT"
//               subtitle="TOTAL LAND DEVELOPED"
//             />
//             <HighlightCard
//               icon={Home}
//               title="50 LAKH SQFT"
//               subtitle="DEVELOPMENT IN PROGRESS"
//             />
//             <HighlightCard
//               icon={Users}
//               title="5000+"
//               subtitle="HAPPY CUSTOMERS"
//             />
//             <HighlightCard
//               icon={Trophy}
//               title="17+"
//               subtitle="CURRENT PROJECTS"
//             />
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           <div className="grid md:grid-cols-2 gap-10 mt-10">
//             <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
//               <h4 className="text-2xl font-semibold mb-5" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-4">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90">
//                     <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: wf.primary }} />
//                     {l}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
//               <div className="p-6">
//                 <h4 className="text-xl font-semibold mb-4">Project Walkthrough</h4>
//                 <VideoPlayer videoUrl="https://youtu.be/m0E38VgU7n4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div>
//             <h3 className="text-xl font-bold mb-4">WALLFORT.</h3>
//             <p className="text-white/60 text-sm leading-relaxed">
//               <MapPin className="w-4 h-4 inline mr-1" />
//               Datrenga, Raipur<br />
//               Prime Location of Datrenga
//             </p>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//                 <li key={l}>
//                   <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//                     <ChevronRight className="w-3 h-3" /> {l}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2 text-sm text-white/70">
//               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//               <li className="flex items-center gap-2"><Mail className="w-4 h-4" />shrirajteam@gmail.com</li>
//               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Reusable components
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// const HighlightCard = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
//   <div
//     className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//     style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//   >
//     <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     <div
//       className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//       style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//     >
//       <Icon className="w-8 h-8 text-white" />
//     </div>
//     <h3 className="text-2xl font-bold mb-1" style={{ color: wf.secondary }}>{title}</h3>
//     <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;





// import { useState, useEffect } from "react";
// import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun, ArrowLeft } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import heroBannerforweb from "@/images/webnewhome1.png"; 
// import heroBannerformobile from "@/images/herobannerformobile.jpeg"
// import aboutimage from "@/images/walfortomega2.jpeg";
// import masterlayout from "@/images/walmart7.jpeg";
// import gal1 from "@/images/ban1.jpeg";
// import gal2 from "@/images/ban2.jpeg";
// import gal3 from "@/images/ban3.jpeg";
// import gal4 from "@/images/walmart4.jpeg";

// /* ── Wallfort Design Tokens (scoped via CSS-in-JS) ── */
// const wf = {
//   primary: "#c8a27a",
//   primaryDark: "#b58d63",
//   secondary: "#1e4a2e",
//   secondaryLight: "#2e6b3e",
//   accent: "#e9b17a",
//   dark: "#2c2c2c",
//   light: "#faf7f2",
//   gold: "#d4af37",
//   textDark: "#333",
//   textLight: "#666",
//   shadow: "0 10px 30px rgba(0,0,0,0.1)",
//   shadowHover: "0 20px 40px rgba(0,0,0,0.15)",
// };

// // Updated amenities based on PDF
// const amenities = [
//   { icon: Building2, label: "World Class Club House" },
//   { icon: Dumbbell, label: "Gymnasium" },
//   { icon: Trophy, label: "Multipurpose Court" },
//   { icon: Waves, label: "Swimming Pool" },
//   { icon: TreePine, label: "Party Lawn" },
//   { icon: Sun, label: "Poolside Deck" },
//   { icon: Home, label: "Gazebo" },
//   { icon: Users, label: "Buffet Area with Pergola" },
//   { icon: Trophy, label: "Cricket Pitch" },
//   { icon: Users, label: "Viewers Gallery" },
//   { icon: Trophy, label: "Football Post" },
//   { icon: Sun, label: "Yoga/Meditation Area" },
//   { icon: TreePine, label: "Tree Plaza" },
//   { icon: Users, label: "Senior Citizen Sit-out" },
//   { icon: Footprints, label: "Acupressure Track" },
//   { icon: Footprints, label: "Walkway" },
//   { icon: Dumbbell, label: "Open Air Gym" },
//   { icon: Bike, label: "Bicycle/Tricycle Track" },
//   { icon: Heart, label: "Wellness Area" },
// ];

// const galleryImages = [gal1, gal2, gal3];

// // Updated location advantages from PDF
// const locationAdvantages = [
//   "Jaistambh Chowk - 11 Km",
//   "Airport - 15 Km",
//   "Ghadi Chowk - 11 Km",
//   "Railway Station - 13 Km",
// ];

// const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// // Enquiry Form Component
// const EnquiryForm = () => {
//   const [formData, setFormData] = useState({ 
//     full_name: "", 
//     email: "", 
//     phone_number: "", 
//     message: "" 
//   });
//   const [consent, setConsent] = useState(true);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!consent) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Please consent to the privacy policy to continue.' 
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     const payload = {
//       full_name: formData.full_name || "Not provided",
//       email: formData.email,
//       phone_number: formData.phone_number,
//       message: formData.message || `Enquiry from WALLFORT Parkview landing page`,
//       property_name:"WALLFORT Parkview",
//     };

//     try {
//       const response = await fetch('https://shrirajproperty.com:90/leads/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSubmitStatus({ 
//           type: 'success', 
//           message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
//         });
//         // Reset form
//         setFormData({ 
//           full_name: "", 
//           email: "", 
//           phone_number: "", 
//           message: "" 
//         });
//         setConsent(true);
//       } else {
//         setSubmitStatus({ 
//           type: 'error', 
//           message: data.message || 'Something went wrong. Please try again.' 
//         });
//       }
//     } catch (error) {
//       setSubmitStatus({ 
//         type: 'error', 
//         message: 'Network error. Please check your connection and try again.' 
//       });
//     } finally {
//       setIsSubmitting(false);
      
//       // Clear success message after 5 seconds
//       setTimeout(() => {
//         setSubmitStatus({ type: '', message: '' });
//       }, 5000);
//     }
//   };

//   return (
//     <div id="enquiry" className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-2xl" style={{ border: `1px solid ${wf.primary}20` }}>
//       <div className="border-t pt-4" style={{ borderColor: `${wf.primary}30` }}>
//         <h3 className="font-bold text-lg text-center mb-4" style={{ color: wf.dark }}>
//           Book a Free Consultation
//         </h3>
        
//         {submitStatus.message && (
//           <div className={`mb-4 p-3 rounded-lg text-sm ${
//             submitStatus.type === 'success' 
//               ? 'bg-green-100 text-green-700 border border-green-200' 
//               : 'bg-red-100 text-red-700 border border-red-200'
//           }`}>
//             {submitStatus.message}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input 
//             type="text" 
//             name="full_name"
//             placeholder="Full Name *" 
//             required 
//             value={formData.full_name} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <input 
//             type="email" 
//             name="email"
//             placeholder="Email Address *" 
//             required 
//             value={formData.email} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <input 
//             type="tel" 
//             name="phone_number"
//             placeholder="Phone Number *" 
//             required 
//             value={formData.phone_number} 
//             onChange={handleChange}
//             disabled={isSubmitting}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message (Optional)"
//             value={formData.message}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             rows={3}
//             className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50 resize-none"
//             style={{ background: "#f8f4f0" }}
//             onFocus={(e) => (e.target.style.borderColor = wf.primary)}
//             onBlur={(e) => (e.target.style.borderColor = "transparent")}
//           />
//           <label className="flex items-start gap-2 text-xs" style={{ color: wf.textLight }}>
//             <input 
//               type="checkbox" 
//               checked={consent} 
//               onChange={(e) => setConsent(e.target.checked)} 
//               disabled={isSubmitting}
//               className="mt-0.5 accent-primary"
//               style={{ accentColor: wf.primary }}
//             />
//             I consent to the use of my provided data in accordance with the privacy policy.
//           </label>
//           <button 
//             type="submit" 
//             disabled={isSubmitting || !consent}
//             className="w-full text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
//             style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // Video Player Component
// const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const getYouTubeId = (url: string) => {
//     const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//     const match = url.match(regExp);
//     return (match && match[2].length === 11) ? match[2] : null;
//   };

//   const videoId = getYouTubeId(videoUrl);

//   if (!videoId) return null;

//   if (isPlaying) {
//     return (
//       <div className="relative rounded-xl overflow-hidden h-60">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
//           title="Project Walkthrough"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//           className="w-full h-full"
//         ></iframe>
//       </div>
//     );
//   }

//   return (
//     <div 
//       className="relative rounded-xl overflow-hidden h-60 cursor-pointer group"
//       onClick={() => setIsPlaying(true)}
//     >
//       <img 
//         src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
//         alt="Video thumbnail" 
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         onError={(e) => {
//           e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
//         }}
//       />
//       <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
//         <div
//           className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl"
//           style={{ background: wf.primary }}
//         >
//           <Play className="w-7 h-7 text-white ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Wallfort = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileMenuOpen(false);
//   };

//   const goBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
//       {/* Navbar */}
//       <nav
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
//         style={{
//           background: "rgba(255,255,255,0.95)",
//           backdropFilter: "blur(10px)",
//           boxShadow: scrolled ? wf.shadow : "none",
//           padding: scrolled ? "12px 0" : "20px 0",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => scrollTo("wf-home")}
//               className="text-xl font-bold uppercase tracking-widest"
//               style={{ color: wf.secondary }}
//             >
//               WALLFORT.
//             </button>
//           </div>

//           <div className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
//                 className="relative px-4 py-2 text-sm font-medium transition-colors group"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//                 <span
//                   className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
//                   style={{ background: wf.primary }}
//                 />
//               </button>
//             ))}
//           </div>

//           <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" style={{ color: wf.dark }} />
//             ) : (
//               <Menu className="w-6 h-6" style={{ color: wf.dark }} />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
//             <button
//               onClick={() => {
//                 goBack();
//                 setMobileMenuOpen(false);
//               }}
//               className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium border-b mb-2"
//               style={{ color: wf.dark, borderColor: `${wf.primary}20` }}
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Back
//             </button>
            
//             {navItems.map((item) => (
//               <button 
//                 key={item} 
//                 onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
//                 className="block w-full text-left py-2 text-sm font-medium"
//                 style={{ color: wf.dark }}
//               >
//                 {item}
//               </button>
//             ))}
//             <div className="pt-2">
//               <Link
//                 to="/godrej"
//                 className="inline-block text-white font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//                 style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Godrej
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section with Single Banner and Content */}
//       <section id="wf-home" className="relative min-h-screen flex items-stretch pt-16 overflow-hidden">
//         {/* Single Banner Image */}
//         <div className="absolute inset-0">
//           <img 
//             src={heroBannerforweb} 
//             alt="WALLFORT Parkview" 
//             className="w-full h-full object-cover hidden md:block"
//           />
//           <img 
//             src={heroBannerformobile} 
//             alt="WALLFORT Parkview" 
//             className="w-full h-full object-cover block md:hidden"
//           />
//           {/* Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r via-black/50 to-transparent" />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 py-12 lg:py-0">
//           {/* Left Side Content */}
//           <div className="flex-1 flex flex-col justify-center text-white">
//             {/* Empty left side - can add content later if needed */}
//           </div>

//           {/* Right Side - Enquiry Form */}
//           <div className="w-full lg:w-[400px] flex items-center lg:items-start lg:pt-20">
//             <EnquiryForm />
//           </div>
//         </div>
//       </section>

//       {/* Company Highlights */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
//             <HighlightCard
//               icon={Building2}
//               title="145 LAKH SQFT"
//               subtitle="TOTAL LAND DEVELOPED"
//             />
//             <HighlightCard
//               icon={Home}
//               title="50 LAKH SQFT"
//               subtitle="DEVELOPMENT IN PROGRESS"
//             />
//             <HighlightCard
//               icon={Users}
//               title="5000+"
//               subtitle="HAPPY CUSTOMERS"
//             />
//             <HighlightCard
//               icon={Trophy}
//               title="17+"
//               subtitle="CURRENT PROJECTS"
//             />
//           </div>
//           <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
//             Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
//           </p>
//         </div>
//       </section>

//       {/* About / Overview */}
//       <section id="wf-overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
//               <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark }}>
//                 A WORLD BORN OUT OF YOUR IMAGINATION!
//               </h2>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
//               </p>
//               <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
//                 From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
//               </p>
//               <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
//                 While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section id="wf-gallery" className="py-20 px-4" style={{ background: wf.light }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
//             {galleryImages.map((img, i) => (
//               <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
//                 <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Amenities */}
//       <section id="wf-amenities" className="py-20 px-4" style={{ background: "white" }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
//             {amenities.map((a, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}
//               >
//                 <a.icon className="w-8 h-8 mb-3" style={{ color: wf.primary }} />
//                 <span className="text-sm font-medium">{a.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Location */}
//       <section id="wf-location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
//         <div className="max-w-6xl mx-auto">
//           <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
//           <div className="grid md:grid-cols-2 gap-8 mt-10">
//             {/* Left Side - Google Map */}
//             <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 h-[450px]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5262342389965!2d81.6208556!3d20.971532699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dae0d77702e1%3A0x3bac3d607d885783!2sOld%20Dhamtari%20Rd%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1772786222653!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="WALLFORT Parkview location"
//               />
//             </div>

//             {/* Right Side - Location Advantages */}
//             <div 
//               className="rounded-2xl p-8 h-[450px] flex flex-col"
//               style={{ 
//                 background: "rgba(255,255,255,0.1)", 
//                 backdropFilter: "blur(10px)", 
//                 border: "1px solid rgba(255,255,255,0.2)"
//               }}
//             >
//               <h4 className="text-2xl font-semibold mb-6" style={{ color: wf.primary }}>Location Advantages</h4>
//               <ul className="space-y-5 flex-1">
//                 {locationAdvantages.map((l, i) => (
//                   <li key={i} className="flex items-center gap-3 text-white/90 text-lg">
//                     <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: wf.primary }} />
//                     <span>{l}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div>
//             <h3 className="text-xl font-bold mb-4">WALLFORT.</h3>
//             <p className="text-white/60 text-sm leading-relaxed">
//               <MapPin className="w-4 h-4 inline mr-1" />
//               Datrenga, Raipur<br />
//               Prime Location of Datrenga
//             </p>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Quick Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2">
//               {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
//                 <li key={l}>
//                   <button onClick={() => scrollTo(`wf-${l.toLowerCase()}`)} className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1">
//                     <ChevronRight className="w-3 h-3" /> {l}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           <div>
//             <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
//               Contact Us
//               <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
//             </h5>
//             <ul className="space-y-2 text-sm text-white/70">
//               <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
//               <li className="flex items-center gap-2"><Mail className="w-4 h-4" />shrirajteam@gmail.com</li>
//               <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
//             </ul>
//           </div>
//         </div>
//       </footer>

//       {/* Keyframe animation */}
//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Reusable components
// const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
//   <div className="text-center mb-4">
//     <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark }}>
//       {title}
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     </h2>
//     <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
//   </div>
// );

// const HighlightCard = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
//   <div
//     className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//     style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
//   >
//     <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
//     <div
//       className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//       style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
//     >
//       <Icon className="w-8 h-8 text-white" />
//     </div>
//     <h3 className="text-2xl font-bold mb-1" style={{ color: wf.secondary }}>{title}</h3>
//     <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>{subtitle}</p>
//   </div>
// );

// export default Wallfort;




///======================================================


import { useState, useEffect } from "react";
import { Phone, Menu, X, Shield, Home, Users, Cctv, TreePine, Dumbbell, Gamepad2, Trophy, Play, MapPin, Mail, ChevronRight, Building2, Star, Baby, Waves, UtensilsCrossed, Bike, Footprints, Heart, Sun, ArrowLeft,Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroBannerforweb from "@/images/webnewhome1.png"; 
import heroBannerformobile from "@/images/herobannerformobile.jpeg"
import aboutimage from "@/images/walfortomega2.jpeg";
import masterlayout from "@/images/walmart7.jpeg";
import gal1 from "@/images/ban1.jpeg";
import gal2 from "@/images/ban2.jpeg";
import gal3 from "@/images/ban3.jpeg";
import gal4 from "@/images/walmart4.jpeg";
import logo from "@/images/newshrirajlogo.jpeg"; // Import your logo

const currentYear = new Date().getFullYear();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faXTwitter, 
  faYoutube, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

// Import all 3 images
import Logo from "@/images/newshrirajlogo.jpeg"; // Your main logo
import GooglePlayBadge from "@/images/1.png"; // Google Play image
import AppStoreBadge from '@/images/2.png'; // App Store image


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

// Updated amenities based on PDF
const amenities = [
  { icon: Building2, label: "World Class Club House" },
  { icon: Dumbbell, label: "Gymnasium" },
  { icon: Trophy, label: "Multipurpose Court" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: TreePine, label: "Party Lawn" },
  { icon: Sun, label: "Poolside Deck" },
  { icon: Home, label: "Gazebo" },
  { icon: Users, label: "Buffet Area with Pergola" },
  { icon: Trophy, label: "Cricket Pitch" },
  { icon: Users, label: "Viewers Gallery" },
  { icon: Trophy, label: "Football Post" },
  { icon: Sun, label: "Yoga/Meditation Area" },
  { icon: TreePine, label: "Tree Plaza" },
  { icon: Users, label: "Senior Citizen Sit-out" },
  { icon: Footprints, label: "Acupressure Track" },
  { icon: Footprints, label: "Walkway" },
  { icon: Dumbbell, label: "Open Air Gym" },
  { icon: Bike, label: "Bicycle/Tricycle Track" },
  { icon: Heart, label: "Wellness Area" },
];

const galleryImages = [gal1, gal2, gal3];

// Updated location advantages from PDF
const locationAdvantages = [
  "Jaistambh Chowk - 11 Km",
  "Airport - 15 Km",
  "Ghadi Chowk - 11 Km",
  "Railway Station - 13 Km",
];

const navItems = ["Home", "Overview", "Gallery", "Amenities", "Location", "Contact"];

// Enquiry Form Component
const EnquiryForm = () => {
  const [formData, setFormData] = useState({ 
    full_name: "", 
    email: "", 
    phone_number: "", 
    message: "" 
  });
  const [consent, setConsent] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please consent to the privacy policy to continue.' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const payload = {
      full_name: formData.full_name || "Not provided",
      email: formData.email,
      phone_number: formData.phone_number,
      message: formData.message || `Enquiry from WALLFORT Parkview landing page`,
      property_name:"WALLFORT Parkview",
    };

    try {
      const response = await fetch('https://shrirajproperty.com:90/leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Thank you for your interest in WALLFORT Parkview! Our team will contact you shortly.' 
        });
        // Reset form
        setFormData({ 
          full_name: "", 
          email: "", 
          phone_number: "", 
          message: "" 
        });
        setConsent(true);
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div id="enquiry" className="w-full bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-2xl" style={{ border: `1px solid ${wf.primary}20` }}>
      <div className="border-t pt-4" style={{ borderColor: `${wf.primary}30` }}>
        <h3 className="font-bold text-lg text-center mb-4" style={{ color: wf.dark }}>
          Book a Free Consultation
        </h3>
        
        {submitStatus.message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-200' 
              : 'bg-red-100 text-red-700 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="text" 
            name="full_name"
            placeholder="Full Name *" 
            required 
            value={formData.full_name} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
            style={{ background: "#f8f4f0" }}
            onFocus={(e) => (e.target.style.borderColor = wf.primary)}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address *" 
            required 
            value={formData.email} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
            style={{ background: "#f8f4f0" }}
            onFocus={(e) => (e.target.style.borderColor = wf.primary)}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
          <input 
            type="tel" 
            name="phone_number"
            placeholder="Phone Number *" 
            required 
            value={formData.phone_number} 
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50"
            style={{ background: "#f8f4f0" }}
            onFocus={(e) => (e.target.style.borderColor = wf.primary)}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
          <textarea
            name="message"
            placeholder="Your Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={3}
            className="w-full rounded-lg px-4 py-2.5 text-sm border-2 border-transparent focus:outline-none transition-all disabled:opacity-50 resize-none"
            style={{ background: "#f8f4f0" }}
            onFocus={(e) => (e.target.style.borderColor = wf.primary)}
            onBlur={(e) => (e.target.style.borderColor = "transparent")}
          />
          <label className="flex items-start gap-2 text-xs" style={{ color: wf.textLight }}>
            <input 
              type="checkbox" 
              checked={consent} 
              onChange={(e) => setConsent(e.target.checked)} 
              disabled={isSubmitting}
              className="mt-0.5 accent-primary"
              style={{ accentColor: wf.primary }}
            />
            I consent to the use of my provided data in accordance with the privacy policy.
          </label>
          <button 
            type="submit" 
            disabled={isSubmitting || !consent}
            className="w-full text-white py-3 rounded-lg font-bold text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

// Video Player Component
const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const goToHome = () => {
    navigate('/'); // Navigate to root path
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: wf.textDark, background: wf.light }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: scrolled ? wf.shadow : "none",
          padding: scrolled ? "12px 0" : "20px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo that navigates to home */}
            <button
              onClick={goToHome}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="Go to home page"
            >
              <img 
                src={logo} 
                alt="Wallfort Logo" 
                className="h-14 w-auto object-contain"
              />
            </button>
            
            {/* Optional: Keep text logo if needed, or remove completely */}
            <button
              onClick={() => scrollTo("wf-home")}
              className="text-xl font-bold uppercase tracking-widest"
              style={{ color: wf.secondary }}
            >
              WALLFORT.
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(`wf-${item.toLowerCase()}`)}
                className="relative px-4 py-2 text-sm font-medium transition-colors group"
                style={{ color: wf.dark }}
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
              <X className="w-6 h-6" style={{ color: wf.dark }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: wf.dark }} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 py-3 space-y-3" style={{ background: "rgba(255,255,255,0.95)" }}>
            <button
              onClick={() => {
                goBack();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full text-left py-2 text-sm font-medium border-b mb-2"
              style={{ color: wf.dark, borderColor: `${wf.primary}20` }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            
            {navItems.map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(`wf-${item.toLowerCase()}`)} 
                className="block w-full text-left py-2 text-sm font-medium"
                style={{ color: wf.dark }}
              >
                {item}
              </button>
            ))}
            <div className="pt-2">
              <Link
                to="/godrej"
                className="inline-block text-white font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
                style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Godrej
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Rest of the component remains exactly the same... */}
      {/* Hero Section with Single Banner and Content */}
      <section id="home" className="relative min-h-screen flex items-stretch pt-16 overflow-hidden">
        {/* Single Banner Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBannerforweb} 
            alt="WALLFORT Parkview" 
            className="w-full h-full object-cover hidden md:block"
          />
          <img 
            src={heroBannerformobile} 
            alt="WALLFORT Parkview" 
            className="w-full h-full object-cover block md:hidden"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r via-black/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center lg:items-stretch gap-8 py-12 lg:py-0">
          {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center text-white">
            {/* Empty left side - can add content later if needed */}
          </div>

          {/* Right Side - Enquiry Form */}
          <div className="w-full lg:w-[400px] flex items-center lg:items-start lg:pt-20">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle title="WALLFORT GROUP" subtitle="Most Admired Brand of Central India" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <HighlightCard
              icon={Building2}
              title="145 LAKH SQFT"
              subtitle="TOTAL LAND DEVELOPED"
            />
            <HighlightCard
              icon={Home}
              title="50 LAKH SQFT"
              subtitle="DEVELOPMENT IN PROGRESS"
            />
            <HighlightCard
              icon={Users}
              title="5000+"
              subtitle="HAPPY CUSTOMERS"
            />
            <HighlightCard
              icon={Trophy}
              title="17+"
              subtitle="CURRENT PROJECTS"
            />
          </div>
          <p className="text-lg mt-8 max-w-3xl mx-auto" style={{ color: wf.textLight }}>
            Wallfort Group is central India's largest business group with business in 5 key sectors like, Real Estate, Jewellery, Ferro Alloys, Financial services and Wealth Management.
          </p>
        </div>
      </section>

      {/* About / Overview */}
      <section id="overview" className="py-20 px-4" style={{ background: "linear-gradient(135deg, #f8f4f0, #f0e8e0)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: wf.shadow }}>
              <img src={aboutimage} alt="WALLFORT Parkview" className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: wf.dark }}>
                A WORLD BORN OUT OF YOUR IMAGINATION!
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
                Wallfort Parkview, Datrenga is planned to be a world-class destination with meticulous planning and forward-thinking infrastructure. It is Wallfort's promise with a vision of creating an urban masterpiece on the map of India.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: wf.textLight }}>
                From the design of civic infrastructure to eco-friendly environment, lifestyle amenities and convenient facilities, our architects and designers are looking at every little detail through the lens and are continuously striving towards creating a world of your dreams.
              </p>
              <p className="text-base leading-relaxed" style={{ color: wf.textLight }}>
                While Datrenga is proposed to have a multifaceted landscape with various Residential, Retail, Commercial and Hospitality projects, Wallfort Parkview is the new offering of Wallfort Homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4" style={{ background: wf.light }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Gallery" subtitle="Visualize your life at WALLFORT Parkview" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden h-72 cursor-pointer group">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-20 px-4" style={{ background: "white" }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="BEST-OF-IT'S-KIND AMENITIES" subtitle="World-class amenities for a premium lifestyle" />
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
      <section id="location" className="py-20 px-4 text-white" style={{ background: `linear-gradient(135deg, ${wf.secondary}, ${wf.secondaryLight})` }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="LOCATION MAP" subtitle="Just a stone's throw away from Raipur" light />
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Left Side - Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-white/20 h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.5262342389965!2d81.6208556!3d20.971532699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dae0d77702e1%3A0x3bac3d607d885783!2sOld%20Dhamtari%20Rd%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1772786222653!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WALLFORT Parkview location"
              />
            </div>

            {/* Right Side - Location Advantages */}
            <div 
              className="rounded-2xl p-8 h-[450px] flex flex-col"
              style={{ 
                background: "rgba(255,255,255,0.1)", 
                backdropFilter: "blur(10px)", 
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              <h4 className="text-2xl font-semibold mb-6" style={{ color: wf.primary }}>Location Advantages</h4>
              <ul className="space-y-5 flex-1">
                {locationAdvantages.map((l, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-lg">
                    <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: wf.primary }} />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="px-4 py-16" style={{ background: wf.dark, color: "white" }}>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">WALLFORT.</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 inline mr-1" />
              Datrenga, Raipur<br />
              Prime Location of Datrenga
            </p>
          </div>
          
          <div>
            <h5 className="text-base font-semibold mb-4 pb-2 relative" style={{ color: wf.primary }}>
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
            </h5>
            <ul className="space-y-2">
              {["Home", "Overview", "Gallery", "Amenities"].map((l) => (
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
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5" style={{ background: wf.primary }} />
            </h5>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 7999983093, 9399492809</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" />shrirajteam@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Datrenga, Raipur</li>
            </ul>
          </div>
        </div>
      </footer> */}

      <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-4">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <img
              src={Logo}
              alt="Shriraj Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Shriraj Property Solutions Pvt. Ltd. — Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#overview" className="text-gray-300 hover:text-white transition-colors">Overview</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
               {/* <li><a href="/Shriraj-privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/Shriraj-terms&conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li> */}
              
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-gray-300 text-sm">Boriyakhurd, Raipur, Chhattisgarh 492013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-gray-300 text-sm">7999983093</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-gray-300 text-sm">10:30 AM - 07:00 PM | All Days Open</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Download Our App
            </h4>
            
            {/* App Badges - Inline on all screens */}
            <div className="flex flex-row flex-wrap gap-3 mb-6">
              <a 
                href="https://play.google.com/store/apps/details?id=com.yasla.shrirajteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src={GooglePlayBadge} 
                  alt="Get it on Google Play" 
                  className="h-12 w-auto"
                />
              </a>
              <a 
                href="https://apps.apple.com/in/app/shriraj/id6754551709" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src={AppStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row gap-3">
              <a 
                href="https://www.facebook.com/shrirajteam/" 
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white" />
              </a>
              <a 
                href="https://x.com/shrirajteam" 
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-white" />
              </a>
              <a 
                href="https://www.youtube.com/@Shrirajteam" 
                aria-label="YouTube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-white" />
              </a>
              <a 
                href="https://www.instagram.com/shrirajteam?igsh=YzhjcjVuMGIxZzJq" 
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Copyright and Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Shriraj Property Solutions Pvt. Ltd.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="/Shriraj-privacy-policy" className="text-gray-300 hover:text-white  transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="/Shriraj-terms&conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
            {/* <span className="text-gray-600">|</span>
            <a href="/refund-policy" className="text-gray-400 hover:text-primary transition-colors">Refund Policy</a> */}
          </div>
        </div>
      </div>
    </footer>

      {/* Keyframe animation */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

// Reusable components
const SectionTitle = ({ title, subtitle, light }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="text-center mb-4">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block" style={{ color: light ? "white" : wf.dark }}>
      {title}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
    </h2>
    <p className="text-lg mt-4 max-w-xl mx-auto" style={{ color: light ? "rgba(255,255,255,0.7)" : wf.textLight }}>{subtitle}</p>
  </div>
);

const HighlightCard = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) => (
  <div
    className="relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
    style={{ background: "white", boxShadow: wf.shadow, border: "1px solid rgba(200,162,122,0.2)" }}
  >
    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(to right, ${wf.primary}, ${wf.gold})` }} />
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
      style={{ background: `linear-gradient(135deg, ${wf.primary}, ${wf.primaryDark})` }}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-1" style={{ color: wf.secondary }}>{title}</h3>
    <p className="text-sm font-medium mb-2" style={{ color: wf.primary }}>{subtitle}</p>
  </div>
);

export default Wallfort;