import React from 'react';
import gymLogo from '../assets/logo.jpg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gym-black text-white pt-16 pb-8 px-6 border-t border-gym-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <img src={gymLogo} alt="Logo" className="h-10 w-auto brightness-110 shadow-[0_0_10px_rgba(217,166,22,0.3)]" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pushing the boundaries of fitness in Homagama. Our mission is to provide world-class facilities to our local community.
          </p>
        </div>

        
        <div>
          <h4 className="text-gym-gold font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-gym-gold font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li>Email: <span className="text-white">info@fitness.lk</span></li>
            <li>Phone: <span className="text-white">+94 11 234 5678</span></li>
            <li>Location: <span className="text-white">Pitipana North, Homagama</span></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-gym-gold font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
          <p className="text-gray-400 text-xs mb-4">Get fitness tips and gym updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-gym-gray border-none p-3 text-sm w-full focus:ring-1 focus:ring-gym-gold outline-none"
            />
            <button className="bg-gym-gold text-black px-4 font-bold hover:bg-yellow-500 transition-colors">
              Go
            </button>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs uppercase tracking-widest font-bold">
        <p>© 2026 IronCorp Fitness Sports Center. All Rights Reserved.</p>
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2 hover:text-gym-gold transition-colors group"
        >
          <span>Back to Top</span>
          <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;