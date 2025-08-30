import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Gamepad2 className="text-yellow-400 mr-2" size={28} />
      <div className="flex items-center">
        <span className="text-white text-xl font-bold tracking-wider">SLOT</span>
        <span className="text-yellow-400 text-xl font-bold tracking-wider">XO</span>
      </div>
    </div>
  );
};

export default Logo;