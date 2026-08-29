// Nur http/https durchlassen, damit z. B. `javascript:`/`data:` Links aus
// gepflegten Daten nie als href landen.
export function safeHttpUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}
