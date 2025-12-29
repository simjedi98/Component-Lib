# Detail guide to custom component usage

# plain-card

## Role
`plain-card` is a **presentation-only container** used to visually group content on a shared surface.

It provides:
- Background color
- Border & radius
- Shadow
- Internal spacing
- Layout alignment

It does **not** define content structure or semantics.

---

## Conceptual Model
A `plain-card` is:

> “A surface that holds content.”

All meaning comes from its children.

---

## When to Use
Use `plain-card` when:
- You need visual separation from the page background
- Content should feel grouped or elevated
- You want a reusable base for higher-level card components
- Layout consistency matters across sections

Common use cases:
- Feature tiles
- Info panels
- Content previews
- Containers for compositions and lists

---

## When Not to Use
Do **not** use `plain-card` when:
- You need semantic HTML meaning
- The container implies behavior (click, expand, select)
- The layout is purely structural with no visual surface

---

## Props

### Layout & Positioning

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | Position utility | `'relative'` | Positioning context |
| `display` | `string` | `'flex flex-col gap-0'` | Layout mode |
| `alignment` | `string` | `'items-center'` | Child alignment |

---

### Sizing

| Prop | Type | Default | Description |
|----|----|----|----|
| `width` | `string` | `'w-fit'` | Card width |
| `height` | `string` | `'h-fit'` | Card height |
| `padding` | `string` | `'p-4'` | Internal spacing |

---

### Visual Styling

| Prop | Type | Default | Description |
|----|----|----|----|
| `color` | `string` | `'bg-white'` | Background color |
| `radius` | `string` | `'rounded-[10px]'` | Border radius |
| `shadow` | `string` | `'shadow-[0_1px_4px_rgba(0,0,0,0.25)]'` | Elevation |

---

### Border

| Prop | Type | Default | Description |
|----|----|----|----|
| `border_width` | `string` | `''` | Border thickness |
| `border_style` | `string` | `''` | Border style |
| `border_color` | `string` | `''` | Border color |

---

## Dark Mode
`plain-card` includes a default dark mode background:

```css
dark:bg-[#333333]
