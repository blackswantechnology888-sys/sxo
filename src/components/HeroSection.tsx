import React from 'react';
import AuthForm from './AuthForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-8 md:py-12">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div id="particles-js" className="absolute inset-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              <span className="text-yellow-400">SLOT</span>
              <span className="text-white">XO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
              เกมสล็อต ออนไลน์ใหม่ ที่เริ่มให้บริการ มาตั้งแต่ปี 2016 โดยเป็นเกมส์สล็อตออนไลน์ในรูปแบบที่เล่นผ่านโทรศัพท์มือถือ
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg flex items-center">
                <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-xl">฿</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">เติมเงินง่าย</h3>
                  <p className="text-gray-400 text-sm">ฝาก-ถอนอัตโนมัติ 24 ชั่วโมง</p>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-60 p-4 rounded-lg flex items-center">
                <div className="bg-yellow-500 rounded-full h-12 w-12 flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-xl">%</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">โบนัสสูงสุด</h3>
                  <p className="text-gray-400 text-sm">รับโบนัสเพิ่มสูงสุด 100%</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <AuthForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;