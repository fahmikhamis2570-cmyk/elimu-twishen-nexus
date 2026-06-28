import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';

const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/b2d8b08c-0bc9-4dfd-83e8-a075230b6617/1782621648513_1774945238001.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src={LOGO_URL} alt="Elimu Plus Logo" className="h-12 w-auto brightness-0 invert" />
              <span className="font-bold text-xl">Elimu Plus</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering students through quality education and professional guidance. Elimu Plus Twishen Centre is dedicated to academic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary w-fit pb-2">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-primary transition-colors">Our Courses</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary w-fit pb-2">Portals</h3>
            <ul className="space-y-4">
              <li><Link to="/login/student" className="text-gray-400 hover:text-primary transition-colors">Student Portal</Link></li>
              <li><Link to="/login/teacher" className="text-gray-400 hover:text-primary transition-colors">Teacher Portal</Link></li>
              <li><Link to="/login/parent" className="text-gray-400 hover:text-primary transition-colors">Parent Portal</Link></li>
              <li><Link to="/results" className="text-gray-400 hover:text-primary transition-colors">Online Results</Link></li>
              <li><Link to="/timetable" className="text-gray-400 hover:text-primary transition-colors">School Timetable</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-primary w-fit pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Zanzibar, Tanzania</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+255 616 435 766</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>fahmikhamis2570@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elimu Plus Twishen Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
