import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";


export const Header = () => {
  const handleClick = () => {
    const ctaElement = document.getElementById('cta');
    ctaElement?.scrollIntoView({ behavior: 'smooth' });
    const inputElement = ctaElement?.querySelector('input');
    inputElement?.focus();
  }
  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Venture Vibes Logo" 
            className="h-8 w-auto"
          />
                  <span className="text-[#2563EB] text-xl font-bold"> Venture Vibes </span>
        </div>

        <Button onClick={handleClick} className="!rounded-button bg-gradient-to-r from-[rgb(37,99,235)] to-indigo-600 hover:from-[rgb(37,99,235)] hover:to-indigo-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">Sign Up</Button>
      </div>
    </header>
  );
};