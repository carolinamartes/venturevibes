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
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50/20 via-slate-50 to-white relative overflow-hidden">
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
            VentureVibes helps you avoid these common pitfalls by providing AI-powered guidance, 
            structured development paths, and proven strategies for successful product launches.
          </p>
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