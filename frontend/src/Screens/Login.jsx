import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in all fields.');
    } else {
      // Simulate a login request
      console.log('Logged in with:', email, password);
      setError('');
      // You can handle authentication here
    }
  };

  const handleGoogleLogin = () => {
    // Placeholder for Google login functionality
    console.log('Initiating Google Login');
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#D4AF37] p-6 text-center">
            <h2 className="text-4xl font-bold text-white">Welcome Back</h2>
            <p className="text-white/80 mt-2">Login to continue your shopping journey</p>
          </div>

          {/* Login Form */}
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="bg-[#C0392B] text-white p-4 mb-6 rounded-lg flex items-center justify-center">
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#6F4E37] mb-2 font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#196F3D]" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-[#6F4E37] mb-2 font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C0392B]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 p-3 border border-[#6F4E37]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E68A00]"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F4E37]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-[#E68A00] text-sm hover:underline mt-2 block text-right"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#C0392B] text-white py-3 rounded-lg font-semibold hover:bg-[#C0392B]/90 transition-colors"
              >
                Login
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-grow border-t border-[#6F4E37]/20"></div>
              <span className="px-4 text-[#6F4E37]/70">or</span>
              <div className="flex-grow border-t border-[#6F4E37]/20"></div>
            </div>

            {/* Social Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center bg-white border border-[#6F4E37]/20 text-[#6F4E37] py-3 rounded-lg hover:bg-[#F8F5F0] transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                className="mr-3"
              >
                <path 
                  fill="#4285F4" 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.75h3.57c2.08-1.92 3.28-4.74 3.28-8.07z"
                />
                <path 
                  fill="#34A853" 
                  d="M12 23c2.97 0 5.46-1 7.28-2.69l-3.57-2.75c-.99.66-2.26 1.04-3.71 1.04-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4 20.2 7.74 23 12 23z"
                />
                <path 
                  fill="#FBBC05" 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.66-2.84z"
                />
                <path 
                  fill="#EA4335" 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.74 1 4 3.8 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Signup Link */}
            <div className="text-center mt-6">
              <p className="text-[#6F4E37]">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-[#E68A00] font-semibold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;