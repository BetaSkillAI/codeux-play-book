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
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '8rem', 
        paddingBottom: '4rem',
        background: 'linear-gradient(to bottom, rgba(159, 216, 192, 0.8), rgba(159, 216, 192, 0.6), rgba(159, 216, 192, 0.4))'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem', 
            color: 'white',
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
          }}>
            Our Gallery
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)'
          }}>
            Explore our beautiful spaces where magic happens every day
          </p>
        </div>
      </section>

      {/* Gallery Grid - SIMPLE VERSION */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {galleryImageUrls.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '1.25rem' }}>Loading images...</p>
          ) : (
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {galleryImageUrls.map((url, index) => (
                <div key={index} style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src={url}
                    alt={`Gallery ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#e8f5f0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Visit?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#666' }}>
            Book your spot or inquire about hosting your next event with us
          </p>
          <a
            href="https://wa.me/27847437159"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: '#D487A8',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '500'
            }}
          >
            📱 Contact Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
