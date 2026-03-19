import React, { useState, useEffect } from 'react';
import gymLogo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full z-50 bg-gym-black dark:bg-gym-black border-b border-gray-200 dark:border-gym-gray px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        
        <div className="flex items-center space-x-3">
          <a href="home"><img src={gymLogo} alt="Gym Logo" className="h-12 w-auto rounded-full border-2 border-gym-gold shadow-[0_0_15px_rgba(217,166,22,0.5)] transition-transform hover:scale-110" />
          </a>
          
        </div>

        
        <ul className="hidden md:flex space-x-8 font-bold text-white uppercase text-xs tracking-widest">
          <li><a href="#home" className="hover:text-gym-gold transition">Home</a></li>
          <li><a href="#about" className="hover:text-gym-gold transition">About</a></li>
          <li><a href="#services" className="hover:text-gym-gold transition">Services</a></li>
          <li><a href="#contact" className="hover:text-gym-gold transition">Contact</a></li>
        </ul>

        <div className="flex items-center space-x-4">
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gym-gray text-gym-gold hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>

            ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>

            )}
          </button>

          
        </div>
      </div>
    </nav>
  );

};

export default Navbar;