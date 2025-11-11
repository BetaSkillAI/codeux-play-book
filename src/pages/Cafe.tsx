import { Coffee, Cake, Clock, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import foodQuiche from "@/assets/food-quiche.jpg";
import foodCrepes from "@/assets/food-crepes.jpg";

const Cafe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Distinct wavy background + overlay */}
        <style>
          {`
            @keyframes cafe-wave-pan {
              0%   { transform: translateX(0) scale(1); opacity: 0.9; }
              50%  { transform: translateX(-60px) scale(1.03); opacity: 1; }
              100% { transform: translateX(0) scale(1); opacity: 0.9; }
            }
          `}
        </style>
        <div className="absolute inset-0 -z-10 bg-hero-waves" />
        {/* Extra visible motion accents above the overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-10 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary/50" style={{ animation: "cafe-wave-pan 7s ease-in-out infinite" }} />
          <div className="absolute bottom-0 right-1/5 w-80 h-80 rounded-full blur-3xl bg-accent/50" style={{ animation: "cafe-wave-pan 9s ease-in-out infinite reverse" }} />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              The Café
            </h1>
            <p className="text-xl text-white/90">
              Great coffee, freshly baked treats, and meals made with love
            </p>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img
                src={foodQuiche}
                alt="Delicious quiches"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden hover-lift">
              <img
                src={foodCrepes}
                alt="Sweet crepes"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Saturday Breakfasts */}
              <Card className="hover-lift bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-secondary" />
                    Saturday Breakfasts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Start your weekend right with our delicious breakfast menu
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-secondary" />
                      <span className="font-medium">Every Saturday</span>
                    </div>
                    <div className="text-2xl font-bold text-secondary">9am – 12pm</div>
                    <p className="text-sm text-muted-foreground pt-2">
                      Great food, great coffee, great vibes!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Family Sundays */}
              <Card className="hover-lift bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="text-primary" />
                    Family Sundays
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Homestyle Sunday lunches perfect for connection
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-primary" />
                      <span className="font-medium">Every Sunday</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">Lunch Time</div>
                    <p className="text-sm text-muted-foreground pt-2">
                      Delicious Sunday lunches made for family time ❤️
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Cake className="mx-auto mb-4 text-accent" size={48} />
              <h2 className="text-4xl font-bold mb-4">
                Menu <span className="gradient-text">Highlights</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Freshly prepared with love, daily
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Coffee className="text-secondary" size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">Coffee & Beverages</h3>
                <p className="text-muted-foreground text-sm">
                  Barista-quality coffee, teas, and refreshing drinks
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <Cake className="text-accent" size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">Sweet Treats</h3>
                <p className="text-muted-foreground text-sm">
                  Cupcakes, tarts, scones, and freshly baked goods
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="text-primary" size={36} />
                </div>
                <h3 className="font-bold text-xl mb-2">Savoury Delights</h3>
                <p className="text-muted-foreground text-sm">
                  Quiches, pies, and wholesome homemade meals
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                ☕ All beverages are purchased from Co Deux Café & Playhouse
              </p>
            <a
              href="https://wa.me/27847437159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                📱 Contact Us for Full Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cafe;
