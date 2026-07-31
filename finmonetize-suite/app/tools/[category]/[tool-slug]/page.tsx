import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AdContainer from '@/components/ads/AdContainer';
import InContentAd from '@/components/ads/InContentAd';
import SidebarAd from '@/components/ads/SidebarAd';

// Client components imported separately
import AdSenseRpmCalculator from '@/components/calculators/AdSenseRpmCalculator';
import MortgageAmortization from '@/components/calculators/MortgageAmortization';
import LegalFeeEstimator from '@/components/calculators/LegalFeeEstimator';

interface ToolPageProps {
  params: Promise<{
    category: string;
    'tool-slug': string;
  }>;
}

// Mock data for tools - in production, this would come from a CMS or database
const toolsData: Record<string, Record<string, {
  title: string;
  description: string;
  content: string;
  calculator: 'rpm' | 'mortgage' | 'legal' | null;
  keywords: string[];
}>> = {
  'adsense-tools': {
    'rpm-calculator': {
      title: 'AdSense RPM Calculator - Maximize Your Revenue',
      description: 'Calculate your AdSense Revenue Per Mille (RPM) and optimize your ad strategy with our free calculator tool.',
      content: generateRpmContent(),
      calculator: 'rpm',
      keywords: ['adsense rpm', 'revenue calculator', 'ad revenue', 'cpm calculator'],
    },
    'ctr-optimizer': {
      title: 'AdSense CTR Optimizer Guide',
      description: 'Learn how to optimize your Click-Through Rate (CTR) for better AdSense performance.',
      content: generateGenericContent('CTR Optimization'),
      calculator: null,
      keywords: ['adsense ctr', 'click through rate', 'ad optimization'],
    },
  },
  'finance-tools': {
    'mortgage-calculator': {
      title: 'Mortgage Amortization Calculator - Plan Your Payments',
      description: 'Calculate your mortgage payments, amortization schedule, and total interest with our comprehensive calculator.',
      content: generateMortgageContent(),
      calculator: 'mortgage',
      keywords: ['mortgage calculator', 'amortization schedule', 'home loan', 'mortgage payments'],
    },
    'loan-comparison': {
      title: 'Loan Comparison Tool',
      description: 'Compare different loan options to find the best rates and terms for your financial needs.',
      content: generateGenericContent('Loan Comparison'),
      calculator: null,
      keywords: ['loan comparison', 'interest rates', 'personal loan'],
    },
  },
  'legal-tools': {
    'fee-estimator': {
      title: 'Legal Fee Estimator - Know Your Costs',
      description: 'Estimate legal fees for various case types with our comprehensive legal fee calculator.',
      content: generateLegalContent(),
      calculator: 'legal',
      keywords: ['legal fees', 'attorney costs', 'lawyer fees', 'legal expenses'],
    },
    'settlement-calculator': {
      title: 'Settlement Calculator',
      description: 'Estimate potential settlement amounts for various legal cases.',
      content: generateGenericContent('Settlement Calculation'),
      calculator: null,
      keywords: ['settlement calculator', 'legal settlement', 'compensation'],
    },
  },
};

