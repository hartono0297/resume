---
name: Kinetic Mono-Minimalism
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2cab0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c947c'
  outline-variant: '#424936'
  surface-tint: '#98da27'
  primary: '#ccff80'
  on-primary: '#213600'
  primary-container: '#a3e635'
  on-primary-container: '#416400'
  inverse-primary: '#446900'
  secondary: '#c6c7c2'
  on-secondary: '#2f312e'
  secondary-container: '#484a46'
  on-secondary-container: '#b8b9b4'
  tertiary: '#fee7ff'
  on-tertiary: '#462153'
  tertiary-container: '#f3c1ff'
  on-tertiary-container: '#734b80'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b2f746'
  primary-fixed-dim: '#98da27'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#454744'
  tertiary-fixed: '#fad7ff'
  tertiary-fixed-dim: '#e7b6f3'
  on-tertiary-fixed: '#2f093d'
  on-tertiary-fixed-variant: '#5e376b'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  mono-number:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1280px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
  stack-xl: 160px
---

## Brand & Style

The design system is engineered for high-end developer portfolios, emphasizing technical precision through a minimalist, editorial lens. The aesthetic prioritizes clarity and intent, utilizing high-contrast typography and a restrained color palette to create a "digital workshop" atmosphere.

The style is **Minimalist-Modern with Technical Accents**. It leverages the starkness of dark-mode surfaces paired with the structural rigidity of monospaced elements. The emotional response should be one of quiet confidence, architectural stability, and uncompromising attention to detail. Large typography provides the editorial "prestige," while thin borders and precise spacing maintain a disciplined, functional layout.

## Colors

The palette is rooted in deep obsidian tones to minimize eye strain and maximize the impact of the accent color. 

- **Primary Background (#080808):** Used for the main canvas to provide infinite depth.
- **Secondary Background (#111111):** Used for subtle section nesting or structural sidebars.
- **Card Background (#161616):** Provides a slight lift from the base for interactive elements.
- **Accent Green (#A3E635):** Used sparingly for high-value calls to action, status indicators, and subtle highlights. It represents vitality and "system-active" states.
- **Borders (#2A2A2A):** Crucial for defining the "Technical" feel; use for hairline divisions between sections and card outlines.

## Typography

Typography is the primary decorative element. **Geist Sans** handles the narrative weight, providing a clean, Swiss-inspired foundation for headlines and body text. **JetBrains Mono** is reserved for metadata, navigation numbers, and technical stack chips.

- **Display Text:** Should use tight letter-spacing and heavy weights to create a "block" effect.
- **Section Headers:** Combine a `mono-number` (e.g., 01/) with a `headline-lg` for a structured, numbered-index feel.
- **Technical Data:** Use monospaced fonts for all numbers, dates, and technology tags to reinforce the developer-oriented nature of the site.

## Layout & Spacing

This design system uses a **Fluid Editorial Grid**. The layout relies on generous vertical "breathing room" (stack-lg/xl) to separate major thoughts, contrasted with tight, dense groupings for technical specifications.

- **Grid Model:** A 12-column system for desktop, 4-column for mobile. 
- **The "Technical Gutter":** Use vertical and horizontal hairline borders (`#2A2A2A`) to align content instead of relying solely on white space. This creates a "blueprint" effect.
- **Asymmetry:** Encourage placing text in the center 6 columns for readability, while allowing large display typography to bleed toward the margins for an editorial look.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Surface Contrast** rather than traditional shadows. 

1.  **Base Layer:** `#080808` - Used for the main site canvas.
2.  **Raised Layer:** `#111111` - Used for navigation bars and secondary sections.
3.  **Interactive Layer:** `#161616` - Used for cards and buttons.

**Borders:** Every container should have a 1px solid border using `#2A2A2A`. On hover, interactive elements should transition their border color to the primary accent (`#A3E635`) or a lighter grey (`#404040`). Avoid blurs or glows unless used extremely sparingly for status indicators.

## Shapes

The shape language is **Soft-Technical**. While the grid is rigid and mathematical, a slight 4px (`0.25rem`) radius is applied to cards and buttons to prevent the UI from feeling hostile or overly sharp. 

- **Buttons/Inputs:** 4px radius.
- **Cards:** 4px radius.
- **Tags/Chips:** 2px radius or sharp for a more "code-tag" look.
- **Selection States:** Sharp 0px corners are permissible for text highlights to maintain the editorial feel.

## Components

### Buttons
- **Primary:** Background `#A3E635`, text `#080808`, 4px radius. Bold, JetBrains Mono font.
- **Ghost:** Border `1px solid #2A2A2A`, text `#F5F5F0`. On hover, background becomes `#161616`.

### Project Cards
- Background: `#161616`.
- Border: `1px solid #2A2A2A`.
- Structure: Image at the top (if applicable), followed by a `mono-label` category, then a `headline-md` title.
- Hover State: Border shifts to `#A3E635`.

### Section Headings
- Format: `[01 // ABOUT]`
- The number and slashes use `mono-label` in `#A3E635`.
- The text uses `headline-lg` in `#F5F5F0`.

### Technical Tags (Stack)
- Small, monospaced text.
- Border: `1px solid #2A2A2A`.
- Background: Transparent or `#111111`.
- Padding: `4px 8px`.

### Navigation Bar
- Fixed top or floating bottom dock.
- Backdrop-filter: `blur(12px)` with a semi-transparent `#080808` background.
- Bottom border: `1px solid #2A2A2A`.