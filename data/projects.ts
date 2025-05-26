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
  textTheme: "light" | "dark";
  contentBlocks: ContentBlock[];
}

export type ContentBlock =
  | { type: "image"; src: string; alt?: string; noShadow?: boolean }
  | { type: "text"; content: string; isHeader?: boolean; isList?: boolean; highlight?: boolean }
  | { type: "video"; src: string; title?: string }
  | { type: "text-full"; content: string }
  | { type: "image-full"; title: string; src: string; alt?: string }
  | {
      type: "code";
      title: string;
      code: Record<string, any>;
      keyColor: string;
      valueColor: string;
      punctuationColor: string;
    }
  | { type: "two-col"; left: ContentBlock[]; right?: ContentBlock[]; leftCenter?: boolean; rightCenter?: boolean }
  | { type: "vectary-3d"; title: string; models: { id: string; src: string }[] }
  | {
      type: "three-col";
      title: string;
      images: { src: string; alt?: string }[];
    };

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
    textTheme: "dark",
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
            title: "SAMPLE STATE:",
            code: {
              entities: {
                users: {
                  1: { id: 1, username: "zen", email: "zen@zenterest.net" },
                },
                pins: {
                  8: {
                    id: 8,
                    title: "the goldfinch",
                    description: "carel fabritius, oil",
                    authorId: 1,
                  },
                },
                boards: {
                  3: {
                    id: 3,
                    title: "dutch oil paintings",
                    description: "dutch golden age",
                    authorId: 1,
                  },
                },
                boardPins: {
                  1: { id: 1, pinId: 7, boardId: 3 },
                },
                ui: { loading: true, modal: false },
                errors: {
                  login: ["Incorrect combination"],
                  pinForm: ["No Image Attached"],
                  boardForm: ["Title cannot be blank"],
                },
                session: { currentUser: 25 },
              },
            },
            keyColor: "ruby",
            valueColor: "navy",
            punctuationColor: "black",
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
  {
    slug: "babelbuilder",
    title: "Babel Builder",
    thumbnail: "/images/projects/babelbuilder/tn-babelbuilder.png",
    header: "/images/projects/babelbuilder/babelbuilder-01.gif",
    gradientColors: [
      "rgba(73, 73, 73, 0.74)",
      "rgba(27, 150, 127, 0.94)",
      "rgba(49, 109, 164, 0.98)",
    ],
    images: [
      "/images/projects/babelbuilder/babelbuilder-01.gif",
      "/images/projects/babelbuilder/babelbuilder-02.png",
    ],
    links: {
      "live site": "https://www.babelbuilder.com/",
      github: "https://github.com/colewendling/BabelBuilder",
    },
    stats: {
      Type: "Tower building simulation game",
      Software: "JavaScript, Cannon.js, Canvas",
    },
    linkColor: "cyan",
    statColor: "cyan",
    textTheme: "light",
    contentBlocks: [
      {
        type: "two-col",
        left: [
          {
            type: "text",
            content:
              "Babel Builder is a tower building game where a user must time their placement of flying tower segments to ensure that their tower grows as tall as possible. If the player’s segment timing is off, an overhang occurs and that part of the segment crumbles making it progressively harder as the game progresses!",
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• Integrate Cannon.js to implement physics for falling blocks and fog game mechanic to simulate atmosphere as tower grows.",
          },
          {
            type: "text",
            content:
              "• Implement code to gradually change hue value of tower segments as the game progresses.",
          },
        ],
      },
      {
        type: "image-full",
        title: "BABEL BUILDER DESIGN DIAGRAM",
        src: "/images/projects/babelbuilder/babelbuilder-02.png",
        alt: "BABEL BUILDER DESIGN DIAGRAM",
      },
    ],
  },
  {
    slug: "onda",
    title: "Onda",
    thumbnail: "/images/projects/onda/tn-onda.png",
    header: "/images/projects/onda/onda-01.jpg",
    gradientColors: [
      "rgba(73,73,73,1)",
      "rgba(150,82,27,1)",
      "rgba(62,59,52,0.98)",
    ],
    images: [
      "/images/projects/onda/onda-01.jpg",
      "/images/projects/onda/onda-02.jpg",
      "/images/projects/onda/onda-03.png",
      "/images/projects/onda/onda-04.jpg",
      "/images/projects/onda/onda-05.jpg",
    ],
    links: {
      press: "https://magazine.texasarchitects.org/2019/02/28/mixed-media/",
    },
    stats: {
      Type: "Digitally-Fabricated Wall",
      Size: "20’ l x 8’ h x 6”",
      Location: "University of Texas Campus - Austin, Texas",
      Software: "JavaScript, Grasshopper, G-Code",
    },
    linkColor: "ruby",
    statColor: "cyan",
    textTheme: "light",
    contentBlocks: [
      {
        type: "text-full",
        content:
          "ONDA - Spanish for electromagnetic wave, is a digitally fabricated installation meant to showcase the power of code to create procedurally generated parametric architecture.",
      },
      {
        type: "vectary-3d",
        title: "ONDA 3D GEOMETRY IN AR",
        models: [
          {
            id: "2da2ff29-1ea0-44c0-a49c-ff2beefda690",
            src: "https://www.vectary.com/viewer/v1/?model=2da2ff29-1ea0-44c0-a49c-ff2beefda690&env=studio3",
          },
          {
            id: "27bb8995-748c-46dd-b486-c93c3e362e42",
            src: "https://www.vectary.com/viewer/v1/?model=27bb8995-748c-46dd-b486-c93c3e362e42&env=studio3",
          },
        ],
      },
      {
        type: "two-col",
        left: [
          {
            type: "text",
            content:
              "• Featured on the cover of Texas Architect Monthly and installed permanently at the University of Texas campus in Austin.",
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• Recode the assembly into manageable block segments with 180+ script-generated CNC sheet layouts to minimize material waste.",
          },
        ],
      },
      {
        type: "image-full",
        title:
          "ONDA CONSTRUCTION DRAWINGS - AXONOMETRIC | PLAN | SECTION DETAIL",
        src: "/images/projects/onda/onda-02.jpg",
        alt: "ONDA CONSTRUCTION DRAWINGS - AXONOMETRIC | PLAN | SECTION DETAIL",
      },
      {
        type: "three-col",
        title: "BUILT WORK",
        images: [
          { src: "/images/projects/onda/onda-03.png" },
          { src: "/images/projects/onda/onda-04.jpg" },
          { src: "/images/projects/onda/onda-05.jpg" },
        ],
      },
    ],
  },
  {
    slug: "dickinson",
    title: "The Dickinson Sublime",
    thumbnail: "/images/projects/dickinson/dickinson-tn.gif",
    header: "/images/projects/dickinson/dickinson-tn.gif",
    gradientColors: ["#5e373d", "#1c4966", "rgba(103, 42, 42, 0.91)"],
    images: [
      "/images/projects/dickinson/dickinson-01.mp4",
      "/images/projects/dickinson/dickinson-02.mp4",
      "/images/projects/dickinson/dickinson-03.mp4",
      "/images/projects/dickinson/dickinson-04.mp4",
    ],
    links: {
      "LIVE SITE": "https://emilypoems.com/",
      GITHUB: "https://github.com/colewendling/emily-dickinson-sublime",
      WIKI: "https://github.com/colewendling/emily-dickinson-sublime?tab=readme-ov-file#emily-dickinson-sublime",
    },
    linkColor: "ruby",
    statColor: "cyan",
    textTheme: "dark",
    stats: {
      Type: "Interactive 3D Data Visualization",
      "Frontend Software": "Next.js, Three.js, TypeScript, Tailwind CSS",
    },
    contentBlocks: [
      {
        type: "text-full",
        content:
          "The Dickinson Sublime is an interactive 3D visualization mapping Emily Dickinson's 1,775 poems. It uses machine-learned embeddings to cluster related poems in space, with nodes colored by theme and links connecting works that share motifs.",
      },
      {
        type: "video",
        src: "/images/projects/dickinson/dickinson-01.mp4",
        title: "Explorable 3D Map of Dickinson's Poems",
      },
      {
        type: "two-col",
        left: [
          {
            type: "text",
            content:
              "• This project generates 384‑dimensional sentence embeddings for each poem via Hugging Face’s all-MiniLM-L6-v2 API, averages them into three dimensions, and positions poems as nodes in 3D space for thematic clustering.",
          },
          {
            type: "text",
            content:
              "• Three.js renders each node in a dynamic WebGL scene, styled via Tailwind CSS for responsive layout. Users can rotate, zoom, and pan the map on desktop or mobile for seamless exploration of Dickinson’s poem network.",
          },
          {
            type: "text",
            content:
              "• Edges link poems to their two nearest neighbors and those sharing major motifs, while node sizes scale by connection count to highlight central works. Clicking a node opens a modal with the full poem for deeper insight.",
          },
        ],
        right: [
          {
            type: "code",
            title: "SAMPLE POEM STRUCTURE:",
            code: {
              id: 4,
              date: 1853,
              stanzas: [
                ["On this wondrous sea", "Sailing silently,", "Ho! Pilot, ho!"],
                [
                  "Knowest thou the shore",
                  "Where no breakers roar -",
                  "Where the storm is o'er?",
                ],
                [
                  "In the peaceful west",
                  "Many the sails at rest -",
                  "The anchors fast -",
                  "Thither I pilot thee -",
                  "Land Ho! Eternity!",
                  "Ashore at last!",
                ],
              ],
              emphases: [
                { word: "thee", stanzaIndex: 2, lineIndex: 3, position: 3 },
              ],
            },
            keyColor: "ruby",
            valueColor: "navy",
            punctuationColor: "black",
          },
        ],
      },
      {
        type: "video",
        src: "/images/projects/dickinson/dickinson-03.mp4",
        title: "How It Works: Embedding and Visualization Overview",
      },
      {
        type: "two-col",
        left: [
          {
            type: "video",
            src: "/images/projects/dickinson/dickinson-04.mp4",
            title: "Animated Emphasis Highlighting in Poems",
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• As each poem node renders, highlighted words animate in sequence—echoing Emily Dickinson’s original emphasis—to bring emotional cadence and visual life to the text.",
          },
        ],
      },
      {
        type: "video",
        src: "/images/projects/dickinson/dickinson-02.mp4",
        title: "Poem Menu & Animated Modal: Themes and Motifs",
      },
    ],
  },
  {
    slug: "texaswaterway",
    title: "Texas Waterway",
    thumbnail: "/images/projects/texaswaterway/texaswaterway-tn.png",
    header: "/images/projects/texaswaterway/texaswaterway-tn.png",
    gradientColors: [
      "rgba(73,73,73,1)",
      "rgba(150,82,27,1)",
      "rgba(62,59,52,0.98)",
    ],
    images: [
      "/images/projects/texaswaterway/texaswaterway-01.jpg",
      "/images/projects/texaswaterway/texaswaterway-02.mp4",
      "/images/projects/texaswaterway/texaswaterway-03.png",
      "/images/projects/texaswaterway/texaswaterway-04.mp4",
      "/images/projects/texaswaterway/texaswaterway-05.mp4",
      "/images/projects/texaswaterway/texaswaterway-06.mp4",
      "/images/projects/texaswaterway/texaswaterway-07.mp4",
      "/images/projects/texaswaterway/texaswaterway-08.mp4",
      "/images/projects/texaswaterway/texaswaterway-09.mp4",
      "/images/projects/texaswaterway/texaswaterway-10.mp4",
    ],
    links: {
      "live site": "https://texaswaterway.com",
      github: "https://github.com/colewendling/texaswaterway",
      wiki: "https://github.com/colewendling/texaswaterway?tab=readme-ov-file#texaswaterway",
    },
    stats: {
      Type: "Full-Stack Web Application",
      "Frontend Software": "Next.js 15, React 18, Tailwind CSS, D3-geo",
      "Backend Software": "Sanity CMS, NextAuth.js, Cloudinary",
      Hosting: "Vercel (SSR, ISR, CDN)",
      Authentication: "GitHub OAuth & Email Magic Links",
    },
    linkColor: "ruby",
    statColor: "cyan",
    textTheme: "dark",
    contentBlocks: [
      {
        type: "text-full",
        content:
          "Texas Waterway is a modern full-stack application combining live environmental data with community-driven social features. Built with Next.js 15, TypeScript, and Tailwind CSS, it offers real-time lake dashboards, interactive maps, fish species guides, and event management — all seamlessly deployed on Vercel with serverless scalability.",
      },
      {
        type: "two-col",
        left: [
          { type: "text", content: "Key Features", isHeader: true },
          {
            type: "text",
            content:
              "• Live lake dashboards: real-time levels, weather, historical data.",
            isList: true,
          },
          {
            type: "text",
            content:
              "• Interactive Texas map for exploring lakes and community events.",
            isList: true,
          },
          {
            type: "text",
            content: "• Fish species guide with detailed catch tips.",
            isList: true,
          },
          {
            type: "text",
            content:
              "• Social: user profiles, friend requests, event creation and RSVPs.",
            isList: true,
          },
        ],
        right: [
          { type: "text", content: "Tech Utilization", isHeader: true },
          {
            type: "text",
            content:
              "• Next.js 15 App Router with SSR & ISR for high performance.",
            isList: true,
            highlight: true,
          },
          {
            type: "text",
            content:
              "• React 18 + TypeScript for robust, type-safe components.",
            isList: true,
            highlight: true,
          },
          {
            type: "text",
            content:
              "• Tailwind CSS & Radix UI for responsive, accessible styling.",
            isList: true,
            highlight: true,
          },
          {
            type: "text",
            content: "• Sanity CMS headless backend for structured content.",
            isList: true,
            highlight: true,
          },
          {
            type: "text",
            content:
              "• NextAuth.js for OAuth & email magic-link authentication.",
            isList: true,
            highlight: true,
          },
          {
            type: "text",
            content:
              "• Cloudinary for optimized media storage and CDN delivery.",
            isList: true,
            highlight: true,
          },
        ],
      },
      {
        type: "video",
        title: "Event Search & Filtering",
        src: "/images/projects/texaswaterway/texaswaterway-02.mp4",
      },
      {
        type: "two-col",
        left: [
          {
            type: "image",
            src: "/images/projects/texaswaterway/texaswaterway-03.png",
            alt: "Data Model & Schema Diagram",
            noShadow: true,
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• TexasWaterway uses Sanity CMS with custom schemas for Users, Events, Lakes, and FriendRequests. These define structured fields and relations, enabling efficient, type-safe queries from Next.js server components.",
            isList: true,
          },
          {
            type: "text",
            content:
              "• Only structured content (Users, Events, Playlists, FriendRequests) is stored in Sanity; larger data sets like historical lake metrics (daily records since the 1940s) are managed outside Sanity for optimal performance.",
            isList: true,
          },
        ],
        rightCenter: true,
      },
      {
        type: "text-full",
        content:
          "Texas Waterway integrates live APIs to fetch lake metrics (levels, weather) and fish species data directly from Texas state resources. These dynamic endpoints are consumed in server components, enabling charts and dashboards to reflect up-to-the-minute environmental statistics without manual refresh.",
      },
      {
        type: "two-col",
        left: [
          {
            type: "image",
            src: "/images/projects/texaswaterway/texaswaterway-04.png",
            alt: "Live Lake Data Dashboard",
          },
        ],
        right: [
          {
            type: "video",
            title: "Fish Species Information & Tips",
            src: "/images/projects/texaswaterway/texaswaterway-05.mp4",
          },
        ],
      },
      {
        type: "video",
        title: "User Profile & Friend Management",
        src: "/images/projects/texaswaterway/texaswaterway-06.mp4",
      },
      {
        type: "two-col",
        left: [
          {
            type: "video",
            title: "Real-Time Event View Counter",
            src: "/images/projects/texaswaterway/texaswaterway-07.mp4",
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• This view counter uses Next.js 15’s Partial Pre-Rendering: page content regenerates via ISR (60s cache), while counter renders per request via SSR, balancing static speed with live metrics.",
            isList: false,
          },
        ],
        rightCenter: true,
      },
      {
        type: "two-col",
        left: [
          {
            type: "video",
            title: "Custom Toast Notifications",
            src: "/images/projects/texaswaterway/texaswaterway-08.mp4",
          },
        ],
        right: [
          {
            type: "text",
            content:
              "• Custom toast notifications built with Radix UI for instant feedback on actions like friend requests, event creation and updating, and clipboard copy.",
          },
        ],
        rightCenter: true,
      },
      {
        type: "two-col",
        left: [
          {
            type: "video",
            title: "Interactive Lake Map",
            src: "/images/projects/texaswaterway/texaswaterway-09.mp4",
          },
        ],
        right: [],
      },
      {
        type: "two-col",
        left: [
          {
            type: "video",
            title: "Event Page Navigation",
            src: "/images/projects/texaswaterway/texaswaterway-10.mp4",
          },
        ],
        right: [],
      },
      {
        type: "image-full",
        title: "Authentication Flow & Profile Creation",
        src: "/images/projects/texaswaterway/texaswaterway-01.jpg",
        alt: "NextAuth login and new user creation",
      },
    ],
  },
];
