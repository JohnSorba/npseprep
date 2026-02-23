# NPSE Prep — Header & Design System Specification

**Date:** 20 February 2026

---

# 1. Header Design Objectives

## Core Principles

* Professional and trustworthy (parent confidence).
* Clear and fast to scan (pupil usability).
* Accessible by default (keyboard + touch support).
* Clean mega-panel interaction (40vw controlled width).

---

# 2. Header Information Architecture

## Left Section

* Logo: "NPSE Prep" wordmark
* Subtle Sierra Leone flag-inspired accent (minimal usage)

## Centre (Desktop Navigation)

Primary Navigation Items:

* Learn
* Practice
* Resources
* Parents
* About

## Right Section

* Search (icon + expandable input)
* Sign in (secondary action)
* Start practising (primary CTA)

## Mobile Behaviour

* Hamburger icon opens full-screen drawer
* Each primary item expands accordion-style
* No hover dependency on touch devices

---

# 3. Mega-Panel Specification (40vw Behaviour)

## Width Control

```
width: min(40vw, 520px)
```

Prevents overly wide panels on large screens.

## Interaction Rules

* Opens on hover (desktop)
* Opens on focus-within (keyboard users)
* Remains open while pointer is inside nav item or panel
* Closes on mouse leave (80–150ms delay recommended)
* Closes on ESC key
* On touch devices: first tap opens, second tap activates link

## Panel Layout Structure

* Left column: section title + short description
* Right column: 6–10 links maximum

### Learn Panel Subjects

1. Mathematics
2. English Language
3. General Paper
4. Verbal Aptitude
5. Quantitative Aptitude

Optional: minimalist line icons beside each subject.

---

# 4. Design System Foundation

## Typography

### Fonts

* Headings: Poppins or Plus Jakarta Sans
* Body: Inter

### Scale

* H1: 40–44px
* H2: 28–32px
* H3: 20–22px
* Body: 16–18px
* Small labels: 12–14px

### Rules

* Body line-height: ~1.55
* Avoid ultra-thin font weights

---

## Colour Scheme

### Primary Colours

* Ink / Navy: `#0B1220`
* Green Accent: `#1B8A5A`
* Blue Accent: `#1E6FB8`

### Neutral System

* Background: `#F7F8FB`
* Surface: `#FFFFFF`
* Border: `#E6E8EF`
* Muted Text: `#566075`
* Error: `#C73E3E`

### Usage Philosophy

* Trust first (navy + white dominance)
* Accent colours used sparingly for CTAs and highlights
* No excessive colour saturation

---

# 5. Button System

## Primary Button

* Background: Green (`#1B8A5A`)
* Text: White
* Border radius: 12–14px
* Height: 44–48px
* Hover: slightly darker or reduced opacity
* Visible focus ring required

## Secondary Button

* Outline style
* Ink text
* Subtle hover background (`#F7F8FB`)

## Tertiary Button

* Text-only
* Underline on hover

---

# 6. Layout Tokens

## Container Width

* Max content width: 1120–1200px

## Spacing Scale

4, 8, 12, 16, 24, 32, 48

## Card Design

* White surface
* 1px border (`#E6E8EF`)
* Subtle shadow
* Rounded corners: 14–16px

---

# 7. Header Layout (Desktop)

* Sticky header
* Height: 72px
* Background: white
* Border-bottom: 1px solid `#E6E8EF`

## Navigation Styling

* Font size: 14–16px
* Font weight: medium
* Hover: soft background (`#F7F8FB`)
* Active state: subtle underline or bottom border in green

## Mega-Panel Styling

* Width: `min(40vw, 520px)`
* Padding: 20–24px
* Border radius: 16px
* Border: 1px solid `#E6E8EF`
* Background: white or slight tint (`#F7F8FB`)
* Soft medium shadow

---

# 8. Accessibility Requirements

* All nav items accessible via keyboard
* `aria-haspopup="true"`
* `aria-expanded` toggled correctly
* Focus-visible ring required
* ESC closes open panels

---

