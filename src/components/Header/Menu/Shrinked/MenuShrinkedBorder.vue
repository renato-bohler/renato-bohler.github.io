<template>
  <div class="border" />
</template>

<style scoped>
.border {
  background: linear-gradient(
    to right,
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright),
    var(--gradient-primary-bright),
    var(--gradient-secondary-bright)
  );
  background-size: 150% 150%;
  animation: gradient-horizontal 5s ease infinite;
  -webkit-animation: gradient-horizontal 5s ease infinite;
  height: 3px;
  z-index: 103;
}
</style>
