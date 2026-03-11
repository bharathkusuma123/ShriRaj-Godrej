// // pages/ShrirajProperty.tsx
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   Home, 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   CheckCircle2, 
//   ShoppingBag, 
//   Key, 
//   Star, 
//   Menu, 
//   X, 
//   ArrowRight,
//   Building,
//   Users,
//   Award,
//   ShieldCheck,
//   Gem,
//   HeadphonesIcon
// } from "lucide-react";
// import { useState } from "react";

// // Import hero background image
// import heroBg from "@/assets/hero-bg.jpg";

// // ============ Navbar Component ============
// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Services", href: "#services" },
//     { label: "Gallery", href: "#gallery" },
//     { label: "Reviews", href: "#reviews" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
//         <a href="#home" className="flex items-center gap-2">
//           <Home className="h-7 w-7 text-primary" />
//           <span className="font-display text-xl font-bold tracking-tight text-foreground">
//             Shriraj<span className="text-primary"> Property</span>
//           </span>
//         </a>

//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <Button className="hidden md:inline-flex" size="sm" asChild>
//           <a href="tel:8062429849">Call Now : 08062429849</a>
//         </Button>

//         <button
//           className="md:hidden text-foreground"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-background border-b border-border px-4 pb-4">
//           <ul className="flex flex-col gap-3">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
//                   onClick={() => setOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <Button className="w-full mt-3" size="sm" asChild>
//             <a href="tel:8062429849">Call Now : 08062429849</a>
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// // ============ Hero Section ============
// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//       <div className="absolute inset-0 bg-foreground/65" />

//       <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center pt-20">
//         <div>
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
//             Shriraj Property Solutions Pvt. Ltd.
//           </p>
//           <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
//             Your Trusted Partner in{" "}
//             <span className="text-primary">Property Solutions</span>
//           </h1>
//           <p className="text-white/80 text-lg max-w-xl mb-8">
//             Farmhouses, flats, shops, rentals and more — all available under one roof. Based in Raipur, Chhattisgarh.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button size="lg" className="text-base px-8" asChild>
//               <a href="#contact">
//                 Contact Us <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </Button>
//             <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
//               <a href="tel:8062429849">
//                 <Phone className="mr-2 h-5 w-5" /> 08062429849
//               </a>
//             </Button>
//           </div>
//         </div>
//         <div className="hidden lg:block">
//           <img
//             src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&h=500"
//             alt="Modern property exterior"
//             className="rounded-2xl shadow-2xl w-full object-cover h-[460px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Stats Section ============
// const StatsSection = () => {
//   const stats = [
//     { icon: Building, value: "500+", label: "Properties Delivered" },
//     { icon: Users, value: "1,200+", label: "Happy Clients" },
//     { icon: Award, value: "15+", label: "Years Experience" },
//     { icon: MapPin, value: "25+", label: "Cities Covered" },
//   ];

//   return (
//     <section className="bg-primary py-16">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat) => (
//             <div key={stat.label} className="text-center">
//               <stat.icon className="h-8 w-8 text-primary-foreground/70 mx-auto mb-3" />
//               <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
//                 {stat.value}
//               </p>
//               <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ About Section ============
// const AboutSection = () => {
//   const highlights = [
//     "Farm houses, residential plots & commercial properties",
//     "2 & 3 BHK flats, rentals and industrial land",
//     "Trusted service and market insight since 2019",
//     "Expert guidance for buyers, sellers & investors",
//   ];

