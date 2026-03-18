import React from 'react';

const packages = [
  { name: "Starter", price: "$29", features: ["Gym Access", "Locker Room", "1 Fitness Eval"], popular: false },
  { name: "Pro", price: "$59", features: ["24/7 Access", "Group Classes", "Personal Trainer"], popular: true },
  { name: "Elite", price: "$99", features: ["All Pro Features", "Nutrition Plan", "Spa & Sauna"], popular: false }
];

const Packages = () => (
  <section id="packages" className="py-24 bg-gray-100 dark:bg-gym-gray transition-colors">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black dark:text-white text-gym-black uppercase italic">Choose Your <span className="text-gym-gold">Plan</span></h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {packages.map((p, i) => (
          <div key={i} className={`p-10 rounded-sm shadow-2xl transition-all duration-500 hover:-translate-y-4 ${p.popular ? 'bg-gym-gold scale-105 z-10' : 'bg-white dark:bg-gym-black'}`}>
            {p.popular && <span className="bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter mb-4 inline-block">Most Popular</span>}
            <h3 className={`text-2xl font-black uppercase italic ${p.popular ? 'text-black' : 'text-gym-black dark:text-white'}`}>{p.name}</h3>
            <div className="my-6">
              <span className={`text-5xl font-black ${p.popular ? 'text-black' : 'text-gym-gold'}`}>{p.price}</span>
              <span className={`text-sm font-bold ${p.popular ? 'text-black/60' : 'text-gray-500'}`}>/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {p.features.map((f, j) => (
                <li key={j} className={`flex items-center space-x-3 text-sm font-bold ${p.popular ? 'text-black' : 'dark:text-gray-300 text-gray-600'}`}>
                  <i className="fas fa-check-circle"></i> <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 font-black uppercase tracking-widest transition shadow-lg ${p.popular ? 'bg-black text-white hover:bg-gray-900' : 'bg-gym-gold text-black hover:bg-yellow-500'}`}>
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;