function generateRpmContent(): string {
  return `
    <h2 class="text-2xl font-bold mb-4">Understanding AdSense RPM</h2>
    <p class="mb-4">Revenue Per Mille (RPM) is one of the most critical metrics for publishers using Google AdSense. It represents your estimated earnings for every 1,000 pageviews you receive. Unlike CPM (Cost Per Mille), which is what advertisers pay, RPM is what publishers earn.</p>
    
    <h3 class="text-xl font-semibold mb-3">How RPM is Calculated</h3>
    <p class="mb-4">The formula for calculating RPM is straightforward:</p>
    <div class="bg-gray-100 p-4 rounded-lg mb-6 font-mono">RPM = (Estimated Earnings / Number of Pageviews) × 1000</div>
    
    <p class="mb-4">For example, if you earned $50 from 10,000 pageviews, your RPM would be $5.00. This metric helps you understand the effectiveness of your ad placements and content strategy.</p>
    
    <h3 class="text-xl font-semibold mb-3">Factors Affecting Your RPM</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Niche and Industry:</strong> Finance, legal, and technology niches typically have higher RPMs due to higher advertiser competition.</li>
      <li><strong>Geographic Location:</strong> Traffic from countries like the US, UK, and Canada generally commands higher RPMs.</li>
      <li><strong>Ad Placement:</strong> Strategic placement of ads above the fold and within content can significantly improve RPM.</li>
      <li><strong>Content Quality:</strong> High-quality, original content attracts better-paying advertisers.</li>
      <li><strong>Seasonality:</strong> RPM often increases during Q4 due to holiday advertising spending.</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Strategies to Improve Your RPM</h3>
    <p class="mb-4">Optimizing your RPM requires a multi-faceted approach:</p>
    
    <h4 class="text-lg font-medium mb-2">1. Optimize Ad Placements</h4>
    <p class="mb-4">Place ads where they're most visible without compromising user experience. Common high-performing positions include:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Above the fold, near the main content</li>
      <li>Within article content (after the first or second paragraph)</li>
      <li>In the sidebar (for desktop users)</li>
      <li>At the end of articles</li>
    </ul>
    
    <h4 class="text-lg font-medium mb-2">2. Focus on High-Value Content</h4>
    <p class="mb-4">Create content around topics that attract high-paying advertisers. Financial advice, legal information, software reviews, and business insights typically command higher CPC rates.</p>
    
    <h4 class="text-lg font-medium mb-2">3. Improve Site Speed</h4>
    <p class="mb-4">Faster loading pages lead to better user engagement and more ad impressions. Use tools like Google PageSpeed Insights to identify and fix performance issues.</p>
    
    <h4 class="text-lg font-medium mb-2">4. Target High-Value Geographies</h4>
    <p class="mb-4">While you can't control where your visitors come from, creating content that appeals to audiences in high-RPM countries can naturally increase your earnings.</p>
    
    <h3 class="text-xl font-semibold mb-3">Common RPM Benchmarks</h3>
    <p class="mb-4">RPM varies widely across different niches and traffic sources. Here are some general benchmarks:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Finance & Insurance:</strong> $10 - $50+ RPM</li>
      <li><strong>Legal Services:</strong> $8 - $40 RPM</li>
      <li><strong>Technology:</strong> $5 - $25 RPM</li>
      <li><strong>Health & Wellness:</strong> $4 - $20 RPM</li>
      <li><strong>Lifestyle & Entertainment:</strong> $2 - $10 RPM</li>
    </ul>
    
    <p class="mb-4">Remember, these are general ranges. Your actual RPM will depend on many factors including your specific audience, content quality, and ad optimization strategies.</p>
    
    <h3 class="text-xl font-semibold mb-3">Using This Calculator</h3>
    <p class="mb-4">Our AdSense RPM Calculator helps you quickly determine your current RPM and project potential earnings. Simply input your estimated earnings and pageviews, and the calculator will show you your RPM along with projections for different traffic levels.</p>
    
    <p class="mb-4">Regular monitoring of your RPM can help you identify trends, measure the impact of changes to your site, and make data-driven decisions to maximize your advertising revenue.</p>
  `;
}

function generateMortgageContent(): string {
  return `
    <h2 class="text-2xl font-bold mb-4">Understanding Mortgage Amortization</h2>
    <p class="mb-4">A mortgage amortization schedule is a detailed table that shows each mortgage payment over the life of your loan. It breaks down how much of each payment goes toward principal versus interest, helping you understand the true cost of homeownership.</p>
    
    <h3 class="text-xl font-semibold mb-3">How Mortgage Amortization Works</h3>
    <p class="mb-4">When you take out a mortgage, your monthly payment remains constant (for fixed-rate loans), but the allocation between principal and interest changes over time:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Early Years:</strong> Most of your payment goes toward interest, with a smaller portion reducing the principal.</li>
      <li><strong>Later Years:</strong> The balance shifts, with more of your payment going toward principal reduction.</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">The Amortization Formula</h3>
    <p class="mb-4">The monthly payment is calculated using this formula:</p>
    <div class="bg-gray-100 p-4 rounded-lg mb-6 font-mono text-sm">M = P[r(1+r)^n]/[(1+r)^n-1]</div>
    <p class="mb-4">Where:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>M = Monthly payment</li>
      <li>P = Principal loan amount</li>
      <li>r = Monthly interest rate (annual rate ÷ 12)</li>
      <li>n = Total number of payments (loan term in years × 12)</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Benefits of Understanding Amortization</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Better Financial Planning:</strong> Know exactly how much interest you'll pay over the life of the loan.</li>
      <li><strong>Extra Payment Strategy:</strong> See how additional payments can reduce your loan term and save on interest.</li>
      <li><strong>Refinancing Decisions:</strong> Determine if refinancing makes sense based on your current amortization stage.</li>
      <li><strong>Tax Planning:</strong> Understand your deductible interest payments for tax purposes.</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">The Impact of Extra Payments</h3>
    <p class="mb-4">Making extra payments toward your principal can dramatically reduce both your loan term and total interest paid. Even small additional amounts can make a significant difference:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>An extra $100/month on a 30-year mortgage could save you tens of thousands in interest and shave years off your loan.</li>
      <li>Bi-weekly payments (half your monthly payment every two weeks) result in one extra full payment per year.</li>
      <li>Lump-sum payments toward principal have an immediate impact on your amortization schedule.</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Fixed vs. Adjustable Rate Mortgages</h3>
    <p class="mb-4">This calculator focuses on fixed-rate mortgages, where your interest rate and payment remain constant. Adjustable-rate mortgages (ARMs) have payments that can change over time based on market conditions, making their amortization schedules more complex to predict.</p>
    
    <h3 class="text-xl font-semibold mb-3">Using This Calculator</h3>
    <p class="mb-4">Our Mortgage Amortization Calculator provides a complete payment schedule showing:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Monthly payment amount</li>
      <li>Total interest paid over the loan term</li>
      <li>Payoff date</li>
      <li>Detailed year-by-year or payment-by-payment breakdown</li>
      <li>Impact of extra monthly payments</li>
    </ul>
    
    <p class="mb-4">Whether you're a first-time homebuyer or considering refinancing, understanding your amortization schedule is crucial for making informed financial decisions about your largest investment.</p>
  `;
}

