import React from 'react';

interface DepartmentHeaderProps {
  name: string;
  description: string;
  backgroundImage: string;
}

const DepartmentHeader: React.FC<DepartmentHeaderProps> = ({ 
  name, 
  description, 
  backgroundImage 
}) => {
  return (
    <section className="relative h-96 lg:h-[500px] mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold">{name}</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentHeader;