# Detail guide to custom component usage

# rich-text

## Role
`rich-text` is a **content container primitive** designed to render **long-form, structured text** via slot composition.

Unlike `text-block`, which renders a single atomic string, `rich-text` exists to hold:
- Multiple paragraphs
- Inline formatting
- Links
- Lists
- Arbitrary HTML content

It does **not** impose structure — only styling and positioning.

---

## Conceptual Model
A `rich-text` block is:
- A typographic wrapper
- With configurable layout and text utilities
- That delegates content entirely to its children

Think of it as:
> “A styled reading surface.”

---

## When to Use
Use `rich-text` when:
- Content is authored externally (CMS, markdown, WYSIWYG)
- Text includes multiple elements
- Information density is high
- You want consistent typography without enforcing structure

Typical use cases:
- Blog content
- Feature descriptions
- Product details
- Documentation sections
- Long explanations inside `detail-block`

---

## When Not to Use
Do **not** use `rich-text` when:
- Rendering a single string → use `text-block`
- Rendering a labeled pair → use `summary-block`
- Rendering annotated items → use `annotated-text`

---

## Figma Representation
- **Component name:** `rich-text`
- Represents:
  - Content column width
  - Typography scale
  - Alignment
- Content itself is **illustrative**, not literal

Designers should not attempt to mirror HTML structure — only intent.

---

## Props

### Semantics

| Prop | Type | Default | Description |
|----|----|----|----|
| `as` | `'p' \| 'div'` | `'p'` | HTML element used as root wrapper |

---

### Layout & Positioning

| Prop | Type | Default | Description |
|----|----|----|----|
| `width` | `string` | `'w-full'` | Block width utility |
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | Positioning utility |
| `padding` | `string` | `'p-0'` | Padding around content |
| `left` | `string` | `''` | Left offset utility |
| `right` | `string` | `''` | Right offset utility |
| `top` | `string` | `''` | Top offset utility |
| `bottom` | `string` | `''` | Bottom offset utility |

---

### Typography

| Prop | Type | Default | Description |
|----|----|----|----|
| `align` | Text alignment utilities | `'text-left'` | Text alignment |
| `color` | `string` | `'text-black'` | Text color utility |
| `font_weight` | `string` | `'font-normal'` | Font weight utility |
| `font_size` | `string` | `'text-base'` | Font size utility |
| `font_family` | `string` | `''` | Font family utility |

---

## Default Structure
```txt
rich-text
└─ slot (arbitrary HTML / components)