import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImageUrls.length) % galleryImageUrls.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[#9FD8C0]/80 via-[#9FD8C0]/60 to-[#9FD8C0]/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' }}>
              Our Gallery
            </h1>
            <p className="text-xl text-white" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Explore our beautiful spaces where magic happens every day
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-[#F8BBD0]/20 to-[#9FD8C0]/20">
        <div className="container mx-auto px-4">
          {galleryImageUrls.length === 0 ? (
            <p className="text-center text-xl">No images found in gallery</p>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Main Carousel */}
              <div className="relative mb-8">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={galleryImageUrls[currentIndex]}
                    alt={`Gallery ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} className="text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} className="text-gray-800" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {currentIndex + 1} / {galleryImageUrls.length}
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="mt-6 overflow-x-auto">
                  <div className="flex gap-2 justify-center min-w-max px-4">
                    {galleryImageUrls.map((url, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentIndex
                            ? 'border-[#D487A8] scale-110 shadow-lg'
                            : 'border-gray-300 opacity-60 hover:opacity-100'
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

              {/* Swipe Instructions for Mobile */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Use arrows or click thumbnails to navigate • {galleryImageUrls.length} photos
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Visit?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your spot or inquire about hosting your next event with us
            </p>
            <a
              href="https://wa.me/27847437159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
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
