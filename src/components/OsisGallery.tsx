import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const OsisGallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Kegiatan Organisasi'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Tim OSIS Bersama'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Workshop Siswa'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Presentasi Proyek'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Kegiatan Sosial'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1',
      title: 'Festival Seni'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Galeri OSIS ARMATA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi berbagai kegiatan dan momen berharga OSIS ARMATA
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-blue-300',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .gallery-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .gallery-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          border-radius: 50%;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default OsisGallery;