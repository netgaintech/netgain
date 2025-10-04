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
  /*{
    id: "netgain-portfolio-website",
    title: "Portfolio Website for Netgain",
    category: "Web Development",
    thumbnail: "/images/projects/netgain-thumb.png",
    shortDescription: "A modern, responsive portfolio website built with React and Vite.",
    longDescription:
      "The challenge was to create a fast, visually appealing, and SEO-friendly portfolio to showcase our digital services. We focused on a clean UI, smooth animations, and a seamless user experience across all devices. The entire site is built as a single-page application for instant navigation.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://netgain.onrender.com/",
    galleryImages: []
  },*/

  // --- New Projects ---
  {
    id: "kpsilks-shopping-catalogue",
    title: "KPSilks – Simple Shopping Catalogue",
    category: "Web Development",
    thumbnail: "https://i.ibb.co/h19XGHQY/Screenshot-2025-10-04-171101.png",
    shortDescription: "A modern, responsive catalogue website showcasing smooth UI and user experience.",
    longDescription:
      "KPSilks is a clean and minimal shopping catalogue built to provide customers with a smooth browsing experience. The project focused on performance optimization, responsive design, and intuitive navigation. With a simple product showcase layout, users can explore collections seamlessly on both mobile and desktop devices. The design aesthetics were kept lightweight and elegant, making it ideal for small to medium businesses that want a fast and visually appealing online presence.",
    techStack: ["React", "TypeScript", "HTML", "Tailwind CSS", "Vite"],
    liveUrl: "https://kanchipuramsilks.netlify.app/",
    galleryImages: []
  },
  {
    id: "aura-modern-ecommerce",
    title: "Aura – Modern E-commerce Catalogue",
    category: "Web Development",
    thumbnail: "https://i.ibb.co/35Mq6J9c/Screenshot-2025-10-04-181222.png",
    shortDescription: "A sleek shopping website allowing users to search, explore, and order through WhatsApp.",
    longDescription:
      "Aura is a modern e-commerce catalogue designed to bridge the gap between product discovery and instant communication. Users can search and browse products with an intuitive interface, and place orders directly via WhatsApp integration. The focus was on simplicity, speed, and mobile-first usability. With clean typography, responsive layouts, and optimized performance, Aura creates a smooth shopping experience while keeping the ordering process familiar and convenient for customers.",
    techStack: ["React", "TypeScript", "HTML", "Tailwind CSS", "Vite"],
    liveUrl: "https://netgainecom.netlify.app/",
    galleryImages: []
  },
  {
    id: "luxecommerce-store",
    title: "LuxeCommerce – Premium E-commerce Store",
    category: "Web Development",
    thumbnail: "https://i.ibb.co/217BjnkM/Screenshot-34.png",
    shortDescription: "A premium e-commerce store template with modern design and advanced features.",
    longDescription:
      "LuxeCommerce is a premium online store template built to meet the needs of modern e-commerce brands. The project emphasizes elegant design, smooth UI animations, and advanced e-commerce features that can be adapted to platforms like Shopify or a custom backend. It combines performance with aesthetics, ensuring fast page loads, high-quality visuals, and a seamless user journey from product discovery to checkout. This makes LuxeCommerce a strong foundation for scaling online businesses.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://luxecommercestore.netlify.app/",
    galleryImages: []
  },
  {
    id: "hustlersden-freelance-platform",
    title: "HustlersDen – Freelance Platform",
    category: "Web Development",
    thumbnail: "https://i.ibb.co/HZzBcPF/Screenshot-2025-10-04-181846.png",
    shortDescription: "A freelance platform connecting clients with talented freelancers worldwide.",
    longDescription:
      "HustlersDen is a comprehensive freelance marketplace designed to connect clients with skilled professionals. The platform features streamlined project posting, intuitive freelancer discovery, and secure payment integration. A major focus was building trust and simplifying collaboration, with features like project management dashboards, milestone tracking, and direct communication. The clean and modern UI ensures that both clients and freelancers can navigate the platform effortlessly and achieve their goals.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://hustlers-den.netlify.app/",
    galleryImages: []
  },

  // --- Existing Other Projects (kept for reference) ---
  /*{
    id: "saas-dashboard-ui",
    title: "SaaS Dashboard UI/UX",
    category: "Web Development",
    thumbnail: "/images/projects/saas-thumb.png",
    shortDescription: "A complex data visualization dashboard for a financial tech startup.",
    longDescription:
      "We designed and developed a highly interactive and intuitive dashboard for a SaaS platform. The focus was on real-time data updates, a clean user interface, and complex chart integrations to help users make informed decisions quickly.",
    techStack: ["React", "TypeScript", "Next.js", "Recharts", "Figma"],
    liveUrl: "https://netgain.onrender.com/",
    galleryImages: []
  }
];*/
]
