# Detail guide to custom component usage

# marker-affix

## Role
`marker-affix` is a small, flexible visual marker component intended to **annotate, decorate, or visually anchor** other components.

It is commonly used alongside text-based components to provide emphasis, hierarchy, or visual cues (e.g. bullets, icons, indicators).

---

## When to Use
Use `marker-affix` when:
- You need a visual marker next to text or UI elements
- A component requires an icon, dot, or symbolic indicator
- You want marker behavior without semantic coupling
- The marker must be positionable and style-configurable

---

## When Not to Use
Do **not** use `marker-affix` when:
- The marker conveys semantic meaning on its own
- The marker is interactive (use a button or control)
- The marker is tightly bound to layout logic
- The marker requires complex animation or state

---

## Figma Representation
- **Component name:** `marker-affix`
- Shape-only representation (circle or placeholder icon)
- Variants may include:
  - size
  - background
  - border
- Figma markers should not encode layout assumptions

> `marker-affix` represents **visual presence**, not behavior.

---

## Props

| Prop | Type | Default | Description |
|----|----|----|----|
| `path` | `string \| null` | `null` | Path to marker image (SVG strongly recommended) |
| `position` | `'relative' \| 'absolute' \| 'fixed' \| 'static' \| 'sticky'` | `'relative'` | CSS positioning utility |
| `padding` | `string` | `'p-0'` | Tailwind padding utility |
| `background` | `string` | `'bg-transparent'` | Tailwind background utility |
| `border_radius` | `string` | `'rounded-full'` | Tailwind border radius utility |
| `border_color` | `string` | `'border-transparent'` | Tailwind border color utility |
| `border_width` | `string` | `'border-0'` | Tailwind border width utility |
| `marker_width` | `string` | `'w-6'` | Tailwind width utility for marker |
| `marker_height` | `string` | `'h-6'` | Tailwind height utility for marker |

---

## Default Behavior
- If `path` is provided:
  - Marker renders an image via `NuxtImg`
- If `path` is `null`:
  - Marker renders a default circular dot

Default fallback marker:
- `w-2.5 h-2.5`
- `bg-black`
- `rounded-full`

---

## Styling Strategy
- Uses **Tailwind CSS utilities exclusively**
- Class composition handled via `twJoin`
- No class conflict resolution required (distinct responsibility classes)
- Designed for predictable, deterministic styling

### Root Classes
```txt
w-fit h-fit
