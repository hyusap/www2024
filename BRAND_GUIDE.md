# Ayush Paul — Brand Guide & PDF Document Template

Derived from `ayush.digital` (app/globals.css, components/*, lib/og.tsx). Use this as the
source of truth for any future PDF — invoices, proposals, resumes, one-pagers.

## Personality in one line

Playful neo-brutalist hacker-maker. Thick borders, hard offset shadows, no
rounded-corner softness pretending to be "professional," lowercase casual
voice that still ships real engineering. Sticky-note chaos meets a tidy grid.

---

## 1. Color Palette

| Token | Hex | Use |
|---|---|---|
| `primary` | `#A788AF` | Page/background wash, dusty purple |
| `secondary` | `#572381` | Deep purple, secondary accents |
| `accent` | `#F2E94E` | Yellow — labels, chips, highlights, CTAs |
| `dark` | `#2F0A28` | Near-black plum — text, borders, footer bg |
| `light` | `#F2FDFF` | Off-white paper — card backgrounds |
| `lightPurple` | `#DBCBD8` | Soft fill |
| `lightBlue` | `#B9B5CB` | Soft fill |
| `lightNavy` | `#90A2BB` | Soft fill |

**Rule of thumb for documents:** `light` (#F2FDFF) as the page/card surface,
`dark` (#2F0A28) for text and the signature thick border, `accent` (#F2E94E)
for exactly one attention-grabbing label per page (status chip, "PAID",
"DUE", section tag). Don't use more than 2-3 colors per page — the palette
is loud enough at low quantities.

## 2. Typography

- **Display / headings:** Cakra (`--font-cakra`, local woff2/ttf in
  `app/Cakra-Normal.woff2` / `public/fonts/Cakra-Normal.ttf`). Apply
  `font-feature-settings: "ss01","ss02","ss03","ss04","dlig","liga"` for the
  stylistic set actually used on the site. Use for: name/logotype, big
  numbers, section titles.
- **Body:** Figtree (Google Font). Use for paragraphs, line items, fine
  print, table contents.
- **Casing & voice:** headings are short and often lowercase or sentence
  case ("a student from north carolina", "Ayush has..."). Labels/chips are
  the opposite — ALL CAPS with wide letter-spacing (`0.1em`–`0.14em`), small
  size (18–19px), bold. That contrast (huge casual display type next to a
  tiny shouty caps label) is a recurring signature — reuse it.

## 3. Signature Visual Motifs (use at least one per document)

1. **Thick border + offset hard shadow** (the core brutalist card, lifted
   straight from `lib/og.tsx`):
   ```css
   background: #F2FDFF;
   border: 8px solid #2F0A28;
   box-shadow: 16px 16px 0 #2F0A28; /* hard edge, no blur */
   ```
   For smaller inline elements (line items, badges) scale down to
   `border: 3-4px solid #2F0A28` and `box-shadow: 6px 6px 0 #2F0A28`.

2. **Yellow label chip** — small uppercase tag, square corners, used the way
   a sticky-note tab is used: `background:#F2E94E; color:#2F0A28; padding:5px 12px;
   text-transform:uppercase; letter-spacing:0.14em; font-weight:700; font-size:18px;`

3. **Folded-corner sticky note** (from `components/sticky-notes.tsx`) — a
   clipped corner with a darker triangle behind it, in `#F2E94E` or
   `#A788AF`. Good for a "note from Ayush" aside, terms callout, or thank-you
   card on an invoice footer.

4. **Dot grid background** — sparse radial-dot pattern
   (`radial-gradient(circle, rgba(167,136,175,0.3) 1px, transparent 1px)`,
   `24px 24px` tile) over the `dark` background. Use behind a cover page or
   footer band, never behind dense text.

5. **No soft rounded corners** on structural elements (cards, borders,
   buttons use `rounded-2xl` only on the small interactive Card component —
   everything brutalist/document-like stays square: `rounded-xs` or `0`).
   Rounded corners are reserved for interactive site widgets, not documents.

6. **Hard, never blurred, shadows.** If you need depth, offset a solid block
   of `dark`, don't use `box-shadow` blur/opacity gradients.

## 4. Layout Skeleton for a PDF (invoice, proposal, etc.)

```
┌──────────────────────────────────────────────┐  ← #F2FDFF page, 8px #2F0A28 border,
│ [YELLOW CHIP: "AYUSH PAUL · INVOICE"]         │     16px hard shadow offset bottom-right
│                                                │
│  Cakra display, 60-80px: "INVOICE"            │
│  Figtree, small: invoice #, date, due date    │
│                                                │
│  ────────────────────────────────────────     │  2px rgba(dark,0.15) rule
│  bill to / from — two-column Figtree block    │
│                                                │
│  line items table — Figtree, dark text,       │
│  yellow chip for STATUS column                │
│                                                │
│  ────────────────────────────────────────     │
│  TOTAL — Cakra display, large, right-aligned  │
│                                                │
│  footer: "ayush.digital" in Cakra, small,     │
│  bottom-right; sticky-note aside bottom-left  │
│  with a one-line personal note (optional)     │
└──────────────────────────────────────────────┘
```

Cover-page variant (for proposals/longer docs): full `dark` (#2F0A28) page
with dot-grid texture, big Cakra title in `light`, yellow chip subtitle,
sticky-note-style scattered tags for tech/skills if relevant.

## 5. Voice & Copy Rules

- Sentence case or lowercase for big statements, never title case
  ("a student from north carolina", not "A Student From North Carolina").
- Caps + tracked letter-spacing only for tiny metadata labels/chips.
- First person, light self-deprecating/playful tone is fine in footers or
  asides ("Made with ❤️ by Ayush Paul!") — keep it out of financial figures
  and legal terms, which should be plain and precise.
- Numbers/data get a visual treatment (the `DataWrapper`/Card pattern):
  highlight figures (totals, due amounts, percentages) inside a bordered
  chip rather than plain inline text.

## 6. Reusable Tokens (for a PDF generator, e.g. @vercel/og, Puppeteer, react-pdf)

```ts
export const brand = {
  color: {
    primary: "#A788AF",
    secondary: "#572381",
    accent: "#F2E94E",
    dark: "#2F0A28",
    light: "#F2FDFF",
    lightPurple: "#DBCBD8",
    lightBlue: "#B9B5CB",
    lightNavy: "#90A2BB",
  },
  font: {
    display: "Cakra", // public/fonts/Cakra-Normal.ttf or app/Cakra-Normal.woff2
    body: "Figtree",
  },
  border: { width: 8, color: "#2F0A28" },
  shadow: { offset: 16, color: "#2F0A28" }, // box-shadow: `${offset}px ${offset}px 0 ${color}`
  chip: {
    background: "#F2E94E",
    color: "#2F0A28",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    fontWeight: 700,
  },
};
```

## 7. Existing Reference Implementation

`lib/og.tsx`'s `BlogOGImage` is the closest existing template to this
guide — thick border, hard shadow, yellow chip, Cakra title, Figtree
metadata, "ayush.digital" sign-off. When building the invoice/PDF template,
copy its structure rather than starting from scratch.
