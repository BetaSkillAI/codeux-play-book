import { Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SessionRates = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Session <span className="gradient-text">Times & Rates</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Affordable fun for the whole family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="hover-lift bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-secondary" />
                Indoor Pretend Playhouse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Per Hour</span>
                  <span className="text-2xl font-bold text-secondary">R80</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Imaginative play in our themed mini-town
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-primary" />
                Outdoor / Pool / Volleyball
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">3 Hour Session</span>
                  <span className="text-2xl font-bold text-primary">R80</span>
                </div>
                <div className="flex gap-4 text-sm pt-2">
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-primary" />
                    <span>10am–1pm</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} className="text-primary" />
                    <span>1pm–4pm</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  * Children must be supervised by an adult or parent when swimming
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/27YOURPHONENUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            📱 Send us a WhatsApp message for bookings or questions
          </a>
        </div>
      </div>
    </section>
  );
};

export default SessionRates;
