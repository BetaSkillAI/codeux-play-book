import { PartyPopper, Gift, Users, Cake, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingForm from "@/components/BookingForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Parties = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <PartyPopper className="mx-auto mb-6 text-primary animate-pulse-soft" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Parties & <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
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
              {/* Option 1 */}
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 rounded-2xl border-2 border-secondary hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="text-secondary" />
                  <h3 className="font-bold text-2xl">Option 1</h3>
                </div>
                <div className="text-4xl font-bold text-secondary mb-6">R5,500</div>
                <p className="text-sm text-muted-foreground mb-4">1 – 15 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Party venue area",
                    "3h play per child",
                    "Meal + drink per child",
                    "Party pack per child",
                    "White tables & chairs",
                    "Table settings in your colors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Option 2 */}
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 rounded-2xl border-2 border-primary hover-lift transform scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="text-primary" />
                  <h3 className="font-bold text-2xl">Option 2</h3>
                </div>
                <div className="text-4xl font-bold text-primary mb-6">R8,500</div>
                <p className="text-sm text-muted-foreground mb-4">16 – 25 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Everything in Option 1",
                    "Exclusive mini playtown use",
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
              </div>

              {/* Option 3 */}
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 p-6 rounded-2xl border-2 border-accent hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <Cake className="text-accent" />
                  <h3 className="font-bold text-2xl">Option 3</h3>
                </div>
                <div className="text-4xl font-bold text-accent mb-6">R10,000</div>
                <p className="text-sm text-muted-foreground mb-4">16 – 25 Children</p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Everything in Option 2",
                    "Balloon arch",
                    "Cupcakes",
                    "Birthday gift",
                    "Themed centrepiece",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meal Options */}
            <Accordion type="single" collapsible className="mb-12">
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
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-muted/30">
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

      <Footer />
    </div>
  );
};

export default Parties;
