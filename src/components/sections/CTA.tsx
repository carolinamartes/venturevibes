
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';

export function CTA() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8" id="cta">
      <div className="container mx-auto text-center">
        <> <h2 className="text-3xl font-bold mb-6">
          Join Our Waitlist
        </h2>
          <CTAForm center={true} />
        </>
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
              Subscribe
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
