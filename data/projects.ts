// data/projects.ts

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  header: string;
  gradientColors: [string, string, string];
  images: string[];
  links: { [name: string]: string };
  stats: { [name: string]: string };
  linkColor: string;
  statColor: string;
  contentBlocks: ContentBlock[];
}

export type ContentBlock =
  | { type: "image"; src: string; alt?: string }
  | { type: "text"; content: string }
  | { type: "video"; src: string; title?: string }
  | { type: "text-full"; content: string }
  | { type: "image-full"; title: string; src: string; alt?: string }
  | { type: "code"; code: string; keyColor?: string; valueColor?: string }
  | { type: "two-col"; left: ContentBlock[]; right?: ContentBlock[] };

export const projects: Project[] = [
  {
    slug: "zenterest",
    title: "Zenterest",
    thumbnail: "/images/projects/zenterest/tn-zenterest.gif",
    header: "/images/projects/zenterest/zenterest-01.png",
    gradientColors: ["#4b4b4b", "#871313", "rgba(21, 21, 21, 0.91)"],
    images: [
      "/images/projects/zenterest/zenterest-02.gif",
      "/images/projects/zenterest/zenterest-03.gif",
      "/images/projects/zenterest/zenterest-04.gif",
      "/images/projects/zenterest/zenterest-05.gif",
      "/images/projects/zenterest/zenterest-06.png",
      "/images/projects/zenterest/zenterest-07.png",
    ],
    links: {
      "live site": "http://www.zenterest.net/",
      github: "https://github.com/colewendling/zenterest",
      wiki: "https://github.com/colewendling/zenterest/wiki",
    },
    stats: {
      Type: "Single Page Web & Mobile Application",
      "Frontend Software": "React, React Native with Redux",
      "Backend Software": "Ruby on Rails, PostgresSQL, AWS",
    },
    linkColor: "ruby",
    statColor: "ruby",
    contentBlocks: [
      // Full-width introduction text
      {
        type: "text-full",
        content:
          "Zenterest, a Pinterest inspired web application that allows users to create, organize and share content through personalized user boards. Zenterest’s backend & frontend were built from scratch without the aid of bootstrap or prebuilt components.",
      },

      // Full-width header image
      {
        type: "image-full",
        title: "PIN-INDEX | WEB BROWSER",
        src: "/images/projects/zenterest/zenterest-02.gif",
        alt: "PIN-INDEX | WEB BROWSER",
      },

      // Two-column block: left = text + image, right = code
      {
        type: "two-col",
        left: [
          {
            type: "text",
            content:
              "• Prioritize app scalability by designing a flat and seamless PostgreSQL database state shape, then implement joins-tables and many-to-many relationships within Rails backend models.",
          },
          {
            type: "text",
            content:
              "• Implement AWS as a strategy to outsource images and heavy assets to streamline Heroku server connection.",
          },
          {
            type: "image",
            src: "/images/projects/zenterest/zenterest-03.gif",
            alt: "PIN-INDEX | MOBILE COMPATIBILITY",
          },
        ],
        right: [
          {
            type: "code",
            code: `{
  entities: {
    users: {
      1: { id: 1, username: "zen", email: "zen@zenterest.net" }
    },
    pins: {
      8: { id: 8, title: "the goldfinch", description: "carel fabritius, oil", authorId: 1 }
    },
    boards: {
      3: { id: 3, title: "dutch oil paintings", description: "dutch golden age", authorId: 1 }
    },
    boardPins: {
      1: { id: 1, pinId: 7, boardId: 3 }
    },
    ui: { loading: true/false, modal: true/false },
    errors: { login: ["Incorrect combination"], pinForm: ["No Image Attached"], boardForm: ["Title cannot be blank"] },
    session: { currentUser: 25 }
  }
}`,
            keyColor: "cyan",
            valueColor: "magenta",
          },
        ],
      },

      // Two-column block: left images only
      {
        type: "two-col",
        left: [
          {
            type: "image",
            src: "/images/projects/zenterest/zenterest-04.gif",
            alt: "BOARD-SHOW → PIN-SHOW MODAL NAVIGATION",
          },
          {
            type: "image",
            src: "/images/projects/zenterest/zenterest-05.gif",
            alt: "PIN-FORM | USER PIN CREATION",
          },
        ],
        right: [],
      },

      // Additional full-width images
      {
        type: "image-full",
        title: "FRONTEND DESIGN | REACT COMPONENT PLANNING",
        src: "/images/projects/zenterest/zenterest-06.png",
        alt: "FRONTEND DESIGN | REACT COMPONENT PLANNING",
      },
      {
        type: "image-full",
        title: "BACKEND DESIGN | RAILS|REDUX → REACT CONNECTION",
        src: "/images/projects/zenterest/zenterest-07.png",
        alt: "BACKEND DESIGN | RAILS|REDUX → REACT CONNECTION",
      },
    ],
  },
  // {
  //   slug: "babelbuilder",
  //   title: "Babel Builder",
  //   thumbnail: "/images/projects/babelbuilder/tn-babelbuilder.png",
  //   images: [
  //     "/images/projects/babelbuilder/babelbuilder-01.gif",
  //     "/images/projects/babelbuilder/babelbuilder-02.png",
  //   ],
  //   gradientColors: ["rgba(73, 73, 73, 0.74)", "rgba(27, 150, 127, 0.94)", "rgba(49, 109, 164, 0.98)"],
  //   liveUrl: "https://www.babelbuilder.com/",
  //   githubUrl: "https://github.com/colewendling/BabelBuilder",
  //   description:
  //     "Babel Builder is a tower building game where a user must time their placement of flying tower segments to ensure that their tower grows as tall as possible. If the player’s segment timing is off an overhang occurs and that part of the segment crumbles making it progressively harder as the game progresses!",
  //   contentBlocks: [
  //     {
  //       type: "text",
  //       content:
  //         "Type: Tower building simulation game\n\nSoftware: JavaScript, Cannon.js, Canvas",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Integrate Cannon.js to implement physics for falling blocks and fog game mechanic to simulate atmosphere as tower grows.",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Implement code to gradually change hue value of tower segments as the game progresses.",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/babelbuilder/babelbuilder-01.gif",
  //       alt: "Gameplay demo of Babel Builder",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/babelbuilder/babelbuilder-02.png",
  //       alt: "Tower building screen in Babel Builder",
  //     },
  //   ],
  // },
  // {
  //   slug: "onda",
  //   title: "Onda",
  //   thumbnail: "/images/projects/onda/tn-onda.png",
  //   images: [
  //     "/images/projects/onda/onda-01.jpg",
  //     "/images/projects/onda/onda-02.png",
  //     "/images/projects/onda/onda-03.jpg",
  //     "/images/projects/onda/onda-04.jpg",
  //   ],
  //   gradientColors: ["rgba(73, 73, 73, 1)", "rgba(150, 82, 27, 1)", "rgba(62, 59, 52, 0.98)"],
  //   liveUrl: "https://magazine.texasarchitects.org/2019/02/28/mixed-media/",
  //   githubUrl: "",
  //   description:
  //     "ONDA - Spanish for electromagnetic wave, is a digitally fabricated installation meant to showcase the power of code to create procedurally generated parametric architecture. Featured on the cover of Texas Architect Monthly and installed permanently at the University of Texas campus in Austin.",
  //   contentBlocks: [
  //     {
  //       type: "text",
  //       content:
  //         "Type: Digitally-Fabricated Wall\nSize: 20’ l x 8’ h x 6”\nLocation: University of Texas Campus - Austin, Texas\n\nSoftware: JavaScript, Grasshopper, G-Code",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Recode the assembly into manageable block segments with 180+ script-generated CNC sheet layouts to minimize material waste.",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/onda/onda-01.jpg",
  //       alt: "Onda installation overview",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/onda/onda-02.png",
  //       alt: "Detail shot of Onda segments",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/onda/onda-03.jpg",
  //       alt: "Parametric assembly blocks for Onda",
  //     },
  //     {
  //       type: "image",
  //       src: "/images/projects/onda/onda-04.jpg",
  //       alt: "Onda installation at UT Austin",
  //     },
  //   ],
  // },
];
