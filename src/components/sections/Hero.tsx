import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import launchSvg from "@/assets/undraw_launching_szjw.svg";
import { CTAForm } from "./CTA";

export const Hero = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Only initialize the intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleJoinWaitlistClick = () => {
    setShowCTA(true);
  };

  return (
    <section className="pt-24 pb-24 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50/30" itemScope itemType="https://schema.org/WebPageElement">
      <meta itemProp="name" content="VentureVibes Hero Section" />
      {/* Decorative elements - keep them static on initial load */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-blue-200/40 to-indigo-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/60 bg-[size:30px_30px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
        <div className="space-y-8" itemScope itemType="https://schema.org/Product">
          <meta itemProp="name" content="VentureVibes AI Launch Navigator" />
          <meta itemProp="description" content="AI-powered platform that helps creators launch successful products without coding" />
          {/* Always show this element immediately */}
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors px-3 py-1 text-sm font-medium hover-scale">Early Access</Badge>
            <span className="text-slate-500 text-sm">Limited spots available</span>
          </div>
          
          {/* Show heading immediately without animation */}
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600">
            Turn Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Reality</span>
            <span className="block mt-2">Without Code</span>
          </h1>
          
          {/* Show paragraph immediately */}
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="availability" content="https://schema.org/PreOrder" />
            Launch your digital product with AI-powered simplicity. From concept to customer — all without writing a single line of code.
          </p>
          
          {/* Show CTA elements immediately */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 relative">
            {!showCTA ? (
              <button 
                onClick={handleJoinWaitlistClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-emphasized transform hover:-translate-y-1 btn-pulse"
                aria-label="Join Waitlist"
              >
                <span>Join Waitlist</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            ) : (
              <div className="opacity-0 h-14">
                {/* Invisible placeholder with same height as button */}
              </div>
            )}
            
            {/* Absolutely positioned form that appears on top without shifting layout - keep this animation */}
            {showCTA && (
              <div className="absolute top-0 left-0 z-10 w-[320px] sm:w-[400px] glassmorphism p-6 rounded-xl shadow-lg animate-scaleIn" role="dialog" aria-labelledby="waitlist-title">
                <h2 id="waitlist-title" className="text-lg font-semibold mb-4 text-slate-900">Join our exclusive waitlist</h2>
                <CTAForm />
              </div>
            )}
          </div>
        </div>
        
        {/* Show image immediately without transition */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-indigo-100/30 rounded-2xl transform rotate-3 scale-105"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft overflow-hidden hover-lift">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <img 
              src={launchSvg}
              alt="AI-powered product launch platform illustration showing the journey from idea to launch"
              className="w-full h-auto"
            />
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 text-sm text-slate-800 font-medium border border-slate-100 hover-scale">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
                Launching made simple
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section with improved transition - keep the scroll animations */}
      <div className="max-w-7xl mx-auto mt-28 px-6" id="how-it-works" itemScope itemType="https://schema.org/HowTo">
        <meta itemProp="name" content="How to Launch Your Product with VentureVibes" />
        <div className="text-center mb-16 reveal reveal-up">
          <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full mb-4 hover-scale">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" itemProp="description">Your Journey to a Successful Launch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Follow our proven three-step process to transform your idea into a market-ready product.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-soft text-center relative reveal reveal-left hover-lift transition-standard" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="1" />
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div className="h-12 w-12 mx-auto mb-4 text-indigo-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M10 21h7a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v11m0 5l4.879-4.879m0 0a3 3 0 1 0 4.243-4.242 3 3 0 0 0-4.243 4.242z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" itemProp="name">Define Your Project</h3>
            <p className="text-slate-600" itemProp="text">Tell us about your idea and goals, and our AI will validate your concept and analyze your project's specific needs</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-soft text-center relative reveal reveal-up hover-lift transition-standard delay-100" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="2" />
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div className="h-12 w-12 mx-auto mb-4 text-blue-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" itemProp="name">Get Your AI Toolkit & Roadmap</h3>
            <p className="text-slate-600" itemProp="text">Receive personalized AI tool recommendations and a structured roadmap for your launch</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-soft text-center relative reveal reveal-right hover-lift transition-standard delay-200" itemProp="step" itemScope itemType="https://schema.org/HowToStep">
            <meta itemProp="position" content="3" />
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div className="h-12 w-12 mx-auto mb-4 text-green-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2" itemProp="name">Ship with Confidence</h3>
            <p className="text-slate-600" itemProp="text">Access our curated library of no-code solutions covering the entire tech product lifecycle, from ideation to launch and growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};