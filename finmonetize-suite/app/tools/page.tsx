import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools Directory - FinMonetize Suite",
  description: "Browse all financial calculators and monetization tools. AdSense RPM calculator, mortgage amortization, legal fee estimator, and more.",
};

export default function ToolsDirectory() {
  const categories = [
    {
      name: "Monetization",
      slug: "monetization",
      description: "Tools to help you maximize your ad revenue and optimize monetization strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      tools: [
        {
          name: "AdSense RPM Calculator",
          slug: "adsense-rpm-calculator",
          description: "Calculate your Revenue Per Mille (RPM) and estimate your AdSense earnings based on page views and revenue.",
        },
      ],
    },
    {
      name: "Finance",
      slug: "finance",
      description: "Financial planning tools for mortgages, loans, and investment calculations.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      tools: [
        {
          name: "Mortgage Amortization Calculator",
          slug: "mortgage-amortization",
          description: "Create detailed amortization schedules for your mortgage with principal and interest breakdowns.",
        },
      ],
    },
    {
      name: "Legal",
      slug: "legal",
      description: "Tools to help you understand and estimate legal costs and fees.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      tools: [
        {
          name: "Legal Fee Estimator",
          slug: "legal-fee-estimator",
          description: "Estimate potential legal fees based on case type, complexity, and attorney rates.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tools</h1>
        <p className="text-lg text-gray-600 mb-12">
          Browse our comprehensive collection of financial calculators and monetization tools.
        </p>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category.slug}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <a
                    key={tool.slug}
                    href={`/tools/${category.slug}/${tool.slug}`}
                    className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-300 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                    <span className="inline-block mt-4 text-blue-600 font-medium text-sm">
                      Open Tool →
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
