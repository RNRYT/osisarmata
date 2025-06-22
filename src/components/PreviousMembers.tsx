import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

interface Member {
  id: number;
  name: string;
  position: string;
  message: string;
  image: string;
  year: string;
}

const PreviousMembers: React.FC = () => {
  const members: Member[] = [
    {
      id: 1,
      name: 'Ahmad Rizki',
      position: 'Ketua OSIS 2022/2023',
      message: 'Menjadi bagian dari OSIS ARMATA adalah pengalaman yang luar biasa. Di sini saya belajar tentang kepemimpinan, kerja sama tim, dan bagaimana membuat perubahan positif untuk sekolah kita.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      year: '2022/2023'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      position: 'Wakil Ketua OSIS 2022/2023',
      message: 'OSIS ARMATA mengajarkan saya untuk selalu berpikir kreatif dan inovatif dalam setiap program yang dijalankan. Semangat kebersamaan di sini sangat luar biasa.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      year: '2022/2023'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      position: 'Sekretaris OSIS 2021/2022',
      message: 'Pengalaman yang tidak terlupakan. OSIS ARMATA membentuk karakter saya menjadi lebih bertanggung jawab dan mampu mengorganisir berbagai kegiatan dengan baik.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      year: '2021/2022'
    },
    {
      id: 4,
      name: 'Maya Sari',
      position: 'Bendahara OSIS 2021/2022',
      message: 'Di OSIS ARMATA, saya belajar mengelola keuangan organisasi dengan baik dan transparan. Ini menjadi bekal yang sangat berharga untuk masa depan.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      year: '2021/2022'
    },
    {
      id: 5,
      name: 'Dika Pratama',
      position: 'Koordinator Bidang IT 2022/2023',
      message: 'Bergabung dengan bidang IT OSIS ARMATA membuka wawasan saya tentang teknologi dan bagaimana mengaplikasikannya untuk kemajuan sekolah.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      year: '2022/2023'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Anggota OSIS Sebelumnya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kesan dan pesan dari para alumni OSIS ARMATA yang telah berkontribusi 
            untuk kemajuan sekolah
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
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
            className="testimonial-swiper"
          >
            {members.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                      <p className="text-blue-600 text-sm">{member.position}</p>
                      <p className="text-gray-500 text-xs">{member.year}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-300 mb-4" />
                    <p className="text-gray-700 leading-relaxed italic">
                      "{member.message}"
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg transition-colors duration-300">
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-50 p-3 rounded-full shadow-lg transition-colors duration-300">
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviousMembers;