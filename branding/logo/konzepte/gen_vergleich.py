#!/usr/bin/env python3
"""Erzeugt vergleich.html: inlined die drei Konzept-SVGs, damit color/--lac je
Kontext (hell, dunkel, einfarbig) korrekt steuerbar sind."""
import re, os, html

HERE = os.path.dirname(os.path.abspath(__file__))
FILES = [
    ("A", "Tag", "&lt;M/D&gt;", "konzept-a-tag.svg",
     "M und D zwischen spitzen Klammern, getrennt durch einen Amber-Schrägstrich – liest sich wie ein Code-Tag."),
    ("B", "Terminal", "&rsaquo;MD_", "konzept-b-prompt.svg",
     "Amber-Prompt-Zeichen, MD und ein blinkender Cursor-Block – die Shell als Herkunftszeichen."),
    ("C", "Raster", "MD", "konzept-c-raster.svg",
     "M und D teilen sich eine Senkrechte, CAD-Knoten auf einem Konstruktionsraster – Präzision vom Metallbau zum Code."),
]

def load(fn):
    s = open(os.path.join(HERE, fn), encoding="utf-8").read()
    vb = re.search(r'viewBox="([^"]+)"', s).group(1)
    inner = re.sub(r'^.*?<svg[^>]*>', '', s, count=1, flags=re.S)
    inner = re.sub(r'</svg>\s*$', '', inner, flags=re.S)
    inner = re.sub(r'<style>.*?</style>', '', inner, flags=re.S)  # Kontext steuert Farbe
    inner = re.sub(r'<!--.*?-->', '', inner, flags=re.S)
    return vb, inner.strip()

def svg(vb, inner, height, color=None, lac=None):
    st = f"height:{height}px;width:auto"
    if color: st += f";color:{color}"
    if lac is not None: st += f";--lac:{lac}"
    return f'<svg viewBox="{vb}" style="{st}" aria-hidden="true">{inner}</svg>'

cards = []
for letter, name, tag, fn, desc in FILES:
    vb, inner = load(fn)
    def S(h, color=None, lac=None): return svg(vb, inner, h, color, lac)
    cards.append(f"""
    <section class="concept">
      <header>
        <h2>{letter} · {name} <span class="tag">{tag}</span></h2>
        <p>{desc}</p>
      </header>
      <div class="row on-dark"><span class="label">Groß / dunkel</span><div class="fill">{S(54)}</div></div>
      <div class="row on-light"><span class="label">Groß / hell</span><div class="fill">{S(54)}</div></div>
      <div class="row on-dark"><span class="label">16 / 24 / 32 px</span><div class="fill">{S(16)}{S(24)}{S(32)}</div></div>
      <div class="row on-dark"><span class="label">Amber mono</span><div class="fill">{S(40, color='#efaa14', lac='#efaa14')}</div></div>
      <div class="row on-light"><span class="label">Schwarz mono</span><div class="fill">{S(40, color='#121316', lac='#121316')}</div></div>
      <div class="row"><span class="label">Karte</span><div class="fill" style="display:block">
        <div class="card-mock"><div class="logo">{S(26)}</div><div class="name">Mike Deutsch</div><div class="dom">deutschmike.dev</div></div>
      </div></div>
    </section>""")

page = f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Monogramm – drei Konzepte</title>
<style>
  :root {{ --amber:#efaa14; --dark:#0c0d0e; --light:#f7f7f2; --ink:#231f20; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
         background:#1a1b1e; color:#e9ebef; padding:2.5rem clamp(1rem,4vw,3rem); line-height:1.5; }}
  h1 {{ font-size:1.6rem; margin:0 0 .3rem; }}
  .sub {{ color:#a3acbd; margin:0 0 2.5rem; max-width:52rem; }}
  .cols {{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }}
  @media (max-width:62rem){{ .cols{{ grid-template-columns:1fr; }} }}
  .concept {{ border:1px solid #2c2f36; border-radius:16px; overflow:hidden; background:#202226; }}
  .concept > header {{ padding:1.1rem 1.25rem; border-bottom:1px solid #2c2f36; }}
  .concept h2 {{ font-size:1.05rem; margin:0 0 .35rem; }}
  .concept h2 .tag {{ color:var(--amber); font-family:ui-monospace,Menlo,Consolas,monospace; }}
  .concept p {{ margin:0; font-size:.86rem; color:#a3acbd; }}
  .row {{ display:flex; align-items:center; gap:1rem; padding:1.1rem 1.25rem; border-bottom:1px solid #2c2f36; color:#f4f5f3; }}
  .row:last-child {{ border-bottom:0; }}
  .label {{ font-size:.7rem; letter-spacing:.06em; text-transform:uppercase; color:#8891a0; width:6rem; flex:none; }}
  .fill {{ flex:1; display:flex; align-items:center; gap:1.1rem; flex-wrap:wrap; justify-content:center; }}
  .on-dark  {{ background:var(--dark); }}
  .on-light {{ background:var(--light); color:var(--ink); }}
  .card-mock {{ position:relative; aspect-ratio:85/55; width:100%; background:var(--dark); border-radius:10px;
               overflow:hidden; border:1px solid #2c2f36; }}
  .card-mock .logo {{ position:absolute; top:12px; right:14px; color:#f4f5f3; }}
  .card-mock .name {{ position:absolute; left:16px; bottom:30px; color:#fff; font-weight:600; font-size:.95rem; }}
  .card-mock .name::before {{ content:""; display:block; width:28px; height:3px; background:var(--amber); border-radius:2px; margin-bottom:8px; }}
  .card-mock .dom {{ position:absolute; left:16px; bottom:14px; color:var(--amber); font-size:.72rem; font-family:ui-monospace,Menlo,monospace; }}
  .foot {{ margin-top:2.5rem; color:#8891a0; font-size:.8rem; }}
</style>
</head>
<body>
  <h1>Neues Monogramm – drei Konzepte</h1>
  <p class="sub">Jedes Konzept als große Marke, in Favicon-Größe (16&nbsp;/&nbsp;24&nbsp;/&nbsp;32&nbsp;px), auf dunklem und hellem Grund,
     einfarbig geprüft (Amber + Schwarz) und als Mockup in der Ecke der Kartenvorderseite. Akzentfarbe #efaa14.</p>
  <div class="cols">{''.join(cards)}
  </div>
  <p class="foot">deutschmike.dev · Monogramm-Konzepte</p>
</body>
</html>
"""
open(os.path.join(HERE, "vergleich.html"), "w", encoding="utf-8").write(page)
print("wrote vergleich.html")
