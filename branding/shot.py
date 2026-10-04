#!/usr/bin/env python3
"""Screenshot-Helfer: rendert eine lokal servierte Seite in Desktop/Mobil x hell/dunkel.

Aufruf:  python3 branding/shot.py <out-dir> [url]
Startet selbst einen kleinen HTTP-Server im Projektwurzelverzeichnis.
"""
import sys, os, threading, functools, http.server, socketserver
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1]
PATH = sys.argv[2] if len(sys.argv) > 2 else "/index.html"
os.makedirs(OUT, exist_ok=True)

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
httpd = socketserver.TCPServer(("127.0.0.1", 0), Handler)
port = httpd.server_address[1]
threading.Thread(target=httpd.serve_forever, daemon=True).start()
base = f"http://127.0.0.1:{port}{PATH}"

viewports = {"desktop": (1440, 900), "mobil": (390, 844)}
schemes = ["light", "dark"]

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome")
    for vname, (w, h) in viewports.items():
        for scheme in schemes:
            ctx = browser.new_context(
                viewport={"width": w, "height": h},
                device_scale_factor=2,
                color_scheme=scheme,
            )
            page = ctx.new_page()
            page.goto(base, wait_until="networkidle")
            # Durch die Seite scrollen, damit die .reveal-IntersectionObserver feuern,
            # danach sicherstellen, dass alle Reveal-Elemente sichtbar sind (End-
            # zustand, den der Nutzer nach dem Scrollen sieht).
            page.evaluate(
                "async () => { const step = window.innerHeight * 0.8;"
                " for (let y = 0; y <= document.body.scrollHeight; y += step) {"
                "  window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }"
                " document.querySelectorAll('.reveal').forEach(e => e.classList.add('is-visible'));"
                " window.scrollTo(0, 0); }"
            )
            page.wait_for_timeout(700)
            out = os.path.join(OUT, f"{vname}-{scheme}.png")
            page.screenshot(path=out, full_page=True)
            print("wrote", out)
            ctx.close()
    browser.close()
httpd.shutdown()
