// deutschmike.dev — kleine progressive Verbesserung, kein Framework.
// Blendet .reveal-Elemente sanft ein, sobald sie in den Viewport scrollen.
// Ohne JavaScript oder IntersectionObserver bleiben sie normal sichtbar
// (siehe .js .reveal Gate in style.css).
(function () {
  "use strict";

  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
