import { Card } from "@/components/ui/card";
import spaceBg from "@/assets/undraw_outer-space_qey5.svg";

const stats = [
  {
    title: "Startup Success Rate",
    value: "10%",
    description: "Only 10% of startups succeed long-term, with 90% failing within their first few years",
    source: "Bureau of Labor Statistics",
    sourceLink: "https://www.bls.gov/bdm/entrepreneurship/entrepreneurship.htm",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Market Need Failure",
    value: "42%",
    description: "42% of startups fail because they build products with no market demand",
    source: "CB Insights",
    sourceLink: "https://www.cbinsights.com/research/startup-failure-post-mortem/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path><path d="M21 3v9h-9"></path></svg>,
    color: "from-red-400 to-rose-500"
  },
  {
    title: "Tech Project Failure",
    value: "19%",
    description: "19% of tech projects completely fail, and 52% face challenges like cost overruns",
    source: "Project Management Institute",
    sourceLink: "https://www.pmi.org/learning/library/pulse-profession-navigating-complexity-11894",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    color: "from-blue-400 to-indigo-500"
  },
];

export const MarketReality = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src={spaceBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">The Reality of Product Launches</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Understanding the challenges that most products face helps us provide better solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white/90 backdrop-blur-sm border-0">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">{stat.title}</h3>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-slate-600 text-sm mb-2">{stat.description}</p>
              <a 
                href={stat.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                Source: {stat.source}
              </a>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Venture Vibes helps you avoid these common pitfalls by providing AI-powered guidance, 
            structured development paths, and proven strategies for successful product launches.
          </p>
        </div>
      </div>
    </section>
  );
}; 