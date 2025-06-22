import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users } from 'lucide-react';
import image from '../assets/logo.png'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <image className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white' 
            }`} />
            
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}>
              OSIS ARMATA
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('tentang-osis')}
              className={`hover:text-blue-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection('kegiatan')}
              className={`hover:text-blue-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Kegiatan
            </button>
            <button
              onClick={() => scrollToSection('bidang')}
              className={`hover:text-blue-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Bidang
            </button>
            <button
              onClick={() => scrollToSection('kontak')}
              className={`hover:text-blue-400 transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('tentang-osis')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection('kegiatan')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Kegiatan
              </button>
              <button
                onClick={() => scrollToSection('bidang')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Bidang
              </button>
              <button
                onClick={() => scrollToSection('kontak')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;