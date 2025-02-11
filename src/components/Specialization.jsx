import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Plus, Minus } from 'lucide-react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

function Specialization() {
  const { isDarkMode } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'With experience in building dynamic, responsive web applications using React, Node.js and JavaScript, I specialize in delivering seamless digital experiences.',
      route: '/services/web-development'
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions including SEO, social media management, and content strategy to boost your online presence.',
      route: '/services/digital-marketing'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
      route: '/services/ui-ux-design'
    },
    {
      id: 4,
      title: 'Full Stack Development',
      description: 'Creating intuitive and engaging user interfaces with a focus on user experience and modern design principles.',
      route: '/services/ui-ux-design'
    }
  ];

  useEffect(() => {
    setHasMounted(true);
  }, []);


  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="mt-14 py-10 mx-4 md:mx-14 lg:mx-20">
      <h1 className={`text-3xl md:text-4xl font-medium ${isDarkMode ? 'text-[#e9e1b4]' : 'text-[#14213d]'}`} style={{fontFamily:'Inria Sans'}}>
        Specialization
      </h1>
      <h1 className={`md:text-2xl py-6 ${isDarkMode ? 'text-[#ffffff]' : 'text-[#14213d]'}`} style={{fontFamily:'Inria Sans'}}>
        Our Services
      </h1>
      <div className="space-y-6 ">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-2xl p-6 transition-all duration-300 md:py-10  lg:py-14 ${
              isDarkMode ? 'bg-[#FFFFFF26] text-white border border-[#737373]' : 'bg-[#f7f7f7] border-[#737373] border'
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className={`font-medium ${isDarkMode ? 'text-[#e9e1b4]' : 'text-[#14213d]'} font-medium text-xs md:text-3xl`} style={{fontFamily:'Inria Sans'}}>
                {service.title}
              </h2>
              <div className="flex items-center gap-6 lg:gap-10">
                <Link
                  to={service.route}
                  className={`px-2 md:px-4 md:py-2 text-xs lg:text-lg rounded-full ${isDarkMode ? 'bg-[#e9e1b4] text-[#14213d]' : 'bg-[#14213d] text-[#ffffff]'} flex items-center gap-2`} style={{fontFamily:'Inria Sans'}}
                >
                  Services i provide
                  <GoArrowUpRight size={16} />
                </Link>
                <button
                  onClick={() => toggleService(service.id)}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'bg-[#191a23]' : 'text-[#14213d] border-[#191A23] bg-[#ffffff]'
                  }`}
                >
                  {expandedService === service.id ? (
                    <Minus size={24}/>
                  ) : (
                    <Plus size={24}/>
                  )}
                </button>
              </div>
            </div>
            {expandedService === service.id && (
              <div className="mt-4 text-sm opacity-80 ">
                <div className={` border-t my-6 ${isDarkMode ? '' : 'border-[#14213d]'}`}></div>
               <span className={`text-lg lg:text-xl ${isDarkMode ? 'text-[#ffffff]' : 'text-[#14213d]'}`} style={{fontFamily:'Inria Sans'}}> {service.description}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specialization;