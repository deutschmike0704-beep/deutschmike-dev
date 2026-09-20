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
index.html                Startseite (Hero, Werdegang, Skills, Projekte, Kontakt)
impressum.html            Impressum (§ 5 DDG)
datenschutz.html          Datenschutzerklärung
404.html                  Fehlerseite für GitHub Pages
assets/style.css          Sämtliches Styling (CSS-Variablen für Light/Dark oben in :root)
assets/main.js            Kleine progressive Verbesserung (Scroll-Reveal, kein Framework)
assets/favicon.svg        Favicon (Monogramm "MD")
assets/mike-portrait.*    Hero-Foto (WebP + JPEG-Fallback), Duotone-Look kommt rein per CSS
CNAME                     Custom Domain für GitHub Pages (deutschmike.dev)
_material/                Rohmaterial/Arbeitsaufträge zur Website-Erstellung, nicht Teil der
                          veröffentlichten Seite (gitignored, siehe .gitignore)
```

## Inhalte pflegen

- **Texte ändern**: direkt in `index.html`, die Sektionen sind mit
  `<section id="...">` klar benannt (werdegang, skills, projekte, kontakt).
- **Neues Projekt hinzufügen**: im Bereich `#projekte` ein `<article
  class="project-card">` kopieren, Badge/Titel/Text/Tags anpassen und bei
  Bedarf einen Button mit Link zum GitHub-Repo ergänzen (`class="btn
  btn-secondary"`).
- **Hero-Foto austauschen**: neues Foto zuschneiden (Hochformat, Kopf/Schultern
  mittig, Seitenverhältnis nahe 900:1738 spart eine erneute CSS-Anpassung) und
  als `assets/mike-portrait.webp` + `assets/mike-portrait.jpg` ablegen, dabei
  `width`/`height` am `<img>` in `index.html` auf die echten Pixelmaße
  anpassen. Der Duotone-Effekt (Graustufen + Akzentfarbe per
  `mix-blend-mode`) und die weiche Maskierung kommen automatisch aus
  `style.css` (`.hero-photo`) – am Bild selbst muss nichts weiter bearbeitet
  werden, und er passt sich Hell-/Dunkelmodus automatisch an.

## Veröffentlichen

Änderungen committen und auf `main` pushen – GitHub Pages baut daraus
automatisch die live Seite unter https://deutschmike.dev/ (kein separater
Build-Schritt, keine GitHub Action nötig).
