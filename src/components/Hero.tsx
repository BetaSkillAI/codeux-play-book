import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, Heart, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-20 bg-accent/20 rounded-full animate-float-slow" />
        <div className="absolute top-40 right-20 w-12 h-16 bg-secondary/20 rounded-full animate-float" />
        <div className="absolute bottom-40 left-1/4 w-14 h-18 bg-primary/20 rounded-full animate-float-slow" />
        <div className="absolute top-60 right-1/3 w-10 h-14 bg-rose-dusty/30 rounded-full animate-float" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              CO DEUX
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Café & Pretend Playhouse
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
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
          <div className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
            <p className="text-sm font-medium text-muted-foreground mb-2">Opening Hours</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="text-foreground">Fri–Tue: 10am–4pm</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-foreground font-semibold">Sat: 9am–5pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
