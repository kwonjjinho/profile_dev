---
name: Editorial Monolith
colors:
  surface: '#f9f9f7'
  surface-dim: '#dadad8'
  surface-bright: '#f9f9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f2'
  surface-container: '#eeeeec'
  surface-container-high: '#e8e8e6'
  surface-container-highest: '#e2e3e1'
  on-surface: '#1a1c1b'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e2e3e1'
typography:
  display:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  label-mono-xs:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style
The design system bridges the tactile distinction of fine stationery with the structural rigor of modernist software. Inspired by Swiss typographic systems, high-end business identity cards, and architectural documentation, it delivers an uncompromisingly quiet, high-signal developer portfolio environment. 

The aesthetic positions the engineer not as an assembly-line technician, but as a digital craftsman and systems thinker. Layouts favor deliberate whitespace, sharp hairline dividers, stark typographic hierarchy, and nuanced micro-interactions over decorative artifice. The emotional tone evokes calm authority, precision, and intellectual clarity.

## Colors
The palette is rooted in archival printing materials:

- **Canvas Base (`#F5F5F3`)**: A warm, desaturated off-white paper tone that eliminates digital glare and mimics heavyweight archival stock.
- **Surface Elevation (`#FFFFFF`)**: Pure paper white reserved for primary interactive cards, focal document modules, and raised sheets.
- **Primary Ink (`#171717`)**: Deep neutral graphite for headlines and primary body text, delivering absolute legibility without the harshness of pure `#000000`.
- **Secondary Ink (`#737373`)**: Mid-tone stone grey for metadata, secondary descriptions, timestamps, and supporting annotations.
- **Structural Rule (`#E5E5E5`)**: Crisp, low-contrast hairline borders and dividers that structure the grid without visual clutter.
- **Focal Accent (`#2563EB`)**: An electric cobalt blue deployed strictly for active states, selected tokens, interactive code links, and high-priority indicators.

## Typography
Typography is organized around a dual-system hierarchy: an engineering monospaced layer for indexing, timestamps, and parameters; paired with a geometric grotesk family for structural headlines and extended prose.

- **Fallbacks & Localization**: For East Asian character sets (including Korean), specify `Pretendard, -apple-system, BlinkMacSystemFont, sans-serif` directly after Inter and Geist to preserve weight parity and geometric balance.
- **Optical Tracking**: Tight negative tracking on display headlines creates a dense, editorial print presence. Conversely, monospaced labels use loose tracking (`+0.04em` to `+0.05em`) and uppercase transformation for indexing metadata.
- **Prose Measure**: Maintain body copy line lengths strictly between 55 and 68 characters for maximum document readability.

## Layout & Spacing
The layout operates on an asymmetric grid inspired by classic Swiss editorial design, anchored within a centered document chassis (maximum width `840px` for standard essays/resumes, expanding to `1120px` for multi-column project index views).

- **Grid Architecture**: Desktop layouts utilize a 12-column structural grid with `1.5rem` gutters. Project lists and resume timelines employ a 2-column or 3-column asymmetric layout where the left column houses fixed monospaced dates, status markers, and taxonomy tags, while the broader right column contains project narratives, artifacts, and engineering schematics.
- **Breakpoints**:
  - `Mobile` (< 640px): Single-column document flow. Lateral page margins drop to `1.25rem`. Asymmetric timelines collapse into a strictly vertical stacking order where tags sit directly above headings.
  - `Tablet` (640px – 1023px): Two-column fluid grid with compressed margin buffers (`2rem`).
  - `Desktop` (1024px+): Full editorial grid with dedicated sidebar margins for metadata annotations and footnotes.
- **Rhythmic Rules**: Spacing between unrelated semantic sections adheres to `space-2xl` or `space-3xl`, creating a rhythmic, gallery-like pacing. Elements within a component use compact increments (`space-xs` through `space-md`).

## Elevation & Depth
Elevation is achieved through tactile tonal contrast and razor-sharp border definitions rather than diffuse dropshadows:

