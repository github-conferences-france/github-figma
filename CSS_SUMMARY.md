# CSS Summary — Simple Design System (SDS)

A comprehensive listing of all CSS used in this design system, organized by category.

> **Source**: All styles are defined in the `src/` directory and map directly to the [Figma Design File](https://www.figma.com/design/E41AJd456kEbJ2erwBK6jT/BOOTH---Conferences--AD-TUG-?node-id=3321-23356&t=rFv3f7U5FPUZclQM-0). Design tokens in `src/theme.css` are auto-generated from Figma variables via `npm run script:tokens`.

---

## Table of Contents

- [1. Design Tokens (theme.css)](#1-design-tokens-themecss)
  - [1.1 Color Primitives](#11-color-primitives)
  - [1.2 Semantic Colors — Light Mode](#12-semantic-colors--light-mode)
  - [1.3 Semantic Colors — Dark Mode](#13-semantic-colors--dark-mode)
  - [1.4 Sizing](#14-sizing)
  - [1.5 Typography Primitives](#15-typography-primitives)
  - [1.6 Typography Semantic](#16-typography-semantic)
  - [1.7 Font Shorthand Styles](#17-font-shorthand-styles)
  - [1.8 Effects & Shadows](#18-effects--shadows)
- [2. Core Stylesheets](#2-core-stylesheets)
  - [2.1 Reset (reset.css)](#21-reset-resetcss)
  - [2.2 Responsive Breakpoints (responsive.css)](#22-responsive-breakpoints-responsivecss)
  - [2.3 Global Styles (index.css)](#23-global-styles-indexcss)
  - [2.4 Icon Sizing (icons.css)](#24-icon-sizing-iconscss)
- [3. Layout Components](#3-layout-components)
  - [3.1 Flex](#31-flex)
  - [3.2 Grid](#32-grid)
  - [3.3 Section](#33-section)
- [4. Primitive Components](#4-primitive-components)
  - [4.1 Accordion](#41-accordion)
  - [4.2 Avatar](#42-avatar)
  - [4.3 Button](#43-button)
  - [4.4 Checkbox](#44-checkbox)
  - [4.5 Dialog](#45-dialog)
  - [4.6 Fieldset](#46-fieldset)
  - [4.7 IconButton](#47-iconbutton)
  - [4.8 Image](#48-image)
  - [4.9 Input](#49-input)
  - [4.10 Link](#410-link)
  - [4.11 ListBox](#411-listbox)
  - [4.12 Logo](#412-logo)
  - [4.13 Menu](#413-menu)
  - [4.14 Navigation](#414-navigation)
  - [4.15 Notification](#415-notification)
  - [4.16 Pagination](#416-pagination)
  - [4.17 Radio](#417-radio)
  - [4.18 Search](#418-search)
  - [4.19 Select](#419-select)
  - [4.20 Slider](#420-slider)
  - [4.21 Switch](#421-switch)
  - [4.22 Tab](#422-tab)
  - [4.23 Table](#423-table)
  - [4.24 Tag](#424-tag)
  - [4.25 Text](#425-text)
  - [4.26 Textarea](#426-textarea)
  - [4.27 Tooltip](#427-tooltip)
- [5. Composition Components](#5-composition-components)
  - [5.1 Cards](#51-cards)
  - [5.2 Forms](#52-forms)
  - [5.3 Headers](#53-headers)

---

## 1. Design Tokens (`theme.css`)

Auto-generated file (`src/theme.css`, 525 lines) containing all Figma variables as CSS custom properties.

### 1.1 Color Primitives

Defined on `:root`. Each color has a scale from `100` to `1000`.

| Token Prefix | Values | Example |
|---|---|---|
| `--sds-color-black-*` | `100`–`1000` | `--sds-color-black-1000: #0c0c0d` |
| `--sds-color-brand-*` | `100`–`1000` | `--sds-color-brand-800: #2c2c2c` |
| `--sds-color-gray-*` | `100`–`1000` | `--sds-color-gray-900: #1e1e1e` |
| `--sds-color-green-*` | `100`–`1000` | `--sds-color-green-500: #14ae5c` |
| `--sds-color-pink-*` | `100`–`1000` | `--sds-color-pink-500: #ea3fb8` |
| `--sds-color-red-*` | `100`–`1000` | `--sds-color-red-500: #ec221f` |
| `--sds-color-slate-*` | `100`–`1000` | `--sds-color-slate-700: #5a5a5a` |
| `--sds-color-white-*` | `100`–`1000` | `--sds-color-white-1000: #ffffff` |
| `--sds-color-yellow-*` | `100`–`1000` | `--sds-color-yellow-500: #e5a000` |

### 1.2 Semantic Colors — Light Mode

Defined on `:root` (default). Values reference color primitives.

#### Backgrounds

| Token | Value |
|---|---|
| `--sds-color-background-brand-default` | `var(--sds-color-brand-800)` |
| `--sds-color-background-brand-hover` | `var(--sds-color-brand-900)` |
| `--sds-color-background-brand-secondary` | `var(--sds-color-brand-200)` |
| `--sds-color-background-brand-secondary-hover` | `var(--sds-color-brand-300)` |
| `--sds-color-background-brand-tertiary` | `var(--sds-color-brand-100)` |
| `--sds-color-background-brand-tertiary-hover` | `var(--sds-color-brand-200)` |
| `--sds-color-background-danger-default` | `var(--sds-color-red-500)` |
| `--sds-color-background-danger-hover` | `var(--sds-color-red-600)` |
| `--sds-color-background-danger-secondary` | `var(--sds-color-red-200)` |
| `--sds-color-background-danger-secondary-hover` | `var(--sds-color-red-300)` |
| `--sds-color-background-danger-tertiary` | `var(--sds-color-red-100)` |
| `--sds-color-background-danger-tertiary-hover` | `var(--sds-color-red-200)` |
| `--sds-color-background-default-default` | `var(--sds-color-white-1000)` |
| `--sds-color-background-default-default-hover` | `var(--sds-color-gray-100)` |
| `--sds-color-background-default-secondary` | `var(--sds-color-gray-100)` |
| `--sds-color-background-default-secondary-hover` | `var(--sds-color-gray-200)` |
| `--sds-color-background-default-tertiary` | `var(--sds-color-gray-300)` |
| `--sds-color-background-default-tertiary-hover` | `var(--sds-color-gray-400)` |
| `--sds-color-background-disabled-default` | `var(--sds-color-brand-300)` |
| `--sds-color-background-neutral-default` | `var(--sds-color-slate-700)` |
| `--sds-color-background-neutral-hover` | `var(--sds-color-slate-800)` |
| `--sds-color-background-neutral-secondary` | `var(--sds-color-slate-300)` |
| `--sds-color-background-neutral-secondary-hover` | `var(--sds-color-slate-400)` |
| `--sds-color-background-neutral-tertiary` | `var(--sds-color-slate-200)` |
| `--sds-color-background-neutral-tertiary-hover` | `var(--sds-color-slate-300)` |
| `--sds-color-background-positive-default` | `var(--sds-color-green-500)` |
| `--sds-color-background-positive-hover` | `var(--sds-color-green-600)` |
| `--sds-color-background-positive-secondary` | `var(--sds-color-green-200)` |
| `--sds-color-background-positive-secondary-hover` | `var(--sds-color-green-300)` |
| `--sds-color-background-positive-tertiary` | `var(--sds-color-green-100)` |
| `--sds-color-background-positive-tertiary-hover` | `var(--sds-color-green-200)` |
| `--sds-color-background-utilities-blanket` | `#000000b2` |
| `--sds-color-background-utilities-measurement` | `var(--sds-color-pink-200)` |
| `--sds-color-background-utilities-overlay` | `#00000080` |
| `--sds-color-background-utilities-scrim` | `#ffffffcc` |
| `--sds-color-background-warning-default` | `var(--sds-color-yellow-400)` |
| `--sds-color-background-warning-hover` | `var(--sds-color-yellow-500)` |
| `--sds-color-background-warning-secondary` | `var(--sds-color-yellow-200)` |
| `--sds-color-background-warning-secondary-hover` | `var(--sds-color-yellow-300)` |
| `--sds-color-background-warning-tertiary` | `var(--sds-color-yellow-100)` |
| `--sds-color-background-warning-tertiary-hover` | `var(--sds-color-yellow-200)` |

#### Borders

| Token | Value |
|---|---|
| `--sds-color-border-brand-default` | `var(--sds-color-brand-800)` |
| `--sds-color-border-brand-secondary` | `var(--sds-color-brand-600)` |
| `--sds-color-border-brand-tertiary` | `var(--sds-color-brand-500)` |
| `--sds-color-border-danger-default` | `var(--sds-color-red-700)` |
| `--sds-color-border-danger-secondary` | `var(--sds-color-red-600)` |
| `--sds-color-border-danger-tertiary` | `var(--sds-color-red-500)` |
| `--sds-color-border-default-default` | `var(--sds-color-gray-300)` |
| `--sds-color-border-default-secondary` | `var(--sds-color-gray-500)` |
| `--sds-color-border-default-tertiary` | `var(--sds-color-gray-700)` |
| `--sds-color-border-disabled-default` | `var(--sds-color-brand-400)` |
| `--sds-color-border-neutral-default` | `var(--sds-color-slate-900)` |
| `--sds-color-border-neutral-secondary` | `var(--sds-color-slate-600)` |
| `--sds-color-border-neutral-tertiary` | `var(--sds-color-slate-400)` |
| `--sds-color-border-positive-default` | `var(--sds-color-green-800)` |
| `--sds-color-border-positive-secondary` | `var(--sds-color-green-600)` |
| `--sds-color-border-positive-tertiary` | `var(--sds-color-green-500)` |
| `--sds-color-border-utilities-measurement` | `var(--sds-color-pink-400)` |
| `--sds-color-border-utilities-swatch` | `#0000003d` |
| `--sds-color-border-warning-default` | `var(--sds-color-yellow-900)` |
| `--sds-color-border-warning-secondary` | `var(--sds-color-yellow-700)` |
| `--sds-color-border-warning-tertiary` | `var(--sds-color-yellow-600)` |

#### Icons

| Token | Value |
|---|---|
| `--sds-color-icon-brand-default` | `var(--sds-color-brand-800)` |
| `--sds-color-icon-brand-on-brand` | `var(--sds-color-brand-100)` |
| `--sds-color-icon-brand-on-brand-secondary` | `var(--sds-color-brand-900)` |
| `--sds-color-icon-brand-on-brand-tertiary` | `var(--sds-color-brand-800)` |
| `--sds-color-icon-brand-secondary` | `var(--sds-color-brand-600)` |
| `--sds-color-icon-brand-tertiary` | `var(--sds-color-brand-500)` |
| `--sds-color-icon-danger-default` | `var(--sds-color-red-700)` |
| `--sds-color-icon-danger-on-danger` | `var(--sds-color-red-100)` |
| `--sds-color-icon-danger-on-danger-secondary` | `var(--sds-color-red-700)` |
| `--sds-color-icon-danger-on-danger-tertiary` | `var(--sds-color-red-700)` |
| `--sds-color-icon-danger-secondary` | `var(--sds-color-red-600)` |
| `--sds-color-icon-danger-tertiary` | `var(--sds-color-red-500)` |
| `--sds-color-icon-default-default` | `var(--sds-color-gray-900)` |
| `--sds-color-icon-default-secondary` | `var(--sds-color-gray-500)` |
| `--sds-color-icon-default-tertiary` | `var(--sds-color-gray-400)` |
| `--sds-color-icon-disabled-default` | `var(--sds-color-brand-400)` |
| `--sds-color-icon-disabled-on-disabled` | `var(--sds-color-brand-400)` |
| `--sds-color-icon-neutral-default` | `var(--sds-color-slate-900)` |
| `--sds-color-icon-neutral-on-neutral` | `var(--sds-color-slate-100)` |
| `--sds-color-icon-neutral-on-neutral-secondary` | `var(--sds-color-slate-900)` |
| `--sds-color-icon-neutral-on-neutral-tertiary` | `var(--sds-color-slate-800)` |
| `--sds-color-icon-neutral-secondary` | `var(--sds-color-slate-700)` |
| `--sds-color-icon-neutral-tertiary` | `var(--sds-color-slate-600)` |
| `--sds-color-icon-positive-default` | `var(--sds-color-green-800)` |
| `--sds-color-icon-positive-on-positive` | `var(--sds-color-green-100)` |
| `--sds-color-icon-positive-on-positive-secondary` | `var(--sds-color-green-800)` |
| `--sds-color-icon-positive-on-positive-tertiary` | `var(--sds-color-green-900)` |
| `--sds-color-icon-positive-secondary` | `var(--sds-color-green-600)` |
| `--sds-color-icon-positive-tertiary` | `var(--sds-color-green-500)` |
| `--sds-color-icon-utilities-icon` | `var(--sds-color-pink-600)` |
| `--sds-color-icon-utilities-icon-on-measurement` | `var(--sds-color-pink-800)` |
| `--sds-color-icon-warning-default` | `var(--sds-color-yellow-900)` |
| `--sds-color-icon-warning-on-warning` | `var(--sds-color-yellow-1000)` |
| `--sds-color-icon-warning-on-warning-secondary` | `var(--sds-color-yellow-800)` |
| `--sds-color-icon-warning-on-warning-tertiary` | `var(--sds-color-yellow-900)` |
| `--sds-color-icon-warning-secondary` | `var(--sds-color-yellow-700)` |
| `--sds-color-icon-warning-tertiary` | `var(--sds-color-yellow-600)` |

#### Text

| Token | Value |
|---|---|
| `--sds-color-text-brand-default` | `var(--sds-color-brand-800)` |
| `--sds-color-text-brand-on-brand` | `var(--sds-color-brand-100)` |
| `--sds-color-text-brand-on-brand-secondary` | `var(--sds-color-brand-900)` |
| `--sds-color-text-brand-on-brand-tertiary` | `var(--sds-color-brand-800)` |
| `--sds-color-text-brand-secondary` | `var(--sds-color-brand-600)` |
| `--sds-color-text-brand-tertiary` | `var(--sds-color-brand-500)` |
| `--sds-color-text-danger-default` | `var(--sds-color-red-700)` |
| `--sds-color-text-danger-on-danger` | `var(--sds-color-red-100)` |
| `--sds-color-text-danger-on-danger-secondary` | `var(--sds-color-red-700)` |
| `--sds-color-text-danger-on-danger-tertiary` | `var(--sds-color-red-700)` |
| `--sds-color-text-danger-secondary` | `var(--sds-color-red-600)` |
| `--sds-color-text-danger-tertiary` | `var(--sds-color-red-500)` |
| `--sds-color-text-default-default` | `var(--sds-color-gray-900)` |
| `--sds-color-text-default-secondary` | `var(--sds-color-gray-500)` |
| `--sds-color-text-default-tertiary` | `var(--sds-color-gray-400)` |
| `--sds-color-text-disabled-default` | `var(--sds-color-brand-400)` |
| `--sds-color-text-disabled-on-disabled` | `var(--sds-color-brand-400)` |
| `--sds-color-text-neutral-default` | `var(--sds-color-slate-900)` |
| `--sds-color-text-neutral-on-neutral` | `var(--sds-color-slate-100)` |
| `--sds-color-text-neutral-on-neutral-secondary` | `var(--sds-color-slate-900)` |
| `--sds-color-text-neutral-on-neutral-tertiary` | `var(--sds-color-slate-800)` |
| `--sds-color-text-neutral-secondary` | `var(--sds-color-slate-700)` |
| `--sds-color-text-neutral-tertiary` | `var(--sds-color-slate-600)` |
| `--sds-color-text-positive-default` | `var(--sds-color-green-800)` |
| `--sds-color-text-positive-on-positive` | `var(--sds-color-green-100)` |
| `--sds-color-text-positive-on-positive-secondary` | `var(--sds-color-green-800)` |
| `--sds-color-text-positive-on-positive-tertiary` | `var(--sds-color-green-800)` |
| `--sds-color-text-positive-secondary` | `var(--sds-color-green-600)` |
| `--sds-color-text-positive-tertiary` | `var(--sds-color-green-500)` |
| `--sds-color-text-utilities-text-on-measurement` | `var(--sds-color-pink-800)` |
| `--sds-color-text-utilities-text-on-overlay` | `var(--sds-color-black-1000)` |
| `--sds-color-text-warning-default` | `var(--sds-color-yellow-900)` |
| `--sds-color-text-warning-on-warning` | `var(--sds-color-yellow-1000)` |
| `--sds-color-text-warning-on-warning-secondary` | `var(--sds-color-yellow-800)` |
| `--sds-color-text-warning-on-warning-tertiary` | `var(--sds-color-yellow-900)` |
| `--sds-color-text-warning-secondary` | `var(--sds-color-yellow-700)` |
| `--sds-color-text-warning-tertiary` | `var(--sds-color-yellow-600)` |

### 1.3 Semantic Colors — Dark Mode

Defined inside `@media (prefers-color-scheme: dark)`. All tokens mirror the light mode keys but swap values to dark-appropriate primitive references (e.g., `--sds-color-background-default-default` changes from `var(--sds-color-white-1000)` to `var(--sds-color-gray-900)`). See `src/theme.css` lines 236–375 for the full mapping.

### 1.4 Sizing

| Token | Value | Description |
|---|---|---|
| `--sds-size-blur-100` | `0.25rem` | Blur radius |
| `--sds-size-depth-0` | `0rem` | Shadow depth zero |
| `--sds-size-depth-025` | `0.0625rem` | Shadow depth 1px |
| `--sds-size-depth-100` | `0.25rem` | Shadow depth 4px |
| `--sds-size-depth-200` | `0.5rem` | Shadow depth 8px |
| `--sds-size-depth-400` | `1rem` | Shadow depth 16px |
| `--sds-size-depth-800` | `2rem` | Shadow depth 32px |
| `--sds-size-depth-1200` | `3rem` | Shadow depth 48px |
| `--sds-size-depth-negative-025` | `-0.0625rem` | Negative depth |
| `--sds-size-depth-negative-100` | `-0.25rem` | Negative depth |
| `--sds-size-depth-negative-200` | `-0.5rem` | Negative depth |
| `--sds-size-depth-negative-400` | `-1rem` | Negative depth |
| `--sds-size-depth-negative-800` | `-2rem` | Negative depth |
| `--sds-size-depth-negative-1200` | `-3rem` | Negative depth |
| `--sds-size-icon-small` | `1.5rem` | Icon 24px |
| `--sds-size-icon-medium` | `2rem` | Icon 32px |
| `--sds-size-icon-large` | `2.5rem` | Icon 40px |
| `--sds-size-radius-100` | `0.25rem` | Border radius 4px |
| `--sds-size-radius-200` | `0.5rem` | Border radius 8px |
| `--sds-size-radius-400` | `1rem` | Border radius 16px |
| `--sds-size-radius-full` | `624.9375rem` | Fully rounded |
| `--sds-size-space-0` | `0rem` | No spacing |
| `--sds-size-space-050` | `0.125rem` | Spacing 2px |
| `--sds-size-space-100` | `0.25rem` | Spacing 4px |
| `--sds-size-space-150` | `0.375rem` | Spacing 6px |
| `--sds-size-space-200` | `0.5rem` | Spacing 8px |
| `--sds-size-space-300` | `0.75rem` | Spacing 12px |
| `--sds-size-space-400` | `1rem` | Spacing 16px |
| `--sds-size-space-600` | `1.5rem` | Spacing 24px |
| `--sds-size-space-800` | `2rem` | Spacing 32px |
| `--sds-size-space-1200` | `3rem` | Spacing 48px |
| `--sds-size-space-1600` | `4rem` | Spacing 64px |
| `--sds-size-space-2400` | `6rem` | Spacing 96px |
| `--sds-size-space-4000` | `10rem` | Spacing 160px |
| `--sds-size-space-negative-100` | `-0.25rem` | Negative spacing |
| `--sds-size-space-negative-200` | `-0.5rem` | Negative spacing |
| `--sds-size-space-negative-300` | `-0.75rem` | Negative spacing |
| `--sds-size-space-negative-400` | `-1rem` | Negative spacing |
| `--sds-size-space-negative-600` | `-1.5rem` | Negative spacing |
| `--sds-size-stroke-border` | `0.0625rem` | Border width 1px |
| `--sds-size-stroke-focus-ring` | `0.125rem` | Focus ring width 2px |

### 1.5 Typography Primitives

| Token | Value |
|---|---|
| `--sds-typography-family-mono` | `"roboto mono", monospace` |
| `--sds-typography-family-sans` | `"inter", sans-serif` |
| `--sds-typography-family-serif` | `"noto serif", serif` |
| `--sds-typography-scale-01` | `0.75rem` (12px) |
| `--sds-typography-scale-02` | `0.875rem` (14px) |
| `--sds-typography-scale-03` | `1rem` (16px) |
| `--sds-typography-scale-04` | `1.25rem` (20px) |
| `--sds-typography-scale-05` | `1.5rem` (24px) |
| `--sds-typography-scale-06` | `2rem` (32px) |
| `--sds-typography-scale-07` | `2.5rem` (40px) |
| `--sds-typography-scale-08` | `3rem` (48px) |
| `--sds-typography-scale-09` | `4rem` (64px) |
| `--sds-typography-scale-10` | `4.5rem` (72px) |
| `--sds-typography-weight-thin` | `100` |
| `--sds-typography-weight-extra-light` | `200` |
| `--sds-typography-weight-light` | `300` |
| `--sds-typography-weight-regular` | `400` |
| `--sds-typography-weight-medium` | `500` |
| `--sds-typography-weight-semibold` | `600` |
| `--sds-typography-weight-bold` | `700` |
| `--sds-typography-weight-extra-bold` | `800` |
| `--sds-typography-weight-black` | `900` |

*(Italic variants also exist for each weight.)*

### 1.6 Typography Semantic

| Token | References |
|---|---|
| `--sds-typography-body-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-body-font-weight-regular` | `var(--sds-typography-weight-regular)` |
| `--sds-typography-body-font-weight-strong` | `var(--sds-typography-weight-semibold)` |
| `--sds-typography-body-font-style-italic` | `var(--sds-typography-weight-regular-italic)` |
| `--sds-typography-body-size-small` | `var(--sds-typography-scale-02)` (14px) |
| `--sds-typography-body-size-medium` | `var(--sds-typography-scale-03)` (16px) |
| `--sds-typography-body-size-large` | `var(--sds-typography-scale-04)` (20px) |
| `--sds-typography-code-font-family` | `var(--sds-typography-family-mono)` |
| `--sds-typography-code-font-weight` | `var(--sds-typography-body-font-weight-regular)` |
| `--sds-typography-code-size-base` | `var(--sds-typography-body-size-medium)` |
| `--sds-typography-heading-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-heading-font-weight` | `var(--sds-typography-weight-semibold)` |
| `--sds-typography-heading-size-small` | `var(--sds-typography-scale-04)` (20px) |
| `--sds-typography-heading-size-base` | `var(--sds-typography-scale-05)` (24px) |
| `--sds-typography-heading-size-large` | `var(--sds-typography-scale-06)` (32px) |
| `--sds-typography-subheading-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-subheading-font-weight` | `var(--sds-typography-weight-regular)` |
| `--sds-typography-subheading-size-small` | `var(--sds-typography-scale-03)` (16px) |
| `--sds-typography-subheading-size-medium` | `var(--sds-typography-scale-04)` (20px) |
| `--sds-typography-subheading-size-large` | `var(--sds-typography-scale-05)` (24px) |
| `--sds-typography-subtitle-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-subtitle-font-weight` | `var(--sds-typography-weight-regular)` |
| `--sds-typography-subtitle-size-small` | `var(--sds-typography-scale-05)` (24px) |
| `--sds-typography-subtitle-size-base` | `var(--sds-typography-scale-06)` (32px) |
| `--sds-typography-subtitle-size-large` | `var(--sds-typography-scale-07)` (40px) |
| `--sds-typography-title-page-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-title-page-font-weight` | `var(--sds-typography-weight-bold)` |
| `--sds-typography-title-page-size-small` | `var(--sds-typography-scale-07)` (40px) |
| `--sds-typography-title-page-size-base` | `var(--sds-typography-scale-08)` (48px) |
| `--sds-typography-title-page-size-large` | `var(--sds-typography-scale-09)` (64px) |
| `--sds-typography-title-hero-font-family` | `var(--sds-typography-family-sans)` |
| `--sds-typography-title-hero-font-weight` | `var(--sds-typography-weight-bold)` |
| `--sds-typography-title-hero-size` | `var(--sds-typography-scale-10)` (72px) |

### 1.7 Font Shorthand Styles

Ready-to-use `font` shorthand custom properties:

| Token | Description |
|---|---|
| `--sds-font-title-hero` | Hero title (bold, 72px, sans) |
| `--sds-font-title-page` | Page title (bold, 48px, sans) |
| `--sds-font-subtitle` | Subtitle (regular, 32px, sans) |
| `--sds-font-heading` | Heading (semibold, 24px, sans) |
| `--sds-font-subheading` | Subheading (regular, 20px, sans) |
| `--sds-font-body-base` | Body text (regular, 16px, sans) |
| `--sds-font-body-strong` | Bold body (semibold, 16px, sans) |
| `--sds-font-body-emphasis` | Italic body (italic, 16px, sans) |
| `--sds-font-body-link` | Link text (regular, 16px, sans) |
| `--sds-font-body-small` | Small body (regular, 14px, sans) |
| `--sds-font-body-small-strong` | Bold small (semibold, 14px, sans) |
| `--sds-font-body-code` | Code text (regular, 16px, mono) |
| `--sds-font-single-line-body-base` | Single-line body (regular, 16px, sans) |
| `--sds-font-single-line-body-small-strong` | Single-line bold small (semibold, 14px, sans) |
| `--sds-font-utilities-component-notes-regular` | Utility notes (regular, 16px, mono) |
| `--sds-font-utilities-component-notes-bold` | Utility notes bold (bold, 16px, mono) |

### 1.8 Effects & Shadows

| Token | Type |
|---|---|
| `--sds-effects-shadows-drop-shadow-100` | Subtle drop shadow (1 layer) |
| `--sds-effects-shadows-drop-shadow-200` | Light drop shadow (2 layers) |
| `--sds-effects-shadows-drop-shadow-300` | Medium drop shadow (2 layers) |
| `--sds-effects-shadows-drop-shadow-400` | Strong drop shadow (2 layers) |
| `--sds-effects-shadows-drop-shadow-500` | Heavy drop shadow (2 layers) |
| `--sds-effects-shadows-drop-shadow-600` | Maximum drop shadow (1 layer, high opacity) |
| `--sds-effects-shadows-inner-shadow-100` | Subtle inset shadow |
| `--sds-effects-shadows-inner-shadow-200` | Light inset shadow |
| `--sds-effects-shadows-inner-shadow-300` | Medium inset shadow |
| `--sds-effects-shadows-inner-shadow-400` | Strong inset shadow |
| `--sds-effects-shadows-inner-shadow-500` | Heavy inset shadow |
| `--sds-effects-shadows-inner-shadow-600` | Maximum inset shadow |
| `--sds-effects-backdrop-filter-blur-overlay` | `blur(0.25rem)` overlay blur |
| `--sds-effects-filter-blur-layer` | `blur(0.25rem)` layer blur |
| `--sds-effects-backdrop-filter-blur-glass` | `blur(0.25rem)` glass blur |

---

## 2. Core Stylesheets

### 2.1 Reset (`reset.css`)

**File**: `src/reset.css`

```css
a, button, legend, fieldset, select, input, textarea {
  all: unset;
  line-height: 1;
}

div, button, select, input, textarea, span {
  box-sizing: border-box;
}
```

### 2.2 Responsive Breakpoints (`responsive.css`)

**File**: `src/responsive.css`

| Breakpoint | Min Width | Description |
|---|---|---|
| Default | — | Mobile-first base |
| Tablet | `600px` | Medium screens |
| Desktop | `1024px` | Large screens |

**Responsive custom properties**:

| Token | Default (Mobile) | Tablet (600px+) | Desktop (1024px+) |
|---|---|---|---|
| `--sds-responsive-display-flex-to-none` | `flex` | `flex` | `none` |
| `--sds-responsive-display-none-to-flex` | `none` | `none` | `flex` |
| `--sds-responsive-ratio-column-full` | `1` | `1` | `1` |
| `--sds-responsive-ratio-column-half` | `2` | `1` | `1` |
| `--sds-responsive-ratio-column-quarter-major` | `4` | `2` | `3` |
| `--sds-responsive-ratio-column-quarter-minor` | `4` | `2` | `1` |
| `--sds-responsive-ratio-column-third-major` | `3` | `3` | `2` |
| `--sds-responsive-ratio-column-third-minor` | `3` | `3` | `1` |

### 2.3 Global Styles (`index.css`)

**File**: `src/index.css`

**Imports**: `reset.css`, `responsive.css`, `theme.css`, `icons.css`

| Custom Property | Value | Description |
|---|---|---|
| `--global-focus-ring-size` | `var(--sds-size-stroke-focus-ring)` | Focus ring width |
| `--global-focus-ring-color` | `rgb(0, 106, 255)` | Focus ring color |
| `--global-line-height-paragraph` | `1.4` | Paragraph line height |
| `--global-line-height-body` | `1.6` | Body line height |
| `--global-stack-top` | `999` | Top z-index |
| `--global-stack-focus` | `999` | Focus z-index |
| `--global-stack-dialog-backdrop` | `9999` | Dialog backdrop z-index |
| `--global-stack-dialog-container` | `99999` | Dialog container z-index |
| `--global-container-max-width` | `75rem` | Max container width (1200px) |
| `--global-dialog-max-width` | `32rem` | Max dialog width (512px) |
| `--global-tooltip-max-width` | `16rem` | Max tooltip width (256px) |

**Utility classes**: `.display-none-to-flex`, `.display-flex-to-none`

**Global element styles**: `html` (16px base), `body` (theme background/color), heading reset (`h1`–`h6`, `p` margin: 0), font defaults for `body`, `button`, `textarea`, `input`, `select`, `pre`, `code`.

### 2.4 Icon Sizing (`icons.css`)

**File**: `src/icons.css`

| Class | `--icon-diameter` | Pixel Size |
|---|---|---|
| `.icon` | (base) | Uses `--icon-color`, `--svg-stroke-color`, `--svg-fill-color` |
| `.icon-size-14` | `var(--sds-typography-scale-02)` | 14px |
| `.icon-size-16` | `var(--sds-typography-scale-03)` | 16px |
| `.icon-size-20` | `var(--sds-typography-scale-04)` | 20px |
| `.icon-size-24` | `var(--sds-size-icon-small)` | 24px |
| `.icon-size-32` | `var(--sds-size-icon-medium)` | 32px |
| `.icon-size-40` | `var(--sds-size-icon-large)` | 40px |
| `.icon-size-48` | `var(--sds-typography-scale-08)` | 48px |

---

## 3. Layout Components

### 3.1 Flex

**File**: `src/ui/layout/Flex/flex.css`

| Class | Description |
|---|---|
| `.flex-container` | Outer flex container with max-width |
| `.flex` | Core flex display |
| `.flex-direction-row` | Horizontal direction |
| `.flex-direction-column` | Vertical direction |
| `.flex-direction-row-reverse` | Reverse horizontal |
| `.flex-direction-column-reverse` | Reverse vertical |
| `.flex-type-half` | 2-column layout (responsive) |
| `.flex-type-third` | 3-column layout (responsive) |
| `.flex-type-quarter` | 4-column layout (responsive) |
| `.flex-align-primary-start` | `justify-content: flex-start` |
| `.flex-align-primary-center` | `justify-content: center` |
| `.flex-align-primary-end` | `justify-content: flex-end` |
| `.flex-align-primary-space-between` | `justify-content: space-between` |
| `.flex-align-secondary-start` | `align-items: flex-start` |
| `.flex-align-secondary-center` | `align-items: center` |
| `.flex-align-secondary-end` | `align-items: flex-end` |
| `.flex-align-secondary-stretch` | `align-items: stretch` |
| `.flex-wrap` | `flex-wrap: wrap` |
| `.flex-gap-{size}` | Gap sizes: `0`, `050`, `100`, `150`, `200`, `300`, `400`, `600`, `800`, `1200`, `1600`, `2400` |

### 3.2 Grid

**File**: `src/ui/layout/Grid/grid.css`

| Class | Description |
|---|---|
| `.grid-container` | Outer grid container with max-width |
| `.grid` | `display: grid` |
| `.grid-item` | Grid child element |
| `.grid-template-columns-{n}` | Column templates (1–12) |
| `.grid-template-rows-{n}` | Row templates (1–6) |
| `.grid-flow-row` | Row-based flow |
| `.grid-flow-column` | Column-based flow |
| `.grid-justify-items-*` | `start`, `center`, `end`, `stretch` |
| `.grid-align-items-*` | `start`, `center`, `end`, `stretch` |
| `.grid-gap-{size}` | Gap using spacing tokens |
| `.grid-column-gap-{size}` | Column gap only |
| `.grid-row-gap-{size}` | Row gap only |

### 3.3 Section

**File**: `src/ui/layout/Section/section.css`

| Class | Description |
|---|---|
| `.section` | Base section with flex column layout |
| `.section-padding-{size}` | Padding sizes: `0`, `200`, `400`, `600`, `800`, `1200`, `1600`, `2400`, `4000` |
| `.section-variant-image` | Background image section |
| `.section-variant-brand` | Brand-colored background |
| `.section-variant-neutral` | Neutral-colored background |
| `.section-variant-stroke` | Bordered section |
| `.section-variant-subtle` | Secondary background |

---

## 4. Primitive Components

### 4.1 Accordion

**File**: `src/ui/primitives/Accordion/accordion.css`

| Class | Description |
|---|---|
| `.accordion` | Container with flex column layout |
| `.accordion-item` | Expandable item |
| `.accordion-item-title` | Item header with flex row layout |
| `.accordion-item-indicator` | Expand/collapse chevron icon |
| `.accordion-item-content` | Collapsible content area |

**States**: `[data-expanded]`, `[data-hovered]`, `[data-focus-visible]`

### 4.2 Avatar

**File**: `src/ui/primitives/Avatar/avatar.css`

| Class | Description |
|---|---|
| `.avatar` | Base avatar element |
| `.avatar-button` | Clickable avatar |
| `.avatar-block` | Avatar with text layout |
| `.avatar-group` | Avatar stacking group |
| `.avatar-group-overflow` | Overflow count indicator |
| `.avatar-shape-circle` | Circular avatar |
| `.avatar-shape-square` | Square avatar |
| `.avatar-size-small` | Small avatar (24px) |
| `.avatar-size-medium` | Medium avatar (32px) |
| `.avatar-size-large` | Large avatar (40px) |
| `.avatar-group-spacing-*` | Positive gap spacing |
| `.avatar-group-spacing-negative-*` | Overlapping negative spacing |

**Custom properties**: `--avatar-diameter`, `--avatar-border-radius`, `--avatar-group-gap`

### 4.3 Button

**File**: `src/ui/primitives/Button/button.css`

| Class | Description |
|---|---|
| `.button` | Base button with flex layout |
| `.button-size-small` | Small button |
| `.button-size-medium` | Medium button |
| `.button-variant-primary` | Primary filled button |
| `.button-variant-neutral` | Neutral filled button |
| `.button-variant-subtle` | Subtle/ghost button |
| `.button-variant-danger-primary` | Danger filled button |
| `.button-variant-danger-subtle` | Danger ghost button |
| `.button-group` | Button group container |
| `.button-group-align-start` | Left aligned group |
| `.button-group-align-end` | Right aligned group |
| `.button-group-align-center` | Center aligned group |
| `.button-group-align-stack` | Stacked buttons |

**Custom properties**: `--button-background-color`, `--button-border-color`, `--button-color`, `--button-font`, `--button-padding-x`, `--button-padding-y`

**States**: `[data-hovered]`, `[data-pressed]`, `[data-focus-visible]`, `[data-disabled]`

### 4.4 Checkbox

**File**: `src/ui/primitives/Checkbox/checkbox.css`

| Class | Description |
|---|---|
| `.checkbox` | Base checkbox control |
| `.checkbox-field` | Checkbox with label wrapper |
| `.checkbox-group` | Group of checkboxes |
| `.icon-selected` | Checkmark icon |
| `.icon-indeterminate` | Indeterminate dash icon |

**Custom properties**: `--checkbox-background`, `--checkbox-border`, `--checkbox-icon`, `--checkbox-border-radius`, `--checkbox-field-label-color`, `--checkbox-field-description-color`

**States**: `[data-selected]`, `[data-disabled]`, `[data-indeterminate]`, `[data-focus-visible]`

### 4.5 Dialog

**File**: `src/ui/primitives/Dialog/dialog.css`

| Class | Description |
|---|---|
| `.dialog-container` | Overlay container (full viewport) |
| `.dialog-backdrop` | Semi-transparent backdrop |
| `.dialog` | Dialog box with padding and shadow |
| `.dialog-close` | Close button |
| `.dialog-title` | Dialog heading |
| `.dialog-description` | Dialog description text |
| `.dialog-body` | Content area |
| `.dialog-body-bleed` | Full-bleed content (negative margins) |
| `.dialog-type-card` | Card-style dialog |
| `.dialog-type-sheet` | Sheet-style dialog (attached to viewport edge) |

**Custom properties**: `--dialog-padding-x`, `--dialog-padding-y`

### 4.6 Fieldset

**File**: `src/ui/primitives/Fieldset/fieldset.css`

| Class | Description |
|---|---|
| `.fieldset` | Form fieldset container |
| `.field` | Individual form field with CSS Grid layout |
| `.field-group` | Inline group of fields |
| `.label` | Field label |
| `.description` | Help text below field |
| `.error-message` | Validation error message |
| `.legend` | Fieldset legend |
| `.form-single-line` | Single-line form layout |

**Grid areas**: `field-label`, `field-main`, `field-description`, `field-error`, `field-extra`

**Custom properties**: `--field-label-color`, `--field-description-color`, `--field-row-gap`

### 4.7 IconButton

**File**: `src/ui/primitives/IconButton/iconButton.css`

| Class | Description |
|---|---|
| `.icon-button` | Fully rounded icon-only button (inherits `.button`) |

Sets `--border-radius: var(--sds-size-radius-full)`.

### 4.8 Image

**File**: `src/ui/primitives/Image/image.css`

| Class | Description |
|---|---|
| `.image` | Base image with object-fit cover |
| `.image-placeholder` | Placeholder background |
| `.image-loading` | Loading state |
| `.image-variant-rounded` | Rounded corners |
| `.image-aspect-ratio-1-1` | Square aspect ratio |
| `.image-aspect-ratio-16-9` | Widescreen aspect ratio |
| `.image-aspect-ratio-4-3` | Standard aspect ratio |
| `.image-aspect-ratio-fill` | Fill container |
| `.image-aspect-ratio-natural` | Natural aspect ratio |
| `.image-size-small` | Small image |
| `.image-size-medium` | Medium image |
| `.image-size-large` | Large image |
| `.image-size-fill` | Full-width image |
| `.image-size-natural` | Natural size |

### 4.9 Input

**File**: `src/ui/primitives/Input/input.css`

| Class | Description |
|---|---|
| `.input` | Text input with border and padding |

**Custom properties**: `--input-background-color`, `--input-text-color`, `--input-border-color`, `--input-placeholder-color`

**States**: `[data-disabled]`, `[data-invalid]`, `[data-focus-visible]`

### 4.10 Link

**File**: `src/ui/primitives/Link/link.css`

| Class | Description |
|---|---|
| `.link` | Styled anchor with `text-decoration: none` |

### 4.11 ListBox

**File**: `src/ui/primitives/ListBox/listBox.css`

| Class | Description |
|---|---|
| `.list-box` | Container with flex layout |
| `.list-box-item` | Selectable list item with grid layout |

**Custom properties**: `--list-box-item-template-areas`, `--list-box-label-color`, `--list-box-description-color`, `--list-box-icon-color`

**Data attributes**: `[data-orientation]`, `[data-layout]`, `[data-selected]`, `[data-disabled]`, `[data-focused]`

**Slots**: `[slot="label"]`, `[slot="description"]`, `[slot="image"]`

### 4.12 Logo

**File**: `src/ui/primitives/Logo/logo.css`

| Class | Description |
|---|---|
| `.logo` | Logo with focus ring support |

**Custom properties**: `--border-radius`, `--logo-color`

### 4.13 Menu

**File**: `src/ui/primitives/Menu/menu.css`

| Class | Description |
|---|---|
| `.menu` | Dropdown menu container |
| `.menu-header` | Menu header area |
| `.menu-section` | Menu section grouping |
| `.menu-heading` | Section heading |
| `.menu-separator` | Visual divider |
| `.menu-item` | Selectable menu item |
| `.menu-label` | Item label text |
| `.menu-description` | Item description text |
| `.keyboard` | Keyboard shortcut indicator |

**States**: `[data-focused]`, `[data-hovered]`, `[data-disabled]`

### 4.14 Navigation

**File**: `src/ui/primitives/Navigation/navigation.css`

| Class | Description |
|---|---|
| `.navigation` | Navigation container |
| `.navigation-pill` | Pill-style nav item |
| `.navigation-button` | Button-style nav item |
| `.navigation-direction-row` | Horizontal direction |
| `.navigation-direction-column` | Vertical direction |
| `.navigation-button-size-small` | Small button variant |
| `.navigation-button-size-medium` | Medium button variant |
| `.navigation-button-direction-column` | Vertical button layout |
| `.navigation-button-direction-row` | Horizontal button layout |

**States**: `[data-hovered]`, `[data-selected]`, `[data-focus-visible]`

### 4.15 Notification

**File**: `src/ui/primitives/Notification/notification.css`

| Class | Description |
|---|---|
| `.notification` | Alert/notification container |
| `.notification-icon` | Status icon |
| `.notification-content` | Text content area |
| `.notification-variant-message` | Informational style |
| `.notification-variant-alert` | Alert style with border |

**Custom properties**: `--notification-color`, `--notification-icon`, `--notification-border-color`, `--notification-background-color`, `--border-radius`

### 4.16 Pagination

**File**: `src/ui/primitives/Pagination/pagination.css`

| Class | Description |
|---|---|
| `.pagination` | Pagination wrapper |
| `.pagination-list` | Page number list |

### 4.17 Radio

**File**: `src/ui/primitives/Radio/radio.css`

| Class | Description |
|---|---|
| `.radio` | Radio button control |
| `.radio-field` | Radio with label wrapper |
| `.radio-group` | Group of radio buttons |
| `.radio-check` | Inner dot indicator |

**Custom properties**: `--radio-background`, `--radio-border`, `--radio-icon`, `--radio-border-radius`

**States**: `[data-selected]`, `[data-disabled]`, `[data-focus-visible]`

### 4.18 Search

**File**: `src/ui/primitives/Search/search.css`

| Class | Description |
|---|---|
| `.search-input` | Search input field |
| `.search-input-container` | Search wrapper with icon |
| `.search-icon` | Magnifying glass icon |

Hides browser-native search controls (`::-ms-clear`, `::-ms-reveal`, `::-webkit-search-*`).

### 4.19 Select

**File**: `src/ui/primitives/Select/select.css`

| Class | Description |
|---|---|
| `.select-container` | Select wrapper |
| `.select` | Trigger button |
| `.select-value` | Selected value display |
| `.select-item` | Dropdown option item |

**Custom properties**: `--select-background-color`, `--select-text-color`, `--select-border-color`

**States**: `[data-disabled]`, `[data-invalid]`, `[data-focus-visible]`, `[data-placeholder]`, `[data-selected]`

### 4.20 Slider

**File**: `src/ui/primitives/Slider/slider.css`

| Class | Description |
|---|---|
| `.slider-field` | Slider with label wrapper |
| `.slider` | Track container |
| `.slider-thumb` | Draggable handle |
| `.slider-output` | Value display |

**Custom properties**: `--slider-thumb-background-color`, `--slider-thumb-border-color`, `--slider-track-background-color`

**States**: `[data-disabled]`, `[data-focus-visible]`, `[data-orientation]`

### 4.21 Switch

**File**: `src/ui/primitives/Switch/switch.css`

| Class | Description |
|---|---|
| `.switch` | Toggle switch track |
| `.switch-field` | Switch with label wrapper |
| `.switch-group` | Group of switches |
| `.switch-icon` | Toggle knob/handle |

**Custom properties**: `--switch-background`, `--switch-border`, `--switch-icon`, `--switch-width`, `--switch-icon-diameter`, `--switch-border-radius`

**States**: `[data-selected]`, `[data-disabled]`, `[data-focus-visible]`

### 4.22 Tab

**File**: `src/ui/primitives/Tab/tab.css`

| Class | Description |
|---|---|
| `.tabs` | Tab container |
| `.tab` | Individual tab control |
| `.tab-list` | Tab header row |
| `.tab-panel` | Tab content panel |

**Custom properties**: `--color`, `--border-color`, `--border-radius`

**States**: `[data-selected]`, `[data-hovered]`, `[data-focus-visible]`

### 4.23 Table

**File**: `src/ui/primitives/Table/table.css`

| Class | Description |
|---|---|
| `.table` | Table container |
| `.table-bleed` | Full-bleed table |
| `.table-dense` | Compact spacing |
| `.table-grid` | Grid lines |
| `.table-striped` | Alternating row colors |
| `.table-row` | Table row |
| `.table-row-interactive` | Hoverable row |
| `.table-cell` | Table cell |
| `.table-column` | Column header |
| `.table-column-inner` | Sortable column header |
| `.table-cell-link` | Cell with link |
| `.table-align-start` | Left align |
| `.table-align-center` | Center align |
| `.table-align-end` | Right align |

**Custom properties**: `--table-cell-border-right-thickness`, `--table-cell-padding-x`, `--table-cell-padding-y`, `--table-row-background`

### 4.24 Tag

**File**: `src/ui/primitives/Tag/tag.css`

| Class | Description |
|---|---|
| `.tag` | Base tag/badge element |
| `.tag-button` | Clickable tag |
| `.tag-remove-button` | Remove/dismiss button |
| `.tag-toggle` | Toggle-able tag |
| `.tag-toggle-list` | List of toggle tags |
| `.tag-toggle-group` | Group wrapper |
| `.tag-scheme-brand` | Brand color scheme |
| `.tag-scheme-danger` | Danger/red scheme |
| `.tag-scheme-positive` | Success/green scheme |
| `.tag-scheme-warning` | Warning/yellow scheme |
| `.tag-scheme-neutral` | Neutral/gray scheme |
| `.tag-variant-secondary` | Secondary (lighter) variant |

**Custom properties**: `--tag-color`, `--tag-icon`, `--tag-background-color`, `--border-radius`

**States**: `[data-hovered]`, `[data-focus-visible]`, `[data-selected]`

### 4.25 Text

**File**: `src/ui/primitives/Text/text.css`

| Class | Description |
|---|---|
| `.text-body-base` | Base body text (16px, regular) |
| `.text-body-small` | Small body text (14px, regular) |
| `.text-body-strong` | Bold body text |
| `.text-body-emphasis` | Italic body text |
| `.text-body-link` | Link-styled text with underline |
| `.text-body-code` | Monospaced code text |
| `.text-input` | Input field text |
| `.text-subtitle` | Subtitle (32px, regular) |
| `.text-subheading` | Subheading (20px, regular) |
| `.text-heading` | Heading (24px, semibold) |
| `.text-title-page` | Page title (48px, bold) |
| `.text-title-hero` | Hero title (72px, bold) |
| `.text-list` | List container |
| `.text-list-item` | List item |
| `.text-price` | Price display text |
| `.text-align-center` | Center alignment |
| `.text-align-start` | Left alignment |
| `.text-align-end` | Right alignment |
| `.text-line-height-single` | `line-height: 1` |
| `.text-line-height-body` | `line-height: var(--global-line-height-body)` |
| `.text-truncate` | Multi-line text truncation with `--text-truncate-line-clamp` |

### 4.26 Textarea

**File**: `src/ui/primitives/Textarea/textarea.css`

| Class | Description |
|---|---|
| `.text-area` | Multi-line text input |
| `.text-area-resizable` | Resizable textarea |

**Custom properties**: `--text-area-background-color`, `--text-area-text-color`, `--text-area-border-color`, `--text-area-placeholder-color`

**States**: `[data-disabled]`, `[data-invalid]`, `[data-focus-visible]`

### 4.27 Tooltip

**File**: `src/ui/primitives/Tooltip/tooltip.css`

| Class | Description |
|---|---|
| `.tooltip` | Tooltip content box |
| `.tooltip-overlay-arrow` | Positioning arrow |

**Placements**: `[data-placement="top"]`, `[data-placement="bottom"]`, `[data-placement="left"]`, `[data-placement="right"]`

**Custom properties**: `--offset-x`, `--offset-y`, `--offset-border-x`, `--offset-border-y`, `--rotation`, `--width`

---

## 5. Composition Components

### 5.1 Cards

**File**: `src/ui/compositions/Cards/cards.css`

| Class | Description |
|---|---|
| `.card` | Base card container |
| `.card-interaction` | Interactive/clickable card |
| `.card-asset` | Card media/image area |
| `.card-content` | Card text content |
| `.card-variant-stroke` | Bordered card |
| `.card-variant-brand` | Brand-colored card |
| `.card-direction-vertical` | Vertical card layout |
| `.card-direction-horizontal` | Horizontal card layout |
| `.card-align-start` | Top/left aligned content |
| `.card-align-center` | Center aligned content |
| `.card-align-end` | Bottom/right aligned content |
| `.card-padding-600` | 24px padding |
| `.card-padding-800` | 32px padding |

**Custom properties**: `--border-radius`

**States**: `[data-hovered]`, `[data-focus-visible]`

### 5.2 Forms

**File**: `src/ui/compositions/Forms/forms.css`

| Class | Description |
|---|---|
| `.form-box` | Form container with border, background, and spacing |

### 5.3 Headers

**File**: `src/ui/compositions/Headers/headers.css`

| Class | Description |
|---|---|
| `.header` | Page header with sticky positioning |
| `.header-auth-avatar-button` | User avatar in header |
| `.navigation-dialog` | Mobile navigation overlay |
| `.navigation-dialog-close` | Mobile nav close button |

**States**: `[data-hovered]`, `[data-focus-visible]`

---

## File Index

| # | File Path | Category | Lines |
|---|---|---|---|
| 1 | `src/theme.css` | Design Tokens | 525 |
| 2 | `src/reset.css` | Reset | 19 |
| 3 | `src/responsive.css` | Responsive | 37 |
| 4 | `src/index.css` | Global Styles | 84 |
| 5 | `src/icons.css` | Icon Sizes | 30 |
| 6 | `src/ui/layout/Flex/flex.css` | Layout | — |
| 7 | `src/ui/layout/Grid/grid.css` | Layout | — |
| 8 | `src/ui/layout/Section/section.css` | Layout | — |
| 9 | `src/ui/primitives/Accordion/accordion.css` | Primitive | — |
| 10 | `src/ui/primitives/Avatar/avatar.css` | Primitive | — |
| 11 | `src/ui/primitives/Button/button.css` | Primitive | — |
| 12 | `src/ui/primitives/Checkbox/checkbox.css` | Primitive | — |
| 13 | `src/ui/primitives/Dialog/dialog.css` | Primitive | — |
| 14 | `src/ui/primitives/Fieldset/fieldset.css` | Primitive | — |
| 15 | `src/ui/primitives/IconButton/iconButton.css` | Primitive | — |
| 16 | `src/ui/primitives/Image/image.css` | Primitive | — |
| 17 | `src/ui/primitives/Input/input.css` | Primitive | — |
| 18 | `src/ui/primitives/Link/link.css` | Primitive | — |
| 19 | `src/ui/primitives/ListBox/listBox.css` | Primitive | — |
| 20 | `src/ui/primitives/Logo/logo.css` | Primitive | — |
| 21 | `src/ui/primitives/Menu/menu.css` | Primitive | — |
| 22 | `src/ui/primitives/Navigation/navigation.css` | Primitive | — |
| 23 | `src/ui/primitives/Notification/notification.css` | Primitive | — |
| 24 | `src/ui/primitives/Pagination/pagination.css` | Primitive | — |
| 25 | `src/ui/primitives/Radio/radio.css` | Primitive | — |
| 26 | `src/ui/primitives/Search/search.css` | Primitive | — |
| 27 | `src/ui/primitives/Select/select.css` | Primitive | — |
| 28 | `src/ui/primitives/Slider/slider.css` | Primitive | — |
| 29 | `src/ui/primitives/Switch/switch.css` | Primitive | — |
| 30 | `src/ui/primitives/Tab/tab.css` | Primitive | — |
| 31 | `src/ui/primitives/Table/table.css` | Primitive | — |
| 32 | `src/ui/primitives/Tag/tag.css` | Primitive | — |
| 33 | `src/ui/primitives/Text/text.css` | Primitive | — |
| 34 | `src/ui/primitives/Textarea/textarea.css` | Primitive | — |
| 35 | `src/ui/primitives/Tooltip/tooltip.css` | Primitive | — |
| 36 | `src/ui/compositions/Cards/cards.css` | Composition | — |
| 37 | `src/ui/compositions/Forms/forms.css` | Composition | — |
| 38 | `src/ui/compositions/Headers/headers.css` | Composition | — |

**Total: 38 CSS files** across foundation (5), layout (3), primitives (27), and compositions (3).
