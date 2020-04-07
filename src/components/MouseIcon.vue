<template>
  <span class="scroll-icon">
    <span class="scroll-icon__wheel-outer">
      <span class="scroll-icon__wheel-inner"></span>
    </span>
  </span>
</template>

<style lang="scss">
@import "../assets/styles/variables";
@keyframes scroll_1 {
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-0.6em); }
  50%  { transform: translateY(0); }
  75%  { transform: translateY(0.6em); }
  100% { transform: translateY(0); }
}

.scroll-icon {
  display: inline-block;
  position: relative;
  height: 3em;
  width: 1.8em;
  border: 2px solid rgba(255, 255, 255, .3);
  border-radius: 0.8em;
}

.scroll-icon__wheel-outer {
  display: block;
  position: absolute;
  left: 50%;
  top: .6em;
  height: 1em;
  width: .3em;
  margin-left: -.15em;
  border-radius: .4em;
  overflow: hidden;
}

.scroll-icon__wheel-inner {
  display: block;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  background: $conceptho-primary-color;
  animation: scroll_1 2.75s ease-in-out infinite;
}
</style>
