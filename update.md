Refactor and redesign the hero section of a modern SaaS landing page (AI-powered hotel management platform called "JustHost") to match a premium, centered, and balanced composition.

The current implementation is too large, stretched, and lacks visual hierarchy. The goal is to achieve a clean, centered, “poster-like” hero layout where all elements (image + floating cards) are visible within a single viewport without scrolling.

---

LAYOUT REQUIREMENTS:

1. The hero section must NOT use full `h-screen` dominance for the image.
2. Use a centered container with a max width of 1100px–1200px.
3. The entire hero (headline + image + cards) must fit within ~85vh.
4. Maintain strong vertical spacing between headline and image.
5. Ensure no overflow or scroll is required to view all elements.

---

IMAGE BEHAVIOR:

1. The hotel image should be visually large but NOT full-screen.
2. Use fixed aspect ratio (e.g., width: 1400, height: 800).
3. Apply:

   * `max-width: 1000px–1100px`
   * `margin: 0 auto`
   * `object-contain`
4. Slightly scale the image for visual impact:

   * `transform: scale(1.1 – 1.15)`
5. Add slight downward shift:

   * `translateY(20px – 40px)`
6. The image should feel grounded and centered, not stretched.

---

FLOATING CARDS:

1. All stat cards must use `position: absolute`.
2. Cards must be scaled down:

   * `transform: scale(0.85 – 0.9)`
3. Reduce card sizes slightly (widths tighter).
4. Maintain consistent spacing between cards and image.

---

CARD POSITIONING (CRITICAL):

Use a tight, symmetrical layout around the building:

* Top Left (Revenue):
  top: 8%, left: 4%

* Bottom Left (Reservations):
  top: 45%, left: 2–4%

* Center Bottom (Occupancy):
  bottom: 5%, left: 50%, transform: translateX(-50%) scale(0.9)

* Top Right (Guest Satisfaction):
  top: 8%, right: 4%

* Mid Right (Housekeeping):
  top: 45%, right: 2–4%

Avoid negative positioning like `left: -5%` or `right: -4%`.

---

VISUAL HIERARCHY:

1. Headline should remain dominant.
2. Image should be secondary but prominent.
3. Cards should be smallest elements.
4. Ensure proper scaling relationship:

   * Text > Image > Cards

---

DEPTH & POLISH:

1. Add a subtle radial gradient behind the image:
   `radial-gradient(circle at center, rgba(0,40,63,0.06), transparent 70%)`

2. Maintain soft shadows and glassmorphism on cards.

3. Avoid overly strong contrast or harsh edges.

4. Ensure everything feels calm, premium, and balanced.

---

WHAT TO AVOID:

* Full-bleed image layouts
* Oversized cards
* Negative offsets pushing cards outside viewport
* Competing element sizes
* Tight or cramped spacing

---

FINAL GOAL:

A premium SaaS hero section that:

* Feels centered and composed like a poster
* Shows all elements in one screen
* Has clear hierarchy and breathing space
* Matches high-end products like Stripe, Linear, or modern AI startups
