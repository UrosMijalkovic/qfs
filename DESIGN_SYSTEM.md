# QFS Design & Visual System

---

> **VERSION 1.0 — PHASE 2**
> Created: 2025-01-22
> Status: Design rules and visual system specification
> Scope: Rules and systems only. No final copy, no pixel-perfect UI, no image generation.

---

## 1. Visual Direction

### 1.1 Overall Look & Feel

**Positioning:** Authoritative, restrained, quietly confident.

The visual system communicates:
- **Expertise** — through structured layouts and deliberate hierarchy
- **Trust** — through restrained color and professional typography
- **Clarity** — through generous whitespace and focused content
- **Substance** — through density of insight, not density of decoration

**Mood Keywords:**
- Considered, not trendy
- Precise, not flashy
- Warm professionalism, not cold corporate
- Established, not startup

**Anti-Patterns (Explicitly Avoid):**
- Gradient overlays on photos
- Animated counters or scrolling number tickers
- Parallax effects on every section
- Hero videos with ambient music
- Neon accent colors
- Drop shadows on cards
- Glossy button effects
- Stock photo grids

---

### 1.2 Color System

#### Primary Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary Dark** | Deep Navy | `#0F1729` | Headers, hero backgrounds, footer |
| **Primary** | Navy | `#1E2A47` | Section backgrounds, accents |
| **Accent** | Refined Teal | `#2D7D8A` | Links, buttons, highlights (sparingly) |
| **Accent Hover** | Deep Teal | `#1F5A64` | Interactive states |

#### Neutral Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **White** | Pure White | `#FFFFFF` | Primary backgrounds |
| **Off-White** | Warm White | `#FAFAFA` | Alternating section backgrounds |
| **Light Gray** | Cool Gray 50 | `#F4F5F7` | Card backgrounds, subtle dividers |
| **Mid Gray** | Cool Gray 200 | `#E2E4E9` | Borders, dividers |
| **Text Gray** | Cool Gray 500 | `#6B7280` | Secondary text, captions |
| **Dark Gray** | Cool Gray 800 | `#1F2937` | Primary body text |
| **Near Black** | Charcoal | `#111827` | Headlines, emphasis |

#### Color Usage Philosophy

```
Restraint is the rule.
─────────────────────

1. BACKGROUNDS
   - 80% of sections: white or off-white
   - 15% of sections: light gray
   - 5% of sections: primary dark (heroes, CTAs, footer)

2. ACCENT COLOR
   - Used only for: links, primary buttons, active states
   - Never used for: large background areas, decorative elements
   - Maximum per viewport: 2-3 accent elements

3. TEXT COLOR
   - Headlines: near black
   - Body: dark gray
   - Secondary: text gray
   - On dark backgrounds: white (never gray on dark)

4. NO GRADIENTS
   - Solid colors only
   - Exception: subtle gradient on hero (max 2 colors, same hue family)
```

---

### 1.3 Typography System

#### Font Selection

**Primary Font (Headings + Body):** Inter, Söhne, or similar geometric sans-serif
- Clean, professional, highly legible
- Strong at all sizes
- Extensive weight range

**Alternative Consideration:** System font stack for performance
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
```

**No Serif Fonts** — maintains modern consulting aesthetic

#### Type Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Usage |
|-------|----------------|---------------|--------|-------------|-------|
| **Display** | 64px | 40px | 600 | 1.1 | Homepage hero only |
| **H1** | 48px | 32px | 600 | 1.2 | Page titles |
| **H2** | 36px | 28px | 600 | 1.25 | Section headings |
| **H3** | 24px | 20px | 600 | 1.3 | Subsection headings, card titles |
| **H4** | 20px | 18px | 600 | 1.4 | Minor headings |
| **Body Large** | 20px | 18px | 400 | 1.6 | Lead paragraphs, emphasis |
| **Body** | 17px | 16px | 400 | 1.7 | Primary content |
| **Body Small** | 15px | 14px | 400 | 1.6 | Secondary content |
| **Caption** | 13px | 12px | 500 | 1.5 | Metadata, labels |
| **Overline** | 12px | 11px | 600 | 1.4 | Category labels, uppercase |

#### Typography Rules

```
Hierarchy Discipline
────────────────────

