<template>
  <div class="container">
    <button
      v-for="language in languages"
      :key="language.title"
      @click="changeLocale(language.locale)"
      v-tooltip.bottom="language.title"
    >
      <Flag :iso="language.flag" />
    </button>
  </div>
</template>

<script>
import Flag from "@/components/Flag";
import { languages } from "@/plugins/i18n.js";

export default {
  data: () => ({ languages }),
  components: { Flag },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$moment.locale(locale);
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
