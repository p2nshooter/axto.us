// AXTO — "Lapis library of cedar".
//
// A royal library of lapis lazuli and cedar wood, gilded at the edges, where
// books stand on cedar shelves and a reader is never hurried. Everything here
// is AXTO's own — its classes (lib-) appear in no other site of the network.

const ICONS = {
  cradle: `<path d="M8 22h32a16 16 0 0 1-32 0z" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 38l-3 6M36 38l3 6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M20 22c0-6 4-10 10-10" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="31" cy="10" r="3" fill="currentColor"/>`,
  abc: `<path d="M6 36 13 12l7 24M8.5 28h9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M24 12h7a5 5 0 0 1 0 10h-7zm0 10h8a6 6 0 0 1 0 12h-8z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M44 16a8 8 0 1 0 0 16" fill="none" stroke="currentColor" stroke-width="2.2"/>`,
  lamp: `<path d="M16 6h16l6 14H10z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M24 20v16M14 42h20M18 36h12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M14 24c3 2 7 3 10 3s7-1 10-3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2 3"/>`,
  shelf: `<path d="M6 40h36" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M9 14h6v26H9zM17 10h6v30h-6zM26 16l5-1 5 24-5 1z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M38 20h4v20h-4z" fill="none" stroke="currentColor" stroke-width="2"/>`,
  compass: `<circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M30 18l-4 10-8 4 4-10z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><circle cx="24" cy="24" r="1.8" fill="currentColor"/>`,
  quill: `<path d="M40 6C26 8 16 18 12 34l4 2c4-14 12-22 24-30z" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/><path d="M14 34l-4 8M22 24l6 2" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>`,
};
const icon = (name, cls = "") =>
  `<svg class="${cls}" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false">${ICONS[name] || ICONS.shelf}</svg>`;

/** Spain, 2026 World Cup champions — a gilded bookplate on a cedar shelf: a
 * red-and-gold book opens on the shelf, a ball rolls along it. */
const champions = () => `<aside class="lib-exlibris" role="note" aria-label="Spain, 2026 World Cup champions">
  <div class="lib-exlibris__inner">
    <span class="lib-exlibris__book" aria-hidden="true"><i class="lib-exlibris__cover"></i><i class="lib-exlibris__page"></i></span>
    <p class="lib-exlibris__text"><span>Ex libris</span> Spain · <strong>2026 World Cup champions</strong></p>
    <span class="lib-exlibris__shelf" aria-hidden="true"><span class="lib-exlibris__ball">⚽</span></span>
    <span class="lib-exlibris__cup" aria-hidden="true">🏆</span>
  </div>
</aside>`;

/** The nav as book spines on a shelf. Each spine gets its own height and binding. */
const SPINES = ["lapis", "cedar", "gold", "wine", "teal", "lapis", "cedar", "gold", "wine"];

