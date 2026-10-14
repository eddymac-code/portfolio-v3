export const profile = {
  name: 'Edwin Oduor',
  role: 'Backend Engineer',
  location: 'Nairobi, Kenya',
  headline: 'I build the backend systems behind payments, payroll and daily operations.',
  intro:
    'Five years of Laravel, M-Pesa and banking integrations, and running what I ship in production. Currently at Litsa Credits.',
  available: true,
  photo: '/edwin.jpeg',
  email: 'odwin59@gmail.com',
  phone: '+254 714 640 589',
  cv: '/Edwin_Oduor_CV.pdf',
  links: [
    { label: 'GitHub', href: 'https://github.com/eddymac-code' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/edwin-oduor-ongaro' },
  ],
}

export const experience = [
  {
    company: 'Litsa Credits Ltd',
    title: 'Software Engineer',
    period: 'Apr 2026 to now',
    where: 'Remote, Nairobi',
    points: [
      'Designed and shipped an HR system for 72 employees. Payroll that took 5 days now runs in seconds.',
      'Maintain a Laravel 13 and Livewire CRM with M-Pesa payments, reconciliation, exports and queued SMS.',
      'Integrated the Sauti API into the loan system to keep 700+ clients updated on status, repayments and collections.',
      'Built Autodater, cutting a 3-hour manual database and spreadsheet routine to 30 minutes for 29 representatives.',
      'Own production: Nginx, PHP-FPM and Supervisor-managed queue workers.',
    ],
  },
  {
    company: 'Zendawa Africa',
    title: 'Backend Engineer (part-time)',
    period: 'Oct 2024 to Jun 2025',
    where: 'Remote, Nairobi',
    points: [
      'Built Laravel APIs for a Flutter app: wallet, vouchers, loyalty points, telemedicine and delivery tracking.',
      'Integrated M-Pesa for 1,000+ daily transactions and added Redis caching.',
      'Set up Docker and GitHub Actions pipelines; deployed on AWS EC2, RDS and Elastic Beanstalk.',
    ],
  },
  {
    company: 'ICORE Information Systems',
    title: 'Backend Developer',
    period: 'Jan 2024 to Jun 2025',
    where: 'Remote, Nairobi',
    points: [
      'Built REST APIs for bank integrations that process real-time transaction notifications in under 200 ms.',
      'Found and fixed N+1 queries and slow database paths, improving response time by about 50%.',
      'Delivered financial reporting (profit and loss, analytics, dashboards) with PHPUnit and Pest coverage.',
    ],
  },
  {
    company: 'Conrad Resort',
    title: 'Web Developer',
    period: 'Apr 2023 to Aug 2023',
    where: 'Remote, Nairobi',
    points: ['Built a hotel booking and content management system in Laravel, MySQL and Bootstrap.'],
  },
  {
    company: 'ICORE Information Systems',
    title: 'Software Developer and IT Support',
    period: 'Aug 2021 to Aug 2022',
    where: 'On-Site, Nakuru',
    points: ['Maintained production Laravel applications and Linux servers, and resolved backend performance issues.'],
  },
]

// Add or delete an object here. Empty links are hidden.
export const projects = [
  {
    title: 'Bank Integration API',
    description: 'Secure REST API that receives bank transaction notifications in real time and posts them to client ledgers.',
    stack: ['Laravel', 'MySQL', 'REST'],
    live: '',
    repo: '',
  },
  {
    title: 'Litsa CRM',
    description: 'Customer and device management with M-Pesa payments, reconciliation, date-filtered exports and queued SMS.',
    stack: ['Laravel 13', 'Livewire 4', 'PowerGrid', 'MySQL', 'M-Pesa'],
    live: '',
    repo: '',
  },
  {
    title: 'OASMS',
    description: 'Outdoor advertising management platform with backend services, caching strategy and reporting modules.',
    stack: ['Laravel', 'Livewire 3', 'Volt', 'Redis', 'Tailwind'],
    live: '',
    repo: '',
  },
  {
    title: 'Mini LMS',
    description: 'Loan management covering users, customers, loans, disbursement and notifications.',
    stack: ['Laravel 13', 'Vue', 'MySQL'],
    live: '',
    repo: '',
  },
]

export const skills = [
  { group: 'Languages', items: 'PHP, JavaScript, TypeScript, Python' },
  { group: 'Backend', items: 'Laravel, REST APIs, FastAPI, queues, caching, query optimisation' },
  { group: 'Frontend', items: 'Vue.js, Livewire, Blade, HTML, CSS' },
  { group: 'Data', items: 'MySQL, PostgreSQL, Redis' },
  { group: 'Integrations', items: 'M-Pesa, bank APIs, KRA eTIMS' },
  { group: 'Infrastructure', items: 'Docker, GitHub Actions, AWS, DigitalOcean, Linux, Nginx, Supervisor' },
  { group: 'Testing', items: 'PHPUnit, Pest' },
]
