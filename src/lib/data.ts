export const meta = {
  brand: 'FABRIC',
  name: 'Oliver Cassidy',
  location: 'London, UK',
  tagline: 'Compressing intelligence into nanoseconds.',
  role: 'Hardware ML Researcher · MEng Imperial College London',
  email: 'ollyj.cassidy@gmail.com',
  github: 'https://github.com/ollycassidy13',
  linkedin: 'https://linkedin.com/in/oliver-cassidy-286ba3235',
  scholar: 'https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en',
  arxiv: 'https://arxiv.org/a/cassidy_o_1.html',
  cv: '/Oliver_Cassidy_CV.pdf',
  currentPortfolio: 'https://olly-cassidy.vercel.app/',
};

export const stats = [
  { value: '02', label: 'Papers Published' },
  { value: '#2', label: 'Ranked at ICL' },
  { value: 'AMD', label: 'RAD Lab 2026' },
];

// In-progress / upcoming. PLACEHOLDER copy — edit freely.
export const updates: { status: string; text: string }[] = [
  { status: 'In progress', text: 'AMD RAD Lab — accelerating transformer inference on Versal AI with FINN.' },
  { status: 'Upcoming', text: 'CascadeLUT presentation at FPL 2026, Ghent — September.' },
  { status: 'Upcoming', text: 'Invited speaker at IEEE SOCC on LUT-based neural networks.' },
];

export const papers = [
  {
    id: 'reducedlut',
    title: 'ReducedLUT: Table Decomposition with "Don\'t Care" Conditions',
    venue: 'FPGA 2025',
    venueFullName: 'ACM/SIGDA International Symposium on Field-Programmable Gate Arrays',
    location: 'Monterey, CA',
    year: '2025',
    role: 'Lead Author',
    achievement: null,
    image: '/img/reducedlut.JPG',
    arxiv: 'https://arxiv.org/abs/2412.18579',
    stats: [
      { label: 'P-LUT reduction', value: 'up to 1.63×' },
      { label: 'Accuracy drop', value: '≤ 0.01 pts' },
      { label: 'Method', value: 'Similarity-based table decomposition with "don\'t cares"' },
    ],
    abstract:
      'Reduces physical look-up table utilisation when implementing LUT-based neural networks on FPGAs, exploiting "don\'t care" conditions in table decomposition — enabling ultra-low-latency inference on constrained devices.',
    badges: ['FPGA 2025', 'ACM/SIGDA', 'Lead Author', 'Published'],
  },
  {
    id: 'cascadelut',
    title: 'CascadeLUT: Information-Ordered Streaming Inference for Bandwidth-Constrained FPGAs',
    venue: 'FPL 2026',
    venueFullName: 'International Conference on Field-Programmable Logic and Applications',
    location: 'Ghent, Belgium',
    year: '2026',
    role: 'Lead Author',
    achievement: null,
    image: '/img/cascadelut.png',
    arxiv: null,
    stats: [
      { label: 'Latency reduction', value: 'up to 12.5×' },
      { label: 'Architecture', value: 'Statically scheduled cascade' },
      { label: 'Target', value: 'Bandwidth-constrained FPGAs' },
    ],
    abstract:
      'A novel statically scheduled cascade architecture for streaming neural network inference on bandwidth-constrained FPGAs. Achieves up to 12.5× lower latency through information-ordered feature delivery and layer scheduling.',
    badges: ['FPL 2026', 'Ghent, Belgium', 'Lead Author', 'Accepted'],
  },
];

export const experiences = [
  {
    id: 'amd',
    company: 'AMD',
    role: 'Research & Advanced Development Intern',
    period: 'Apr 2026 – Sep 2026',
    type: 'Industry',
    bullets: [
      'Accelerating transformer inference using FINN through quantization, multi-layer offloading and tiled multiplication',
      'Trained and quantized DeiT, SigLIP, BERT and VLA models targeting Versal AI platforms',
    ],
  },
  {
    id: 'trowe',
    company: 'T. Rowe Price',
    role: 'Software Engineering Intern',
    period: 'Jun 2025 – Sep 2025',
    type: 'Industry',
    bullets: [
      'Designed secure Azure environments using Terraform and Groovy CI/CD pipelines',
      'Deployed OpenAI agents with Bing search and MCP integration in Azure AI Foundry',
      'Built a custom MCP server and client backed by a SQL database',
    ],
  },
  {
    id: 'icl-research',
    company: 'Imperial College London',
    role: 'Research Assistant — Circuits & Systems Group',
    period: 'Jun 2024 – Present',
    type: 'Research',
    bullets: [
      'Extended NeuraLUT toolflow with Verilator testing harness and CUDA inference path',
      'Implemented latency-aware controller for dynamic NNs with early exits on ESP32',
      'Built PPO-based design-space exploration solver for fpgaConvNet, cutting runtime 75% vs SA solver',
      'Collaborated with TU Delft on brain-model FPGA research',
    ],
  },
  {
    id: 'tutoring',
    company: 'Self-employed',
    role: 'Private Tutor — Maths, Physics & Electronics',
    period: 'Jan 2021 – Present',
    type: 'Other',
    bullets: [
      'Tutored 15+ GCSE and A-Level students across mathematics, physics and electronics',
    ],
  },
];

