import { useState } from 'react';

const features = [
  {
    icon: 'fa-robot',
    title: 'AI Project Assessment',
    description: 'Get a personalized roadmap based on your unique project goals and skills',
    color: "from-blue-400 to-indigo-500",
    details: [
      "AI-powered project analysis and recommendations",
      "Customized learning paths based on your goals",
      "Regular progress assessments and adjustments"
    ]
  },
  {
    icon: 'fa-route',
    title: 'Structured Development Paths',
    description: 'Follow clear, actionable steps from concept to launch',
    color: "from-purple-400 to-purple-600",
    details: [
      "Step-by-step development guides",
      "Milestone tracking and validation",
      "Automated progress monitoring"
    ]
  },
  {
    icon: 'fa-book-open',
    title: 'Prompt Library',
    description: 'Access optimized prompts for various development stages',
    color: "from-pink-400 to-red-500",
    details: [
      "Curated collection of effective prompts",
      "Context-aware prompt suggestions",
      "Community-contributed prompt templates"
    ]
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Resource Matcher',
    description: 'Discover the perfect AI tools for each phase of your project',
    color: "from-green-400 to-teal-500",
    details: [
      "AI-powered tool recommendations",
      "Detailed tool comparisons",
      "Integration guides and tutorials"
    ]
  },
  {
    icon: 'fa-chart-line',
    title: 'Progress Tracking',
    description: 'Visualize your journey with milestone tracking and achievements',
    color: "from-yellow-400 to-orange-500",
    details: [
      "Interactive progress dashboard",
      "Achievement system and rewards",
      "Performance analytics and insights"
    ]
  },
  {
    icon: 'fa-users-gear',
    title: 'Community Integration',
    description: 'Connect with like-minded creators and share experiences',
    color: "from-indigo-400 to-purple-500",
    details: [
      "Dedicated community spaces",
      "Knowledge sharing forums",
      "Collaboration opportunities"
    ]
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Your AI-Powered Co-Founder</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Everything you need to transform your idea into a successful digital product.
          </p>
        </div>

        {/* Interactive Feature Selector */}
        <div className="mb-12 relative">
          <div className="flex overflow-x-auto py-4 snap-x scrollbar-hide space-x-4 md:justify-center">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`flex items-center px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 snap-start ${
                  activeFeature === idx 
                    ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                    : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-800'
                }`}
              >
                <i className={`fas ${feature.icon} mr-2 ${activeFeature === idx ? 'text-white' : 'text-slate-700'}`}></i>
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="overflow-hidden relative">
          <div className="flex transition-all duration-500 ease-in-out" 
               style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
            {features.map((feature, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="bg-gradient-to-br rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row h-64 md:h-96">
                  <div className={`w-full md:w-1/2 bg-gradient-to-br ${feature.color} p-8 flex items-center justify-center`}>
                    <div className="text-white text-center md:text-left">
                      <div className="bg-white/20 p-4 rounded-full inline-block mb-6">
                        <i className={`fas ${feature.icon} text-3xl text-white`}></i>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-lg text-white/95">{feature.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
                    <div className="max-w-lg">
                      <h4 className="text-xl font-semibold mb-4 text-slate-900">Key Benefits</h4>
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start">
                            <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-800">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeFeature === idx ? 'bg-indigo-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 