import {
  FiFileText, FiDollarSign, FiBook, FiShield,
  FiBriefcase, FiUsers, FiTrendingUp, FiCheckCircle,
  FiClock, FiLock, FiHeart, FiAward,
  FiPhone, FiMail, FiMapPin
} from 'react-icons/fi'
import {
  HiOutlineBuildingOffice, HiOutlineShoppingBag,
  HiOutlineComputerDesktop, HiOutlineHeart,
  HiOutlineCog6Tooth, HiOutlineTruck,
  HiOutlineAcademicCap, HiOutlineFilm
} from 'react-icons/hi2'

export const siteConfig = {
  name: 'FinEdge & Associates',
  tagline: 'Chartered Accountants',
  phone: '+91 98765 43210',
  email: 'info@finedge.in',
  address: '412, Business Hub, MG Road, Mumbai, Maharashtra 400001',
  whatsapp: '919876543210',
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  }
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const stats = [
  { value: '10+', label: 'Years Experience', icon: FiAward },
  { value: '500+', label: 'Happy Clients', icon: FiUsers },
  { value: '1000+', label: 'GST Filed', icon: FiFileText },
  { value: '99%', label: 'Success Rate', icon: FiTrendingUp },
]

export const services = [
  {
    id: 'gst-filing',
    icon: FiFileText,
    title: 'GST Filing & Compliance',
    shortDesc: 'Timely GST returns, reconciliation, and compliance management for stress-free operations.',
    description: 'Our GST filing service covers everything from registration to monthly/quarterly return filing, annual returns, reconciliation, and audit support. We ensure 100% compliance with the latest GST regulations.',
    features: ['GST Registration', 'Monthly/Quarterly Returns', 'Annual Returns (GSTR-9)', 'GST Reconciliation', 'GST Audit Support', 'E-Way Bill Management'],
    color: '#1B4D3E',
  },
  {
    id: 'income-tax',
    icon: FiDollarSign,
    title: 'Income Tax Filing',
    shortDesc: 'Expert income tax planning, filing, and advisory for individuals and businesses.',
    description: 'Comprehensive income tax services including ITR filing for individuals, HUF, firms, and companies. We provide tax planning strategies to minimize your tax liability legally.',
    features: ['ITR Filing (All Types)', 'Tax Planning & Advisory', 'Advance Tax Calculation', 'TDS Returns', 'Tax Assessment Support', 'Capital Gains Advisory'],
    color: '#2A7A5F',
  },
  {
    id: 'accounting',
    icon: FiBook,
    title: 'Accounting & Bookkeeping',
    shortDesc: 'Accurate bookkeeping and financial reporting to keep your business on track.',
    description: 'End-to-end accounting solutions including daily bookkeeping, financial statements, MIS reports, and virtual CFO services tailored for growing businesses.',
    features: ['Daily Bookkeeping', 'Financial Statements', 'MIS Reports', 'Bank Reconciliation', 'Accounts Payable/Receivable', 'Virtual CFO Services'],
    color: '#3DA87A',
  },
  {
    id: 'audit',
    icon: FiShield,
    title: 'Audit & Assurance',
    shortDesc: 'Thorough audits to ensure accuracy, compliance, and investor confidence.',
    description: 'Professional audit services including statutory audit, tax audit, internal audit, and compliance audit conducted by experienced chartered accountants.',
    features: ['Statutory Audit', 'Tax Audit', 'Internal Audit', 'Stock Audit', 'Compliance Audit', 'Due Diligence'],
    color: '#1B4D3E',
  },
  {
    id: 'business-registration',
    icon: FiBriefcase,
    title: 'Business Registration',
    shortDesc: 'Complete company registration and compliance setup for new businesses.',
    description: 'From company incorporation to obtaining all necessary licenses and registrations, we handle the entire process so you can focus on building your business.',
    features: ['Private Limited Registration', 'LLP Registration', 'OPC Registration', 'Partnership Firm', 'MSME Registration', 'Trade License'],
    color: '#2A7A5F',
  },
  {
    id: 'payroll',
    icon: FiUsers,
    title: 'Payroll Management',
    shortDesc: 'Hassle-free payroll processing with compliance and employee satisfaction.',
    description: 'Complete payroll management including salary processing, PF/ESI compliance, TDS on salary, payslip generation, and statutory compliance.',
    features: ['Salary Processing', 'PF & ESI Compliance', 'TDS on Salary', 'Payslip Generation', 'Leave Management', 'Full & Final Settlement'],
    color: '#3DA87A',
  },
]

