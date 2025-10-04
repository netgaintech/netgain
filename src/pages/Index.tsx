import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Video, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/lib/projects-data";

// Array of words that will be rotated in the heading
const rotatingWords = [
  "Organizing",
  "Developing",
  "Innovating",
  "Securing",
  "Scaling"
];

const Index = () => {
  const [wordIndex, setWordIndex] = useState(0);

  // Take the first 4 projects from your data file to feature on the home page
  const featuredProjects = projectsData.slice(0, 4);

  // This hook sets up a timer to cycle through the words automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => 
        (prevIndex + 1) % rotatingWords.length
      );
    }, 2500); // The interval is 2.5 seconds per word

    // This cleanup function stops the timer when the component is removed
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll handler for buttons within this component
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Animation settings for how the words transition in and out
  const wordAnimation = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { ease: "easeInOut", duration: 0.5 }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 pt-40 pb-20"
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full glass"
          >
            <span className="text-sm font-medium">
              <Globe className="w-4 h-4 inline-block mr-2" />
              Next-gen digital solutions provider
            </span>
          </motion.div>
          
          {/* The h1 tag has a fixed height to prevent layout shifts when words change */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight h-[180px] md:h-[180px]">
            {/* AnimatePresence manages the entering and exiting animations */}
            <AnimatePresence mode="wait">
              <motion.span
                key={rotatingWords[wordIndex]} // The key is crucial for AnimatePresence
                variants={wordAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={wordAnimation.transition}
                className="inline-block" // Ensures smooth transitions
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
            {" "}
            Businesses with{" "}
            <span className="text-gradient">Digital Solutions</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            From Websites to Video Editing — We build your digital presence with{" "}
            <span className="text-foreground font-semibold">trust, scalability, and performance.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/#contact" onClick={(e) => handleScrollClick(e, 'contact')}>
              <Button size="lg" className="button-gradient">
                Get a Free Quote
              </Button>
            </a>
            <a href="/#services" onClick={(e) => handleScrollClick(e, 'services')}>
              <Button size="lg" variant="outline">
                Explore Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Highlights Section */}
      <section className="container px-4 py-20 bg-secondary/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Code, title: "Web Development", desc: "Static to SaaS Applications" },
            { icon: Video, title: "Video Editing", desc: "Professional editing & AI videos" },
            { icon: Globe, title: "Hosting & Maintenance", desc: "Reliable hosting solutions" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <item.icon className="w-10 h-10 mb-4 text-primary" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To make every business <span className="text-primary font-semibold">organized with digital solutions</span>, 
            building recognition worldwide through powerful online presence.
          </p>
        </motion.div>
      </section>
      
      {/* --- NEW FEATURED PROJECTS SECTION --- */}
      <section id="projects" className="container px-4 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              OUR RECENT WORK
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              Here are a few projects we're proud of.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section (This is a simplified version from your original, you can keep it) */}
      <section className="container px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground">Comprehensive digital solutions for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <Code className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="text-2xl">Web Development</CardTitle>
                  <CardDescription className="text-base">
                    Complete web solutions from static websites to complex SaaS applications, 
                    e-commerce stores, and custom web applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="/#services" onClick={(e) => handleScrollClick(e, 'services')}>
                    <Button variant="outline" className="w-full">
                      View Web Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <Video className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="text-2xl">Video Editing</CardTitle>
                  <CardDescription className="text-base">
                    Professional video editing services including speed ramps, reels, 
                    long-form content, and AI-generated videos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="/#services" onClick={(e) => handleScrollClick(e, 'services')}>
                    <Button variant="outline" className="w-full">
                      View Video Services <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass border-border rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build your digital presence together. Get in touch for a free consultation.
          </p>
          <a href="/#contact" onClick={(e) => handleScrollClick(e, 'contact')}>
            <Button size="lg" className="button-gradient">
              Let's Build Together
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Index;