
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "py-3 bg-black/70" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-pixel font-bold text-white">
          <span className="text-minecraft-green">Pikz</span>Dev
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="nav-link">Portfolio</button>
          <button onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="pixel-btn">Get in Touch</button>
        </div>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-minecraft-darkBg/95 backdrop-blur-md py-4">
          <div className="flex flex-col space-y-4 px-4">
            <button onClick={() => scrollToSection('services')} className="nav-link py-2">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link py-2">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link py-2">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="pixel-btn mt-2 w-full">Get in Touch</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
