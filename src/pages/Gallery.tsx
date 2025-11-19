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

const galleryImages = galleryImageUrls.map((url, index) => ({
  src: url,
  title: `Gallery Image ${index + 1}`,
  category: "Gallery",
}));

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Animated background */}
        <style>
          {`
            @keyframes gallery-sparkle {
              0%, 100% { 
                transform: translate(0, 0) scale(1) rotate(0deg);
                opacity: 0.7;
              }
              25% { 
                transform: translate(20px, -20px) scale(1.1) rotate(90deg);
                opacity: 1;
              }
              50% { 
                transform: translate(-15px, -40px) scale(0.9) rotate(180deg);
                opacity: 0.8;
              }
              75% { 
                transform: translate(25px, -25px) scale(1.05) rotate(270deg);
                opacity: 0.9;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 -z-10 bg-hero-stripes" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/50 rounded-full blur-3xl" style={{ animation: "gallery-sparkle 8s ease-in-out infinite" }} />
          <div className="absolute top-32 right-20 w-72 h-72 bg-accent/50 rounded-full blur-3xl" style={{ animation: "gallery-sparkle 10s ease-in-out infinite reverse" }} />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-secondary/50 rounded-full blur-3xl" style={{ animation: "gallery-sparkle 12s ease-in-out infinite" }} />
        </div>
        
        {/* Playful decorations */}
        <div className="playful-decorations">
          <div className="balloon animate-balloon-float" style={{ top: '10%', left: '5%' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '15%', right: '8%', animationDelay: '2s' }}>🎈</div>
          <div className="balloon animate-balloon-float" style={{ top: '60%', left: '10%', animationDelay: '4s' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '70%', right: '15%', animationDelay: '1s' }}>🎈</div>
          <div className="toy animate-toy-bounce" style={{ top: '25%', right: '20%', animationDelay: '1s' }}>🧸</div>
          <div className="toy animate-toy-bounce" style={{ bottom: '30%', left: '15%', animationDelay: '3s' }}>🚂</div>
        </div>
        
        {/* Animated cartoon background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-5 text-6xl opacity-30 animate-toy-spin" style={{ animationDuration: '25s' }}>🎨</div>
          <div className="absolute top-20 right-10 text-5xl opacity-25 animate-toy-bounce" style={{ animationDelay: '1s' }}>🖍️</div>
          <div className="absolute bottom-20 left-20 text-7xl opacity-20 animate-toy-spin" style={{ animationDuration: '30s', animationDelay: '2s' }}>🎭</div>
          <div className="absolute bottom-10 right-20 text-6xl opacity-25 animate-toy-bounce" style={{ animationDelay: '3s' }}>📸</div>
          <div className="absolute top-1/2 left-10 text-5xl opacity-20 animate-balloon-float">🌈</div>
          <div className="absolute top-1/3 right-15 text-6xl opacity-25 animate-balloon-float-slow" style={{ animationDelay: '2s' }}>✨</div>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#9FD8C0]/80 via-[#9FD8C0]/60 to-[#9FD8C0]/40" />
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

      {/* Gallery Grid */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        {/* Background decorations */}
        <div className="playful-decorations">
          <div className="balloon animate-balloon-float" style={{ top: '20%', left: '3%', animationDelay: '0.5s' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '50%', right: '5%', animationDelay: '2.5s' }}>🎈</div>
          <div className="toy animate-toy-spin" style={{ top: '10%', right: '10%', animationDelay: '0s' }}>⚽</div>
          <div className="toy animate-toy-bounce" style={{ bottom: '15%', left: '8%', animationDelay: '2s' }}>🎨</div>
        </div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          {galleryImages.length === 0 ? (
            <p style={{ textAlign: 'center' }}>No images found in gallery</p>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '1rem'
            }}>
              {galleryImages.map((image, index) => (
                <a
                  key={index}
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    position: 'relative',
                    paddingBottom: '100%'
                  }}
                >
                  <img
                    src={image.src}
                    alt={`Gallery ${index + 1}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </a>
              ))}
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
