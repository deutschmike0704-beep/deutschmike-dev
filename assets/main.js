// deutschmike.dev — kleine progressive Verbesserung, kein Framework.
// Ohne JavaScript funktioniert alles: Links gehen ohne vorbereiteten Text
// zu WhatsApp/E-Mail, das Erkennungs-Schema bleibt im Gesamtbild stehen.
(function () {
  "use strict";

  var WA = "https://wa.me/4915155684283";
  var MAIL = "deutschmike0704@proton.me";

  // Vorbereitete Nachrichten je Thema der Kontakt-Auswahl.
  var TOPICS = {
    website: {
      subject: "Anfrage: Website",
      text: "Hallo Mike, ich interessiere mich für eine Website für meinen Betrieb."
    },
    startnummern: {
      subject: "Anfrage: Startnummern-Erkennung",
      text: "Hallo Mike, ich interessiere mich für die Startnummern-Erkennung für meine Rennfotos."
    },
    sonstiges: {
      subject: "Anfrage über deutschmike.dev",
      text: "Hallo Mike, "
    }
  };

  function setTopic(key) {
    var t = TOPICS[key] || TOPICS.website;
    var wa = WA + "?text=" + encodeURIComponent(t.text);
    var mail = "mailto:" + MAIL + "?subject=" + encodeURIComponent(t.subject) +
      "&body=" + encodeURIComponent(t.text + "\n\n");
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = wa; });
    document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = mail; });
  }

  var radios = document.querySelectorAll('input[name="topic"]');
  radios.forEach(function (r) {
    r.addEventListener("change", function () { setTopic(r.value); });
  });

  // Buttons mit data-topic wählen das Thema vor, bevor zum Kontakt gesprungen wird.
  document.querySelectorAll("[data-topic]").forEach(function (el) {
    el.addEventListener("click", function () {
      var key = el.getAttribute("data-topic");
      radios.forEach(function (r) { r.checked = r.value === key; });
      setTopic(key);
      // Nach dem Sprung den vorbereiteten WhatsApp-Link fokussieren: ein Klick weniger.
      var target = document.querySelector(".contact-wa");
      if (target) setTimeout(function () { target.focus({ preventScroll: true }); }, 400);
    });
  });

  var checked = document.querySelector('input[name="topic"]:checked');
  setTopic(checked ? checked.value : "website");

  // Erkennungs-Schema: Umschalten zwischen Gesamtbild und engem Zuschnitt.
  var scan = document.querySelector(".scan");
  if (scan) {
    var buttons = scan.querySelectorAll(".seg-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        scan.setAttribute("data-mode", mode);
        buttons.forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
      });
    });
  }

  if (!("IntersectionObserver" in window)) return;

  // Mobile Kontaktleiste nur zeigen, wenn keine anderen Kontakt-Buttons im Bild sind.
  var dock = document.querySelector(".dock");
  var anchors = document.querySelectorAll(".hero .cta-row, .contact-actions");
  if (dock && anchors.length) {
    var visible = new Set();
    var dockObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      });
      dock.setAttribute("data-hidden", String(visible.size > 0));
      dock.inert = visible.size > 0;
    });
    anchors.forEach(function (a) { dockObserver.observe(a); });
  }

  // Aktiven Abschnitt in der Navigation markieren.
  var links = document.querySelectorAll(".main-nav a");
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var link = byId[e.target.id];
      if (!link) return;
      if (e.isIntersecting) {
        links.forEach(function (l) { l.removeAttribute("aria-current"); });
        link.setAttribute("aria-current", "true");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) navObserver.observe(section);
  });
})();
