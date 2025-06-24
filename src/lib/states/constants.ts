export const NAV = [
  { id: "0", name: "home", path: "/" },
  { id: "1", name: "articles", path: "/articles" },
  // { id: "2", name: "skills", path: "/skills" },
  // { id: "3", name: "contact", path: "/contact" },
  // { id: "4", name: "projects", path: "/projects" },
];

export const NAVMAP = new Map([
  ["0", { name: "home", path: "/" }],
  ["1", { name: "articles", path: "/articles" }],
  ["2", { name: "skills", path: "/skills" }],
  ["3", { name: "contact", path: "/contact" }],
  ["4", { name: "projects", path: "/projects" }],
]);

export const TAB = ["nav", "main"] as const;
