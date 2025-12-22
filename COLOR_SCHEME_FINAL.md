# QFS Color Scheme — Final Specification

---

> **VERSION 1.0 — APPROVED FOR IMPLEMENTATION**
> Brand Color: `#A5040C` (QFS Crimson)
> Created: 2025-01-22

---

## Brand Color Analysis

**Primary Brand Color:** `#A5040C`
- **Character:** Deep crimson, authoritative, decisive
- **Associations:** Confidence, action, leadership, urgency
- **Risk:** Can feel aggressive if overused
- **Strategy:** Use sparingly as accent; let white and neutrals dominate

---

## Complete Color Palette

### Primary Colors

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Brand Primary** | QFS Crimson | `#A5040C` | 165, 4, 12 | Primary accent, CTAs, key highlights |
| **Brand Dark** | Deep Crimson | `#7A0309` | 122, 3, 9 | Hover states, pressed states |
| **Brand Light** | Soft Crimson | `#C41E26` | 196, 30, 38 | Subtle highlights (rare) |

### Dark Palette (Heroes, Footer, Dark Sections)

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **Primary Dark** | Rich Black | `#0D0D0D` | 13, 13, 13 | Hero backgrounds, footer |
| **Secondary Dark** | Charcoal | `#1A1A1A` | 26, 26, 26 | Dark section variants |
| **Tertiary Dark** | Dark Gray | `#262626` | 38, 38, 38 | Cards on dark backgrounds |

### Neutral Palette (Backgrounds, Text)

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| **White** | Pure White | `#FFFFFF` | 255, 255, 255 | Primary backgrounds |
| **Off-White** | Warm White | `#FAFAFA` | 250, 250, 250 | Alternating sections |
| **Light Gray** | Gray 50 | `#F5F5F5` | 245, 245, 245 | Cards, subtle backgrounds |
| **Border** | Gray 200 | `#E5E5E5` | 229, 229, 229 | Dividers, borders |
| **Text Tertiary** | Gray 400 | `#A3A3A3` | 163, 163, 163 | Disabled, placeholders |
| **Text Secondary** | Gray 500 | `#737373` | 115, 115, 115 | Secondary text, captions |
| **Text Primary** | Gray 700 | `#404040` | 64, 64, 64 | Body text |
| **Text Heading** | Gray 900 | `#171717` | 23, 23, 23 | Headlines, emphasis |

---

## Color Application Rules

### Brand Crimson Usage

```
WHERE TO USE CRIMSON (#A5040C)
──────────────────────────────
✓ Primary CTA buttons
✓ Inline text links
✓ Active navigation states
✓ Key metrics/proof points (numbers only)
✓ Hover states on interactive elements
✓ Progress indicators
✓ Form focus states

CRIMSON QUANTITY LIMITS
───────────────────────
• Maximum 2-3 crimson elements per viewport
• Never more than 5% of visible screen area
• One primary CTA per section maximum
• Links: crimson on hover, gray-700 default (optional)
```

### Where NOT to Use Crimson

```
NEVER USE CRIMSON FOR
─────────────────────
✗ Large background areas
✗ Section backgrounds
✗ Text blocks (body copy)
✗ Decorative borders or lines
✗ Icons (except interactive states)
✗ Multiple competing CTAs
✗ Image overlays
✗ Gradients
✗ Shadows or glows
```

### Background Distribution

```
PAGE BACKGROUND ALLOCATION
──────────────────────────
85% — White (#FFFFFF) or Off-White (#FAFAFA)
10% — Light Gray (#F5F5F5) for emphasis sections
5%  — Rich Black (#0D0D0D) for hero, CTA, footer

NEVER use crimson as a background color.
```

---

## Component Color Specifications

### Buttons

| State | Background | Text | Border |
|-------|------------|------|--------|
| **Primary Default** | `#A5040C` | `#FFFFFF` | none |
| **Primary Hover** | `#7A0309` | `#FFFFFF` | none |
| **Primary Active** | `#5C0207` | `#FFFFFF` | none |
| **Secondary Default** | `#FFFFFF` | `#171717` | `#E5E5E5` |
| **Secondary Hover** | `#FAFAFA` | `#171717` | `#A3A3A3` |
| **Ghost Default** | transparent | `#FFFFFF` | `#FFFFFF40` |
| **Ghost Hover** | `#FFFFFF15` | `#FFFFFF` | `#FFFFFF60` |

### Links

| Context | Default | Hover |
|---------|---------|-------|
| **On Light Background** | `#A5040C` | `#7A0309` |
| **On Dark Background** | `#FFFFFF` | `#FFFFFF` (underline) |
| **In Body Text** | `#A5040C` | `#7A0309` + underline |

### Cards

