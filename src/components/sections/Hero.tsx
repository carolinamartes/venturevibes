
import { Badge } from "@/components/ui/badge";
import launchSvg from "@/assets/undraw_launching_szjw.svg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-6">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">Early Access</Badge>
          <h1 className="text-5xl font-bold leading-tight text-slate-900">
            From Zero to Launch
          </h1>
          <p className="text-xl text-slate-700">
            Launch your digital product with AI - no coding required. Transform your ideas into reality with our launch platform for no-code creators.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="YOUR_PRODUCT_HUNT_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#DA552F] hover:bg-[#EA653F] text-white rounded-lg transition-colors"
            >
              {/* <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/upcoming.svg" 
                alt="Product Hunt Upcoming"
                className="h-5 w-auto mr-2"
              /> */}
              Join Waitlist
            </a>
            <p className="text-sm text-slate-600">
              <i className="fas fa-users mr-2"></i>
              Join our growing community on Product Hunt
            </p>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img 
            src={launchSvg}
            alt="Launch your product to success"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}; 