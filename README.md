# AXTO — reading and literacy guides (axto.us)

AXTO is an English-language guide to raising and teaching readers: early
literacy, phonics, reading at home, choosing books, struggling readers and the
classroom. It is a **static site** with no database and no server code, so it
is cheap to run, fast, and easy to back up, move or sell.

## Layout

```
sites/
  _engine/            the site generator (Node 22, zero dependencies)
    build.mjs         Markdown + theme -> plain HTML in sites/axto.us/dist
    check.mjs         AdSense-readiness gate (runs the build first)
  axto.us/
    site.json         name, language, AdSense account, menus, categories
    ADSENSE.txt       the three snippets exactly as Google gave them
    content/articles/ 40 long-form guides (Markdown with front matter)
    content/pages/    about, contact, privacy, cookies, terms, disclaimer, editorial policy
    theme/            templates.mjs + assets (palace.css, palace.js)
    public/           favicon, social image, _redirects (copied as-is)
wrangler.jsonc        Workers Static Assets config for the "axto-us" Worker
```

## Everyday commands

```bash
node sites/_engine/build.mjs axto.us   # build into sites/axto.us/dist
node sites/_engine/check.mjs axto.us   # build + run every quality check
npx wrangler@4 dev                     # preview locally
```

Add a guide by dropping a Markdown file into `sites/axto.us/content/articles/`
with `title`, `description` (70–200 characters), `category` (a topic slug from
site.json) and `date` in the front matter. Pushing to `main` runs the check and
deploys.

## Deploying

`.github/workflows/deploy.yml` needs two repository secrets:
`CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit) and `CLOUDFLARE_ACCOUNT_ID`.
`CLOUDFLARE_ZONE_ID` is optional and only used to re-attach the custom domain.

## Backup and handover

Everything that makes up the site lives in this repository: content, theme,
engine and deploy config. A backup is a clone (or a ZIP from GitHub). To hand
the site to a new owner, transfer the repository, add their two Cloudflare
secrets and attach `axto.us` to the Worker in their account.

## History

Until October 2026 this repository held a Next.js e-book app (D1, KV, OpenNext).
It never had users and was replaced by this content site. The old code is
preserved in git history at commit `285db80`.
