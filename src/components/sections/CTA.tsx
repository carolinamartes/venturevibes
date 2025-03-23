import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Our Waitlist
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-green-600">
            Thanks for subscribing! We'll be in touch soon.
          </p>
        )}
      </div>
    </section>
  );
} 