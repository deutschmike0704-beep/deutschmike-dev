# deutschmike.dev

Portfolio- und Angebotsseite von Mike Deutsch: Websites für kleine Betriebe und
KI-Startnummern-Erkennung für Rennfotos. Reines HTML/CSS, kein Build-Schritt,
keine Abhängigkeiten – einfach Dateien bearbeiten und pushen. Nur dunkles
Farbschema (Visitenkarten-Farbwelt).

## Lokal ansehen

Einfach `index.html` im Browser öffnen, oder für einen lokalen Server:

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` aufrufen.

## Struktur

```
index.html                Startseite (Hero, Websites, Startnummern, Projekte, Ablauf,
                          Über mich, FAQ, Kontakt), inkl. JSON-LD (Person, WebSite,
                          WebPage, ProfessionalService, Service, SoftwareApplication,
                          FAQPage) und OG/Twitter-Tags
impressum.html            Impressum (§ 5 DDG), noindex
datenschutz.html          Datenschutzerklärung, noindex
404.html                  Fehlerseite für GitHub Pages
robots.txt                Erlaubt Crawling, verweist auf sitemap.xml
sitemap.xml               Nur echte, indexierbare Seiten (Start + Live-Demo)
assets/style.css          Sämtliches Styling (CSS-Variablen für Light/Dark oben in :root)
assets/main.js            Kleine progressive Verbesserung: vorbereitete WhatsApp-/Mail-Texte
                          je Thema, Umschalter im Erkennungs-Schema, mobile Kontaktleiste,
                          aktive Navigation. Ohne JS funktioniert alles weiter.
assets/favicon.svg        Favicon (Monogramm "MD")
assets/fonts/             Selbst gehostetes Poppins (600/700, Latin-Subset als woff2) –
                          bewusst nicht von Google Fonts geladen, siehe Datenschutz
assets/og-image.png       Social-Preview-Bild (1200×630), Quelle: branding/og-image.html
CNAME                     Custom Domain für GitHub Pages (deutschmike.dev)
_material/                Rohmaterial/Arbeitsaufträge zur Website-Erstellung, nicht Teil der
                          veröffentlichten Seite (gitignored, siehe .gitignore)
```

## Inhalte pflegen

- **Texte ändern**: direkt in `index.html`, die Sektionen sind mit
  `<section id="...">` klar benannt (websites, startnummern, projekte, ablauf,
  ueber-mich, faq, kontakt). FAQ-Texte stehen doppelt (sichtbar und im
  FAQPage-JSON-LD) – beide gleich halten.
- **Zahlen**: nur aus `_material/PROJEKT-DOKUMENTATION.md` übernehmen, immer
  mit Messbedingung. Keine Preise, solange Modus REFERENZ gilt.
  Werden Name, Beruf, Ort oder Werdegang geändert, bitte auch das
  JSON-LD-Skript (`<script type="application/ld+json">` im `<head>`) und die
  `og:`/`twitter:`-Meta-Tags mitziehen, sonst laufen strukturierte Daten und
  sichtbarer Text auseinander.
- **Neues Projekt hinzufügen**: im Bereich `#projekte` ein `<article
  class="project">` kopieren, Badge/Titel/Text/Tags/Link anpassen.
- **Schriften**: Poppins liegt als woff2 unter `assets/fonts/` und wird per
  `@font-face` in `style.css` eingebunden – nicht wieder auf einen
  Google-Fonts-`<link>` umstellen, sonst stimmt die Aussage "keine externen
  Schriftarten" in `datenschutz.html` nicht mehr.

## Veröffentlichen

Änderungen committen und auf `main` pushen – GitHub Pages baut daraus
automatisch die live Seite unter https://deutschmike.dev/ (kein separater
Build-Schritt, keine GitHub Action nötig).
