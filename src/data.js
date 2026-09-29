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
    role: "M.Sc. in Food Engineering · Expected graduation: April. 2027",
    date: "Sep. 2024 – Present",
    url: "https://www.polimi.it/",
  },
  {
    org: "Middle East Technical University",
    role: "Erasmus+ Exchange Student, Department of Chemical Engineering · ",
    date: "Feb. 2026 – Aug. 2026",
    url: "https://www.metu.edu.tr/",
  },
  {
    org: "Hong Kong University of Science and Technology",
    role: "Visiting Internship, Department of Chemistry · ",
    date: "Feb. 2024 – Aug. 2024",
    url: "https://hkust.edu.hk/",
  },
  {
    org: "Northwest A&F University",
    role: "B.Eng. in Food Science and Engineering · ",
    date: "Sep. 2020 – Jun. 2024",
    url: "https://en.nwsuaf.edu.cn/",
  },
];


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
      {
        label: "Paper",
        href: "https://www.sciencedirect.com/science/article/pii/S1572665724004351",
      },
    ],
  },

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
      {
        label: "Paper",
        href: "https://pubs.rsc.org/ay/article-abstract/16/16/2522/836811/Subtle-adjustment-of-the-cyclic-potential-on?redirectedFrom=fulltext",
      },
    ],
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
    links: [
      {
        label: "Paper",
        href: "https://www.sciopen.com/article/10.7506/spkx1002-6630-20230915-133",
      },
    ],
  },
];

export const workingPapers = [];

export const experience = [
  {
    org: "Molecular Design of Dynamic Bispidine-Based Coordination Polymers for Selective VOC Adsorption",
    desc:
      "Master’s thesis research on how ligand functionalization, crystal packing, intermolecular interactions, and framework dynamics govern selective VOC adsorption in bispidine-based coordination polymers. Current work focuses on designing ligand variants and developing structure–property hypotheses for molecular recognition toward small alcohol and chlorinated VOC guests, with planned characterization and adsorption studies using PXRD, 1H NMR, TGA, SC-XRD, and competitive vapor adsorption.",
    role:
      "Master’s Thesis Researcher · Supervisor: Prof. Massimo Cametti · Politecnico di Milano",
    date: "2026 – Present",
  },

  {
    org: "Deep Learning-Enhanced Electrochemical Sensor for Methyl Parathion Detection",
    desc:
      "Developed an electrochemical sensing framework combining electro-activated screen-printed carbon electrodes with machine-learning-assisted EIS analysis. Investigated electrode activation using CV, DPV, EIS, XPS, and Raman characterization, and developed a hybrid CNN–SVM pipeline for equivalent-circuit-model classification from impedance data. The model achieved 88.4% classification accuracy on 502 EIS samples, while electrode activation improved methyl parathion response and enabled a 0.05 μM detection limit.",
    role:
      "Research Assistant · National Research Project No. 31901773",
    date: "2023 – 2025",
  },

  {
    org: "Optimization of Electrochemical Aptasensor Stability for Pesticide Detection",
    desc:
      "Investigated factors governing the stability of an electrochemical aptasensor for acetamiprid detection, including electrode activation, aptamer immobilization, and 6-mercapto-1-hexanol blocking. Characterized electrode interfaces using EIS, CV, SEM, and XPS, and optimized immobilization and blocking conditions to reduce signal variability and improve sensor stability.",
    role:
      "Research Assistant · National Research Project No. 31901773",
    date: "2022 – 2024",
  },
];

// Software, tools, datasets — anything you built that stands on its own.

export const projects = [];
export const awards = [];
export const teaching = [];
export const lastUpdated = "September 2026";
