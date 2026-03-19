import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gymAboutImg from '../assets/gym-about.jpg';

const aboutData = [
  {
    title: "Our Mission",
    content: "Founded on the principles of community and strength, our brand new facility is designed to provide a premium fitness experience for everyone, from beginners to elite athletes."
  },
  {
    title: "The Environment",
    content: "We offer a supportive environment equipped with state-of-the-art machines and expert-led programs tailored to your unique goals."
  },
  {
    title: "The Local Connection",
    content: "As a local fitness brand, we take pride in fostering a healthy lifestyle within our community through personalized attention and world-class facilities."
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % aboutData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="bg-white dark:bg-gym-black py-24 px-6 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
     
        <div className="md:w-1/2 w-full">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gym-gold"></div>
            <img 
              src={gymAboutImg} 
              alt="Gym Facility" 
              className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gym-gold"></div>
          </div>
        </div>

  
        <div className="md:w-1/2 w-full space-y-8">
          <div className="space-y-2">
            <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-gym-gold"></div>
          </div>

 
          <div className="relative h-[300px] flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}   
                animate={{ opacity: 1, y: 0 }}    
                exit={{ opacity: 0, y: -50 }}     
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <h3 className="text-4xl md:text-5xl font-black dark:text-white text-gym-black uppercase italic mb-6 leading-none">
                  {aboutData[index].title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium border-l-4 border-gym-gold pl-6">
                  {aboutData[index].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          
          <div className="flex space-x-3 mt-8">
            {aboutData.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${i === index ? 'w-12 bg-gym-gold' : 'w-4 bg-gray-300 dark:bg-gym-gray'}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;