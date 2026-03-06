import { MapPin, Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  tag?: string;
}

const PropertyCard = ({ image, title, location, price, beds, baths, sqft, tag }: PropertyCardProps) => (
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

export default PropertyCard;
