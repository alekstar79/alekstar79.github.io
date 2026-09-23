**English** · [Русский](README_RU.md)

# Modal Effects

A reference collection of 24 modal entrance and exit animations. Each effect is
a self-contained block of CSS. The only JavaScript involved is a class toggle.

This document describes the effects themselves: what each one does, how it is
built, and where it fits. Code is included for every effect.

---

## How an effect is structured

Every effect follows the same three-part pattern.

**Markup** — an overlay wrapper with an effect class, and a modal element inside:

```html
<div class="overlay overlay-spring" id="myModal">
  <div class="modal">
    <!-- content -->
  </div>
</div>
```

**State** — the `open` class on the overlay:

```html
<div class="overlay overlay-spring open" id="myModal">
```

**Behavior** — CSS describes the closed state, the open state, and the transition
between them:

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

Adding `open` plays the entrance. Removing it plays the exit. No animation
library, no state machine, no JavaScript in the effect itself.

---

## Base styles

Paste these once per project. They place the overlay, center the modal, and
handle the visibility toggle.

```css
.overlay {
  position: fixed;
  inset: 0;
  display: flex;
  padding: 16px;
  background: rgba(0, 0, 0, 0.6);
  visibility: hidden;
  opacity: 0;
  overflow-y: auto;
  z-index: 999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.overlay.open {
  visibility: visible;
  opacity: 1;
}

.modal {
  margin: auto;
  width: 100%;
  max-width: 500px;
  padding: 32px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}
```

Every effect block below is added on top of this base.

---

## The effects

### 1. Top → Bottom

The modal unfolds from the top edge, as if a scroll were being unrolled downward.

```css
.overlay-top {
  perspective: 800px;
}

.overlay-top .modal {
  transform: rotateX(90deg);
  transform-origin: top center;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-top.open .modal {
  transform: rotateX(0deg);
}
```

**When to use.** Content-heavy dialogs, confirmations, terms of service. The
motion reads as *revealing* rather than *appearing*, which suits text-driven
content.

---

### 2. Left → Right

The modal unrolls from the left edge, the way a page turns.

```css
.overlay-left {
  perspective: 1000px;
}

.overlay-left .modal {
  transform: rotateY(90deg);
  transform-origin: left center;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-left.open .modal {
  transform: rotateY(0deg);
}
```

**When to use.** Editorial modals, articles, anything with a reading flow. Also
a natural choice in LTR interfaces where motion comes from the leading edge.

---

### 3. Bottom → Top

The modal unrolls from the bottom edge, as if lifted upward.

```css
.overlay-bottom {
  perspective: 800px;
}

.overlay-bottom .modal {
  transform: rotateX(-90deg);
  transform-origin: bottom center;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-bottom.open .modal {
  transform: rotateX(0deg);
}
```

**When to use.** Invitations, greetings, welcome dialogs. Reads as *presenting*
something to the user.

---

### 4. Right → Left

The modal unrolls from the right edge. Mirror of effect 2.

```css
.overlay-right {
  perspective: 1000px;
}

.overlay-right .modal {
  transform: rotateY(-90deg);
  transform-origin: right center;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-right.open .modal {
  transform: rotateY(0deg);
}
```

**When to use.** Same contexts as effect 2 in RTL interfaces, or as a mirrored
pair when the modal is triggered from the right side of the viewport.

---

### 5. Slide Left → Right

The modal travels in from off-screen on the left, unfolding as it arrives.

```css
.overlay-slide-left {
  perspective: 1000px;
}

.overlay-slide-left .modal {
  transform: translate3d(-150%, 0, 0) rotateY(90deg);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-left.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg);
}
```

**When to use.** Side panels, navigation drawers, anything with a natural
left-hand source. The travel distance makes the motion spatial.

---

### 6. Slide Right → Left

The same motion as effect 5, mirrored from the right.

```css
.overlay-slide-right {
  perspective: 1000px;
}

.overlay-slide-right .modal {
  transform: translate3d(150%, 0, 0) rotateY(-90deg);
  transform-origin: right center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-right.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg);
}
```

**When to use.** Right-anchored panels, settings drawers, filter modals opened
from the right side of the layout.

---

### 7. Slide Top → Bottom

