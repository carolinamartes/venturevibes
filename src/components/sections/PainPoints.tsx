import { Card } from "@/components/ui/card";

export const PainPoints = () => {
  const painPoints = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
      title: "Fragmented Process",
      description: "Navigate through the complex journey from idea to launch with our unified platform",
      color: "from-blue-400 to-indigo-500",
      solutions: [
        "Seamless integration between idea generation and implementation",
        "Automated project timeline and milestone tracking",
        "Centralized dashboard for all your development tools"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      title: "Tool Confusion",
      description: "Get personalized AI tool recommendations based on your specific project needs",
      color: "from-purple-400 to-purple-600",
      solutions: [
        "AI-powered tool selection based on your project requirements",
        "Detailed comparison of different AI development tools",
        "Personalized learning paths for each recommended tool"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
      title: "Prompt Engineering Barriers",
      description: "Access our curated library of effective prompts optimized for different AI tools",
      color: "from-pink-400 to-red-500",
      solutions: [
        "Pre-built prompt templates for common development tasks",
        "AI-powered prompt optimization and testing",
        "Community-driven prompt library with ratings and reviews"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="M18 13l-6 6-6-6"></path></svg>,
      title: "Lack of Structure",
      description: "Follow clear, step-by-step guides tailored to your project requirements",
      color: "from-green-400 to-teal-500",
      solutions: [
        "Customizable project templates and workflows",
        "Interactive progress tracking and milestone management",
        "AI-guided task prioritization and scheduling"
      ]
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
      title: "Limited Community Support",
      description: "Connect with fellow non-technical creators building innovative products",
      color: "from-yellow-400 to-orange-500",
      solutions: [
        "Dedicated community forums for project collaboration",
        "Mentorship program with experienced developers",
        "Regular virtual meetups and knowledge sharing sessions"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Why Venture Vibes?</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            We understand the challenges non-technical creators face. Here's how we help overcome them.
          </p>
        </div>

        {/* Mobile Card Layout */}
        <div className="lg:hidden space-y-6">
          {painPoints.map((point, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border-0">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {point.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
              </div>
              <p className="text-slate-600 mb-4">{point.description}</p>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-slate-900">Our Solution:</h4>
                <ul className="space-y-2">
                  {point.solutions.map((solution, solutionIdx) => (
                    <li key={solutionIdx} className="flex items-start text-sm text-slate-600">
                      <svg className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Table Layout */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900">Challenge</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900">Description</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-slate-900">Our Solution</th>
              </tr>
            </thead>
            <tbody>
              {painPoints.map((point, index) => (
                <tr 
                  key={index}
                  className="group hover:bg-slate-50/50 transition-colors duration-200 border-b border-slate-100"
                >
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center`}>
                        <div className="text-white">
                          {point.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-800 transition-colors">
                          {point.title}
                        </h3>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <p className="text-slate-600">{point.description}</p>
                  </td>
                  <td className="py-6 px-6">
                    <ul className="space-y-2">
                      {point.solutions.map((solution, solutionIdx) => (
                        <li key={solutionIdx} className="flex items-start text-sm text-slate-600">
                          <svg className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{solution}</span>
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
    </section>
  );
};

