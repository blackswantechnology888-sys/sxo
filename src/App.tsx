import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GameShowcase from './components/GameShowcase';
import FeaturedGame from './components/FeaturedGame';
import PromotionSection from './components/PromotionSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      
      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-yellow-400 transition-colors"
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                เกมส์ทั้งหมด
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                โปรโมชั่น
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                วิธีการเล่น
              </a>
            </li>
            <li>
              <a href="#" className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors">
                ติดต่อเรา
              </a>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md transition-colors mb-3">
              เข้าสู่ระบบ
            </button>
            <button className="w-full py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold rounded-md transition-colors">
              สมัครสมาชิก
            </button>
          </div>
        </div>
      </div>
      
      <Header onToggleMenu={toggleMenu} />
      
      <main>
        <HeroSection />
        <GameShowcase />
        <FeaturedGame />
        <PromotionSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;