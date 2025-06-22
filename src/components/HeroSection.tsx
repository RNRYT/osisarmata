import React from 'react';
import { ArrowRight } from 'lucide-react';
import About from '../assets/1234-min.png';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('tentang-osis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">  
            <div className="relative">
              <img
                src={About}
                alt="OSIS ARMATA Team"
                className="w-full h-96 lg:h-[450px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                OSIS<span className="text-blue-300">ARMATA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Organisasi Siswa Intra Sekolah yang berdedikasi untuk mengembangkan 
                potensi siswa dan membangun komunitas sekolah yang solid.
              </p>
            </div>

            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center space-x-3 bg-blue-300 hover:bg-blue-200 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span>Lihat Tentang Kami</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;