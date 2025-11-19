import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Auto-include all images from the Gallery folder
const galleryImagesLower = Object.values(
  import.meta.glob("../../Images/Gallery/*.{jpg,jpeg,png}", { eager: true, as: "url" })
) as string[];
const galleryImagesUpper = Object.values(
  import.meta.glob("../../Images/Gallery/*.{JPG,JPEG,PNG}", { eager: true, as: "url" })
) as string[];
const galleryImageUrls = Array.from(new Set([...galleryImagesLower, ...galleryImagesUpper]));

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImageUrls.length) % galleryImageUrls.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Get 3 images to display (current, next, next+1)
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImageUrls.length;
      images.push({ url: galleryImageUrls[index], index });
    }
    return images;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <style>
          {`
            @keyframes gradient-shift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
            @keyframes float-decoration {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(5deg); }
            }
          `}
        </style>
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(135deg, #9FD8C0 0%, #F8BBD0 50%, #9FD8C0 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 8s ease infinite'
          }}
        />
        
        {/* Floating decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 text-6xl opacity-40" style={{ animation: 'float-decoration 4s ease-in-out infinite' }}>🎨</div>
          <div className="absolute top-20 right-20 text-5xl opacity-40" style={{ animation: 'float-decoration 5s ease-in-out infinite', animationDelay: '1s' }}>📸</div>
          <div className="absolute bottom-20 left-20 text-6xl opacity-40" style={{ animation: 'float-decoration 6s ease-in-out infinite', animationDelay: '2s' }}>🌈</div>
          <div className="absolute bottom-10 right-10 text-5xl opacity-40" style={{ animation: 'float-decoration 4.5s ease-in-out infinite', animationDelay: '0.5s' }}>✨</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3)' }}>
              Our Gallery
            </h1>
            <p className="text-xl text-white animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
              Explore our beautiful spaces where magic happens every day ✨
            </p>
          </div>
        </div>
      </section>

      {/* Eye-Catching Carousel Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(248, 187, 208, 0.15) 0%, rgba(159, 216, 192, 0.15) 100%)'
          }}
        />

        <div className="container mx-auto px-4">
          {galleryImageUrls.length === 0 ? (
            <p className="text-center text-xl">No images found in gallery</p>
          ) : (
            <div className="max-w-7xl mx-auto">
              {/* Main Carousel */}
              <div 
                className="relative mb-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Desktop: 3 Images Side by Side */}
                <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
                  {getVisibleImages().map((item, idx) => (
                    <div
                      key={item.index}
                      className="relative group cursor-pointer transform transition-all duration-500 hover:scale-105"
                      style={{
                        animation: `fade-in 0.5s ease-out ${idx * 0.1}s both`
                      }}
                      onClick={() => goToSlide(item.index)}
                    >
                      <div className="relative aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={item.url}
                          alt={`Gallery ${item.index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <p className="text-white font-bold text-lg">Co Deux Memories</p>
                            <p className="text-white/80 text-sm">Photo {item.index + 1} of {galleryImageUrls.length}</p>
                          </div>
                        </div>
                        {/* Highlight current image */}
                        {idx === 0 && (
                          <div className="absolute top-4 right-4 bg-[#D487A8] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile: Single Image */}
                <div className="md:hidden relative">
                  <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={galleryImageUrls[currentIndex]}
                      alt={`Co Deux Gallery Photo ${currentIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Label for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-bold text-lg">Co Deux Memories</p>
                      <p className="text-white/80 text-sm">Photo {currentIndex + 1} of {galleryImageUrls.length}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    onClick={prevSlide}
                    className="bg-white hover:bg-[#D487A8] hover:text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={28} />
                  </button>

                  <button
                    onClick={togglePlayPause}
                    className="bg-[#D487A8] hover:bg-[#9FD8C0] text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                  </button>

                  <button
                    onClick={nextSlide}
                    className="bg-white hover:bg-[#D487A8] hover:text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                    aria-label="Next"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full shadow-lg">
                    <span className="text-2xl font-bold text-[#D487A8]">{currentIndex + 1}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-lg text-gray-600">{galleryImageUrls.length}</span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="mt-8">
                <h3 className="text-center text-lg font-semibold mb-4 text-gray-700">Jump to any photo</h3>
                <div className="overflow-x-auto pb-4">
                  <div className="flex gap-3 justify-start md:justify-center min-w-max px-4">
                    {galleryImageUrls.map((url, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-3 transition-all transform ${
                          index === currentIndex
                            ? 'border-[#D487A8] scale-110 shadow-2xl ring-4 ring-[#D487A8]/30'
                            : 'border-gray-300 opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                      >
                        <img
                          src={url}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm">
                  {isPlaying ? '⏸️ Hover to pause' : '▶️ Click play to auto-advance'} • 
                  Click thumbnails to jump • {galleryImageUrls.length} amazing photos
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#9FD8C0]/30 to-[#F8BBD0]/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Visit?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your spot or inquire about hosting your next event with us
            </p>
            <a
              href="https://wa.me/27847437159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D487A8] text-white rounded-lg hover:bg-[#9FD8C0] transition-all transform hover:scale-105 shadow-lg font-medium text-lg"
            >
              📱 Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
