import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const services = [
  { value: "website-business", label: "Business Website" },
  { value: "website-personal", label: "Personal Website" },
  { value: "website-portfolio", label: "Portfolio Site" },
  { value: "website-landing", label: "Landing Page" },
  { value: "website-maintenance", label: "Website Maintenance" },
  { value: "accounting-bookkeeping", label: "Bookkeeping" },
  { value: "accounting-tax", label: "Tax Preparation" },
  { value: "accounting-business", label: "Business Accounting" },
  { value: "accounting-payroll", label: "Payroll Services" },
  { value: "accounting-advisory", label: "Financial Advisory" },
  { value: "bundle", label: "Website + Accounting Bundle" },
  { value: "other", label: "Other / Not Sure" },
];

export default function Contact() {
  useSEO({
    title: "Contact Us - Get in Touch",
    description: "Contact TechTaxCorp for website design and accounting services. Request a free consultation, get a quote, or book a call. Email: techtaxcorp@gmail.com",
  });

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      honeypot: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const serviceLabel = services.find(s => s.value === data.service)?.label || data.service;
      
      // Save to database if backend is available (Replit deployment)
      try {
        await apiRequest("POST", "/api/contact", data);
      } catch (apiError) {
        console.log("API not available (static hosting), continuing with EmailJS only");
      }
      
      // Send email via EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          company: data.company || "Not provided",
          service: serviceLabel,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    if (data.honeypot) {
      return;
    }
    mutation.mutate(data);
  };

  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">Contact Us</Badge>
            <h1 className="font-serif text-4xl font-bold sm:text-5xl mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to elevate your online presence or streamline your finances? Get in touch and
              let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll get back to you within 24 hours. Or reach out directly
                using the contact information below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:techtaxcorp@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      techtaxcorp@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">Available upon request</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Texas, USA</p>
                    <p className="text-sm text-muted-foreground">Serving businesses nationwide</p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Book a Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Prefer to schedule a specific time? Use our online calendar to book a free
                        30-minute consultation.
                      </p>
                      <Button asChild data-testid="button-book-calendly">
                        <a
                          href={import.meta.env.VITE_CALENDLY_URL || "#calendly-placeholder"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book a Time
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              {submitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-chart-2 mx-auto mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)} data-testid="button-send-another">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your name" {...field} data-testid="input-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...field}
                                    data-testid="input-email"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    {...field}
                                    data-testid="input-phone"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Enter your company name"
                                    {...field}
                                    data-testid="input-company"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Interested In *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-service">
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service.value} value={service.value}>
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Enter your message"
                                  className="min-h-[120px]"
                                  {...field}
                                  data-testid="textarea-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="hidden" aria-hidden="true">
                          <FormField
                            control={form.control}
                            name="honeypot"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input tabIndex={-1} autoComplete="off" {...field} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={mutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-4">
            Free Consultation Included
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Every inquiry includes a free consultation where we'll discuss your needs and provide
            a customized recommendation. No pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild data-testid="button-view-services-contact">
              <Link href="/services">View Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-view-portfolio-contact">
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
