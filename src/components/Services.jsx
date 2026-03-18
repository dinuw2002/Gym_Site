import React, { useState } from 'react';
import personalImg from '../assets/personal-training.jpg';
import groupImg from '../assets/group-classes.jpg';
import yogaImg from '../assets/yoga-studio.jpg';

const servicesData = [
  {
    id: 1,
    title: "Personal Training",
    image: personalImg,
    description: "Work one-on-one with our certified expert trainers to create a customized fitness roadmap tailored specifically to your body and long-term goals.",
  },
  {
    id: 2,
    title: "Group Classes",
    image: groupImg,
    description: "Experience the power of community in our high-energy group sessions, ranging from HIIT to strength circuits, designed to keep you motivated and moving.",
  },
  {
    id: 3,
    title: "Yoga Studio",
    image: yogaImg,
    description: "Find your balance and improve your flexibility in our serene yoga studio, offering a variety of classes for all levels to enhance both physical and mental well-being.",
  }
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-24 bg-gym-light dark:bg-gym-black px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm">
              What We Offer
            </h2>
            <h1 className="text-5xl md:text-6xl font-black dark:text-white text-gym-black uppercase italic tracking-tighter">
              Our Premium <span className="text-gym-gold">Services</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <input 
              type="text"
              placeholder="Search services..."
              className="w-full bg-white dark:bg-gym-gray border-2 border-transparent focus:border-gym-gold p-4 pl-12 rounded-sm dark:text-white shadow-xl outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white dark:bg-gym-gray rounded-sm overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 border-b-4 border-transparent hover:border-gym-gold"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-black dark:text-white text-gym-black uppercase italic">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {service.description}
                </p>
                <button className="mt-4 inline-block bg-gym-black dark:bg-gym-gold text-white dark:text-black px-6 py-3 font-black uppercase text-xs tracking-widest transition-all duration-300 hover:scale-110 hover:bg-gym-gold dark:hover:bg-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <p className="text-center text-gray-500 py-20 text-xl font-bold">No services found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default Services;