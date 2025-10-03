// src/components/Footer.tsx (FINAL CODE WITH CONTACT INFO RESTORED)

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Advanced scroll handler for all internal page links.
   * If the user is on a different page (e.g., /future-services), it navigates
   * to the home page first and then scrolls to the correct section.
   * If the user is already on the home page, it just scrolls smoothly.
   */
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for the navigation to complete before scrolling
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
  
  const footerLinks = [
    { name: "About Us", href: "/#about", targetId: "about" },
    { name: "Services", href: "/#services", targetId: "services" },
    { name: "Pricing", href: "/#pricing", targetId: "pricing" },
    { name: "Contact", href: "/#contact", targetId: "contact" }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Netgain <span className="text-primary">Studio</span></h3>
            <p className="text-muted-foreground mb-4">
              Organizing businesses with digital solutions. Building recognition worldwide through powerful online presence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                  <li key={link.name}>
                      <a href={link.href} onClick={(e) => handleScrollClick(e, link.targetId)} className="text-muted-foreground hover:text-primary transition-colors">
                          {link.name}
                      </a>
                  </li>
              ))}
              {/* This is the router link for the separate page */}
              <li>
                  <Link to="/future-services" className="text-muted-foreground hover:text-primary transition-colors">
                      Future Services
                  </Link>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Contact Info (RESTORED) --- */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:mail.netgain@gmail.com" className="hover:text-primary transition-colors">mail.netgain@gmail.com</a>
              </li>
              <li className="flex items-start text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919347102347" className="hover:text-primary transition-colors">+91 93471 02347</a>
                  <a href="tel:+919392469669" className="hover:text-primary transition-colors">+91 93924 69669</a>
                </div>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Instagram className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="https://www.instagram.com/netgainstudio?igsh=NDRhN25nNWQ0YXFl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@netgainstudio</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Notice */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Netgain Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;