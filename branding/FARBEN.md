# Farbsystem – deutschmike.dev

Übernommen aus der Visitenkarte: dunkles `#0c0d0e`, helles `#f7f7f2`, Akzent-Amber `#efaa14`.
Alle Werte liegen als CSS-Variablen in `assets/style.css` (`:root` = hell, `@media (prefers-color-scheme: dark)` = dunkel).

## Token

| Token | Hell | Dunkel | Zweck |
|---|---|---|---|
| `--bg` | `#f7f7f2` | `#0c0d0e` | Seitenhintergrund |
| `--bg-alt` | `#eeeee7` | `#141518` | abgesetzte Sektion (Skills) |
| `--surface` | `#ffffff` | `#141518` | Karten/Panels |
| `--surface-2` | `#f2f2ea` | `#1b1d21` | Pills, Tags |
| `--border` | `#e3e3da` | `#272a30` | feine Kanten |
| `--text` | `#231f20` | `#f4f5f3` | Fließtext |
| `--text-muted` | `#5a5450` | `#a0a6ae` | Sekundärtext |
| `--accent` | `#efaa14` | `#efaa14` | Flächen, Linien, Buttons |
| `--accent-2` | `#f3bb40` | `#f3bb40` | nur dekorative Amber-Verläufe |
| `--accent-text` | `#8a5a00` | `#efaa14` | **Amber als Text** (hell abgedunkelt) |
| `--accent-contrast` | `#231f20` | `#231f20` | dunkle Schrift auf Amber-Flächen |

## Warum zwei Amber-Werte?

Reines Amber `#efaa14` als Fließtext erreicht auf hellem Grund nur **1,9 : 1** und fällt damit
durch jede WCAG-Stufe. Für Text im hellen Schema wird Amber deshalb auf `#8a5a00` abgedunkelt
(`--accent-text`). Auf dunklem Grund bleibt `#efaa14` als Text (9,7 : 1). Als **Fläche** (Buttons,
Streifen, Linien, Knoten) wird in beiden Schemata das volle `#efaa14` genutzt; Schrift darauf ist
dunkel (`--accent-contrast`).

## Kontraste (WCAG, AA = 4,5 : 1 Text)

| Paarung | Ratio | |
|---|---|---|
| Text `#231f20` auf `#f7f7f2` | 15,2 : 1 | ✅ |
| Text `#231f20` auf `#ffffff` | 16,3 : 1 | ✅ |
| Muted `#5a5450` auf `#f7f7f2` | 6,9 : 1 | ✅ |
| Amber-Text `#8a5a00` auf `#f7f7f2` | 5,5 : 1 | ✅ |
| Amber-Text `#8a5a00` auf `#ffffff` | 5,9 : 1 | ✅ |
| Amber-Text `#8a5a00` auf `#eeeee7` (bg-alt) | 5,1 : 1 | ✅ |
| Button: `#231f20` auf Amber `#efaa14` | 8,1 : 1 | ✅ |
| Text `#f4f5f3` auf `#0c0d0e` | 17,8 : 1 | ✅ |
| Muted `#a0a6ae` auf `#0c0d0e` | 7,9 : 1 | ✅ |
| Amber-Text `#efaa14` auf `#0c0d0e` | 9,7 : 1 | ✅ |
| Kontakt-Panel: Text `#f4f5f3`/`#c7ccd4` auf `#101214` | 17,2 / 11,6 : 1 | ✅ |

## Regeln

- Amber nie als Fließtext im hellen Schema – immer `--accent-text`.
- Auf Amber-Flächen (Buttons, Badges, `now-tag`) immer dunkle Schrift (`--accent-contrast`).
- `theme-color`: hell `#f7f7f2`, dunkel `#0c0d0e` (alle Seiten + `site.webmanifest`).
