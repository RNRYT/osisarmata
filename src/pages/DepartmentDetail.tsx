import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import DepartmentHeader from '../components/DepartmentHeader';
import DepartmentContent from '../components/DepartmentContent';
import OtherDepartments from '../components/OtherDepartments';
import Footer from '../components/Footer';
import IT from '../assets/sekbid-it-min.png';
import sosial from '../assets/sekbid pendidikan-min.jpg';
import ketakwaan from '../assets/sekbid-ketakwaan-min.jpg';
import BPH from '../assets/bph-min.jpg'
import olahraga from '../assets/sekbid-jasmani-min.JPG'
import kreativitas from '../assets/sekbid-kreativitas-min.JPG';

const DepartmentDetail: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();

  const departmentData = {
    it: {
      name: 'Bidang IT',
      description: 'Mengelola teknologi informasi dan media digital OSIS ARMATA',
      backgroundImage: IT,
    },
    humas: {
      name: 'Bidang Humas',
      description: 'Menjalin hubungan dengan masyarakat dan pihak eksternal',
      backgroundImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    kesiswaan: {
      name: 'Bidang Kesiswaan',
      description: 'Mengurus kepentingan dan kegiatan siswa',
      backgroundImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    rohani: {
      name: 'Bidang Rohani',
      description: 'Membina kegiatan keagamaan dan spiritual siswa',
      backgroundImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    olahraga: {
      name: 'Bidang Olahraga',
      description: 'Mengkoordinasi kegiatan olahraga dan kompetisi',
      backgroundImage: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    seni: {
      name: 'Bidang Seni',
      description: 'Mengembangkan bakat seni dan budaya siswa',
      backgroundImage: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  };

  const currentDepartment = departmentData[departmentId as keyof typeof departmentData];

  if (!currentDepartment) {
    return <div>Department not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DepartmentHeader 
        name={currentDepartment.name}
        description={currentDepartment.description}
        backgroundImage={currentDepartment.backgroundImage}
      />
      <DepartmentContent departmentId={departmentId!} />
      <OtherDepartments currentDepartment={departmentId!} />
      <Footer />
    </div>
  );
};

export default DepartmentDetail;