1. ONE H1 PER PAGE
   - Always the page title
   - Largest text on the page

2. H2 FOR MAJOR SECTIONS
   - Introduce each content block
   - Consistent spacing above (80-120px)

3. H3 FOR SUBSECTIONS
   - Within a section only
   - Never skip from H2 to H4

4. WEIGHT USAGE
   - 600 (semibold): all headings
   - 500 (medium): overlines, labels, emphasis
   - 400 (regular): body text only
   - Never use bold (700) in body copy
   - Never use light (300)

5. LINE LENGTH
   - Body text: 60-75 characters maximum
   - Headlines: 40-50 characters ideal
   - Achieved via max-width containers (720px for content)

6. LETTER SPACING
   - Headings: -0.02em (slight tightening)
   - Body: 0 (default)
   - Overlines: 0.05em (slight expansion, uppercase)
```

---

### 1.4 Whitespace & Layout Rhythm

#### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Inline elements, tight grouping |
| `space-sm` | 8px | Related elements |
| `space-md` | 16px | Within components |
| `space-lg` | 24px | Between components |
| `space-xl` | 32px | Between groups |
| `space-2xl` | 48px | Section internal padding |
| `space-3xl` | 64px | Between sections (mobile) |
| `space-4xl` | 96px | Between sections (tablet) |
| `space-5xl` | 128px | Between sections (desktop) |

#### Rhythm Rules

```
Section Cadence
───────────────

1. VERTICAL RHYTHM
   - Section padding: 96-128px top/bottom (desktop)
   - Mobile sections: 64px top/bottom
   - Consistent across all pages

2. HORIZONTAL RHYTHM
   - Max content width: 1200px
   - Content column: 720px (body text)
   - Wide column: 960px (cards, grids)
   - Full width: edge-to-edge (heroes only)

3. BREATHING ROOM
   - Every section must "breathe"
   - Minimum 48px between any two content blocks
   - Heroes get extra: 160-200px padding

4. DENSITY CONTROL
   - No more than 2 content types per section
   - (e.g., heading + paragraph, or heading + card grid)
   - Never: heading + paragraph + cards + CTA in one section
```

---

## 2. Page-Level Layout Logic

### 2.1 Homepage Layout

```
HOMEPAGE SECTION SEQUENCE
─────────────────────────

┌─────────────────────────────────────────┐
│  HERO                                   │
│  - Dark background (primary dark)       │
│  - Centered text                        │
│  - Display headline + body large sub    │
│  - 2 CTAs (primary + ghost)             │
│  - 100vh height                         │
│  - No image (text only)                 │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  VALUE PROPOSITION                      │
│  - White background                     │
│  - 3-column grid                        │
│  - Icon + H4 + short text per column    │
│  - Centered alignment                   │
│  - No links within                      │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  SERVICES OVERVIEW                      │
│  - Off-white background                 │
│  - H2 left-aligned                      │
│  - 3 service cards (equal height)       │
│  - Card: H3 + 2-line description + link │
│  - View all services link below         │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  FEATURED INSIGHT                       │
│  - White background                     │
│  - H2 left-aligned                      │
│  - 1 large feature card (with image)    │
│  - 2-3 small cards (title + meta only)  │
│  - Explore insights link                │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  PROOF / CREDIBILITY                    │
│  - Light gray background                │
│  - H2 centered                          │
│  - 4 proof points (metric + context)    │
│  - 2x2 grid or single row               │
│  - No images                            │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  ABOUT TEASER                           │
│  - White background                     │
│  - H2 + 2 paragraphs + link             │
│  - Text only, left-aligned              │
│  - Max-width 720px                      │
└─────────────────────────────────────────┘
           ↓ 128px spacing