export const whyChooseUs = [
  { icon: FiUsers, title: 'Experienced Team', desc: 'Team of qualified CAs with 10+ years of diverse industry experience.' },
  { icon: FiDollarSign, title: 'Affordable Pricing', desc: 'Transparent pricing with no hidden charges. Quality service at competitive rates.' },
  { icon: FiHeart, title: 'Dedicated Support', desc: 'Personal account manager assigned to each client for seamless communication.' },
  { icon: FiClock, title: 'Fast Delivery', desc: 'On-time delivery guaranteed with proactive deadline management.' },
  { icon: FiLock, title: 'Secure & Confidential', desc: 'Bank-grade security for all your financial data and documents.' },
  { icon: FiCheckCircle, title: '100% Compliance', desc: 'Stay fully compliant with all regulatory requirements, always.' },
]

export const industries = [
  { icon: HiOutlineBuildingOffice, name: 'Startups', desc: 'End-to-end financial setup for new ventures.' },
  { icon: HiOutlineCog6Tooth, name: 'Manufacturing', desc: 'Complex accounting & GST for manufacturers.' },
  { icon: HiOutlineShoppingBag, name: 'E-Commerce', desc: 'Multi-channel accounting & TDS compliance.' },
  { icon: HiOutlineComputerDesktop, name: 'IT & Freelancers', desc: 'Tax planning for tech professionals.' },
  { icon: HiOutlineHeart, name: 'Healthcare', desc: 'Specialized accounting for medical practitioners.' },
  { icon: HiOutlineTruck, name: 'Logistics', desc: 'E-Way bill & GST for transport businesses.' },
  { icon: HiOutlineAcademicCap, name: 'Education', desc: 'Compliance & accounting for institutions.' },
  { icon: HiOutlineFilm, name: 'Media & Entertainment', desc: 'Royalty accounting & tax advisory.' },
]

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechNova Solutions',
    role: 'CEO',
    review: 'FinEdge has been our trusted accounting partner for 5 years. Their team\'s expertise in GST and tax planning has saved us significant amounts. Highly recommended for any growing business.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    company: 'GreenLeaf Organics',
    role: 'Founder',
    review: 'Switching to FinEdge was the best decision for our startup. They set up our entire accounting system, handled all compliances, and their virtual CFO service has been invaluable.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    company: 'BuildRight Construction',
    role: 'Managing Director',
    review: 'Professional, responsive, and incredibly knowledgeable. FinEdge handled our audit flawlessly and their team is always available when we need them. Outstanding service quality.',
    rating: 5,
  },
  {
    name: 'Sneha Verma',
    company: 'StyleHub Fashion',
    role: 'Co-Founder',
    review: 'As an e-commerce business, we had complex GST requirements. FinEdge simplified everything. Their automated reporting and dedicated support have been game-changers for us.',
    rating: 4,
  },
]

