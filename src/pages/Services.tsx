// src/pages/Services.tsx (COMPLETE REPLACEMENT CODE)

import { motion } from "framer-motion";
import { Globe, ShoppingCart, Laptop, Video, Layout, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  // This function makes the buttons on this page scroll to the contact form
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const webServices = [
    {
      icon: Layout,
      title: "Static Websites",
      description: "Perfect for small businesses, portfolios, and information pages",
      price: "₹8,000 - ₹12,000",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Custom Animations"]
    },
    {
      icon: Globe,
      title: "Dynamic Websites",
      description: "Blogs, service websites, dashboards with CMS",
      price: "₹15,000 - ₹20,000",
      features: ["Content Management", "Database Integration", "Admin Panel", "User Authentication"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Websites",
      description: "Full-featured online stores with payment integration",
      price: "₹25,000 - ₹50,000+",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Portal"]
    },
    {
      icon: Laptop,
      title: "Web Applications",
      description: "SaaS platforms, dashboards, AI tools, and PWAs",
      price: "₹40,000 - ₹80,000",
      features: ["Custom Functionality", "API Integration", "Real-time Features", "Scalable Architecture"]
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "Custom Shopify stores and theme development",
      price: "₹20,000 - ₹40,000+",
      features: ["Theme Customization", "App Integration", "Store Setup", "Product Migration"]
    },
    {
      icon: Briefcase,
      title: "Landing Pages",
      description: "High-converting product and business landing pages",
      price: "₹7,000 - ₹18,000",
      features: ["Conversion Optimized", "Fast Delivery", "A/B Testing Ready", "Mobile Responsive"]
    }
  ];

  const videoServices = [
    "Speed ramp edits",
    "Talking head videos",
    "Reel edits",
    "Long-form content (tutorials, cooking, etc.)",
    "AI-generated face swaps & clips",
    "CapCut & Adobe Premiere Pro editing"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>
      </section>

      {/* Web Development Services */}
      <section className="container px-4 py-20">
        <h2 className="text-4xl font-bold mb-12">Web Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <p className="text-2xl font-bold text-primary mt-4">{service.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact" onClick={handleScrollClick}>
                    <Button className="w-full mt-6 button-gradient">Get Started</Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Editing Services */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Video className="w-16 h-16 mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">Video Editing</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Professional video editing services using industry-standard tools
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {videoServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center glass p-4 rounded-lg"
                >
                  <span className="text-primary mr-3">✓</span>
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
            <a href="/#contact" onClick={handleScrollClick}>
                <Button size="lg" className="button-gradient">Request Custom Quote</Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;