┌─────────────────────────────────────────┐
│  CTA SECTION                            │
│  - Primary dark background              │
│  - Centered text                        │
│  - H2 + supporting line + button        │
│  - No image                             │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  FOOTER                                 │
└─────────────────────────────────────────┘
```

#### Homepage Hero Rules

- **Background:** Solid dark (no image, no video)
- **Text:** White, centered
- **Headline:** Display size, max 8 words
- **Subheadline:** Body large, max 25 words
- **CTAs:** Primary (accent color) + Secondary (ghost/outline)
- **Height:** 100vh on desktop, auto on mobile (min 600px)
- **Animation:** None, or single subtle fade-in on load

---

### 2.2 Service Page Layout

#### Service Category Page

```
SERVICE CATEGORY PAGE SEQUENCE
──────────────────────────────

┌─────────────────────────────────────────┐
│  HERO                                   │
│  - Primary dark background              │
│  - H1 + subheadline                     │
│  - 60vh height                          │
│  - No image                             │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  INTRODUCTION                           │
│  - White background                     │
│  - 2-3 paragraphs (body large)          │
│  - Problem framing                      │
│  - Max-width 720px                      │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  SERVICES GRID                          │
│  - Off-white background                 │
│  - H2: "Our Capabilities"               │
│  - Card grid (2 or 3 columns)           │
│  - Each card links to service page      │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  APPROACH OVERVIEW                      │
│  - White background                     │
│  - H2 + methodology summary             │
│  - Optional: simple diagram             │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  PROOF POINT                            │
│  - Light gray background                │
│  - Single featured result               │
│  - Metric + context                     │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  CTA SECTION                            │
└─────────────────────────────────────────┘
```

#### Individual Service Page

```
INDIVIDUAL SERVICE PAGE SEQUENCE
────────────────────────────────

┌─────────────────────────────────────────┐
│  HERO                                   │
│  - Primary dark background              │
│  - H1 (service name)                    │
│  - Subheadline (value prop, 1-2 lines)  │
│  - 50vh height                          │
│  - No image                             │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  THE CHALLENGE                          │
│  - White background                     │
│  - H2 + 3-4 paragraphs                  │
│  - Problem framing                      │
│  - Text only                            │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  OUR APPROACH                           │
│  - Off-white background                 │
│  - H2 + methodology description         │
│  - Process diagram (3-5 steps)          │
│  - Diagram is primary visual            │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  WHAT WE DELIVER                        │
│  - White background                     │
│  - H2 + bullet list or card grid        │
│  - Concrete deliverables                │
│  - Text-dominant                        │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  CLIENT OUTCOMES                        │
│  - Light gray background                │
│  - H2 + 2-3 proof points                │
│  - Metric + brief context each          │
│  - No images                            │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  RELATED SERVICES                       │
│  - Off-white background                 │
│  - H3 + 2-3 service cards               │
│  - Horizontal scroll on mobile          │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  CTA SECTION                            │
└─────────────────────────────────────────┘
```

---

### 2.3 Article/Insights Page Layout

#### Insights Hub (Listing)

```
INSIGHTS HUB LAYOUT
───────────────────

┌─────────────────────────────────────────┐
│  HERO                                   │
│  - Primary dark background              │
│  - H1: "Insights"                       │
│  - Optional: brief description          │
│  - 40vh height                          │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  FILTER BAR                             │
│  - White background, sticky on scroll   │
│  - Category pills (horizontal)          │
│  - Clean, minimal                       │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  FEATURED ARTICLE                       │
│  - Large card with image                │
│  - H3 + excerpt + meta                  │
│  - Full width                           │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  ARTICLE GRID                           │
│  - 3-column grid (desktop)              │
│  - 2-column (tablet), 1-column (mobile) │
│  - Cards: image + title + meta          │
│  - Consistent card height               │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  PAGINATION / LOAD MORE                 │
└─────────────────────────────────────────┘
```

#### Individual Article

```
ARTICLE PAGE LAYOUT
───────────────────

