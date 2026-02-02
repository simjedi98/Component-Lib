# Detail guide to custom component usage

# text-block

## Role
`text-block` represents a single atomic unit of textual content.  
It is the foundational primitive for rendering text such as headings, paragraphs, labels, captions, and inline text.

This component is intentionally generic and style-agnostic to ensure maximum reusability across projects.

---

## When to Use
Use `text-block` when:
- Rendering standalone text
- Displaying headings, paragraphs, or labels
- Text styling should be configurable by context
- You want predictable, override-safe typography

---

## When Not to Use
Do **not** use `text-block` when:
- Rendering long-form or structured content (use `rich-text`)
- Text is tightly coupled to another component’s internal logic
- The text requires fixed, project-specific styling (use a `custom-*` component)

---

## Figma Representation
- **Component name:** `text-block`
- Name must match the code component exactly
- Placeholder text only (e.g. “Text”)
- Variants may be used for:
  - semantic tag (`h1`–`h6`, `p`, `span`, `div`)
- Visual styling in Figma should not imply fixed typography decisions

> Figma components represent **semantic intent**, not visual uniqueness.

---

## Props

| Prop | Type | Default | Description |
|-----|------|---------|-------------|
| `label` | `string` | `"Hello world!"` | Text value to be rendered |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p' \| 'span' \| 'div'` | `'p'` | HTML tag used for rendering |
| `tw_classes` | `string` | `""` | Tailwind utility classes for styling overrides |
| `style_bindings` | `object` | `{}` | Inline style bindings for dynamic or reactive styling |

---

## Styling Rules
- Uses Tailwind CSS utilities
- Default styles are defined internally
- Styling overrides are passed via the `tw_classes` prop
- Conflicting utilities are resolved using `tailwind-merge`
- Inline styles may be applied via `style_bindings` when utility classes are insufficient
- No reliance on class order for correctness

### Base Classes
```txt
relative text-sm md:text-base lg:text-xl
text-black dark:text-white
font-normal
leading-5 md:leading-5.5 lg:leading-6.5