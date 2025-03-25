import { Card } from "@/components/ui/card";
import spaceBg from "@/assets/undraw_outer-space_qey5.svg";

const stats = [
  {
    title: "Insecure Code Generation",
    value: "50%",
    description: "Existing research has shown that AI code generation models frequently output insecure code, with almost half of the code snippets containing impactful bugs that could lead to malicious exploitation.",
    source: "CSET Report",
    sourceLink: "https://cset.georgetown.edu/publication/cybersecurity-risks-of-ai-generated-code/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>,
    color: "from-red-400 to-rose-500"
  },
  {
    title: "Lack of Explainability",
    value: "High",
    description: "AI-generated code often lacks explainability, making it challenging to understand and justify decisions, especially in regulated industries.",
    source: "Snyk Blog",
    sourceLink: "https://snyk.io/blog/4-ai-coding-risks/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>,
    color: "from-yellow-400 to-amber-500"
  },
  {
    title: "Delivery Stability",
    value: "-7.2%",
    description: "AI-generated code can lead to a 7.2% decrease in delivery stability, impacting project timelines and quality assurance.",
    source: "LeadDev Article",
    sourceLink: "https://leaddev.com/software-quality/how-ai-generated-code-accelerates-technical-debt",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>,
    color: "from-green-400 to-teal-500"
  },
];

export const MarketReality = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-purple-50/20 via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={spaceBg} alt="Abstract tech background pattern" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-rose-600 bg-rose-100 rounded-full mb-4">Reality Check</span>
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">The Pitfalls of AI Coding Without Guidance</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            While AI has democratized coding and accelerated development, it creates unique challenges that require careful navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm border-0 rounded-xl modern-card overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}"></div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-6`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{stat.title}</h3>
              <div className="text-4xl font-black mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-slate-600 mb-5 leading-relaxed">{stat.description}</p>
              <a 
                href={stat.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-slate-500 hover:text-slate-800 transition-colors link-hover-effect"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Source: {stat.source}
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glassmorphism p-8 rounded-xl max-w-3xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed">
              VentureVibes helps you harness the power of AI-assisted development while avoiding these pitfalls. 
              Our approach combines AI's creative potential with structured guidance, proven best practices, 
              and strategic frameworks to create scalable, secure, and maintainable digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

