import React from 'react';
import { Target, Users, Award } from 'lucide-react';
import About from '../assets/1234-min.png'; // Adjust the path as necessary

const AboutOsis: React.FC = () => {
  return (
    <section id="tentang-osis" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900">
                About OSIS ARMATA
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                OSIS ARMATA (Ar Rahmah Jakarta) adalah organisasi siswa yang menjadi wadah bagi pelajar SMP Islam Ar Rahmah Jakarta untuk berkembang, berkreasi, dan berkontribusi secara positif di lingkungan sekolah. Kami hadir untuk mendorong tumbuhnya potensi kepemimpinan siswa, sekaligus menanamkan nilai-nilai akhlakul karimah melalui kegiatan sosial dan pendidikan karakter sehingga dapat memimpin sesuai syariat agama Islam. 
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bagi kami, kepemimpinan bukan hanya tentang memimpin, tapi juga tentang memberi contoh, bekerja sama, dan menjadi pribadi yang bermanfaat bagi sesama. Kami percaya bahwa kepemimpinan dan akhlak mulia bisa tumbuh bersama melalui aksi nyata, kolaborasi, dan semangat belajar yang tidak pernah padam.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">23</div>
                <div className="text-sm text-gray-600">Anggota Aktif</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">45+</div>
                <div className="text-sm text-gray-600">Lulusan OSIS</div>
              </div>
              {/* <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-600">Prestasi</div>
              </div> */}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <img
              src={About}
              alt="OSIS Activities"
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOsis;