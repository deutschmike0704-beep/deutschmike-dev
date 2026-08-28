import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-20 border-t border-black/10 py-16 dark:border-white/10">
      <h2 className="text-2xl font-semibold tracking-tight">Kontakt</h2>
      <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
        Interesse an einer Zusammenarbeit? Schreib mir gerne.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      >
        {profile.email}
      </a>
    </section>
  );
}
