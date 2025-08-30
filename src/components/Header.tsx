import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onToggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleMenu }) => {
  return (
    <header className="bg-black py-4 px-4 md:px-6 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={onToggleMenu}
            className="mr-3 text-white hover:text-yellow-400 transition-colors md:hidden"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
          <Logo />
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <div className="hidden md:flex items-center space-x-2">
            <button className="text-white hover:text-yellow-400 px-3 py-1 text-sm transition-colors">
              ติดต่อเรา
            </button>
            <button className="text-white hover:text-yellow-400 px-3 py-1 text-sm transition-colors">
              โปรโมชั่น
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;