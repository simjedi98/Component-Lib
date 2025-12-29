# Detail guide to custom component usage

# annotated-summary-block

## Role
`annotated-summary-block` is a **composite content block** consisting of:

- An annotated heading (marker + heading text)
- A short summary body text

It is used to introduce sections with visual emphasis while remaining concise.

---

## Conceptual Model
> “A titled summary where the title is visually annotated.”

This component combines:
- `AnnotatedText` (for the heading)
- `HeadingText` (for the summary)

---

## Relationship to Other Components

| Component | Difference |
|----|----|
| `summary-block` | Plain heading + summary |
| `annotated-text` | Single annotated text line |
| `composition-block` | Heading + rich text |
| `annotated-summary-block` | Annotated heading + short summary |

---

## When to Use
Use `annotated-summary-block` when:
- Introducing a section
- Labeling grouped content
- Highlighting a topic with a brief explanation
- You want subtle visual hierarchy without heavy layout

Typical use cases:
- Feature introductions
- Section headers
- Informational callouts
- Onboarding explanations

---

## When Not to Use
Avoid when:
- Body content is long or rich → use `composition-block`
- Annotation is unnecessary
- Heading should not draw attention
- Used repeatedly in dense lists

---

## Structure
```txt
annotated-summary-block
├─ AnnotatedText (heading)
│  ├─ MarkerAffix
│  └─ HeadingText
└─ HeadingText (summary)