The modal drops in from the top, unfolding on arrival.

```css
.overlay-slide-top {
  perspective: 800px;
}

.overlay-slide-top .modal {
  transform: translate3d(0, -150%, 0) rotateX(90deg);
  transform-origin: top center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-top.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
```

**When to use.** Dropdown-like modals, notifications sliding from a top bar,
anything triggered from a header element.

---

### 8. Slide Bottom → Top

The modal rises from the bottom edge, unfolding upward.

```css
.overlay-slide-bottom {
  perspective: 800px;
}

.overlay-slide-bottom .modal {
  transform: translate3d(0, 150%, 0) rotateX(-90deg);
  transform-origin: bottom center;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-slide-bottom.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg);
}
```

**When to use.** Mobile-first interfaces, action sheets, anything that mimics
a bottom sheet.

---

### 9. Spring

The modal scales in with an overshoot: it grows past its final size, contracts
slightly, and settles.

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

**When to use.** Success states, confirmations, playful interfaces. The
overshoot signals arrival — the modal *pops* rather than *appears*.

---

### 11. Zoom Rotate

The modal scales up from nothing while rotating into place from 45 degrees.

```css
.overlay-zoomrotate .modal {
  transform: scale(0) rotate(45deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-zoomrotate.open .modal {
  transform: scale(1) rotate(0deg);
}
```

**When to use.** Celebratory dialogs, onboarding steps, product announcements.
The rotation adds personality to what would otherwise be a plain zoom.

---

### 12. Perspective 3D

The modal approaches from far away, with a slight forward tilt that straightens
as it lands.

```css
.overlay-perspective {
  perspective: 600px;
}

.overlay-perspective .modal {
  transform: translateZ(-300px) rotateX(30deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-perspective.open .modal {
  transform: translateZ(0) rotateX(0deg);
}
```

**When to use.** Hero dialogs, onboarding, anything that deserves undivided
attention. Reads as the modal *approaching the viewer* from depth.

---

### 13. Origami L → R

The modal unfolds from the top-left corner with a skew, like paper being
opened from a crease.

```css
.overlay-origami .modal {
  transform: rotate(-90deg) scale(0.3) skewX(20deg);
  transform-origin: top left;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-origami.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg);
}
```

**When to use.** Creative tools, editorial pages, playful products. The skew
gives the effect character — it does not look like a stock animation.

---

### 14. Bounce

A keyframed entrance with three distinct beats: swell, contract, settle.

```css
@keyframes bounceIn {
  0%   { transform: scale(0.3); opacity: 0; }
  50%  { transform: scale(1.1); }
  70%  { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

.overlay-bounce .modal {
  transform: scale(0.3);
  opacity: 0;
}

.overlay-bounce.open .modal {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}
```

**When to use.** Attention-grabbing alerts, cookie banners, promotional modals.
Loud by design — avoid for utility dialogs.

---

### 15. Diagonal Top Left

The modal flies in from the top-left corner, rotating into place.

```css
.overlay-diagonal .modal {
  transform: translate3d(-200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Notifications, chat bubbles, anything anchored to the top-left
of the screen. The diagonal makes the origin unambiguous.

---

### 16. Convex

The modal begins as a small round bubble, inflates into a card, and gains a
relief shadow — like a balloon expanding into shape.

```css
.overlay-convex {
  perspective: 800px;
}

.overlay-convex .modal {
  transform: scale(0.3) rotateX(20deg) rotateY(20deg);
  border-radius: 50%;
  opacity: 0;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 -20px 40px rgba(0, 0, 0, 0.1),
    inset 0 20px 40px rgba(255, 255, 255, 0.3);
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-radius 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease,
    box-shadow 0.8s ease;
}