# 9. React + Tailwind Implementation Example

```tsx
import { useState } from "react";

const NAV = [
  {
    label: "Learn",
    description: "Notes by subject, explained clearly.",
    links: [
      { label: "Mathematics", href: "/learn/mathematics" },
      { label: "English Language", href: "/learn/english" },
      { label: "General Paper", href: "/learn/general-paper" },
      { label: "Verbal Aptitude", href: "/learn/verbal-aptitude" },
      { label: "Quantitative Aptitude", href: "/learn/quantitative-aptitude" },
    ],
  },
  {
    label: "Practice",
    description: "Quizzes and mock exams with feedback.",
    links: [
      { label: "Topic Quizzes", href: "/practice/quizzes" },
      { label: "Timed Practice", href: "/practice/timed" },
      { label: "Mock Exams", href: "/practice/mocks" },
      { label: "Review Mistakes", href: "/practice/review" },
    ],
  },
  {
    label: "Resources",
    description: "Printable help and study tools.",
    links: [
      { label: "Study Plans", href: "/resources/study-plans" },
      { label: "Printable Sheets", href: "/resources/printables" },
      { label: "Past Paper Guidance", href: "/resources/past-papers" },
    ],
  },
  {
    label: "Parents",
    description: "Support your child with confidence.",
    links: [
      { label: "How to Support", href: "/parents/support" },
      { label: "FAQs", href: "/parents/faqs" },
      { label: "Progress & Reports", href: "/parents/progress" },
    ],
  },
  {
    label: "About",
    description: "What we’re building and why.",
    links: [
      { label: "Mission", href: "/about/mission" },
      { label: "Contact", href: "/about/contact" },
      { label: "Partnerships", href: "/about/partners" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6E8EF]">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="h-[72px] flex items-center justify-between gap-6">
          <a href="/" className="font-semibold text-[18px] text-[#0B1220]">
            NPSE Prep
          </a>

          <nav className="hidden md:flex items-center gap-2 relative">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <button
                  className="px-3 py-2 rounded-[10px] text-[15px] font-medium text-[#0B1220]
                  hover:bg-[#F7F8FB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B8A5A]/40"
                  onFocus={() => setOpen(item.label)}
                  aria-haspopup="true"
                  aria-expanded={open === item.label}
                >
                  {item.label}
                </button>

                {open === item.label && (
                  <div
                    className="absolute left-0 mt-3 rounded-[16px] border border-[#E6E8EF] bg-white shadow-lg"
                    style={{ width: "min(40vw, 520px)" }}
                    role="menu"
                  >
                    <div className="p-5 grid grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <div className="text-[13px] font-semibold text-[#0B1220]">
                          {item.label}
                        </div>
                        <p className="mt-2 text-[13px] text-[#566075] leading-snug">
                          {item.description}
                        </p>
                      </div>

                      <div className="col-span-2">
                        <ul className="grid grid-cols-1 gap-1">
                          {item.links.map((l) => (
                            <li key={l.href}>
                              <a
                                href={l.href}
                                className="block px-3 py-2 rounded-[12px] text-[14px] text-[#0B1220]
                                hover:bg-[#F7F8FB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B8A5A]/40"
                                role="menuitem"
                              >
                                {l.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/signin"
              className="px-4 h-[44px] inline-flex items-center rounded-[12px]
              border border-[#E6E8EF] text-[#0B1220] hover:bg-[#F7F8FB]"
            >
              Sign in
            </a>
            <a
              href="/practice"
              className="px-4 h-[44px] inline-flex items-center rounded-[12px]
              bg-[#1B8A5A] text-white hover:opacity-95"
            >
              Start practising
            </a>
          </div>

          <button className="md:hidden px-3 py-2 rounded-[10px] border border-[#E6E8EF]">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
```

---

# 10. Next Development Steps

1. Extract design tokens into `theme.ts`
2. Apply tokens consistently to:

   * Buttons
   * Cards
   * Forms
   * Subject badges
3. Proceed to home hero design
4. Design subject landing page templates

---

**End of Specification**
