import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import IT from '../assets/sekbid-it-min.png';
import sosial from '../assets/sekbid pendidikan-min.jpg'
import ketakwaan from '../assets/sekbid-ketakwaan-min.jpg'
import BPH from '../assets/bph-min.jpg'
import olahraga from '../assets/sekbid-jasmani-min.JPG'
import kreativitas from '../assets/sekbid-kreativitas-min.JPG'

interface Member {
  id: number;
  name: string;
  position: string;
  description: string;
  email?: string;
  instagram?: string;
}

interface DepartmentContentProps {
  departmentId: string;
}

const DepartmentContent: React.FC<DepartmentContentProps> = ({ departmentId }) => {
  // Mock data for department members
  const departmentMembers: Record<string, Member[]> = {
    it: [
      {
        id: 1,
        name: 'Gavin Zavier Haziqio',
        position: 'Ketua Sekbid IT',
        description: 'Anggota OSIS 2 periode, 23-24 / 24-25 , Mengelola & Mengatur Kegiatan serta anggota sekbid IT.',
      },
      {
        id: 2,
        name: 'Ryuzaky Nararya Ramadhan',
        position: 'Anggota Sekbid IT',
        description: 'Bertanggung jawab dalam pengembangan dan maintenance website resmi OSIS ARMATA.',
      },
      {
        id: 3,
        name: 'Teuku Syafiq Arasy',
        position: 'Anggota Sekbid IT',
        description: 'Anggota OSIS 2 periode, 23-24 / 24-25, Mengelola konten digital dan media sosial untuk meningkatkan engagement dengan siswa.',
      },
      {
        id: 4,
        name: 'Muhammad Azka Khiandra Sucipto',
        position: 'Anggota Sekbid IT',  
        description: 'Menganalisis data kegiatan dan feedback untuk meningkatkan kualitas program OSIS.',
      }
    ],
    humas: [
      {
        id: 1,
        name: 'Maya Komunikasi',
        position: 'Koordinator Humas',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Membangun hubungan baik dengan pihak eksternal dan mengelola komunikasi publik OSIS.',
        email: 'maya@osisarmata.sch.id',
        instagram: '@mayakom'
      },
      {
        id: 2,
        name: 'Rian Publikasi',
        position: 'Public Relations',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengelola publikasi kegiatan dan menjaga citra positif OSIS ARMATA di mata publik.',
        email: 'rian@osisarmata.sch.id',
        instagram: '@rianpr'
      },
      {
        id: 3,
        name: 'Dina Media',
        position: 'Media Relations',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Bertanggung jawab dalam hubungan dengan media massa dan dokumentasi kegiatan.',
        email: 'dina@osisarmata.sch.id',
        instagram: '@dinamedia'
      },
      {
        id: 4,
        name: 'Fajar Sponsor',
        position: 'Partnership Coordinator',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Menjalin kemitraan dengan sponsor dan pihak-pihak yang mendukung kegiatan OSIS.',
        email: 'fajar@osisarmata.sch.id',
        instagram: '@fajarsponsor'
      }
    ],
    kesiswaan: [
      {
        id: 1,
        name: 'Putri Siswa',
        position: 'Koordinator Kesiswaan',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengurus kepentingan siswa dan menjadi penghubung antara siswa dengan pihak sekolah.',
        email: 'putri@osisarmata.sch.id',
        instagram: '@putrisw'
      },
      {
        id: 2,
        name: 'Andi Akademik',
        position: 'Academic Coordinator',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengoordinasi kegiatan akademik dan kompetisi untuk meningkatkan prestasi siswa.',
        email: 'andi@osisarmata.sch.id',
        instagram: '@andiak'
      },
      {
        id: 3,
        name: 'Sinta Welfare',
        position: 'Student Welfare',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengurus kesejahteraan siswa dan program bantuan untuk siswa yang membutuhkan.',
        email: 'sinta@osisarmata.sch.id',
        instagram: '@sintawelfare'
      },
      {
        id: 4,
        name: 'Bima Discipline',
        position: 'Discipline Coordinator',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Membantu menjaga kedisiplinan dan tata tertib siswa di lingkungan sekolah.',
        email: 'bima@osisarmata.sch.id',
        instagram: '@bimadisc'
      }
    ],
    rohani: [
      {
        id: 1,
        name: 'Ahmad Spiritual',
        position: 'Koordinator Rohani',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Membina kegiatan keagamaan dan pengembangan spiritual siswa di sekolah.',
        email: 'ahmad@osisarmata.sch.id',
        instagram: '@ahmadspiritual'
      },
      {
        id: 2,
        name: 'Maria Faith',
        position: 'Religious Activities',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengoordinasi kegiatan keagamaan lintas agama dan dialog interfaith.',
        email: 'maria@osisarmata.sch.id',
        instagram: '@mariafaith'
      },
      {
        id: 3,
        name: 'Yusuf Dakwah',
        position: 'Spiritual Counselor',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Memberikan bimbingan spiritual dan konseling keagamaan untuk siswa.',
        email: 'yusuf@osisarmata.sch.id',
        instagram: '@yusufdakwah'
      },
      {
        id: 4,
        name: 'Sari Peace',
        position: 'Character Building',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengembangkan program pembentukan karakter dan nilai-nilai moral siswa.',
        email: 'sari@osisarmata.sch.id',
        instagram: '@saripeace'
      }
    ],
    olahraga: [
      {
        id: 1,
        name: 'Rio Atletik',
        position: 'Koordinator Olahraga',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengoordinasi kegiatan olahraga dan kompetisi untuk meningkatkan prestasi atletik siswa.',
        email: 'rio@osisarmata.sch.id',
        instagram: '@rioatletik'
      },
      {
        id: 2,
        name: 'Nina Fitness',
        position: 'Fitness Coordinator',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengembangkan program kebugaran dan kesehatan jasmani untuk seluruh siswa.',
        email: 'nina@osisarmata.sch.id',
        instagram: '@ninafitness'
      },
      {
        id: 3,
        name: 'Dedi Kompetisi',
        position: 'Competition Manager',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengatur dan mengelola berbagai kompetisi olahraga internal dan eksternal.',
        email: 'dedi@osisarmata.sch.id',
        instagram: '@dedikomp'
      },
      {
        id: 4,
        name: 'Lina Sport',
        position: 'Sports Equipment',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengelola dan merawat peralatan olahraga serta fasilitas olahraga sekolah.',
        email: 'lina@osisarmata.sch.id',
        instagram: '@linasport'
      }
    ],
    seni: [
      {
        id: 1,
        name: 'Angga Kreatif',
        position: 'Koordinator Seni',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengembangkan bakat seni siswa melalui berbagai program kreatif dan inovatif.',
        email: 'angga@osisarmata.sch.id',
        instagram: '@anggakreatif'
      },
      {
        id: 2,
        name: 'Bella Musik',
        position: 'Music Coordinator',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengoordinasi kegiatan musik dan mengembangkan grup musik sekolah.',
        email: 'bella@osisarmata.sch.id',
        instagram: '@bellamusik'
      },
      {
        id: 3,
        name: 'Candra Tari',
        position: 'Dance Coordinator',
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengembangkan seni tari tradisional dan modern untuk pentas sekolah.',
        email: 'candra@osisarmata.sch.id',
        instagram: '@candratari'
      },
      {
        id: 4,
        name: 'Diana Visual',
        position: 'Visual Arts',
        image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
        description: 'Mengurus bidang seni rupa dan visual untuk mendukung kegiatan sekolah.',
        email: 'diana@osisarmata.sch.id',
        instagram: '@dianavisual'
      }
    ]
  };

  const members = departmentMembers[departmentId] || [];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Anggota Tim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim yang berdedikasi untuk mencapai tujuan bersama dan memberikan 
            kontribusi terbaik untuk sekolah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {members.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    <div className="flex space-x-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                        >
                          <Mail className="h-4 w-4 mr-1" />
                          <span className="text-sm">Email</span>
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
                        >
                          <Instagram className="h-4 w-4 mr-1" />
                          <span className="text-sm">{member.instagram}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentContent;