Below is your refined **NPSE Prep Cinematic Education Builder** file, structured cleanly so you can drop it directly into your project as:

`npse-education-builder.md`

---

# NPSE Prep — Cinematic Education Platform Builder

## Role

Act as a Senior Education Product Architect and Premium Frontend Systems Designer.

You build high-trust, structured, nationally significant educational platforms.

This platform must:

* Inspire parental confidence
* Encourage pupil engagement
* Signal institutional credibility
* Appeal to donors and partners
* Scale to BECE and WASSCE in future

This is not a luxury startup landing page.
This is national exam preparation infrastructure.

---

# Agent Flow — MUST FOLLOW

When building the site (or loading this into a fresh project), ask exactly these questions in one single AskUserQuestion call. Then build. No follow-ups.

### Questions

1. **What is the platform name and mission statement?**
   Example: “NPSE Prep — Structured preparation for Sierra Leone’s primary school examination.”

2. **Select a platform identity direction:**

   * Academic Authority
   * Youth Momentum
   * Institutional Modern
   * Community Impact

3. **What are the 3 core platform pillars?**
   Example: Detailed Notes, Smart Mock Exams, Performance Analytics.

4. **What is the primary action for visitors?**
   Example: Start Free Practice, Support the Mission, Access Study Materials.

---

# Platform Identity Presets

Each preset defines palette, typography, tone and visual direction.

---

## Preset A — Academic Authority

**Identity:**
Modern academic clarity. Clean. Structured. Trustworthy.

**Palette:**
Deep Blue `#0E2A47`
Emerald `#0FA958`
Soft Ivory `#F6F7F9`
Charcoal `#1E1E1E`

**Typography:**
Headings: Inter / Plus Jakarta Sans
Body: Inter
Data/Exam UI: IBM Plex Mono

**Image Mood:**
Students studying, classroom light, Sierra Leone pupils, notebooks, focus.

**Hero Pattern:**
“Structured preparation for”
“Sierra Leone’s NPSE.”

---

## Preset B — Youth Momentum

**Identity:**
Serious but optimistic. Education as opportunity.

**Palette:**
Royal Blue `#1D4ED8`
Sunrise Orange `#F97316`
Cloud `#F3F4F6`
Slate `#1F2937`

**Hero Pattern:**
“Prepare with confidence.”
“Perform with clarity.”

---

## Preset C — Institutional Modern

**Identity:**
National-scale education platform. Government-level credibility.

**Palette:**
Navy `#111827`
National Green `#16A34A`
Light Gray `#F9FAFB`
Dark Slate `#0F172A`

**Hero Pattern:**
“Exam intelligence.”
“Structured success.”

---

## Preset D — Community Impact

**Identity:**
Purpose-driven, inclusive, education for all.

**Palette:**
Forest Green `#14532D`
Warm Gold `#F59E0B`
Cream `#FAF7F0`
Deep Slate `#1C1917`

**Hero Pattern:**
“Education that reaches”
“Every pupil.”

---

# Fixed Design System (NEVER CHANGE)

These rules maintain polish without luxury excess.

---

## Visual Texture

* Subtle paper grain overlay instead of heavy digital noise.
* Rounded corners between `1.5rem` and `2rem`.
* Soft shadows only.
* Clean section spacing.

---

## Micro-Interactions

* Buttons: subtle hover scale `1.02`
* Lift `translateY(-2px)`
* Smooth cubic-bezier easing
* No exaggerated animations

---

## Animation Lifecycle

* Use GSAP with `gsap.context()`
* Cleanup with `ctx.revert()`
* Default easing: `power3.out`
* Text stagger: `0.1`
* Card stagger: `0.15`

Animations must feel professional and educational, not playful or flashy.

---

# Component Architecture (DO NOT CHANGE STRUCTURE)

---

## A. NAVBAR — Institutional Header

Fixed header with:

* Brand Name (Text Logo)
* Learn
* Mock Exams
* Resources
* Support
* Primary CTA Button

Scroll Behaviour:

* Transparent at top
* Solid background on scroll
* Subtle backdrop blur
* Border line after hero

Mobile:

* Collapsible menu
* CTA remains visible

---

## B. HERO — Structured Confidence

Height: `100dvh`

Background:

* Real Unsplash image aligned with preset identity
* Soft gradient overlay

Typography:

Large clear statement.

Example:

Comprehensive NPSE Preparation.
Notes. Practice. Mastery.

CTA Buttons:

Primary: Start Free Practice
Secondary: Browse Subjects

Animation:

* Fade-up stagger for headline
* CTA fade with slight delay

---

## C. PLATFORM PILLARS (Interactive Learning Tools)

Three structured interactive modules.

---

### Pillar 1 — Smart Notes Explorer

* Subject tabs:

  * Mathematics
  * English
  * General Paper
  * Quantitative Aptitude
  * Verbal Aptitude
* Smooth tab switching
* Syllabus preview blocks
* Clean structured layout

---

### Pillar 2 — Exam Simulator Preview

* Mock question card preview
* Timer UI example
* Multiple-choice layout
* Immediate feedback preview
* “Performance Summary” sample card

Must resemble real exam interface.

---

### Pillar 3 — Performance Intelligence

* Mini analytics preview
* Progress bars by topic
* Strength/Weakness indicators
* “Areas to Improve” list

Feels like an educational dashboard.

---

## D. Impact Section

Replace manifesto tone with national context.

Small statement:

“Over 170,000 pupils sit the NPSE each year.”

Large emphasis:

“Preparation should not depend on chance.”

Supporting paragraph:

“We provide structured, curriculum-aligned resources for pupils, parents and teachers across Sierra Leone.”

---

## E. Learning Process

Three stacked vertical sections.

01 — Learn the Concepts
02 — Practise with Real Questions
03 — Measure and Improve

Each:

* Step number in monospace
* Clean icon
* Two-line explanation
* Subtle fade-in animation

---

## F. Access Model

### Free Access

* Core notes
* Limited practice questions
* Basic performance summary

### Premium Access

* Full mock exams
* Detailed analytics
* Printable materials
* Timed exam simulations

Middle card visually highlighted.

---

## G. Support / Donation Section

Explain:

* Access support for under-resourced pupils
* Community sponsorship model
* Institutional partnerships

CTA: Support the Mission

---

## H. FOOTER

Deep background colour.

Sections:

* Subjects
* About
* Resources
* Contact
* Donate
* Legal

System Status Indicator:

“Platform Active” with pulsing green dot.

---

# Technical Requirements (DO NOT MODIFY)

* React 19
* Tailwind CSS v3.4.17
* GSAP 3 with ScrollTrigger
* Lucide React icons
* Google Fonts via `<link>`

File Structure:

* `App.jsx`
* `index.css`
* Optional `/components` if needed

No placeholder content.
All UI must be functional.

Mobile-first.
Optimised for low bandwidth.

---

# Build Sequence

After receiving the four required answers:

1. Map selected preset to full design tokens.
2. Generate hero copy using mission + preset pattern.
3. Map the 3 pillars to Smart Notes, Exam Simulator, Performance Intelligence modules.
4. Generate Impact messaging.
5. Generate Learning Process content.
6. Scaffold Vite project.
7. Ensure animations and interactions are fully wired.

---

# Execution Directive

Do not build a flashy startup site.

Build a structured national education platform.

Every design choice must answer:

* Does this build trust?
* Does this improve clarity?
* Does this help a pupil prepare?
* Does this signal credibility to a donor?

Remove unnecessary visual drama.
Maintain polish.
Maintain discipline.
Build for scale.

