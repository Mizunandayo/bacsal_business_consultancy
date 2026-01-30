"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Forgot password modal state
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [isSendingReset, setIsSendingReset] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Implement actual authentication logic
    console.log("Login attempt:", { email, password });
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingReset(true);
    
    // TODO: Implement actual password reset logic
    console.log("Password reset requested for:", forgotEmail);
    
    // Simulate API call
    setTimeout(() => {
      setIsSendingReset(false);
      setShowForgotPassword(false);
      setForgotEmail("");
      // Show success message or notification here
    }, 1500);
  };





  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homebackground.png')" }}
    >
      {/* Orbiting particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] animate-orbit">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1B6174]/60 rounded-full shadow-lg shadow-[#1B6174]/30" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2d8a9e]/50 rounded-full shadow-lg shadow-[#2d8a9e]/30" />
        </div>
        {/* Medium orbit - reverse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] animate-orbit-reverse">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 bg-[#3da5b8]/50 rounded-full shadow-lg shadow-[#3da5b8]/30" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-[#1B6174]/40 rounded-full shadow-lg shadow-[#1B6174]/20" />
        </div>
        {/* Small orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] animate-orbit-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2d8a9e]/60 rounded-full shadow-lg shadow-[#2d8a9e]/30" />
        </div>
        {/* Floating particles */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-[#1B6174]/30 rounded-full animate-float" />
        <div className="absolute top-[30%] right-[20%] w-3 h-3 bg-[#2d8a9e]/25 rounded-full animate-float-delayed" />
        <div className="absolute bottom-[25%] left-[25%] w-2.5 h-2.5 bg-[#3da5b8]/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-[35%] right-[15%] w-2 h-2 bg-[#1B6174]/25 rounded-full animate-float" />
      </div>

      {/* Main card container */}
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-zinc-200/80 bg-white/90 backdrop-blur-sm">
        
        {/* Left side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          {/* Logo */}
          <div className="mb-6">
            <Link href="/" className="inline-block">
              <Image
                src="/bacsallogo.png"
                alt="Bacsal Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Login Header */}
          <h1 className="text-3xl font-bold text-[#151515] mb-8">Login</h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-600 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="username@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B6174] focus:border-transparent transition-all text-zinc-700 placeholder-zinc-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-600 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B6174] focus:border-transparent transition-all text-zinc-700 placeholder-zinc-400 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm text-[#1B6174] hover:text-[#154a59] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#1B6174] to-[#2d8a9e] text-white font-semibold rounded-lg hover:from-[#154a59] hover:to-[#1B6174] focus:outline-none focus:ring-2 focus:ring-[#1B6174] focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#1B6174]/30"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <LoadingSpinner />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Contact Admin Notice */}
          <p className="mt-8 text-center text-sm text-zinc-500">
            Need an account? Contact your administrator.
          </p>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#1B6174] to-[#0f4a5a] items-center justify-center p-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/4 left-8 w-3 h-3 bg-[#3da5b8]/50 rounded-full animate-float" />
          <div className="absolute bottom-1/4 right-12 w-2 h-2 bg-[#2d8a9e]/60 rounded-full animate-float-delayed" />
          <div className="absolute top-1/2 right-8 w-2.5 h-2.5 bg-white/20 rounded-full animate-float-slow" />
          
          {/* Main illustration */}
          <div className="relative w-full max-w-sm z-10">
            <div className="relative aspect-square flex items-center justify-center">
              <Image
                src="/bbconsolo.png"
                alt="Bacsal Business Consultancy"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes orbit {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes orbit-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(15px) translateX(-10px); opacity: 0.8; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-25px); opacity: 1; }
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 15s linear infinite;
        }
        .animate-orbit-slow {
          animation: orbit 25s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowForgotPassword(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 p-6 pb-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-[#151515]">Forgot Password</h2>
            </div>
            
            {/* Content */}
            <div className="px-6 pb-2">
              <p className="text-zinc-500 text-sm">
                Please enter your registered email below...
              </p>
            </div>
            
            {/* Form */}
            <form onSubmit={handleForgotPassword} className="p-6 pt-4">
              <div className="mb-6">
                <label htmlFor="forgot-email" className="block text-sm font-medium text-zinc-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="forgot-email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1B6174] focus:border-transparent transition-all text-zinc-700 placeholder-zinc-400"
                  required
                />
              </div>
              
              {/* Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="px-6 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-800 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSendingReset}
                  className="px-6 py-2.5 bg-[#151515] text-white text-sm font-medium rounded-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#151515] focus:ring-offset-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSendingReset ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}











// Loading Spinner Component
function LoadingSpinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}


// Icon Components
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  );
}


