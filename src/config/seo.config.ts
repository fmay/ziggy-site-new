export const siteConfig = {
  name: 'Ziggy',
  description: 'The Automation and Integration Platform that\'s different',
  url: 'https://ziggyplatform.com',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/ziggyservices',
    linkedin: 'https://linkedin.com/company/ziggyservices', // PLACEHOLDER - update with actual LinkedIn URL
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ziggy',
  url: siteConfig.url,
  logo: `${siteConfig.url}/ziggy-logo-light-bg.webp`,
  description: siteConfig.description,
  // PLACEHOLDERS - fill in when available
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'sales@ziggyservices.com', // PLACEHOLDER - update with actual email
  },
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
  ],
}

export const pageMetadata = {
  home: {
    title: 'Ziggy - Automation and Integration Platform',
    description: 'Built for extreme ease of use. Runs on your servers for optimal performance and security. Fully customizable with AI enabled features.',
    keywords: ['automation platform', 'integration platform', 'data automation', 'workflow automation', 'self-hosted', 'ETL platform'],
  },
  platform: {
    title: 'Platform Overview - Simplify Integration & Automation',
    description: 'In-house teams use Ziggy for all data automation and integration. AI features reduce reliance on Developer resources. Access any data source.',
    keywords: ['integration platform', 'automation platform', 'data flows', 'Ziggy blocks', 'ETL'],
  },
  features: {
    title: 'Ziggy Features - Complete Automation Toolkit',
    description: 'Comprehensive features for building, debugging, secrets management, rate limiting, flow execution history and more.',
    keywords: ['automation features', 'workflow features', 'debugging tools', 'rate limiting', 'secrets management'],
  },
  flows: {
    title: 'Ziggy Flows - Build Powerful Automations',
    description: 'Create complex automations with Ziggy Flows. Visual workflow builder with JavaScript support for advanced logic.',
    keywords: ['workflow builder', 'automation flows', 'visual workflows', 'JavaScript automation'],
  },
  aiFeatures: {
    title: 'AI-Powered Automation - Ziggy',
    description: 'Reduce reliance on developers with AI-enabled automation features. Smart workflows and intelligent data processing.',
    keywords: ['AI automation', 'intelligent workflows', 'AI-powered integration', 'machine learning'],
  },
  extend: {
    title: 'Extend Ziggy - Custom Blocks & Plugins',
    description: 'Build custom block collections with Ziggy plugins. Connect to any system including your own platform.',
    keywords: ['plugins', 'extensibility', 'custom blocks', 'API integration', 'custom connectors'],
  },
  cluster: {
    title: 'Ziggy Cluster - Scalable Infrastructure',
    description: 'Deploy Ziggy on your infrastructure with cluster support for performance and security control.',
    keywords: ['cluster deployment', 'scalable infrastructure', 'self-hosted', 'enterprise deployment'],
  },
  whatAreAutomations: {
    title: 'Automations vs Integrations - Ziggy Guide',
    description: 'Understanding automations and integrations. Both trigger Ziggy Flows automatically with different event types.',
    keywords: ['automations explained', 'integrations guide', 'workflow triggers', 'event-driven automation'],
  },
  about: {
    title: 'About Ziggy - Our Mission',
    description: 'Ziggy was born from obsession with project cost efficiency. Innovation in Data Automation and Integration technology and resourcing.',
    keywords: ['about ziggy', 'mission', 'data automation innovation', 'company story'],
  },
  pricing: {
    title: 'Simple, Transparent Pricing - Ziggy',
    description: 'Fixed price subscription model. Lowest pricing you\'ll find plus reduced staff time and costs.',
    keywords: ['pricing', 'subscription', 'cost', 'ROI', 'affordable automation'],
  },
  careers: {
    title: 'Careers at Ziggy - Join Our Team',
    description: 'Join Ziggy and help revolutionize data automation and integration. View open positions and grow with us.',
    keywords: ['careers', 'jobs', 'join ziggy', 'employment opportunities'],
  },
  developers: {
    title: 'Developer Resources - Ziggy API & Documentation',
    description: 'Comprehensive guides and API references. Build and integrate with Ziggy platform.',
    keywords: ['API', 'documentation', 'developer resources', 'SDK', 'developer guide'],
  },
  resources: {
    title: 'Resources - Guides & Tutorials | Ziggy',
    description: 'Learn about automation best practices, integration patterns, and platform guides.',
    keywords: ['resources', 'guides', 'tutorials', 'best practices', 'learning center'],
  },
  solutions: {
    title: 'Industry Solutions - Ziggy Automation',
    description: 'Tailored automation and integration solutions for your industry needs.',
    keywords: ['industry solutions', 'enterprise automation', 'business solutions'],
  },
  signin: {
    title: 'Sign In - Ziggy Platform',
    description: 'Access your Ziggy automation and integration workspace.',
    keywords: ['sign in', 'login', 'access workspace'],
  },
  integrationPartners: {
    title: 'Become an Integration Partner - Ziggy',
    description: 'Make integration simple for your customers. Provide branded Ziggy Blocks and Flows. Open new revenue streams.',
    keywords: ['partnership', 'integration partner', 'white label', 'partner program', 'revenue sharing'],
  },
  demo: {
    title: 'Book a Demo - Ziggy Platform',
    description: 'Book a 30 minute demo with a product expert who will answer all your technical questions.',
    keywords: ['demo', 'consultation', 'product tour', 'live demo'],
  },
  contact: {
    title: 'Contact Us - Ziggy',
    description: 'Get in touch with Ziggy. Sales inquiries, support, and partnership opportunities.',
    keywords: ['contact', 'support', 'sales', 'get in touch'],
  },
  privacy: {
    title: 'Privacy Policy - Ziggy',
    description: 'How we collect, use, and protect your information.',
    keywords: ['privacy policy', 'data protection', 'privacy'],
  },
  cookies: {
    title: 'Cookie Policy - Ziggy',
    description: 'Information about cookies used on Ziggy website.',
    keywords: ['cookie policy', 'cookies', 'tracking'],
  },
}
