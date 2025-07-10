'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fingerprint, Lock, User, Shield, QrCode, UserPlus, FileText, Eye, EyeOff, Smartphone, CreditCard, Building, Home } from 'lucide-react';

export default function EnhancedLogin() {
  const router = useRouter();
  const [customerId, setCustomerId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('password');

  const handleLogin = () => {
    // e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (customerId === 'Pavanbank' && password === '123456') {
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/dashboard');

      } else {
        setError('Invalid Customer ID or Password');
      }
      setLoading(false);
    }, 1000);
  };

  // const handleFingerprintLogin = () => {
  //   setError('');
  //   setLoading(true);
    
  //   setTimeout(() => {
  //     router.push('/dashboard');
  //   }, 1500);
  // };

  const services = [
    { icon: UserPlus, label: 'Open Account', color: 'from-blue-500 to-blue-600' },
    { icon: Shield, label: 'Offers', color: 'from-emerald-500 to-emerald-600' },
    { icon: Home, label: 'Home Loan', color: 'from-orange-500 to-orange-600' },
    { icon: CreditCard, label: 'Digital Rupee', color: 'from-purple-500 to-purple-600' },
  ];

  const bottomServices = [
    { icon: Smartphone, label: 'Mobile Banking', color: 'from-indigo-500 to-indigo-600' },
    { icon: Shield, label: 'PayZapp', color: 'from-pink-500 to-pink-600' },
    { icon: FileText, label: 'Ask Eva', color: 'from-teal-500 to-teal-600' },
    { icon: Building, label: 'Branch Locator', color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Mobile Status Bar - Hidden on Desktop */}
      <div className="md:hidden bg-black bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 text-sm flex justify-between items-center">
        <span className="font-medium">18:09</span>
        <div className="flex items-center gap-2">
          <Shield className="h-3 w-3" />
          <span className="text-xs">Secure Connection</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center py-8 md:py-12 px-4">
        <div className="text-white/80 text-xs font-medium mb-4 tracking-widest uppercase">
          Made Digital By
        </div>
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* HDFC Bank Logo Placeholder */}
          <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
            <img src="/images/hdfc2.png" alt="HDFC Bank" className="h-8 md:h-10" />
          </div>
          <div className="text-white font-bold text-2xl md:text-3xl tracking-wide">now</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Login Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
              {/* Profile Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-white font-bold text-lg md:text-xl mb-2">
                  Welcome Back
                </h2>
                <p className="text-blue-100 text-sm">
                  OLA ELECTRIC TECHNOLOGIES PVT LTD
                </p>
              </div>

              {/* Login Content */}
              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-center mb-6 font-medium">Choose your login method</p>

                {/* Login Tabs */}
                <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                  <button
                    onClick={() => setActiveTab('fingerprint')}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === 'fingerprint'
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Fingerprint className="h-4 w-4 inline mr-2" />
                    Biometric
                  </button>
                  <button
                    onClick={() => setActiveTab('password')}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === 'password'
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    <Lock className="h-4 w-4 inline mr-2" />
                    Password
                  </button>
                </div>

                {/* Login Forms */}
                {activeTab === 'fingerprint' && (
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Fingerprint className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-gray-600">Touch the fingerprint sensor to authenticate</p>
                    <button
                      // onClick={handleFingerprintLogin}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Authenticating...
                        </div>
                      ) : (
                        'Authenticate with Biometric'
                      )}
                    </button>
                  </div>
                )}

                {activeTab === 'password' && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                          type="text"
                          value={customerId}
                          onChange={(e) => setCustomerId(e.target.value)}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Customer ID"
                          required
                        />
                      </div>

                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                        {error}
                      </div>
                    )}

                    <button
                      onClick={handleLogin}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Signing In...
                        </div>
                      ) : (
                        'Sign In Securely'
                      )}
                    </button>
                  </div>
                )}

                {/* Additional Options */}
                <div className="mt-8 space-y-6">
                  <div className="text-center">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm hover:underline transition-colors">
                      Forgot Password?
                    </button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <button className="w-full text-gray-600 hover:text-gray-800 text-sm mb-3 transition-colors">
                      Not OLA ELECTRIC TECHNOLOGIES PVT LTD?
                    </button>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-medium transition-colors">
                      Switch Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services & QR */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* QR Code Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <QrCode className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Quick Login</h3>
                    <p className="text-sm text-gray-600">Scan QR to verify request</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <QrCode className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
              <h3 className="font-semibold text-gray-800 mb-6 text-center">Quick Services</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <button key={index} className="group p-4 text-center hover:bg-gray-50 rounded-2xl transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-gray-700 text-sm font-medium">{service.label}</p>
                    </button>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {bottomServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <button key={index} className="group p-4 text-center hover:bg-gray-50 rounded-2xl transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-gray-700 text-sm font-medium">{service.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex justify-center gap-6 text-sm text-white/80 mb-4">
            <button className="hover:text-white transition-colors hover:underline">
              Security & Privacy
            </button>
            <span>|</span>
            <button className="hover:text-white transition-colors hover:underline">
              Terms of Service
            </button>
            <span>|</span>
            <button className="hover:text-white transition-colors hover:underline">
              Help & Support
            </button>
          </div>
          <p className="text-white/60 text-xs">
            © 2024 HDFC Bank Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}