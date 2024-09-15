export default (
  className = '',
  containerStyle = '',
  marqueeStyle = '',
) => `<div
  class="marquee-container ${className}"
  style="${containerStyle}"
>
  <div class="marquee" style="${marqueeStyle}">
    <slot name="items"></slot>
    <slot name="overlay"></slot>
  </div>
</div>`
