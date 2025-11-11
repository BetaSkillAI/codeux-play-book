import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Check, ChevronRight, Loader2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  childName: z.string().min(2, "Child's name is required"),
  childAge: z.string().min(1, "Age is required"),
  partyDate: z.date({
    required_error: "Please select a date",
  }),
  dayType: z.enum(["weekday", "weekend"]),
  theme: z.string().min(2, "Theme is required"),
  timeSlot: z.enum(["morning", "afternoon"], {
    required_error: "Please select a time slot",
  }),
  numChildren: z.string().min(1, "Number of children is required"),
  numAdults: z.string().min(1, "Number of adults is required"),
  package: z.enum(["basic", "themed", "hightea"], {
    required_error: "Please select a package",
  }),
  kidsMeals: z.array(z.string()).min(1, "Select at least one kids meal"),
  adultCatering: z.enum(["none", "option1", "option2"]).optional(),
  additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kidsMeals: [],
      adultCatering: "none",
      dayType: "weekday",
    },
  });

  // Helper function to check if date is weekend
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday = 0, Saturday = 6
  };

  const watchedValues = watch();
  const totalSteps = 6;

  const getPackageName = (pkg: string, dayType?: string) => {
    const isWeekendDay = dayType === "weekend";
    switch (pkg) {
      case "basic":
        return `Basic Party - ${isWeekendDay ? "Weekend R2,500" : "Weekday R2,000"}`;
      case "themed":
        return `Themed Party - ${isWeekendDay ? "Weekend R3,950" : "Weekday R3,500"}`;
      case "hightea":
        return "High Tea - 10 kids R2,950 / 20 kids R3,950";
      default:
        return pkg;
    }
  };

  const getAdultCateringName = (catering?: string) => {
    switch (catering) {
      case "option1":
        return "Option 1 - R100pp (4 savoury + 4 sweet)";
      case "option2":
        return "Option 2 - R130pp (6 savoury + 4 sweet)";
      case "none":
      default:
        return "No adult catering";
    }
  };

  const sendToWhatsApp = (data: FormData) => {
    const message = `🎈 *New Party Booking Request*

👤 *Contact Details:*
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}

🎂 *Party Details:*
Child's Name: ${data.childName}
Child's Age: ${data.childAge}
Date: ${format(data.partyDate, "PPP")}
Time: ${data.timeSlot === "morning" ? "09:00-12:00" : "13:30-16:30"}
Theme: ${data.theme}

👥 *Guests:*
Children: ${data.numChildren}
Adults: ${data.numAdults}

📦 *Package:*
${getPackageName(data.package, data.dayType)}

🍽️ *Meals:*
Kids Meals: ${data.kidsMeals.join(", ")}
Adult Catering: ${getAdultCateringName(data.adultCatering)}

${data.additionalInfo ? `📝 *Additional Info:*\n${data.additionalInfo}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27847437159?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendToEmail = async (data: FormData) => {
    // Using FormSubmit.co - a free form backend
    const formData = new FormData();
    formData.append("_subject", `New Party Booking - ${data.childName}'s Birthday`);
    formData.append("_template", "table");
    formData.append("Full Name", data.fullName);
    formData.append("Phone", data.phone);
    formData.append("Email", data.email);
    formData.append("Child's Name", data.childName);
    formData.append("Child's Age", data.childAge);
    formData.append("Party Date", format(data.partyDate, "PPP"));
    formData.append("Time Slot", data.timeSlot === "morning" ? "09:00-12:00" : "13:30-16:30");
    formData.append("Theme", data.theme);
    formData.append("Number of Children", data.numChildren);
    formData.append("Number of Adults", data.numAdults);
    formData.append("Package", getPackageName(data.package, data.dayType));
    formData.append("Day Type", data.dayType === "weekend" ? "Weekend" : "Weekday");
    formData.append("Kids Meals", data.kidsMeals.join(", "));
    formData.append("Adult Catering", getAdultCateringName(data.adultCatering));
    if (data.additionalInfo) {
      formData.append("Additional Information", data.additionalInfo);
    }

    try {
      // Replace 'YOUR_EMAIL' with your actual email address
      const response = await fetch("https://formsubmit.co/ajax/info@codeux.co.za", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      return true;
    } catch (error) {
      console.error("Email error:", error);
      return false;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setBookingData(data);

    try {
      // Try to send email
      const emailSent = await sendToEmail(data);

      if (emailSent) {
        toast.success("Booking request sent successfully!");
      } else {
        toast.info("Opening WhatsApp to complete your booking...");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an issue. We'll open WhatsApp as a backup.");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted && bookingData) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-primary" size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Your booking request has been received!
          </p>
          
          {/* WhatsApp Backup Option */}
          <div className="bg-muted/50 p-6 rounded-lg mb-6">
            <p className="text-sm text-muted-foreground mb-4">
              Want to confirm immediately via WhatsApp?
            </p>
            <Button
              onClick={() => sendToWhatsApp(bookingData)}
              className="bg-[#25D366] hover:bg-[#20BA5A] gap-2"
            >
              <MessageCircle size={20} />
              Send via WhatsApp
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            We'll confirm your booking within 24 hours via email or phone.
          </p>
          
          <Button variant="outline" onClick={() => window.location.reload()}>
            Submit Another Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 h-2 rounded-full mx-1 transition-all",
                i + 1 <= step ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Step {step} of {totalSteps}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent className="p-6">
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Personal Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+27 XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Party Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Party Details</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input
                      id="childName"
                      {...register("childName")}
                      placeholder="Birthday child's name"
                    />
                    {errors.childName && (
                      <p className="text-sm text-destructive mt-1">{errors.childName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="childAge">Child's Age *</Label>
                    <Input
                      id="childAge"
                      type="number"
                      {...register("childAge")}
                      placeholder="Age"
                    />
                    {errors.childAge && (
                      <p className="text-sm text-destructive mt-1">{errors.childAge.message}</p>
                    )}
                  </div>
                  <div>
                    <Label>Party Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watchedValues.partyDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watchedValues.partyDate ? (
                            format(watchedValues.partyDate, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={watchedValues.partyDate}
                          onSelect={(date) => {
                            if (date) {
                              setValue("partyDate", date);
                              // Auto-detect weekday/weekend
                              setValue("dayType", isWeekend(date) ? "weekend" : "weekday");
                            }
                          }}
                          disabled={(date) => date < new Date()}
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.partyDate && (
                      <p className="text-sm text-destructive mt-1">{errors.partyDate.message}</p>
                    )}
                  </div>
                  <div>
                    <Label>Day Type *</Label>
                    <RadioGroup
                      value={watchedValues.dayType}
                      onValueChange={(value) => setValue("dayType", value as any)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekday" id="weekday" />
                        <Label htmlFor="weekday" className="font-normal cursor-pointer">
                          Weekday (Monday - Friday)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="weekend" id="weekend" />
                        <Label htmlFor="weekend" className="font-normal cursor-pointer">
                          Weekend (Saturday - Sunday)
                        </Label>
                      </div>
                    </RadioGroup>
                    {watchedValues.partyDate && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {format(watchedValues.partyDate, "EEEE")} is automatically detected as a {isWeekend(watchedValues.partyDate) ? "weekend" : "weekday"}
                      </p>
                    )}
                    {errors.dayType && (
                      <p className="text-sm text-destructive mt-1">{errors.dayType.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="theme">Party Theme *</Label>
                    <Input
                      id="theme"
                      {...register("theme")}
                      placeholder="e.g., Princess, Superhero, Safari"
                    />
                    {errors.theme && (
                      <p className="text-sm text-destructive mt-1">{errors.theme.message}</p>
                    )}
                  </div>
                  <div>
                    <Label>Time Slot *</Label>
                    <RadioGroup
                      value={watchedValues.timeSlot}
                      onValueChange={(value) => setValue("timeSlot", value as any)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="morning" id="morning" />
                        <Label htmlFor="morning" className="font-normal cursor-pointer">
                          Morning (09:00 – 12:00)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="afternoon" id="afternoon" />
                        <Label htmlFor="afternoon" className="font-normal cursor-pointer">
                          Afternoon (13:30 – 16:30)
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.timeSlot && (
                      <p className="text-sm text-destructive mt-1">{errors.timeSlot.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Guest Count */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Number of Guests</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="numChildren">Number of Children *</Label>
                    <Input
                      id="numChildren"
                      type="number"
                      {...register("numChildren")}
                      placeholder="How many kids?"
                    />
                    {errors.numChildren && (
                      <p className="text-sm text-destructive mt-1">{errors.numChildren.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="numAdults">Number of Adults *</Label>
                    <Input
                      id="numAdults"
                      type="number"
                      {...register("numAdults")}
                      placeholder="How many adults?"
                    />
                    {errors.numAdults && (
                      <p className="text-sm text-destructive mt-1">{errors.numAdults.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Package Selection */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Select Your Package</h3>
                <RadioGroup
                  value={watchedValues.package}
                  onValueChange={(value) => setValue("package", value as any)}
                  className="space-y-4"
                >
                  <Label
                    htmlFor="basic"
                    className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value="basic" id="basic" />
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">Basic Party</div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Weekday: R2,000 • Weekend: R2,500
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Up to 10 kids • Non-exclusive use • 2h play • Meal & drink • Tables & chairs • Decorations
                      </div>
                    </div>
                  </Label>
                  <Label
                    htmlFor="themed"
                    className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value="themed" id="themed" />
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">Themed Party</div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Weekday: R3,500 • Weekend: R3,950
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Up to 20 kids • Exclusive use • 2h play • Themed décor • Party packs • Cupcakes • Meal & drink • Free invitation
                      </div>
                    </div>
                  </Label>
                  <Label
                    htmlFor="hightea"
                    className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value="hightea" id="hightea" />
                    <div className="flex-1">
                      <div className="font-bold text-lg mb-1">High Tea</div>
                      <div className="text-sm text-muted-foreground mb-1">
                        10 kids: R2,950 • 20 kids: R3,950
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Non-exclusive use • 2h play • High tea themed decorations • Tables & chairs
                      </div>
                    </div>
                  </Label>
                </RadioGroup>
                {errors.package && (
                  <p className="text-sm text-destructive mt-1">{errors.package.message}</p>
                )}
              </div>
            )}

            {/* Step 5: Menu Selection */}
            {step === 5 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Menu Selection</h3>
                <div className="space-y-4">
                  <div>
                    <Label>Kids Meal Choices * (Select one or more)</Label>
                    <div className="space-y-2 mt-2">
                      {["Chicken Nuggets & Chips", "Pizza", "Fish Fingers & Chips"].map((meal) => (
                        <div key={meal} className="flex items-center space-x-2">
                          <Checkbox
                            id={meal}
                            checked={watchedValues.kidsMeals?.includes(meal)}
                            onCheckedChange={(checked) => {
                              const current = watchedValues.kidsMeals || [];
                              if (checked) {
                                setValue("kidsMeals", [...current, meal]);
                              } else {
                                setValue(
                                  "kidsMeals",
                                  current.filter((m) => m !== meal)
                                );
                              }
                            }}
                          />
                          <Label htmlFor={meal} className="font-normal cursor-pointer">
                            {meal}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {errors.kidsMeals && (
                      <p className="text-sm text-destructive mt-1">{errors.kidsMeals.message}</p>
                    )}
                  </div>
                  <div>
                    <Label>Adult Catering (Optional)</Label>
                    <RadioGroup
                      value={watchedValues.adultCatering || "none"}
                      onValueChange={(value) => setValue("adultCatering", value as any)}
                      className="space-y-2 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="none" />
                        <Label htmlFor="none" className="font-normal cursor-pointer">
                          No adult catering
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option1" id="adult-option1" />
                        <Label htmlFor="adult-option1" className="font-normal cursor-pointer">
                          Option 1 - R100 pp (4 savoury + 4 sweet)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option2" id="adult-option2" />
                        <Label htmlFor="adult-option2" className="font-normal cursor-pointer">
                          Option 2 - R130 pp (6 savoury + 4 sweet)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Review */}
            {step === 6 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Review Your Booking</h3>
                <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{watchedValues.fullName}</span>
                    
                    <span className="text-muted-foreground">Child:</span>
                    <span className="font-medium">{watchedValues.childName} ({watchedValues.childAge} years)</span>
                    
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-medium">
                      {watchedValues.partyDate ? format(watchedValues.partyDate, "PPP") : ""}
                    </span>
                    
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-medium">
                      {watchedValues.timeSlot === "morning" ? "09:00-12:00" : "13:30-16:30"}
                    </span>
                    
                    <span className="text-muted-foreground">Theme:</span>
                    <span className="font-medium">{watchedValues.theme}</span>
                    
                    <span className="text-muted-foreground">Guests:</span>
                    <span className="font-medium">
                      {watchedValues.numChildren} kids, {watchedValues.numAdults} adults
                    </span>
                    
                    <span className="text-muted-foreground">Package:</span>
                    <span className="font-medium">{getPackageName(watchedValues.package || "", watchedValues.dayType)}</span>

                    <span className="text-muted-foreground">Kids Meals:</span>
                    <span className="font-medium">{watchedValues.kidsMeals?.join(", ") || "None"}</span>

                    <span className="text-muted-foreground">Adult Catering:</span>
                    <span className="font-medium">{getAdultCateringName(watchedValues.adultCatering)}</span>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Textarea
                    id="additionalInfo"
                    {...register("additionalInfo")}
                    placeholder="Any special requests or dietary requirements?"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  disabled={isSubmitting}
                >
                  Back
                </Button>
              )}
              <div className="ml-auto">
                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="gap-2"
                  >
                    Next
                    <ChevronRight size={16} />
                  </Button>
                ) : (
                  <Button type="submit" className="gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Booking
                        <Check size={16} />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default BookingForm;