- **Surface Tiers**:
  - **Ground**: `#F5F5F3` creates a tactile, non-digital matte base.
  - **Sheet / Card**: `#FFFFFF` provides focal contrast.
  - **Overlay / Popover**: `#FFFFFF` with a 1px border of `#E5E5E5` and an ultra-subtle, ambient contact shadow: `0 2px 8px -2px rgba(0, 0, 0, 0.04), 0 8px 24px -4px rgba(0, 0, 0, 0.03)`.
- **Dividers & Rules**: Interfaces rely on `1px solid #E5E5E5` lines. Borders are crisp, non-blurred, and align cleanly with the base layout grid.
- **Hover Transitions**: Instead of floating outward on the Z-axis, interactive elements indicate state shifts via high-contrast border transitions (`#E5E5E5` to `#171717`), micro-background shifts (`#FFFFFF` to `#F5F5F3`), or accent blue indicator ticks.

## Shapes
Geometry emphasizes architectural discipline through minimal corner radii:

- **Radius Scale**:
  - Base containers, cards, and input fields: `0.25rem` (4px).
  - Badges, technical chips, and pill indicators: `0.125rem` (2px) or sharp `0px` with hairline borders for a precision drafting feel.
  - Interactive modal sheets: `0.5rem` (8px maximum).
- **Physical Metaphor**: Containers should feel like precisely cut heavy business cards, technical sheets, or index slips rather than bubble-like digital containers.

## Components

### Buttons
- **Primary**: Solid `#171717` background, `#FFFFFF` text, `0.25rem` border-radius. On hover: background softens to `#262626` with a swift `150ms ease-out` transition.
- **Secondary / Outline**: `#FFFFFF` background, `1px solid #E5E5E5` hairline border, `#171717` text. On hover: border darkens to `#171717`, background transitions to `#F5F5F3`.
- **Text / Inline Link**: Primary ink `#171717` with a fine dotted or hairline solid underline in `#737373`, switching to `#2563EB` on hover with a `+1px` upward translateY translate.

### Chips & Metadata Tags
- Monospaced typography (`label-mono-xs`), rendered in `#737373` on a `#FFFFFF` fill with a `1px solid #E5E5E5` border.
- Padding: `0.2rem 0.5rem`.
- Active or highlighted filter state: Border transitions to `#2563EB` and text to `#2563EB` with an optional leading `0.375rem` solid blue dot.

### Lists & Timeline Entries
- Borderless rows separated by `1px solid #E5E5E5` horizontal rules.
- Left edge features fixed-width JetBrains Mono timestamps (`2022 — PRESENT`, `v2.4.0`) in `#737373`.
- Hovering over a list item subtly highlights the entire row background to `#FFFFFF` while nudging the title link by `2px` to the right.

### Input Fields
- Background: `#FFFFFF`. Hairline border: `1px solid #E5E5E5`. Radius: `0.25rem`.
- Typography: Inter `body-md` for user input, JetBrains Mono for monospaced code or technical arguments.
- Focus state: Border transitions instantly to `#171717`. No thick outer blur rings; a clean `1px solid #171717` outline preserves drawing precision.

### Resume & Project Cards (Business Card Metaphor)
- Default state: Pure `#FFFFFF` surface framed by `1px solid #E5E5E5`. Inner padding: `space-lg` to `space-xl`.
- Layout: Top-right corner houses live status badges (e.g., green live ping or mono repo link) alongside minimal GitHub/external icon anchors.
- Footers feature technical stack tags separated by middle dots (`•`) or clean monospaced micro-chips.

### Code Blocks & Architecture Insets
- Background: `#FFFFFF` or framed `#F5F5F3` sheet with an inset hairline border.
- Top header: Monospaced filename display with terminal-inspired status dots or a subtle "Copy Raw" plain text link.
- Syntax highlighting: High-contrast monochromatic graphite base accented with `#2563EB` and subtle muted stone tones.