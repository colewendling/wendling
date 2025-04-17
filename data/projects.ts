// data/projects.ts

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  images: string[];
  gradientColors: [string, string, string];
  liveUrl: string;
  githubUrl: string;
  wikiUrl?: string;
  description: string;
  contentBlocks: ContentBlock[];
}

export type ContentBlock =
  | { type: "image"; src: string; alt?: string }
  | { type: "text"; content: string }
  | { type: "video"; src: string; title?: string };

export const projects: Project[] = [
  {
    slug: "zenterest",
    title: "Zenterest",
    thumbnail: "/images/projects/zenterest/tn-zenterest.gif",
    images: [
      "/images/projects/zenterest/zenterest-01.png",
      "/images/projects/zenterest/zenterest-02.gif",
      "/images/projects/zenterest/zenterest-03.gif",
      "/images/projects/zenterest/zenterest-04.gif",
      "/images/projects/zenterest/zenterest-05.gif",
      "/images/projects/zenterest/zenterest-06.png",
      "/images/projects/zenterest/zenterest-07.png",
    ],
    gradientColors: ["#4b4b4b", "#871313", "rgba(21, 21, 21, 0.91)"],
    liveUrl: "http://www.zenterest.net/",
    githubUrl: "https://github.com/colewendling/zenterest",
    wikiUrl: "https://github.com/colewendling/zenterest/wiki",
    description:
      "Zenterest, a Pinterest-inspired web application, allows users to create, organize, and share content through personalized user boards. Zenterest’s backend and frontend were built from scratch without using Bootstrap or prebuilt components.",
    contentBlocks: [
      {
        type: "text",
        content:
          "Type: Single Page Web & Mobile Application\nFrontend Software: React, React Native with Redux\nBackend Software: Ruby on Rails, PostgreSQL, AWS",
      },
      {
        type: "text",
        content:
          "Prioritize app scalability by designing a flat and seamless PostgreSQL database state shape, then implement joins-tables and many-to-many relationships within Rails backend models.",
      },
      {
        type: "text",
        content:
          "Implement AWS as a strategy to outsource images and heavy assets to streamline Heroku server connection.",
      },
      {
        type: "image",
        src: "/images/projects/zenterest/zenterest-01.png",
        alt: "PIN-INDEX | WEB BROWSER",
      },
      {
        type: "text",
        content:
          'Sample State:\n{\n entities: {\n  users: {\n   1: { id: 1, username: "zen", email: "zen@zenterest.net" } },\n  pins: {\n   8: { id: 8, title: "the goldfinch", description: "carel fabritius, oil", authorId: 1 } },\n  boards: {\n   3: { id: 3, title: "dutch oil paintings", description: "dutch golden age", authorId: 1 } },\n  boardPins: {\n   1: { id: 1, pinId: 7, boardId: 3 } },\n ui: { loading: true/false, modal: true/false },\n errors: { login: ["Incorrect combination"], pinForm: ["No Image Attached"], boardForm: ["Title cannot be blank"] },\n session: { currentUser: 25 }\n }',
      },
      {
        type: "image",
        src: "/images/projects/zenterest/zenterest-02.gif",
        alt: "Feature demonstration of Zenterest",
      },
    ],
  },
  {
    slug: "babelbuilder",
    title: "Babel Builder",
    thumbnail: "/images/projects/babelbuilder/tn-babelbuilder.png",
    images: [
      "/images/projects/babelbuilder/babelbuilder-01.gif",
      "/images/projects/babelbuilder/babelbuilder-02.png",
    ],
    gradientColors: ["rgba(73, 73, 73, 0.74)", "rgba(27, 150, 127, 0.94)", "rgba(49, 109, 164, 0.98)"],
    liveUrl: "https://www.babelbuilder.com/",
    githubUrl: "https://github.com/colewendling/BabelBuilder",
    description:
      "Babel Builder is a tower building game where a user must time their placement of flying tower segments to ensure that their tower grows as tall as possible. If the player’s segment timing is off an overhang occurs and that part of the segment crumbles making it progressively harder as the game progresses!",
    contentBlocks: [
      {
        type: "text",
        content:
          "Type: Tower building simulation game\n\nSoftware: JavaScript, Cannon.js, Canvas",
      },
      {
        type: "text",
        content:
          "Integrate Cannon.js to implement physics for falling blocks and fog game mechanic to simulate atmosphere as tower grows.",
      },
      {
        type: "text",
        content:
          "Implement code to gradually change hue value of tower segments as the game progresses.",
      },
      {
        type: "image",
        src: "/images/projects/babelbuilder/babelbuilder-01.gif",
        alt: "Gameplay demo of Babel Builder",
      },
      {
        type: "image",
        src: "/images/projects/babelbuilder/babelbuilder-02.png",
        alt: "Tower building screen in Babel Builder",
      },
    ],
  },
  {
    slug: "onda",
    title: "Onda",
    thumbnail: "/images/projects/onda/tn-onda.png",
    images: [
      "/images/projects/onda/onda-01.jpg",
      "/images/projects/onda/onda-02.png",
      "/images/projects/onda/onda-03.jpg",
      "/images/projects/onda/onda-04.jpg",
    ],
    gradientColors: ["rgba(73, 73, 73, 1)", "rgba(150, 82, 27, 1)", "rgba(62, 59, 52, 0.98)"],
    liveUrl: "https://magazine.texasarchitects.org/2019/02/28/mixed-media/",
    githubUrl: "",
    description:
      "ONDA - Spanish for electromagnetic wave, is a digitally fabricated installation meant to showcase the power of code to create procedurally generated parametric architecture. Featured on the cover of Texas Architect Monthly and installed permanently at the University of Texas campus in Austin.",
    contentBlocks: [
      {
        type: "text",
        content:
          "Type: Digitally-Fabricated Wall\nSize: 20’ l x 8’ h x 6”\nLocation: University of Texas Campus - Austin, Texas\n\nSoftware: JavaScript, Grasshopper, G-Code",
      },
      {
        type: "text",
        content:
          "Recode the assembly into manageable block segments with 180+ script-generated CNC sheet layouts to minimize material waste.",
      },
      {
        type: "image",
        src: "/images/projects/onda/onda-01.jpg",
        alt: "Onda installation overview",
      },
      {
        type: "image",
        src: "/images/projects/onda/onda-02.png",
        alt: "Detail shot of Onda segments",
      },
      {
        type: "image",
        src: "/images/projects/onda/onda-03.jpg",
        alt: "Parametric assembly blocks for Onda",
      },
      {
        type: "image",
        src: "/images/projects/onda/onda-04.jpg",
        alt: "Onda installation at UT Austin",
      },
    ],
  },
];
