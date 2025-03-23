import { Button } from "@/components/ui/button";
import logo from "@/assets/venture_vibes_logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Venture Vibes Logo" 
            className="h-8 w-auto"
          />
          <span className="text-2xl font-bold text-[rgb(29,78,216)] font-['Inter'] tracking-wide hover:text-[rgb(37,99,235)] transition-all duration-300">Venture Vibes</span>
        </div>
        <Button className="!rounded-button bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">Sign Up</Button>
      </div>
    </header>
  );
}; 