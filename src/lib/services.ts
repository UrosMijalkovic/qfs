export interface Service {
  slug: string;
  title: string;
  category: "financial-advisory" | "business-advisory" | "sustainability-digital";
  headline: string;
  description: string;
  challenge: string[];
  approach: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  outcomes: {
    metric: string;
    description: string;
  }[];
}

export const services: Service[] = [
  // Financial Advisory Services
  {
    slug: "finance-function-outsourcing",
    title: "Finance Function Outsourcing",
    category: "financial-advisory",
    headline: "World-class finance capabilities without the overhead",
    description: "Streamline your finance operations with our comprehensive outsourcing solutions. We provide the expertise and infrastructure to run your finance function efficiently.",
    challenge: [
      "Building an in-house finance team is costly and time-consuming, especially for growing companies.",
      "Finding and retaining qualified finance professionals in competitive markets poses ongoing challenges.",
      "Scaling finance capabilities up or down with business needs requires flexibility that permanent staff cannot provide.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate current finance operations and identify optimization opportunities" },
      { title: "Design", description: "Create tailored operating model balancing in-house and outsourced functions" },
      { title: "Transition", description: "Execute seamless handover with knowledge transfer and process documentation" },
      { title: "Operate", description: "Deliver ongoing finance services with continuous improvement" },
    ],
    deliverables: [
      "Full-cycle accounting and bookkeeping",
      "Monthly close and financial reporting",
      "Accounts payable and receivable management",
      "Payroll processing and compliance",
      "Management reporting and dashboards",
      "Audit support and coordination",
    ],
    outcomes: [
      { metric: "30-40%", description: "Typical cost reduction vs. in-house operations" },
      { metric: "5 days", description: "Faster monthly close achieved" },
    ],
  },
  {
    slug: "controlling-reporting",
    title: "Controlling & Reporting",
    category: "financial-advisory",
    headline: "Reporting that drives decisions, not just documents them",
    description: "Transform your management reporting from backward-looking data dumps into forward-looking decision support.",
    challenge: [
      "Management reports arrive too late to inform decisions, becoming historical records rather than actionable intelligence.",
      "Data quality issues undermine confidence in reported numbers, leading to shadow reporting and spreadsheet chaos.",
      "Reports focus on what happened, not why it happened or what to do about it.",
    ],
    approach: [
      { title: "Diagnose", description: "Assess current reporting landscape and stakeholder needs" },
      { title: "Design", description: "Define reporting hierarchy, KPIs, and delivery cadence" },
      { title: "Build", description: "Implement reporting infrastructure and automated pipelines" },
      { title: "Enable", description: "Train teams on interpretation and action-oriented analysis" },
    ],
    deliverables: [
      "Reporting framework and KPI dictionary",
      "Automated management reporting suite",
      "Executive dashboards and scorecards",
      "Variance analysis templates",
      "Self-service reporting capabilities",
    ],
    outcomes: [
      { metric: "70%", description: "Reduction in manual reporting effort" },
      { metric: "Day 3", description: "Management reports available after month-end" },
    ],
  },
  {
    slug: "budgeting-forecasting",
    title: "Budgeting, Forecasting & Scenario Analysis",
    category: "financial-advisory",
    headline: "From annual budget theater to continuous, insight-driven planning",
    description: "Replace rigid annual budgets with dynamic planning processes that respond to business reality.",
    challenge: [
      "Annual budgets are outdated within weeks of approval, yet consume months of organizational effort.",
      "Forecasting accuracy deteriorates rapidly, undermining credibility and decision-making.",
      "Scenario planning is reactive and ad-hoc, leaving leadership unprepared for changing conditions.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate current planning processes and pain points" },
      { title: "Redesign", description: "Implement driver-based models and rolling forecasts" },
      { title: "Automate", description: "Deploy planning technology and integration" },
      { title: "Embed", description: "Establish continuous planning rhythms and governance" },
    ],
    deliverables: [
      "Driver-based financial models",
      "Rolling forecast framework",
      "Scenario modeling capabilities",
      "Planning calendar and governance",
      "Technology implementation support",
    ],
    outcomes: [
      { metric: "50%", description: "Reduction in planning cycle time" },
      { metric: "±5%", description: "Forecast accuracy within this range" },
    ],
  },
  {
    slug: "strategic-planning-fpa",
    title: "Strategic Planning & FP&A",
    category: "financial-advisory",
    headline: "Align financial strategy with business ambition",
    description: "Build FP&A capabilities that serve as true business partners to leadership, not just number-crunchers.",
    challenge: [
      "FP&A teams spend 80% of their time gathering data, leaving little time for actual analysis.",
      "Disconnect between strategic plans and financial plans creates execution gaps.",
      "Business leaders don't trust or use FP&A insights in their decision-making.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate FP&A operating model and stakeholder relationships" },
      { title: "Design", description: "Define target state for business partnering and insights" },
      { title: "Transform", description: "Implement new processes, tools, and capabilities" },
      { title: "Sustain", description: "Embed continuous improvement and skill development" },
    ],
    deliverables: [
      "FP&A operating model design",
      "Long-range planning framework",
      "Business partnering playbook",
      "Strategic initiative tracking",
      "Capital allocation framework",
    ],
    outcomes: [
      { metric: "3x", description: "Increase in time spent on value-added analysis" },
      { metric: "85%", description: "Business leader satisfaction with FP&A support" },
    ],
  },
  {
    slug: "kpis-dashboards",
    title: "KPIs, Dashboards & Visualizations",
    category: "financial-advisory",
    headline: "Transform data into actionable intelligence",
    description: "Design and implement performance measurement systems that drive accountability and results.",
    challenge: [
      "Organizations track too many metrics without clear hierarchy or accountability.",
      "Dashboards are static reports, not interactive decision-support tools.",
      "Data sits in silos, making holistic performance visibility impossible.",
    ],
    approach: [
      { title: "Define", description: "Identify critical metrics aligned to strategic objectives" },
      { title: "Design", description: "Create dashboard hierarchy and user experiences" },
      { title: "Build", description: "Implement visualization platform and data integration" },
      { title: "Activate", description: "Deploy dashboards and embed in decision rhythms" },
    ],
    deliverables: [
      "KPI framework and metric definitions",
      "Executive and operational dashboards",
      "Self-service analytics capabilities",
      "Data integration architecture",
      "Performance review templates",
    ],
    outcomes: [
      { metric: "1 hour", description: "From question to insight for key business queries" },
      { metric: "90%", description: "Adoption rate for new dashboard tools" },
    ],
  },
  {
    slug: "business-plans",
    title: "Business Plans",
    category: "financial-advisory",
    headline: "Investor-grade business plans that withstand scrutiny",
    description: "Develop comprehensive business plans that communicate vision, validate assumptions, and secure stakeholder buy-in.",
    challenge: [
      "Business plans often lack the rigor and detail that investors and lenders expect.",
      "Financial projections are disconnected from operational reality and market dynamics.",
      "Plans fail to articulate clear value propositions and competitive positioning.",
    ],
    approach: [
      { title: "Discover", description: "Understand business model, market, and objectives" },
      { title: "Analyze", description: "Conduct market sizing, competitive analysis, and financial modeling" },
      { title: "Develop", description: "Create narrative and supporting documentation" },
      { title: "Refine", description: "Stress-test assumptions and incorporate feedback" },
    ],
    deliverables: [
      "Comprehensive business plan document",
      "Detailed financial model with scenarios",
      "Market analysis and competitive positioning",
      "Executive summary and pitch materials",
      "Due diligence data room preparation",
    ],
    outcomes: [
      { metric: "4 weeks", description: "Typical timeline to investor-ready plan" },
      { metric: "85%", description: "Success rate in securing target funding" },
    ],
  },
  {
    slug: "zero-based-budgeting",
    title: "Zero-Based Budgeting",
    category: "financial-advisory",
    headline: "Rebuild your cost base from first principles",
    description: "Implement ZBB to eliminate legacy costs, realign spending with priorities, and create lasting cost discipline.",
    challenge: [
      "Traditional budgeting perpetuates historical spending regardless of current needs.",
      "Cost reduction initiatives deliver short-term savings that quickly creep back.",
      "Lack of visibility into cost drivers makes intelligent trade-offs impossible.",
    ],
    approach: [
      { title: "Baseline", description: "Establish granular visibility into current cost structure" },
      { title: "Challenge", description: "Question every cost from zero, building justified budgets" },
      { title: "Decide", description: "Make explicit trade-offs aligned to strategic priorities" },
      { title: "Sustain", description: "Embed ZBB disciplines into ongoing planning processes" },
    ],
    deliverables: [
      "Cost category taxonomy and ownership",
      "Decision package framework",
      "ZBB playbook and templates",
      "Governance and tracking mechanisms",
      "Change management support",
    ],
    outcomes: [
      { metric: "15-25%", description: "Addressable cost reduction identified" },
      { metric: "Year 2+", description: "Sustained savings maintained beyond implementation" },
    ],
  },
  {
    slug: "financial-restructuring",
    title: "Financial Restructuring",
    category: "financial-advisory",
    headline: "Navigate financial distress with precision and speed",
    description: "Guide companies through financial challenges with practical restructuring solutions that preserve value.",
    challenge: [
      "Cash flow crises demand immediate action while long-term viability requires strategic thinking.",
      "Stakeholder interests diverge, complicating negotiations and decision-making.",
      "Management teams lack experience navigating distressed situations effectively.",
    ],
    approach: [
      { title: "Stabilize", description: "Implement immediate cash management and controls" },
      { title: "Assess", description: "Develop 13-week cash flow and viability analysis" },
      { title: "Restructure", description: "Design and negotiate restructuring alternatives" },
      { title: "Execute", description: "Implement agreed plan and monitor recovery" },
    ],
    deliverables: [
      "13-week cash flow forecast and management",
      "Operational restructuring plan",
      "Stakeholder negotiation support",
      "Lender and creditor communications",
      "Implementation monitoring and reporting",
    ],
    outcomes: [
      { metric: "72 hours", description: "Cash position clarity established" },
      { metric: "80%", description: "Success rate avoiding formal insolvency" },
    ],
  },
  {
    slug: "prepackaged-bankruptcy",
    title: "Prepackaged Bankruptcy Filing",
    category: "financial-advisory",
    headline: "Structured exits that preserve value and enable fresh starts",
    description: "When restructuring requires formal proceedings, prepackaged solutions minimize disruption and maximize recoveries.",
    challenge: [
      "Traditional bankruptcy processes are lengthy, costly, and value-destructive.",
      "Uncertainty during proceedings paralyzes operations and erodes stakeholder confidence.",
      "Post-emergence companies often struggle without clear operational plans.",
    ],
    approach: [
      { title: "Prepare", description: "Develop restructuring plan and secure key stakeholder support" },
      { title: "Package", description: "Document plan and solicit required acceptances" },
      { title: "File", description: "Execute expedited court process with pre-negotiated terms" },
      { title: "Emerge", description: "Implement post-emergence operating plan" },
    ],
    deliverables: [
      "Restructuring plan documentation",
      "Stakeholder solicitation materials",
      "Court filing support and coordination",
      "Post-emergence business plan",
      "Fresh-start accounting implementation",
    ],
    outcomes: [
      { metric: "60-90 days", description: "Typical time in court proceedings" },
      { metric: "30%+", description: "Higher recoveries vs. traditional bankruptcy" },
    ],
  },
  {
    slug: "finance-automation",
    title: "Finance Automation",
    category: "financial-advisory",
    headline: "Automate the routine, elevate the strategic",
    description: "Apply automation technologies to eliminate manual work, reduce errors, and free finance teams for higher-value activities.",
    challenge: [
      "Finance teams spend excessive time on manual data entry and reconciliation.",
      "Error-prone processes create downstream issues and rework.",
      "Skilled professionals are underutilized on tasks that don't require their expertise.",
    ],
    approach: [
      { title: "Discover", description: "Map processes and identify automation opportunities" },
      { title: "Prioritize", description: "Rank opportunities by impact and feasibility" },
      { title: "Implement", description: "Deploy automation solutions with change management" },
      { title: "Scale", description: "Expand successful automations across the function" },
    ],
    deliverables: [
      "Process automation roadmap",
      "RPA bot development and deployment",
      "Workflow automation implementation",
      "Integration architecture design",
      "Training and change management",
    ],
    outcomes: [
      { metric: "60%", description: "Reduction in manual processing time" },
      { metric: "99%", description: "Accuracy rate in automated processes" },
    ],
  },

  // Business Advisory Services
  {
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    category: "business-advisory",
    headline: "Resilient, efficient supply chains that drive competitive advantage",
    description: "Optimize end-to-end supply chain operations to reduce costs, improve service, and build resilience.",
    challenge: [
      "Supply chain disruptions expose vulnerabilities in lean, cost-optimized networks.",
      "Balancing efficiency with resilience requires new approaches to network design.",
      "Visibility gaps across the supply chain impede proactive risk management.",
    ],
    approach: [
      { title: "Diagnose", description: "Assess current supply chain performance and risks" },
      { title: "Design", description: "Develop target operating model balancing efficiency and resilience" },
      { title: "Transform", description: "Implement improvements across plan, source, make, deliver" },
      { title: "Monitor", description: "Establish ongoing visibility and continuous improvement" },
    ],
    deliverables: [
      "Supply chain diagnostic and benchmarking",
      "Network optimization recommendations",
      "S&OP process redesign",
      "Supplier management framework",
      "Risk monitoring and mitigation plans",
    ],
    outcomes: [
      { metric: "20%", description: "Reduction in supply chain costs" },
      { metric: "95%+", description: "On-time delivery performance achieved" },
    ],
  },
  {
    slug: "valuations-assessments",
    title: "Valuations & Assessments",
    category: "business-advisory",
    headline: "Rigorous valuations that withstand scrutiny",
    description: "Provide independent, defensible valuations for transactions, reporting, and strategic decision-making.",
    challenge: [
      "Valuation disputes derail transactions and create legal exposure.",
      "Internal valuations lack the independence and rigor external parties require.",
      "Complex assets and situations demand specialized expertise.",
    ],
    approach: [
      { title: "Scope", description: "Define valuation purpose, standards, and requirements" },
      { title: "Analyze", description: "Gather data and apply appropriate methodologies" },
      { title: "Validate", description: "Test assumptions and triangulate conclusions" },
      { title: "Report", description: "Document findings with full transparency" },
    ],
    deliverables: [
      "Independent valuation reports",
      "Financial model documentation",
      "Comparable company and transaction analysis",
      "Expert testimony support if required",
      "Purchase price allocation",
    ],
    outcomes: [
      { metric: "100%", description: "Audit acceptance rate for reporting valuations" },
      { metric: "Zero", description: "Valuation-related deal failures" },
    ],
  },
  {
    slug: "corporate-finance-strategy",
    title: "Corporate Finance & Strategy",
    category: "business-advisory",
    headline: "Strategic clarity for complex corporate decisions",
    description: "Support leadership teams in making high-stakes decisions about capital, growth, and portfolio strategy.",
    challenge: [
      "Capital allocation decisions are often driven by politics rather than value creation.",
      "Growth strategies lack rigorous analysis of alternatives and risks.",
      "Portfolio complexity obscures where value is created and destroyed.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate current portfolio and capital allocation" },
      { title: "Analyze", description: "Model strategic alternatives and trade-offs" },
      { title: "Recommend", description: "Develop fact-based recommendations" },
      { title: "Execute", description: "Support implementation of strategic decisions" },
    ],
    deliverables: [
      "Portfolio strategy assessment",
      "Capital allocation framework",
      "Growth strategy options analysis",
      "Strategic business case development",
      "Board presentation materials",
    ],
    outcomes: [
      { metric: "2x", description: "Improvement in capital efficiency" },
      { metric: "Alignment", description: "Board and management consensus achieved" },
    ],
  },
  {
    slug: "transformations-leadership",
    title: "Transformations, Innovations & Leadership",
    category: "business-advisory",
    headline: "Lead transformations that deliver results and stick",
    description: "Design and execute enterprise transformations that achieve lasting impact through engaged leadership.",
    challenge: [
      "Most transformation programs fail to deliver promised results.",
      "Change fatigue and resistance undermine even well-designed initiatives.",
      "Leadership alignment breaks down as transformation challenges emerge.",
    ],
    approach: [
      { title: "Align", description: "Build leadership commitment and transformation vision" },
      { title: "Design", description: "Develop transformation roadmap and governance" },
      { title: "Execute", description: "Drive implementation with rigorous program management" },
      { title: "Embed", description: "Build capabilities and sustain new ways of working" },
    ],
    deliverables: [
      "Transformation vision and roadmap",
      "Program governance and PMO",
      "Change management strategy",
      "Leadership alignment workshops",
      "Capability building programs",
    ],
    outcomes: [
      { metric: "85%", description: "Of transformation targets achieved" },
      { metric: "Sustained", description: "Changes maintained 2+ years post-implementation" },
    ],
  },
  {
    slug: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    category: "business-advisory",
    headline: "End-to-end M&A support from strategy through integration",
    description: "Guide organizations through the full M&A lifecycle to maximize value creation and minimize risk.",
    challenge: [
      "Most acquisitions fail to deliver expected value, often due to poor integration.",
      "Due diligence gaps lead to unwelcome surprises post-close.",
      "Synergy projections prove optimistic when faced with integration realities.",
    ],
    approach: [
      { title: "Strategize", description: "Define M&A strategy and target criteria" },
      { title: "Diligence", description: "Execute comprehensive due diligence" },
      { title: "Negotiate", description: "Support deal structuring and negotiations" },
      { title: "Integrate", description: "Plan and execute post-merger integration" },
    ],
    deliverables: [
      "M&A strategy and screening criteria",
      "Due diligence findings and recommendations",
      "Valuation and deal structure analysis",
      "Integration planning and playbook",
      "Synergy tracking and realization",
    ],
    outcomes: [
      { metric: "100%", description: "Critical issues identified pre-close" },
      { metric: "90%+", description: "Synergy capture vs. initial projections" },
    ],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    category: "business-advisory",
    headline: "Enterprise-grade advisory for companies building the future",
    description: "Provide startups with the financial and strategic expertise typically reserved for larger organizations.",
    challenge: [
      "Startups lack the finance infrastructure investors and boards expect.",
      "Rapid growth strains processes designed for earlier stages.",
      "Founders need strategic finance partners, not just bookkeepers.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate current state and growth requirements" },
      { title: "Build", description: "Implement foundational finance infrastructure" },
      { title: "Scale", description: "Upgrade capabilities as the company grows" },
      { title: "Partner", description: "Provide ongoing strategic finance support" },
    ],
    deliverables: [
      "Financial infrastructure setup",
      "Investor reporting packages",
      "Fundraising support and materials",
      "Board meeting preparation",
      "Strategic planning facilitation",
    ],
    outcomes: [
      { metric: "6 weeks", description: "To investor-ready financials" },
      { metric: "Series A+", description: "Companies supported through fundraising" },
    ],
  },

  // Sustainability & Digital Services
  {
    slug: "organizational-health",
    title: "Organizational Health",
    category: "sustainability-digital",
    headline: "Healthy organizations outperform—measure and improve yours",
    description: "Diagnose and strengthen the organizational capabilities that drive sustained performance.",
    challenge: [
      "Strategy execution fails due to unclear accountability and misaligned incentives.",
      "Talent challenges—attraction, retention, development—constrain growth.",
      "Culture undermines stated values and strategic objectives.",
    ],
    approach: [
      { title: "Diagnose", description: "Assess organizational health across key dimensions" },
      { title: "Prioritize", description: "Identify highest-impact improvement opportunities" },
      { title: "Intervene", description: "Design and implement targeted interventions" },
      { title: "Measure", description: "Track progress and adjust approach" },
    ],
    deliverables: [
      "Organizational health assessment",
      "Culture and engagement diagnostics",
      "Operating model recommendations",
      "Talent strategy development",
      "Change adoption tracking",
    ],
    outcomes: [
      { metric: "25%", description: "Improvement in employee engagement scores" },
      { metric: "2x", description: "Increase in strategy execution success rate" },
    ],
  },
  {
    slug: "digital-advisory",
    title: "Digital Advisory",
    category: "sustainability-digital",
    headline: "Digital transformation with business outcomes, not technology for its own sake",
    description: "Guide digital transformation initiatives that deliver measurable business value.",
    challenge: [
      "Digital initiatives often prioritize technology over business outcomes.",
      "Legacy systems and technical debt impede modernization efforts.",
      "Organizations lack the capabilities to sustain digital ways of working.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate digital maturity and opportunity areas" },
      { title: "Strategize", description: "Develop digital roadmap aligned to business priorities" },
      { title: "Execute", description: "Implement digital initiatives with business sponsorship" },
      { title: "Scale", description: "Build capabilities for ongoing digital evolution" },
    ],
    deliverables: [
      "Digital maturity assessment",
      "Digital strategy and roadmap",
      "Technology selection guidance",
      "Implementation oversight",
      "Digital operating model design",
    ],
    outcomes: [
      { metric: "3x", description: "ROI on digital investments" },
      { metric: "50%", description: "Reduction in time-to-market for digital products" },
    ],
  },
  {
    slug: "esg-sustainability",
    title: "ESG & Sustainability",
    category: "sustainability-digital",
    headline: "Sustainability that strengthens performance, not just reputation",
    description: "Integrate ESG into business strategy to create value for shareholders and stakeholders alike.",
    challenge: [
      "ESG requirements are expanding rapidly across regulatory and stakeholder expectations.",
      "Sustainability initiatives often operate separately from core business strategy.",
      "Measuring and reporting ESG performance presents data and process challenges.",
    ],
    approach: [
      { title: "Assess", description: "Evaluate current ESG posture and stakeholder expectations" },
      { title: "Strategize", description: "Develop ESG strategy integrated with business strategy" },
      { title: "Implement", description: "Execute priority initiatives and build capabilities" },
      { title: "Report", description: "Establish measurement, reporting, and disclosure" },
    ],
    deliverables: [
      "Materiality assessment",
      "ESG strategy and roadmap",
      "Decarbonization pathway analysis",
      "ESG reporting framework implementation",
      "Stakeholder communication strategy",
    ],
    outcomes: [
      { metric: "Compliant", description: "With emerging ESG disclosure requirements" },
      { metric: "Top quartile", description: "ESG ratings within peer group" },
    ],
  },
];

