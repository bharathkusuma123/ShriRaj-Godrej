// import heroBanner3 from "@/assets/hero-banner-3.jpg";
// import { Play } from "lucide-react";

// const VirtualTourSection = () => {
//   return (
//     <section id="virtual-tour" className="section-padding bg-secondary/50">
//       <div className="max-w-5xl mx-auto">
//         <div className="text-center mb-12">
//           {/* <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Virtual Site Tour</p> */}
//           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
//             Experience the <span className="text-gradient-gold">Community</span>
//           </h2>
//         </div>

//         <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
//           <img
//             src={heroBanner3}
//             alt="Virtual tour preview"
//             className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
//           />
//           <div className="absolute inset-0 bg-forest-deep/40 flex items-center justify-center">
//             <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
//               <Play className="w-8 h-8 text-forest-deep ml-1" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VirtualTourSection;




import heroBanner3 from "@/assets/hero-banner-3.jpg";
import { Play } from "lucide-react";
import { useState } from "react";

const VirtualTourSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  // Extract video ID from YouTube URL
  const videoId = 'JNprIOeSAY0';

  return (
    <section id="virtual-tour" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Experience the <span className="text-gradient-gold">Community</span>
          </h2>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          {!isPlaying ? (
            // Thumbnail with play button
            <div 
              className="relative group cursor-pointer"
              onClick={playVideo}
            >
              <img
                src={heroBanner3}
                alt="Virtual tour preview"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-forest-deep/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-forest-deep ml-1" />
                </div>
              </div>
            </div>
          ) : (
            // YouTube video player
            <div className="w-full h-[400px]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Virtual Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VirtualTourSection;