function layout(ctx, meta, body, kind = "") {
  const { site, categories, esc } = ctx;
  const items = [{ href: "/", label: "Home" }, ...categories.map((c) => ({ href: c.url, label: c.name.replace(/ \(.*\)$/, "") }))];
  return `<!doctype html>
<html lang="${site.lang}">
<head>
${ctx.head(meta)}
</head>
<body class="lib lib--${kind}">
<a class="lib-skip" href="#content">Skip to content</a>
${champions()}
<header class="lib-header">
  <div class="lib-header__glow" aria-hidden="true"></div>
  <div class="lib-header__inner">
    <a class="lib-brand" href="/" aria-label="${esc(site.name)} — home">
      <span class="lib-brand__emblem" aria-hidden="true"><svg viewBox="0 0 64 48" width="46" height="34"><path d="M32 10C24 4 12 4 4 8v34c8-4 20-4 28 2 8-6 20-6 28-2V8c-8-4-20-4-28 2z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M32 10v34" stroke="currentColor" stroke-width="2.5"/></svg></span>
      <span class="lib-brand__words"><span class="lib-brand__name">AXTO</span><span class="lib-brand__tag">${esc(site.expansion)}</span></span>
    </a>
    <button class="lib-menu-btn" type="button" aria-expanded="false" aria-controls="lib-nav"><span aria-hidden="true"></span>Shelves</button>
  </div>
  <nav id="lib-nav" class="lib-nav" aria-label="Topics">
    <div class="lib-nav__spines">
      ${items.map((it, i) => `<a class="lib-spine lib-spine--${SPINES[i % SPINES.length]}" href="${it.href}" style="--h:${[46, 52, 44, 50, 48, 54, 45, 51][i % 8]}px"><span class="lib-spine__band" aria-hidden="true"></span><span class="lib-spine__title">${esc(it.label)}</span></a>`).join("\n      ")}
    </div>
    <div class="lib-nav__more">${site.menu.map((m) => `<a href="${m.href}">${esc(m.label)}</a>`).join("")}</div>
    <div class="lib-nav__plank" aria-hidden="true"></div>
  </nav>
</header>
<div class="lib-ribbon" aria-hidden="true"><span></span></div>
<main id="content">
${body}
</main>
<footer class="lib-footer">
  <div class="lib-footer__inner">
    <section>
      <p class="lib-footer__name">AXTO</p>
      <p class="lib-footer__exp">${esc(site.expansion)}</p>
      <p>${esc(site.description)}</p>
    </section>
    <nav aria-label="Topics">
      <p class="lib-footer__title">Topics</p>
      <ul>${categories.map((c) => `<li><a href="${c.url}">${esc(c.name)}</a></li>`).join("")}</ul>
    </nav>
    <nav aria-label="AXTO">
      <p class="lib-footer__title">AXTO</p>
      <ul>${[...site.menu, ...site.legal].map((m) => `<li><a href="${m.href}">${esc(m.label)}</a></li>`).join("")}</ul>
    </nav>
  </div>
  <p class="lib-footer__note">© ${new Date().getFullYear()} AXTO · ${esc(site.domain)} · Independent, research-informed guidance for parents and teachers. Not a substitute for advice from your child's teacher, pediatrician or a qualified specialist.</p>
</footer>
${ctx.tail()}
</body>
</html>`;
}

/** A library card: topic stamp, title, summary, due-date style footer. */
const card = (ctx, a, extra = "") => `<article class="lib-card ${extra}">
  <a class="lib-card__link" href="${a.url}">
    <span class="lib-card__stamp">${icon(a.cat.icon, "lib-card__icon")}<span>${ctx.esc(a.cat.name)}</span></span>
    <h3 class="lib-card__title">${ctx.esc(a.title)}</h3>
    <p class="lib-card__summary">${ctx.esc(a.description)}</p>
    <span class="lib-card__foot"><span>${a.minutes} min read</span><span class="lib-card__arrow" aria-hidden="true">→</span></span>
  </a>
</article>`;

/** The hero book: a cover and three pages that turn, slowly, forever. */
const book = () => `<div class="lib-book" aria-hidden="true">
  <div class="lib-book__spread">
    <div class="lib-book__left"><p>Once upon a time, a child opened a book</p><i></i><i></i><i></i></div>
    <div class="lib-book__right"><p>…and found a whole world waiting.</p><i></i><i></i><i></i></div>
    <div class="lib-book__leaf lib-book__leaf--1"></div>
    <div class="lib-book__leaf lib-book__leaf--2"></div>
    <div class="lib-book__leaf lib-book__leaf--3"></div>
  </div>
</div>`;

