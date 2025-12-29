# Detail guide to custom component usage

# plain-list-block

## Role
`plain-list-block` is a **structured list primitive** used to render a vertical list of text items that share a **single annotation marker definition**.

Despite using `AnnotatedText` internally, the list is considered *plain* because:
- All items reference the **same marker**
- There is no per-item semantic differentiation
- The list communicates uniform information rather than hierarchy

---

## Conceptual Model
A `plain-list-block` is:

> “Multiple statements, equally weighted, visually grouped.”

It represents **enumeration**, not progression or emphasis.

---

## Why “Plain”?
Although this block uses annotation markers:
- The marker is **decorative or categorical**, not semantic
- Every item shares the same marker instance
- There is no index, ordinal meaning, or step logic

This distinguishes it from:
- Ordered lists
- Step lists
- Feature lists with unique icons per item

---

## When to Use
Use `plain-list-block` when:
- Listing features, facts, or attributes
- Displaying bullet-like content with a custom marker
- Showing grouped statements under a shared heading
- Maintaining consistent spacing and typography across items

Common use cases:
- Feature highlights
- Capability lists
- Requirements or expectations
- Descriptive bullet sections

---

## When Not to Use
Do **not** use `plain-list-block` when:
- Items need different icons or meanings
- Order matters (steps, sequences)
- Items contain complex nested content
- Each row has actions or links

---

## Figma Representation
- **Component name:** `plain-list-block`
- Consists of:
  - Optional heading
  - Repeating annotated text rows
- Annotation marker is defined once at the block level

---

## Props

### Layout & Structure

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | Position utility | `'relative'` | Block positioning |
| `width` | `string` | `'w-full'` | Block width |
| `gap` | `string` | `'gap-3'` | Vertical spacing |

---

### Heading

| Prop | Type | Default | Description |
|----|----|----|----|
| `heading_label` | `string \| null` | `null` | Optional heading text |
| `heading_font_family` | `string` | `''` | Font family |
| `heading_font_size` | `string` | `'text-3xl leading-9'` | Font size |
| `heading_font_weight` | `string` | `'font-medium'` | Font weight |
| `heading_color` | `string` | `'text-black'` | Text color |
| `heading_padding` | `string` | `'py-4 px-2'` | Padding |

---

### Annotation Marker (Shared)

| Prop | Type | Default | Description |
|----|----|----|----|
| `annotation_marker` | `string \| null` | `null` | Marker asset path |
| `annotation_padding` | `string` | `'py-1 px-4'` | Marker padding |
| `annotation_gap` | `string` | `'gap-0'` | Marker–text spacing |
| `annotation_width` | `string` | `'w-6'` | Marker width |
| `annotation_height` | `string` | `'h-6'` | Marker height |
| `annotation_bgcolor` | `string` | `'bg-transparent'` | Marker background |
| `annotation_border_width` | `string` | `'border-0'` | Border width |
| `annotation_border_color` | `string` | `'border-transparent'` | Border color |

---

### List Items

| Prop | Type | Default | Description |
|----|----|----|----|
| `item_value` | `string[]` | **required** | List item text |
| `item_font_family` | `string` | `''` | Font family |
| `item_font_size` | `string` | `'text-base leading-5.5'` | Font size |
| `item_font_weight` | `string` | `'font-normal'` | Font weight |
| `item_color` | `string` | `'text-[#666]'` | Text color |

---

## Internal Structure
```txt
plain-list-block
├─ HeadingText (optional)
└─ AnnotatedText × N
   └─ shared marker definition
