#!/usr/bin/env python3
"""Baut die Visitenkarte reproduzierbar.

Schritte:
  1. QR-Code (Ziel https://deutschmike.dev, Fehlerkorrektur M) erzeugen und als
     Vektor-Rechtecke zwischen den QR-Markern in rueckseite.svg schreiben.
  2. visitenkarte_v3.pdf (2 Seiten, 91×61 mm) aus beiden SVGs rendern (Chrome,
     vektorbasiert, Schriften werden eingebettet).
  3. vorschau.png (beide Seiten nebeneinander) rendern.
  4. QR maschinell auslesen und gegen die Ziel-URL prüfen.

Aufruf:  python3 build.py
"""
import os, re, base64, tempfile
import segno
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
URL = "https://deutschmike.dev"

# QR-Platzierung in mm (muss zur weißen Karte in rueckseite.svg passen:
# Karte x=59 y=15 25×25, QR 19 mm mittig → 3 mm Ruhezone ringsum).
QR_X, QR_Y, QR_MM = 62.0, 18.0, 19.0
DARK = "#0c0d0e"


def build_qr_svg():
    qr = segno.make(URL, error="m")
    matrix = list(qr.matrix)
    n = len(matrix)
    ms = QR_MM / n
    rects = []
    for r, row in enumerate(matrix):
        for c, val in enumerate(row):
            if val:
                x = QR_X + c * ms
                y = QR_Y + r * ms
                rects.append(f'<rect x="{x:.3f}" y="{y:.3f}" width="{ms:.3f}" height="{ms:.3f}"/>')
    inner = (f'\n  <g fill="{DARK}" shape-rendering="crispEdges">\n    '
             + "\n    ".join(rects) + "\n  </g>\n  ")
    return inner, n, ms


def inject_qr():
    inner, n, ms = build_qr_svg()
    path = os.path.join(HERE, "rueckseite.svg")
    svg = open(path, encoding="utf-8").read()
    svg = re.sub(r"<!-- QR_START.*?-->.*?<!-- QR_END -->",
                 f"<!-- QR_START (von build.py erzeugt) -->{inner}<!-- QR_END -->",
                 svg, flags=re.S)
    open(path, "w", encoding="utf-8").write(svg)
    print(f"  QR: {n}×{n} Module, Modulgröße {ms:.3f} mm, Ruhezone 3 mm")


def page_html(svg_markup):
    return f'<div class="page">{svg_markup}</div>'


def render_pdf_and_preview():
    front = open(os.path.join(HERE, "vorderseite.svg"), encoding="utf-8").read()
    back = open(os.path.join(HERE, "rueckseite.svg"), encoding="utf-8").read()

    # --- PDF: 2 Seiten exakt 91×61 mm ---
    pdf_html = f"""<!doctype html><meta charset="utf-8">
<style>
  @page {{ size: 91mm 61mm; margin: 0; }}
  html,body {{ margin:0; padding:0; }}
  .page {{ width:91mm; height:61mm; overflow:hidden; page-break-after:always; }}
  .page:last-child {{ page-break-after:auto; }}
  svg {{ display:block; }}
</style>
{page_html(front)}{page_html(back)}"""

    # --- Vorschau: beide Seiten nebeneinander ---
    prev_html = f"""<!doctype html><meta charset="utf-8">
<style>
  html,body {{ margin:0; background:#3a3b40; }}
  .wrap {{ display:flex; gap:28px; padding:28px; align-items:flex-start; width:max-content; }}
  .card {{ box-shadow:0 10px 30px rgba(0,0,0,.45); }}
  svg {{ display:block; }}
</style>
<div class="wrap"><div class="card">{front}</div><div class="card">{back}</div></div>"""

    tmp_pdf_html = os.path.join(HERE, "_build_pdf.html")
    tmp_prev_html = os.path.join(HERE, "_build_prev.html")
    open(tmp_pdf_html, "w", encoding="utf-8").write(pdf_html)
    open(tmp_prev_html, "w", encoding="utf-8").write(prev_html)

    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome")
        # PDF
        pg = b.new_page()
        pg.goto("file://" + tmp_pdf_html, wait_until="networkidle")
        pg.wait_for_timeout(300)
        pg.pdf(path=os.path.join(HERE, "visitenkarte_v3.pdf"),
               prefer_css_page_size=True, print_background=True,
               margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
        # Vorschau PNG
        pg2 = b.new_context(device_scale_factor=3).new_page()
        pg2.goto("file://" + tmp_prev_html, wait_until="networkidle")
        pg2.wait_for_timeout(300)
        pg2.locator(".wrap").screenshot(path=os.path.join(HERE, "vorschau.png"))
        # Rückseite isoliert, hochauflösend, für QR-Prüfung
        pg3 = b.new_context(device_scale_factor=1,
                            viewport={"width": 1000, "height": 670}).new_page()
        b64 = base64.b64encode(back.encode()).decode()
        pg3.set_content(
            f'<style>html,body{{margin:0}}img{{width:1000px;display:block}}</style>'
            f'<img src="data:image/svg+xml;base64,{b64}">', wait_until="networkidle")
        pg3.wait_for_timeout(300)
        pg3.locator("img").screenshot(path=os.path.join(HERE, "_qr_check.png"))
        b.close()

    os.remove(tmp_pdf_html)
    os.remove(tmp_prev_html)
    print("  geschrieben: visitenkarte_v3.pdf, vorschau.png")


def verify_qr():
    import cv2
    img = cv2.imread(os.path.join(HERE, "_qr_check.png"))
    data, pts, _ = cv2.QRCodeDetector().detectAndDecode(img)
    os.remove(os.path.join(HERE, "_qr_check.png"))
    if data == URL:
        print(f"  QR-Prüfung OK → {data!r}")
        return True
    raise SystemExit(f"  QR-PRÜFUNG FEHLGESCHLAGEN: gelesen {data!r}, erwartet {URL!r}")


if __name__ == "__main__":
    print("1) QR erzeugen und einsetzen …")
    inject_qr()
    print("2/3) PDF + Vorschau rendern …")
    render_pdf_and_preview()
    print("4) QR maschinell prüfen …")
    verify_qr()
    print("Fertig.")
