// src/pages/Pricing.tsx (COMPLETE REPLACEMENT CODE)

import { motion } from "framer-motion";
import { Check, Server, Clock, Headphones } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  // This function makes the buttons on this page scroll to the contact form
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hostingPlans = [
    {
      name: "Vercel/Netlify",
      price: "₹800 - ₹1,500/mo",
      description: "Perfect for static and lightweight websites",
      features: ["Fast CDN", "SSL Certificate", "Auto Deployment", "99.9% Uptime"]
    },
    {
      name: "Google Cloud / AWS",
      price: "₹2,000 - ₹5,000/mo",
      description: "Enterprise-grade hosting for complex applications",
      features: ["Scalable Infrastructure", "Advanced Security", "Load Balancing", "Database Hosting"]
    },
    {
      name: "Shopify Hosting",
      price: "Included",
      description: "Built into Shopify subscription",
      features: ["All-in-one Platform", "E-commerce Optimized", "PCI Compliant", "24/7 Support"]
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic",
      monthlyPrice: "₹2,000/mo",
      yearlyPrice: "₹20,000/year",
      savings: "Save 15%",
      icon: Clock,
      features: [
        "Website monitoring",
        "Bug fixes & patches",
        "Security updates",
        "Email support"
      ]
    },
    {
      name: "Standard",
      monthlyPrice: "₹5,000/mo",
      yearlyPrice: "₹50,000/year",
      savings: "Save 20%",
      icon: Server,
      popular: true,
      features: [
        "All Basic features",
        "Content updates",
        "SEO monitoring",
        "Monthly performance check",
        "Priority email support"
      ]
    },
    {
      name: "Premium",
      monthlyPrice: "₹10,000 - ₹15,000/mo",
      yearlyPrice: "₹1,20,000/year",
      savings: "Save 25%",
      icon: Headphones,
      features: [
        "All Standard features",
        "Priority 24/7 support",
        "Unlimited updates",
        "Analytics & reporting",
        "Business growth report",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Clear, straightforward pricing with no hidden costs
          </p>
        </motion.div>
      </section>

      {/* Hosting Charges */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Hosting Charges</h2>
          <p className="text-muted-foreground mb-12">Direct to client - billed by hosting provider</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full glass border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <Server className="w-10 h-10 mb-4 text-primary" />
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <p className="text-2xl font-bold text-primary mt-4">{plan.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Maintenance Plans</h2>
          <p className="text-muted-foreground mb-12 text-center">Keep your website running smoothly with our maintenance services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full glass border-border transition-colors relative ${
                  plan.popular ? "border-primary/50" : "hover:border-primary/30"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <plan.icon className="w-10 h-10 mb-4 text-primary" />
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="mt-4">
                      <p className="text-3xl font-bold text-primary">{plan.monthlyPrice}</p>
                      <p className="text-sm text-muted-foreground mt-2">or {plan.yearlyPrice}</p>
                      <p className="text-sm text-primary font-semibold">{plan.savings}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <Check className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/#contact" onClick={handleScrollClick}>
                        <Button className="w-full button-gradient">Choose Plan</Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;