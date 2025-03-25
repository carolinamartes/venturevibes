import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import launchSvg from "@/assets/undraw_launching_szjw.svg";
import { CTAForm } from "./CTA";

export const Hero = () => {
  const [showCTA, setShowCTA] = useState(false);

  const handleJoinWaitlistClick = () => {
    setShowCTA(true);
  };

  return (
    <section className="pt-36 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-200/40 to-indigo-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/60 bg-[size:30px_30px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-3 py-1 text-sm font-medium">Early Access</Badge>
            <span className="text-slate-500 text-sm">Limited spots available</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">
            Turn Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Reality</span>
            <span className="block mt-2">Without Code</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
            Launch your digital product with AI-powered simplicity. From concept to customer — all without writing a single line of code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 relative">
            {!showCTA ? (
              <button 
                onClick={handleJoinWaitlistClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Join Waitlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            ) : (
              <div className="opacity-0 h-14">
                {/* Invisible placeholder with same height as button */}
              </div>
            )}
            
            {/* Absolutely positioned form that appears on top without shifting layout */}
            {showCTA && (
              <div className="absolute top-0 left-0 z-10 w-[320px] sm:w-[400px] glassmorphism p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-slate-900">Join our exclusive waitlist</h3>
                <CTAForm />
              </div>
            )}
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <img 
              src={launchSvg}
              alt="Launch your product to success"
              className="w-full h-auto"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 text-sm text-slate-800 font-medium border border-slate-100">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Launching made simple
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};