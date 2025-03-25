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
    <section className="py-24 px-6 bg-gradient-to-b from-indigo-50/30 to-white" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Mission Statement */}
        <article className="text-center mb-16">
          <header>
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full mb-4">About Us</span>
            <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Who We Are</h2>
          </header>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Hey there! 👋 We're a team of software engineers and startup veterans who've been where you are. We've taken the complex world of tech and made it accessible to everyone.
          </p>
        </article>

        {/* Values */}
        <section aria-labelledby="our-values" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <h3 id="our-values" className="sr-only">Our Values</h3>
          {values.map((value, index) => (
            <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-xl transition-all duration-300 rounded-xl modern-card border-0">
              <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </section>

        {/* Story Section */}
        <aside className="mt-20 gradient-bg-animation rounded-2xl p-8 md:p-12 text-white shadow-soft overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/20"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl mb-6 text-white/95 leading-relaxed">
              AI has made coding easier, but building successful products requires more than just code.
            </p>
            <p className="text-xl text-white/95 leading-relaxed">
              We combine AI with strategic guidance to help creators build remarkable products, regardless of technical background. Because great ideas deserve to thrive.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}; 