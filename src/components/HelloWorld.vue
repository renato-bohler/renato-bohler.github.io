<template>
  <div class="hello">
    <h1>{{ $t("home.title") }}</h1>
    <p>{{ $t("home.message") }}</p>
    <p v-html="$t('home.version', { version })" />
  </div>
</template>

<script>
import { version } from "../../package.json";

export default {
  name: "HelloWorld",
  data: () => ({
    version
  })
};
</script>

<style scoped>
p {
  font-style: italic;
}
</style>
