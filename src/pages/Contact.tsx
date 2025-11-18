import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
        {/* Playful contact decorations */}
        <div className="playful-decorations">
          <div className="balloon animate-balloon-float" style={{ top: '10%', left: '8%' }}>🎈</div>
          <div className="balloon animate-balloon-float-slow" style={{ top: '15%', right: '10%', animationDelay: '1.5s' }}>🎈</div>
          <div className="toy animate-toy-bounce" style={{ top: '30%', right: '15%', animationDelay: '1s' }}>📞</div>
          <div className="toy animate-toy-bounce" style={{ bottom: '20%', left: '12%', animationDelay: '2.5s' }}>✉️</div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you and answer any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Midrand, South Africa
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Phone</h3>
                  <a
                    href="tel:+27847437159"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +27 [Your Number]
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="text-accent" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Email</h3>
                  <a
                    href="mailto:info@codeux.co.za"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@codeux.co.za
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Friday – Tuesday: 10am – 4pm</p>
                    <p className="font-semibold text-primary">Saturday: 9am – 5pm</p>
                    <p className="text-xs">Wed & Thu: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp CTA */}
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <Card className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-[#25D366]/20">
              <CardContent className="p-8">
                <MessageCircle className="mx-auto mb-4 text-[#25D366]" size={56} />
                <h3 className="text-2xl font-bold mb-4">
                  Prefer WhatsApp?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Send us a message and we'll get back to you right away
                </p>
                <a
                  href="https://wa.me/27847437159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors font-medium text-lg"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
