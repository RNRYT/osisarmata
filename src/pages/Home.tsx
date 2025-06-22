import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutOsis from '../components/AboutOsis';
import OsisActivities from '../components/OsisActivities';
import OsisDepartments from '../components/OsisDepartments';
import OsisGallery from '../components/OsisGallery';
import PreviousMembers from '../components/PreviousMembers';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutOsis />
      <OsisActivities />
      <OsisDepartments />
      <OsisGallery />
      <PreviousMembers />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;