function generateLegalContent(): string {
  return `
    <h2 class="text-2xl font-bold mb-4">Understanding Legal Fees</h2>
    <p class="mb-4">Legal fees can vary dramatically depending on the type of case, complexity, attorney experience, and geographic location. Our Legal Fee Estimator helps you understand potential costs before committing to legal representation.</p>
    
    <h3 class="text-xl font-semibold mb-3">Common Legal Fee Structures</h3>
    <p class="mb-4">Attorneys typically use one or more of the following fee structures:</p>
    
    <h4 class="text-lg font-medium mb-2">Hourly Rates</h4>
    <p class="mb-4">Most common for ongoing legal work. Rates vary by:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Attorney Experience:</strong> Junior associates may charge $150-250/hour, while senior partners can charge $400-800+/hour.</li>
      <li><strong>Practice Area:</strong> Specialized fields like intellectual property or securities law often command higher rates.</li>
      <li><strong>Geographic Location:</strong> Major metropolitan areas typically have higher rates than rural areas.</li>
    </ul>
    
    <h4 class="text-lg font-medium mb-2">Flat Fees</h4>
    <p class="mb-4">Common for routine matters like:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Simple wills and estate planning ($300-1,500)</li>
      <li>Uncontested divorces ($1,500-5,000)</li>
      <li>Traffic violations ($200-800)</li>
      <li>Basic contract review ($500-2,000)</li>
    </ul>
    
    <h4 class="text-lg font-medium mb-2">Contingency Fees</h4>
    <p class="mb-4">Common in personal injury and employment cases. The attorney receives a percentage (typically 33-40%) of any settlement or award. No upfront fees, but the percentage can be substantial for large settlements.</p>
    
    <h3 class="text-xl font-semibold mb-3">Average Legal Fees by Case Type</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Family Law:</strong> Divorce ($5,000-25,000+), child custody ($3,000-15,000)</li>
      <li><strong>Criminal Defense:</strong> Misdemeanors ($1,500-5,000), felonies ($5,000-50,000+)</li>
      <li><strong>Personal Injury:</strong> Typically contingency-based (33-40% of recovery)</li>
      <li><strong>Business Formation:</strong> LLC formation ($500-2,000), complex partnerships ($2,000-10,000+)</li>
      <li><strong>Immigration:</strong> Green card applications ($2,000-8,000), citizenship ($1,000-3,000)</li>
      <li><strong>Bankruptcy:</strong> Chapter 7 ($1,000-3,000), Chapter 13 ($2,500-5,000)</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Additional Legal Costs</h3>
    <p class="mb-4">Beyond attorney fees, consider these additional expenses:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Court Filing Fees:</strong> $100-500+ depending on the court and case type</li>
      <li><strong>Expert Witnesses:</strong> $200-500+/hour, plus preparation time</li>
      <li><strong>Discovery Costs:</strong> Depositions, document production, investigations</li>
      <li><strong>Administrative Fees:</strong> Copying, postage, courier services</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Factors Affecting Legal Costs</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li><strong>Case Complexity:</strong> More complex cases require more attorney time and expertise.</li>
      <li><strong>Opposing Party:</strong> Litigating against well-funded opponents often increases costs.</li>
      <li><strong>Jurisdiction:</strong> Some courts have longer timelines and more procedural requirements.</li>
      <li><strong>Settlement vs. Trial:</strong> Cases that go to trial typically cost 3-5x more than settled cases.</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Tips for Managing Legal Costs</h3>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Get fee agreements in writing before work begins</li>
      <li>Ask about alternative fee arrangements</li>
      <li>Be organized and responsive to reduce billable hours</li>
      <li>Consider limited scope representation for specific tasks</li>
      <li>Explore legal aid or pro bono options if eligible</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Using This Estimator</h3>
    <p class="mb-4">Our Legal Fee Estimator provides a rough estimate based on case type, complexity, and billing structure. Remember that actual fees can vary significantly, so always consult with attorneys directly for accurate quotes. This tool is meant for initial planning purposes only.</p>
    
    <p class="italic text-gray-600 mt-6"><strong>Disclaimer:</strong> This estimator provides general information only and does not constitute legal advice. Actual legal fees vary widely. Always consult with qualified attorneys for specific fee quotes and legal guidance.</p>
  `;
}

