import React from 'react';



const trainers = [
  { name: "Alex Rivera", role: "Strength Coach", img: "trainer1.jpg" },
  { name: "Sarah Chen", role: "Yoga Expert", img: "trainer2.jpg" },
  { name: "Marcus Bolt", role: "HIIT Specialist", img: "trainer3.jpg" }
];

const Trainers = () => (
  <section id="trainers" className="py-24 bg-white dark:bg-gym-black transition-colors">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm">Expert Coaches</h2>
        <h1 className="text-5xl font-black dark:text-white text-gym-black uppercase italic">Meet Your <span className="text-gym-gold">Team</span></h1>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        {trainers.map((t, i) => (
          <div key={i} className="group relative overflow-hidden rounded-sm bg-gym-gray shadow-2xl">
            <div className="h-[450px] overflow-hidden">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-black text-white uppercase italic">{t.name}</h3>
              <p className="text-gym-gold font-bold uppercase text-xs tracking-widest mb-4">{t.role}</p>
              <div className="flex space-x-4 text-white">
                <i className="fab fa-instagram hover:text-gym-gold cursor-pointer transition"></i>
                <i className="fab fa-twitter hover:text-gym-gold cursor-pointer transition"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Trainers;