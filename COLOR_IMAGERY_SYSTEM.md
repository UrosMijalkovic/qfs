# QFS Color Schemes & Imagery System

---

> **VERSION 1.0 — DESIGN SPECIFICATION**
> Created: 2025-01-22
> Status: Color and imagery direction for implementation
> Scope: Color schemes, imagery rules, and example concepts only
> Structure and layout: LOCKED (do not modify)

---

## 1. Color Schemes

Three enterprise-grade color schemes, each designed for a global consulting firm. All schemes prioritize restraint, professionalism, and timeless appeal.

---

### SCHEME A: "Midnight Authority"
**Inspiration:** McKinsey's deep blue confidence, BCG's green undertones
**Character:** Commanding, established, globally trusted

#### Palette

| Role | Color | Hex | RGB |
|------|-------|-----|-----|
| **Primary** | Deep Midnight Blue | `#0A1628` | 10, 22, 40 |
| **Primary Light** | Navy | `#162238` | 22, 34, 56 |
| **Accent** | Refined Emerald | `#1B6B5C` | 27, 107, 92 |
| **Accent Hover** | Deep Emerald | `#145549` | 20, 85, 73 |

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **White** | Pure White | `#FFFFFF` | Primary backgrounds |
| **Off-White** | Warm Gray 50 | `#F8F9FA` | Alternating sections |
| **Light Gray** | Cool Gray 100 | `#F1F3F5` | Cards, subtle backgrounds |
| **Border Gray** | Cool Gray 200 | `#DEE2E6` | Dividers, borders |
| **Text Secondary** | Cool Gray 500 | `#6C757D` | Secondary text, captions |
| **Text Primary** | Cool Gray 800 | `#343A40` | Body text |
| **Text Heading** | Near Black | `#212529` | Headlines |

#### Accent Usage Rules
- **Use accent for:** Primary buttons, links, active navigation, key metrics
- **Limit to:** 2-3 accent elements per viewport maximum
- **Never use accent for:** Large background areas, decorative borders, icons (except interactive)

#### When NOT to Use Accent
- Section backgrounds (use neutrals only)
- Body text (use text grays)
- Passive UI elements (borders, dividers)
- Multiple competing calls-to-action on same screen

---

### SCHEME B: "Steel & Stone"
**Inspiration:** Architectural solidity, Swiss design precision
**Character:** Rational, modern, confidently understated

#### Palette

| Role | Color | Hex | RGB |
|------|-------|-----|-----|
| **Primary** | Charcoal | `#1C1C1E` | 28, 28, 30 |
| **Primary Light** | Dark Gray | `#2C2C2E` | 44, 44, 46 |
| **Accent** | Steel Blue | `#3A6EA5` | 58, 110, 165 |
| **Accent Hover** | Deep Steel | `#2D5A8A` | 45, 90, 138 |

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **White** | Pure White | `#FFFFFF` | Primary backgrounds |
| **Off-White** | Stone 50 | `#FAFAF9` | Alternating sections |
| **Light Gray** | Stone 100 | `#F5F5F4` | Cards, subtle backgrounds |
| **Border Gray** | Stone 200 | `#E7E5E4` | Dividers, borders |
| **Text Secondary** | Stone 500 | `#78716C` | Secondary text, captions |
| **Text Primary** | Stone 700 | `#44403C` | Body text |
| **Text Heading** | Stone 900 | `#1C1917` | Headlines |

#### Accent Usage Rules
- **Use accent for:** Primary buttons, inline links, progress indicators
- **Limit to:** Minimal, purposeful application
- **Never use accent for:** Backgrounds, decorative elements, secondary actions

#### When NOT to Use Accent
- Hero sections (let the message dominate)
- Footer elements (use white/gray on dark)
- Information hierarchy (use weight, not color)
- When more than one CTA exists (differentiate with primary/secondary styling, not accent variation)

---