┌─────────────────────────────────────────┐
│  ARTICLE HEADER                         │
│  - White background                     │
│  - Category label (overline)            │
│  - H1 (article title)                   │
│  - Subtitle (optional, body large)      │
│  - Meta: author, date, read time        │
│  - Max-width: 720px, centered           │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  FEATURED IMAGE (Optional)              │
│  - Full-width (max 960px)               │
│  - 16:9 aspect ratio                    │
│  - Caption below if needed              │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  ARTICLE BODY                           │
│  - White background                     │
│  - Max-width: 720px, centered           │
│  - Standard prose styling               │
│  - Pull quotes for emphasis             │
│  - Subheadings (H2, H3)                 │
│  - In-line images/diagrams              │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  RELATED SERVICES                       │
│  - Off-white background                 │
│  - H3 + 2-3 service cards               │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  RELATED ARTICLES                       │
│  - White background                     │
│  - H3 + 3 article cards                 │
└─────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────┐
│  CTA SECTION                            │
│  - Newsletter signup or contact         │
└─────────────────────────────────────────┘
```

---

### 2.4 Reusable Content Blocks

| Block | Structure | Usage |
|-------|-----------|-------|
| **Hero Dark** | Dark bg + centered H1 + subline + CTAs | Homepage, service pages |
| **Hero Light** | White bg + left-aligned H1 + breadcrumb | Articles, about pages |
| **Section Header** | H2 + optional subtext | Every major section |
| **Card Grid** | 2-3 column responsive grid | Services, articles, features |
| **Service Card** | Title + 2-line desc + arrow link | Service listings |
| **Article Card** | Image + title + category + date | Article listings |
| **Proof Point** | Large metric + supporting context | Credibility sections |
| **Text Block** | H2 + paragraphs (720px max) | Challenge, about content |
| **Process Diagram** | Numbered steps, horizontal or vertical | Methodology sections |
| **CTA Section** | Dark bg + H2 + button | Page endings |
| **Pull Quote** | Large italic text + optional attribution | Within articles |

---

### 2.5 Visual Support Rules

```
Where Visuals Support Text vs Text Dominates
─────────────────────────────────────────────

TEXT DOMINATES (minimal or no imagery):
├── Homepage hero
├── Service page heroes
├── Challenge/problem sections
├── About narrative sections
├── CTA sections
├── Proof point sections
└── Value proposition strips

VISUALS SUPPORT TEXT (balanced):
├── Article featured images
├── Methodology diagrams
├── Service card icons
└── Article body illustrations

VISUAL PRIMARY (rare):
├── Featured insight card on homepage
├── Article listing cards
└── Team photos (about page only)
```

---

## 3. Imagery System

### 3.1 Image Types Allowed

| Type | Usage | Guidelines |
|------|-------|------------|
| **Abstract Geometric** | Hero backgrounds, section accents | Subtle, muted colors, non-distracting |
| **Minimal Photography** | Article headers, about page | High contrast, desaturated, no people in action |
| **Diagrams** | Methodology, process, frameworks | Custom-designed, consistent style |
| **Icons** | Service cards, features | Line-based, consistent stroke weight |
| **Data Visualizations** | Articles, proof points | Clean, minimal, branded colors |

### 3.2 Image Types Prohibited

```
NEVER USE:
──────────
✗ Stock photos of people shaking hands
✗ Stock photos of people pointing at screens/whiteboards
✗ Stock photos of people in meetings looking engaged
✗ Cityscapes or skylines
✗ Generic "business" imagery (suits, briefcases)
✗ Overly saturated or filtered photos
✗ Photos with text overlays
✗ Decorative patterns or textures
✗ 3D renders or glossy objects
✗ Clip art or cartoon illustrations
✗ Photos with watermarks (obviously)
✗ AI-generated faces of people
```

### 3.3 Image-to-Text Ratio by Page Type

| Page Type | Image Coverage | Notes |
|-----------|----------------|-------|
| **Homepage** | 10-15% | Minimal imagery, text-dominant |
| **Service Category** | 5-10% | Icons in cards, possible diagram |
| **Individual Service** | 15-20% | One methodology diagram |
| **Article** | 20-30% | Featured image + 1-2 supporting |
| **About** | 25-35% | Team photos, office (if applicable) |
| **Insights Hub** | 40-50% | Article card images dominate grid |

### 3.4 When to Use No Image

```
USE NO IMAGE WHEN:
──────────────────
- Hero sections (dark background with text is sufficient)
- CTA sections (message is the focus)
- Proof/credibility sections (metrics speak)
- Value proposition strips (icons only)
- Short text sections (about teasers, intros)

