import { Card } from "@/components/ui/card";
import spaceBg from "@/assets/undraw_outer-space_qey5.svg";

const stats = [
  {
    title: "Startup Success Rate",
    value: "10%",
    description: "Only 10% of startups succeed long-term, with 90% failing within their first few years",
    source: "Harvard Business Review",
    sourceLink: "https://hbr.org/2021/05/why-start-ups-fail",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V10"></path>
      <path d="M18 20V4"></path>
      <path d="M6 20v-4"></path>
    </svg>,
    color: "from-green-400 to-emerald-500"
  },
  {
    title: "Market Need Failure",
    value: "35%",
    description: "35% of startups fail because they build products with no market demand",
    source: "Stripe",
    sourceLink: "https://stripe.com/gb/resources/more/startup-statistics-you-should-know",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="16"></line>
      <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>,
    color: "from-red-400 to-rose-500"
  },
  {
    title: "Need to Pivot",
    value: "75%",
    description: "75% of venture-backed startups undergo at least one major pivot during their journey.",
    source: "GoingVC",
    sourceLink: "https://www.goingvc.com/post/surviving-the-startup-gauntlet-lessons-in-failure-and-success",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    color: "from-blue-400 to-indigo-500"
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
          <span className="inline-block px-3 py-1 text-sm font-medium text-rose-600 bg-rose-100 rounded-full mb-4">Market Insights</span>
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">The Reality of Product Launches</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Understanding the challenges that most products face helps us provide better solutions.
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
              VentureVibes helps you avoid these common pitfalls by providing AI-powered guidance, 
              structured development paths, and proven strategies for successful product launches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const marketRealityData = {
  stats: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>,
      title: "Strategic Agility",
      value: "75%",
      description: "Our AI helps you make smart pivots and adaptations, following the path of successful venture-backed startups",
      source: "Harvard Business School",
      sourceLink: "https://hbr.org/2021/05/why-start-ups-fail",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>,
      title: "Market Opportunity",
      value: "35%",
      description: "Our AI-powered market research helps you identify and capture untapped market potential",
      source: "Stripe",
      sourceLink: "https://stripe.com/gb/resources/more/startup-statistics-you-should-know",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10"></path>
        <path d="M18 20V4"></path>
        <path d="M6 20v-4"></path>
      </svg>,
      title: "Growth Acceleration",
      value: "10x",
      description: "Our proven framework accelerates your path to product-market fit and sustainable growth",
      source: "GoingVC",
      sourceLink: "https://www.goingvc.com/post/surviving-the-startup-gauntlet-lessons-in-failure-and-success",
      color: "from-purple-400 to-purple-600"
    }
  ],
  headline: "Adapt or Fade: Why Flexibility Defines Startup Success",
  subheadline: "In fast-moving tech markets, the ability to pivot is more valuable than perfect planning",
}; 