export const education = {
  degree: 'MEng Electronic & Information Engineering',
  institution: 'Imperial College London',
  period: '2023 – 2027',
  honors: 'Predicted First-Class Honours',
  highlights: ["Dean's List 2024", 'Ranked 2nd in year', 'Paton Electronics Prize'],
};

export const projects = [
  {
    title: 'RL Racetrack',
    href: 'https://github.com/ollycassidy13/RL-Racetrack-Solver',
    image: '/img/rl-racetrack.png',
    description:
      'Reinforcement learning agent trained to race a track — policy gradient in Python.',
    category: 'ML',
    featured: true,
  },
  {
    title: 'Transformer From Scratch',
    href: '#',
    image: '/img/attention.png',
    description: 'Transformer architecture implemented end-to-end in PyTorch with CUDA kernels.',
    category: 'ML',
    featured: true,
  },
  {
    title: 'Landline',
    href: '#',
    image: '/img/landline.jpg',
    description:
      'Landline built from Op Amps, logic gates and flip flops. PCM over fibre optic.',
    category: 'Hardware',
    featured: true,
  },
  {
    title: 'CAPTCHA Breaker',
    href: 'https://github.com/ollycassidy13/CAPTCHA',
    image: '/img/captcha.jpg',
    description: 'ML model trained to break CAPTCHA challenges — image classification using CRNN.',
    category: 'ML',
    featured: true,
  },
  {
    title: 'CMATMUL',
    href: 'https://github.com/ollycassidy13/CMATMUL',
    image: '/img/cannl.png',
    description:
      'C++ matrix multiplication kernel with 100× throughput gain via cache-aware tiling, AVX2 microkernel and OpenMP.',
    category: 'Performance',
    featured: false,
  },
  {
    title: 'Wildfire Sentinel',
    href: 'https://wildfire-sentinel.onrender.com/',
    image: '/img/wildfire.png',
    description:
      'NASA wildfire data on an interactive OpenStreetMap with real-time event tracking.',
    category: 'Web',
    featured: false,
  },
  {
    title: 'Network Intrusion',
    href: 'https://github.com/ollycassidy13/nids',
    image: '/img/nids.png',
    description:
      'FNN trained on CIC-IDS2017 to classify 15 types of network attacks.',
    category: 'ML',
    featured: false,
  },
  {
    title: 'Topz',
    href: 'https://github.com/ollycassidy13/Topz',
    image: '/img/topz.png',
    description:
      'Real-time Linux system performance monitor in C++ — CPU, memory, and disk usage.',
    category: 'Systems',
    featured: false,
  },
  {
    title: 'MP3Meta',
    href: 'https://mp3-meta.vercel.app/',
    image: '/img/mp3meta.png',
    description: 'React web app for editing MP3 file metadata using the ID3 library.',
    category: 'Web',
    featured: false,
  },
  {
    title: 'Voltmeter',
    href: '#',
    image: '/img/voltmeter.jpg',
    description:
      'Voltmeter from logic gates and op amps. Ramp generator ADC. Accurate to ±0.5 V (0–9.5 V).',
    category: 'Hardware',
    featured: false,
  },
  {
    title: 'Collabify',
    href: 'https://github.com/ollycassidy13/Collabify',
    image: '/img/collabify2.png',
    description: 'React + Spotify API app for collaborative playlist building.',
    category: 'Web',
    featured: false,
  },
  {
    title: 'Remote Control Car',
    href: '#',
    image: '/img/car.jpg',
    description: 'RC car built from RF modules, logic gates and MOSFETs.',
    category: 'Hardware',
    featured: false,
  },
];

export const projectCategories = ['All', 'Hardware', 'Web', 'ML', 'Systems', 'Interactive', 'Game', 'Performance'];

export const skillGroups = [
  {
    label: 'Systems & Languages',
    skills: [
      { name: 'C++', level: 95, tag: 'ADV' },
      { name: 'Python', level: 92, tag: 'ADV' },
      { name: 'C', level: 80, tag: 'PRO' },
      { name: 'Java', level: 72, tag: 'PRO' },
      { name: 'SQL', level: 68, tag: 'PRO' },
    ],
  },
  {
    label: 'ML & Compute',
    skills: [
      { name: 'PyTorch', level: 90, tag: 'ADV' },
      { name: 'CUDA', level: 75, tag: 'PRO' },
      { name: 'Quantization', level: 88, tag: 'ADV' },
      { name: 'Reinforcement Learning', level: 78, tag: 'PRO' },
    ],
  },
  {
    label: 'Hardware & HDL',
    skills: [
      { name: 'SystemVerilog', level: 88, tag: 'ADV' },
      { name: 'FPGA / FINN', level: 90, tag: 'ADV' },
      { name: 'Verilog', level: 82, tag: 'PRO' },
      { name: 'Verilator', level: 75, tag: 'PRO' },
    ],
  },
  {
    label: 'Web & Cloud',
    skills: [
      { name: 'React', level: 80, tag: 'PRO' },
      { name: 'Flask', level: 72, tag: 'PRO' },
      { name: 'Terraform', level: 65, tag: 'PRO' },
      { name: 'TypeScript', level: 70, tag: 'PRO' },
    ],
  },
];