THE DEFAULT IS NO IMAGE.
Add images only when they genuinely enhance understanding or credibility.
```

### 3.5 AI-Generated Imagery Guidelines

```
AI IMAGE GENERATION RULES
─────────────────────────

ALLOWED STYLES:
├── Abstract geometric compositions
├── Minimal architectural details
├── Subtle gradient backgrounds
├── Topographic or contour patterns
├── Abstract data visualizations
└── Geometric line art

STYLE PARAMETERS:
├── Desaturated / muted color palette
├── High contrast but not harsh
├── Clean edges, no noise or grain
├── Professional, not artistic
├── Could plausibly be custom photography
└── No obvious AI artifacts

NEVER GENERATE:
├── Human faces or figures
├── Recognizable buildings or places
├── Text or logos within images
├── Anything that looks "AI-generated"
└── Surreal or fantastical imagery

CONSISTENCY RULES:
├── Same color temperature across all generated images
├── Similar level of abstraction
├── Consistent aspect ratios per use case
├── All images should feel like one curated set
└── When in doubt, use solid color instead
```

### 3.6 Image Specifications

| Context | Aspect Ratio | Min Resolution | Format |
|---------|--------------|----------------|--------|
| Article Featured | 16:9 | 1920x1080 | WebP, fallback JPG |
| Article Card | 16:9 | 800x450 | WebP |
| Hero Background | 21:9 | 2560x1080 | WebP |
| Diagram | Flexible | Vector (SVG) | SVG |
| Icon | 1:1 | Vector (SVG) | SVG |

---

## 4. Diagrams & Frameworks

### 4.1 Where Diagrams Add Value

```
USE DIAGRAMS FOR:
─────────────────
✓ Methodology / process steps (service pages)
✓ Framework visualization (articles)
✓ Comparison matrices (articles)
✓ System architecture (technical services)
✓ Timeline / phased approaches

DO NOT USE DIAGRAMS FOR:
────────────────────────
✗ Decoration
✗ Simple lists (use text)
✗ Anything with fewer than 3 elements
✗ Homepage (keep it clean)
```

### 4.2 Diagram Types

#### Process Diagram (Horizontal)
- **Use:** Linear methodologies, phased approaches
- **Structure:** 3-5 steps, left to right
- **Elements:** Number + title + optional 1-line description per step
- **Connectors:** Simple arrows or lines

```
Example structure:

  ┌───────┐      ┌───────┐      ┌───────┐      ┌───────┐
  │  01   │ ───► │  02   │ ───► │  03   │ ───► │  04   │
  │Assess │      │Design │      │Build  │      │Sustain│
  └───────┘      └───────┘      └───────┘      └───────┘
```

#### Process Diagram (Vertical)
- **Use:** When horizontal space is limited, mobile
- **Structure:** Same as horizontal, top to bottom

#### System/Layered Diagram
- **Use:** Showing relationships, hierarchies
- **Structure:** Nested boxes or connected nodes
- **Keep simple:** Maximum 3 levels of nesting

#### Comparison Matrix
- **Use:** Evaluating options, before/after
- **Structure:** 2-4 columns, 3-6 rows
- **Style:** Clean table, subtle borders

### 4.3 Diagram Visual Consistency

```
DIAGRAM STYLE RULES
───────────────────

