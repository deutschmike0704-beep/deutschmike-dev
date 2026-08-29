import { profile } from "@/data/profile";
import { safeHttpUrl } from "@/lib/url";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const githubUrl = safeHttpUrl(profile.socials.github);

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t border-foreground/10 py-16"
    >
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-2 px-8 py-12 text-accent-contrast sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
          />
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Lust auf Zusammenarbeit?
          </h2>
          <p className="mt-4 max-w-xl leading-7 opacity-90">
            Interesse an einer Zusammenarbeit oder einfach Fragen zu meinen
            Projekten? Schreib mir gerne.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent-contrast px-5 py-2.5 text-sm font-medium text-accent transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-accent-contrast/30 px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5 hover:border-accent-contrast/60"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
