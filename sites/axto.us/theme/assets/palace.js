/* AXTO — the quiet motion of the lapis library. Decoration only: every page
   works without it, and all motion stops under prefers-reduced-motion. */
(function () {
  "use strict";
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var head = document.querySelector(".lib-header");
  var btn = document.querySelector(".lib-menu-btn");
  if (btn && head) {
    btn.addEventListener("click", function () {
      var open = head.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // The spine of the shelf you are on stands proud of the others.
  var crumb = document.querySelector(".lib-folio .lib-crumbs a[href^='/topics/']");
  var here = crumb ? crumb.getAttribute("href") : location.pathname;
  document.querySelectorAll(".lib-spine").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (href !== "/" && here.indexOf(href) === 0)) a.setAttribute("aria-current", "page");
  });

  // A bookmark ribbon grows down the right edge as you read a guide.
  var text = document.querySelector(".lib-folio__text");
  var ribbon = document.querySelector(".lib-ribbon span");
  if (text && ribbon && document.body.classList.contains("lib--folio")) {
    var grow = function () {
      var r = text.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (window.innerHeight * 0.3 - r.top) / Math.max(1, r.height)));
      ribbon.style.setProperty("--p", p.toFixed(4));
    };
    addEventListener("scroll", grow, { passive: true });
    grow();
  }

  // Bookmarks in the library card follow the reader.
  var marks = Array.prototype.slice.call(document.querySelectorAll(".lib-loan__toc a"));
  if (marks.length && "IntersectionObserver" in window) {
    var byId = {};
    marks.forEach(function (m) { byId[m.getAttribute("href").slice(1)] = m; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        marks.forEach(function (m) { m.classList.remove("on"); });
        if (byId[e.target.id]) byId[e.target.id].classList.add("on");
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    Object.keys(byId).forEach(function (id) { var h = document.getElementById(id); if (h) spy.observe(h); });
  }

  if (calm) return;

  if ("IntersectionObserver" in window) {
    var rise = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("seen"); rise.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".lib-card, .lib-volume, .lib-catalog section").forEach(function (el, i) {
      el.classList.add("lib-rise");
      el.style.transitionDelay = (i % 3) * 90 + "ms";
      rise.observe(el);
    });
  }

  // Spain, 2026 World Cup champions: once per visit, a flurry of book pages in
  // Spanish red and gold drifts down, fluttering as paper does, and is gone.
  try {
    if (sessionStorage.getItem("axto-copa26")) return;
    sessionStorage.setItem("axto-copa26", "1");
  } catch (e) { /* storage blocked: show it anyway */ }
  var cv = document.createElement("canvas");
  cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:90";
  document.body.appendChild(cv);
  var g = cv.getContext("2d");
  if (!g) { cv.remove(); return; }
  var k = Math.min(2, window.devicePixelRatio || 1);
  var W = (cv.width = innerWidth * k), H = (cv.height = innerHeight * k);
  var tones = ["#c60b1e", "#ffc400", "#fffaf0", "#d9b56a", "#c60b1e", "#ffc400"];
  var leaves = [];
  for (var i = 0; i < 70; i++) {
    leaves.push({
      x: Math.random() * W, y: -Math.random() * H * 0.5 - 20 * k,
      w: (10 + Math.random() * 10) * k, h: (13 + Math.random() * 10) * k,
      vy: (1.6 + Math.random() * 2.2) * k, sway: Math.random() * Math.PI * 2, swaySpeed: 0.03 + Math.random() * 0.04,
      flip: Math.random() * Math.PI, flipSpeed: 0.06 + Math.random() * 0.08, c: tones[i % tones.length],
    });
  }
  var t0 = performance.now();
  (function frame(t) {
    var age = t - t0;
    g.clearRect(0, 0, W, H);
    g.globalAlpha = age > 2300 ? Math.max(0, 1 - (age - 2300) / 700) : 1;
    leaves.forEach(function (l) {
      l.sway += l.swaySpeed; l.flip += l.flipSpeed;
      l.y += l.vy; l.x += Math.sin(l.sway) * 1.6 * k;
      g.save();
      g.translate(l.x, l.y);
      g.rotate(Math.sin(l.sway) * 0.6);
      g.scale(Math.cos(l.flip), 1);
      g.fillStyle = l.c;
      g.fillRect(-l.w / 2, -l.h / 2, l.w, l.h);
      g.fillStyle = "rgba(29,34,51,0.18)";
      g.fillRect(-l.w / 2 + 2 * k, -l.h / 4, l.w - 4 * k, 1.2 * k);
      g.fillRect(-l.w / 2 + 2 * k, 0, l.w - 6 * k, 1.2 * k);
      g.restore();
    });
    if (age < 3000) requestAnimationFrame(frame); else cv.remove();
  })(t0);
})();
