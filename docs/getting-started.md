# Getting Started

This short guide shows how to run and build the docs locally.

Prerequisites
- Node.js (v16+ recommended) if the site uses a JS toolchain
- Python and MkDocs if the site is MkDocs-based

Install dependencies (example using npm):

```bash
npm ci
npm run dev
```

Or, for MkDocs:

```bash
pip install mkdocs
mkdocs serve
```

Build for production (if applicable):

```bash
npm run build
# or
mkdocs build
```

If you're unsure which tooling this repo uses, check for `package.json` or `mkdocs.yml` at the repo root.
