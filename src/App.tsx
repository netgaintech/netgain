// src/App.tsx (COMPLETE REPLACEMENT CODE)

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import layout and page/section components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import FutureServices from "./pages/FutureServices";
import Contact from "./pages/Contact";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDetailPage from "./pages/projects/ProjectDetailPage"; // <-- 1. IMPORT THE NEW COMPONENT

const queryClient = new QueryClient();

const LandingPage = () => (
  <>
    <Navigation />
    <main>
      <section id="home">
        <Index />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        {/* This content is inside Index.tsx */}
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background text-white">
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            {/* Route 1: The main landing page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Route 2: Future Services page */}
            <Route path="/future-services" element={<FutureServices />} />

            {/* Route 3: The main projects gallery */}
            <Route path="/projects" element={<ProjectsPage />} />
            
            {/* --- 2. ADD THE NEW DYNAMIC ROUTE --- */}
            {/* The ":" tells the router that "projectId" is a variable */}
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            
          </Routes>
        </BrowserRouter>
        
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;