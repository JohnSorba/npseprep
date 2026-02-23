Below is the **complete, ready-to-drop Markdown file** content for **`herodesign.md`**.
You can copy this verbatim into your project repository.

---

````md
# Hero Section Design Specification  
**Dynamic Grid + Carousel Hybrid Layout**

---

## 1. Overview

The hero section of the homepage is designed as a **dynamic, content-first mosaic** rather than a traditional static banner. Its purpose is to surface multiple high-value content types *at a glance* while remaining fluid, responsive, and scalable.

This design combines:
- An **asymmetrical CSS Grid layout**
- **Variable-sized content tiles**
- **Inline carousels embedded within the grid**
- **Data-driven rendering for long-term flexibility**

The result is a hero section that feels modern, informative, and alive—without overwhelming the user.

---

## 2. Design Objectives

- Present multiple content categories simultaneously (notes, quizzes, updates, highlights)
- Establish clear **visual hierarchy through spatial weight**
- Enable **dynamic rearrangement** without redesign
- Remain performant and accessible
- Scale seamlessly across screen sizes and future content growth

---

## 3. Layout Architecture

### 3.1 Core Layout System

The layout is built using **CSS Grid** as the structural backbone.

Reasons for choosing CSS Grid:
- Native support for two-dimensional layouts
- Explicit control over row and column spans
- Superior handling of asymmetrical and masonry-style layouts
- Cleaner responsiveness compared to Flexbox-based hacks

#### Base Grid Definition

```css
.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: minmax(120px, auto);
  gap: 1.25rem;
}
````

---

## 4. Tile Sizing & Visual Hierarchy

Content tiles deliberately occupy different amounts of space to indicate importance.

### 4.1 Tile Categories

| Tile Type | Purpose                       | Grid Behaviour |
| --------- | ----------------------------- | -------------- |
| Large     | Primary featured content      | Wide and tall  |
| Medium    | Supporting content            | Moderate span  |
| Small     | Utility or quick-access items | Compact        |

### 4.2 Grid Span Definitions

```css
.tile--large {
  grid-column: span 6;
  grid-row: span 2;
}

.tile--medium {
  grid-column: span 4;
}

.tile--small {
  grid-column: span 3;
}
```

Spatial dominance replaces excessive colour or animation as the main hierarchy mechanism.

---

## 5. Responsiveness & Fluid Behaviour

The layout is **fluid-first**, not breakpoint-heavy.

### 5.1 Responsive Strategy

* Use `minmax()`, `auto-fit`, and natural reflow
* Avoid fixed heights where possible
* Reduce columns progressively rather than redesigning layout blocks

```css
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

On mobile:

* Tiles stack vertically
* Content priority order is preserved
* Carousels remain swipe-friendly

---

## 6. Carousel Integration

Carousels are used sparingly and embedded **within grid tiles**, not layered on top.

### 6.1 Use Cases

Recommended carousel content:

* Featured quizzes
* Recently added notes
* Announcements or updates

Avoid:

* More than two carousels in the hero
* Auto-play by default
* Overly animated transitions

### 6.2 Example Integration (React)

```jsx
<div className="tile tile--large">
  <HeroCarousel items={featuredContent} />
</div>
```

### 6.3 Interaction Rules

* Manual navigation preferred
* Touch/drag enabled on mobile
* Auto-play only on desktop (optional, subtle, and slow)

---

## 7. Typography & Visual Language

Typography scales fluidly and supports the grid’s hierarchy.

### 7.1 Responsive Typography

```css
.hero-title {
  font-size: clamp(1.5rem, 3vw, 2.75rem);
}
```

### 7.2 Design Principles

* Hierarchy through size and spacing
* Minimal reliance on colour
* Consistent padding and rhythm across tiles

This keeps the interface educational, not promotional.

---

## 8. Motion & Interaction Design

Motion is intentional and restrained.

### 8.1 Allowed Motion

* Hover elevation:

```css
.tile:hover {
  transform: translateY(-2px);
}
```

* Subtle fade or slide-in on load
* Focus outlines for keyboard users

### 8.2 Avoid

* Heavy parallax
* Continuous animations
* Competing motion layers

Motion should guide attention, not steal it.

---

## 9. Dynamic & Data-Driven Rendering

The hero section must be **content-aware**, not hard-coded.

### 9.1 Suggested Data Model

```json
{
  "id": "hero_01",
  "type": "carousel",
  "priority": "high",
  "gridSpan": {
    "col": 6,
    "row": 2
  }
}
```

### 9.2 Rendering Logic (React Example)

```jsx
{heroItems.map(item => (
  <HeroTile key={item.id} config={item} />
))}
```

Benefits:

* CMS-driven layout changes
* Easy reordering for exams or seasons
* A/B testing support
* Future scalability

---

## 10. Performance Considerations

The hero section is above-the-fold and must be optimised.

Mandatory practices:

* Lazy-load images inside carousels
* Preload hero fonts
* Explicitly reserve layout space
* Avoid layout shifts (CLS)

Optional enhancement:

```css
content-visibility: auto;
```

If the hero stutters, the design has failed—regardless of aesthetics.

---

## 11. Accessibility Standards

Accessibility is not optional.

Requirements:

* Keyboard-navigable carousels
* ARIA labels for slides and controls
* Logical tab order despite visual asymmetry
* WCAG-compliant colour contrast

An elegant layout that excludes users is simply poor engineering.

---

## 12. Design Philosophy Summary

This hero section functions as a **living dashboard**, not a billboard.

Key characteristics:

* Modular
* Responsive
* Data-driven
* Scalable
* Calm, not chaotic

Dynamic design is only successful when it feels effortless to the user.

---

## 13. Future Extensions

Potential enhancements:

* Personalised hero layouts (per user or class)
* Exam-period layout presets
* Teacher/admin-configurable hero blocks
* Analytics-driven content weighting

---

**End of Document**
