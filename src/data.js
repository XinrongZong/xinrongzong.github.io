// Everything on the page lives here. Editing this one file covers almost every
// content change you will ever make — the components in src/components/ only
// lay it out.
//
// Fields that need an inline link, bold or italics (about, news, authors,
// venue) are HTML snippets; they are rendered with Astro's `set:html`.
//
// Every list below is optional: empty the array and its section disappears
// from the page. Reordering sections means moving the blocks in
// src/pages/index.astro.
//
// The content shipped here is placeholder data for a fictional researcher.
// Replace it with your own.

// Images are imported from src/assets/ rather than written as public/ paths,
// so Astro can compress them, convert to WebP and emit a srcset at build time.
// Swap the files in place and the build takes care of the rest.
import photo from "./assets/e1029253497342d2ce87a360b4b7b3b7.png";
import northfield from "./assets/logos/northfield.png";
import lakeside from "./assets/logos/lakeside.png";
import riverbend from "./assets/logos/riverbend.png";

// Path to your CV inside public/. Putting the year and month in the filename
// means anyone who saves it can tell which version they have. To update:
// drop the new PDF into public/ under a new name, then change this line —
// the sidebar link and the About text both read this constant.

export const CV_URL = "Xinrong_Zong_CV.pdf";

export const profile = {
  nameEn: "Xinrong Zong",
  nameCn: "",
  role: ["M.Sc. Candidate in Food Engineering", "Politecnico di Milano"],
  location: "Milan, Italy",
  photo,
  links: [
    { label: "Email", href: "mailto:xinrong.zong@mail.polimi.it" },
    { label: "GitHub", href: "https://github.com/XinrongZong" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=MMVpEHgAAAAJ&hl=zh-CN" },
    { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `I am a Master’s student in Food Engineering at Politecnico di Milano, with expected graduation in April 2027. My research interests sit at the intersection of materials chemistry, sensing, molecular interactions, and quantitative analysis, with a particular focus on how molecular and structural features govern selective recognition and measurable response.`,

  `My previous research involved electrochemical sensing using screen-printed carbon electrodes and data analysis with CNN/SVM-based machine-learning methods, alongside experimental and simulated datasets. I am currently working with Prof. Massimo Cametti on my master’s thesis, where I am studying functional coordination materials for selective VOC adsorption and developing a molecular-level understanding of how crystal packing, intermolecular interactions, host–guest chemistry, and structural dynamics influence adsorption behavior.`,

  `For my PhD, I hope to investigate systems in which molecular design, functional materials, sensing, and data-driven methods can be combined to understand and control selective interactions in chemical, environmental, food, or biological contexts.`,
];


// Short, dated updates — new papers, talks, moves. Keep the newest first and
// the list short; three to six entries reads best. Empty the array to hide
// the section entirely.
export const news = [];
 
export const education = [
  {
    org: "Politecnico di Milano",
    role: "M.Sc. in Food Engineering · Expected graduation: Mar. 2027 · Expected final grade: 101/110",
    date: "Sep. 2024 – Present",
    url: "https://www.polimi.it/",
  },
  {
    org: "Middle East Technical University",
    role: "Erasmus+ Exchange Student, Department of Chemical Engineering · GPA: 3.60/4.00",
    date: "Feb. 2026 – Aug. 2026",
    url: "https://www.metu.edu.tr/",
  },
  {
    org: "Hong Kong University of Science and Technology",
    role: "Visiting Internship, Department of Chemistry · Grade: 92.5/100",
    date: "Feb. 2024 – Aug. 2024",
    url: "https://hkust.edu.hk/",
  },
  {
    org: "Northwest A&F University",
    role: "B.Eng. in Food Science and Engineering · GPA: 85.7/100",
    date: "Sep. 2020 – Jun. 2024",
    url: "https://en.nwsuaf.edu.cn/",
  },
];

// Published or accepted work. `abstract` and `bibtex` expand in place;
// everything in `links` becomes a button that opens in a new tab.
// All fields except `title` are optional.
export const publications = [
  {
    title:
      "Simulating Thin Markets: Agent-Based Evidence on Matching and Price " +
      "Formation",
    authors: "<strong>Jane Doe</strong> and John Roe",
    venue: "<em>Journal of Example Economics</em>, 14(2), 331–368",
    abstract:
      "Thin markets — those with few buyers, few sellers, or both — are common " +
      "and poorly understood, because the asymptotic results that organise " +
      "our thinking about large markets do not apply. We build an agent-based " +
      "model in which traders learn from their own transaction history rather " +
      "than from a commonly known equilibrium, and study how prices form as " +
      "the market thins. Three findings stand out. First, price dispersion " +
      "grows faster than the square root of market size, so thin markets are " +
      "noisier than sampling variation alone would predict. Second, a small " +
      "amount of centralised information — publishing the median transaction " +
      "price once per period — recovers most of the efficiency lost to " +
      "thinness. Third, the gains are unevenly distributed: they accrue " +
      "almost entirely to inexperienced traders. We validate the model " +
      "against transaction records from an online labour platform and find " +
      "the predicted dispersion pattern in the data.",
    bibtex: `@article{doe2025simulating,
  title   = {Simulating Thin Markets: Agent-Based Evidence on Matching and Price Formation},
  author  = {Doe, Jane and Roe, John},
  journal = {Journal of Example Economics},
  volume  = {14},
  number  = {2},
  pages   = {331--368},
  year    = {2025},
  doi     = {10.5555/example.2025.331}
}`,
    links: [
      { label: "Paper", href: "https://example.com/papers/thin-markets.pdf" },
      { label: "Code", href: "https://github.com/example" },
      { label: "Data", href: "https://example.com/data/thin-markets" },
    ],
  },
  {
    title:
      "Measuring Policy at Scale: A Text-as-Data Pipeline for Government " +
      "Documents",
    authors:
      "Alice Smith, <strong>Jane Doe</strong> and Bob Lee (equal contribution)",
    venue:
      "<em>Proceedings of the Example Conference on Computational Social " +
      "Science (EXAMPLE 2025)</em>",
    links: [
      { label: "Paper", href: "https://example.com/papers/policy-scale.pdf" },
    ],
  },
];

// Work in circulation but not yet published. Same fields as `publications`;
// `meta` adds a status line, which is where "R&R at …" or "under review"
// belongs. Empty the array and the section disappears.
export const workingPapers = [
  {
    title: "Do Referral Bonuses Crowd Out Referral Quality?",
    authors: "<strong>Jane Doe</strong>",
    meta: "Revise and resubmit, Journal of Example Economics",
    abstract:
      "Firms increasingly pay employees to refer candidates. Using the " +
      "staggered rollout of a referral bonus across 240 offices, I show that " +
      "the volume of referrals rises by 38% while the share that survive the " +
      "first screening round falls by 11 percentage points. Total quality-" +
      "adjusted referrals are unchanged. The pattern is concentrated among " +
      "employees with the weakest professional networks, consistent with a " +
      "model in which the bonus draws in referrals from the tail of the " +
      "referrer's acquaintance distribution rather than eliciting effort.",
    links: [{ label: "Draft", href: "https://example.com/papers/referral.pdf" }],
  },
];

// Ongoing research that does not yet have a circulating draft. Once a project
// produces one, move it up to `workingPapers`.
export const experience = [
  {
    org: "Market Design for Online Labour Platforms",
    desc: "Building a matching model that accounts for the search costs both sides actually face, and testing it against two years of platform transaction data.",
    role: "With Prof. Alice Smith (Northfield University)",
    date: "Sep 2024 – Present",
  },
  {
    org: "Policy Text at Scale",
    desc: "A two-stage pipeline over roughly 400,000 municipal documents, measuring which policy instruments are used, at what intensity, and for whom.",
    role: "Project lead, advised by Dr. Carol Nguyen (Example Institute)",
    date: "Jan 2024 – Present",
  },
  {
    org: "Public Service Provision and Regional Inequality",
    desc: "A city-year panel of 280 cities asking whether unequal access to public services widens the income gap between urban and rural households.",
    role: "Research assistant to Prof. David Park (Riverbend State University)",
    date: "Jun 2023 – Dec 2023",
  },
];

// Software, tools, datasets — anything you built that stands on its own.
export const publications = [
  {
    title:
      "Enhancing or not: What dominates the response signal of phenolic compounds on electro-activated glassy carbon electrode?",
    authors:
      "Qingshuang Wei, <strong>Xinrong Zong</strong>, Yitao Lv, Chaoqi Wang, Jiacheng Wang, Min Zhang",
    venue:
      "<em>Journal of Electroanalytical Chemistry</em>, 967 (2024), 118457",
    abstract:
      "Electro-activation has been an important surface modification strategy to enhance the signal of analytes on glassy carbon electrodes (GCE). This study investigated the factors governing the electrochemical response of phenolic compounds on electro-activated glassy carbon electrodes, with particular attention to surface functional groups and molecular structure. The results highlight how both electrode surface chemistry and analyte structure influence adsorption and electrochemical response.",
   links: [
  { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S1572665724004351" },
],

  {
    title:
      "Subtle adjustment of the cyclic potential on electro-activated glassy carbon electrodes for sensitive sensing of methyl parathion",
    authors:
      "Yunyin Yang, Sian Chen, Changqiu Zhang, Yanqing Li, <strong>Xinrong Zong</strong>, Yitao Lv, Min Zhang",
    venue:
      "<em>Analytical Methods</em>, 16 (2024), 2522–2532",
    abstract:
      "This study examined how small changes in the cyclic potential used during electro-activation affect the analytical performance of glassy carbon electrodes for methyl parathion sensing. By relating electrochemical performance to changes in electrode surface composition and structure, the work provides insight into how activation conditions can be tuned to improve sensitivity and reproducibility.",
    links: [
      {label: "Paper", href: "https://pubs.rsc.org/ay/article-abstract/16/16/2522/836811/Subtle-adjustment-of-the-cyclic-potential-on?redirectedFrom=fulltext"},
  },

  {
    title:
      "Research Progress on Electrochemical Paper-Based Analytical Devices for the Detection of Pesticide Residues",
    authors:
      "Yanqing Li, <strong>Xinrong Zong</strong>, Sian Chen, Min Zhang",
    venue:
      "<em>Food Science</em>, 2023, 15, 252–262",
    abstract:
      "This review summarizes recent progress in electrochemical paper-based analytical devices for pesticide-residue detection. It discusses paper selection, electrode fabrication, recognition elements, electrochemical detection strategies, and practical applications, while highlighting current limitations and future directions for portable and low-cost pesticide monitoring.",
    links: 
     {label: "Paper", href: "https://www.sciopen.com/article/10.7506/spkx1002-6630-20230915-133"}
  },
];
// Grants, prizes, fellowships. Empty the array to hide the section.
export const awards = [
  {
    org: "Example Foundation Doctoral Fellowship",
    role: "Three-year fellowship for research on market design",
    date: "2025",
  },
  {
    org: "Best Student Paper, EXAMPLE 2025",
    role: "For “Measuring Policy at Scale”",
    date: "2025",
  },
  {
    org: "Riverbend State University Departmental Prize in Economics",
    role: "Awarded to the top graduating student in the cohort",
    date: "2023",
  },
];

// Courses taught or assisted. Empty the array to hide the section.
export const teaching = [
  {
    org: "ECON 301: Intermediate Microeconomics",
    desc: "Ran three weekly sections of 25 students; wrote the problem sets on mechanism design.",
    role: "Graduate Student Instructor, Northfield University",
    date: "Fall 2025",
  },
  {
    org: "ECON 140: Econometrics",
    role: "Teaching Assistant, Northfield University",
    date: "Spring 2025",
  },
];

// Shown in the footer. Worth bumping whenever you edit the page — it tells a
// visitor whether they are reading something current.
export const lastUpdated = "January 2026";
