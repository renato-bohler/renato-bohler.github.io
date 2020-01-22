<template>
  <div class="scroll-hint">V</div>
</template>

<style scoped>
.scroll-hint {
  position: absolute;
  align-self: center;
  bottom: 10vh;
  font-size: 3vmin;
  transition: 0.5s ease;
  animation: bounce 2s infinite, fade-in-bottom 0.5s ease 5s backwards;
  -webkit-animation: bounce 2s infinite, fade-in-bottom 0.5s ease 5s backwards;
}

@media screen and (max-width: 767px) {
  .scroll-hint {
    font-size: 20vmin !important;
  }
}
</style>
