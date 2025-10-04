// src/components/ProjectCard.tsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects-data"; // Import the type

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <Card className="glass border-border hover:border-primary/50 transition-colors h-full flex flex-col group">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {project.category}
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow">{project.shortDescription}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-primary font-medium">View Project</span>
              <ArrowUpRight className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;