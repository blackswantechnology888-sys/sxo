import React from 'react';
import { Flame, Star } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  image: string;
  provider: string;
  isHot?: boolean;
  isNew?: boolean;
}

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="aspect-[3/4] bg-gray-800 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70" />
      
      <div className="absolute top-2 right-2 flex space-x-1">
        {game.isHot && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Flame size={12} className="mr-1" />
            HOT
          </span>
        )}
        {game.isNew && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </span>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-3 transition-all duration-300">
        <p className="text-xs text-gray-300 mb-1">{game.provider}</p>
        <h3 className="text-white font-medium truncate">{game.title}</h3>
        
        <div className="flex items-center mt-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex space-x-0.5 mr-2">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} size={12} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-xs text-gray-300">5.0</span>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          เล่นเลย
        </button>
      </div>
    </div>
  );
};

export default GameCard;