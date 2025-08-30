import React from 'react';

const FeaturedGame: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              เกมส์ <span className="text-yellow-400">ยอดนิยม</span>
            </h2>
            <p className="text-gray-300 mb-6">
              เกมสล็อตที่มีผู้เล่นมากที่สุด การันตีโบนัสและแจ็คพอตแตกบ่อย
              เพลิดเพลินกับกราฟิกสุดอลังการและระบบเกมที่ลื่นไหล
            </p>
            
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-1/3 text-gray-400 text-sm">เกม:</div>
                <div className="text-white font-medium">Fortune Tiger</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/3 text-gray-400 text-sm">ค่ายเกม:</div>
                <div className="text-white font-medium">PG Soft</div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-1/3 text-gray-400 text-sm">RTP:</div>
                <div className="text-white font-medium">96.8%</div>
              </div>
              <div className="flex items-center">
                <div className="w-1/3 text-gray-400 text-sm">แจ็คพอต:</div>
                <div className="text-yellow-400 font-bold">฿ 1,459,780</div>
              </div>
            </div>
            
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition-colors">
              เล่นเลย
            </button>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative mx-auto max-w-md">
              <img 
                src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg" 
                alt="Featured Slot Game" 
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg animate-pulse">
                  MEGA WIN
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-black/80 p-4 rounded-lg border border-yellow-500 hidden md:block">
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg" 
                  alt="Winner" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-white text-sm font-medium">สมชาย ม. ได้รับ</p>
                  <p className="text-yellow-400 font-bold">฿ 58,420</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;