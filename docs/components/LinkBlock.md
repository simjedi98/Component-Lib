# Detail guide to custom component usage

# link-block

## Role
`link-block` is a **navigational text primitive** used to render clickable links with consistent typography and layout behavior.

It abstracts:
- Internal navigation (`NuxtLink`)
- External navigation (`<a>`)

while preserving a unified API and styling surface.

---

## Conceptual Model
A `link-block` is:

> “Text that promises navigation.”

It is not a button, and it should not behave like one.

---

## When to Use
Use `link-block` when:
- Rendering inline or standalone links
- Linking between routes or external pages
- Maintaining consistent link typography
- Styling links independently of buttons

Common use cases:
- Navigation menus
- Inline text links
- Footer links
- Calls-to-action that are *navigational*, not *interactive*

---

## When Not to Use
Do **not** use `link-block` when:
- The element represents an action → use `button-block`
- The element contains complex children → use a custom wrapper
- You need hover animations or advanced states (yet)

---

## Figma Representation
- **Component name:** `link-block`
- Represents:
  - Text label
  - Color
  - Decoration (underline / none)
- Interaction states may be annotated, not implemented

---

## Props

### Semantics & Navigation

| Prop | Type | Default | Description |
|----|----|----|----|
| `as` | `'nuxt' \| 'a'` | `'nuxt'` | Link rendering strategy |
| `url` | `string` | `'/'` | Navigation target |
| `label` | `string` | `'home'` | Link text |

---

### Layout & Positioning

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | Positioning utility |
| `padding` | `string` | `'p-0'` | Padding around link |

---

### Typography & Appearance

| Prop | Type | Default | Description |
|----|----|----|----|
| `default_color` | `string` | `'#0051f2'` | Text color (inline style) |
| `text_decoration` | `string` | `'no-underline'` | Text decoration utility |
| `font_family` | `string` | `''` | Font family utility |
| `font_size` | `string` | `'text-base'` | Font size utility |
| `font_weight` | `string` | `'font-normal'` | Font weight utility |

---

## Default Structure
```txt
link-block
└─ NuxtLink | <a>