### SCHEME C: "Maritime Trust"
**Inspiration:** Traditional consulting heritage, institutional credibility
**Character:** Classic, trustworthy, reassuringly familiar

#### Palette

| Role | Color | Hex | RGB |
|------|-------|-----|-----|
| **Primary** | Oxford Blue | `#0D2137` | 13, 33, 55 |
| **Primary Light** | Navy Blue | `#1A3A5C` | 26, 58, 92 |
| **Accent** | Antique Gold | `#B8860B` | 184, 134, 11 |
| **Accent Hover** | Deep Gold | `#996F0A` | 153, 111, 10 |

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **White** | Pure White | `#FFFFFF` | Primary backgrounds |
| **Off-White** | Cream | `#FDFCFB` | Alternating sections |
| **Light Gray** | Warm Gray 100 | `#F7F6F5` | Cards, subtle backgrounds |
| **Border Gray** | Warm Gray 200 | `#E8E6E3` | Dividers, borders |
| **Text Secondary** | Warm Gray 500 | `#737068` | Secondary text, captions |
| **Text Primary** | Warm Gray 700 | `#4A4743` | Body text |
| **Text Heading** | Warm Gray 900 | `#1F1E1C` | Headlines |

#### Accent Usage Rules
- **Use accent for:** Primary CTAs only, key proof point metrics
- **Use extremely sparingly:** Gold draws attention—reserve for highest-priority elements
- **Never use accent for:** Links (use primary blue), navigation, icons

#### When NOT to Use Accent
- Article pages (content should dominate)
- Service detail pages (information, not decoration)
- Multiple elements on same page (one gold element per viewport maximum)
- Small text or UI elements (gold loses impact at small sizes)

---

### Scheme Comparison & Recommendation

| Criterion | Scheme A | Scheme B | Scheme C |
|-----------|----------|----------|----------|
| **Enterprise Safety** | High | High | High |
| **Distinctiveness** | Medium | Low | High |
| **Versatility** | High | Highest | Medium |
| **Risk of Dated Look** | Low | Lowest | Medium |
| **Competitor Proximity** | Close to McKinsey | Unique | Close to traditional finance |

**Recommendation:** **Scheme A (Midnight Authority)** or **Scheme B (Steel & Stone)**

- Scheme A offers the confidence of deep navy with an unexpected emerald accent—distinctive but safe
- Scheme B offers maximum flexibility and minimal risk—suitable for any content type

Scheme C (Maritime Trust) is appropriate if the firm wishes to emphasize heritage and tradition, but the gold accent requires careful restraint.

---

## 2. Imagery Direction

### 2.1 Types of Images to Use

#### PRIMARY: Abstract & Conceptual
**What:** Geometric compositions, architectural details, natural patterns, abstract data visualizations
**Why:** Avoids clichés, scales across contexts, ages well, doesn't distract from content
**Examples:**
- Minimalist architectural photography (lines, shadows, structures)
- Abstract aerial/satellite imagery (desaturated)
- Geometric pattern compositions
- Subtle topographic or contour line art
- Clean data visualization as art (not functional charts)

#### SECONDARY: Environmental Context
**What:** Empty spaces, workspaces, cityscapes (unpopulated or minimal)
**Why:** Provides context without the risks of human imagery
**Examples:**
- Empty boardroom with natural light
- Abstract office architecture (no visible people)
- Urban geometry (buildings as abstract forms)
- Natural landscapes (mountains, horizons—used sparingly)

#### TERTIARY: Diagrams & Frameworks (Custom Only)
**What:** Process flows, system diagrams, methodology illustrations
**Why:** Communicates expertise visually, demonstrates structured thinking
**Examples:**
- Service methodology diagrams
- Process step visualizations
- Framework illustrations
- Custom icons (consistent style)

#### RARELY: Human Imagery
**What:** Intentional, editorial-style photography (if used at all)
**Why:** Humanizes the brand when appropriate, but high risk of cliché
**Rules if used:**
- Never stock photography poses
- No visible faces unless team/leadership page
- Focus on hands, silhouettes, or environmental context
- Candid, not staged
- Desaturated, high contrast treatment

