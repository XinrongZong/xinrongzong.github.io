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
  `I am a Master’s student in Food Engineering at Politecnico di Milano, with expected graduation in March 2027. My research interests sit at the intersection of materials chemistry, sensing, molecular interactions, and quantitative analysis, with a particular focus on how molecular and structural features govern selective recognition and measurable response.`,

  `My previous research involved electrochemical sensing using screen-printed carbon electrodes and data analysis with CNN/SVM-based machine-learning methods, alongside experimental and simulated datasets. This work contributed to a peer-reviewed publication in the <em>Journal of Electroanalytical Chemistry</em>. I am currently working with Prof. Massimo Cametti on my master’s thesis, where I am studying functional coordination materials for selective VOC adsorption and developing a molecular-level understanding of how crystal packing, intermolecular interactions, host–guest chemistry, and structural dynamics influence adsorption behavior.`,

  `For my PhD, I hope to investigate systems in which molecular design, functional materials, sensing, and data-driven methods can be combined to understand and control selective interactions in chemical, environmental, food, or biological contexts.`,
];


// Short, dated updates — new papers, talks, moves. Keep the newest first and
// the list short; three to six entries reads best. Empty the array to hide
// the section entirely.
export const news = [
  {
    date: "Jan 2026",
    text: `Our paper on matching markets was accepted at the
           <em>Journal of Example Economics</em>.`,
  },
  {
    date: "Nov 2025",
    text: `Presented <strong>Simulating Thin Markets</strong> at the Example
           Workshop on Computational Economics.`,
  },
  {
    date: "Sep 2025",
    text: `Started as a research intern at the Example Institute for Economic
           Research.`,
  },
  {
    date: "Jun 2025",
    text: `Released <a href="https://github.com/example">policy-parse</a>, an
           open-source toolkit for extracting structured policy attributes
           from government documents.`,
  },
];

// `logo` and `url` are optional. `url` is the institution's homepage; it also
// feeds the structured-data block that tells search engines where you studied.
export const education = [
  {
    org: "Northfield University",
    role: "Ph.D. in Economics",
    date: "Sep 2023 – Jun 2028 (expected)",
    logo: northfield,
    url: "https://example.edu/",
  },
  {
    org: "Lakeside Institute of Technology",
    role: "Visiting Student, Department of Economics",
    date: "Jan 2023 – Jun 2023",
    logo: lakeside,
    url: "https://example.org/",
  },
  {
    org: "Riverbend State University",
    role: "B.A. in Economics, minor in Statistics",
    date: "Sep 2019 – Jun 2023",
    logo: riverbend,
    url: "https://example.net/",
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
export const projects = [
  {
    org: "policy-parse",
    desc: "An open-source toolkit that turns government documents into a structured policy database, with a fine-tuned classifier for screening and an LLM extraction stage for attributes.",
    role: "Author and maintainer · 1.2k stars",
    date: "2024 – Present",
    // Each entry becomes an outlined button, in the order you list them.
    // Label them for what they are: Code, Website, Docs, Demo, Slides, Data.
    links: [
      { label: "Code", href: "https://github.com/example" },
      { label: "Docs", href: "https://example.com/docs" },
      { label: "Website", href: "https://example.com" },
    ],
  },
  {
    org: "thinmarket",
    desc: "A small simulation library for agent-based matching markets, used for the experiments in the paper above.",
    role: "Author",
    date: "2024",
    links: [
      { label: "Code", href: "https://github.com/example" },
      { label: "Demo", href: "https://example.com/demo" },
    ],
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
