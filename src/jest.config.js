export const transform = {
  "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["html", "text"],
};
export const transformIgnorePatterns = [
  "node_modules/(?!(react-dnd|dnd-core|react-dnd-html5-backend)/)",
];
