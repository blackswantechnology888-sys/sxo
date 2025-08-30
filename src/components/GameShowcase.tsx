import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GameCard from './GameCard';

const games = [
  {
    id: 1,
    title: 'Dragon Fortune',
    image: 'https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg',
    provider: 'PG Soft',
    isHot: true,
  },
  {
    id: 2,
    title: 'Lucky Golden',
    image: 'https://images.pexels.com/photos/6573708/pexels-photo-6573708.jpeg',
    provider: 'Joker Gaming',
    isNew: true,
  },
  {
    id: 3,
    title: 'Tiger Treasures',
    image: 'https://images.pexels.com/photos/3279401/pexels-photo-3279401.jpeg',
    provider: 'Pragmatic',
    isHot: true,
  },
  {
    id: 4,
    title: 'Wild Gems',
    image: 'https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg',
    provider: 'SlotXO',
    isNew: true,
  },
  {
    id: 5,
    title: 'Magic Caishen',
    image: 'https://images.pexels.com/photos/6321449/pexels-photo-6321449.jpeg',
    provider: 'PG Soft',
    isHot: true,
  },
  {
    id: 6,
    title: 'Golden Phoenix',
    image: 'https://images.pexels.com/photos/5560911/pexels-photo-5560911.jpeg',
    provider: 'Microgaming',
    isNew: true,
  },
];

const GameShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('popular');
  
  const categories = [
    { id: 'popular', name: 'ยอดนิยม' },
    { id: 'new', name: 'มาใหม่' },
    { id: 'slots', name: 'สล็อต' },
    { id: 'card', name: 'เกมส์ไพ่' },
    { id: 'fishing', name: 'ยิงปลา' },
  ];
  
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          <span className="text-yellow-400">เกม</span>แนะนำ
        </h2>
        
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-yellow-500 scrollbar-track-gray-800">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-yellow-500 text-black font-medium'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors group">
            <span>ดูเกมทั้งหมด</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;