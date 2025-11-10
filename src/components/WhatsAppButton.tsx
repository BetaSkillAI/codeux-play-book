import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/27YOURPHONENUMBER", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover:shadow-xl bg-[#25D366] hover:bg-[#20BA5A] animate-pulse-soft"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </Button>
  );
};

export default WhatsAppButton;