COLORS:
├── Primary shapes: Primary Dark (#0F1729) or Navy (#1E2A47)
├── Accent elements: Teal (#2D7D8A) sparingly
├── Backgrounds: White or Off-white
├── Text: Near Black on light, White on dark shapes
└── Lines/connectors: Mid Gray (#E2E4E9)

TYPOGRAPHY:
├── Titles within diagrams: H4 equivalent (18-20px, 600 weight)
├── Descriptions: Body small (14-15px, 400 weight)
├── Numbers: Display treatment (larger, accent color)
└── All text: Same font family as site

SHAPES:
├── Rounded rectangles (8px radius) — not sharp corners
├── Circles for numbered steps
├── No shadows or 3D effects
├── Consistent stroke weight (2px)
└── No decorative elements

SPACING:
├── Generous padding within shapes
├── Consistent gaps between elements
├── Align to grid
└── Mobile: Stack vertically, maintain proportions
```

### 4.4 Diagram Placement

- **Position:** Centered within section
- **Max width:** 960px
- **Padding:** 48px above and below
- **Caption:** Optional, below diagram, caption style
- **Mobile:** Simplified version or horizontal scroll

---

## 5. Article Visual Scalability

### 5.1 Fast Publishing Requirements

The article system must enable:
- Non-technical authors to create content
- Consistent visual quality without design intervention
- Publishing in under 15 minutes (for text-ready content)

### 5.2 Reusable Article Components

```
ARTICLE BUILDING BLOCKS
───────────────────────

REQUIRED (every article):
├── Article Header (title, meta, category)
├── Body Text (paragraphs, headings)
├── Related Content (services, articles)
└── CTA Section

OPTIONAL (add as needed):
├── Featured Image (1 per article max)
├── Pull Quote (1-2 per article max)
├── In-line Image (max 3 per article)
├── Diagram/Framework (max 2 per article)
├── Data Callout (metric + context)
├── Bulleted List
├── Numbered List
└── Comparison Table

NEVER NEEDED:
├── Custom layouts
├── Unique styling
├── Embedded videos (link externally)
└── Interactive elements
```

### 5.3 Article Component Specifications

#### Pull Quote
```
┌────────────────────────────────────────────────────┐
│                                                    │
│  "The most successful transformations focus on    │
│   building capability, not just cutting cost."    │
│                                                    │
│                          — Attribution (optional)  │
│                                                    │
└────────────────────────────────────────────────────┘

- Left border: 4px, accent color
- Text: Body large (20px), italic style
- Background: Off-white
- Padding: 32px
- Max-width: 720px (same as body)
```

#### Data Callout
```
┌────────────────────────────────────────────────────┐
│                                                    │
│                       40%                          │
│          of work hours can be impacted             │
│                    by AI/LLMs                      │
│                                                    │
│           Source: Research citation               │
│                                                    │
└────────────────────────────────────────────────────┘

- Number: Display size, accent color
- Context: Body, dark gray
- Source: Caption, text gray
- Background: Light gray
- Centered, full-width block
```

#### In-line Image
```
┌────────────────────────────────────────────────────┐
│                                                    │
│              [Image: 16:9 ratio]                   │
│                                                    │
├────────────────────────────────────────────────────┤
│  Caption text describing the image                │
└────────────────────────────────────────────────────┘

- Max-width: 720px (body width) or 960px (expanded)
- Caption: Caption style, left-aligned
- Margin: 48px above and below
```

### 5.4 Article Quality Consistency

```
EVERY ARTICLE MUST HAVE:
────────────────────────
□ Category label (from defined taxonomy)
□ Clear H1 title (60-70 characters)
□ Publication date
□ Estimated read time
□ Executive summary (first paragraph)
□ At least 2 subheadings (H2)
□ Related services section (2-3 links)
□ Related articles section (2-3 links)
□ Contact CTA

VISUAL CONSISTENCY CHECKS:
──────────────────────────
□ No more than 1 featured image
□ No more than 3 in-line images
□ No more than 2 diagrams
□ No more than 2 pull quotes
□ All images meet quality standards
□ All diagrams follow style guide
□ No custom styling or layout deviations
```

### 5.5 Article Template (MDX Structure)

```mdx
---
title: "Article Title Here"
subtitle: "Optional subtitle"
category: "financial-performance"
tags: ["fpa", "forecasting"]
author: "Author Name"
date: "2025-01-22"
readTime: "8 min"
services: ["budgeting-forecasting", "strategic-planning-fpa"]
image: "/images/insights/article-slug.jpg"  # Optional
---

Executive summary paragraph that captures the key insight
in 2-3 sentences.

## First Major Section

Body paragraphs with standard formatting.

<PullQuote>
Key insight worth highlighting.
</PullQuote>

## Second Major Section

More content here.

<DataCallout value="40%" context="of CFOs cite..." source="Research" />

## Implications for Leaders

Actionable content.

<!-- Related content auto-generated from frontmatter -->
```

---

## 6. Component Reference Summary

### 6.1 Global Components

| Component | Variants | Notes |
|-----------|----------|-------|
| **Header** | Standard, Transparent (hero overlay) | Sticky on scroll |
| **Footer** | Standard | Consistent across all pages |
| **Button** | Primary, Secondary, Ghost | 3 sizes: sm, md, lg |
| **Link** | Inline, Standalone | Accent color, underline on hover |
| **Card** | Service, Article, Proof Point | Consistent padding and radius |

### 6.2 Section Components

| Component | Background Options | Content |
|-----------|-------------------|---------|
| **Hero** | Dark, Light | Title + sub + CTAs |
| **Text Section** | White, Off-white | H2 + paragraphs |
| **Card Grid** | White, Off-white, Light gray | H2 + 2-4 column grid |
| **CTA Section** | Dark | H2 + text + button |
| **Proof Section** | Light gray | Metrics grid |

### 6.3 Content Components

| Component | Usage |
|-----------|-------|
| **Service Card** | Service listings |
| **Article Card** | Article listings |
| **Proof Point** | Credibility metrics |
| **Pull Quote** | Article emphasis |
| **Data Callout** | Statistics highlight |
| **Process Diagram** | Methodology visualization |

---

## 7. Implementation Notes

### 7.1 Next.js Considerations

```
Component Organization:
/src
  /components
    /layout
      Header.tsx
      Footer.tsx
      Section.tsx
    /ui
      Button.tsx
      Card.tsx
      Link.tsx
    /sections
      HeroDark.tsx
      HeroLight.tsx
      CardGrid.tsx
      TextSection.tsx
      CTASection.tsx
      ProofSection.tsx
    /article
      ArticleHeader.tsx
      PullQuote.tsx
      DataCallout.tsx
      RelatedContent.tsx
    /diagrams
      ProcessDiagram.tsx
      ComparisonMatrix.tsx
```

### 7.2 Tailwind Configuration

```js
// Suggested theme extensions
theme: {
  extend: {
    colors: {
      'primary-dark': '#0F1729',
      'primary': '#1E2A47',
      'accent': '#2D7D8A',
      'accent-hover': '#1F5A64',
    },
    spacing: {
      '18': '4.5rem',
      '22': '5.5rem',
      '30': '7.5rem',
    },
    maxWidth: {
      'content': '720px',
      'wide': '960px',
      'site': '1200px',
    }
  }
}
```

### 7.3 Responsive Breakpoints

| Breakpoint | Width | Columns | Notes |
|------------|-------|---------|-------|
| Mobile | < 640px | 1 | Stack everything |
| Tablet | 640-1024px | 2 | Adjust grid columns |
| Desktop | > 1024px | 3-4 | Full layout |

---

*End of Design System Document*
