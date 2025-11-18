import { PartyPopper, Gift, Users, Cake, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingForm from "@/components/BookingForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Parties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Confetti background + dark overlay */}
        <style>
          {`
            @keyframes confetti-fall-local {
              0%   { transform: translateY(-10%) rotate(0deg);   opacity: .9; }
              100% { transform: translateY(110%) rotate(360deg); opacity: .9; }
            }
          `}
        </style>
        <div className="absolute inset-0 -z-10 bg-animated-header opacity-60" />
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <span
              key={i}
              style={{
                position: "absolute",
                left: `${(i * 17) % 100}%`,
                width: `${8 + (i % 6)}px`,
                height: `${12 + (i % 6)}px`,
                background: i % 3 === 0 ? "hsl(var(--primary))" : i % 3 === 1 ? "hsl(var(--accent))" : "hsl(var(--secondary))",
                top: "-10%",
                borderRadius: "3px",
                animation: `confetti-fall-local ${5 + (i % 5)}s linear ${i * 0.12}s infinite`,
              }}
            />
          ))}
        </div>
        {/* Playful party decorations */}
        <div className="playful-decorations z-25">
          <div className="balloon animate-balloon-float" style={{ top: '8%', left: '5%' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '12%', right: '8%', animationDelay: '1.5s' }}>🎈</div>
          <div className="balloon animate-balloon-float" style={{ top: '65%', left: '7%', animationDelay: '3s' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '70%', right: '10%', animationDelay: '0.5s' }}>🎈</div>
          <div className="toy animate-toy-bounce" style={{ top: '20%', right: '15%', animationDelay: '1s' }}>🎂</div>
          <div className="toy animate-toy-bounce" style={{ bottom: '25%', left: '12%', animationDelay: '2.5s' }}>🎁</div>
          <div className="toy animate-toy-spin" style={{ top: '40%', left: '8%', animationDelay: '0s' }}>🎪</div>
        </div>
        
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-30">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Parties & Events
            </h1>
            <p className="text-xl text-white/90">
              Budget-friendly party packages perfect for creating magical memories
            </p>
          </div>
        </div>
      </section>

      {/* Party Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Choose Your <span className="gradient-text">Package</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Basic Party Package */}
              <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 rounded-2xl border-2 border-secondary hover-lift">
                <a href="#book-your-event" className="absolute top-4 right-4">
                  <Button size="sm" className="bg-white/90 text-foreground hover:bg-white ring-2 ring-primary/60 ring-offset-2 ring-offset-transparent animate-flash-cta">
                    Book Now
                  </Button>
                </a>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-secondary" />
                  <h3 className="font-bold text-2xl">Basic Party</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Non-exclusive use</div>
                <div className="text-3xl font-bold text-secondary mb-1">Weekday: R2,000</div>
                <div className="text-3xl font-bold text-secondary mb-4">Weekend: R2,500</div>
                <p className="text-sm text-muted-foreground mb-4">Up to 10 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "2 hours of play in mini town & outdoor area",
                    "Designated party venue area",
                    "White kids table & cross back chairs",
                    "White table cloth",
                    "Decorated tables with balloons & bunting",
                    "Kids meal with juice/cold drink",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Ideal for budget-friendly simple celebrations
                </p>
              </div>

              {/* Themed Party Package */}
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border-2 border-primary hover-lift transform scale-105">
                <a href="#book-your-event" className="absolute top-4 right-4">
                  <Button size="sm" className="bg-white/90 text-foreground hover:bg-white ring-2 ring-primary/60 ring-offset-2 ring-offset-transparent animate-flash-cta">
                    Book Now
                  </Button>
                </a>
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="text-primary" />
                  <h3 className="font-bold text-2xl">Themed Party</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Exclusive use of mini town</div>
                <div className="text-3xl font-bold text-primary mb-1">Weekday: R3,500</div>
                <div className="text-3xl font-bold text-primary mb-4">Weekend: R3,950</div>
                <p className="text-sm text-muted-foreground mb-4">Up to 20 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "2 hours of play in mini town & outdoor area",
                    "Exclusive use for your guests only",
                    "White kids table & cross back chairs",
                    "White table cloth",
                    "Themed décor with table settings",
                    "Party packs for each child",
                    "Cupcake for each kid",
                    "Kids meal with juice/cold drink",
                    "Free printable invitation (electronic)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 px-3 py-1 bg-primary/20 rounded-full text-xs font-medium text-primary inline-block">
                  POPULAR
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Perfect for Pinterest parties without stress
                </p>
              </div>

              {/* High Tea Package */}
              <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-2xl border-2 border-accent hover-lift">
                <a href="#book-your-event" className="absolute top-4 right-4">
                  <Button size="sm" className="bg-white/90 text-foreground hover:bg-white ring-2 ring-primary/60 ring-offset-2 ring-offset-transparent animate-flash-cta">
                    Book Now
                  </Button>
                </a>
                <div className="flex items-center gap-2 mb-4">
                  <Cake className="text-accent" />
                  <h3 className="font-bold text-2xl">High Tea</h3>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Non-exclusive use</div>
                <div className="text-3xl font-bold text-accent mb-1">10 kids: R2,950</div>
                <div className="text-3xl font-bold text-accent mb-4">20 kids: R3,950</div>
                <p className="text-sm text-muted-foreground mb-4">10 or 20 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "2 hours of play in mini town & outdoor area",
                    "Designated party venue area",
                    "White kids table & cross back chairs",
                    "White table cloth",
                    "Decorated tables with balloons & bunting",
                    "High tea themed table decorations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-your-event" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Book Your <span className="gradient-text">Event</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll confirm availability within 24 hours
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Meal Options & Add-ons */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="single" collapsible className="mb-4">
            <AccordionItem value="kids-meals">
              <AccordionTrigger className="text-lg font-bold">
                Kids Meal Choices
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Chicken nuggets & chips</li>
                  <li>Pizza</li>
                  <li>Fish fingers & chips</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="adult-catering">
              <AccordionTrigger className="text-lg font-bold">
                Adult Catering Options
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Option 1 – R100 per person</p>
                    <p className="text-sm text-muted-foreground">Select 4 savoury + 4 sweet items</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Option 2 – R130 per person</p>
                    <p className="text-sm text-muted-foreground">Select 6 savoury + 4 sweet items</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Savoury Options:</p>
                    <p className="text-sm text-muted-foreground">
                      Spinach & feta quiche • Bacon & cheese quiche • Spring rolls • Samoosas • Mini hamburgers • 
                      Roti rolls • Chicken puffs • Savoury pies • Mini drumsticks • Chicken salad baskets • Mini pulled pork burgers
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-medium mb-2">Sweet Options:</p>
                    <p className="text-sm text-muted-foreground">
                      Custard tarts • Milk tarts • Jam tarts • Scones • Cupcakes • Mini fruit tarts • Mini cheesecakes • Brownies
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vendors">
              <AccordionTrigger className="text-lg font-bold">
                Additional Services & Vendors
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Graze and Gather:</strong> Charcuterie boards, cones, boats, boxes, tables</p>
                  <p><strong>Shays Cakery (076 400 1661):</strong> Cakes & biscuits</p>
                  <p className="mt-4 text-sm">
                    Additional themed décor available – contact Renee Moollen for details
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="terms">
              <AccordionTrigger className="text-lg font-bold">
                Terms & Conditions
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 50% non-refundable deposit required to secure booking</li>
                  <li>• Final payment due 7 days before event</li>
                  <li>• Cancellations must be in writing ≥ 7 days before event for refund</li>
                  <li>• Date changes subject to availability</li>
                  <li>• You may arrive 1 hour early for setup</li>
                  <li>• All guests must vacate after stipulated time; overtime charged hourly</li>
                  <li>• Bookings confirmed once proof of payment received</li>
                  <li>• Co Deux not liable for loss, damage, or theft</li>
                  <li>• All beverages purchased on-site; no outside alcohol</li>
                  <li>• Co Deux may take photos for marketing; notify us if you prefer not to appear</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Parties;
