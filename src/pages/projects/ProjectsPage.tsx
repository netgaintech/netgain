// src/pages/projects/ProjectsPage.tsx

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects-data";
import ProjectCard from "@/components/ProjectCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Video } from "lucide-react";

type FilterType = "All" | "Web Development" | "Video Editing";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="container px-4 pt-40 pb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-gradient">Creations</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A showcase of our passion for building exceptional digital experiences, from interactive websites to compelling video content.
          </motion.p>
        </section>

        {/* Filter Section */}
        <section className="container px-4 pb-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center items-center gap-2 md:gap-4 mb-12"
            >
                <Button variant={activeFilter === 'All' ? 'default' : 'outline'} onClick={() => setActiveFilter('All')}>All</Button>
                <Button variant={activeFilter === 'Web Development' ? 'default' : 'outline'} onClick={() => setActiveFilter('Web Development')}>Web Development</Button>
                <Button variant={activeFilter === 'Video Editing' ? 'default' : 'outline'} onClick={() => setActiveFilter('Video Editing')}>Video Editing</Button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;