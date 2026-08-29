import { career } from "@/data/profile";
import ScrollReveal from "./ScrollReveal";

export default function Werdegang() {
  return (
    <section
      id="werdegang"
      className="scroll-mt-20 border-t border-foreground/10 py-16"
    >
      <ScrollReveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Werdegang
        </h2>
      </ScrollReveal>

      <ol className="relative mt-10 space-y-10 border-l border-foreground/10 pl-8">
        {career.map((entry, i) => (
          <ScrollReveal
            key={`${entry.period}-${entry.title}`}
            delay={Math.min(i * 0.06, 0.3)}
            className="relative"
          >
            <li>
              <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-accent to-accent-2" />
              <span className="text-sm font-medium text-accent">
                {entry.period}
              </span>
              <h3 className="mt-1 font-display font-semibold">
                {entry.title}
              </h3>
              <p className="text-sm text-muted">{entry.organization}</p>
              {entry.description && (
                <p className="mt-2 leading-7 text-muted">
                  {entry.description}
                </p>
              )}
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </section>
  );
}
