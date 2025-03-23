import { Card } from "@/components/ui/card";

export const About = () => {
  const values = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"></path></svg>,
      title: "Tech Wizards",
      description: "We live and breathe product development. It's not just what we do – it's who we are."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      title: "Founder-First",
      description: "We've been in your shoes. Now we're here to make your journey easier than ours was."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
      title: "Results Driven",
      description: "We're all about measurable impact. Every feature we build is designed to move your project forward."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-indigo-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Who We Are</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Hey there! 👋 We're a team of software engineers and startup veterans who've been where you are. We've taken the complex world of tech and made it accessible to everyone.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-6 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
              </div>
              <p className="text-slate-600">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-6 text-white/90">
              The AI revolution has made coding more accessible than ever. But we noticed something missing: support for all the other crucial aspects of building successful products.
            </p>
            <p className="text-lg mb-6 text-white/90">
              That's why we created a platform that goes beyond just code. We combine AI capabilities with strategic guidance to help you navigate every step of your product journey.
            </p>
            <p className="text-lg text-white/90">
              Our mission is simple: empower creators to build remarkable products, regardless of their technical background. Because great ideas deserve the chance to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 