import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'th'>('th');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'th' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center text-white hover:text-yellow-400 transition-colors"
      aria-label="Switch Language"
    >
      <Globe size={20} />
      <span className="ml-1 text-sm font-medium hidden md:inline-block">
        {language === 'en' ? 'EN' : 'TH'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;