import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: heroBanner1, alt: "Aerial view of the community" },
  { src: heroBanner2, alt: "Grand entrance gate" },
  { src: heroBanner3, alt: "Clubhouse and pool" },
  { src: heroBanner1, alt: "Landscaped roads" },
  { src: heroBanner2, alt: "Garden walkways" },
  { src: heroBanner3, alt: "Premium amenities" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Godrej Raipur Plots — <span className="text-gradient-gold">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-cream opacity-0 group-hover:opacity-100 transition font-semibold text-sm">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-forest-deep/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-cream hover:text-gold transition">
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
