export const studio = {
  name: "Pyrolysis Game Labs",
  github: "https://github.com/AnthonyHinojosa77",
  githubLabel: "github.com/AnthonyHinojosa77",
  handles: {
    github: "github.com/AnthonyHinojosa77",
    play: "Cosmic Conquest",
    x: "@ForwardLensFL",
  },
  links: {
    github: "https://github.com/AnthonyHinojosa77",
    play: "https://anthonyhinojosa77.github.io/Cosmic-Conquest/",
    x: "https://x.com/ForwardLensFL",
  },
} as const;

export type GameStatus = "In Development" | "Playable";

export type Game = {
  id: string;
  title: string;
  pitch: string;
  note: string;
  status: GameStatus;
  platforms: string[];
  cover: string;
  alt: string;
  keyArt?: string;
  keyAlt?: string;
  keyCaption?: string;
  still?: string;
  stillAlt?: string;
  stillCaption?: string;
  href?: string;
};

export const games: Game[] = [
  {
    id: "limerality",
    title: "Limerality",
    pitch: "A first-person mystery in a place that has already closed.",
    note: "Limerality is an offline environmental mystery built in Godot. You move through the rooms after hours — a bedroom, a cottage garden, an atrium, a cybercafé, the pool deck, and the Meridian Picture House — and follow what was left behind. Desktop build 0.2.25 is in the kiln. There is no public release yet.",
    status: "In Development",
    platforms: ["Desktop"],
    cover: "/art/limerality-cover.jpg",
    keyArt: "/art/limerality-bedroom.jpg",
    keyAlt:
      "A bedroom in Limerality: posters and a red guitar on a dark wall, a lamp on the nightstand, and a CRT showing a sunset car.",
    keyCaption: "The bedroom, after closing.",
    still: "/art/limerality-cinema.jpg",
    stillAlt:
      "The Meridian Picture House entrance in Limerality, seen from the atrium after closing.",
    stillCaption: "Meridian Picture House, from the atrium.",
    alt: "A cropped view of the Limerality bedroom: the bed, the lamp, and posters on the wall.",
  },
  {
    id: "cosmic-conquest",
    title: "Cosmic Conquest",
    pitch: "A point-and-click retro-futurist social game.",
    note: "Explore illustrated scenes — a space-tourism voyage, a World’s Fair, a roadside diner — click what you find, and leave postcards, predictions, and menu items that other players can see.",
    status: "Playable",
    platforms: ["Browser"],
    cover: "/art/cosmic-cover.jpg",
    keyArt: "/art/cosmic-voyages.jpg",
    keyAlt:
      "A pulp illustration of a ticket agent in a silver suit at a space-tourism desk, with posters for Mars, Venus, and the Moon.",
    keyCaption: "The voyage desk. Art from the playable build.",
    still: "/art/cosmic-diner.jpg",
    stillAlt:
      "A robot waiter at a space diner counter, holding a burger, with a neon menu behind the patrons.",
    stillCaption: "The space diner. Click the room, leave something for the next visitor.",
    alt: "Pulp magazine cover for Cosmic Conquest: a rocket, a city of tomorrow, and a robot waitress at the Cosmo Cafe.",
    href: "https://anthonyhinojosa77.github.io/Cosmic-Conquest/",
  },
];

export const featured = games[0];

export type Station = {
  id: string;
  temp: number;
  label: string;
  nav?: string;
};

export const stations: Station[] = [
  { id: "top", temp: 20, label: "20°C" },
  { id: "featured", temp: 150, label: "150°C", nav: "Featured" },
  { id: "games", temp: 300, label: "300°C", nav: "Games" },
  { id: "studio", temp: 400, label: "400°C", nav: "Studio" },
  { id: "contact", temp: 500, label: "500°C", nav: "Contact" },
];

export const team = [
  {
    id: "anthony",
    name: "Anthony Hinojosa",
    role: "Studio",
    line: "Builds Limerality and Cosmic Conquest.",
  },
] as const;

export const story = [
  "Pyrolysis is what happens when heat breaks a material down without burning it away completely. Something remains: a structure you did not start with.",
  "Pyrolysis Game Labs is Anthony Hinojosa’s independent studio. Two games, both real. Limerality is the one still in the kiln: an offline, first-person environmental mystery in Godot. Cosmic Conquest is the one you can play now: a point-and-click retro-futurist social game in the browser.",
  "The page still heats as you scroll, from 20°C to 500°C. The catalog does not. These are the games.",
];

export function factSheet(): string {
  const lines = [
    "PYROLYSIS GAME LABS",
    "Fact sheet",
    "",
    "Pyrolysis Game Labs is the independent studio of Anthony Hinojosa. The name is the method: heat breaks a thing down, and what remains is the game. Two titles are confirmed.",
    "",
    "STUDIO",
    "Anthony Hinojosa",
    `GitHub: ${studio.githubLabel}`,
    `X: ${studio.handles.x}`,
    "",
    "GAMES",
    ...games.map((game) => {
      const link = game.href ? ` — ${game.href}` : "";
      return `${game.title} — ${game.status} — ${game.platforms.join(", ")} — ${game.pitch}${link}`;
    }),
    "",
    "CONTACT",
    `GitHub: ${studio.links.github}`,
    `Play Cosmic Conquest: ${studio.links.play}`,
    `X: ${studio.links.x}`,
    "",
    "BOILERPLATE",
    "Pyrolysis Game Labs is an independent studio run by Anthony Hinojosa. Limerality is a first-person environmental mystery in development. Cosmic Conquest is a retro-futurist point-and-click social game you can play in the browser.",
    "",
    "SHORT",
    "Pyrolysis Game Labs. Limerality in the kiln. Cosmic Conquest playable now.",
    "",
  ];
  return lines.join("\n");
}