function generateGenericContent(topic: string): string {
  return `
    <h2 class="text-2xl font-bold mb-4">About ${topic}</h2>
    <p class="mb-4">Welcome to our comprehensive ${topic} tool. This resource is designed to help you make informed decisions and optimize your results in this important area.</p>
    
    <h3 class="text-xl font-semibold mb-3">Why This Matters</h3>
    <p class="mb-4">Understanding ${topic.toLowerCase()} is crucial for achieving your goals. Whether you're a beginner or an experienced professional, having the right tools and information can make a significant difference in your outcomes.</p>
    
    <h3 class="text-xl font-semibold mb-3">Key Considerations</h3>
    <p class="mb-4">When approaching ${topic.toLowerCase()}, there are several factors to consider:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Your specific situation and requirements</li>
      <li>Current market conditions and trends</li>
      <li>Available resources and constraints</li>
      <li>Long-term goals and objectives</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Best Practices</h3>
    <p class="mb-4">Based on industry standards and expert recommendations, here are some best practices for ${topic.toLowerCase()}:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2">
      <li>Start with thorough research and analysis</li>
      <li>Set clear, measurable objectives</li>
      <li>Monitor progress regularly and adjust as needed</li>
      <li>Seek professional advice when appropriate</li>
    </ul>
    
    <h3 class="text-xl font-semibold mb-3">Getting Started</h3>
    <p class="mb-4">Use our interactive tool above to get personalized insights and calculations. Input your specific parameters to see detailed results and recommendations tailored to your situation.</p>
    
    <p class="mb-4">Remember, while tools like this provide valuable guidance, they should be used in conjunction with professional advice for important decisions.</p>
  `;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { category, 'tool-slug': toolSlug } = await params;
  
  const categoryTools = toolsData[category];
  const tool = categoryTools?.[toolSlug];
  
  if (!tool) {
    return {
      title: 'Tool Not Found | FinMonetize Suite',
      description: 'The requested tool could not be found.',
    };
  }
  
  return {
    title: `${tool.title} | FinMonetize Suite`,
    description: tool.description,
    keywords: tool.keywords.join(', '),
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: tool.title,
      description: tool.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { category, 'tool-slug': toolSlug } = await params;
  
  const categoryTools = toolsData[category];
  const tool = categoryTools?.[toolSlug];
  
  if (!tool) {
    notFound();
  }
  
  // Generate JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.title,
    description: tool.description,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <main className="lg:col-span-3">
            {/* Header Ad Slot */}
            <AdContainer slotType="header" className="mb-8" />
            
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{tool.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{tool.description}</p>
              
              {/* Interactive Calculator */}
              {tool.calculator && (
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
                  {tool.calculator === 'rpm' && <AdSenseRpmCalculator />}
                  {tool.calculator === 'mortgage' && <MortgageAmortization />}
                  {tool.calculator === 'legal' && <LegalFeeEstimator />}
                </div>
              )}
              
              {/* In-Content Ad */}
              <InContentAd className="my-8" />
              
              {/* Editorial Content */}
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tool.content }}
              />
            </article>
          </main>
          
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Sidebar Ad */}
              <SidebarAd />
              
              {/* Quick Navigation */}
              <nav className="bg-white rounded-lg shadow p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Related Tools</h3>
                <ul className="space-y-2">
                  {Object.entries(categoryTools || {}).map(([slug, t]) => (
                    slug !== toolSlug && (
                      <li key={slug}>
                        <a
                          href={`/tools/${category}/${slug}`}
                          className="text-blue-600 hover:text-blue-800 text-sm"
                        >
                          {t.title.split(' - ')[0]}
                        </a>
                      </li>
                    )
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
