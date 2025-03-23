import logo from "@/assets/venture_vibes_logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Venture Vibes Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white font-['Inter']">Venture Vibes</span>
            </div>
            <p className="text-slate-300">Empowering the next generation of creators with AI-powered development tools.</p>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-300">
          <p>&copy; 2025 Venture Vibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 