| Type | Background | Border | Hover Border |
|------|------------|--------|--------------|
| **On White Section** | `#FFFFFF` | `#E5E5E5` | `#A5040C` |
| **On Off-White Section** | `#FFFFFF` | `#E5E5E5` | `#A5040C` |
| **On Dark Section** | `#1A1A1A` | `#262626` | `#A5040C` |

### Navigation

| Element | Default | Hover | Active |
|---------|---------|-------|--------|
| **Nav Link** | `#404040` | `#171717` | `#A5040C` |
| **Nav on Dark** | `#FFFFFF99` | `#FFFFFF` | `#FFFFFF` |
| **Dropdown BG** | `#FFFFFF` | — | — |
| **Dropdown Item** | `#404040` | `#FAFAFA` bg | `#A5040C` text |

### Typography

| Element | Color | Notes |
|---------|-------|-------|
| **H1, H2, H3** | `#171717` | On light backgrounds |
| **H1, H2, H3** | `#FFFFFF` | On dark backgrounds |
| **Body Text** | `#404040` | Primary content |
| **Secondary Text** | `#737373` | Captions, metadata |
| **Tertiary Text** | `#A3A3A3` | Disabled, hints |

### Metrics & Proof Points

| Element | Color |
|---------|-------|
| **Metric Number** | `#A5040C` |
| **Metric Description** | `#737373` |

---

## Section Color Patterns

### Hero Sections (Dark)
```
Background: #0D0D0D (Rich Black)
Headline: #FFFFFF
Subheadline: #FFFFFF (opacity 70%)
CTA Primary: #A5040C background, #FFFFFF text
CTA Secondary: transparent, #FFFFFF text, #FFFFFF40 border
```

### Content Sections (Light)
```
Background: #FFFFFF or #FAFAFA (alternating)
Headlines: #171717
Body: #404040
Links: #A5040C
Cards: #FFFFFF with #E5E5E5 border
```

### Proof/Credibility Sections
```
Background: #F5F5F5 (Light Gray)
Metric Numbers: #A5040C
Metric Text: #737373
```

### CTA Sections (Dark)
```
Background: #0D0D0D
Headline: #FFFFFF
Supporting Text: #FFFFFF (opacity 70%)
Button: #A5040C background, #FFFFFF text
```

### Footer
```
Background: #0D0D0D
Logo: #FFFFFF
Section Headers: #FFFFFF (opacity 50%)
Links: #FFFFFF (opacity 70%), hover #FFFFFF
Dividers: #FFFFFF (opacity 10%)
Copyright: #FFFFFF (opacity 50%)
```

---

## Accessibility Notes

| Combination | Contrast Ratio | WCAG |
|-------------|----------------|------|
| Crimson on White | 7.8:1 | AAA |
| White on Crimson | 7.8:1 | AAA |
| White on Rich Black | 19.3:1 | AAA |
| Gray-700 on White | 9.4:1 | AAA |
| Gray-500 on White | 4.6:1 | AA |
| Crimson on Off-White | 7.6:1 | AAA |

All primary text combinations meet WCAG AA or AAA standards.

---

## Visual Examples

### Homepage Hero
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ████████████████████████████████████████████████████  │  ← #0D0D0D
│                                                         │
│         We Partner in Your Success                      │  ← #FFFFFF
│                                                         │
│         Advisory services for leaders...                │  ← #FFFFFF (70%)
│                                                         │
│     ┌──────────────────┐  ┌──────────────────┐         │
│     │ Explore Services │  │  Read Insights   │         │
│     └──────────────────┘  └──────────────────┘         │
│           #A5040C              transparent/#FFFFFF      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Service Card Hover
```
┌─────────────────────────────────┐
│                                 │  ← #FFFFFF background
│  Financial Advisory             │  ← #171717 → #A5040C on hover
│                                 │
│  From finance function...       │  ← #737373
│                                 │
│  Learn more →                   │  ← #A5040C
│                                 │
└─────────────────────────────────┘
          ↑
    Border: #E5E5E5 → #A5040C on hover
```

### Proof Point
```
┌─────────────────────────────────┐
│                                 │  ← #F5F5F5 background
│            40%                  │  ← #A5040C
│   Reduction in close time       │  ← #737373
│                                 │
└─────────────────────────────────┘
```

---

## Implementation Checklist

Before deploying, verify:

- [ ] Crimson appears in max 2-3 places per viewport
- [ ] No crimson backgrounds anywhere
- [ ] All text meets contrast requirements
- [ ] Hover states are defined for all interactive elements
- [ ] Dark sections use Rich Black, not dark crimson
- [ ] Links are distinguishable from body text
- [ ] Focus states are visible for accessibility

---

*End of Color Scheme Specification*