---

### 2.2 What to Avoid Entirely

```
ABSOLUTE PROHIBITIONS
─────────────────────

✗ Handshake photos
✗ People pointing at screens/whiteboards
✗ Staged meeting room discussions
✗ Smiling team photos (except About page, if authentic)
✗ Generic "business people walking" shots
✗ Laptop/coffee/notebook flat-lays
✗ Globe or world map imagery
✗ Chess pieces or puzzle metaphors
✗ Lightbulb or "idea" imagery
✗ Target/bullseye graphics
✗ Rocket/launch metaphors
✗ Generic skyline panoramas
✗ Stock photography with visible watermarks (obviously)
✗ AI-generated human faces
✗ Highly saturated colors
✗ Busy, cluttered compositions
✗ Anything with text overlaid on the image itself
✗ Clip art or cartoon-style illustrations
✗ 3D rendered objects
✗ Gradient overlays on photography
```

---

### 2.3 Image-to-Text Ratio Guidelines

| Page Type | Image Coverage | Visual Approach |
|-----------|----------------|-----------------|
| **Homepage** | 10-15% | Text-dominant hero, minimal imagery elsewhere |
| **Services Overview** | 5-10% | Icons only, no photography |
| **Service Category** | 5-10% | Icons or single abstract image |
| **Individual Service** | 10-15% | One methodology diagram, no photography |
| **Insights Hub** | 35-45% | Article card images (consistent treatment) |
| **Individual Article** | 15-25% | One hero image, 1-2 supporting (max) |
| **About** | 25-35% | Team/office imagery (if authentic and high-quality) |
| **Contact** | 0-5% | Minimal or no imagery |

---

### 2.4 When No Image is Better Than an Image

**Default to no image when:**
- The section's purpose is to communicate information, not evoke emotion
- No high-quality, on-brand image is available
- An image would compete with the message rather than support it
- The page already has multiple images (diminishing returns)
- The image would be decorative rather than meaningful

**Specific "no image" zones:**
- Hero sections (dark background with typography is sufficient)
- CTA sections (the message is the visual)
- Proof/credibility sections (metrics are the visual)
- Service deliverables lists
- Contact forms and information

**Rule of thumb:** If you have to ask whether an image is needed, it probably isn't.

---

## 3. Example Image Concepts

### 3.1 Homepage Hero Concept

**Current approach (recommended):** No image. Dark background with typography.

**Alternative concept if image is desired:**

| Element | Description |
|---------|-------------|
| **Subject** | Abstract architectural detail—converging lines of a modern building's interior atrium, shot from below looking up |
| **Style** | High contrast black and white, or deep navy duotone |
| **Mood** | Aspirational, structured, expansive |
| **Abstraction Level** | High—the viewer should not immediately recognize it as a building; it should read as geometry first |
| **Color Treatment** | Desaturated to near-monochrome, or tinted to match primary color palette |
| **Composition** | Strong diagonal or converging lines drawing eye upward/forward |

**Why it fits:**
- Conveys ambition and upward trajectory without cliché (no rockets, no charts)
- Architectural = structured thinking, solid foundation
- Abstract treatment avoids dating and location-specificity
- Dark treatment integrates with dark hero sections

---

### 3.2 Service Page Concept

**Primary approach (recommended):** Custom methodology diagram only. No photography.

**Alternative concept if hero image is desired:**

| Element | Description |
|---------|-------------|
| **Subject** | Topographic contour lines or abstract terrain mapping |
| **Style** | Line art with subtle color, minimal fills |
| **Mood** | Analytical, navigational, precise |
| **Abstraction Level** | Very high—pure geometry, no recognizable landscape |
| **Color Treatment** | Lines in accent color (subtle) on off-white or light gray background |
| **Composition** | Flowing lines suggesting movement from complex to resolved |

