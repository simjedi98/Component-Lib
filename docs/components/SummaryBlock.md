# Detail guide to custom component usage

# summary-block

## Role
`summary-block` represents a **titled unit of brief explanatory content**.

It pairs:
- A **heading** (topic)
- A **short summary** (high-level explanation)

This block is designed for **scannability** — it conveys meaning quickly without overwhelming the reader.

---

## Conceptual Model
A `summary-block` answers:

> “What is this, in one or two sentences?”

It is **not** meant for detailed explanations. That responsibility belongs to `detail-block`.

---

## When to Use
Use `summary-block` when:
- Introducing a concept
- Providing feature overviews
- Explaining sections at a glance
- Structuring landing pages
- Supporting visual hierarchy

Typical use cases:
- Feature cards
- Section intros
- Service descriptions
- Onboarding highlights

---

## When Not to Use
Do **not** use `summary-block` when:
- Content is long or multi-paragraph → use `detail-block`
- Content is purely decorative → use `text-block`
- Content requires markers or icons → use `annotated-text`

---

## Figma Representation
- **Component name:** `summary-block`
- Should visually communicate:
  - Clear title
  - Brief supporting text
- Variants may include:
  - Typography scale
  - Spacing density
  - Alignment

Designers should treat summary content as **atomic**, not editable paragraphs.

---

## Props

### Content

| Prop | Type | Default | Description |
|----|----|----|----|
| `heading_value` | `string` | `'Summary Block'` | Text rendered as the heading |
| `heading_as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h7'` | `'h3'` | HTML tag used for heading |
| `summary_value` | `string` | `'A component type that is coupled with a short summary'` | Summary text |

---

### Layout

| Prop | Type | Default | Description |
|----|----|----|----|
| `width` | `string` | `'w-74'` | Width utility |
| `gap` | `string` | `'gap-3'` | Spacing between heading and summary |
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | Positioning utility |

---

### Typography Overrides

| Prop | Type | Default | Description |
|----|----|----|----|
| `heading_classes` | `string` | `''` | Tailwind utilities applied to heading |
| `summary_classes` | `string` | `''` | Tailwind utilities applied to summary |

---

## Default Structure
```txt
summary-block
├─ HeadingText (heading)
└─ HeadingText (summary)