export const achievements = [
  { icon: '🎓', title: "Dean's List 2024", sub: 'Imperial College London' },
  { icon: '#2', title: 'Ranked 2nd in year', sub: 'EIE · ICL 2024' },
  { icon: '📄', title: '2 Published Papers', sub: 'FPGA 2025 · FPL 2026' },
  { icon: '⚡', title: 'Paton Prize', sub: 'Electronics excellence' },
];

export type TimelineType = 'education' | 'research' | 'paper' | 'work' | 'achievement' | 'project';

export const timeline: { year: string; label: string; desc: string; type: TimelineType }[] = [
  {
    year: '2026',
    label: 'AMD RAD Lab',
    desc: "6-month research internship in AMD's Research & Advanced Development team. Quantizing DeiT, SigLIP, BERT, and VLA models for Versal AI platforms.",
    type: 'work',
  },
  {
    year: '2026',
    label: 'CascadeLUT — FPL 2026',
    desc: 'Second paper accepted at FPL 2026 in Ghent. A statically scheduled cascade architecture for streaming NN inference — up to 12.5× lower latency.',
    type: 'paper',
  },
  {
    year: '2025',
    label: 'Fast ML Tutorial',
    desc: 'Gave a hands-on LUT-based NN tutorial at Fast Machine Learning for Science. Live end-to-end demo on a PYNQ board.',
    type: 'research',
  },
  {
    year: '2025',
    label: 'T. Rowe Price',
    desc: 'Software Engineering Intern. Built Azure AI pipelines, deployed OpenAI agents with MCP integration, and shipped a custom MCP server backed by SQL.',
    type: 'work',
  },
  {
    year: '2025',
    label: 'ReducedLUT — FPGA 2025',
    desc: "First paper accepted at ACM/SIGDA FPGA 2025 in Monterey, CA. Turned out to be the youngest presenter in the conference's history.",
    type: 'paper',
  },
  {
    year: '2024',
    label: "Dean's List · Ranked #2",
    desc: "Finished the year ranked 2nd in the cohort and made the Dean's List.",
    type: 'achievement',
  },
  {
    year: '2024',
    label: 'Circuits & Systems Research Group',
    desc: 'Joined the research group at ICL and started digging into LUT-based neural networks for FPGAs.',
    type: 'research',
  },
  {
    year: '2023',
    label: 'Imperial College London',
    desc: 'Started MEng Electronic & Information Engineering. On track for First-Class Honours.',
    type: 'education',
  },
  {
    year: '2021',
    label: 'A Levels',
    desc: 'A* in Maths, Further Maths, Physics & Electronics at Manchester Grammar School. Won the Paton Electronics Prize.',
    type: 'education',
  },
];

/* ── Sport ──────────────────────────────────────────────
   PLACEHOLDER times / clubs / images — edit with your real
   PBs and swap the image paths for your own photos.        */
export const sport = {
  running: {
    label: 'Track Running',
    blurb:
      'Middle-distance on the track — the same obsession with latency, just measured in seconds. Currently racing 1500m through 5000m.',
    events: [
      { distance: '1500m / Mile', pb: '4:46 / 5:06', note: 'PB' },
      { distance: '3000m', pb: '10:08', note: 'PB' },
      { distance: '5000m', pb: '17:46', note: 'PB' },
    ] as { distance: string; pb: string; note: string }[],
    images: [
      { src: '/img/sport-run-1.jpg', caption: '3000m / 5000m racing' },
      { src: '/img/sport-run-2.jpg', caption: '1500m racing' },
    ],
  },
  cycling: {
    label: 'Cycling',
    blurb:
      'Previously raced across three disciplines before moving to the track — road, cyclocross and the velodrome.',
    disciplines: [
      { name: 'Road', desc: 'Road racing and bunch crits — endurance and positioning.' },
      { name: 'Cyclocross', desc: 'Off-road, mud and barriers through the winter season.' },
      { name: 'Track', desc: 'Fixed-gear racing on the velodrome — pure speed.' },
    ] as { name: string; desc: string }[],
    images: [
      { src: '/img/sport-bike-1.jpg', caption: 'Road racing' },
      { src: '/img/sport-bike-2.jpg', caption: 'Cyclocross' },
    ],
  },
};
