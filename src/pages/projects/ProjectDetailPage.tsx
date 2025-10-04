import { useParams, Link } from "react-router-dom";
import { projectsData } from "@/lib/projects-data";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Tag, Video, Code } from "lucide-react";

const ProjectDetailPage = () => {
  // 1. Extract the project ID (e.g., "netgain-portfolio-website") from the URL
  const { projectId } = useParams<{ projectId: string }>();

  // 2. Find the project in our data array that matches this ID
  const project = projectsData.find((p) => p.id === projectId);

  // 3. If no project is found for the given ID, display a "not found" message
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find the project you're looking for.</p>
            <Link to="/projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // 4. If the project is found, render its details
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        {/* Project Header Section */}
        <section className="container px-4 pt-40 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
            <p className="text-primary font-semibold mb-2">{project.category}</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{project.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">{project.shortDescription}</p>
          </motion.div>
        </section>

        {/* Main Image/Video Section */}
        <section className="container px-4 pb-12">
            <motion.img
                src={project.thumbnail}
                alt={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full rounded-lg shadow-2xl border border-border"
            />
        </section>

        {/* Project Details Grid */}
        <section className="container px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Description */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-2"
                >
                    <h2 className="text-3xl font-bold mb-4">About the Project</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                </motion.div>

                {/* Right Column: Meta Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-6"
                >
                    {(project.techStack || project.softwareUsed) && (
                        <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                {project.category === 'Web Development' ? <Code className="mr-2 h-5 w-5"/> : <Video className="mr-2 h-5 w-5"/>}
                                {project.category === 'Web Development' ? 'Technologies Used' : 'Software Used'}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {(project.techStack || project.softwareUsed)?.map(item => (
                                    <span key={item} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {(project.liveUrl || project.videoUrl) && (
                        <div>
                            <a href={project.liveUrl || project.videoUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full button-gradient">
                                    {project.category === 'Web Development' ? 'View Live Site' : 'Watch Video'}
                                    <ExternalLink className="ml-2 h-4 w-4"/>
                                </Button>
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
        
        {/* Gallery Section (Optional) */}
        {project.galleryImages && project.galleryImages.length > 0 && (
             <section className="container px-4 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.galleryImages.map((image, index) => (
                         <motion.img
                            key={index}
                            src={image}
                            alt={`${project.title} gallery image ${index + 1}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full rounded-lg shadow-lg border border-border"
                         />
                    ))}
                </div>
             </section>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;