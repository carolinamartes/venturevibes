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
    <header className="absolute top-0 left-0 right-0 bg-transparent z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="VentureVibes Logo"
            className="h-9 w-auto"
          />
          <span className="text-indigo-600 text-xl font-extrabold">VentureVibes</span>
        </div>

        <Button 
          onClick={handleClick} 
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};