//   return (
//     <section id="about" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=500"
//               alt="Commercial building architecture"
//               className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
//               loading="lazy"
//             />
//             <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg hidden lg:block">
//               <p className="font-display text-3xl font-bold">Since</p>
//               <p className="text-sm">2019</p>
//             </div>
//           </div>
//           <div>
//             <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//               About Us
//             </p>
//             <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-5">
//               Shriraj Property Solutions Pvt. Ltd.
//             </h2>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               Founded in 2019, Shriraj Property Solutions Pvt. Ltd. is a Raipur-based real estate company dealing in farm houses, residential plots, commercial properties, 2 & 3 BHK flats, rentals and industrial land. We assist buyers, sellers and investors find the right property at the right value, backed by trusted service and market insight.
//             </p>
//             <ul className="space-y-3 mb-8">
//               {highlights.map((h) => (
//                 <li key={h} className="flex items-center gap-3 text-foreground">
//                   <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
//                   <span className="text-sm">{h}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Services Section ============
// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Home,
//       title: "Property Sale",
//       description: "We help you sell your property quickly with expert market insights and guidance.",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
//     },
//     {
//       icon: ShoppingBag,
//       title: "Property Purchase",
//       description: "Find your ideal property with our trusted assistance and extensive real estate listings.",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
//     },
//     {
//       icon: Key,
//       title: "Property on Rent",
//       description: "Get the best rental options for homes or commercial spaces as per your needs.",
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             What We Offer
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Our Services
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Expert Solutions for Property Sale, Purchase and Rental — Residential, industrial, commercial, 2 BHK, 3 BHK, shops and rental properties.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s) => (
//             <Card key={s.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={s.image}
//                   alt={s.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//               </div>
//               <CardContent className="p-6 text-center">
//                 <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10 border-4 border-card">
//                   <s.icon className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Why Choose Us Section ============
// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: ShieldCheck,
//       title: "Experience & Expertise",
//       description: "With years of local market knowledge, we guide you through every step — from selecting the right plot to closing the best deal.",
//     },
//     {
//       icon: Gem,
//       title: "Wide Range of Properties",
//       description: "From farmhouses and flats to commercial shops and rental units, we offer diverse listings tailored to all needs and budgets.",
//     },
//     {
//       icon: HeadphonesIcon,
//       title: "Client-Centric Approach",
//       description: "We prioritize transparency, honesty and your satisfaction, helping buyers, investors and tenants with genuine property options.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Our Strengths
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Why Choose Us
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {reasons.map((r) => (
//             <div
//               key={r.title}
//               className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
//                 <r.icon className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="font-display text-lg font-semibold text-foreground mb-3">{r.title}</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Gallery Section ============
// const GallerySection = () => {
//   const galleryImages = [
//     { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop", alt: "Luxury villa exterior" },
//     { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop", alt: "Modern residence" },
//     { src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=400&fit=crop", alt: "Apartment complex" },
//     { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", alt: "Property exterior" },
//     { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop", alt: "Commercial space" },
//     { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop", alt: "Residential building" },
//   ];

//   return (
//     <section id="gallery" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Our Work
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Explore Our Gallery
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {galleryImages.map((img, i) => (
//             <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Reviews Section ============
// const ReviewsSection = () => {
//   const reviews = [
//     {
//       name: "Ankit Singh",
//       text: "Shriraj Property Solutions Pvt. Ltd. made renting my commercial space quick and hassle-free. Their service was smooth, transparent and very professional. I'm impressed with their knowledge and dedication. Will work with them again!",
//     },
//     {
//       name: "Abhishek Kumar",
//       text: "I had a great experience with Shriraj Property Solutions Pvt. Ltd. They helped me find the perfect home within my budget. The team was professional and honest and guided me throughout the process. Highly recommended for property buyers.",
//     },
//   ];

//   return (
//     <section id="reviews" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Testimonials
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Customer Reviews
//           </h2>
//           <p className="text-muted-foreground mt-3">
//             Discover what our clients think about our service
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {reviews.map((r) => (
//             <Card key={r.name} className="border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-primary text-primary" />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground leading-relaxed mb-6 italic">
//                   "{r.text}"
//                 </p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
//                     {r.name[0]}
//                   </div>
//                   <p className="font-semibold text-foreground">{r.name}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Contact Section ============
// const ContactSection = () => {
//   const contactInfo = [
//     { icon: MapPin, label: "Our Office", value: "Boriyakhurd, Raipur, Chhattisgarh 492013" },
//     { icon: Phone, label: "Call Us", value: "08062429849" },
//     { icon: Clock, label: "Timings", value: "10:30 AM - 07:00 PM (All Days Open)" },
//     { icon: Mail, label: "Email", value: "info@shrirajproperty.in" },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Reach Out
//           </p>
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Get in Touch
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
//             Connect with Shriraj Property Solutions Pvt. Ltd. today for expert advice and reliable services for all your real estate needs.
//           </p>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
//             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <Input placeholder="Your Name" />
//                 <Input placeholder="Your Email" type="email" />
//               </div>
//               <Input placeholder="Phone Number" type="tel" />
//               <Textarea placeholder="Your Message" rows={5} />
//               <Button className="w-full" size="lg">
//                 Send Message
//               </Button>
//             </form>
//           </div>

//           <div className="flex flex-col justify-center gap-8">
//             {contactInfo.map((c) => (
//               <div key={c.label} className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <c.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-1">{c.label}</h4>
//                   <p className="text-muted-foreground text-sm">{c.value}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Footer ============
// const Footer = () => {
//   return (
//     <footer className="bg-foreground text-background py-14">
//       <div className="container mx-auto px-4">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Home className="h-6 w-6 text-primary" />
//               <span className="font-display text-lg font-bold">Shriraj Property</span>
//             </div>
//             <p className="text-background/60 text-sm leading-relaxed">
//               Shriraj Property Solutions Pvt. Ltd. — Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm text-background/60">
//               <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
//               <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
//               <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
//               <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Services</h4>
//             <ul className="space-y-2 text-sm text-background/60">
//               <li>Property Sale</li>
//               <li>Property Purchase</li>
//               <li>Property on Rent</li>
//               <li>Farm Houses & Plots</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-4">Contact Info</h4>
//             <ul className="space-y-2 text-sm text-background/60">
//               <li>Boriyakhurd, Raipur, CG 492013</li>
//               <li>08062429849</li>
//               <li>10:30 AM - 07:00 PM</li>
//               <li>All Days Open</li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/40">
//           © {new Date().getFullYear()} Shriraj Property Solutions Pvt. Ltd. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ============ Main Component ============
// const ShrirajProperty = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <HeroSection />
//       <StatsSection />
//       <AboutSection />
//       <ServicesSection />
//       <WhyChooseUs />
//       <GallerySection />
//       <ReviewsSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// export default ShrirajProperty;





// // pages/ShrirajProperty.tsx
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { 
//   Home, 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   CheckCircle2, 
//   ShoppingBag, 
//   Key, 
//   Star, 
//   Menu, 
//   X, 
//   ArrowRight,
//   Building,
//   Users,
//   Award,
//   ShieldCheck,
//   Gem,
//   HeadphonesIcon,
//   ExternalLink
// } from "lucide-react";
// import {  Calendar } from "lucide-react";

// import { useState } from "react";


// // Import hero background image
// import heroBg from "@/assets/hero-bg.jpg";

// import navlogo from "@/images/newshrirajlogo.jpeg"

// // ============ Navbar Component ============
// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Projects", href: "#projects" },
//     { label: "Gallery", href: "#gallery" },
//     // { label: "Reviews", href: "#reviews" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
//         <a href="#home" className="flex items-center gap-2">
//           <img 
//             src={navlogo} 
//             alt="Shriraj Property Logo" 
//             className="h-14 w-auto"
//           />
//           {/* <span className="font-display text-xl font-bold tracking-tight text-foreground">
//             Shriraj<span className="text-primary"> Property</span>
//           </span> */}
//         </a>

//         <ul className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <a
//                 href={link.href}
//                 className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <Button className="hidden md:inline-flex" size="sm" asChild>
//           <a href="tel:8062429849">Call Now : 08062429849</a>
//         </Button>

//         <button
//           className="md:hidden text-foreground"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-background border-b border-border px-4 pb-4">
//           <ul className="flex flex-col gap-3">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <a
//                   href={link.href}
//                   className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
//                   onClick={() => setOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           <Button className="w-full mt-3" size="sm" asChild>
//             <a href="tel:8062429849">Call Now : 08062429849</a>
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// // ============ Hero Section ============
// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center overflow-hidden"
//     >
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//       <div className="absolute inset-0 bg-foreground/65" />

//       <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center pt-20">
//         <div>
//           <p className="text-white font-medium tracking-widest uppercase text-sm mb-4">
//             Shriraj Property Solutions Pvt. Ltd.
//           </p>
//           <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
//             Your Trusted Partner in{" "}
//             <span className="text-white">Property Solutions</span>
//           </h1>
//           <p className="text-white/80 text-lg max-w-xl mb-8">
//             Farmhouses, flats, shops, rentals and more — all available under one roof. Based in Raipur, Chhattisgarh.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Button size="lg" className="text-base px-8" asChild>
//               <a href="#contact">
//                 Contact Us <ArrowRight className="ml-2 h-5 w-5" />
//               </a>
//             </Button>
//             {/* <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
//               <a href="tel:8062429849">
//                 <Phone className="mr-2 h-5 w-5" /> 08062429849
//               </a>
//             </Button> */}

//             <Button size="lg" variant="outline" className="text-base px-8 border-white/30  hover:bg-white/10 hover:text-white" asChild>
//               <a href="tel:8062429849">
//                 <Phone className="mr-2 h-5 w-5" /> 08062429849
//               </a>
//             </Button>
//           </div>
//         </div>
//         <div className="hidden lg:block">
//           <img
//             src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&h=500"
//             alt="Modern property exterior"
//             className="rounded-2xl shadow-2xl w-full object-cover h-[460px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Stats Section ============
// // const StatsSection = () => {
// //   const stats = [
// //     { icon: Building, value: "500+", label: "Properties Delivered" },
// //     { icon: Users, value: "1,200+", label: "Happy Clients" },
// //     { icon: Award, value: "15+", label: "Years Experience" },
// //     { icon: MapPin, value: "25+", label: "Cities Covered" },
// //   ];

// //   return (
// //     <section className="bg-primary py-16">
// //       <div className="container mx-auto px-4">
// //         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
// //           {stats.map((stat) => (
// //             <div key={stat.label} className="text-center">
// //               <stat.icon className="h-8 w-8 text-primary-foreground/70 mx-auto mb-3" />
// //               <p className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground">
// //                 {stat.value}
// //               </p>
// //               <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // ============ About Section ============
// const AboutSection = () => {
//   const highlights = [
//     "Farm houses, residential plots & commercial properties",
//     "2 & 3 BHK flats, rentals and industrial land",
//     "Trusted service and market insight since 2019",
//     "Expert guidance for buyers, sellers & investors",
//   ];

//   return (
//     <section id="about" className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           <div className="relative">
//             <img
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=500"
//               alt="Commercial building architecture"
//               className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
//               loading="lazy"
//             />
//             {/* <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-5 shadow-lg hidden lg:block">
//               <p className="font-display text-3xl font-bold">Since</p>
//               <p className="text-sm">2019</p>
//             </div> */}
//           </div>
//           <div>
//             {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//               About Us
//             </p> */}
//             <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-5">
//               Shriraj Property Solutions Pvt. Ltd.
//             </h2>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               Founded in 2019, Shriraj Property Solutions Pvt. Ltd. is a Raipur-based real estate company dealing in farm houses, residential plots, commercial properties, 2 & 3 BHK flats, rentals and industrial land. We assist buyers, sellers and investors find the right property at the right value, backed by trusted service and market insight.
//             </p>
//             <ul className="space-y-3 mb-8">
//               {highlights.map((h) => (
//                 <li key={h} className="flex items-center gap-3 text-foreground">
//                   <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
//                   <span className="text-sm">{h}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Projects Section (formerly Services) ============
// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Godrej Properties",
//       propertyType: "Residential Plots",
//       configuration: "1200 - 1800 sq.ft.",
//       location: "Old Dhamtari Rd, Chhattisgarh",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
//       link: "/godrej"
//     },
//     {
//       title: "Wallfort Parkview",
//       propertyType: "Residential Plots",
//       configuration: "619 - 1500 sq.ft.",
//       location: "Bhatagaon, Raipur",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
//       link: "/wallfort"
//     },
//   ];

//   return (
//     <section id="projects" className="py-10 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Our Projects
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Expert Solutions for Property Sale, Purchase and Rental — Residential, industrial, commercial, 2 BHK, 3 BHK, shops and rental properties.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <Card key={project.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="font-display text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                
//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Property Type:</span>
//                     <span className="text-muted-foreground text-sm">{project.propertyType}</span>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Configuration:</span>
//                     <span className="text-muted-foreground text-sm">{project.configuration}</span>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Location:</span>
//                     <span className="text-muted-foreground text-sm">{project.location}</span>
//                   </div>
//                 </div>

//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
//                   asChild
//                 >
//                   <a href={project.link}>
//                     View Details <ExternalLink className="ml-2 h-4 w-4" />
//                   </a>
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// // ============ Why Choose Us Section ============
// const WhyChooseUs = () => {
//   const reasons = [
//     {
//       icon: ShieldCheck,
//       title: "Experience & Expertise",
//       description: "With years of local market knowledge, we guide you through every step — from selecting the right plot to closing the best deal.",
//     },
//     {
//       icon: Gem,
//       title: "Wide Range of Properties",
//       description: "From farmhouses and flats to commercial shops and rental units, we offer diverse listings tailored to all needs and budgets.",
//     },
//     {
//       icon: HeadphonesIcon,
//       title: "Client-Centric Approach",
//       description: "We prioritize transparency, honesty and your satisfaction, helping buyers, investors and tenants with genuine property options.",
//     },
//   ];

//   return (
//     <section className="py-10 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Our Strengths
//           </p> */}
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Why Choose Us
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {reasons.map((r) => (
//             <div
//               key={r.title}
//               className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
//                 <r.icon className="h-8 w-8 text-primary" />
//               </div>
//               <h3 className="font-display text-lg font-semibold text-foreground mb-3">{r.title}</h3>
//               <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Gallery Section ============
// const GallerySection = () => {
//   const galleryImages = [
//     { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop", alt: "Luxury villa exterior" },
//     { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop", alt: "Modern residence" },
//     { src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=400&fit=crop", alt: "Apartment complex" },
//     { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", alt: "Property exterior" },
//     { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop", alt: "Commercial space" },
//     { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop", alt: "Residential building" },
//   ];

//   return (
//     <section id="gallery" className="py-10 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
//             Our Work
//           </p> */}
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Explore Our Gallery
//           </h2>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {galleryImages.map((img, i) => (
//             <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Reviews Section ============
// // const ReviewsSection = () => {
// //   const reviews = [
// //     {
// //       name: "Ankit Singh",
// //       text: "Shriraj Property Solutions Pvt. Ltd. made renting my commercial space quick and hassle-free. Their service was smooth, transparent and very professional. I'm impressed with their knowledge and dedication. Will work with them again!",
// //     },
// //     {
// //       name: "Abhishek Kumar",
// //       text: "I had a great experience with Shriraj Property Solutions Pvt. Ltd. They helped me find the perfect home within my budget. The team was professional and honest and guided me throughout the process. Highly recommended for property buyers.",
// //     },
// //   ];

// //   return (
// //     <section id="reviews" className="py-20 bg-background">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-14">
// //           <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
// //             Testimonials
// //           </p>
// //           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
// //             Customer Reviews
// //           </h2>
// //           <p className="text-muted-foreground mt-3">
// //             Discover what our clients think about our service
// //           </p>
// //         </div>
// //         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
// //           {reviews.map((r) => (
// //             <Card key={r.name} className="border-0 shadow-lg">
// //               <CardContent className="p-8">
// //                 <div className="flex gap-1 mb-4">
// //                   {[...Array(5)].map((_, i) => (
// //                     <Star key={i} className="h-5 w-5 fill-primary text-primary" />
// //                   ))}
// //                 </div>
// //                 <p className="text-muted-foreground leading-relaxed mb-6 italic">
// //                   "{r.text}"
// //                 </p>
// //                 <div className="flex items-center gap-3">
// //                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
// //                     {r.name[0]}
// //                   </div>
// //                   <p className="font-semibold text-foreground">{r.name}</p>
// //                 </div>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // ============ Contact Section ============
// // const ContactSection = () => {
// //   const contactInfo = [
// //     { icon: MapPin, label: "Our Office", value: "Boriyakhurd, Raipur, Chhattisgarh 492013" },
// //     { icon: Phone, label: "Call Us", value: "08062429849" },
// //     { icon: Clock, label: "Timings", value: "10:30 AM - 07:00 PM (All Days Open)" },
// //     { icon: Mail, label: "Email", value: "info@shrirajproperty.in" },
// //   ];

// //   return (
// //     <section id="contact" className="py-10 bg-secondary">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-14">
// //           {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
// //             Reach Out
// //           </p> */}
// //           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
// //             Get in Touch
// //           </h2>
// //           <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
// //             Connect with Shriraj Property Solutions Pvt. Ltd. today for expert advice and reliable services for all your real estate needs.
// //           </p>
// //         </div>
// //         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
// //           <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
// //             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
// //               <div className="grid sm:grid-cols-2 gap-4">
// //                 <Input placeholder="Your Name" />
// //                 <Input placeholder="Your Email" type="email" />
// //               </div>
// //               <Input placeholder="Phone Number" type="tel" />
// //               <Textarea placeholder="Your Message" rows={5} />
// //               <Button className="w-full" size="lg">
// //                 Send Message
// //               </Button>
// //             </form>
// //           </div>

// //           <div className="flex flex-col justify-center gap-8">
// //             {contactInfo.map((c) => (
// //               <div key={c.label} className="flex items-start gap-4">
// //                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
// //                   <c.icon className="h-5 w-5 text-primary" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-foreground mb-1">{c.label}</h4>
// //                   <p className="text-muted-foreground text-sm">{c.value}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };


// // ============ Contact Section ============
// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

//   const contactInfo = [
//     { icon: MapPin, label: "Our Office", value: "Boriyakhurd, Raipur, Chhattisgarh 492013" },
//     { icon: Phone, label: "Call Us", value: "08062429849" },
//     { icon: Clock, label: "Timings", value: "10:30 AM - 07:00 PM (All Days Open)" },
//     { icon: Mail, label: "Email", value: "info@shrirajproperty.in" },
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: '', message: '' });

//     // Split full name into first and last name if user enters in single field
//     // For now, we're using separate fields as per the updated form

//     const payload = {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       email: formData.email,
//       phone_number: formData.phoneNumber,
//       message: formData.message
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
//           message: 'Thank you! Your message has been sent successfully.' 
//         });
//         // Reset form
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phoneNumber: '',
//           message: ''
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
//     <section id="contact" className="py-10 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Get in Touch
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
//             Connect with Shriraj Property Solutions Pvt. Ltd. today for expert advice and reliable services for all your real estate needs.
//           </p>
//         </div>
//         <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
//           <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
//             {submitStatus.message && (
//               <div className={`mb-6 p-4 rounded-lg ${
//                 submitStatus.type === 'success' 
//                   ? 'bg-green-100 text-green-700 border border-green-200' 
//                   : 'bg-red-100 text-red-700 border border-red-200'
//               }`}>
//                 {submitStatus.message}
//               </div>
//             )}
            
//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <Input 
//                   placeholder="First Name" 
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//                 <Input 
//                   placeholder="Last Name" 
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <Input 
//                 placeholder="Your Email" 
//                 type="email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 disabled={isSubmitting}
//               />
//               <Input 
//                 placeholder="Phone Number" 
//                 type="tel" 
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//                 disabled={isSubmitting}
//               />
//               <Textarea 
//                 placeholder="Your Message" 
//                 rows={5} 
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 disabled={isSubmitting}
//               />
//               <Button 
//                 className="w-full" 
//                 size="lg" 
//                 type="submit"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </Button>
//             </form>
//           </div>

//           <div className="flex flex-col justify-center gap-8">
//             {contactInfo.map((c) => (
//               <div key={c.label} className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
//                   <c.icon className="h-5 w-5 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-1">{c.label}</h4>
//                   <p className="text-muted-foreground text-sm">{c.value}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ============ Footer ============
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-14">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Logo & Description - Full width on mobile, first column on desktop */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <img 
//                 src={navlogo} 
//                 alt="Shriraj Property Logo" 
//                 className="h-14 w-auto" 
//               />
//             </div>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Shriraj Property Solutions Pvt. Ltd. — Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="md:col-span-1">
//             <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
//               Quick Links
//             </h4>
//             <ul className="space-y-3 text-sm text-gray-300">
//               <li>
//                 <a href="#home" className="hover:text-primary transition-colors flex items-center gap-2">
//                   <span className="w-1 h-1 bg-primary rounded-full"></span>
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:text-primary transition-colors flex items-center gap-2">
//                   <span className="w-1 h-1 bg-primary rounded-full"></span>
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-2">
//                   <span className="w-1 h-1 bg-primary rounded-full"></span>
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
//                   <span className="w-1 h-1 bg-primary rounded-full"></span>
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="md:col-span-1">
//             <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
//               Contact Info
//             </h4>
//             <ul className="space-y-3 text-sm text-gray-300">
//               <li className="flex items-start gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 <span>Boriyakhurd, Raipur, CG 492013</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 <span>08062429849</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//                 <span>10:30 AM - 07:00 PM | All Days Open</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright */}
//         {/* <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
//           <p>© {new Date().getFullYear()} Shriraj Property Solutions Pvt. Ltd. All rights reserved.</p>
//         </div> */}
//       </div>
//     </footer>
//   );
// };

// // ============ Main Component ============
// const ShrirajProperty = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <HeroSection />
//       {/* <StatsSection /> */}
//       <AboutSection />
//       <ProjectsSection />
//       <WhyChooseUs />
//       <GallerySection />
//       {/* <ReviewsSection /> */}
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// export default ShrirajProperty;



// pages/ShrirajProperty.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShoppingBag, 
  Key, 
  Star, 
  Menu, 
  X, 
  ArrowRight,
  Building,
  Users,
  Award,
  ShieldCheck,
  Gem,
  HeadphonesIcon,
  ExternalLink
} from "lucide-react";
import { Calendar } from "lucide-react";
import { useState } from "react";

// Import hero background image
import heroBg from "@/assets/hero-bg.jpg";
import navlogo from "@/images/newshrirajlogo.jpeg"

// ============ Navbar Component ============
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={navlogo} 
            alt="Shriraj Property Logo" 
            className="h-14 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button className="hidden md:inline-flex" size="sm" asChild>
          <a href="tel:8062429849">Call Now : 08062429849</a>
        </Button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-3" size="sm" asChild>
            <a href="tel:8062429849">Call Now : 08062429849</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

// ============ Hero Section ============
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/65" />

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center pt-20">
        <div>
          <p className="text-white font-medium tracking-widest uppercase text-sm mb-4">
            Shriraj Property Solutions Pvt. Ltd.
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Your Trusted Partner in{" "}
            <span className="text-white">Property Solutions</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-8">
            Farmhouses, flats, shops, rentals and more — all available under one roof. Based in Raipur, Chhattisgarh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#contact">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-white/30 hover:bg-white/10 hover:text-white" asChild>
              <a href="tel:8062429849">
                <Phone className="mr-2 h-5 w-5" /> 08062429849
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&h=500"
            alt="Modern property exterior"
            className="rounded-2xl shadow-2xl w-full object-cover h-[460px]"
          />
        </div>
      </div>
    </section>
  );
};

// ============ About Section ============
const AboutSection = () => {
  const highlights = [
    "Farm houses, residential plots & commercial properties",
    "2 & 3 BHK flats, rentals and industrial land",
    "Trusted service and market insight since 2019",
    "Expert guidance for buyers, sellers & investors",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=500"
              alt="Commercial building architecture"
              className="rounded-2xl shadow-xl w-full object-cover h-[420px]"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-5">
              Shriraj Property Solutions Pvt. Ltd.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2019, Shriraj Property Solutions Pvt. Ltd. is a Raipur-based real estate company dealing in farm houses, residential plots, commercial properties, 2 & 3 BHK flats, rentals and industrial land. We assist buyers, sellers and investors find the right property at the right value, backed by trusted service and market insight.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ Projects Section ============
// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Godrej Properties",
//       propertyType: "Residential Plots",
//       configuration: "1200 - 1800 sq.ft.",
//       location: "Old Dhamtari Rd, Chhattisgarh",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
//       link: "/godrej"
//     },
//     {
//       title: "Wallfort Parkview",
//       propertyType: "Residential Plots",
//       configuration: "619 - 1500 sq.ft.",
//       location: "Bhatagaon, Raipur",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
//       link: "/wallfort"
//     },
//   ];

//   return (
//     <section id="projects" className="py-10 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-14">
//           <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
//             Our Projects
//           </h2>
//           <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
//             Expert Solutions for Property Sale, Purchase and Rental — Residential, industrial, commercial, 2 BHK, 3 BHK, shops and rental properties.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project) => (
//             <Card key={project.title} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//               </div>
//               <CardContent className="p-6">
//                 <h3 className="font-display text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                
//                 <div className="space-y-2 mb-4">
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Property Type:</span>
//                     <span className="text-muted-foreground text-sm">{project.propertyType}</span>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Configuration:</span>
//                     <span className="text-muted-foreground text-sm">{project.configuration}</span>
//                   </div>
//                   <div className="flex items-start gap-2">
//                     <span className="text-primary font-medium text-sm min-w-[100px]">Location:</span>
//                     <span className="text-muted-foreground text-sm">{project.location}</span>
//                   </div>
//                 </div>

//                 <Button 
//                   variant="outline" 
//                   size="sm" 
//                   className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
//                   asChild
//                 >
//                   <a href={project.link}>
//                     View Details <ExternalLink className="ml-2 h-4 w-4" />
//                   </a>
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// ============ Why Choose Us Section ============
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Experience & Expertise",
      description: "With years of local market knowledge, we guide you through every step — from selecting the right plot to closing the best deal.",
    },
    {
      icon: Gem,
      title: "Wide Range of Properties",
      description: "From farmhouses and flats to commercial shops and rental units, we offer diverse listings tailored to all needs and budgets.",
    },
    {
      icon: HeadphonesIcon,
      title: "Client-Centric Approach",
      description: "We prioritize transparency, honesty and your satisfaction, helping buyers, investors and tenants with genuine property options.",
    },
  ];

  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-card rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <r.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ Gallery Section ============
const GallerySection = () => {
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=400&fit=crop", alt: "Luxury villa exterior" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=400&fit=crop", alt: "Modern residence" },
    { src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=400&h=400&fit=crop", alt: "Apartment complex" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop", alt: "Property exterior" },
    { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop", alt: "Commercial space" },
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=400&fit=crop", alt: "Residential building" },
  ];

  return (
    <section id="gallery" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Explore Our Gallery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ Contact Section ============
const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    { icon: MapPin, label: "Our Office", value: "Boriyakhurd, Raipur, Chhattisgarh 492013" },
    { icon: Phone, label: "Call Us", value: "08062429849" },
    { icon: Clock, label: "Timings", value: "10:30 AM - 07:00 PM (All Days Open)" },
    { icon: Mail, label: "Email", value: "shrirajteam@gmail.com" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const payload = {
      full_name: formData.full_name,
      email: formData.email,
      phone_number: formData.phone_number,
      message: formData.message
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
          message: 'Thank you! Your message has been sent successfully.' 
        });
        // Reset form
        setFormData({
          full_name: '',
          email: '',
          phone_number: '',
          message: ''
        });
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
      if (submitStatus.type === 'success') {
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-10 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Connect with Shriraj Property Solutions Pvt. Ltd. today for expert advice and reliable services for all your real estate needs.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input 
                placeholder="Full Name *" 
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input 
                placeholder="Email Address *" 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Input 
                placeholder="Phone Number *" 
                type="tel" 
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <Button 
                className="w-full" 
                size="lg" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-8">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{c.label}</h4>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ Footer ============
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={navlogo} 
                alt="Shriraj Property Logo" 
                className="h-14 w-auto" 
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Shriraj Property Solutions Pvt. Ltd. — Your trusted partner for seamless real estate solutions in Raipur and across Chhattisgarh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-lg relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Boriyakhurd, Raipur, CG 492013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>08062429849</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>10:30 AM - 07:00 PM | All Days Open</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============ Main Component ============
const ShrirajProperty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <WhyChooseUs />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ShrirajProperty;