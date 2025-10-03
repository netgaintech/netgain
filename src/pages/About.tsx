// src/pages/About.tsx (COMPLETE REPLACEMENT CODE)

import { motion } from "framer-motion";
import { Target, Eye, Heart, TrendingUp, Shield, Zap } from "lucide-react";

const About = () => {
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
            About <span className="text-gradient">Netgain Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Making every business organized with digital solutions, building recognition worldwide through powerful online presence.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Netgain Studio was founded after witnessing how businesses struggled without websites and digital presence. 
              We saw countless talented entrepreneurs and companies with amazing products and services that remained invisible 
              in the digital world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're here to transform unorganized businesses into trusted brands with global recognition. Our mission is to 
              bridge the gap between traditional businesses and the digital future, making technology accessible and affordable 
              for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eye className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To become a global digital solutions provider with expertise in web development, mobile apps, 
              AI integration, digital marketing, and creative services. We envision a world where every business, 
              regardless of size, has access to world-class digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Innovation", description: "Embracing cutting-edge technologies and creative solutions" },
              { icon: Shield, title: "Trust", description: "Building lasting relationships through transparency and reliability" },
              { icon: TrendingUp, title: "Scalability", description: "Creating solutions that grow with your business" },
              { icon: Heart, title: "Affordability", description: "Quality digital solutions accessible to all businesses" },
              { icon: Target, title: "Growth", description: "Committed to your success and continuous improvement" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <value.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;