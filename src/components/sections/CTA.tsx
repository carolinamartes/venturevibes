import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';

export function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50/30 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full mb-4">Join Us</span>
            <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              We've Been There Too
            </h2>
          </div>
          
          <div className="glassmorphism rounded-2xl p-8 md:p-10 shadow-soft">
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Ever found yourself in an endless loop, asking your AI to fix the code—only to break something else? <span className="font-semibold text-slate-800">Yeah, us too.</span>
              </p>
              <p>
                Building without a clear roadmap is frustrating. You start strong, hit a wall, and suddenly your "simple project" is collecting dust.
              </p>
              <p>
                That's why we built VentureVibes—to help you go from idea to launch without the chaos.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                Join the waitlist today
              </h3>
              <CTAForm center={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CTAFormProps {
  center?: boolean;
}

export const CTAForm: React.FC<CTAFormProps> = ({ center = false }) => {
  const [state, handleSubmit] = useForm("xovedzkv");

  return (
    <>
      {!state.succeeded ? (
        <form onSubmit={handleSubmit} method="POST" className={center ? "max-w-md mx-auto" : "max-w-md"}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              required
              className="rounded-lg border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
            />
            <Button 
              type="submit" 
              disabled={state.submitting}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow transition-all duration-300"
            >
              {state.submitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-rose-500 text-sm mt-2"
          />
        </form>
      ) : (
        <div className="bg-green-50 text-green-700 p-6 rounded-lg border border-green-100 shadow-sm text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold text-lg mb-1">Thanks for subscribing!</p>
          <p>We'll be in touch soon with exclusive updates.</p>
        </div>
      )}
    </>
  );
}
