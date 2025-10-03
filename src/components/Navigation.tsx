import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Future Services", href: "/future-services" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.split('#')[1];

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuListVariants = {};
  const menuItemVariants = {};

  return (
    <>
      {/* --- Desktop Navigation --- */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 justify-center pt-6">
        <div className={`flex items-center gap-x-2 bg-neutral-950/50 border border-transparent backdrop-blur-lg rounded-full transition-all duration-300 ${isScrolled ? 'py-2 px-3 !border-neutral-700/80' : ''}`}>
          
          {/* --- NEW ANIMATED LOGO --- */}
          <a href="/#home" onClick={(e) => handleScrollLinkClick(e, "/#home")} className="flex items-center bg-black rounded-full p-2">
            <motion.span 
              className="text-xl font-bold pl-2 pr-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="logo-gradient-text">Netgain</span> <span className="text-neutral-400">Studio</span>
            </motion.span>
          </a>

          <div className="flex items-center gap-x-6 px-4">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a key={item.name} href={item.href} onClick={(e) => handleScrollLinkClick(e, item.href)} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} to={item.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                  {item.name}
                </Link>
              )
            ))}
          </div>
          <motion.a
            href="/#contact"
            onClick={(e) => handleScrollLinkClick(e, "/#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button size="sm" className="contact-button-gradient font-semibold rounded-full px-4 shadow-lg">
              Contact Us
            </Button>
          </motion.a>
        </div>
      </nav>

      {/* --- Mobile Navigation --- */}
      <div className="md:hidden">
        <AnimatePresence>
          {!isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 w-full z-50 p-4">
              <div className={`flex items-center justify-between h-16 rounded-2xl px-4 transition-colors duration-300 ${isScrolled ? 'bg-neutral-900/80 backdrop-blur-md' : 'bg-transparent'}`}>
                {/* Mobile Logo Also Animated */}
                <a href="/#home" className="flex items-center" onClick={(e) => handleScrollLinkClick(e, "/#home")}>
                  <span className="text-xl font-bold">
                    <span className="logo-gradient-text">Netgain</span> <span className="text-neutral-400">Studio</span>
                  </span>
                </a>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100]">
              <div className="absolute top-4 right-4">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-16 w-16">
                  <X className="h-8 w-8 text-neutral-400" />
                </Button>
              </div>
              <motion.div className="flex flex-col items-center justify-center h-full space-y-8" variants={menuListVariants} initial="hidden" animate="visible">
                {navItems.map((item) => (
                   item.href.startsWith('/#') ? (
                    // Render a smooth-scrolling <a> tag for mobile
                    <motion.a key={item.name} href={item.href} className="text-4xl font-medium tracking-wide text-neutral-200" onClick={(e) => handleScrollLinkClick(e, item.href)} variants={menuItemVariants}>
                      {item.name}
                    </motion.a>
                   ) : (
                    // Render a router <Link> for mobile
                    <Link key={item.name} to={item.href} className="text-4xl font-medium tracking-wide text-neutral-200" onClick={() => setIsOpen(false)}>
                        {item.name}
                    </Link>
                   )
                ))}
                <motion.div 
                  variants={menuItemVariants} 
                  className="pt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="/#contact" onClick={(e) => handleScrollLinkClick(e, "/#contact")}>
                    <Button size="lg" className="contact-button-gradient font-semibold rounded-full px-10 py-6 text-xl shadow-lg">Contact Us</Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;