<template>
  <div class="border" />
</template>

<style scoped>
.border {
  background: linear-gradient(
    to right,
    var(--theme-primary-bright),
    var(--theme-secondary-bright),
    var(--theme-primary-bright),
    var(--theme-secondary-bright),
    var(--theme-primary-bright),
    var(--theme-secondary-bright),
    var(--theme-primary-bright),
    var(--theme-secondary-bright)
  );
  background-size: 150% 150%;
  animation: gradient-horizontal 5s ease infinite;
  -webkit-animation: gradient-horizontal 5s ease infinite;
  height: 3px;
  z-index: 103;
}
</style>
