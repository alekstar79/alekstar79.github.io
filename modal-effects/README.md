**English** · [Русский](README_RU.md)

# Modal Effects

A reference collection of modal entrance and exit animations, grouped by family.
Each effect is a self-contained block of CSS. The only JavaScript involved is
a class toggle.

[**LIVE DEMO**](https://alekstar79.github.io/modal-effects)

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

**When to use.** Content-heavy dialogs, confirmations, terms of service. The motion reads as *revealing* rather than *appearing*, which suits text-driven content.

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

**When to use.** Editorial modals, articles, anything with a reading flow. Also a natural choice in LTR interfaces where motion comes from the leading edge.

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

**When to use.** Invitations, greetings, welcome dialogs. Reads as *presenting* something to the user.

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

**When to use.** Same contexts as effect 2 in RTL interfaces, or as a mirrored pair when the modal is triggered from the right side of the viewport.

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

**When to use.** Side panels, navigation drawers, anything with a natural left-hand source. The travel distance makes the motion spatial.

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

**When to use.** Right-anchored panels, settings drawers, filter modals opened from the right side of the layout.

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

**When to use.** Dropdown-like modals, notifications sliding from a top bar, anything triggered from a header element.

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

**When to use.** Mobile-first interfaces, action sheets, anything that mimics a bottom sheet.

---

### 9. Slide + Rotate

The modal rises from below while tilting through `rotate(15deg)` into place.

```css
.overlay-slide-rotate .modal {
  transform: translate3d(0, 100%, 0) rotate(15deg);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-slide-rotate.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**When to use.** Playful confirmations, product cards, anything where a small tilt adds personality to a plain bottom slide.

---

### 10. Roll In Left

The modal rolls in from the left with a full `rotate(-720deg)` spin — reads like a wheel arriving at its destination.

```css
.overlay-roll-left .modal {
  transform: translate3d(-120%, 0, 0) rotate(-720deg);
  opacity: 0;
  transition:
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-roll-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**When to use.** Game UIs, playful onboarding, anything with a wheel or dice metaphor. The full two-turn spin is a commitment — pair it with a matching icon.

---

### 11. Roll In Right

Mirror of Roll In Left — a 720° spin from the right.

```css
.overlay-roll-right .modal {
  transform: translate3d(120%, 0, 0) rotate(720deg);
  opacity: 0;
  transition:
    transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-roll-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
  opacity: 1;
}
```

**When to use.** Paired mirror for Roll In Left, or a right-anchored wheel metaphor.

---

### 12. Spring

The modal scales in with an overshoot: it grows past its final size, contracts slightly, and settles.

```css
.overlay-spring .modal {
  transform: scale(0);
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.overlay-spring.open .modal {
  transform: scale(1);
}
```

**When to use.** Success states, confirmations, playful interfaces. The overshoot signals arrival — the modal *pops* rather than *appears*.

---

### 13. Rubber Band

A keyframed rubber-band pulse: the modal stretches horizontally, compresses vertically, and settles.

```css
@keyframes rubberBand {
  0%   { transform: scale(1); }
  30%  { transform: scaleX(1.25) scaleY(0.75); }
  40%  { transform: scaleX(0.75) scaleY(1.25); }
  50%  { transform: scaleX(1.15) scaleY(0.85); }
  65%  { transform: scaleX(0.95) scaleY(1.05); }
  75%  { transform: scaleX(1.05) scaleY(0.95); }
  100% { transform: scale(1); }
}

.overlay-rubber .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-rubber.open .modal {
  opacity: 1;
  animation: rubberBand 0.9s ease forwards;
}
```

**When to use.** Playful confirmations, mascot-driven interactions, or anything where a piece of elastic comedy fits the brand. Avoid in utility dialogs.

---

### 14. Heartbeat

A heartbeat pulse — the modal beats twice with a soft scale and steadies.

```css
@keyframes heartbeat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.15); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.15); }
  70%  { transform: scale(1); }
  100% { transform: scale(1); }
}

.overlay-heartbeat .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-heartbeat.open .modal {
  opacity: 1;
  animation: heartbeat 1s ease forwards;
}
```

**When to use.** Like/save confirmations, health apps, anywhere a "double beat" reads naturally.

---

### 15. Jello

A jello wobble — decaying skew on both axes, like a plate of gelatin settling.

```css
@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg); }
  15%      { transform: skewX(-12.5deg) skewY(-12.5deg); }
  30%      { transform: skewX(6.25deg) skewY(6.25deg); }
  45%      { transform: skewX(-3.125deg) skewY(-3.125deg); }
  60%      { transform: skewX(1.5625deg) skewY(1.5625deg); }
  75%      { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
}

.overlay-jello .modal {
  transform: scale(0);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-jello.open .modal {
  opacity: 1;
  animation: jello 1s ease forwards;
}
```

**When to use.** Comedy-forward confirmations, easter eggs, playful products. Too bouncy for serious dialogs.

---

### 16. Zoom Rotate

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

**When to use.** Celebratory dialogs, onboarding steps, product announcements. The rotation adds personality to what would otherwise be a plain zoom.

---

### 17. Zoom From Corner

The modal zooms out from the top-left corner — a combined `scale(0)` and `translate(-100%, -100%)`.

```css
.overlay-zoom-corner .modal {
  transform: scale(0) translate(-100%, -100%);
  transform-origin: top left;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-zoom-corner.open .modal {
  transform: scale(1) translate(0, 0);
  opacity: 1;
}
```

**When to use.** Tooltips that expand from a corner icon, corner-anchored popovers, anything where the origin corner is visually obvious.

---

### 18. Rotate In Down Left

The modal rotates in from the bottom-left corner with `rotate(-90deg) translateY(100%)`.

```css
.overlay-rotate-down-left .modal {
  transform-origin: left bottom;
  transform: rotate(-90deg) translateY(100%);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-rotate-down-left.open .modal {
  transform: rotate(0deg) translateY(0);
  opacity: 1;
}
```

**When to use.** A pivot from a corner trigger — e.g. a card that lifts open from a corner anchor. Reads as a hinge rather than a slide.

---

### 19. Rotate In Down Right

Mirror of Rotate In Down Left — rotates in from the bottom-right.

```css
.overlay-rotate-down-right .modal {
  transform-origin: right bottom;
  transform: rotate(90deg) translateY(100%);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-rotate-down-right.open .modal {
  transform: rotate(0deg) translateY(0);
  opacity: 1;
}
```

**When to use.** Same as effect 18 in RTL or with a right-anchored trigger.

---

### 20. Diagonal Top Left

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

**When to use.** Notifications, chat bubbles, anything anchored to the top-left of the screen. The diagonal makes the origin unambiguous.

---

### 21. Diagonal Top Right

Mirror of Diagonal Top Left — flies in from the top-right corner.

```css
.overlay-diagonal-top-right .modal {
  transform: translate3d(200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-top-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Top-right notifications, account menus, anything triggered from the upper-right region of the interface.

---

### 22. Diagonal Bottom Left

Flies in from the bottom-left corner.

```css
.overlay-diagonal-bottom-left .modal {
  transform: translate3d(-200%, -200%, 0) rotate(-45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Bottom-left anchored interactions, secondary dialogs, assistive popups positioned near a trigger.

---

### 23. Diagonal Bottom Right

Flies in from the bottom-right corner.

```css
.overlay-diagonal-bottom-right .modal {
  transform: translate3d(200%, 200%, 0) rotate(45deg);
  transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.overlay-diagonal-bottom-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg);
}
```

**When to use.** Chat widgets, support bubbles, corner-anchored overlays typically triggered from the lower-right.

---

### 24. Origami L → R

The modal unfolds from the top-left corner with a skew, like paper being opened from a crease.

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

**When to use.** Creative tools, editorial pages, playful products. The skew gives the effect character — it does not look like a stock animation.

---

### 25. Origami R → L

The mirror of effect 24 — unfolds from the top-right corner.

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

**When to use.** Same as effect 24, mirrored. Useful for RTL interfaces or when the modal is opened from the right side of the layout.

---

### 26. Skew Fade

The modal slides in skewed at 40° and half-scale, then straightens and fades up.

```css
.overlay-skew .modal {
  transform: skewX(40deg) scale(0.5);
  opacity: 0;
  transition:
    transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.6s ease;
}

.overlay-skew.open .modal {
  transform: skewX(0deg) scale(1);
  opacity: 1;
}
```

**When to use.** Editorial modals with a dynamic tilt, feature reveals, cards that should feel "thrown into view".

---

### 27. Light Speed In

A light-speed entry — the modal races in from the right with a heavy `skewX(-30deg)`.

```css
.overlay-light-speed .modal {
  transform: translate3d(100%, 0, 0) skewX(-30deg);
  opacity: 0;
  transition:
    transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.6s ease;
}

.overlay-light-speed.open .modal {
  transform: translate3d(0, 0, 0) skewX(0deg);
  opacity: 1;
}
```

**When to use.** Fast-response dialogs, "quick action" panels, anything that should feel like it *arrived at speed*. Pairs well with a flash or a swipe.

---

### 28. Bounce

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

**When to use.** Attention-grabbing alerts, cookie banners, promotional modals. Loud by design — avoid for utility dialogs.

---

### 29. Bounce In Down

A keyframed bounce from above — the modal falls, overshoots, and settles.

```css
@keyframes bounceInDown {
  0%   { transform: translateY(-300px); opacity: 0; }
  60%  { transform: translateY(25px);   opacity: 1; }
  75%  { transform: translateY(-10px);  opacity: 1; }
  90%  { transform: translateY(5px);    opacity: 1; }
  100% { transform: translateY(0);      opacity: 1; }
}

.overlay-bounce-down .modal {
  transform: translateY(-300px);
  opacity: 0;
}

.overlay-bounce-down.open .modal {
  opacity: 1;
  animation: bounceInDown 0.9s ease forwards;
}
```

**When to use.** Dropdown-like dialogs from a header, notification banners, toast messages that should land softly.

---

### 30. Bounce In Up

Mirror of Bounce In Down — the modal bounces up from below.

```css
@keyframes bounceInUp {
  0%   { transform: translateY(300px);  opacity: 0; }
  60%  { transform: translateY(-25px);  opacity: 1; }
  75%  { transform: translateY(10px);   opacity: 1; }
  90%  { transform: translateY(-5px);   opacity: 1; }
  100% { transform: translateY(0);      opacity: 1; }
}

.overlay-bounce-up .modal {
  transform: translateY(300px);
  opacity: 0;
}

.overlay-bounce-up.open .modal {
  opacity: 1;
  animation: bounceInUp 0.9s ease forwards;
}
```

**When to use.** Action sheets, mobile dialogs, anything that should feel like it hopped into view from below.

---

### 31. Perspective 3D

The modal approaches from far away, with a slight forward tilt that straightens as it lands.

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

**When to use.** Hero dialogs, onboarding, anything that deserves undivided attention. Reads as the modal *approaching the viewer* from depth.

---

### 32. Convex

The modal begins as a small round bubble, inflates into a card, and gains a relief shadow — like a balloon expanding into shape.

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

**When to use.** Product cards, feature highlights, "reveal" interactions. Softer than Spring, more organic than Zoom — the border-radius morph is the signature.

---

### 33. Flip X

The modal starts turned away, facing the viewer from behind, and rotates forward around the horizontal axis.

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

**When to use.** Card-detail views, flip-to-reveal interactions. Best when the triggering element has a flip metaphor of its own.

---

### 34. Flip Y → Scale

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

**When to use.** Product previews, image cards, anything where a horizontal flip connects the trigger to the content.

---

### 35. Flip Y ← Scale

The mirror of effect 34. The flip travels right to left.

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

**When to use.** Mirrored pairing with effect 34 — useful when you have two triggers on opposite sides of a layout that should feel distinct.

---

### 36. Flip Mix

A double flip: both axes at once, with scale. The most theatrical of the collection.

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

**When to use.** Feature reveals, celebratory dialogs, anywhere the modal is the centre of attention and can afford to be dramatic.

---

### 37. Unfold Bottom

The modal unfolds vertically with `scaleY(0)` from the top edge — reads as unfolding downward.

```css
.overlay-unfold-bottom .modal {
  transform: scaleY(0);
  transform-origin: top center;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-unfold-bottom.open .modal {
  transform: scaleY(1);
  opacity: 1;
}
```

**When to use.** Menus, dropdowns, panels that visually "extend" downward from a trigger above. Pairs naturally with a caret icon.

---

### 38. Unfold Up

The modal swings upward from the bottom edge, hinged at `transform-origin: bottom center`.

```css
.overlay-unfold-up .modal {
  transform-origin: bottom center;
  transform: rotateX(100deg);
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    opacity 0.5s ease;
}

.overlay-unfold-up.open .modal {
  transform: rotateX(0deg);
  opacity: 1;
}
```

**When to use.** Bottom action sheets with a hinge metaphor, tool palettes that rise from a toolbar.

---

### 39. Unfold Horizontal

The modal unfolds horizontally with `scaleX(0)` from the left edge.

```css
.overlay-unfold-horizontal .modal {
  transform: scaleX(0);
  transform-origin: left center;
  opacity: 0;
  transition:
    transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.5s ease;
}

.overlay-unfold-horizontal.open .modal {
  transform: scaleX(1);
  opacity: 1;
}
```

**When to use.** Side panels that "extend" from a left anchor, editorial reveals, progress cards.

---

### 40. Blur In

The modal fades in from a blur — starts at `blur(20px)` and `scale(1.2)`, resolves to sharp at rest.

```css
.overlay-blur .modal {
  filter: blur(20px);
  transform: scale(1.2);
  opacity: 0;
  transition:
    filter 0.8s ease,
    transform 0.8s ease,
    opacity 0.6s ease;
}

.overlay-blur.open .modal {
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
}
```

**When to use.** A "reveal from softness" beat — dream sequences, cinematic product intros, anything where the modal should resolve into focus. `filter: blur()` on a large element is expensive on low-end mobiles — test on target devices.

---

## Choosing an effect

Use the family, not the individual effect, as the first filter.

| If the trigger is...          | Reach for...                  |
|-------------------------------|-------------------------------|
| A text-heavy link or heading  | Roll family (1–4)             |
| A side panel or drawer        | Slide + Roll (5–8)            |
| A success or confirmation     | Spring (12), Zoom Rotate (16) |
| A hero action                 | Perspective 3D (31)           |
| A card or editor              | Origami (24, 25), Convex (32) |
| An alert or banner            | Bounce (28), Rubber Band (13) |
| Anchored to a screen corner   | Diagonal (20–23)              |
| A flip-to-reveal trigger      | Flip (33–36)                  |
| A spinning arrival            | Roll In (10, 11)              |
| A panel that extends          | Unfold (37, 39)               |
| A hinge above or below        | Unfold Up (38)                |
| A playful / mascot moment     | Heartbeat (14), Jello (15)    |
| A pivot from a corner         | Rotate In Down (18, 19)       |
| A "reveal from softness" beat | Blur In (40)                  |

---

## Using the CSS library

The repository also ships the effects as a standalone CSS library, independent
of the demo app. Three files are provided:

| File                    | Purpose                                     |
|-------------------------|---------------------------------------------|
| `modal-effects.css`     | Unminified — for development and inspection |
| `modal-effects.min.css` | Minified — for production                   |
| `modal-effects.scss`    | SCSS source — for customization             |

### Include

Link the minified build directly from the repository:

```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/alekstar79/modal-effects/main/modal-effects.min.css">
```

Or download the file and link it locally:

```html
<link rel="stylesheet" href="/path/to/modal-effects.min.css">
```

### Markup

Wrap the modal in `.overlay` with the effect class. Inside — `.modal` with any
content.

```html
<button id="open">Open</button>

<div class="overlay overlay-spring" id="modal">
  <div class="modal">
    <h2>Title</h2>
    <p>Content</p>
    <button id="close">Close</button>
  </div>
</div>
```

### Behavior

Toggle the `open` class on the overlay. Nothing else is required.

```js
const overlay = document.getElementById('modal')

document.getElementById('open').addEventListener('click', () => {
  overlay.classList.add('open')
})

document.getElementById('close').addEventListener('click', () => {
  overlay.classList.remove('open')
})

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) overlay.classList.remove('open')
})
```

### Layer priority

The library lives in its own CSS layer, `modal-effects`, so you can control
whether it wins or loses against your own styles. Declare the order before
importing:

```css
@layer reset, base, modal-effects, components, utilities;
@import 'modal-effects.css';
```

Layers declared later win. Anything unlayered always wins over any layer, so
your project-level overrides do not need `!important`.

### Customization

The SCSS source exposes the library's defaults as variables. Override them
before compiling:

```scss
@use 'modal-effects' with (
  $overlay-bg:    rgba(0, 0, 0, 0.8),
  $modal-radius:  12px,
  $modal-padding: 24px
);
```

Available variables: `$overlay-bg`, `$overlay-padding`, `$overlay-z`,
`$overlay-fade`, `$modal-bg`, `$modal-radius`, `$modal-max-width`,
`$modal-padding`, `$modal-shadow`, `$ease-back`, `$ease-spring`,
`$ease-swing`, `$ease-roll`.

Compile the SCSS with the standard `sass` CLI:

```bash
sass modal-effects.scss modal-effects.css --style=expanded --no-source-map
sass modal-effects.scss modal-effects.min.css --style=compressed --no-source-map
```

---

## Accessibility

- Each modal is a `role="dialog"` with `aria-modal="true"` and
  `aria-labelledby` pointing at its heading.
- Tab is trapped inside the open modal. Escape closes it and returns focus to
  the trigger.
- All effects respect `prefers-reduced-motion: reduce` — animations are
  skipped for users who ask for less motion.
- Motion is decorative. Nothing in the interface depends on the animation
  playing.

---

## Browser support

Modern evergreen browsers: Chrome, Edge, Firefox, Safari. The project uses
`@layer`, `color-mix()`, `:focus-visible`, and ES modules.

---

## License

MIT.
