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
import FutureServices from "./pages/FutureServices"; // This is now a standalone page
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

/**
 * This component represents the main single-page landing site.
 * It contains all the sections that can be scrolled to.
 */
const LandingPage = () => (
  <>
    {/* Navigation is shared */}
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
      <section id="pricing">
        <Pricing />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    {/* Footer is shared */}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-background text-white">
        <Toaster />
        <Sonner />
        
        {/* The Router now wraps the entire application */}
        <BrowserRouter>
        <ScrollToTop />
          <Routes>
            {/* Route 1: The main landing page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Route 2: The new, separate page for Future Services */}
            <Route path="/future-services" element={<FutureServices />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;