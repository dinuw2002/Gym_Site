import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section id="about" className="bg-white dark:bg-gym-black py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Column: Sticky Image */}
        <div className="md:w-1/2 md:sticky md:top-32 h-fit">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gym-gold/20 rounded-sm blur-lg"></div>
            <img 
              src={gymAboutImg} 
              alt="Gym Interior" 
              className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-b-8 border-gym-gold"
            />
          </div>
        </div>

        {/* Right Column: Scrolling Carousel Content */}
        <div className="md:w-1/2 space-y-24 py-10">
          <div className="space-y-2">
            <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-gym-gold"></div>
          </div>

          {aboutData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, margin: "-100px" }}
              className="min-h-[300px] flex flex-col justify-center"
            >
              <h3 className="text-4xl md:text-5xl font-black dark:text-white text-gym-black uppercase italic mb-6">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-medium border-l-4 border-gym-gold pl-6">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;