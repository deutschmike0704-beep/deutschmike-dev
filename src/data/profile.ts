// Zentrale Content-Datei: hier Texte/Daten pflegen, ohne die Komponenten anzufassen.

export const profile = {
  name: "Mike Deutsch",
  role: "Angehender Fachinformatiker für Anwendungsentwicklung",
  tagline: "Vom Metallbau in die Softwareentwicklung – handwerklich präzise, jetzt im Code.",
  location: "Bautzen, Deutschland",
  email: "deutschmike0704@proton.me",
  socials: {
    github: "https://github.com/deutschmike0704-beep",
    linkedin: "",
    xing: "",
  },
  summary:
    "Nach einer abgeschlossenen Ausbildung zum Metallbauer und mehreren Jahren Berufserfahrung in Fertigung und Sachbearbeitung befinde ich mich aktuell in der Umschulung zum Fachinformatiker für Anwendungsentwicklung. In eigenen Projekten arbeite ich mit JavaScript/Node.js, Java und Lua – von einem Multiplayer-Browserspiel bis zu einem Mod mit eigener Testsuite und Dokumentation.",
};

export type CareerEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const career: CareerEntry[] = [
  {
    period: "seit 2025",
    title: "Umschulung zum Fachinformatiker für Anwendungsentwicklung",
    organization: "WBS Training",
    description:
      "Schwerpunkte: Programmierung (Java, JavaScript), Datenbanken, IT-Systeme. Prüfungsvorbereitung für die IHK-Abschlussprüfung (FIAE) läuft.",
  },
  {
    period: "05/2025 – 10/2025",
    title: "Werkzeugmechaniker",
    organization: "Pulp-Tec GmbH & Co. KG",
    description: "",
  },
  {
    period: "09/2024 – 12/2024",
    title: "Sachbearbeiter",
    organization: "Mediakom GmbH & Co. KG",
    description: "",
  },
  {
    period: "09/2023 – 08/2024",
    title: "Metallbauer",
    organization: "Akzent Personaldienstleistungen GmbH & Co. KG",
    description: "",
  },
  {
    period: "08/2022 – 08/2023",
    title: "Metallbauer",
    organization: "Gebr. Hähnel GbR",
    description: "",
  },
  {
    period: "2018 – 2022",
    title: "Ausbildung zum Metallbauer (Konstruktionstechnik), abgeschlossen",
    organization: "ASB Anlagen-, Stahl- und Bau-Montagegesellschaft mbH",
    description: "",
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Palworld Storage Manager",
    description:
      "UE4SS-Mod für Palworld: vereinheitlicht Materialien aus allen Lager-Containern einer Base beim Craften und hebt das Traglimit im Base-Camp auf. Mit Konfigurationssystem, 27 automatisierten Tests und ausführlicher Doku.",
    tags: ["Lua", "UE4SS", "Testing"],
    repoUrl: "https://github.com/deutschmike0704-beep/palworld-storage-manager",
  },
  {
    name: "2D-MMO-RPG (Grundgerüst)",
    description:
      "Browserbasiertes 2D-Multiplayer-RPG: mehrere Spieler bewegen sich auf einer gemeinsamen Karte, sehen sich gegenseitig und können chatten. Node.js-WebSocket-Server als autoritative Instanz für Bewegung und Kollision.",
    tags: ["Node.js", "WebSocket", "JavaScript"],
  },
  {
    name: "Arrow Dungeon",
    description:
      "Archero-artiger 2D-Room-Fighter im Browser: automatisches Schießen auf Gegner, raumweise Progression mit zufälligen Powerups und Boss-Räumen.",
    tags: ["JavaScript", "Canvas", "Game Dev"],
  },
];

export const skills: string[] = [
  "JavaScript",
  "Node.js",
  "Java",
  "Lua",
  "HTML/CSS",
  "Git",
  "WebSocket",
];