export function getServicesByCategory(category: Service["category"]) {
  return services.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const categoryInfo = {
  "financial-advisory": {
    title: "Financial Advisory",
    description: "Transform your finance function from cost center to strategic advantage. We deliver CFO-level expertise across the full spectrum of financial operations—from day-to-day execution to strategic transformation.",
    longDescription: "Our Financial Advisory practice helps organizations build world-class finance capabilities. Whether you need to optimize existing operations, navigate financial distress, or transform how finance supports the business, we bring the expertise and hands-on approach to deliver results.",
  },
  "business-advisory": {
    title: "Business Advisory",
    description: "Strategic clarity and operational excellence for complex business challenges. We help leadership teams navigate transactions, transformations, and growth with confidence.",
    longDescription: "Our Business Advisory practice supports leadership teams through their most consequential decisions. From M&A transactions to enterprise transformations, we combine strategic insight with practical implementation to ensure initiatives deliver lasting value.",
  },
  "sustainability-digital": {
    title: "Sustainability & Digital",
    description: "Future-proof your organization for the demands of tomorrow. We integrate digital transformation and ESG into sustainable business models that drive long-term value.",
    longDescription: "Our Sustainability & Digital practice helps organizations adapt to rapidly evolving expectations. We bring together digital transformation expertise and ESG advisory to help clients build resilient, responsible businesses positioned for long-term success.",
  },
};
