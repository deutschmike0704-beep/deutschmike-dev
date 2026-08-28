import { career } from "@/data/profile";

export default function Werdegang() {
  return (
    <section id="werdegang" className="scroll-mt-20 border-t border-black/10 py-16 dark:border-white/10">
      <h2 className="text-2xl font-semibold tracking-tight">Werdegang</h2>
      <ol className="mt-8 space-y-8">
        {career.map((entry) => (
          <li key={`${entry.period}-${entry.title}`} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">{entry.period}</span>
            <div>
              <h3 className="font-medium">
                {entry.title} · {entry.organization}
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{entry.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
