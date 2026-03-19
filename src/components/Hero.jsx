import React from 'react';
import gymImage from '../assets/gym-hero.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-gym-black pt-24 pb-12 overflow-hidden">
      
     
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gym-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
       
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          
        
          <div className="space-y-4">
            
            <h1 className="text-5xl md:text-7xl font-black dark:text-white leading-tight uppercase italic tracking-tighter">
              Unleash <br /> 
              Your <span className="text-gym-gold">Potential</span> <br /> 
              at Our Brand <br /> 
              New Facility
            </h1>
          </div>

         
          <div className="relative group">
            <div className="absolute -inset-1 bg-gym-gold/20 rounded-sm blur group-hover:bg-gym-gold/40 transition duration-700"></div>
            <div className="relative bg-gym-gray h-[400px] rounded-sm overflow-hidden border-l-4 border-gym-gold shadow-2xl">
              <img 
                src={gymImage} 
                alt="Brand New Facility" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

      
        <div className="max-w-3xl space-y-8 border-t border-white/10 pt-8">
          <p className="dark:text-gray-400 text:black text-xl md:text-2xl font-medium leading-relaxed">
            Join a community dedicated to strength, health, and results. 
            Explore our premium facilities, expert trainers, and flexible membership plans today.
          </p>
          
          <button className="bg-gym-gold text-black px-12 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(217,166,22,0.3)]">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;