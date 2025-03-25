import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="VentureVibes Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white font-['Inter']">VentureVibes</span>
            </div>
            <p className="text-slate-300">Guiding creators from idea to launch with AI-powered tools and no-code solutions.</p>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-300">
          <p>&copy; 2025 VentureVibes. All rights reserved.</p>
          
          {/* Pre-market disclaimer */}
          <div className="text-xs text-slate-400 text-center mt-4">
            VentureVibes is currently in development. All features and information showcased represent our vision for the final product and may be subject to change before launch.
          </div>
        </div>
      </div>
    </footer>
  );
}; 