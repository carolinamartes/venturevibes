import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Launch Your Product?
        </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Join our waitlist on Product Hunt and be among the first to access Venture Vibes's AI-powered launch platform.
        </p>
        <iframe
          src="YOUR_PRODUCT_HUNT_EMBED_URL"
          className="w-full max-w-md mx-auto h-[120px] rounded-lg"
          frameBorder="0"
        />
      </div>
    </section>
  );
}; 