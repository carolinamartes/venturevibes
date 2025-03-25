import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle nav link clicks with proper scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Get the element's position and account for header height
      const headerHeight = 60; // Approximate header height in pixels
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      // Scroll to the target with offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleClick = () => {
    const ctaElement = document.getElementById('cta');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Focus the input field
    setTimeout(() => {
      const inputElement = document.getElementById('email-input');
      inputElement?.focus();
    }, 800);
  };

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <img src={logo} alt="VentureVibes Logo" className="h-7 w-auto" />
          <span className="text-lg font-semibold text-indigo-600">VentureVibes</span>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-5">
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors"
            >
              How it Works
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors"
            >
              Features
            </a>
          </nav>
          <Button 
            onClick={handleClick} 
            className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-lg py-1.5 px-4 shadow-sm"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};