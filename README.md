# deutschmike.dev

Persönliche Profil-/Vorstellungsseite von Mike Deutsch. Reines HTML/CSS, kein
Build-Schritt, keine Abhängigkeiten – einfach Dateien bearbeiten und pushen.

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder für einen lokalen Server:

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` aufrufen.

## Struktur

```
index.html                Startseite (Hero, Werdegang, Skills, Projekte, Kontakt),
                          inkl. JSON-LD (Person/WebSite/ProfilePage) und OG/Twitter-Tags
impressum.html            Impressum (§ 5 DDG), noindex
datenschutz.html          Datenschutzerklärung, noindex
404.html                  Fehlerseite für GitHub Pages
robots.txt                Erlaubt Crawling, verweist auf sitemap.xml
sitemap.xml               Nur echte, indexierbare Seiten (Start + Live-Demo)
assets/style.css          Sämtliches Styling (CSS-Variablen für Light/Dark oben in :root)
assets/main.js            Kleine progressive Verbesserung (Scroll-Reveal, kein Framework)
assets/favicon.svg        Favicon (Monogramm "MD")
assets/fonts/             Selbst gehostetes Poppins (600/700, Latin-Subset als woff2) –
                          bewusst nicht von Google Fonts geladen, siehe Datenschutz
assets/mike-deutsch.*     Hero-Foto (WebP + JPEG-Fallback), Duotone-Look kommt per CSS
assets/og-image.jpg       Social-Preview-Bild (1200×630) für og:image/twitter:image
CNAME                     Custom Domain für GitHub Pages (deutschmike.dev)
_material/                Rohmaterial/Arbeitsaufträge zur Website-Erstellung, nicht Teil der
                          veröffentlichten Seite (gitignored, siehe .gitignore)
```

## Inhalte pflegen

- **Texte ändern**: direkt in `index.html`, die Sektionen sind mit
  `<section id="...">` klar benannt (werdegang, skills, projekte, kontakt).
  Werden Name, Beruf, Ort oder Werdegang geändert, bitte auch das
  JSON-LD-Skript (`<script type="application/ld+json">` im `<head>`) und die
  `og:`/`twitter:`-Meta-Tags mitziehen, sonst laufen strukturierte Daten und
  sichtbarer Text auseinander.
- **Neues Projekt hinzufügen**: im Bereich `#projekte` ein `<article
  class="project-card">` kopieren, Badge/Titel/Text/Tags anpassen und bei
  Bedarf einen Button mit Link zum GitHub-Repo ergänzen (`class="btn
  btn-secondary"`).
- **Hero-Foto austauschen**: neues Foto zuschneiden (Hochformat, Kopf/Schultern
  mittig, Seitenverhältnis nahe 900:1738 spart eine erneute CSS-Anpassung) und
  als `assets/mike-deutsch.webp` + `assets/mike-deutsch.jpg` ablegen, dabei
  `width`/`height` am `<img>` in `index.html` auf die echten Pixelmaße
  anpassen. Der Duotone-Effekt (Graustufen + Akzentfarbe per
  `mix-blend-mode`) und die weiche Maskierung kommen automatisch aus
  `style.css` (`.hero-photo`) – am Bild selbst muss nichts weiter bearbeitet
  werden, und er passt sich Hell-/Dunkelmodus automatisch an. Das
  `assets/og-image.jpg` (Social-Preview) wird davon unabhängig gepflegt und
  muss beim Fototausch separat aktualisiert werden.
- **Schriften**: Poppins liegt als woff2 unter `assets/fonts/` und wird per
  `@font-face` in `style.css` eingebunden – nicht wieder auf einen
  Google-Fonts-`<link>` umstellen, sonst stimmt die Aussage "keine externen
  Schriftarten" in `datenschutz.html` nicht mehr.

## Veröffentlichen

Änderungen committen und auf `main` pushen – GitHub Pages baut daraus
automatisch die live Seite unter https://deutschmike.dev/ (kein separater
Build-Schritt, keine GitHub Action nötig).
