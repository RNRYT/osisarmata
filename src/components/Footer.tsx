import React from 'react';
import { Users, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-8 w-8 text-blue-300" />
              <span className="text-2xl font-bold">OSIS ARMATA</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Organisasi Siswa Intra Sekolah yang berdedikasi untuk mengembangkan 
              potensi siswa dan membangun komunitas sekolah yang solid melalui 
              berbagai program inovatif dan kegiatan positif.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#tentang-osis" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#kegiatan" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Kegiatan
                </a>
              </li>
              <li>
                <a href="#bidang" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Bidang
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/osisarmata"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/osisarmata"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:osisarmata@gmail.com"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 - 2025 Sekbid IT OSIS ARMATA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;