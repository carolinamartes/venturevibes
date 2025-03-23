
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';

export function CTA() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8" id="cta">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
        We’ve Been There Too
        </h2>

        <p className="mb-4">
          Ever found yourself in an endless loop, asking your AI to fix the code—only to break something else? Yeah, us too.
        </p>
        <p className="mb-4">
          Building without a clear roadmap is frustrating. You start strong, hit a wall, and suddenly your “simple project” is collecting dust.
        </p>
        <p className="mb-4">
          That’s why we built VentureVibes—to help you go from idea to launch without the chaos.
        </p>

        <p className="mb-6">
          <strong>Join the waitlist today</strong>
        </p>
        <CTAForm center={true} />
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
        <form onSubmit={handleSubmit} method="POST" className={center ? "max-w-md mx-auto" : "max-w-md "}>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              required
            />
            <Button type="submit">
              Join
            </Button>
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </form>
      ) : (
        <p className="text-green-600">
          Thanks for subscribing! We'll be in touch soon.
        </p>
      )}
    </>

  );
}
