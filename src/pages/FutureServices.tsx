// src/pages/FutureServices.tsx (COMPLETE REPLACEMENT CODE)

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation"; // Re-importing Navigation
import Footer from "@/components/Footer"; // Re-importing Footer
import { Palette, Smartphone, Bot, TrendingUp, Video, Sparkles } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FutureServices = () => {
  const futureServices = [
    {
      icon: Palette,
      title: "Graphic Design & Branding",
      description: "Complete brand identity design including logos, brand guidelines, marketing materials, and visual assets that make your business stand out.",
      status: "Coming Soon"
    },
    {
      icon: Smartphone,
      title: "App & Software Development",
      description: "Native and cross-platform mobile applications, custom software solutions, and enterprise applications built with latest technologies.",
      status: "Coming Soon"
    },
    {
      icon: Bot,
      title: "AI Automations & Tools",
      description: "Intelligent automation solutions, AI-powered chatbots, machine learning integrations, and custom AI tools to streamline your business operations.",
      status: "Coming Soon"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Influencer Marketing",
      description: "Comprehensive digital marketing strategies, social media management, SEO optimization, content marketing, and influencer collaboration campaigns.",
      status: "Coming Soon"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video production services including corporate videos, promotional content, product demos, and commercial advertisements.",
      status: "Coming Soon"
    }
  ];

  return (
    // Re-adding the main wrapper to make this a standalone page
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="container px-4 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Future <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expanding our horizons to provide comprehensive digital solutions
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="container px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {futureServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full glass border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                          {service.status}
                        </span>
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed pt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-20 bg-secondary/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Want to be notified when these services launch? Get in touch with us and we'll keep you informed about our latest offerings.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FutureServices;