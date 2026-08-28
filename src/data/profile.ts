// Zentrale Content-Datei: hier Texte/Daten pflegen, ohne die Komponenten anzufassen.

export const profile = {
  name: "Mike Mustermann",
  role: "Softwareentwickler",
  tagline: "Ich baue verlässliche Software – von der Idee bis zum Deployment.",
  location: "Deutschland",
  email: "kontakt@deutschmike.dev",
  socials: {
    github: "https://github.com/deutschmike0704-beep",
    linkedin: "",
    xing: "",
  },
  summary:
    "TODO: Kurzer Absatz über dich – Schwerpunkte, Arbeitsweise, was dich als Entwickler ausmacht.",
};

export type CareerEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const career: CareerEntry[] = [
  {
    period: "TODO – heute",
    title: "TODO Jobtitel",
    organization: "TODO Firma",
    description: "TODO: Kurzbeschreibung der Rolle und Verantwortlichkeiten.",
  },
  {
    period: "TODO – TODO",
    title: "TODO Ausbildung/Studium",
    organization: "TODO Institution",
    description: "TODO: Schwerpunkte, Abschluss, relevante Projekte.",
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
    name: "TODO Projektname",
    description: "TODO: Was macht das Projekt, welches Problem löst es.",
    tags: ["TODO"],
    url: "",
    repoUrl: "",
  },
];

export const skills: string[] = ["TODO", "TODO", "TODO"];
