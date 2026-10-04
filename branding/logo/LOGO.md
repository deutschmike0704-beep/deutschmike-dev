# Monogramm – Mike Deutsch

**Idee:** M und D teilen sich eine gemeinsame Senkrechte und stehen mit CAD-Knoten­punkten
auf einem feinen Konstruktionsraster – Präzision aus dem Metallbau, übersetzt in sauberen Code.

## Dateien

| Datei | Zweck |
|---|---|
| `md-logo.svg` | Standard, passt sich über `currentColor` automatisch an hellen/dunklen Grund an, Amber-Knoten |
| `md-logo-hell.svg` | Feste Farben für **hellen** Grund (Linien `#231f20`, Knoten `#de8f0c`) |
| `md-logo-dunkel.svg` | Feste Farben für **dunklen** Grund (Linien `#f4f5f3`, Knoten `#efaa14`) |
| `md-logo-mono.svg` | Einfarbig – alles `currentColor`, für Ein-Farben-Druck (Amber, Weiß oder Schwarz) |
| `md-logo-klein.svg` | Optimiert für 16–32 px (Favicon): ohne Raster, größer skaliert, Amber-Knoten als Markenfarbe |

Alle Dateien sind reine Vektorgrafik, `viewBox="0 0 64 64"`, keine eingebetteten Bilder,
keine Schrift (Formen sind Pfade). Linienstärke 6 (klein 6 × 1,24) auf dem 64er-Raster.

## Schutzzone

Mindestabstand rundum = **Höhe eines Rasterfeldes (8 Einheiten ≈ 1/8 der Logohöhe)** zu Text,
Kanten und anderen Elementen. Im Zweifel großzügiger halten; nichts darf in die Schutzzone ragen.

## Mindestgröße

- Bildschirm: **16 px** Höhe (dann `md-logo-klein.svg` verwenden).
- Druck: **6 mm** Höhe. Darunter das Raster weglassen (Kleinversion), damit es nicht zuläuft.

## Erlaubte Farben

- **Amber** `#efaa14` (Akzent/Knoten), auf hellem Grund als Textakzent `#de8f0c`.
- **Linien** dunkel `#231f20` auf Hell, hell `#f4f5f3` auf Dunkel.
- Einfarbig erlaubt in Amber, Weiß oder Schwarz (`md-logo-mono.svg`).
- Das Logo nie in anderen Farben, nicht verzerren, nicht drehen, Raster nicht verstärken.

## Herkunft

Die drei geprüften Entwürfe (Tag `<M/D>`, Terminal `›MD_`, Raster `MD`) liegen unter
`konzepte/`; `vergleich.html` zeigt sie nebeneinander. Gewählt wurde **Konzept C · Raster**.
