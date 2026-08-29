import { profile } from "@/data/profile";
import { safeHttpUrl } from "@/lib/url";

export default function Footer() {
  const githubUrl = safeHttpUrl(profile.socials.github);

  return (
    <footer className="border-t border-foreground/10 py-8 text-sm text-muted">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </footer>
  );
}
