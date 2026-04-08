import { Phone, Mail, MapPin,Clock, } from "lucide-react";


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


// const Footer = () => {
//   return (
//     <footer className="bg-gradient-forest text-cream">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="font-display text-xl font-bold mb-4">
//               GODREJ <span className="text-gold">RAIPUR <span  className="text-sm">PLOTS</span></span>
//             </h3>
//             <p className="text-cream/60 text-sm leading-relaxed">
//               Premium plotted development at Near Old Dhamtari Road,
// Boriya Khurd Raipur 492013. T&C Approved. <br/> Covered campus with world-class amenities.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-display font-bold mb-4">Quick Links</h4>
//             <div className="grid grid-cols-2 gap-2 text-sm text-cream/60">
//               {["Overview", "Amenities", "Gallery", "Location", "Virtual Tour"].map((link) => (
//                 <a key={link} href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-gold transition">
//                   {link}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h4 className="font-display font-bold mb-4">Contact Us</h4>
//             <div className="space-y-3 text-sm text-cream/60">
//               <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +91 7999983093, 9399492809, 7000596002</p>
//               <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> shrirajteam@gmail.com</p>
//               <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Near Old Dhamtari Road, Boriya Khurd Raipur 492013
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* <div className="border-t border-cream/10 mt-8 pt-6 text-center text-xs text-cream/40">
//           <p className="mt-2">© 2026 GODREJ RAIPUR PLOTS. All rights reserved. T&C Approved | RERA Approved</p>
//         </div> */}
//       </div>

//       <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-deep/95 backdrop-blur-md border-t border-primary/20 py-3 px-4 flex items-center justify-center gap-4 lg:hidden">
//         <a href="tel:+917999983093" className="flex-1 bg-primary text-primary-foreground text-center py-2.5 rounded-lg text-sm font-semibold">
//           Call Now
//         </a>
//         <a
//           href="https://api.whatsapp.com/send?phone=9399492809&text=Hi!%20I'm%20Interested%20In%20GODREJ %20RAIPUR PLOTS"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 bg-gradient-gold text-forest-deep text-center py-2.5 rounded-lg text-sm font-semibold"
//         >
//           WhatsApp
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-14 bg-gradient-forest text-cream">
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
            <a href="/Shriraj-privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="/Shriraj-terms&conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
            {/* <span className="text-gray-600">|</span>
            <a href="/refund-policy" className="text-gray-400 hover:text-primary transition-colors">Refund Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;