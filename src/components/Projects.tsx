import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section id="projekte" className="scroll-mt-20 border-t border-black/10 py-16 dark:border-white/10">
      <h2 className="text-2xl font-semibold tracking-tight">Projekte</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-black/10 p-5 dark:border-white/10"
          >
            <h3 className="font-medium">{project.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {project.url && (
                <a href={project.url} className="font-medium underline underline-offset-4">
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} className="font-medium underline underline-offset-4">
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
