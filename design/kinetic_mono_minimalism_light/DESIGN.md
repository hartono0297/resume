---
name: Kinetic Mono-Minimalism (Light)
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424936'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#727a64'
  outline-variant: '#c2cab0'
  surface-tint: '#446900'
  primary: '#446900'
  on-primary: '#ffffff'
  primary-container: '#a3e635'
  on-primary-container: '#416400'
  inverse-primary: '#98da27'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#555f6d'
  on-tertiary: '#ffffff'
  tertiary-container: '#c9d3e4'
  on-tertiary-container: '#515b69'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b2f746'
  primary-fixed-dim: '#98da27'
  on-primary-fixed: '#121f00'
  on-primary-fixed-variant: '#334f00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#d9e3f4'
  tertiary-fixed-dim: '#bdc7d8'
  on-tertiary-fixed: '#121c28'
  on-tertiary-fixed-variant: '#3e4755'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-base:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
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
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style
The design system embodies a fusion of technical precision and editorial clarity. It is designed for high-performance environments where information density must coexist with visual breathing room. The aesthetic is rooted in **Minimalism** with a "Kinetic" edge—utilizing monospaced accents to suggest a developer-centric, engineered backbone while maintaining a sophisticated, user-friendly interface.

The target audience includes engineers, data analysts, and modern professionals who value efficiency and high-contrast legibility. The UI should evoke a sense of calm authority, professional reliability, and cutting-edge technical capability.

## Colors
The palette is strictly functional, leveraging a high-contrast foundation to guide the eye.

- **Primary Background**: `#FAFAFA` provides a crisp, slightly softened canvas that reduces eye strain compared to pure white while maintaining an "off-white" editorial feel.
- **Accent Green**: `#A3E635` is reserved for primary actions, success states, and critical highlights. It provides a vibrant "kinetic" energy against the neutral base.
- **Text Hierarchy**: Primary text uses `#111111` for maximum accessibility. Secondary text and metadata use `#4B5563` to create a clear visual hierarchy.
- **UI Borders**: Subtle separation is achieved via `#E5E7EB` hairline strokes rather than heavy shadows.

## Typography
Typography is the primary driver of the "Kinetic" identity. 

- **Geist Sans** is used for all primary communication. Its geometric but humanistic qualities provide a modern, approachable professional feel. Headlines should use tight letter spacing to emphasize the "editorial" look.
- **JetBrains Mono** is used strategically for labels, tags, data points, and code snippets. This introduces the "technical" layer of the design system, signaling precision and data-driven insights. 

Use `mono-label` for all-caps eyebrow headlines and small UI descriptors to create a rhythmic contrast against the sans-serif body text.

## Layout & Spacing
The design system utilizes a **Fixed Grid** philosophy for desktop to maintain editorial integrity, transitioning to a fluid model for mobile devices.

- **Grid**: A 12-column layout with 24px gutters. Content should be centered within a 1280px max-width container.
- **Spacing Rhythm**: All margins and paddings must be multiples of 4px. Use generous whitespace (64px+) between major sections to emphasize the minimalist aesthetic.
- **Mobile Adaptation**: On mobile, margins reduce to 16px and the grid collapses to a single column, but the 4px vertical rhythm remains constant.

## Elevation & Depth
In alignment with the minimalist theme, depth is communicated through **Low-contrast outlines** and **Tonal layers** rather than traditional shadows.

- **Flat Stack**: Elements "rest" on the #FAFAFA background.
- **Elevation 1**: Surfaces use a pure white background with a 1px border of `#E5E7EB`.
- **Interactions**: On hover, elements may transition to a slightly darker gray background (`#F3F4F6`) or receive a subtle 2px "hard shadow" of the Primary Accent color for a kinetic feel.
- **Overlays**: Modals and menus use a high-blur backdrop filter (12px) with a semi-transparent white tint to maintain context without visual clutter.

## Shapes
The shape language is "Soft-Technical." Elements use a subtle **0.25rem (4px)** corner radius to feel modern and intentional without becoming overly organic or "bubbly." 

- **Standard Elements**: 4px radius (Buttons, Inputs, Cards).
- **Large Components**: 8px radius (Modals, Large Containers).
- **Accent Elements**: Status indicators and small tags may use a full "pill" radius to differentiate them from functional UI components.

## Components
- **Buttons**: Primary buttons use the Accent Green (`#A3E635`) with black text (`#111111`) for maximum punch. Secondary buttons are outlined in `#E5E7EB` with JetBrains Mono text.
- **Input Fields**: Ghost-style inputs with a 1px bottom border or a full 1px light gray outline. Focused states use a 1px solid black border.
- **Chips/Tags**: Small, rectangular shapes using JetBrains Mono. Use light gray backgrounds with dark gray text for neutral tags, and the Accent Green for "active" or "live" states.
- **Cards**: Minimalist containers with `#E5E7EB` borders. No shadows. Use Geist for titles and JetBrains Mono for metadata in the card footer.
- **Lists**: Clean rows separated by 1px `#E5E7EB` dividers. Use "mono-label" for list headers to provide clear sectioning.
- **Status Indicators**: Small geometric shapes (circles or squares). The "Kinetic" feel is achieved by using the primary accent for "active" and a medium gray for "inactive."