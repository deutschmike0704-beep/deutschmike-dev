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
index.html        Startseite (alle Sektionen: Hero, Werdegang, Skills, Projekte, Kontakt)
impressum.html     Impressum (§ 5 DDG)
datenschutz.html   Datenschutzerklärung
404.html           Fehlerseite für GitHub Pages
assets/style.css   Sämtliches Styling (CSS-Variablen für Light/Dark oben in :root)
assets/favicon.svg Favicon (Monogramm "MD")
lebenslauf.pdf      Aktuell nur ein Platzhalter – durch echten Lebenslauf ersetzen
CNAME              Custom Domain für GitHub Pages (deutschmike.dev)
```

## Inhalte pflegen

- **Texte ändern**: direkt in `index.html`, die Sektionen sind mit
  `<section id="...">` klar benannt (werdegang, skills, projekte, kontakt).
- **Neues Projekt hinzufügen**: im Bereich `#projekte` ein `<article
  class="project-card">` kopieren, Badge/Titel/Text/Tags anpassen und bei
  Bedarf einen Button mit Link zum GitHub-Repo ergänzen (`class="btn
  btn-secondary"`).
- **Lebenslauf aktualisieren**: `lebenslauf.pdf` im Hauptverzeichnis durch die
  aktuelle PDF-Datei ersetzen (gleicher Dateiname, dann funktionieren alle
  Links automatisch weiter).
- **Foto ergänzen**: den Platzhalter-Kreis `<div class="hero-avatar">MD</div>`
  in `index.html` durch `<img class="hero-avatar" src="assets/foto.jpg"
  alt="Mike Deutsch">` ersetzen und ein quadratisches Foto unter
  `assets/foto.jpg` ablegen.

## Veröffentlichen

Änderungen committen und auf `main` pushen – GitHub Pages baut daraus
automatisch die live Seite unter https://deutschmike.dev/ (kein separater
Build-Schritt, keine GitHub Action nötig).
