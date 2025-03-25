import { useState } from 'react';

const features = [
  {
    icon: 'fa-robot',
    title: 'Customized Project Insights',
    description: 'Receive a tailored roadmap designed to align with your unique project goals.',
    color: "from-blue-400 to-indigo-500",
    details: [
      "Streamline project planning and execution",
      "Leverage AI-driven personalized recommendations",
      "Effortlessly track progress with a modular roadmap"
    ]
  },
  {
    icon: 'fa-route',
    title: 'Guided Development Journey',
    description: 'Follow actionable, step-by-step guidance to transform your concept into a successful launch.',
    color: "from-purple-400 to-purple-600",
    details: [
      "Create comprehensive development blueprints",
      "Track measurable progress with defined milestones",
      "Stay on course with automated progress monitoring"
    ]
  },
  {
    icon: 'fa-book-open',
    title: 'Optimized Prompt Library',
    description: 'Leverage a curated library of prompts tailored for every stage of your development journey.',
    color: "from-pink-400 to-red-500",
    details: [
      "Craft high-impact prompts with expert guidance",
      "Receive context-aware suggestions for better results",
      "Access community-driven templates for diverse needs"
    ]
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Bespoke AI Resources',
    description: 'Discover the perfect tools and resources to supercharge every phase of your project.',
    color: "from-green-400 to-teal-500",
    details: [
      "Get recommendations for smart AI-powered tools",
      "Compare options in-depth to make informed decisions",
      "Integrate tools with step-by-step guides and tutorials"
    ]
  }
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-slate-50 to-indigo-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full mb-4">Features</span>
          <h2 className="text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">Your AI-Powered Co-Founder</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to transform your idea into a successful digital product.
          </p>
        </div>

        {/* Interactive Feature Selector - Modern Design */}
        <div className="mb-16 overflow-hidden">
          <div className="flex overflow-x-auto py-4 snap-x scrollbar-hide justify-center">
            <div className="flex gap-4 px-6">
              {features.map((feature, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFeature(idx)}
            className={`flex items-center px-6 py-3.5 rounded-full whitespace-nowrap transition-all duration-300 snap-start ${
              activeFeature === idx 
                ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                : 'bg-white border border-gray-200 hover:border-gray-300 text-slate-800 hover:shadow-md'
            }`}
          >
            <i className={`fas ${feature.icon} mr-2.5 ${activeFeature === idx ? 'text-white' : 'text-slate-700'}`}></i>
            <span className="font-medium">{feature.title}</span>
          </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Showcase - Modern Design */}
        <div className="overflow-hidden relative px-4 max-w-full">
          <div className="flex transition-all duration-500 ease-out" 
               style={{ transform: `translateX(-${activeFeature * 100}%)` }}>
            {features.map((feature, idx) => (
              <div key={idx} className="w-full flex-shrink-0 p-4">
                <div className="glassmorphism rounded-2xl shadow-soft overflow-hidden flex flex-col md:flex-row h-auto md:h-[30rem]">
                  <div className={`w-full md:w-1/2 bg-gradient-to-br ${feature.color} p-10 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/20"></div>
                      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>
                    </div>
                    <div className="text-white text-center md:text-left relative z-10">
                      <div className="bg-white/20 p-5 rounded-full inline-block mb-8 backdrop-blur-sm">
                        <i className={`fas ${feature.icon} text-4xl text-white`}></i>
                      </div>
                      <h3 className="text-3xl font-bold mb-6 leading-tight">{feature.title}</h3>
                      <p className="text-xl text-white/95 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 bg-white p-10 flex items-center justify-center">
                    <div className="max-w-lg w-full">
                      <h4 className="text-xl font-semibold mb-6 text-slate-900">Key Benefits</h4>
                      <ul className="space-y-4">
                        {feature.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start modern-card pl-2">
                            <svg className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 text-lg">{detail}</span>
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

        {/* Navigation Dots - Modern Design */}
        <div className="flex justify-center mt-10 space-x-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFeature(idx)}
              className={`transition-all duration-300 ${
                activeFeature === idx 
                  ? 'w-10 h-3 bg-indigo-600 rounded-full' 
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full'
              }`}
              aria-label={`View feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 