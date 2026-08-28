import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-20 py-20">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {profile.role} · {profile.location}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>
      <p className="mt-4 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.summary}
      </p>
    </section>
  );
}
