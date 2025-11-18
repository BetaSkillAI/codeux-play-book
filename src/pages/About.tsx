import { Heart, Users, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Force-in component-scoped keyframes so animation cannot be stripped by build */}
        <style>
          {`
            @keyframes about-blob-move-a {
              0%,100% { transform: translate(0,0) scale(1); }
              50%     { transform: translate(40px,-30px) scale(1.08); }
            }
            @keyframes about-blob-move-b {
              0%,100% { transform: translate(0,0) scale(1); }
              50%     { transform: translate(-50px,20px) scale(1.05); }
            }
            @keyframes about-blob-move-c {
              0%,100% { transform: translate(0,0) scale(1); }
              50%     { transform: translate(20px,40px) scale(1.1); }
            }
          `}
        </style>
        {/* Distinct animated blobs + extra floating shapes for visible motion */}
        <div className="absolute inset-0 -z-10 bg-hero-blobs" />
        {/* Make motion layers above overlay so they're clearly visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/60 rounded-full blur-3xl" style={{ animation: "about-blob-move-a 6s ease-in-out infinite" }} />
          <div className="absolute top-20 right-24 w-64 h-64 bg-accent/60 rounded-full blur-3xl" style={{ animation: "about-blob-move-b 7s ease-in-out infinite" }} />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-secondary/60 rounded-full blur-3xl" style={{ animation: "about-blob-move-c 8s ease-in-out infinite" }} />
        </div>
        {/* Playful about decorations */}
        <div className="playful-decorations z-25">
          <div className="balloon animate-balloon-float" style={{ top: '12%', left: '8%' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '18%', right: '12%', animationDelay: '1.8s' }}>🎈</div>
          <div className="balloon animate-balloon-float" style={{ bottom: '20%', left: '10%', animationDelay: '3.5s' }}>🎈</div>
          <div className="toy animate-toy-bounce" style={{ top: '30%', right: '15%', animationDelay: '1.2s' }}>🧸</div>
          <div className="toy animate-toy-bounce" style={{ bottom: '35%', left: '18%', animationDelay: '2.8s' }}>☕</div>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              About CO DEUX
            </h1>
            <p className="text-xl text-white/90">
              Where coffee and childhood come together
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Heart className="text-primary" size={32} />
                <Sparkles className="text-accent" size={28} />
                <Users className="text-secondary" size={32} />
              </div>

              <p className="text-lg leading-relaxed text-foreground">
                Welcome to <strong>Co Deux Café and Playhouse</strong> — where coffee and childhood come together. 
                If you're wondering what Co Deux means, it is a partnership of two people, serving two worlds at once, 
                designed for both grown-ups and little ones.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Our Story</h2>
              
              <p className="text-lg leading-relaxed text-foreground">
                Co Deux was founded by <strong>Renee and Nadia</strong>, lifelong friends whose story is woven into 
                every corner of this space. They first met over 40 years ago in primary school and then became family 
                through marriage to cousins. Though life eventually took them in different directions, fate brought them 
                back together in an unexpected way.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                Both women faced seasons of deep struggle, experiences that tested their faith and transformed their hearts. 
                The pain they walked through, softened them to the struggles of others, especially women walking similar paths. 
                Through it all their trust in God sustained them, restoring strength, hope, and a renewed sense of purpose.
              </p>

              <div className="bg-accent/10 p-8 rounded-2xl my-8 border-l-4 border-primary">
                <p className="text-lg leading-relaxed text-foreground italic">
                  Co-Deux was born out of this calling, not just to heal but to help, and to create a warm welcoming place, 
                  where women like themselves could find solace, connection and community. A safe haven for mothers, care givers 
                  and anyone in need of a moment to breathe, reflect or simply be.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">What We Offer</h2>

              <p className="text-lg leading-relaxed text-foreground">
                This space is a cozy blend of modern café comfort and joyful, imaginative play, offering opportunities for 
                the hosting of kiddies parties, bridal showers, high teas and baby showers, to name a few.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                At Co-Deux play isn't just about passing time, it's about planting seeds. Our playhouse is thoughtfully 
                designed to spark imagination, build confidence and nurture essential life skills. We believe that play is 
                the work of childhood and that in a safe stimulating environment, kids grow not just in size, but in spirit.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                Adults can also relax, sip, and recharge in a calm, beautifully designed café space. More than just a café, 
                Co-Deux is a <strong>faith rooted refuge</strong>. A place where energy and ease live side by side and where 
                everyone, big or small is welcome.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <div className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Come Visit Us</h3>
                <p className="text-muted-foreground mb-6">
                  Experience the warmth and joy of Co Deux for yourself
                </p>
                <a
                  href="https://wa.me/27847437159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  📱 Book Your Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
