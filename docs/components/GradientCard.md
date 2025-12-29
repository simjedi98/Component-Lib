# Detail guide to custom component usage

# gradient-card

## Role
`gradient-card` is a **visual surface container** that uses a gradient background instead of a flat color.

It is functionally equivalent to `plain-card` but visually expressive.

---

## Conceptual Model
A `gradient-card` is:

> “A highlighted surface that draws attention.”

It should be used sparingly and intentionally.

---

## Relationship to `plain-card`
| Aspect | plain-card | gradient-card |
|----|----|----|
| Purpose | Neutral surface | Emphasized surface |
| Background | Solid color | Gradient |
| Content | Arbitrary | Arbitrary |
| Semantics | None | None |
| Structure | Identical | Identical |

---

## When to Use
Use `gradient-card` when:
- A section needs emphasis
- Highlighting featured content
- Calling attention to a specific block
- Introducing brand or aesthetic flair

Common use cases:
- Call-to-action sections
- Featured cards
- Highlighted summaries
- Promotional panels

---

## When Not to Use
Avoid `gradient-card` when:
- Repeated many times in a list
- Used as a base layout container
- Content should remain visually neutral
- Readability might suffer

---

## Props

### Layout & Positioning

| Prop | Type | Default | Description |
|----|----|----|----|
| `position` | Position utility | `'relative'` | Positioning context |
| `display` | `string` | `''` | Layout control |
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
| `gradient` | `string` | `''` | Gradient utility class |
| `radius` | `string` | `'rounded-[10px]'` | Border radius |

---

## Default Styles
```css
flex flex-col gap-0
bg-linear-[#f5f5f5,#ffffff]