export function home(ctx) {
  const { site, articles, categories, esc } = ctx;
  const [first, second, third, ...rest] = articles;
  const body = `
<section class="lib-hero">
  <div class="lib-hero__inner">
    <div class="lib-hero__text">
      <p class="lib-kicker">Guides for parents & teachers</p>
      <h1 class="lib-hero__title">Raising readers, <em>one page</em> at a time</h1>
      <p class="lib-hero__lead">${esc(site.tagline)}.</p>
      <p class="lib-hero__intro">${esc(site.description)}</p>
      <p class="lib-hero__buttons"><a class="lib-btn" href="${first.url}">Start reading</a><a class="lib-btn lib-btn--ghost" href="/editorial-policy/">How we research</a></p>
    </div>
    ${book()}
  </div>
</section>

<section class="lib-featured" aria-labelledby="feat-t">
  <header class="lib-heading"><p class="lib-heading__kicker">From the reading room</p><h2 id="feat-t">Begin here</h2></header>
  <div class="lib-featured__grid">${card(ctx, first, "lib-card--wide")}${card(ctx, second)}${card(ctx, third)}</div>
</section>

<section class="lib-shelves" aria-labelledby="shelf-t">
  <header class="lib-heading"><p class="lib-heading__kicker">Six shelves</p><h2 id="shelf-t">Browse by topic</h2></header>
  <ul class="lib-shelves__row">
    ${categories.map((c) => `<li><a class="lib-volume" href="${c.url}">
      <span class="lib-volume__corner" aria-hidden="true"></span>
      ${icon(c.icon, "lib-volume__icon")}
      <span class="lib-volume__name">${esc(c.name)}</span>
      <span class="lib-volume__desc">${esc(c.description)}</span>
      <span class="lib-volume__count">${c.articles.length} guides</span>
    </a></li>`).join("\n    ")}
  </ul>
</section>

<section class="lib-latest" aria-labelledby="new-t">
  <header class="lib-heading"><p class="lib-heading__kicker">New on the shelf</p><h2 id="new-t">Latest guides</h2></header>
  <div class="lib-grid">${rest.slice(0, 12).map((a) => card(ctx, a)).join("\n  ")}</div>
</section>

<section class="lib-catalog" aria-labelledby="cat-t">
  <header class="lib-heading lib-heading--night"><p class="lib-heading__kicker">The full catalog</p><h2 id="cat-t">Every guide, shelf by shelf</h2></header>
  <div class="lib-catalog__cols">
    ${categories.map((c) => `<section><h3><a href="${c.url}">${icon(c.icon, "lib-catalog__icon")}${esc(c.name)}</a></h3><ol>${c.articles.map((a) => `<li><a href="${a.url}">${esc(a.title)}</a></li>`).join("")}</ol></section>`).join("\n    ")}
  </div>
</section>`;
  return layout(ctx, { title: `AXTO — ${site.expansion}: reading & literacy for families and teachers`, description: site.description, path: "/" }, body, "home");
}

export function category(ctx, c) {
  const { esc, site } = ctx;
  const body = `
<header class="lib-topic">
  <div class="lib-topic__inner">
    <nav class="lib-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span>${esc(c.name)}</span></nav>
    <span class="lib-topic__icon">${icon(c.icon)}</span>
    <h1>${esc(c.name)}</h1>
    <p>${esc(c.description)}</p>
    <p class="lib-topic__count">${c.articles.length} guides</p>
  </div>
</header>
<section class="lib-latest lib-latest--topic"><div class="lib-grid">
  ${c.articles.map((a) => card(ctx, a)).join("\n  ")}
</div></section>`;
  return layout(
    ctx,
    {
      title: `${c.name}: guides for parents and teachers`,
      description: `${c.description} ${c.articles.length} in-depth guides from ${site.name}.`.slice(0, 160),
      path: c.url,
      jsonld: [ctx.crumbs([{ name: "Home", path: "/" }, { name: c.name, path: c.url }]), { "@type": "CollectionPage", name: c.name, url: `${ctx.base}${c.url}`, inLanguage: site.lang }],
    },
    body,
    "topic"
  );
}

export function article(ctx, a) {
  const { esc, site, base } = ctx;
  const toc = a.headings.filter((h) => h.level === 2);
  const body = `
<article class="lib-folio">
  <header class="lib-folio__head">
    <nav class="lib-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <a href="${a.cat.url}">${esc(a.cat.name)}</a></nav>
    <h1 class="lib-folio__title">${esc(a.title)}</h1>
    <p class="lib-folio__lead">${esc(a.description)}</p>
  </header>
  <div class="lib-folio__body">
    <aside class="lib-loan" aria-label="About this guide">
      <p class="lib-loan__title">Library card</p>
      <dl>
        <div><dt>Shelf</dt><dd><a href="${a.cat.url}">${esc(a.cat.name)}</a></dd></div>
        <div><dt>Reading time</dt><dd>${a.minutes} min</dd></div>
        <div><dt>Updated</dt><dd><time datetime="${a.updated}">${a.dateLabel}</time></dd></div>
        <div><dt>By</dt><dd>${esc(site.author)}</dd></div>
      </dl>
      ${toc.length > 2 ? `<p class="lib-loan__title lib-loan__title--b">Bookmarks</p><ol class="lib-loan__toc">${toc.map((h) => `<li><a href="#${h.id}">${esc(h.text)}</a></li>`).join("")}</ol>` : ""}
    </aside>
    <div class="lib-folio__text">
${a.html}
      <aside class="lib-note"><p><strong>A note from AXTO.</strong> Every child develops at their own pace. These guides share what research and experienced educators suggest, but they cannot replace the judgment of your child's teacher, pediatrician or a qualified specialist who knows your child. Read our <a href="/editorial-policy/">editorial policy</a>.</p></aside>
    </div>
  </div>
</article>
<section class="lib-latest lib-latest--related" aria-labelledby="rel-t">
  <header class="lib-heading"><p class="lib-heading__kicker">Keep reading</p><h2 id="rel-t">Related guides</h2></header>
  <div class="lib-grid">${a.related.map((r) => card(ctx, r)).join("")}</div>
</section>`;
  return layout(
    ctx,
    {
      title: a.title,
      description: a.description,
      path: a.url,
      type: "article",
      jsonld: [
        ctx.crumbs([{ name: "Home", path: "/" }, { name: a.cat.name, path: a.cat.url }, { name: a.title, path: a.url }]),
        {
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          dateModified: a.updated,
          inLanguage: site.lang,
          wordCount: a.words,
          articleSection: a.cat.name,
          author: { "@type": "Organization", name: site.author, url: `${base}/about/` },
          publisher: { "@id": `${base}/#org` },
          mainEntityOfPage: `${base}${a.url}`,
        },
      ],
    },
    body,
    "folio"
  );
}

