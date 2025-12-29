# Detail guide to custom component usage

# composition-block

## Role
`composition-block` represents a **titled container for composed, long-form content**.

It combines:
- A **section heading**
- A **rich-text body** rendered via slot content

Unlike `summary-block`, which enforces brevity, `composition-block` is designed to host **arbitrarily complex content** while preserving a consistent typographic baseline.

---

## Conceptual Model
A `composition-block` answers:

> “Here is the topic — now here is everything related to it.”

It is a **structural wrapper**, not a content authoring tool.

---

## Relationship to Other Blocks

| Component | Purpose |
|---------|--------|
| `text-block` | Atomic text |
| `summary-block` | Heading + short explanation |
| `composition-block` | Heading + composed content |

You can think of `composition-block` as a **flexible detail container**.

---

## When to Use
Use `composition-block` when:
- Content exceeds a short paragraph
- You need headings + rich content
- Content includes multiple elements (lists, annotations, links)
- You want consistent typography without restricting structure

Common use cases:
- Documentation sections
- Feature explanations
- About / philosophy sections
- Editorial content
- CMS-driven layouts

---

## When Not to Use
Do **not** use `composition-block` when:
- Content is brief → use `summary-block`
- Content is purely typographic → use `rich-text`
- You need strict layout enforcement → use custom blocks

---

## Figma Representation
- **Component name:** `composition-block`
- Represents:
  - Section heading
  - Content area
- Content is **illustrative**, not literal
- Structure should imply “flow”, not rigid layout

---

## Props

### Heading

| Prop | Type | Default | Description |
|----|----|----|----|
| `heading_value` | `string` | `'Composition Block'` | Heading text |
| `heading_as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h7'` | `'h3'` | HTML tag for heading |
| `heading_classes` | `string` | `''` | Utility classes applied to heading |

---

### Layout

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | Positioning utility |
| `width` | `string` | `'w-11/12'` | Width utility |
| `gap` | `string` | `'gap-3'` | Spacing between heading and content |

---

### Content Typography (RichText Defaults)

| Prop | Type | Default | Description |
|----|----|----|----|
| `content_color` | `string` | `'text-black'` | Default text color |
| `content_font_weight` | `string` | `'font-light'` | Default font weight |
| `content_font_size` | `string` | `'text-base leading-5.5'` | Default font size & line height |
| `content_font_family` | `string` | `''` | Default font family |
| `content_padding` | `string` | `'p-0'` | Padding around content |
| `content_alignment` | Text alignment utilities | `'text-left'` | Text alignment |

---

## Default Structure
```txt
composition-block
├─ HeadingText
└─ RichText
   └─ slot (arbitrary content)
