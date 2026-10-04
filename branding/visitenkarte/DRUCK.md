# Visitenkarte v3 – Druckhinweise

## Dateien

| Datei | Zweck |
|---|---|
| `vorderseite.svg` | bearbeitbare Quelle Vorderseite (mm-Koordinaten) |
| `rueckseite.svg` | bearbeitbare Quelle Rückseite inkl. QR (von build.py erzeugt) |
| `build.py` | erzeugt QR + `visitenkarte_v3.pdf` + `vorschau.png` reproduzierbar |
| `visitenkarte_v3.pdf` | **Druck-PDF, 2 Seiten** (Seite 1 Vorder-, Seite 2 Rückseite) |
| `vorschau.png` | beide Seiten nebeneinander (nur zur Ansicht) |

Neu bauen: `python3 build.py` (benötigt `segno`, `playwright` mit Chrome, `opencv-python-headless`).

## Format & Beschnitt

- Endformat **85 × 55 mm**, Dokument **91 × 61 mm** inkl. **3 mm Beschnitt** rundum.
- Beschnittkante liegt bei 3 mm / 88 mm (x) bzw. 3 mm / 58 mm (y).
- Hintergründe, der schwarze Rand und der Amber-Streifen laufen voll in den Beschnitt.
- Alle Texte und das Logo halten **≥ 4 mm** Sicherheitsabstand zum Endformat.

## Farbe: RGB → CMYK

- Die Dateien liegen in **RGB** vor (Amber `#efaa14`, dunkler Amber-Akzent `#de8f0c`,
  Grund dunkel `#0c0d0e`, hell `#f7f7f2`).
- Die Druckerei konvertiert in der Regel nach **CMYK**. Amber/Orange verschiebt sich
  dabei erfahrungsgemäß am stärksten (wirkt oft etwas stumpfer/dunkler).
- **Vor der Auflage einen Proof bzw. Probedruck anfordern** und das Amber prüfen.
  Falls nötig, Amber im CMYK-Workflow leicht nachsättigen.

## Schriften

- Verwendet wird **Poppins** (600/700). Beim PDF-Export über Chrome werden die
  genutzten Glyphen **vollständig eingebettet** (Subset). Es sind keine System-
  schriften nötig; es sollte zu keiner Ersetzung in der Druckerei kommen.
- Wer ganz sicher gehen will, lässt die Druckerei die Schrift im PDF bestätigen
  oder wandelt die Texte vor dem Druck zusätzlich in Pfade um.

## QR-Code

- Ziel **https://deutschmike.dev**, Fehlerkorrektur **M**, Version 2 (25 × 25 Module).
- Modulgröße ca. **0,76 mm**, Ruhezone **3 mm** (= ~4 Module) durch die weiße Karte.
- Der QR wird bei jedem `build.py`-Lauf **maschinell ausgelesen und gegen die Ziel-URL
  geprüft** (OpenCV). Trotzdem nach dem Druck mit dem Handy gegentesten.
- Dunkle Module in `#0c0d0e` auf Weiß → hoher Kontrast fürs Scannen.

## Hinweis zu den Texten

Die Karte wurde anhand der Website und des Impressums aufgebaut (Name, Rolle,
Telefon, E-Mail, Domain, Claim „Ihre Idee. Meine Umsetzung."). Die alte
`visitenkarte_v2.pdf` lag im Repository nicht vor – bitte die Texte einmal gegen
die alte Karte abgleichen, falls dort abweichende Formulierungen standen.
