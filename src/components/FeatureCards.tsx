import { Home, PartyPopper, Waves, Coffee, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Home,
    title: "Kids Pretend Playhouse",
    description: "A magical space for imaginative play, creativity & fun!",
    schedule: "Fri–Tue: 10am–4pm | Sat: 9am–5pm",
    color: "text-secondary",
  },
  {
    icon: PartyPopper,
    title: "Budget-Friendly Party Packages",
    description: "Perfect for birthdays & pretend play celebrations!",
    schedule: "Custom packages from R5,500",
    color: "text-primary",
  },
  {
    icon: Waves,
    title: "Family Swimming Sessions",
    description: "Splash & relax together in 3-hour sessions.",
    schedule: "10:00–13:00 & 13:00–16:00",
    color: "text-secondary",
  },
  {
    icon: Coffee,
    title: "Saturday Breakfasts",
    description: "Great food, great coffee, great vibes!",
    schedule: "Every Saturday: 9am–12pm",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Family Sundays",
    description: "Delicious Sunday lunches made for family time.",
    schedule: "Every Sunday",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    description: "Pool parties, baby showers, bridal showers & high teas.",
    schedule: "Bookings available",
    color: "text-accent",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A cozy blend of modern café comfort and joyful, imaginative play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="hover-lift bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`${feature.color} mb-4`}>
                      <Icon size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <p className="text-sm font-medium text-primary">{feature.schedule}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
