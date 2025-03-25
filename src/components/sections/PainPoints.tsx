import { Card } from "@/components/ui/card";

export const PainPoints = () => {
  const opportunities = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
      title: "Unified Development Hub",
      description: "Experience a seamless journey from idea to launch with our all-in-one platform",
      color: "from-blue-400 to-indigo-500",
      features: [
        "Integrated AI tools for every stage of development",
        "Smart project timeline and milestone tracking",
        "One dashboard for all your development needs"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      title: "Smart Tool Selection",
      description: "Discover the perfect AI tools for your project with personalized recommendations",
      color: "from-purple-400 to-purple-600",
      features: [
        "AI-powered tool matching for your unique needs",
        "Clear comparisons of top development tools",
        "An exhaustive library of AI tools and resources across all categories"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
      title: "Prompt Excellence",
      description: "Master AI tools with our curated library of proven, effective prompts",
      color: "from-pink-400 to-red-500",
      features: [
        "Ready-to-use prompt templates for rapid development",
        "Smart prompt optimization for better results",
        "Collaborative prompt library with expert insights"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>,
      title: "Guided Success Path",
      description: "Follow our proven roadmap with customized steps for your project",
      color: "from-green-400 to-teal-500",
      features: [
        "Customized project templates for quick starts",
        "Smart progress tracking for steady momentum",
        "AI-powered task optimization"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-purple-50/20">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">Our Solutions</span>
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">What We Offer</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to turn your vision into reality, all in one place.
          </p>
        </div>

        {/* Mobile Card Layout - Updated with better scroll handling */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto snap-x scrollbar-hide -mx-6 px-6">
            <div className="flex space-x-6 min-w-full pb-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="p-8 shadow-soft hover:shadow-xl transition-all duration-300 bg-white border-0 snap-start flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-1rem)] rounded-xl modern-card">
                  <div className="flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${opportunity.color} flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {opportunity.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {opportunity.title}
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">{opportunity.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Key Features</h4>
                      <ul className="space-y-3">
                        {opportunity.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start text-sm text-slate-600">
                            <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Table Layout - Modern Design */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="bg-white rounded-xl shadow-soft">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="py-5 px-6 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider">Feature</th>
                  <th className="py-5 px-6 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider">Description</th>
                  <th className="py-5 px-6 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider">Benefits</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.map((opportunity, index) => (
                  <tr 
                    key={index}
                    className="group hover:bg-slate-50 transition-colors duration-200 border-b border-slate-100 last:border-b-0"
                  >
                    <td className="py-6 px-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${opportunity.color} flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                          <div className="text-white">
                            {opportunity.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                            {opportunity.title}
                          </h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <p className="text-slate-600 leading-relaxed">{opportunity.description}</p>
                    </td>
                    <td className="py-6 px-6">
                      <ul className="space-y-3">
                        {opportunity.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start text-slate-600 group-hover:text-slate-700 transition-colors">
                            <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

