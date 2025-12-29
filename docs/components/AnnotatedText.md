# Detail guide to custom component usage

# annotated-text

## Role
`annotated-text` is a **composite component** that pairs a visual marker with a short text label.

It is designed to express **annotation**, **emphasis**, or **categorical context**, where the marker visually introduces or qualifies the text rather than replacing it.

---

## Conceptual Model
An `annotated-text` consists of:
- A **marker** (via `marker-affix`)
- A **text primitive** (via `text-block`)
- A **flex container** that controls alignment, spacing, and flow

This component **does not own typography or iconography** — it orchestrates them.

---

## When to Use
Use `annotated-text` when:
- A text element needs a visual qualifier
- You are labeling or tagging information
- You need a compact marker + text pairing
- The annotation is brief and non-rich

Common examples:
- Section labels
- Status indicators
- Inline callouts
- Feature bullets
- Metadata tags

---

## When Not to Use
Do **not** use `annotated-text` when:
- The text content is long or formatted (use `detail-block`)
- The marker is interactive
- The marker conveys standalone meaning
- Rich text is required

---

## Figma Representation
- **Component name:** `annotated-text`
- Structure:
  - Marker (slot or icon placeholder)
  - Text (single line preferred)
- Variants may include:
  - Alignment
  - Marker size
  - Text hierarchy

> Figma components should mirror structure, not implementation details.

---

## Props

### Text Props

| Prop | Type | Default | Description |
|----|----|----|----|
| `text_value` | `string` | `'Camel Toe'` | Text content to render |
| `text_as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p' \| 'span' \| 'div'` | `'p'` | HTML tag used for text |
| `text_classes` | `string` | `''` | Tailwind utilities for text styling |

---

### Marker Props

| Prop | Type | Default | Description |
|----|----|----|----|
| `marker_path` | `string \| null` | `null` | Path to marker image (SVG recommended) |
| `marker_padding` | `string` | `'p-0'` | Padding around marker |
| `marker_background` | `string` | `'bg-transparent'` | Background utility |
| `marker_border_radius` | `string` | `'rounded-full'` | Border radius utility |
| `marker_border_color` | `string` | `'border-transparent'` | Border color utility |
| `marker_border_width` | `string` | `'border-0'` | Border width utility |
| `marker_width` | `string` | `'w-6'` | Marker width |
| `marker_height` | `string` | `'h-6'` | Marker height |

---

### Layout Props

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | CSS positioning utility |
| `padding` | `string` | `'p-0'` | Padding around entire annotation |
| `align` | Tailwind `items-*` | `'items-baseline'` | Vertical alignment of marker and text |
| `gap` | `string` | `'gap-2'` | Space between marker and text |
| `width` | `string` | `'w-fit'` | Width utility |

---

## Default Structure
```txt
flex
├─ marker-affix
└─ text-block