export function page(ctx, p) {
  const { esc } = ctx;
  const body = `
<article class="lib-folio lib-folio--page">
  <header class="lib-folio__head">
    <nav class="lib-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span>${esc(p.title)}</span></nav>
    <h1 class="lib-folio__title">${esc(p.title)}</h1>
    ${p.updated ? `<p class="lib-folio__lead">Last reviewed: ${ctx.fmtDate(p.updated)}</p>` : ""}
  </header>
  <div class="lib-folio__body lib-folio__body--single"><div class="lib-folio__text">
${p.html}
  </div></div>
</article>`;
  return layout(ctx, { title: p.title, description: p.description, path: p.url, jsonld: [ctx.crumbs([{ name: "Home", path: "/" }, { name: p.title, path: p.url }])] }, body, "page");
}

export function notFound(ctx) {
  const body = `
<section class="lib-lost">
  <p class="lib-lost__code">404</p>
  <h1>This book has been misshelved</h1>
  <p>The page may have moved, or the link has a typo. Our older blog and story library have been replaced by these guides. Pick a shelf to keep reading:</p>
  <ul class="lib-shelves__row">${ctx.categories.map((c) => `<li><a class="lib-volume" href="${c.url}"><span class="lib-volume__corner" aria-hidden="true"></span>${icon(c.icon, "lib-volume__icon")}<span class="lib-volume__name">${ctx.esc(c.name)}</span></a></li>`).join("")}</ul>
</section>`;
  return layout(ctx, { title: "Page not found", description: "The page you are looking for is not on AXTO.", path: "/404.html", noindex: true }, body, "lost");
}

/** /guides/ — the whole library on one page, newest first. */
export function extraFiles(ctx) {
  const { site, articles, categories, esc } = ctx;
  const body = `
<header class="lib-topic">
  <div class="lib-topic__inner">
    <nav class="lib-crumbs" aria-label="Breadcrumb"><a href="/">Home</a> <span aria-hidden="true">/</span> <span>All guides</span></nav>
    <span class="lib-topic__icon">${icon("shelf")}</span>
    <h1>All guides</h1>
    <p>Every AXTO guide on reading and literacy, newest first. Browse by shelf: ${categories.map((c) => `<a href="${c.url}" style="color:var(--gold-2)">${esc(c.name)}</a>`).join(" · ")}.</p>
    <p class="lib-topic__count">${articles.length} guides</p>
  </div>
</header>
<section class="lib-latest lib-latest--topic"><div class="lib-grid">
  ${articles.map((a) => card(ctx, a)).join("\n  ")}
</div></section>`;
  return [
    {
      path: "/guides/",
      content: layout(
        ctx,
        {
          title: "All guides on reading and literacy",
          description: `All ${articles.length} AXTO guides for parents and teachers: early literacy, phonics, reading at home, choosing books, struggling readers and the classroom.`,
          path: "/guides/",
          jsonld: [ctx.crumbs([{ name: "Home", path: "/" }, { name: "All guides", path: "/guides/" }]), { "@type": "CollectionPage", name: "All guides", url: `${ctx.base}/guides/`, inLanguage: site.lang }],
        },
        body,
        "topic"
      ),
    },
  ];
}
