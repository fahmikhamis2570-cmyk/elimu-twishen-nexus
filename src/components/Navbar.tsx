import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/b2d8b08c-0bc9-4dfd-83e8-a075230b6617/1782621648513_1774945238001.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const portalLinks = [
    { name: 'Student Login', href: '/login/student' },
    { name: 'Parent Login', href: '/login/parent' },
    { name: 'Teacher Login', href: '/login/teacher' },
    { name: 'Online Results', href: '/results' },
    { name: 'Timetable', href: '/timetable' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top Bar */}
      <div className={cn(
        "bg-primary text-white py-2 text-xs transition-all duration-300",
        scrolled ? "h-0 py-0 opacity-0 overflow-hidden" : "opacity-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+255616435766" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Phone className="w-3 h-3" />
              <span>+255 616 435 766</span>
            </a>
            <a href="mailto:fahmikhamis2570@gmail.com" className="flex items-center space-x-1 hover:text-blue-200 transition-colors">
              <Mail className="w-3 h-3" />
              <span>fahmikhamis2570@gmail.com</span>
            </a>
          </div>
          <div className="hidden sm:block">
            <span>Excellence in Education</span>
          </div>
        </div>
      </div>

      <nav className={cn(
        "w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LOGO_URL} alt="Elimu Plus Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-primary">Elimu Plus</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.href ? "text-primary border-b-2 border-primary" : "text-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  <span>Portals</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {portalLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[100vh] border-t border-gray-100" : "max-h-0"
        )}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100">
              <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Portals</p>
              {portalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-3">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to="/register" onClick={() => setIsOpen(false)}>Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
