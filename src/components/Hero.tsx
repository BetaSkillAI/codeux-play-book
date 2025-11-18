import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// Resolve hero images from project Images folder
const heroImages: string[] = [
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.38.16 PM.jpeg", import.meta.url).href,
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.38.53 PM.jpeg", import.meta.url).href,
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.38.54 PM.jpeg", import.meta.url).href,
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.38.57 PM.jpeg", import.meta.url).href,
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.38.59 PM.jpeg", import.meta.url).href,
  new URL("../../Images/WhatsApp Image 2025-11-10 at 12.39.01 PM.jpeg", import.meta.url).href,
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slideshow with crossfade + subtle Ken Burns zoom */}
      <Slideshow images={heroImages} intervalMs={6000} fadeMs={1200} />
      {/* Animated gradient layer for extra depth */}
      <div className="absolute inset-0 -z-10 bg-animated-header opacity-40" />
      {/* Overlay to improve text contrast */}
      <div className="absolute inset-0 -z-10 bg-[#D48BA8]/75" />
      {/* Playful decorations */}
      <div className="playful-decorations z-5">
        <div className="balloon animate-balloon-float" style={{ top: '10%', left: '5%' }}>🎈</div>
        <div className="balloon animate-balloon-float-slow" style={{ top: '15%', right: '8%', animationDelay: '2s' }}>🎈</div>
        <div className="balloon animate-balloon-float" style={{ top: '60%', left: '8%', animationDelay: '4s' }}>🎈</div>
        <div className="balloon animate-balloon-float-slow" style={{ bottom: '15%', right: '10%', animationDelay: '1s' }}>🎈</div>
        <div className="toy animate-toy-bounce" style={{ top: '25%', right: '15%', animationDelay: '1.5s' }}>🧸</div>
        <div className="toy animate-toy-bounce" style={{ bottom: '30%', left: '12%', animationDelay: '3s' }}>🚂</div>
        <div className="toy animate-toy-spin" style={{ top: '50%', left: '10%', animationDelay: '0s' }}>⚽</div>
        <div className="toy animate-toy-bounce" style={{ top: '70%', right: '20%', animationDelay: '2.5s' }}>🎨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-primary animate-pulse-soft" size={32} />
              <Heart className="text-accent" size={28} />
              <Coffee className="text-secondary animate-pulse-soft" size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white" style={{ textShadow: '3px 3px 10px rgba(0,0,0,0.6), 0 0 25px rgba(0,0,0,0.4)' }}>
              CO DEUX
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' }}>
              Café & Pretend Playhouse
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>
            Where kids play, imagine & explore while parents relax!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Link to="/cafe">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hover-lift text-lg px-8"
              >
                <Coffee className="mr-2" size={20} />
                Visit the Café
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover-lift text-lg px-8"
              >
                <Sparkles className="mr-2" size={20} />
                Explore the Playhouse
              </Button>
            </Link>
            <Link to="/parties">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover-lift text-lg px-8 animate-pulse-soft"
              >
                <Heart className="mr-2" size={20} />
                Book a Party
              </Button>
            </Link>
          </div>

          {/* Opening Hours */}
          <div className="mt-12 p-6 bg-black/90 rounded-2xl border border-transparent animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
            <p className="text-sm font-medium text-white/90 mb-2">Opening Hours</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
              <span className="">Fri–Tue: 10am–4pm</span>
              <span className="text-white/60">•</span>
              <span className="font-semibold">Sat: 9am–5pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

type SlideshowProps = {
  images: string[];
  intervalMs?: number;
  fadeMs?: number;
};

const Slideshow = ({ images, intervalMs = 6000, fadeMs = 1200 }: SlideshowProps) => {
  const [index, setIndex] = useState(0);

  // Precompute style values that depend on fadeMs to keep classes stable
  const transitionStyle = useMemo(
    () => ({
      transitionProperty: "opacity, transform, filter",
      transitionDuration: `${fadeMs}ms`,
      willChange: "opacity, transform, filter",
    } as React.CSSProperties),
    [fadeMs]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 -z-10">
      {images.map((src, i) => {
        const isActive = i === index;
        return (
          <img
            key={src}
            src={src}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              ...transitionStyle,
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1.08)" : "scale(1)",
              filter: isActive ? "brightness(1) saturate(1)" : "brightness(0.95) saturate(0.9)",
            }}
          />
        );
      })}

      {/* Subtle moving light vignette for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-24 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)] animate-pulse-soft" />
      </div>
    </div>
  );
};