export const processSteps = [
  { step: 1, title: 'Free Consultation', desc: 'Schedule a call to discuss your requirements and business needs.' },
  { step: 2, title: 'Document Collection', desc: 'Share your documents securely through our client portal.' },
  { step: 3, title: 'Processing & Review', desc: 'Our experts process everything with thorough quality checks.' },
  { step: 4, title: 'Delivery & Support', desc: 'Receive completed work with ongoing support and advisory.' },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '4,999',
    period: '/month',
    desc: 'Perfect for freelancers & individuals',
    features: ['Income Tax Filing', 'Basic Bookkeeping', 'GST Return Filing (Monthly)', 'TDS Returns', 'Email Support', 'Annual Compliance Calendar'],
    popular: false,
  },
  {
    name: 'Business',
    price: '12,999',
    period: '/month',
    desc: 'Ideal for growing businesses',
    features: ['Everything in Starter', 'Full Accounting & Bookkeeping', 'Payroll Processing (up to 25)', 'MIS Reports', 'Dedicated Account Manager', 'Quarterly Business Review', 'Priority Phone Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For established companies',
    features: ['Everything in Business', 'Virtual CFO Services', 'Statutory Audit', 'Internal Audit', 'Unlimited Payroll', 'Tax Planning & Advisory', 'Board Meeting Support', '24/7 Priority Support'],
    popular: false,
  },
]

export const teamMembers = [
  { name: 'CA Vikram Mehta', role: 'Founding Partner', exp: '15+ Years', speciality: 'Tax Planning & Audit' },
  { name: 'CA Ananya Rao', role: 'Partner', exp: '12+ Years', speciality: 'GST & Indirect Tax' },
  { name: 'CA Rohan Desai', role: 'Senior Manager', exp: '10+ Years', speciality: 'Corporate Finance' },
  { name: 'CA Meera Shah', role: 'Manager', exp: '8+ Years', speciality: 'Accounting & Compliance' },
]

export const blogPosts = [
  {
    id: 'gst-filing-guide-2026',
    title: 'Complete Guide to GST Filing in 2026',
    excerpt: 'Everything you need to know about GST filing deadlines, procedures, and recent changes in the GST framework.',
    category: 'GST',
    date: 'Feb 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 'tax-saving-tips-individuals',
    title: '10 Tax Saving Tips for Salaried Individuals',
    excerpt: 'Maximize your tax savings with these proven strategies under Section 80C, 80D, HRA, and more.',
    category: 'Income Tax',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
  },
  {
    id: 'startup-incorporation-checklist',
    title: 'Startup Incorporation Checklist 2026',
    excerpt: 'A step-by-step checklist for registering your startup in India, from name reservation to compliance setup.',
    category: 'Business',
    date: 'Feb 5, 2026',
    readTime: '10 min read',
  },
  {
    id: 'audit-preparation-tips',
    title: 'How to Prepare for Your Annual Audit',
    excerpt: 'Essential tips to help your business prepare for a smooth and successful audit process.',
    category: 'Audit',
    date: 'Jan 28, 2026',
    readTime: '7 min read',
  },
  {
    id: 'payroll-compliance-guide',
    title: 'Payroll Compliance: PF, ESI & TDS Simplified',
    excerpt: 'Understanding payroll compliance requirements in India including PF, ESI, professional tax, and TDS.',
    category: 'Payroll',
    date: 'Jan 20, 2026',
    readTime: '9 min read',
  },
  {
    id: 'digital-accounting-trends',
    title: 'Digital Accounting Trends Shaping 2026',
    excerpt: 'How AI, automation, and cloud accounting are transforming the way businesses manage their finances.',
    category: 'Technology',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
  },
]

export const faqs = [
  { q: 'What services do you offer for startups?', a: 'We offer complete startup packages including company registration, GST registration, accounting setup, compliance calendar, and virtual CFO services to help you get started on the right foot.' },
  { q: 'How do you ensure data security?', a: 'We use bank-grade encryption, secure cloud storage, and strict access controls. All team members sign NDAs, and we comply with data protection regulations.' },
  { q: 'Can I switch from my current CA to your firm?', a: 'Absolutely! We handle the entire transition smoothly, including collecting records from your previous accountant and ensuring no compliance gaps.' },
  { q: 'Do you offer virtual/remote services?', a: 'Yes, we serve clients across India through our secure digital platform. Document sharing, communication, and reporting — everything is available online.' },
  { q: 'What are your payment terms?', a: 'We offer flexible monthly and annual billing. Annual plans come with a 15% discount. All prices are transparent with no hidden fees.' },
]
