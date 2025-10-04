// src/lib/projects-data.ts

export interface Project {
  id: string; // Unique slug for the URL
  title: string;
  category: "Web Development" | "Video Editing";
  thumbnail: string; // Path to the project's thumbnail image
  shortDescription: string;
  longDescription: string;
  techStack?: string[]; // Optional: for web dev projects
  softwareUsed?: string[]; // Optional: for video editing projects
  liveUrl?: string; // Optional: link to the live website
  videoUrl?: string; // Optional: link to the YouTube/Vimeo video
  galleryImages?: string[]; // Optional: for detailed project page
}

export const projectsData: Project[] = [
  {
    id: "netgain-portfolio-website",
    title: "Portfolio Website for Netgain",
    category: "Web Development",
    thumbnail: "/images/projects/netgain-thumb.png", // IMPORTANT: Create these image paths in your `public` folder
    shortDescription: "A modern, responsive portfolio website built with React and Vite.",
    longDescription: "The challenge was to create a fast, visually appealing, and SEO-friendly portfolio to showcase our digital services. We focused on a clean UI, smooth animations, and a seamless user experience across all devices. The entire site is built as a single-page application for instant navigation.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://netgain.onrender.com/",
    galleryImages: [
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        "/public/images/projectimg/portfoliohero.png",
    ]
  },
  {
    id: "corporate-brand-video",
    title: "Corporate Brand Video",
    category: "Video Editing",
    thumbnail: "/images/projects/video-thumb-1.png",
    shortDescription: "A compelling brand story video for a major corporate client.",
    longDescription: "The client needed a powerful video to open their annual conference. We handled the entire post-production process, including color grading, motion graphics, sound design, and final editing to deliver a cinematic and impactful brand message.",
    softwareUsed: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example URL
    galleryImages: []
  },

  


  {
    id: "saas-dashboard-ui",
    title: "SaaS Dashboard UI/UX",
    category: "Web Development",
    thumbnail: "/images/projects/saas-thumb.png",
    shortDescription: "A complex data visualization dashboard for a financial tech startup.",
    longDescription: "We designed and developed a highly interactive and intuitive dashboard for a SaaS platform. The focus was on real-time data updates, a clean user interface, and complex chart integrations to help users make informed decisions quickly.",
    techStack: ["React", "TypeScript", "Next.js", "Recharts", "Figma"],
    liveUrl: "https://netgain.onrender.com/",
    galleryImages: []
  },
  {
    id: "social-media-ad-campaign",
    title: "Social Media Ad Campaign",
    category: "Video Editing",
    thumbnail: "/images/projects/video-thumb-2.png",
    shortDescription: "A series of high-energy video ads for a new product launch.",
    longDescription: "This project involved creating 15 short-form video ads optimized for platforms like Instagram Reels and TikTok. We used fast-paced editing, engaging motion graphics, and trending audio to maximize viewer retention and drive conversions for the campaign.",
    softwareUsed: ["Adobe Premiere Pro", "CapCut"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example URL
    galleryImages: []
  }
];