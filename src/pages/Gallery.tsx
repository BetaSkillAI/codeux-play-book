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
        {/* Static black overlay for strong readability */}
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Gallery
            </h1>
            <p className="text-xl text-white/90">
              Explore our beautiful spaces where magic happens every day
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl hover-lift bg-card"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