**Why it fits:**
- Metaphor of navigation through complexity (consulting's core value)
- Analytical/cartographic feeling = data-driven approach
- Scalable across all service pages with color variations
- Integrates well with light section backgrounds

**Variation approach:**
- Financial Advisory: Contour lines suggesting depth/layers
- Business Advisory: Intersecting geometric planes
- Sustainability: Organic flowing lines (not literal leaves/trees)

---

### 3.3 Article Hero Concept

| Element | Description |
|---------|-------------|
| **Subject** | Abstract data visualization—flowing lines representing data streams, connections, or trends |
| **Style** | Minimal, editorial, high-end print magazine aesthetic |
| **Mood** | Intellectual, current, sophisticated |
| **Abstraction Level** | Medium-high—suggests data/analysis without being a literal chart |
| **Color Treatment** | Primary palette with subtle accent highlights |
| **Composition** | Asymmetric, with clear space for text overlay or adjacent placement |

**Why it fits:**
- Signals thought leadership and analytical rigor
- Avoids the "stock photo with quote" cliché
- Flexible enough for any article topic
- Creates consistent, recognizable article identity

**Execution variations by category:**
- Financial Performance: Flowing line charts, abstract currency patterns
- Strategy & Growth: Branching structures, network nodes
- Operations: Geometric efficiency patterns, parallel lines
- Digital: Pixel gradients, binary abstractions (subtle)
- Sustainability: Organic geometries, cyclical patterns
- Leadership: Interconnected circles, constellation patterns

---

### 3.4 Image Concept Summary Matrix

| Location | Image Type | Subject Direction | Abstraction | Color |
|----------|------------|-------------------|-------------|-------|
| Homepage Hero | None (or architectural) | Converging lines, upward | Very high | Monochrome/primary |
| Service Category | None (or abstract pattern) | Geometric metaphor | Very high | Subtle accent |
| Individual Service | Methodology diagram | Process visualization | Custom illustration | Brand palette |
| Insights Hub | Article cards | Consistent abstract treatment | High | Category-coded |
| Article Hero | Abstract data visualization | Topic-relevant abstraction | Medium-high | Primary + accent |
| About | Environmental/team (if available) | Authentic, unstaged | Low-medium | Natural, desaturated |

---

## 4. Implementation Notes

### For AI Image Generation

When generating images for this brand:

**Prompt patterns that work:**
- "Minimal geometric composition, deep navy background, subtle teal accent lines, architectural, no people, high contrast, editorial"
- "Abstract topographic lines, off-white background, thin precise strokes, analytical, clean, minimal"
- "Flowing data visualization abstract, dark blue to light gradient, no text, sophisticated, print quality"

**Prompt patterns to avoid:**
- Any mention of "business," "corporate," "professional," or "team"
- References to specific industries (finance, consulting)
- Requests for "modern" or "innovative" (leads to clichés)
- Human figures or faces
- Literal metaphors (lightbulbs, targets, puzzles)

### Consistency Rules

1. **Same photographer's eye:** All images should feel like they were captured/created by the same person with the same aesthetic sensibility
2. **Consistent color temperature:** Warm neutrals OR cool neutrals, never mixed
3. **Consistent contrast:** High contrast, deep blacks, clean whites
4. **Consistent abstraction level:** If one image is very abstract, all should be
5. **Consistent aspect ratios:** Define 2-3 ratios and use consistently (e.g., 16:9 for heroes, 3:2 for cards)

---

## 5. Decision Required

Before implementation, select:

1. **Color Scheme:** A (Midnight Authority), B (Steel & Stone), or C (Maritime Trust)
2. **Imagery Approach:** Minimal (no photography) or Subtle (abstract photography/illustration)

**Recommendation:**
- Color: **Scheme A** or **Scheme B**
- Imagery: **Minimal** (diagrams only, no photography except articles)

---

*End of Color & Imagery System Document*
