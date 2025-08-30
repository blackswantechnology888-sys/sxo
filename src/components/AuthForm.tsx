import React, { useState } from 'react';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="bg-black bg-opacity-90 p-5 md:p-6 rounded-lg border border-gray-800 max-w-md w-full mx-auto">
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setIsLogin(true)}
          className={`text-lg font-medium pb-2 transition-colors duration-300 relative ${
            isLogin ? 'text-yellow-400' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {isLogin ? 'User Login' : 'เข้าสู่ระบบ'}
          {isLogin && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded"></span>
          )}
        </button>
        
        <button
          onClick={() => setIsLogin(false)}
          className={`text-lg font-medium pb-2 transition-colors duration-300 relative ${
            !isLogin ? 'text-yellow-400' : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {!isLogin ? 'Register' : 'สมัครสมาชิก'}
          {!isLogin && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded"></span>
          )}
        </button>
      </div>
      
      <form>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-300 mb-1">
              {isLogin ? 'Username' : 'New Username'}
            </label>
            <input
              type="text"
              id="username"
              placeholder={isLogin ? "ยูสเซอร์" : "สร้างยูสเซอร์"}
              className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-gray-300 mb-1">
              {isLogin ? 'Password' : 'New Password'}
            </label>
            <input
              type="password"
              id="password"
              placeholder={isLogin ? "รหัสผ่าน" : "สร้างรหัสผ่าน"}
              className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
          {!isLogin && (
            <div>
              <label htmlFor="confirm-password" className="block text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="ยืนยันรหัสผ่าน"
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          )}
          
          {!isLogin && (
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="เบอร์โทรศัพท์"
                className="w-full px-4 py-3 bg-gray-800 border border-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-md transition-colors duration-300"
          >
            {isLogin ? 'เข้าสู่ระบบ' : 'สมัครสมาชิก'}
          </button>
        </div>
      </form>
      
      {isLogin && (
        <div className="mt-4 text-center">
          <button className="text-yellow-400 hover:text-yellow-300 text-sm">
            ลืมรหัสผ่าน?
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;