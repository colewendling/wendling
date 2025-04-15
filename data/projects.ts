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
];
