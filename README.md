# Storyboard

A tool for photographers to build a **session storyboard** with a moodboard, shoot details, and a **PDF export** you can send to the client.

## What it does

- Puts everything in one document: **session name**, **concept / description**, a **palette** (colors the photographer picks, shown as swatch squares), **photographer name**, **date**, **location**, and a **3×3 moodboard** with nine images.
- Gives the client a **clear preview** of the creative direction before the shoot.

## Product decisions

### Scope and simplicity

- **Single-page PDF**: session title at the top, then the filled-in fields, then the moodboard. Straightforward layout that reads well on a phone.
- **Not an Instagram clone**: the 3×3 grid only suggests a “reference block”; the app and PDF visuals are **our own** (editorial / showcase style).

### Content

- **Nine images** in the moodboard, order should be adjustable (drag-and-drop on the screen is the target behavior).
- **Colors**: the user **picks the colors** that represent the session (no automatic extraction from images). For example, three to five color squares with a picker and optional hex values.
- **PDF footer**: short **editable** text for notes on references / creative direction (each photographer writes what they prefer).

### File size and performance

- **Web-friendly export**: images are compressed and resized so the PDF stays **light** enough for WhatsApp and email, while staying sharp on screen.

### Architecture (MVP)

- **Front-end only**: the form, preview, and PDF generation can run **in the browser**; photos do not need a server unless you add login, cloud saves, or shareable links.
- **Back-end** comes later if you need accounts, saved projects, links, or processing that cannot run only on the user’s device.

### UX rules

1. **Long descriptions**: in the preview, use a **max height** with clear handling (for example ellipsis or a scroll area) so the layout does not break. In the PDF, **reserve space** for the text or warn if it exceeds the limit — the moodboard should not get pushed off the page without the user noticing.
2. **Even moodboard**: every cell uses a **1:1 ratio** (centered crop / `object-fit: cover`) so the grid stays consistent whether the photo is horizontal or vertical.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) as bundler and dev server

## How to run

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Next implementation steps

- Full form and 3×3 grid with upload and reordering.
- One-page PDF generation (library TBD: e.g. `pdf-lib`, `jspdf`, or render + print).
- Validation: file types, max size, exactly nine images before export (or placeholders for empty slots if incomplete exports are allowed).

---

This README matches the current product definition; update it as the scope changes.
