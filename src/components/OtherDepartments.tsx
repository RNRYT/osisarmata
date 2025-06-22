import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import IT from '../assets/sekbid-it-min.png';
import sosial from '../assets/sekbid pendidikan-min.jpg';
import ketakwaan from '../assets/sekbid-ketakwaan-min.jpg';
import BPH from '../assets/bph-min.jpg'
import olahraga from '../assets/sekbid-jasmani-min.JPG'
import kreativitas from '../assets/sekbid-kreativitas-min.JPG';

interface Department {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface OtherDepartmentsProps {
  currentDepartment: string;
}

const OtherDepartments: React.FC<OtherDepartmentsProps> = ({ currentDepartment }) => {
  const allDepartments: Department[] = [
    {
      id: 'it',
      name: 'Bidang IT',
      description: 'Mengelola teknologi informasi dan media digital',
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
      description: 'bertanggung jawab atas tugas dan fungsi OSIS secara keseluruhan, termasuk perencanaan, pengorganisasian, dan pengawasan kegiatan OSIS.',
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

  // Filter out current department
  const otherDepartments = allDepartments.filter(dept => dept.id !== currentDepartment);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Bidang Lainnya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi bidang-bidang lain dalam OSIS ARMATA dan temukan kontribusi 
            masing-masing tim
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.other-dept-prev',
              nextEl: '.other-dept-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="departments-swiper"
          >
            {otherDepartments.map((department) => (
              <SwiperSlide key={department.id}>
                <Link
                  to={`/bidang/${department.id}`}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={department.image}
                      alt={department.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {department.name}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {department.description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 transform translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="other-dept-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg transition-colors duration-300">
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button className="other-dept-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg transition-colors duration-300">
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherDepartments;