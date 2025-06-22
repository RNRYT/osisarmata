import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import IT from '../assets/sekbid-it-min.png';
import sosial from '../assets/sekbid pendidikan-min.jpg';
import ketakwaan from '../assets/sekbid-ketakwaan-min.jpg';
import BPH from '../assets/bph-min.jpg'
import olahraga from '../assets/sekbid-jasmani-min.JPG'
import kreativitas from '../assets/sekbid-kreativitas-min.JPG'; // Assuming you have an image for creativity

interface Department {
  id: string;
  name: string;
  description: string;
  image: string;
}

const OsisDepartments: React.FC = () => {
  const departments: Department[] = [
    {
      id: 'it',
      name: 'Bidang IT',
      description: 'Mengelola Teknologi Informasi, Sosial Media Dan wesbsite OSIS ARMATA',
      image: IT,
    },
    {
      id: 'humas',
      name: 'Bidang Pendidikan & Sosial',
      description: 'Menjalin hubungan dengan masyarakat dan pihak eksternal',
      image: sosial,
    },
    {
      id: 'kesiswaan',
      name: 'Bidang Ketakwaan',
      description: 'Mengurus kegiatan yang berhubungan dengan ketakwaan siswa',
      image: ketakwaan,
    },
    {
      id: 'rohani',
      name: 'Badan Pengurus Harian',
      description: 'Bertanggung jawab atas Tugas dan fungsi OSIS secara keseluruhan, termasuk perencanaan, pengorganisasian, dan pengawasan kegiatan OSIS.',
      image: BPH,
    },
    {
      id: 'olahraga',
      name: 'Bidang Kebugaran Jasmani',
      description: 'Mengkoordinasi kegiatan olahraga dan kompetisi',
      image: olahraga,
    },
    {
      id: 'seni',
      name: 'Bidang Kreativitas',
      description: 'bertanggung jawab atas pengembangan kreativitas siswa melalui seni, budaya, dan kegiatan ekstrakurikuler lainnya.',
      image: kreativitas,
    }
  ];

  return (
    <section id="bidang" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Bidang OSIS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai bidang yang bekerja sama untuk mencapai visi dan misi OSIS ARMATA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department) => (
            <Link
              key={department.id}
              to={`/bidang/${department.id}`}
              className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {department.name}
                  </h3>
                  <p className="text-blue-100 text-sm">
                    {department.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OsisDepartments;