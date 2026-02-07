const u = (id: string, w = 1200, q = 85) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}`;

export const images = {
  hero: u("1618005182384-a83a8bd57fbe", 1920),
  work: {
    brand: u("1557804506-669a67965ba0"),
    video: u("1492691527719-9d1e07e534b4"),
    product: u("1618005182384-a83a8bd57fbe"),
    web: u("1460925895917-afdab827c52f"),
    event: u("1540575467063-178bf50e7b8a"),
  },
  gallery: [
    { src: u("1557804506-669a67965ba0"), title: "Brand Campaign", alt: "Brand and print design" },
    { src: u("1492691527719-9d1e07e534b4"), title: "Corporate Video", alt: "Video production" },
    { src: u("1542744094-24638eff58bb"), title: "Digital Experience", alt: "Digital design" },
    { src: u("1460925895917-afdab827c52f"), title: "Data & Design", alt: "Web and data" },
    { src: u("1522071820081-009f0129c71c"), title: "Team & Culture", alt: "Creative team" },
    { src: u("1552664730-d307ca884978"), title: "Event Coverage", alt: "Event and conference" },
    { src: u("1561070791-2526d30994b5"), title: "Social Content", alt: "Social media" },
    { src: u("1553877522-43269d4ea984"), title: "Web & App", alt: "Web development" },
  ],
  services: {
    flyers: u("1557804506-669a67965ba0", 600),
    video: u("1492691527719-9d1e07e534b4", 600),
    animation: u("1618005182384-a83a8bd57fbe", 600),
    web: u("1460925895917-afdab827c52f", 600),
    social: u("1561070791-2526d30994b5", 600),
  },
  about: u("1522071820081-009f0129c71c"),
  cta: u("1618005182384-a83a8bd57fbe", 1920),
} as const;
