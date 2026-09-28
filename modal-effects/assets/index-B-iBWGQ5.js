(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={Top:{cls:`overlay-top`,css:`/* Roll: Top → Bottom */
.overlay-top { perspective: 800px }

.overlay-top .modal {
  transform: rotateX(90deg)
  transform-origin: top center
  transition: transform .7s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-top.open .modal {
  transform: rotateX(0deg)
}`},Left:{cls:`overlay-left`,css:`/* Roll: Left → Right */
.overlay-left { perspective: 1000px }

.overlay-left .modal {
  transform: rotateY(90deg)
  transform-origin: left center
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-left.open .modal {
  transform: rotateY(0deg)
}`},Bottom:{cls:`overlay-bottom`,css:`/* Roll: Bottom → Top */
.overlay-bottom { perspective: 800px }

.overlay-bottom .modal {
  transform: rotateX(-90deg)
  transform-origin: bottom center
  transition: transform .7s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-bottom.open .modal {
  transform: rotateX(0deg)
}`},Right:{cls:`overlay-right`,css:`/* Roll: Right → Left */
.overlay-right { perspective: 1000px }

.overlay-right .modal {
  transform: rotateY(-90deg)
  transform-origin: right center
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-right.open .modal {
  transform: rotateY(0deg)
}`},SlideLeft:{cls:`overlay-slide-left`,css:`/* Slide + Roll: L → R */
.overlay-slide-left { perspective: 1000px }

.overlay-slide-left .modal {
  transform: translate3d(-150%, 0, 0) rotateY(90deg)
  transform-origin: left center
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-slide-left.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg)
}`},SlideRight:{cls:`overlay-slide-right`,css:`/* Slide + Roll: R → L */
.overlay-slide-right { perspective: 1000px }

.overlay-slide-right .modal {
  transform: translate3d(150%, 0, 0) rotateY(-90deg)
  transform-origin: right center
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-slide-right.open .modal {
  transform: translate3d(0, 0, 0) rotateY(0deg)
}`},SlideTop:{cls:`overlay-slide-top`,css:`/* Slide + Roll: T → B */
.overlay-slide-top { perspective: 800px }

.overlay-slide-top .modal {
  transform: translate3d(0, -150%, 0) rotateX(90deg)
  transform-origin: top center
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-slide-top.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg)
}`},SlideBottom:{cls:`overlay-slide-bottom`,css:`/* Slide + Roll: B → T */
.overlay-slide-bottom { perspective: 800px }

.overlay-slide-bottom .modal {
  transform: translate3d(0, 150%, 0) rotateX(-90deg)
  transform-origin: bottom center
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-slide-bottom.open .modal {
  transform: translate3d(0, 0, 0) rotateX(0deg)
}`},SlideRotate:{cls:`overlay-slide-rotate`,css:`/* Slide + Rotate */
.overlay-slide-rotate .modal {
  transform: translate3d(0, 100%, 0) rotate(15deg)
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .6s ease
}

.overlay-slide-rotate.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
  opacity: 1
}`},RollInLeft:{cls:`overlay-roll-left`,css:`/* Roll In: Left */
.overlay-roll-left .modal {
  transform: translate3d(-120%, 0, 0) rotate(-720deg)
  opacity: 0
  transition:
    transform 1s cubic-bezier(.25, .46, .45, .94),
    opacity .6s ease
}

.overlay-roll-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
  opacity: 1
}`},RollInRight:{cls:`overlay-roll-right`,css:`/* Roll In: Right */
.overlay-roll-right .modal {
  transform: translate3d(120%, 0, 0) rotate(720deg)
  opacity: 0
  transition:
    transform 1s cubic-bezier(.25, .46, .45, .94),
    opacity .6s ease
}

.overlay-roll-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
  opacity: 1
}`},Spring:{cls:`overlay-spring`,css:`/* Spring */
.overlay-spring .modal {
  transform: scale(0)
  transition: transform .8s cubic-bezier(.68, -.55, .27, 1.55)
}

.overlay-spring.open .modal {
  transform: scale(1)
}`},RubberBand:{cls:`overlay-rubber`,css:`/* Rubber Band */
@keyframes rubberBand {
  0%   { transform: scale(1) }
  30%  { transform: scaleX(1.25) scaleY(.75) }
  40%  { transform: scaleX(.75)  scaleY(1.25) }
  50%  { transform: scaleX(1.15) scaleY(.85) }
  65%  { transform: scaleX(.95)  scaleY(1.05) }
  75%  { transform: scaleX(1.05) scaleY(.95) }
  100% { transform: scale(1) }
}

.overlay-rubber .modal {
  transform: scale(0)
  opacity: 0
  transition: opacity .3s ease
}

.overlay-rubber.open .modal {
  opacity: 1
  animation: rubberBand .9s ease forwards
}`},Heartbeat:{cls:`overlay-heartbeat`,css:`/* Heartbeat */
@keyframes heartbeat {
  0%   { transform: scale(1) }
  14%  { transform: scale(1.15) }
  28%  { transform: scale(1) }
  42%  { transform: scale(1.15) }
  70%  { transform: scale(1) }
  100% { transform: scale(1) }
}

.overlay-heartbeat .modal {
  transform: scale(0)
  opacity: 0
  transition: opacity .3s ease
}

.overlay-heartbeat.open .modal {
  opacity: 1
  animation: heartbeat 1s ease forwards
}`},Jello:{cls:`overlay-jello`,css:`/* Jello */
@keyframes jello {
  0%, 100% { transform: skewX(0deg) skewY(0deg) }
  15%      { transform: skewX(-12.5deg) skewY(-12.5deg) }
  30%      { transform: skewX(6.25deg)  skewY(6.25deg) }
  45%      { transform: skewX(-3.125deg) skewY(-3.125deg) }
  60%      { transform: skewX(1.5625deg) skewY(1.5625deg) }
  75%      { transform: skewX(-.78125deg) skewY(-.78125deg) }
}

.overlay-jello .modal {
  transform: scale(0)
  opacity: 0
  transition: opacity .3s ease
}

.overlay-jello.open .modal {
  opacity: 1
  animation: jello 1s ease forwards
}`},ZoomRotate:{cls:`overlay-zoomrotate`,css:`/* Zoom + Rotate */
.overlay-zoomrotate .modal {
  transform: scale(0) rotate(45deg)
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-zoomrotate.open .modal {
  transform: scale(1) rotate(0deg)
}`},ZoomCorner:{cls:`overlay-zoom-corner`,css:`/* Zoom From Corner */
.overlay-zoom-corner .modal {
  transform: scale(0) translate(-100%, -100%)
  transform-origin: top left
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .5s ease
}

.overlay-zoom-corner.open .modal {
  transform: scale(1) translate(0, 0)
  opacity: 1
}`},RotateDownLeft:{cls:`overlay-rotate-down-left`,css:`/* Rotate In: Down Left */
.overlay-rotate-down-left .modal {
  transform-origin: left bottom
  transform: rotate(-90deg) translateY(100%)
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .6s ease
}

.overlay-rotate-down-left.open .modal {
  transform: rotate(0deg) translateY(0)
  opacity: 1
}`},RotateDownRight:{cls:`overlay-rotate-down-right`,css:`/* Rotate In: Down Right */
.overlay-rotate-down-right .modal {
  transform-origin: right bottom
  transform: rotate(90deg) translateY(100%)
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .6s ease
}

.overlay-rotate-down-right.open .modal {
  transform: rotate(0deg) translateY(0)
  opacity: 1
}`},Diagonal:{cls:`overlay-diagonal`,css:`/* Diagonal: Top Left */
.overlay-diagonal .modal {
  transform: translate3d(-200%, 200%, 0) rotate(45deg)
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-diagonal.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
}`},DiagonalTopRight:{cls:`overlay-diagonal-top-right`,css:`/* Diagonal: Top Right */
.overlay-diagonal-top-right .modal {
  transform: translate3d(200%, -200%, 0) rotate(-45deg)
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-diagonal-top-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
}`},DiagonalBottomLeft:{cls:`overlay-diagonal-bottom-left`,css:`/* Diagonal: Bottom Left */
.overlay-diagonal-bottom-left .modal {
  transform: translate3d(-200%, -200%, 0) rotate(-45deg)
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-diagonal-bottom-left.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
}`},DiagonalBottomRight:{cls:`overlay-diagonal-bottom-right`,css:`/* Diagonal: Bottom Right */
.overlay-diagonal-bottom-right .modal {
  transform: translate3d(200%, 200%, 0) rotate(45deg)
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-diagonal-bottom-right.open .modal {
  transform: translate3d(0, 0, 0) rotate(0deg)
}`},Origami:{cls:`overlay-origami`,css:`/* Origami: L → R */
.overlay-origami .modal {
  transform: rotate(-90deg) scale(.3) skewX(20deg)
  transform-origin: top left
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-origami.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg)
}`},OrigamiRight:{cls:`overlay-origami-right`,css:`/* Origami: R → L */
.overlay-origami-right .modal {
  transform: rotate(90deg) scale(.3) skewX(-20deg)
  transform-origin: top right
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-origami-right.open .modal {
  transform: rotate(0deg) scale(1) skewX(0deg)
}`},SkewFade:{cls:`overlay-skew`,css:`/* Skew Fade */
.overlay-skew .modal {
  transform: skewX(40deg) scale(.5)
  opacity: 0
  transition:
    transform .7s cubic-bezier(.34, 1.56, .64, 1),
    opacity .6s ease
}

.overlay-skew.open .modal {
  transform: skewX(0deg) scale(1)
  opacity: 1
}`},LightSpeed:{cls:`overlay-light-speed`,css:`/* Light Speed In */
.overlay-light-speed .modal {
  transform: translate3d(100%, 0, 0) skewX(-30deg)
  opacity: 0
  transition:
    transform .7s cubic-bezier(.25, .46, .45, .94),
    opacity .6s ease
}

.overlay-light-speed.open .modal {
  transform: translate3d(0, 0, 0) skewX(0deg)
  opacity: 1
}`},Bounce:{cls:`overlay-bounce`,css:`/* Bounce */
@keyframes bounceIn {
  0%   { transform: scale(.3); opacity: 0 }
  50%  { transform: scale(1.1) }
  70%  { transform: scale(.9) }
  100% { transform: scale(1); opacity: 1 }
}

.overlay-bounce .modal {
  transform: scale(.3)
  opacity: 0
}

.overlay-bounce.open .modal {
  animation: bounceIn .8s cubic-bezier(.68, -.55, .27, 1.55) forwards
}`},BounceDown:{cls:`overlay-bounce-down`,css:`/* Bounce In Down */
@keyframes bounceInDown {
  0%   { transform: translateY(-300px); opacity: 0 }
  60%  { transform: translateY(25px);   opacity: 1 }
  75%  { transform: translateY(-10px);  opacity: 1 }
  90%  { transform: translateY(5px);    opacity: 1 }
  100% { transform: translateY(0);      opacity: 1 }
}

.overlay-bounce-down .modal {
  transform: translateY(-300px)
  opacity: 0
}

.overlay-bounce-down.open .modal {
  opacity: 1
  animation: bounceInDown .9s ease forwards
}`},BounceUp:{cls:`overlay-bounce-up`,css:`/* Bounce In Up */
@keyframes bounceInUp {
  0%   { transform: translateY(300px);  opacity: 0 }
  60%  { transform: translateY(-25px);  opacity: 1 }
  75%  { transform: translateY(10px);   opacity: 1 }
  90%  { transform: translateY(-5px);   opacity: 1 }
  100% { transform: translateY(0);      opacity: 1 }
}

.overlay-bounce-up .modal {
  transform: translateY(300px)
  opacity: 0
}

.overlay-bounce-up.open .modal {
  opacity: 1
  animation: bounceInUp .9s ease forwards
}`},Perspective:{cls:`overlay-perspective`,css:`/* Perspective 3D */
.overlay-perspective { perspective: 600px }

.overlay-perspective .modal {
  transform: translateZ(-300px) rotateX(30deg)
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-perspective.open .modal {
  transform: translateZ(0) rotateX(0deg)
}`},Convex:{cls:`overlay-convex`,css:`/* Convex */
.overlay-convex { perspective: 800px }

.overlay-convex .modal {
  transform: scale(.3) rotateX(20deg) rotateY(20deg)
  border-radius: 50%
  opacity: 0
  box-shadow:
    0 30px 60px rgba(0, 0, 0, .5),
    inset 0 -20px 40px rgba(0, 0, 0, .1),
    inset 0  20px 40px rgba(255, 255, 255, .3)
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    border-radius .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .6s ease,
    box-shadow .8s ease
}

.overlay-convex.open .modal {
  transform: scale(1) rotateX(0deg) rotateY(0deg)
  border-radius: 24px
  opacity: 1
  box-shadow:
    0 30px 60px rgba(0, 0, 0, .5),
    inset 0 -10px 30px rgba(0, 0, 0, .05),
    inset 0  10px 30px rgba(255, 255, 255, .2)
}`},FlipX:{cls:`overlay-flip-x`,css:`/* Flip X */
.overlay-flip-x { perspective: 800px }

.overlay-flip-x .modal {
  transform: rotateX(180deg)
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-flip-x.open .modal {
  transform: rotateX(0deg)
}`},FlipYS:{cls:`overlay-flip-ys`,css:`/* Flip Y + Scale (L → R) */
.overlay-flip-ys { perspective: 800px }

.overlay-flip-ys .modal {
  transform: rotateY(180deg) scale(.3)
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-flip-ys.open .modal {
  transform: rotateY(0deg) scale(1)
}`},FlipYSReverse:{cls:`overlay-flip-ys-reverse`,css:`/* Flip Y + Scale (R → L) */
.overlay-flip-ys-reverse { perspective: 800px }

.overlay-flip-ys-reverse .modal {
  transform: rotateY(-180deg) scale(.3)
  transition: transform .8s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-flip-ys-reverse.open .modal {
  transform: rotateY(0deg) scale(1)
}`},FlipMix:{cls:`overlay-flip-mix`,css:`/* Flip Mix */
.overlay-flip-mix { perspective: 800px }

.overlay-flip-mix .modal {
  transform: rotateX(180deg) rotateY(180deg) scale(.3)
  transition: transform .9s cubic-bezier(.34, 1.56, .64, 1)
}

.overlay-flip-mix.open .modal {
  transform: rotateX(0deg) rotateY(0deg) scale(1)
}`},UnfoldBottom:{cls:`overlay-unfold-bottom`,css:`/* Unfold: Bottom */
.overlay-unfold-bottom .modal {
  transform: scaleY(0)
  transform-origin: top center
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .5s ease
}

.overlay-unfold-bottom.open .modal {
  transform: scaleY(1)
  opacity: 1
}`},UnfoldUp:{cls:`overlay-unfold-up`,css:`/* Unfold: Up */
.overlay-unfold-up .modal {
  transform-origin: bottom center
  transform: rotateX(100deg)
  opacity: 0
  transition:
    transform .8s cubic-bezier(.175, .885, .32, 1.275),
    opacity .5s ease
}

.overlay-unfold-up.open .modal {
  transform: rotateX(0deg)
  opacity: 1
}`},UnfoldHorizontal:{cls:`overlay-unfold-horizontal`,css:`/* Unfold: Horizontal */
.overlay-unfold-horizontal .modal {
  transform: scaleX(0)
  transform-origin: left center
  opacity: 0
  transition:
    transform .8s cubic-bezier(.34, 1.56, .64, 1),
    opacity .5s ease
}

.overlay-unfold-horizontal.open .modal {
  transform: scaleX(1)
  opacity: 1
}`},BlurIn:{cls:`overlay-blur`,css:`/* Blur In */
.overlay-blur .modal {
  filter: blur(20px)
  transform: scale(1.2)
  opacity: 0
  transition:
    filter .8s ease,
    transform .8s ease,
    opacity .6s ease
}

.overlay-blur.open .modal {
  filter: blur(0)
  transform: scale(1)
  opacity: 1
}`}},t=`/* Base styles */
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

`,n=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),r=/(\/\*[\s\S]*?\*\/)|(@[\w-]+)|("[^"]*"|'[^']*')|([.#][a-zA-Z_][\w-]*)|([a-zA-Z-]+)(?=\s*:)|(-?\d*\.?\d+(?:dvh|vh|vw|vmin|vmax|rem|deg|px|em|ms|s|fr|%)?)/g,i=e=>n(e).replace(r,(e,t,n,r,i,a,o)=>t?`<span class="tok-comment">${e}</span>`:n?`<span class="tok-atrule">${e}</span>`:r?`<span class="tok-string">${e}</span>`:i?`<span class="tok-selector">${e}</span>`:a?`<span class="tok-property">${e}</span>`:o?`<span class="tok-number">${e}</span>`:e),a=async e=>{if(!navigator.clipboard)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}},o=`<svg class="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,s=`<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,c=new WeakMap,l=async(e,t)=>{let n=e.querySelector(`.copy-label`),r=await a(t),i=c.get(e);i&&clearTimeout(i),e.classList.toggle(`copied`,r),n&&(n.textContent=r?`Copied!`:`Failed`),e.setAttribute(`aria-label`,r?`Copied to clipboard`:`Copy failed`),c.set(e,setTimeout(()=>{e.classList.remove(`copied`),n&&(n.textContent=`Copy`),e.setAttribute(`aria-label`,`Copy CSS snippet to clipboard`)},1500))},u=e=>{let n=t+e,r=document.createElement(`div`);r.className=`modal-code-wrapper`,r.innerHTML=`
    <div class="modal-code-header">
      <span class="modal-code-title">CSS</span>
      <button type="button" class="copy-btn" aria-label="Copy CSS snippet to clipboard">
        ${o}${s}
        <span class="copy-label" aria-live="polite">Copy</span>
      </button>
    </div>
    <pre class="modal-code" tabindex="0"><code>${i(n)}</code></pre>
  `;let a=r.querySelector(`.copy-btn`);return a?.addEventListener(`click`,()=>{l(a,n)}),r},d=class{overlay;openBtn;closeBtn;get isOpen(){return this.overlay.classList.contains(`open`)}get root(){return this.overlay}constructor(e,t={}){let{cls:n,css:r}=t,i=document.getElementById(`overlay${e}`),a=document.getElementById(`openModal${e}`),o=document.getElementById(`closeModal${e}`);if(!i||!a||!o)throw Error(`Modal "${e}": missing required elements`);this.overlay=i,this.openBtn=a,this.closeBtn=o,n&&i.classList.add(n),i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-modal`,`true`);let s=i.querySelector(`.modal > h2`);s&&(s.id||=`modal-title-${e}`,i.setAttribute(`aria-labelledby`,s.id)),r&&i.querySelector(`.modal`)?.append(u(r)),a.addEventListener(`click`,this.open),o.addEventListener(`click`,this.close),i.addEventListener(`click`,this.onBackdrop)}open=()=>{this.overlay.classList.add(`open`),this.closeBtn.focus()};close=()=>{this.overlay.classList.remove(`open`),this.openBtn.focus()};onBackdrop=e=>{e.target===this.overlay&&this.close()}},f=`modal-effects-lang`,p=[`en`,`ru`],m=`en`,h={en:{"page.title":`Modal Effects`,"modal.close":`Close`,"top.title":`Unrolled Message`,"top.desc":`This modal opens like a <strong>roll</strong> that unfolds from the top. The effect is achieved using <code>transform: rotateX()</code>.`,"left.title":`Unrolled Scroll`,"left.desc":`This modal opens from <strong>left to right</strong> like an unfolding parchment. The effect uses <code>rotateY()</code>.`,"bottom.title":`Reverse Roll`,"bottom.desc":`This modal opens like a <strong>roll</strong> that unfolds from the bottom. The effect uses <code>rotateX(-90deg)</code>.`,"right.title":`Reverse Roll`,"right.desc":`This modal opens from <strong>right to left</strong> like an unfolding parchment. The effect uses <code>rotateY(-90deg)</code>.`,"slideLeft.title":`Slide Roll L → R`,"slideLeft.desc":`This modal opens by <strong>sliding from the left</strong> while unfolding. Combines <code>translate3d(-150%, 0, 0)</code> and <code>rotateY(90deg)</code>.`,"slideRight.title":`Slide Roll R → L`,"slideRight.desc":`This modal opens by <strong>sliding from the right</strong> while unfolding. Combines <code>translate3d(150%, 0, 0)</code> and <code>rotateY(-90deg)</code>.`,"slideTop.title":`Slide Roll T → B`,"slideTop.desc":`This modal opens by <strong>sliding from the top</strong> while unfolding. Combines <code>translate3d(0, -150%, 0)</code> and <code>rotateX(90deg)</code>.`,"slideBottom.title":`Slide Roll B → T`,"slideBottom.desc":`This modal opens by <strong>sliding from the bottom</strong> while unfolding. Combines <code>translate3d(0, 150%, 0)</code> and <code>rotateX(-90deg)</code>.`,"slideRotate.title":`Slide + Rotate`,"slideRotate.desc":`The modal <strong>rises from below</strong> while tilting through <code>rotate(15deg)</code> into place.`,"rollInLeft.title":`Roll In Left`,"rollInLeft.desc":`The modal <strong>rolls in from the left</strong> with a full <code>rotate(-720deg)</code> spin — reads like a wheel arriving.`,"rollInRight.title":`Roll In Right`,"rollInRight.desc":`Mirror of Roll In Left — a <strong>720° spin from the right</strong>.`,"spring.title":`Spring`,"spring.desc":`<strong>Spring</strong> effect with a bounce! The modal starts at <code>scale(0)</code> and bounces to <code>scale(1)</code> with a <code>cubic-bezier(0.68, -0.55, 0.27, 1.55)</code>.`,"rubberBand.title":`Rubber Band`,"rubberBand.desc":`A keyframed <strong>rubber-band</strong> pulse: the modal stretches horizontally, compresses vertically, and settles.`,"heartbeat.title":`Heartbeat`,"heartbeat.desc":`A <strong>heartbeat</strong> pulse — the modal beats twice with a soft scale and steadies.`,"jello.title":`Jello`,"jello.desc":`A <strong>jello wobble</strong> — decaying skew on both axes, like a plate of gelatin settling.`,"zoomRotate.title":`Zoom Rotate`,"zoomRotate.desc":`<strong>Zoom while rotating</strong> effect! The modal goes from <code>scale(0) rotate(45deg)</code> to <code>scale(1) rotate(0deg)</code>.`,"zoomCorner.title":`Zoom From Corner`,"zoomCorner.desc":`The modal <strong>zooms out from the top-left corner</strong> — a combined <code>scale(0)</code> and <code>translate(-100%, -100%)</code>.`,"rotateDownLeft.title":`Rotate In Down Left`,"rotateDownLeft.desc":`The modal <strong>rotates in from the bottom-left corner</strong> with <code>rotate(-90deg) translateY(100%)</code>.`,"rotateDownRight.title":`Rotate In Down Right`,"rotateDownRight.desc":`Mirror of Rotate In Down Left — <strong>rotates in from the bottom-right</strong>.`,"diagonal.title":`Diagonal Top Left`,"diagonal.desc":`<strong>Diagonal slide from top left</strong> effect! The modal slides from <code>translate3d(-200%, -200%, 0) rotate(-45deg)</code> to center.`,"diagonalTopRight.title":`Diagonal Top Right`,"diagonalTopRight.desc":`<strong>Diagonal slide from top right</strong> effect! The modal slides from <code>translate3d(200%, -200%, 0) rotate(-45deg)</code> to center.`,"diagonalBottomLeft.title":`Diagonal Bottom Left`,"diagonalBottomLeft.desc":`<strong>Diagonal slide from bottom left</strong> effect! The modal slides from <code>translate3d(-200%, -200%, 0) rotate(45deg)</code> to center.`,"diagonalBottomRight.title":`Diagonal Bottom Right`,"diagonalBottomRight.desc":`<strong>Diagonal slide from bottom right</strong> effect! The modal slides from <code>translate3d(200%, 200%, 0) rotate(45deg)</code> to center.`,"origami.title":`Origami L → R`,"origami.desc":`<strong>Diagonal unfolding from the left</strong> effect! The modal unfolds from <code>rotate(-90deg) scale(0.3) skewX(20deg)</code> to center.`,"origamiRight.title":`Origami R → L`,"origamiRight.desc":`<strong>Diagonal unfolding from the right</strong> effect! The modal unfolds from <code>rotate(90deg) scale(0.3) skewX(-20deg)</code> to center.`,"skewFade.title":`Skew Fade`,"skewFade.desc":`The modal slides in <strong>skewed at 40°</strong> and half-scale, then straightens and fades up.`,"lightSpeed.title":`Light Speed In`,"lightSpeed.desc":`A <strong>light-speed entry</strong> — the modal races in from the right with a heavy <code>skewX(-30deg)</code>.`,"bounce.title":`Bounce`,"bounce.desc":`<strong>Bounce</strong> effect! The modal arrives with a <code>bounceIn</code> animation of 0.8s.`,"bounceDown.title":`Bounce In Down`,"bounceDown.desc":`A keyframed <strong>bounce from above</strong> — the modal falls, overshoots, and settles.`,"bounceUp.title":`Bounce In Up`,"bounceUp.desc":`A keyframed <strong>bounce from below</strong> — mirror of Bounce In Down.`,"perspective.title":`3D`,"perspective.desc":`<strong>Depth</strong> effect! The modal comes from far away <code>translateZ(-300px) rotateX(30deg)</code> to the center.`,"convex.title":`Convex`,"convex.desc":`<strong>Convex swelling</strong> effect! The modal starts as a small round bubble and <strong>inflates</strong> like a balloon to reach its final shape with a relief effect.`,"flipX.title":`Flip X`,"flipX.desc":`The modal flips around the X axis with <code>rotateX(180deg)</code>.`,"flipYS.title":`Flip Y → Scale`,"flipYS.desc":`Combines <code>rotateY(180deg)</code> and <code>scale(0.3)</code> for a dynamic effect. The flip goes from <strong>left to right</strong>.`,"flipYSReverse.title":`Flip Y ← Scale`,"flipYSReverse.desc":`Combines <code>rotateY(-180deg)</code> and <code>scale(0.3)</code>. The flip goes from <strong>right to left</strong>.`,"flipMix.title":`Flip Mix`,"flipMix.desc":`<strong>Double flip</strong> effect! The modal flips on both axes with <code>rotateX(180deg) rotateY(180deg) scale(0.3)</code>.`,"unfoldBottom.title":`Unfold Bottom`,"unfoldBottom.desc":`The modal <strong>unfolds vertically</strong> with <code>scaleY(0)</code> from the top edge — reads as unfolding downward.`,"unfoldUp.title":`Unfold Up`,"unfoldUp.desc":`The modal <strong>swings upward</strong> from the bottom edge, hinged at <code>transform-origin: bottom center</code>.`,"unfoldHorizontal.title":`Unfold Horizontal`,"unfoldHorizontal.desc":`The modal <strong>unfolds horizontally</strong> with <code>scaleX(0)</code> from the left edge.`,"blurIn.title":`Blur In`,"blurIn.desc":`The modal <strong>fades in from a blur</strong> — starts at <code>blur(20px)</code> and <code>scale(1.2)</code>, resolves to sharp at rest.`,"howto.title":`How to connect an effect`,"howto.how.title":`How it works`,"howto.how.text":`The effect is pure CSS. JS is only needed to toggle the <code>open</code> class on the overlay. Add it — the browser plays the opening animation. Remove it — the browser plays the closing.`,"howto.connect.title":`How to connect`,"howto.connect.li1":`Open the card of the desired effect.`,"howto.connect.li2":`Click Copy in the top-right corner of the code block.`,"howto.connect.li3":`Paste the copied CSS into your stylesheet.`,"howto.connect.li4":`In HTML, wrap the modal in <code>.overlay</code> with the effect class, and put <code>.modal</code> with content inside.`,"howto.connect.li5":`In JS, toggle the <code>open</code> class on the wrapper.`,"howto.markup.title":`Markup`,"howto.markup.text":`The outer block is <code>.overlay</code> plus the chosen effect class, e.g. <code>overlay-spring</code>. Inside — <code>.modal</code> with any content. Open and close buttons are ordinary <code>&lt;button&gt;</code> with ids.`,"howto.open.title":`Open and close`,"howto.open.text":`All interaction is a single <code>open</code> class on the overlay:`,"howto.open.li1":`Open — <code>overlay.classList.add('open')</code>.`,"howto.open.li2":`Close — <code>overlay.classList.remove('open')</code>.`,"howto.open.li3":`Backdrop click — a listener on <code>overlay</code> checks <code>event.target === overlay</code> and removes the class.`,"howto.open.li4":`Escape — a listener on <code>document</code> checks <code>event.key === 'Escape'</code> and removes the class.`,"howto.code.title":`What is in the card code`,"howto.code.text":`The card CSS is self-contained: it includes both the base overlay styles (positioning, centering, show/hide) and the effect itself. Copy — paste — it works. Nothing else to look for.`,"howto.know.title":`Good to know`,"howto.know.li1":`The effect also works on non-modal blocks: the <code>.overlay-*</code> rules are enough.`,"howto.know.li2":`The <code>open</code> class can be toggled not only on click — on hover, on scroll, on <code>IntersectionObserver</code>.`,"howto.know.li3":`Multiple modals with different effects coexist on one page: <code>.overlay-*</code> classes do not conflict.`,"howto.know.li4":`With <code>prefers-reduced-motion: reduce</code> animations are disabled automatically.`},ru:{"page.title":`Эффекты модальных окон`,"modal.close":`Закрыть`,"top.title":`Развёрнутое сообщение`,"top.desc":`Это модальное окно открывается как <strong>рулон</strong>, который разворачивается сверху. Эффект достигается через <code>transform: rotateX()</code>.`,"left.title":`Развёрнутый свиток`,"left.desc":`Это модальное окно открывается <strong>слева направо</strong>, как разворачивающийся пергамент. Эффект использует <code>rotateY()</code>.`,"bottom.title":`Обратный рулон`,"bottom.desc":`Это модальное окно открывается как <strong>рулон</strong>, который разворачивается снизу. Эффект использует <code>rotateX(-90deg)</code>.`,"right.title":`Обратный рулон`,"right.desc":`Это модальное окно открывается <strong>справа налево</strong>, как разворачивающийся пергамент. Эффект использует <code>rotateY(-90deg)</code>.`,"slideLeft.title":`Скользящий рулон Л → П`,"slideLeft.desc":`Это модальное окно открывается, <strong>скользя слева</strong> и разворачиваясь. Комбинирует <code>translate3d(-150%, 0, 0)</code> и <code>rotateY(90deg)</code>.`,"slideRight.title":`Скользящий рулон П → Л`,"slideRight.desc":`Это модальное окно открывается, <strong>скользя справа</strong> и разворачиваясь. Комбинирует <code>translate3d(150%, 0, 0)</code> и <code>rotateY(-90deg)</code>.`,"slideTop.title":`Скользящий рулон С → Н`,"slideTop.desc":`Это модальное окно открывается, <strong>скользя сверху</strong> и разворачиваясь. Комбинирует <code>translate3d(0, -150%, 0)</code> и <code>rotateX(90deg)</code>.`,"slideBottom.title":`Скользящий рулон Н → С`,"slideBottom.desc":`Это модальное окно открывается, <strong>скользя снизу</strong> и разворачиваясь. Комбинирует <code>translate3d(0, 150%, 0)</code> и <code>rotateX(-90deg)</code>.`,"slideRotate.title":`Выезд с наклоном`,"slideRotate.desc":`Модалка <strong>поднимается снизу</strong>, выравнивая наклон <code>rotate(15deg)</code> на месте.`,"rollInLeft.title":`Вкат слева`,"rollInLeft.desc":`Модалка <strong>вкатывается слева</strong> с полным оборотом <code>rotate(-720deg)</code> — как катящееся колесо.`,"rollInRight.title":`Вкат справа`,"rollInRight.desc":`Зеркало «Вката слева» — <strong>оборот на 720° справа</strong>.`,"spring.title":`Пружина`,"spring.desc":`<strong>Пружинный</strong> эффект с отскоком! Модалка начинается с <code>scale(0)</code> и прыгает к <code>scale(1)</code> с <code>cubic-bezier(0.68, -0.55, 0.27, 1.55)</code>.`,"rubberBand.title":`Резинка`,"rubberBand.desc":`Keyframes-<strong>резинка</strong>: модалка растягивается по X, сжимается по Y и постепенно успокаивается.`,"heartbeat.title":`Сердцебиение`,"heartbeat.desc":`<strong>Сердцебиение</strong> — модалка бьётся дважды с мягким масштабом и замирает.`,"jello.title":`Желе`,"jello.desc":`<strong>Желейное покачивание</strong> — затухающий скос по обеим осям.`,"zoomRotate.title":`Зум с вращением`,"zoomRotate.desc":`<strong>Зум с вращением</strong>! Модалка идёт от <code>scale(0) rotate(45deg)</code> к <code>scale(1) rotate(0deg)</code>.`,"zoomCorner.title":`Зум из угла`,"zoomCorner.desc":`Модалка <strong>зумится из левого верхнего угла</strong> — комбинация <code>scale(0)</code> и <code>translate(-100%, -100%)</code>.`,"rotateDownLeft.title":`Поворот из левого нижнего`,"rotateDownLeft.desc":`Модалка <strong>влетает с поворотом из левого нижнего угла</strong> через <code>rotate(-90deg) translateY(100%)</code>.`,"rotateDownRight.title":`Поворот из правого нижнего`,"rotateDownRight.desc":`Зеркало — <strong>поворот из правого нижнего угла</strong>.`,"diagonal.title":`Диагональ слева сверху`,"diagonal.desc":`<strong>Диагональное скольжение слева сверху</strong>! Модалка едет из <code>translate3d(-200%, -200%, 0) rotate(-45deg)</code> в центр.`,"diagonalTopRight.title":`Диагональ справа сверху`,"diagonalTopRight.desc":`<strong>Диагональное скольжение справа сверху</strong>! Модалка едет из <code>translate3d(200%, -200%, 0) rotate(-45deg)</code> в центр.`,"diagonalBottomLeft.title":`Диагональ слева снизу`,"diagonalBottomLeft.desc":`<strong>Диагональное скольжение слева снизу</strong>! Модалка едет из <code>translate3d(-200%, -200%, 0) rotate(45deg)</code> в центр.`,"diagonalBottomRight.title":`Диагональ справа снизу`,"diagonalBottomRight.desc":`<strong>Диагональное скольжение справа снизу</strong>! Модалка едет из <code>translate3d(200%, 200%, 0) rotate(45deg)</code> в центр.`,"origami.title":`Оригами Л → П`,"origami.desc":`<strong>Диагональное разворачивание слева</strong>! Модалка раскрывается из <code>rotate(-90deg) scale(0.3) skewX(20deg)</code> в центр.`,"origamiRight.title":`Оригами П → Л`,"origamiRight.desc":`<strong>Диагональное разворачивание справа</strong>! Модалка раскрывается из <code>rotate(90deg) scale(0.3) skewX(-20deg)</code> в центр.`,"skewFade.title":`Скос + проявление`,"skewFade.desc":`Модалка входит <strong>под скосом 40°</strong> и в полмасштаба, затем выпрямляется и проявляется.`,"lightSpeed.title":`Скорость света`,"lightSpeed.desc":`<strong>Вход на скорости света</strong> — модалка влетает справа с сильным <code>skewX(-30deg)</code>.`,"bounce.title":`Отскок`,"bounce.desc":`<strong>Отскок</strong>! Модалка появляется с анимацией <code>bounceIn</code> длительностью 0.8s.`,"bounceDown.title":`Отскок сверху`,"bounceDown.desc":`Keyframes-<strong>отскок сверху</strong> — модалка падает, перелетает точку и успокаивается.`,"bounceUp.title":`Отскок снизу`,"bounceUp.desc":`Keyframes-<strong>отскок снизу</strong> — зеркало «Отскока сверху».`,"perspective.title":`3D`,"perspective.desc":`Эффект <strong>глубины</strong>! Модалка приходит издалека <code>translateZ(-300px) rotateX(30deg)</code> в центр.`,"convex.title":`Выпуклость`,"convex.desc":`Эффект <strong>выпуклого раздувания</strong>! Модалка начинается как маленький круглый пузырь и <strong>надувается</strong> как шарик до финальной формы с рельефным эффектом.`,"flipX.title":`Флип X`,"flipX.desc":`Модалка переворачивается вокруг оси X через <code>rotateX(180deg)</code>.`,"flipYS.title":`Флип Y → Масштаб`,"flipYS.desc":`Комбинирует <code>rotateY(180deg)</code> и <code>scale(0.3)</code> для динамичного эффекта. Флип идёт <strong>слева направо</strong>.`,"flipYSReverse.title":`Флип Y ← Масштаб`,"flipYSReverse.desc":`Комбинирует <code>rotateY(-180deg)</code> и <code>scale(0.3)</code>. Флип идёт <strong>справа налево</strong>.`,"flipMix.title":`Двойной флип`,"flipMix.desc":`<strong>Двойной флип</strong>! Модалка переворачивается по обеим осям через <code>rotateX(180deg) rotateY(180deg) scale(0.3)</code>.`,"unfoldBottom.title":`Разворот вниз`,"unfoldBottom.desc":`Модалка <strong>разворачивается вертикально</strong> через <code>scaleY(0)</code> от верхнего края — визуально разворачивается вниз.`,"unfoldUp.title":`Разворот вверх`,"unfoldUp.desc":`Модалка <strong>раскрывается снизу вверх</strong>, петля на <code>transform-origin: bottom center</code>.`,"unfoldHorizontal.title":`Горизонтальное разворачивание`,"unfoldHorizontal.desc":`Модалка <strong>разворачивается горизонтально</strong> через <code>scaleX(0)</code> от левого края.`,"blurIn.title":`Размытие в фокус`,"blurIn.desc":`Модалка <strong>проявляется из размытия</strong> — старт с <code>blur(20px)</code> и <code>scale(1.2)</code>, финиш — резкость.`,"howto.title":`Как подключить эффект`,"howto.how.title":`Как это работает`,"howto.how.text":`Эффект — это чистый CSS. JS нужен только чтобы переключать класс <code>open</code> на оверлее. Добавили класс — браузер проиграл анимацию открытия. Сняли — проиграл закрытие.`,"howto.connect.title":`Как подключить`,"howto.connect.li1":`Откройте карточку нужного эффекта.`,"howto.connect.li2":`Нажмите Copy в правом верхнем углу кодового блока.`,"howto.connect.li3":`Вставьте скопированный CSS в свой файл стилей.`,"howto.connect.li4":`В HTML сделайте обёртку <code>.overlay</code> с классом эффекта, а внутри — <code>.modal</code> с контентом.`,"howto.connect.li5":`В JS переключайте класс <code>open</code> на обёртке.`,"howto.markup.title":`Разметка`,"howto.markup.text":`Внешний блок — <code>.overlay</code> плюс класс выбранного эффекта, например <code>overlay-spring</code>. Внутри — <code>.modal</code> с любым содержимым. Кнопки открытия и закрытия — обычные <code>&lt;button&gt;</code> с id.`,"howto.open.title":`Открытие и закрытие`,"howto.open.text":`Всё взаимодействие — это один класс <code>open</code> на оверлее:`,"howto.open.li1":`Открыть — <code>overlay.classList.add('open')</code>.`,"howto.open.li2":`Закрыть — <code>overlay.classList.remove('open')</code>.`,"howto.open.li3":`Клик по фону — обработчик на <code>overlay</code> проверяет <code>event.target === overlay</code> и снимает класс.`,"howto.open.li4":`Клавиша Escape — обработчик на <code>document</code> проверяет <code>event.key === 'Escape'</code> и снимает класс.`,"howto.code.title":`Что в коде карточки`,"howto.code.text":`CSS в карточке самодостаточен: в нём есть и базовые стили оверлея (позиционирование, центрирование, показ/скрытие), и сам эффект. Скопировали — вставили — работает. Ничего дополнительно искать не нужно.`,"howto.know.title":`Полезно знать`,"howto.know.li1":`Эффект работает и на не-модальных блоках: правил <code>.overlay-*</code> достаточно.`,"howto.know.li2":`Класс <code>open</code> можно вешать не только на клик — на hover, на скролл, на <code>IntersectionObserver</code>.`,"howto.know.li3":`Несколько модалок с разными эффектами уживаются на одной странице: классы <code>.overlay-*</code> не конфликтуют.`,"howto.know.li4":`При <code>prefers-reduced-motion: reduce</code> анимации отключаются автоматически.`}},g=m,_=()=>{let e=h[g];document.querySelectorAll(`[data-i18n]`).forEach(t=>{let n=t.dataset.i18n;if(!n)return;let r=e[n];r!==void 0&&(t.innerHTML=r)});let t=g===`en`?`ru`:`en`,n=g===`en`?`Switch to English`:`Переключить на русский`;document.querySelectorAll(`.lang-switcher`).forEach(e=>{e.textContent=t.toUpperCase(),e.setAttribute(`aria-label`,n)}),document.documentElement.lang=g},v=e=>{if(p.includes(e)){g=e;try{localStorage.setItem(f,e)}catch{}_()}},y=()=>{v(g===`en`?`ru`:`en`)},b={init:()=>{let e=null;try{e=localStorage.getItem(f)}catch{}if(e&&p.includes(e))g=e;else{let e=(navigator.language||m).slice(0,2).toLowerCase();g=p.includes(e)?e:m}_(),document.addEventListener(`click`,e=>{e.target.closest(`.lang-switcher`)&&y()})},getLang:()=>g,setLang:v,toggle:y};for(let e of document.querySelectorAll(`.overlay`))e.removeAttribute(`hidden`);b.init();var x=[],S=(e,t={})=>{try{x.push(new d(e,t))}catch(e){console.warn(e.message)}};for(let[t,n]of Object.entries(e))S(t,n);S(`Howto`);var C=`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`;document.addEventListener(`keydown`,e=>{let t=x.find(e=>e.isOpen);if(!t)return;if(e.key===`Escape`){e.preventDefault(),t.close();return}if(e.key!==`Tab`)return;let n=[...t.root.querySelectorAll(C)];if(!n.length)return;let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())});