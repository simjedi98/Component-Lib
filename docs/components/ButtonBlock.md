# Detail guide to custom component usage

# button-block

## Role
`button-block` is a **clickable container primitive** designed to render an interactive call-to-action using standardized layout and styling rules.

It composes:
- A **layout container**
- A **text primitive** (`HeadingText`)
- Optional semantics (`button` vs `div`)

`button-block` is intentionally **unopinionated about behavior** and **opinionated about structure**.

---

## Conceptual Model
A `button-block` is:
- A flex container
- With visual affordance (background, border, padding)
- Containing a text label

It does **not** implement:
- Navigation
- Routing
- State machines
- Animations
- Accessibility logic (yet)

Those concerns are layered on later via wrappers or extensions.

---

## When to Use
Use `button-block` when:
- You need a reusable button-like UI element
- Visual consistency matters
- You want to enforce spacing, sizing, and typography
- The button’s behavior is defined elsewhere

Common use cases:
- CTAs
- Form triggers
- Toggles (visual only)
- Inline actions
- Icon-less buttons

---

## When Not to Use
Do **not** use `button-block` when:
- The button contains complex children (icons + text layouts)
- You need intrinsic keyboard/ARIA logic (yet)
- The interaction is highly specialized

For those cases, build a `custom-button-*` wrapper.

---

## Figma Representation
- **Component name:** `button-block`
- Should represent:
  - Background
  - Padding
  - Text label
- Variants may include:
  - Size
  - Color
  - Border
  - Shape

> Interaction states (hover, active, disabled) should be **documented**, not embedded.

---

## Props

### Content & Semantics

| Prop | Type | Default | Description |
|----|----|----|----|
| `value` | `string` | `'button'` | Text label rendered inside the button |
| `as` | `'button' \| 'div'` | `'button'` | HTML element used for rendering |

---

### Layout & Positioning

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | CSS positioning utility |
| `padding` | `string` | `'px-4 py-1.5'` | Padding around text |
| `width` | `string` | `'w-fit'` | Width utility |
| `height` | `string` | `'h-fit'` | Height utility |

---

### Visual Styling

| Prop | Type | Default | Description |
|----|----|----|----|
| `backgroundColor` | `string` | `'bg-blue-500'` | Background color utility |
| `border_radius` | `string` | `'rounded-[8px]'` | Border radius utility |
| `border_width` | `string` | `'border-0'` | Border thickness utility |
| `border_style` | Tailwind border utilities | `'border-none'` | Border style |
| `border_color` | `string` | `'border-transparent'` | Border color utility |

---

### Text Styling

| Prop | Type | Default | Description |
|----|----|----|----|
| `text_classes` | `string` | `'text-white font-normal'` | Tailwind utilities applied to the inner text |

---

## Default Structure
```txt
component (button | div)
└─ HeadingText
