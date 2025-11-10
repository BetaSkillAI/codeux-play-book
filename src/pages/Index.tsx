import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import SessionRates from "@/components/SessionRates";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />
      <Hero />
      <FeatureCards />
      <SessionRates />
      <Footer />
    </div>
  );
};

export default Index;
