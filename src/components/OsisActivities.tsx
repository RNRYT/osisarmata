import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
}

const OsisActivities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const activities: Activity[] = [
    {
      id: 1,
      title: 'Pekan Olahraga',
      description: 'Kompetisi olahraga antar kelas untuk mempererat tali persaudaraan dan meningkatkan sportivitas siswa.',
      image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 2,
      title: 'Festival Seni',
      description: 'Pameran karya seni dan pentas budaya untuk mengapresiasi bakat dan kreativitas siswa.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 3,
      title: 'Bakti Sosial',
      description: 'Kegiatan pengabdian masyarakat untuk membantu sesama dan mengembangkan rasa empati.',
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 4,
      title: 'Workshop IT',
      description: 'Pelatihan teknologi informasi untuk meningkatkan literasi digital siswa.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 5,
      title: 'Lomba Akademik',
      description: 'Kompetisi mata pelajaran untuk meningkatkan prestasi akademik siswa.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    },
    {
      id: 6,
      title: 'Kegiatan Rohani',
      description: 'Program pengembangan spiritual dan karakter untuk membentuk kepribadian yang baik.',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1'
    }
  ];

  return (
    <section id="kegiatan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Kegiatan OSIS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program dan kegiatan yang dirancang untuk mengembangkan potensi 
            dan memperkuat karakter siswa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedActivity(activity)}
            >
              <div className="relative">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-gray-800" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedActivity.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OsisActivities;