.overlay-convex.open .modal {
  transform: scale(1) rotateX(0deg) rotateY(0deg);
  border-radius: 24px;
  opacity: 1;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.5),
    inset 0 -10px 30px rgba(0, 0, 0, 0.05),
    inset 0 10px 30px rgba(255, 255, 255, 0.2);
}
```

**When to use.** Product cards, feature highlights, "reveal" interactions.
Softer than Spring, more organic than Zoom — the border-radius morph is the
signature.

---

### 17. Diagonal Top Right

```css
.overlay-diagonal-top-right .modal {
  transform: translate3d(200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-top-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Top-right notifications, account menus, anything triggered
from the upper-right region of the interface.

---

### 18. Diagonal Bottom Left

```css
.overlay-diagonal-bottom-left .modal {
  transform: translate3d(-200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Bottom-left anchored interactions, secondary dialogs,
assistive popups positioned near a trigger.

---

### 19. Diagonal Bottom Right

```css
.overlay-diagonal-bottom-right .modal {
  transform: translate3d(200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Chat widgets, support bubbles, corner-anchored overlays
typically triggered from the lower-right.

---

### 20. Origami R → L

The mirror of effect 13 — unfolds from the top-right corner.

```css
.overlay-origami-right .modal {
  transform: rotate(90deg) scale(0.3) skewX(-20deg);
  transform-origin: top right;
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-origami-right.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg);
}
```

**When to use.** Same as effect 13, mirrored. Useful for RTL interfaces or
when the modal is opened from the right side of the layout.

---

### 21. Flip X

The modal starts turned away, facing the viewer from behind, and rotates
forward around the horizontal axis.

```css
.overlay-flip-x {
  perspective: 800px;
}

.overlay-flip-x .modal {
  transform: rotateX(180deg);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-x.open .modal {
  transform: rotateX(0deg);
}
```

**When to use.** Card-detail views, flip-to-reveal interactions. Best when the
triggering element has a flip metaphor of its own.

---

### 22. Flip Y → Scale

A horizontal flip combined with a scale. The flip travels left to right.

```css
.overlay-flip-ys {
  perspective: 800px;
}

.overlay-flip-ys .modal {
  transform: rotateY(180deg) scale(0.3);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-ys.open .modal {
  transform: rotateY(0deg) scale(1);
}
```

**When to use.** Product previews, image cards, anything where a horizontal
flip connects the trigger to the content.

---

### 23. Flip Y ← Scale

The mirror of effect 22. The flip travels right to left.

```css
.overlay-flip-ys-reverse {
  perspective: 800px;
}

.overlay-flip-ys-reverse .modal {
  transform: rotateY(-180deg) scale(0.3);
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-ys-reverse.open .modal {
  transform: rotateY(0deg) scale(1);
}
```

**When to use.** Mirrored pairing with effect 22 — useful when you have two
triggers on opposite sides of a layout that should feel distinct.

---

### 24. Flip Mix

A double flip: both axes at once, with scale. The most theatrical of the
collection.

```css
.overlay-flip-mix {
  perspective: 800px;
}

.overlay-flip-mix .modal {
  transform: rotateX(180deg) rotateY(180deg) scale(0.3);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-flip-mix.open .modal {
  transform: rotateX(0deg) rotateY(0deg) scale(1);
}
```

**When to use.** Feature reveals, celebratory dialogs, anywhere the modal is
the centre of attention and can afford to be dramatic.

---

## Choosing an effect

Use the family, not the individual effect, as the first filter.

| If the trigger is...         | Reach for...                  |
|------------------------------|-------------------------------|
| A text-heavy link or heading | Roll family (1–4)             |
| A side panel or drawer       | Slide + Roll (5–8)            |
| A success or confirmation    | Spring (9), Zoom Rotate (11)  |
| A hero action                | Perspective 3D (12)           |
| A card or editor             | Origami (13, 20), Convex (16) |
| An alert or banner           | Bounce (14)                   |
| Anchored to a screen corner  | Diagonal (15, 17–19)          |
| A flip-to-reveal trigger     | Flip (21–24)                  |

---

## Accessibility

- Each modal is a `role="dialog"` with `aria-modal="true"` and
  `aria-labelledby` pointing at its heading.
- Tab is trapped inside the open modal. Escape closes it and returns focus to
  the trigger.
- All effects respect `prefers-reduced-motion: reduce` — animations are skipped
  for users who ask for less motion.
- Motion is decorative. Nothing in the interface depends on the animation
  playing.

---

## Browser support

Modern evergreen browsers: Chrome, Edge, Firefox, Safari. The project uses
`@layer`, `color-mix()`, `:focus-visible`, and ES modules.

---

## License

MIT.
