<template>
  <div class="container">
    <span v-html="$t('footer.designed')" />
    <span v-html="$t('footer.with')" />
    <span v-html="$t('footer.by')" />
    <span v-html="$t(`footer.while[${this.random}]`)" />
  </div>
</template>

<script>
export default {
  computed: {
    random() {
      return Math.floor(Math.random() * 20);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1vh;
}

.container::before {
  content: ".  .  .  .";
  background: linear-gradient(
    to right,
    var(--theme-primary-bright),
    var(--theme-primary-dark),
    var(--theme-secondary-dark),
    var(--theme-secondary-bright)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 4vh 0;
}

.container > span {
  font-style: italic;
  font-size: 0.8em;
  color: var(--font-gray-color);
}
</style>
