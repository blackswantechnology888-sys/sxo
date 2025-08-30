import React from 'react';
import { Gift, UserPlus, DollarSign } from 'lucide-react';

const PromotionSection: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-yellow-400">โปรโมชั่น</span> พิเศษ
          </h2>
          
          <button className="mt-4 md:mt-0 px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full transition-colors">
            ดูโปรโมชั่นทั้งหมด
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-yellow-500 transition-colors">
            <div className="p-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="text-black" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">ต้อนรับสมาชิกใหม่</h3>
              <p className="text-gray-300 mb-4">รับโบนัส 100% สูงสุด 1,000 บาท เมื่อสมัครสมาชิกใหม่</p>
              
              <div className="bg-black/30 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">รับโบนัส:</span>
                  <span className="text-yellow-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">เทิร์นโอเวอร์:</span>
                  <span className="text-white">3x</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors">
                รับโบนัส
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-yellow-500 transition-colors">
            <div className="p-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Gift className="text-black" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">โบนัสทุกวัน</h3>
              <p className="text-gray-300 mb-4">รับโบนัสเพิ่ม 10% ทุกวัน เมื่อฝากเงินขั้นต่ำ 300 บาท</p>
              
              <div className="bg-black/30 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">รับโบนัส:</span>
                  <span className="text-yellow-400 font-bold">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">เทิร์นโอเวอร์:</span>
                  <span className="text-white">1x</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors">
                รับโบนัส
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 group hover:border-yellow-500 transition-colors">
            <div className="p-6">
              <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-black" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">คืนยอดเสีย</h3>
              <p className="text-gray-300 mb-4">รับเงินคืน 5% ทุกสัปดาห์ สูงสุด 1,000 บาท</p>
              
              <div className="bg-black/30 p-3 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">คืนยอดเสีย:</span>
                  <span className="text-yellow-400 font-bold">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ถอนได้ทันที:</span>
                  <span className="text-white">ได้</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors">
                รับโบนัส
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;