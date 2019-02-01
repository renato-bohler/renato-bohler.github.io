<template>
  <div class="container">
    <button
      v-for="language in languages"
      :key="language.title"
      @click="changeLocale(language.locale)"
    >
      <flag :iso="language.flag" v-bind:squared="false" />
    </button>
  </div>
</template>

<script>
import i18n, { languages } from "@/plugins/i18n.js";

export default {
  data: () => ({ languages }),
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
      this.$toasted.show(this.$t("toast.languageChanged"));
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 2vh;
  animation: fade-in-bottom 1s ease 2s backwards;
}

.container > button {
  font-size: 3vmin;
  background: none;
  border: none;
  outline: none;
  margin: 5px;
}

@media screen and (max-width: 767px) {
  .container > button {
    font-size: 6vmin;
  }
}
</style>
