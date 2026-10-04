#!/usr/bin/env python3
"""Rasterisiert eine SVG-Datei pixelgenau nach PNG (via Chrome/Playwright, da
cairosvg hier keine native cairo-Lib hat).

Aufruf:  python3 branding/svg2png.py <input.svg> <output.png> <size>
         (size = Kantenlänge in px, quadratisch)
"""
import sys, base64, pathlib
from playwright.sync_api import sync_playwright

inp, outp, size = sys.argv[1], sys.argv[2], int(sys.argv[3])
svg = pathlib.Path(inp).read_text(encoding="utf-8")
b64 = base64.b64encode(svg.encode()).decode()
html = (
    "<!doctype html><meta charset=utf-8>"
    "<style>html,body{margin:0;padding:0;background:transparent}"
    f"img{{width:{size}px;height:{size}px;display:block}}</style>"
    f"<img src='data:image/svg+xml;base64,{b64}'>"
)
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    pg = b.new_context(device_scale_factor=1, viewport={"width": size, "height": size}).new_page()
    pg.set_content(html, wait_until="networkidle")
    pg.wait_for_timeout(120)
    pg.locator("img").screenshot(path=outp, omit_background=True)
    b.close()
print("wrote", outp, f"{size}x{size}")
