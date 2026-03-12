// import { useState, useEffect } from "react";
// import { Home, IndianRupee, LayoutGrid, Image, MapPin, Video, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// const navItems = [
//   { label: "Home", href: "#home", icon: Home },
//   // { label: "Price", href: "#pricing", icon: IndianRupee },
//   { label: "Site Plan", href: "#siteplan", icon: LayoutGrid },
//   { label: "Amenities", href: "#amenities", icon: LayoutGrid },
//   { label: "Gallery", href: "#gallery", icon: Image },
//   { label: "Location", href: "#location", icon: MapPin },
//   { label: "Virtual Tour", href: "#virtual-tour", icon: Video },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-forest-deep/95 backdrop-blur-md shadow-lg" : "bg-forest-deep/80 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         <a href="#home" className="font-display text-xl font-bold text-cream tracking-wide">
//           GODREJ <span className="text-gold">RAIPUR   <span  className="text-sm">PLOTS</span> </span>
//         </a>

//         <div className="hidden lg:flex items-center gap-1">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="flex items-center gap-1.5 px-3 py-2 text-sm text-cream/80 hover:text-gold transition-colors rounded-md hover:bg-primary/20"
//             >
//               <item.icon className="w-4 h-4" />
//               {item.label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden lg:flex items-center gap-3">
//         <Link
//   to="/walfort"
//   className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
// >
// WallFort
// </Link>
//         </div>

//         <button className="lg:hidden text-cream" onClick={() => setMobileOpen(!mobileOpen)}>
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="lg:hidden bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 pb-4">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               onClick={() => setMobileOpen(false)}
//               className="flex items-center gap-2 px-6 py-3 text-cream/80 hover:text-gold transition-colors"
//             >
//               <item.icon className="w-4 h-4" />
//               {item.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import { useState, useEffect } from "react";
// import { Home, IndianRupee, LayoutGrid, Image, MapPin, Video, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const navItems = [
//   { label: "Home", href: "#home", icon: Home },
//   // { label: "Price", href: "#pricing", icon: IndianRupee },
//   { label: "Site Plan", href: "#siteplan", icon: LayoutGrid },
//   { label: "Amenities", href: "#amenities", icon: LayoutGrid },
//   { label: "Gallery", href: "#gallery", icon: Image },
//   { label: "Location", href: "#location", icon: MapPin },
//   { label: "Virtual Tour", href: "#virtual-tour", icon: Video },
// ];

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-forest-deep/95 backdrop-blur-md shadow-lg" : "bg-forest-deep/80 backdrop-blur-sm"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
//         <a href="#home" className="font-display text-xl font-bold text-cream tracking-wide">
//           GODREJ <span className="text-gold">RAIPUR   <span  className="text-sm">PLOTS</span> </span>
//         </a>

//         <div className="hidden lg:flex items-center gap-1">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="flex items-center gap-1.5 px-3 py-2 text-sm text-cream/80 hover:text-gold transition-colors rounded-md hover:bg-primary/20"
//             >
//               <item.icon className="w-4 h-4" />
//               {item.label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden lg:flex items-center gap-3">
//           <Link
//             to="/wallfort"
//             className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//           >
//             WallFort
//           </Link>
//         </div>

//         <button className="lg:hidden text-cream" onClick={() => setMobileOpen(!mobileOpen)}>
//           {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="lg:hidden bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 pb-4">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               onClick={() => setMobileOpen(false)}
//               className="flex items-center gap-2 px-6 py-3 text-cream/80 hover:text-gold transition-colors"
//             >
//               <item.icon className="w-4 h-4" />
//               {item.label}
//             </a>
//           ))}
//           {/* WallFort button for mobile - same style as desktop */}
//           <div className="px-6 pt-2">
//             <Link
//               to="/walfort"
//               className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
//               onClick={() => setMobileOpen(false)}
//             >
//               WallFort
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { Home, IndianRupee, LayoutGrid, Image, MapPin, Video, Menu, X, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  // { label: "Price", href: "#pricing", icon: IndianRupee },
  { label: "Site Plan", href: "#siteplan", icon: LayoutGrid },
  { label: "Amenities", href: "#amenities", icon: LayoutGrid },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "Location", href: "#location", icon: MapPin },
  { label: "Virtual Tour", href: "#virtual-tour", icon: Video },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goBack = () => {
    navigate(-1); // Navigate to previous page
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-deep/95 backdrop-blur-md shadow-lg" : "bg-forest-deep/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          {/* <button
            onClick={goBack}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 text-cream hover:text-gold transition-all duration-300"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
          </button> */}
          <a href="#home" className="font-display text-xl font-bold text-cream tracking-wide">
            GODREJ <span className="text-gold">RAIPUR   <span  className="text-sm">PLOTS</span> </span>
          </a>
        </div>

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

        {/* <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/wallfort"
            className="bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            WallFort
          </Link>
        </div> */}

        <button className="lg:hidden text-cream" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 pb-4">
          {/* Back button in mobile menu */}
          <button
            onClick={() => {
              goBack();
              setMobileOpen(false);
            }}
            className="flex items-center gap-2 px-6 py-3 text-cream/80 hover:text-gold transition-colors w-full text-left border-b border-primary/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
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
          {/* WallFort button for mobile - same style as desktop */}
          <div className="px-6 pt-2">
            <Link
              to="/wallfort"
              className="inline-block bg-gradient-gold text-forest-deep font-semibold text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
              onClick={() => setMobileOpen(false)}
            >
              WallFort
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;