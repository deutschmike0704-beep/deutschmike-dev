import { projects } from "@/data/profile";
import { safeHttpUrl } from "@/lib/url";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projekte"
      className="scroll-mt-20 border-t border-foreground/10 py-16"
    >
      <ScrollReveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Projekte
        </h2>
      </ScrollReveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          const liveUrl = safeHttpUrl(project.url);
          const repoUrl = safeHttpUrl(project.repoUrl);
          return (
            <ScrollReveal
              key={project.name}
              delay={Math.min(i * 0.08, 0.32)}
              className="group relative rounded-2xl border border-foreground/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                style={{ backgroundImage: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
              />
              <h3 className="font-display font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-foreground/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-4 text-sm">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Live ↗
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
